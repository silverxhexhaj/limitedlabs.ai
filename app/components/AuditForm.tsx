"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import {
  AUDIT_TIMELINES,
  REQUESTED_SYSTEMS,
  type AuditSource,
  type AuditSubmissionRequest,
  type CreateAuditSubmissionResult,
  type RequestedSystem,
} from "@/lib/audit/types";
import { validateAuditSubmission } from "@/lib/audit/validation";
import { useLanguage } from "../i18n/LanguageProvider";
import { WORK_ITEMS } from "../work/workData";

type FormState = Omit<AuditSubmissionRequest, "consent" | "source"> & {
  consent: boolean;
};

type TurnstileApi = {
  render(
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "auto";
    },
  ): string;
  reset(widgetId: string): void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const ATTRIBUTION_KEY = "limitedlabs-audit-source";

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  primaryUrl: "",
  additionalUrls: [],
  industry: "",
  teamSize: "",
  requestedSystems: [],
  challenge: "",
  desiredOutcome: "",
  timeline: undefined,
  budgetRange: "",
  referralDetail: "",
  consent: false,
  turnstileToken: "",
};

function readSource(): AuditSource {
  const params = new URLSearchParams(window.location.search);
  let stored: AuditSource | null = null;
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || "null") as AuditSource | null;
  } catch {
    stored = null;
  }

  const source: AuditSource = stored ?? {
    landingPath: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || undefined,
  };

  const service = params.get("service");
  const work = params.get("work");
  if (service) source.serviceSlug = service.slice(0, 80);
  if (work) source.workSlug = work.slice(0, 120);

  const utmMap = {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmContent: "utm_content",
    utmTerm: "utm_term",
  } as const;
  Object.entries(utmMap).forEach(([target, query]) => {
    const value = params.get(query);
    if (value) source[target as keyof typeof utmMap] = value.slice(0, 160);
  });

  sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(source));
  return source;
}

function requestedSystemForContext(source: AuditSource): RequestedSystem | undefined {
  if (
    source.serviceSlug &&
    REQUESTED_SYSTEMS.includes(source.serviceSlug as RequestedSystem)
  ) {
    return source.serviceSlug as RequestedSystem;
  }
  if (!source.workSlug) return undefined;
  return WORK_ITEMS.find((item) => item.slug === source.workSlug)?.primarySystem;
}

function contextMessage(
  source: AuditSource,
  labels: Record<RequestedSystem, string>,
  copy: {
    contextPreselected: string;
    contextWork: string;
    contextDefault: string;
  },
): string {
  const requested = requestedSystemForContext(source);
  if (requested && requested !== "not-sure") {
    return copy.contextPreselected.replace("{system}", labels[requested]);
  }
  if (source.workSlug) {
    return copy.contextWork;
  }
  return copy.contextDefault;
}

function TurnstileWidget({
  onToken,
  error,
  notConfiguredMessage,
}: {
  onToken: (token: string) => void;
  error?: string;
  notConfiguredMessage: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;
    let cancelled = false;

    const render = () => {
      if (cancelled || !containerRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
        theme: "auto",
      });
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/"]',
    );
    if (existing) {
      if (window.turnstile) render();
      else existing.addEventListener("load", render, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.addEventListener("load", render, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      existing?.removeEventListener("load", render);
    };
  }, [onToken, siteKey]);

  if (!siteKey) {
    return process.env.NODE_ENV === "production" ? (
      <p className="text-sm text-red-400">{notConfiguredMessage}</p>
    ) : null;
  }

  return (
    <div>
      <div ref={containerRef} />
      {error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-border-strong bg-page px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-2 text-sm text-red-400">
      {message}
    </p>
  ) : null;
}

export default function AuditForm() {
  const { locale, t } = useLanguage();
  const copy = t.audit.form;
  const systemLabels = copy.systemLabels as Record<RequestedSystem, string>;
  const timelineLabels = copy.timelineOptions as Record<
    (typeof AUDIT_TIMELINES)[number],
    string
  >;
  const displayError = (field: string, message?: string) => {
    if (!message || locale === "en") return message;
    return copy.validationErrors[field as keyof typeof copy.validationErrors] ?? message;
  };
  const [source] = useState<AuditSource>(() =>
    typeof window === "undefined" ? { landingPath: "/" } : readSource(),
  );
  const contextualSystem = requestedSystemForContext(source);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(() => ({
    ...EMPTY_FORM,
    requestedSystems: contextualSystem ? [contextualSystem] : [],
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ submissionId: string; duplicate: boolean }>();
  const [started, setStarted] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const idempotencyKeyRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (Object.keys(errors).length > 0) errorSummaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    if (result) confirmationRef.current?.focus();
  }, [result]);

  const sourceContext = useMemo(
    () => source.serviceSlug || source.workSlug || "homepage",
    [source],
  );

  const markStarted = () => {
    if (started) return;
    setStarted(true);
    trackEvent("audit_form_started", {
      page_path: window.location.pathname,
      source_context: sourceContext,
    });
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    markStarted();
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const toggleSystem = (system: RequestedSystem) => {
    const selected = form.requestedSystems.includes(system);
    update(
      "requestedSystems",
      selected
        ? form.requestedSystems.filter((item) => item !== system)
        : [...form.requestedSystems, system],
    );
  };

  const stepErrors = (targetStep: number) => {
    const validation = validateAuditSubmission({
      ...form,
      consent: form.consent,
      source,
    });
    if (validation.ok) return {};

    const fieldsByStep: Record<number, string[]> = {
      1: ["fullName", "email", "companyName", "primaryUrl", "additionalUrls"],
      2: ["requestedSystems", "challenge", "desiredOutcome"],
      3: ["timeline", "consent", "turnstile", "form"],
    };
    return Object.fromEntries(
      Object.entries(validation.fieldErrors).filter(([field]) =>
        fieldsByStep[targetStep].includes(field),
      ),
    );
  };

  const nextStep = () => {
    const nextErrors = stepErrors(step);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStep((current) => Math.min(3, current + 1));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validation = validateAuditSubmission({
      ...form,
      consent: form.consent,
      source,
    });
    if (!validation.ok) {
      setErrors(validation.fieldErrors);
      trackEvent("audit_form_error", {
        page_path: window.location.pathname,
        error_type: "validation",
      });
      const firstField = Object.keys(validation.fieldErrors)[0];
      if (["fullName", "email", "companyName", "primaryUrl", "additionalUrls"].includes(firstField)) {
        setStep(1);
      } else if (["requestedSystems", "challenge", "desiredOutcome"].includes(firstField)) {
        setStep(2);
      }
      return;
    }

    setSubmitting(true);
    setErrors({});
    idempotencyKeyRef.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/audit-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKeyRef.current,
        },
        body: JSON.stringify({
          ...validation.input,
          turnstileToken: form.turnstileToken || undefined,
        }),
      });
      const responseResult = (await response.json()) as CreateAuditSubmissionResult;
      if (!responseResult.ok) {
        setErrors(responseResult.fieldErrors || { form: responseResult.message });
        trackEvent("audit_form_error", {
          page_path: window.location.pathname,
          error_type: responseResult.code,
        });
        return;
      }

      setResult(responseResult);
      trackEvent("audit_form_submitted", {
        page_path: window.location.pathname,
        requested_systems: validation.input.requestedSystems.join(","),
        duplicate: responseResult.duplicate,
      });
    } catch {
      setErrors({
        form: copy.networkError,
      });
      trackEvent("audit_form_error", {
        page_path: window.location.pathname,
        error_type: "network",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        className="rounded-[24px] border border-border-strong bg-surface p-[clamp(24px,4vw,44px)] outline-none"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
          {copy.confirmBadge}
        </span>
        <h3 className="mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-none tracking-[-0.035em]">
          {copy.confirmHeading}
        </h3>
        <p className="mt-5 max-w-[52ch] text-ink-muted">
          {copy.confirmBody}
        </p>
        <p className="mt-6 rounded-xl border border-border bg-page px-4 py-3 font-mono text-sm text-ink">
          {result.submissionId}
        </p>
        {result.duplicate ? (
          <p className="mt-4 text-sm text-ink-muted">
            {copy.confirmDuplicate}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      onFocus={markStarted}
      className="rounded-[24px] border border-border-strong bg-surface p-[clamp(20px,3.5vw,40px)]"
      noValidate
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
            {copy.stepWord} {step} {copy.ofThree}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            {contextMessage(source, systemLabels, copy)}
          </p>
        </div>
        <div
          className="flex gap-2"
          aria-label={`${copy.stepWord} ${step} ${copy.ofThree}`}
        >
          {[1, 2, 3].map((item) => (
            <span
              key={item}
              className={`h-1.5 w-10 rounded-full ${item <= step ? "bg-ink" : "bg-border-strong"}`}
            />
          ))}
        </div>
      </div>

      {Object.keys(errors).length > 0 ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-xl border border-red-400/40 bg-red-400/5 p-4 outline-none"
        >
          <p className="font-semibold text-ink">{copy.errorSummary}</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-red-300">
            {Array.from(
              new Set(
                Object.entries(errors).map(([field, message]) =>
                  displayError(field, message),
                ),
              ),
            ).map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {step === 1 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold tracking-[-0.02em]">
            {copy.step1Legend}
          </legend>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              {copy.fullName}
              <input
                value={form.fullName}
                onChange={(event) => update("fullName", event.target.value)}
                className={inputClass}
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              <FieldError id="fullName-error" message={displayError("fullName", errors.fullName)} />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.email}
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className={inputClass}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <FieldError id="email-error" message={displayError("email", errors.email)} />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.company}
              <input
                value={form.companyName}
                onChange={(event) => update("companyName", event.target.value)}
                className={inputClass}
                autoComplete="organization"
                aria-invalid={Boolean(errors.companyName)}
                aria-describedby={errors.companyName ? "companyName-error" : undefined}
              />
              <FieldError id="companyName-error" message={displayError("companyName", errors.companyName)} />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.primaryUrl}
              <input
                type="url"
                value={form.primaryUrl}
                onChange={(event) => update("primaryUrl", event.target.value)}
                className={inputClass}
                placeholder="https://"
                aria-invalid={Boolean(errors.primaryUrl)}
                aria-describedby={errors.primaryUrl ? "primaryUrl-error" : undefined}
              />
              <FieldError id="primaryUrl-error" message={displayError("primaryUrl", errors.primaryUrl)} />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.phone}
              <input
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                className={inputClass}
                autoComplete="tel"
              />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.industry}
              <input
                value={form.industry}
                onChange={(event) => update("industry", event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.teamSize}
              <select
                value={form.teamSize}
                onChange={(event) => update("teamSize", event.target.value)}
                className={inputClass}
              >
                <option value="">{copy.selectPlaceholder}</option>
                <option value="1">{copy.teamSizeOptions.solo}</option>
                <option value="2-5">{copy.teamSizeOptions.small}</option>
                <option value="6-20">{copy.teamSizeOptions.medium}</option>
                <option value="21-50">{copy.teamSizeOptions.large}</option>
                <option value="51+">{copy.teamSizeOptions.xlarge}</option>
              </select>
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.additionalUrls}
              <input
                value={form.additionalUrls.join(", ")}
                onChange={(event) =>
                  update(
                    "additionalUrls",
                    event.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean)
                      .slice(0, 5),
                  )
                }
                className={inputClass}
                placeholder={copy.additionalUrlsPlaceholder}
                aria-invalid={Boolean(errors.additionalUrls)}
                aria-describedby={errors.additionalUrls ? "additionalUrls-error" : undefined}
              />
              <FieldError id="additionalUrls-error" message={displayError("additionalUrls", errors.additionalUrls)} />
            </label>
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold tracking-[-0.02em]">
            {copy.step2Legend}
          </legend>
          <div className="mt-6">
            <span className="text-sm font-medium text-ink">{copy.requestedSystems}</span>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {REQUESTED_SYSTEMS.map((system) => (
                <label
                  key={system}
                  className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border-strong bg-page px-4 py-3 text-sm text-ink"
                >
                  <input
                    type="checkbox"
                    checked={form.requestedSystems.includes(system)}
                    onChange={() => toggleSystem(system)}
                    className="size-4 accent-[var(--ink)]"
                  />
                  {systemLabels[system]}
                </label>
              ))}
            </div>
            <FieldError id="requestedSystems-error" message={displayError("requestedSystems", errors.requestedSystems)} />
          </div>
          <label className="mt-6 block text-sm font-medium text-ink">
            {copy.challenge}
            <textarea
              value={form.challenge}
              onChange={(event) => update("challenge", event.target.value)}
              className={`${inputClass} min-h-32 resize-y`}
              maxLength={2000}
              aria-invalid={Boolean(errors.challenge)}
              aria-describedby="challenge-help challenge-error"
            />
            <span id="challenge-help" className="mt-2 block text-xs text-ink-faint">
              {copy.challengeHelp}
            </span>
            <FieldError id="challenge-error" message={displayError("challenge", errors.challenge)} />
          </label>
          <label className="mt-6 block text-sm font-medium text-ink">
            {copy.desiredOutcome}
            <textarea
              value={form.desiredOutcome}
              onChange={(event) => update("desiredOutcome", event.target.value)}
              className={`${inputClass} min-h-32 resize-y`}
              maxLength={2000}
              aria-invalid={Boolean(errors.desiredOutcome)}
              aria-describedby="desiredOutcome-help desiredOutcome-error"
            />
            <span id="desiredOutcome-help" className="mt-2 block text-xs text-ink-faint">
              {copy.desiredOutcomeHelp}
            </span>
            <FieldError id="desiredOutcome-error" message={displayError("desiredOutcome", errors.desiredOutcome)} />
          </label>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold tracking-[-0.02em]">
            {copy.step3Legend}
          </legend>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              {copy.timeline}
              <select
                value={form.timeline || ""}
                onChange={(event) =>
                  update(
                    "timeline",
                    (event.target.value || undefined) as FormState["timeline"],
                  )
                }
                className={inputClass}
              >
                <option value="">{copy.selectPlaceholder}</option>
                {AUDIT_TIMELINES.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timelineLabels[timeline]}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-ink">
              {copy.budget}
              <select
                value={form.budgetRange}
                onChange={(event) => update("budgetRange", event.target.value)}
                className={inputClass}
              >
                <option value="">{copy.budgetOptions.none}</option>
                <option value="under-2000">{copy.budgetOptions["under-2000"]}</option>
                <option value="2000-5000">{copy.budgetOptions["2000-5000"]}</option>
                <option value="5000-10000">{copy.budgetOptions["5000-10000"]}</option>
                <option value="10000-plus">{copy.budgetOptions["10000-plus"]}</option>
              </select>
            </label>
          </div>
          <label className="mt-6 block text-sm font-medium text-ink">
            {copy.referral}
            <input
              value={form.referralDetail}
              onChange={(event) => update("referralDetail", event.target.value)}
              className={inputClass}
            />
          </label>
          <div className="mt-6 rounded-xl border border-border bg-page p-4 text-sm text-ink-muted">
            <p>
              {copy.summaryLine
                .replace("{company}", form.companyName || copy.summaryCompanyFallback)
                .replace(
                  "{systems}",
                  form.requestedSystems.map((item) => systemLabels[item]).join(", ") ||
                    copy.summarySystemsFallback,
                )}
            </p>
            <p className="mt-2">{copy.summaryDisclaimer}</p>
          </div>
          <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update("consent", event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-[var(--ink)]"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span>
              {copy.consentBefore}
              <Link href="/privacy" className="underline underline-offset-4">
                {copy.consentLink}
              </Link>
              {copy.consentAfter}
            </span>
          </label>
          <FieldError id="consent-error" message={displayError("consent", errors.consent)} />
          <div className="mt-6">
            <TurnstileWidget
              onToken={(token) => update("turnstileToken", token)}
              error={displayError("turnstile", errors.turnstile)}
              notConfiguredMessage={copy.verificationNotConfigured}
            />
          </div>
        </fieldset>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setStep((current) => current - 1);
            }}
            className="min-h-12 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            {copy.back}
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="min-h-12 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-page transition-transform hover:scale-[1.02]"
          >
            {copy.continue}
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="min-h-12 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-page transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
          >
            {submitting ? copy.submitting : copy.submit}
          </button>
        )}
      </div>
    </form>
  );
}
