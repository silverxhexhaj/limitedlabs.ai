"use client";

import Image from "next/image";
import Link from "next/link";

import AuditForm from "./components/AuditForm";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WorksTabs from "./components/WorksTabs";
import { getServiceContent } from "./i18n/content/serviceContent";
import { useLanguage } from "./i18n/LanguageProvider";
import LandingInteractions from "./LandingInteractions";
import { SERVICE_ITEMS } from "./services/servicesData";
import { wrap } from "./site";

const tagRow = "flex flex-wrap gap-2";
const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";
const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint";

const CORE_SERVICE_ORDER = ["brand", "marketing-engines", "software", "automation"];
const coreServices = CORE_SERVICE_ORDER.map((slug) =>
  SERVICE_ITEMS.find((service) => service.slug === slug),
).filter((service): service is NonNullable<typeof service> => Boolean(service));
const productLab = SERVICE_ITEMS.find((service) => service.slug === "product-lab");

export default function HomeContent() {
  const { locale, t } = useLanguage();

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="pb-[clamp(64px,9vw,132px)] pt-[clamp(112px,16vw,220px)]">
          <div className={wrap}>
            <div className="max-w-[1120px]">
              <p className={`${eyebrow} anim`}>{t.hero.eyebrow}</p>
              <h1 className="anim d1 mt-6 max-w-[14ch] font-display text-[clamp(42px,8.5vw,118px)] font-bold leading-[0.91] tracking-[-0.05em] text-ink [font-variation-settings:'opsz'_96] sm:mt-7">
                {t.hero.heading}
              </h1>
              <div className="anim d2 mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                <p className="max-w-[54ch] text-[clamp(17px,1.5vw,21px)] leading-relaxed text-ink-muted">
                  {t.hero.lead}
                </p>
                <div className="md:justify-self-end">
                  <p className="max-w-[42ch] border-l border-border-strong pl-5 text-sm leading-relaxed text-ink-muted">
                    {t.hero.note}
                  </p>
                </div>
              </div>
              <div className="anim d3 mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-10">
                <a
                  href="#audit"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-page transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {t.hero.ctaPrimary}
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border py-[clamp(72px,8vw,112px)]" id="context">
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className={eyebrow}>{t.problem.eyebrow}</p>
                <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(38px,5vw,72px)] font-bold leading-[0.96] tracking-[-0.04em]">
                  {t.problem.heading}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {t.problem.items.map((problem, index) => (
                  <article
                    key={problem.title}
                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-[20px] border border-border bg-surface p-5 min-[480px]:gap-5 sm:p-8"
                    data-reveal
                  >
                    <span className={eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.025em]">
                        {problem.title}
                      </h3>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted">
                        {problem.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,152px)]" id="services" aria-labelledby="services-heading">
          <div className={wrap}>
            <div className="mb-14 max-w-[780px]">
              <p className={eyebrow}>{t.services.eyebrow}</p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-[clamp(42px,7vw,96px)] font-bold leading-[0.94] tracking-[-0.045em]"
              >
                {t.services.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {coreServices.map((service) => {
                const content = getServiceContent(service, locale);
                const displayName =
                  service.category === "automation" ? t.services.aiAutomationLabel : content.name;
                return (
                  <article
                    key={service.slug}
                    className="group grid min-h-0 grid-rows-[auto_1fr_auto] overflow-hidden rounded-[24px] border border-border bg-surface p-[clamp(20px,3vw,36px)] transition-colors hover:border-border-strong sm:min-h-[420px]"
                    data-reveal
                  >
                    <div className="flex items-start justify-between gap-5">
                      <p className={eyebrow}>
                        {service.index} / {displayName}
                      </p>
                      <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-border bg-page p-2.5 sm:size-20 sm:p-3">
                        <Image
                          src={service.illustration}
                          alt=""
                          width={1254}
                          height={1254}
                          className="service-illustration-img h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-8 sm:mt-10">
                      <h3 className="max-w-[14ch] font-display text-[clamp(32px,4vw,54px)] font-bold leading-[0.96] tracking-[-0.04em]">
                        {content.tagline}
                      </h3>
                      <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-ink-muted">
                        {content.summary}
                      </p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-border-strong px-5 py-3 text-center font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-colors hover:border-ink min-[480px]:w-fit sm:mt-10"
                    >
                      {t.services.explorePrefix}
                      {displayName}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                );
              })}
            </div>

            {productLab ? (
              <div
                className="mt-5 flex flex-col gap-6 rounded-[22px] border border-dashed border-border-strong p-[clamp(24px,3vw,36px)] sm:flex-row sm:items-center sm:justify-between"
                data-reveal
              >
                <div>
                  <p className={eyebrow}>{t.services.productLab.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.025em]">
                    {t.services.productLab.title}
                  </h3>
                  <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-ink-muted">
                    {t.services.productLab.body}
                  </p>
                </div>
                <Link
                  href="/services/product-lab"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
                >
                  {t.services.productLab.cta}
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,144px)]"
          id="why"
          aria-labelledby="why-heading"
        >
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className={eyebrow}>{t.why.eyebrow}</p>
                <h2
                  id="why-heading"
                  className="mt-4 max-w-[11ch] font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                  {t.why.heading}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-border bg-border sm:grid-cols-2">
                {t.why.principles.map((principle, index) => (
                  <article key={principle.title} className="bg-page p-[clamp(24px,3vw,36px)]">
                    <span className={eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.025em]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,144px)]" id="work" aria-labelledby="work-heading">
          <div className={wrap}>
            <div className="mb-12 max-w-[780px]">
              <p className={eyebrow}>{t.work.eyebrow}</p>
              <h2
                id="work-heading"
                className="mt-4 font-display text-[clamp(42px,7vw,92px)] font-bold leading-[0.94] tracking-[-0.045em]"
              >
                {t.work.heading}
              </h2>
              <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
                {t.work.body}
              </p>
            </div>
          </div>
          <WorksTabs tagRow={tagRow} tagSm={tagSm} />
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,144px)]"
          id="proof"
          aria-labelledby="proof-heading"
        >
          <div className={wrap}>
            <div className="mb-12 max-w-[780px]">
              <p className={eyebrow}>{t.proof.eyebrow}</p>
              <h2
                id="proof-heading"
                className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
              >
                {t.proof.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {t.proof.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,34px)]"
                  data-reveal
                >
                  <span className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                    {item.classification}
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(80px,10vw,152px)]"
          id="audit"
          aria-labelledby="audit-heading"
        >
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className={eyebrow}>{t.audit.eyebrow}</p>
                <h2
                  id="audit-heading"
                  className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                  {t.audit.heading}
                </h2>
                <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
                  {t.audit.body}
                </p>
                <ol className="mt-8 space-y-5">
                  {t.audit.steps.map((item, index) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
                      <span className={`${eyebrow} mt-0.5`}>{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <AuditForm />
            </div>
          </div>
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,136px)]"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className={wrap}>
            <div className="mb-12 max-w-[720px]">
              <p className={eyebrow}>{t.faq.eyebrow}</p>
              <h2
                id="faq-heading"
                className="mt-4 font-display text-[clamp(42px,6vw,80px)] font-bold leading-[0.95] tracking-[-0.04em]"
              >
                {t.faq.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-border bg-border md:grid-cols-2">
              {t.faq.items.map(({ question, answer }) => (
                <article key={question} className="bg-page p-[clamp(24px,3vw,34px)]">
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(80px,10vw,144px)]"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className={`${wrap} text-center`}>
            <p className={eyebrow}>{t.contact.eyebrow}</p>
            <h2
              id="contact-heading"
              className="mx-auto mt-4 max-w-[13ch] font-display text-[clamp(46px,8vw,108px)] font-bold leading-[0.92] tracking-[-0.05em]"
            >
              {t.contact.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
              {t.contact.body}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <a
                href="mailto:hello@limitedlabs.co"
                data-analytics-event="email_clicked"
                data-analytics-placement="final-contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-page transition-transform hover:scale-[1.02]"
              >
                {t.contact.ctaEmail}
              </a>
              <a
                href="mailto:hello@limitedlabs.co?subject=Discovery%20call%20request%20-%20Limited%20Labs"
                data-analytics-event="discovery_call_clicked"
                data-analytics-placement="final-contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                {t.contact.ctaCall}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="grain-overlay" aria-hidden="true" />
      <LandingInteractions />
    </>
  );
}
