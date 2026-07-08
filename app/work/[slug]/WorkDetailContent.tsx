"use client";

import Link from "next/link";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getWorkContent } from "../../i18n/content/workContent";
import { useLanguage } from "../../i18n/LanguageProvider";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";
import WorkArt from "../WorkArt";
import type { WorkItem } from "../workData";

const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";
const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";

type Props = {
  work: WorkItem;
  prev: WorkItem | null;
  next: WorkItem | null;
};

export default function WorkDetailContent({ work, prev, next }: Props) {
  const { locale, t } = useLanguage();
  const content = getWorkContent(work, locale);
  const prevContent = prev ? getWorkContent(prev, locale) : null;
  const nextContent = next ? getWorkContent(next, locale) : null;
  const classification = t.workClassifications[work.classification];
  const copy = t.workDetail;

  return (
    <>
      <SiteHeader />
      <span
        hidden
        data-page-view-event="work_viewed"
        data-page-view-slug={work.slug}
        data-page-view-classification={work.classification}
      />

      <main id="top" className="pt-[92px] sm:pt-[110px]">
        <div className={wrap}>
          <nav className="mb-8 flex flex-col items-start gap-3 min-[480px]:mb-10 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between" aria-label="Breadcrumb">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 L 5 8 L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copy.back}
            </Link>
            <span className={eyebrow}>{classification}</span>
          </nav>

          <div className="border-b border-border pb-[clamp(48px,6vw,80px)]">
            <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
                <div className={`${eyebrow} mb-[18px]`}>
                  {classification} · {work.quarter}
                </div>
                <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                  {content.title}
                </h1>
                <p className="mt-7 max-w-[52ch] text-[clamp(16px,1.3vw,19px)] leading-relaxed text-ink-muted">
                  {content.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={copy.focusAreasAria}>
                  {work.tags.map((tag) => <li key={tag} className={tagSm}>{tag}</li>)}
                </ul>
                <div className="mt-8 flex flex-col gap-3 min-[480px]:mt-10 min-[480px]:flex-row min-[480px]:flex-wrap">
                  <Link
                    href={`/?work=${work.slug}#audit`}
                    data-analytics-event="work_audit_clicked"
                    data-analytics-slug={work.slug}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-[14px] text-center text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
                  >
                    {copy.ctaAudit}<span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href={`mailto:hello@limitedlabs.co?subject=${encodeURIComponent(`Question about ${work.title}`)}`}
                    className="inline-flex min-h-12 items-center justify-center gap-3 break-all rounded-full border border-border-strong px-7 py-[14px] text-center text-sm font-medium text-ink transition-colors hover:border-ink"
                  >
                    hello@limitedlabs.co
                  </a>
                </div>
              </div>

              <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border ${work.gradientClass}`} aria-hidden="true">
                <div className="absolute inset-0 grid place-items-center p-10">
                  <div className="w-[min(320px,58%)] max-w-full">
                    <WorkArt variant={work.art} width="100%" className="h-auto opacity-95 drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(48px,6vw,88px)] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14" data-reveal>
            <section>
              <h2 className={`${eyebrow} mb-4`}>01 / {copy.labels.challenge}</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{content.challenge}</p>
            </section>
            <section>
              <h2 className={`${eyebrow} mb-4`}>02 / {copy.labels.approach}</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{content.approach}</p>
            </section>
          </div>

          <div className="mt-[clamp(48px,6vw,88px)] grid grid-cols-1 gap-10 border-t border-border pt-[clamp(40px,5vw,64px)] md:grid-cols-2 md:gap-14" data-reveal>
            <section>
              <h2 className={`${eyebrow} mb-6`}>03 / {copy.labels.deliverables}</h2>
              <ul className="flex flex-col gap-3">
                {content.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className={`${eyebrow} mb-6`}>04 / {copy.labels.systems}</h2>
              <ul className="flex flex-col gap-3">
                {content.systems.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-[clamp(48px,6vw,88px)] border-t-2 border-accent pt-6" data-reveal>
            <h2 className={`${eyebrow} mb-4`}>05 / {copy.labels.results}</h2>
            <p className="max-w-[64ch] font-display text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.25] tracking-[-0.02em] text-ink">
              {content.results}
            </p>
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
                href={`/?work=${work.slug}#audit`}
                data-analytics-event="work_audit_clicked"
                data-analytics-slug={work.slug}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-[14px] text-center text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
              >
                {copy.ctaAudit}<span aria-hidden="true">→</span>
              </Link>
              <a
                href={`mailto:hello@limitedlabs.co?subject=${encodeURIComponent(`Question about ${work.title}`)}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-[14px] text-center text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                hello@limitedlabs.co
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
                href={`/work/${prev.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
              >
                <span aria-hidden="true">←</span>{copy.previous} / {prevContent.title}
              </Link>
            ) : <span />}
            {next && nextContent ? (
              <Link
                href={`/work/${next.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
              >
                {copy.next} / {nextContent.title}<span aria-hidden="true">→</span>
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
