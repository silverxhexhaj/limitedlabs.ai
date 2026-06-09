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
const serviceArt =
  "service-art relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-border p-8 [&>span]:flex [&>span]:h-full [&>span]:w-full [&>span]:max-w-full [&>span]:items-center [&>span]:justify-center";

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

          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
            <div>
              <div className={`${eyebrow} mb-[18px]`}>{service.index} / {content.name}</div>
              <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                {content.tagline}
              </h1>
              <ul className={`${tagRow} mt-6`} aria-label={copy.focusAreasAria}>
                {service.tags.map((tag) => <li key={tag} className={tagSm}>{tag}</li>)}
              </ul>
              <p className="mt-8 max-w-[52ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                {content.summary}
              </p>
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

            <div className={`${serviceArt} lg:sticky lg:top-[120px]`}>
              <Image
                src={service.illustration}
                alt={`${content.name} service illustration`}
                width={1254}
                height={1254}
                className="service-illustration-img h-auto max-h-full w-auto max-w-full object-contain object-center"
                sizes="(max-width: 768px) 70vw, 400px"
                priority
              />
              <span className="service-ticks" aria-hidden="true"><span /></span>
            </div>
          </div>

          <section className="mt-[clamp(64px,8vw,120px)]" data-reveal>
            <h2 className={`${eyebrow} mb-8`}>{copy.whatsIncluded}</h2>
            <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2">
              {content.includes.map((item) => (
                <article key={item.title} className="rounded-[22px] border border-border bg-surface p-[clamp(20px,2.8vw,28px)] transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong">
                  <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-1 gap-5 md:grid-cols-2">
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-5`}>{copy.whoItsFor}</h2>
              <ul className="flex flex-col gap-3">
                {content.whoItsFor.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[22px] border border-dashed border-border-strong bg-page p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-5`}>{copy.deliverables}</h2>
              <ul className="flex flex-col gap-3">
                {content.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-[clamp(48px,6vw,80px)]" data-reveal>
            <h2 className={`${eyebrow} mb-8`}>{copy.howWeWork}</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {content.process.map((step, index) => (
                <article key={step.title} className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]">
                  <span className={`${eyebrow} mb-4 block`}>{service.process[index]?.step}</span>
                  <h3 className="mb-3 font-display text-xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
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

          <nav className="my-[clamp(48px,6vw,90px)] flex flex-col gap-4 rounded-[22px] border border-border-strong px-[clamp(20px,3vw,32px)] py-[clamp(20px,3vw,28px)] min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between" aria-label={copy.adjacentAria} data-reveal>
            <div className="text-sm text-ink-muted">
              {copy.adjacentBefore}
              <Link href={auditHref} className="text-ink underline decoration-1 underline-offset-4">{copy.adjacentLink}</Link>
              {copy.adjacentAfter}
            </div>
            <div className="grid grid-cols-1 gap-3 min-[480px]:flex min-[480px]:flex-wrap">
              {prev && prevContent ? (
                <Link href={`/services/${prev.slug}`} className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-center text-sm font-medium text-ink">
                  {copy.previous}<span className="text-ink-faint">{prevContent.name}</span>
                </Link>
              ) : null}
              {next && nextContent ? (
                <Link href={`/services/${next.slug}`} className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-page">
                  {copy.next}<span className="text-page/90">{nextContent.name}</span>
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
