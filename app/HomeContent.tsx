"use client";

import Link from "next/link";

import AnimatedHeading from "./components/AnimatedHeading";
import AuditForm from "./components/AuditForm";
import SiteFooter from "./components/SiteFooter";
import HeroProjectsField from "./components/HeroProjectsField";
import HomeShowcasePreview from "./components/HomeShowcasePreview";
import SiteHeader from "./components/SiteHeader";
import { getServiceContent } from "./i18n/content/serviceContent";
import { useLanguage } from "./i18n/LanguageProvider";
import LandingInteractions from "./LandingInteractions";
import { SERVICE_ITEMS } from "./services/servicesData";
import { wrap } from "./site";

const HERO_ACCENTS: Record<string, string[]> = {
  en: ["look", "sell", "build", "work"],
  sq: ["duken", "shesin", "ndërtojnë", "punojnë"],
};

const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted";
// Section label: brighter mono with a short lime leading rule (the wibify "[0X] LABEL" tell).
const eyebrowLabel =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";

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
        <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-[clamp(64px,9vw,132px)] pt-[clamp(112px,16vw,200px)]">
          <HeroProjectsField />
          {/* Legibility scrim: dims the field behind the headline, leaves the
              right/edge tiles vivid. Pointer-transparent so tiles stay clickable. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] max-sm:hidden"
            style={{
              background:
                "linear-gradient(100deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 74%, transparent) 34%, color-mix(in srgb, var(--bg) 30%, transparent) 58%, transparent 82%)",
            }}
          />
          {/* On phones there's no hover to attract tiles, so keep them as a
              quiet backdrop and let the copy dominate. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] sm:hidden"
            style={{ background: "color-mix(in srgb, var(--bg) 46%, transparent)" }}
          />
          {/* pointer-events-none lets the cursor reach the floating tiles behind
              the text; interactive children (the CTAs) re-enable pointer events. */}
          <div className={`${wrap} relative z-10 pointer-events-none [&_a]:pointer-events-auto`}>
            <div className="max-w-[1120px]">
              <p className={`${eyebrow} anim`}>{t.hero.eyebrow}</p>
              <AnimatedHeading
                as="h1"
                immediate
                delay={0.15}
                text={t.hero.heading}
                accentWords={HERO_ACCENTS[locale] ?? HERO_ACCENTS.en}
                className="mt-6 max-w-[15ch] font-display text-[clamp(42px,8.5vw,118px)] font-bold leading-[0.91] tracking-[-0.05em] text-ink sm:mt-7"
              />
              <p className="anim d2 mt-10 max-w-[54ch] text-[clamp(17px,1.5vw,21px)] leading-relaxed text-ink-muted">
                {t.hero.lead}
              </p>
              <div className="anim d3 mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-10">
                <a
                  href="#audit"
                  data-magnetic
                  data-cursor-label="Audit"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {t.hero.ctaPrimary}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#services"
                  data-magnetic
                  data-cursor-label="Explore"
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
                <p className={eyebrowLabel}>{t.problem.eyebrow}</p>
                <AnimatedHeading
                  as="h2"
                  accentLast={1}
                  text={t.problem.heading}
                  className="mt-4 max-w-[12ch] font-display text-[clamp(38px,5vw,72px)] font-bold leading-[0.96] tracking-[-0.04em]"
                />
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
              <p className={eyebrowLabel}>{t.services.eyebrow}</p>
              <AnimatedHeading
                as="h2"
                id="services-heading"
                accentLast={2}
                text={t.services.heading}
                className="mt-4 font-display text-[clamp(42px,7vw,96px)] font-bold leading-[0.94] tracking-[-0.045em]"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {coreServices.map((service) => {
                const content = getServiceContent(service, locale);
                const displayName =
                  service.category === "automation" ? t.services.aiAutomationLabel : content.name;
                return (
                  <article
                    key={service.slug}
                    className="group relative grid min-h-0 grid-rows-[auto_1fr_auto] overflow-hidden rounded-[24px] border border-border bg-surface p-[clamp(20px,3vw,36px)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)] sm:min-h-[420px]"
                    data-reveal
                  >
                    <p className={eyebrow}>
                      {service.index} / {displayName}
                    </p>
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
                      data-cursor-label="View"
                      className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-border-strong px-5 py-3 text-center font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-colors hover:border-ink hover:bg-accent hover:text-[color:var(--accent-ink)] min-[480px]:w-fit sm:mt-10"
                    >
                      {t.services.explorePrefix}
                      {displayName}
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
                  <p className={eyebrowLabel}>{t.services.productLab.eyebrow}</p>
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
                <p className={eyebrowLabel}>{t.why.eyebrow}</p>
                <AnimatedHeading
                  as="h2"
                  id="why-heading"
                  accentLast={1}
                  text={t.why.heading}
                  className="mt-4 max-w-[11ch] font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                />
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
              <p className={eyebrowLabel}>{t.work.eyebrow}</p>
              <AnimatedHeading
                as="h2"
                id="work-heading"
                accentLast={1}
                text={t.work.heading}
                className="mt-4 font-display text-[clamp(42px,7vw,92px)] font-bold leading-[0.94] tracking-[-0.045em]"
              />
            </div>
          </div>
          <HomeShowcasePreview />
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,144px)]"
          id="proof"
          aria-labelledby="proof-heading"
        >
          <div className={wrap}>
            <div className="mb-12 max-w-[780px]">
              <p className={eyebrowLabel}>{t.proof.eyebrow}</p>
              <AnimatedHeading
                as="h2"
                id="proof-heading"
                accentLast={1}
                text={t.proof.heading}
                className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {t.proof.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,34px)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-border-strong"
                  data-reveal
                >
                  <span className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
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
                <p className={eyebrowLabel}>{t.audit.eyebrow}</p>
                <AnimatedHeading
                  as="h2"
                  id="audit-heading"
                  accentLast={1}
                  text={t.audit.heading}
                  className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                />
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
              <p className={eyebrowLabel}>{t.faq.eyebrow}</p>
              <AnimatedHeading
                as="h2"
                id="faq-heading"
                accentLast={1}
                text={t.faq.heading}
                className="mt-4 font-display text-[clamp(42px,6vw,80px)] font-bold leading-[0.95] tracking-[-0.04em]"
              />
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
          className="section-grain relative overflow-hidden py-[clamp(80px,10vw,144px)]"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="glow-radial absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2" />
          <div className={`${wrap} relative z-[1] text-center`}>
            <p className={eyebrowLabel}>{t.contact.eyebrow}</p>
            <AnimatedHeading
              as="h2"
              id="contact-heading"
              accentLast={2}
              text={t.contact.heading}
              className="mx-auto mt-4 max-w-[13ch] font-display text-[clamp(46px,8vw,108px)] font-bold leading-[0.92] tracking-[-0.05em]"
            />
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
