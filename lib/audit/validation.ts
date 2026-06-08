import {
  AUDIT_TIMELINES,
  REQUESTED_SYSTEMS,
  type AuditSource,
  type AuditSubmissionInput,
  type AuditSubmissionRequest,
  type AuditTimeline,
  type RequestedSystem,
} from "./types";

type ValidationSuccess = {
  ok: true;
  input: AuditSubmissionInput;
  turnstileToken?: string;
};

type ValidationFailure = {
  ok: false;
  message: string;
  fieldErrors: Record<string, string>;
};

export type AuditValidationResult = ValidationSuccess | ValidationFailure;

const REQUEST_KEYS = new Set([
  "fullName",
  "email",
  "phone",
  "companyName",
  "primaryUrl",
  "additionalUrls",
  "industry",
  "teamSize",
  "requestedSystems",
  "challenge",
  "desiredOutcome",
  "timeline",
  "budgetRange",
  "referralDetail",
  "consent",
  "source",
  "turnstileToken",
]);

const SOURCE_KEYS = new Set([
  "landingPath",
  "referrer",
  "serviceSlug",
  "workSlug",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmContent",
  "utmTerm",
]);

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function optionalText(value: unknown, maxLength: number): string | undefined {
  const valueText = text(value);
  if (!valueText) return undefined;
  return valueText.slice(0, maxLength);
}

function isHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeUrl(value: string): string {
  const parsed = new URL(value);
  parsed.hash = "";
  return parsed.toString();
}

function validateSource(value: unknown, errors: Record<string, string>): AuditSource {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.source = "Source context is required.";
    return { landingPath: "/" };
  }

  const sourceRecord = value as Record<string, unknown>;
  const unknownKey = Object.keys(sourceRecord).find((key) => !SOURCE_KEYS.has(key));
  if (unknownKey) errors.source = "Unexpected source context was provided.";

  const landingPath = text(sourceRecord.landingPath).slice(0, 500);
  if (!landingPath.startsWith("/")) {
    errors.source = "Landing path must be a site-relative path.";
  }

  return {
    landingPath: landingPath || "/",
    referrer: optionalText(sourceRecord.referrer, 500),
    serviceSlug: optionalText(sourceRecord.serviceSlug, 80),
    workSlug: optionalText(sourceRecord.workSlug, 120),
    utmSource: optionalText(sourceRecord.utmSource, 120),
    utmMedium: optionalText(sourceRecord.utmMedium, 120),
    utmCampaign: optionalText(sourceRecord.utmCampaign, 160),
    utmContent: optionalText(sourceRecord.utmContent, 160),
    utmTerm: optionalText(sourceRecord.utmTerm, 160),
  };
}

export function validateAuditSubmission(value: unknown): AuditValidationResult {
  const errors: Record<string, string> = {};

  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {
      ok: false,
      message: "The submission payload is invalid.",
      fieldErrors: { form: "The submission payload is invalid." },
    };
  }

  const record = value as Record<string, unknown>;
  const unknownKey = Object.keys(record).find((key) => !REQUEST_KEYS.has(key));
  if (unknownKey) {
    errors.form = "Unexpected submission data was provided.";
  }

  const fullName = text(record.fullName);
  const email = text(record.email).toLowerCase();
  const phone = optionalText(record.phone, 80);
  const companyName = text(record.companyName);
  const primaryUrlRaw = text(record.primaryUrl);
  const industry = optionalText(record.industry, 120);
  const teamSize = optionalText(record.teamSize, 80);
  const challenge = text(record.challenge);
  const desiredOutcome = text(record.desiredOutcome);
  const budgetRange = optionalText(record.budgetRange, 120);
  const referralDetail = optionalText(record.referralDetail, 500);
  const turnstileToken = optionalText(record.turnstileToken, 2048);

  if (!fullName) errors.fullName = "Enter your full name.";
  else if (fullName.length > 120) errors.fullName = "Keep your name under 120 characters.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid work email.";
  } else if (email.length > 254) {
    errors.email = "Keep the email address under 254 characters.";
  }

  if (!companyName) errors.companyName = "Enter your company or business name.";
  else if (companyName.length > 120) {
    errors.companyName = "Keep the company name under 120 characters.";
  }

  if (!isHttpUrl(primaryUrlRaw)) {
    errors.primaryUrl = "Enter a complete http or https URL.";
  }

  const additionalRaw = Array.isArray(record.additionalUrls) ? record.additionalUrls : [];
  if (!Array.isArray(record.additionalUrls)) {
    errors.additionalUrls = "Additional URLs must be provided as a list.";
  } else if (additionalRaw.length > 5) {
    errors.additionalUrls = "Add no more than five additional URLs.";
  }

  const additionalUrls: string[] = [];
  additionalRaw.forEach((item) => {
    const itemText = text(item);
    if (!itemText) return;
    if (!isHttpUrl(itemText)) {
      errors.additionalUrls = "Every additional URL must use http or https.";
      return;
    }
    additionalUrls.push(normalizeUrl(itemText));
  });

  const requestedRaw = Array.isArray(record.requestedSystems)
    ? record.requestedSystems
    : [];
  const requestedSystems = Array.from(new Set(requestedRaw.filter(
    (item): item is RequestedSystem =>
      typeof item === "string" &&
      REQUESTED_SYSTEMS.includes(item as RequestedSystem),
  )));
  if (requestedSystems.length === 0) {
    errors.requestedSystems = "Select at least one system.";
  } else if (requestedSystems.length !== requestedRaw.length) {
    errors.requestedSystems = "One or more selected systems are invalid.";
  }

  if (challenge.length < 30) {
    errors.challenge = "Describe the current challenge in at least 30 characters.";
  } else if (challenge.length > 2000) {
    errors.challenge = "Keep the current challenge under 2,000 characters.";
  }

  if (desiredOutcome.length < 30) {
    errors.desiredOutcome = "Describe the desired outcome in at least 30 characters.";
  } else if (desiredOutcome.length > 2000) {
    errors.desiredOutcome = "Keep the desired outcome under 2,000 characters.";
  }

  const timelineRaw = text(record.timeline);
  const timeline =
    timelineRaw && AUDIT_TIMELINES.includes(timelineRaw as AuditTimeline)
      ? (timelineRaw as AuditTimeline)
      : undefined;
  if (timelineRaw && !timeline) errors.timeline = "Select a valid timeline.";

  if (record.consent !== true) {
    errors.consent = "Consent is required before submitting.";
  }

  const source = validateSource(record.source, errors);

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Review the highlighted fields and try again.",
      fieldErrors: errors,
    };
  }

  return {
    ok: true,
    input: {
      fullName,
      email,
      phone,
      companyName,
      primaryUrl: normalizeUrl(primaryUrlRaw),
      additionalUrls,
      industry,
      teamSize,
      requestedSystems,
      challenge,
      desiredOutcome,
      timeline,
      budgetRange,
      referralDetail,
      consent: true,
      source,
    },
    turnstileToken,
  };
}

export function normalizeCompanyName(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function normalizePrimaryUrl(value: string): string {
  const parsed = new URL(value);
  parsed.hash = "";
  parsed.search = "";
  parsed.hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
  parsed.pathname = parsed.pathname.replace(/\/+$/, "") || "/";
  return `${parsed.hostname}${parsed.pathname}`.toLowerCase();
}

export function isAuditSubmissionRequest(value: unknown): value is AuditSubmissionRequest {
  return validateAuditSubmission(value).ok;
}
