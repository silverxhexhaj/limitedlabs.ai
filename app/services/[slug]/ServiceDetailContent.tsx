"use client";

import Image from "next/image";
import Link from "next/link";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import WorkCardLink from "../../components/WorkCardLink";
import { getServiceContent } from "../../i18n/content/serviceContent";
import { useLanguage } from "../../i18n/LanguageProvider";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";
import type { WorkItem } from "../../work/workData";
import type { ServiceItem } from "../servicesData";

const tagRow = "flex flex-wrap gap-2";
const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";
const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";
type Props = {
  service: ServiceItem;
  prev: ServiceItem | null;
  next: ServiceItem | null;
  relatedWork: WorkItem[];
  auditHref: string;
};

export default function ServiceDetailContent({
  service,
  prev,
  next,
  relatedWork,
  auditHref,
}: Props) {
  const { locale, t } = useLanguage();
  const content = getServiceContent(service, locale);
  const prevContent = prev ? getServiceContent(prev, locale) : null;
  const nextContent = next ? getServiceContent(next, locale) : null;
  const copy = t.serviceDetail;

  return (
    <>
      <SiteHeader />
      <span hidden data-page-view-event="service_interest_viewed" data-page-view-slug={service.slug} />

      <main id="top" className="pt-[92px] sm:pt-[110px]">
        <div className={wrap}>
          <nav className="mb-8 flex flex-col items-start gap-3 min-[480px]:mb-10 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between" aria-label="Breadcrumb">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 L 5 8 L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copy.back}
            </Link>
            <span className={eyebrow}>
              {copy.serviceWord} / {service.index}
              {service.invitationOnly ? ` · ${copy.byInvitation}` : ""}
            </span>
          </nav>

          <div className="border-b border-border pb-[clamp(48px,6vw,80px)]">
            <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
              <div className={`${eyebrow} mb-[18px]`}>{service.index} / {content.name}</div>
              <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                {content.tagline}
              </h1>
              <p className="mt-7 max-w-[52ch] text-[clamp(16px,1.3vw,19px)] leading-relaxed text-ink-muted">
                {content.summary}
              </p>
              <ul className={`${tagRow} mt-6`} aria-label={copy.focusAreasAria}>
                {service.tags.map((tag) => <li key={tag} className={tagSm}>{tag}</li>)}
              </ul>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:mt-10 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Link
                  href={auditHref}
                  data-analytics-event="service_audit_clicked"
                  data-analytics-slug={service.slug}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-[14px] text-center text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
                >
                  {copy.ctaAudit}<span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`mailto:hello@limitedlabs.co?subject=${encodeURIComponent(`Discovery call request - ${service.name}`)}`}
                  data-analytics-event="discovery_call_clicked"
                  data-analytics-placement={`service-${service.slug}`}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border-strong px-7 py-[14px] text-center text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:scale-105 hover:border-ink"
                >
                  {copy.ctaCall}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border bg-[#05090b]">
              {service.heroVideo ? (
                <video
                  src={service.heroVideo}
                  poster={service.heroImage}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                />
              ) : (
                <Image
                  src={service.heroImage}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              )}
            </div>
            </div>
          </div>

          <section className="mt-[clamp(48px,6vw,88px)]" data-reveal>
            <h2 className={`${eyebrow} mb-2`}>{copy.whatsIncluded}</h2>
            <ol className="divide-y divide-border">
              {content.includes.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 py-5 sm:grid-cols-[56px_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-x-6"
                >
                  <span className={eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="col-start-2 text-[14.5px] leading-relaxed text-ink-muted sm:col-start-3">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-[clamp(48px,6vw,88px)] border-t border-border pt-[clamp(40px,5vw,64px)]" data-reveal>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <h2 className={`${eyebrow} mb-6`}>{copy.whoItsFor}</h2>
                <ul className="flex flex-col gap-3">
                  {content.whoItsFor.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                      <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={`${eyebrow} mb-6`}>{copy.deliverables}</h2>
                <ul className="flex flex-col gap-3">
                  {content.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                      <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-[clamp(48px,6vw,88px)] border-t border-border pt-[clamp(40px,5vw,64px)]" data-reveal>
            <h2 className={`${eyebrow} mb-10`}>{copy.howWeWork}</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {content.process.map((step, index) => (
                <article key={step.title} className="border-t-2 border-accent pt-5">
                  <span className={`${eyebrow} mb-3 block`}>{service.process[index]?.step}</span>
                  <h3 className="mb-2 font-display text-xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-[clamp(64px,8vw,120px)]" data-reveal>
            <div className="mb-10">
              <h2 className={`${eyebrow} mb-3`}>{copy.relatedWork}</h2>
              <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-ink-muted">{copy.relatedWorkBody}</p>
            </div>
            {service.invitationOnly ? (
              <div className="rounded-[20px] border border-dashed border-border-strong p-10 text-center">
                <span className={`${eyebrow} mb-1 inline-block`}>{copy.selectiveEngagement}</span>
                <p className="mx-auto mt-3 max-w-[50ch] text-[15px] text-ink-muted">
                  {copy.invitationBefore}
                  <Link href={auditHref} className="text-ink underline decoration-1 underline-offset-4">{copy.invitationLink}</Link>
                  {copy.invitationAfter}
                </p>
              </div>
            ) : relatedWork.length ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedWork.map((work) => <WorkCardLink key={work.slug} work={work} tagRow={tagRow} tagSm={tagSm} layout="grid" />)}
              </div>
            ) : (
              <div className="rounded-[20px] border border-dashed border-border-strong p-10 text-center">
                <p className="text-[15px] text-ink-muted">{copy.noRelated}</p>
              </div>
            )}
          </section>

          <section
            className="mt-[clamp(64px,8vw,120px)] border-t border-border py-[clamp(56px,7vw,96px)] text-center"
            data-reveal
          >
            <p className="mx-auto max-w-[30ch] font-display text-[clamp(30px,4vw,52px)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
              {t.contact.heading}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Link
                href={auditHref}
                data-analytics-event="service_audit_clicked"
                data-analytics-slug={service.slug}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-[14px] text-center text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
              >
                {copy.ctaAudit}<span aria-hidden="true">→</span>
              </Link>
              <a
                href={`mailto:hello@limitedlabs.co?subject=${encodeURIComponent(`Discovery call request - ${service.name}`)}`}
                data-analytics-event="discovery_call_clicked"
                data-analytics-placement={`service-${service.slug}-footer`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-[14px] text-center text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {copy.ctaCall}
              </a>
            </div>
          </section>

          <nav
            className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"
            aria-label={copy.adjacentAria}
            data-reveal
          >
            {prev && prevContent ? (
              <Link
                href={`/services/${prev.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
              >
                <span aria-hidden="true">←</span>{copy.previous} / {prevContent.name}
              </Link>
            ) : <span />}
            {next && nextContent ? (
              <Link
                href={`/services/${next.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
              >
                {copy.next} / {nextContent.name}<span aria-hidden="true">→</span>
              </Link>
            ) : <span />}
          </nav>
        </div>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
