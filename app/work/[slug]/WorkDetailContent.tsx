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

      <main id="top" className="pt-[110px]">
        <div className={wrap}>
          <nav className="mb-10 flex flex-wrap items-center justify-between gap-4" aria-label="Breadcrumb">
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

          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
            <div>
              <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                {content.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border-strong px-3 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                  {classification}
                </span>
                <span className="rounded-full border border-border-strong px-3 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                  {work.quarter}
                </span>
                <ul className="flex flex-wrap gap-2" aria-label={copy.focusAreasAria}>
                  {work.tags.map((tag) => <li key={tag} className={tagSm}>{tag}</li>)}
                </ul>
              </div>
              <p className="mt-8 max-w-[52ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                {content.summary}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={`/?work=${work.slug}#audit`}
                  data-analytics-event="work_audit_clicked"
                  data-analytics-slug={work.slug}
                  className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-[14px] text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
                >
                  {copy.ctaAudit}<span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`mailto:hello@limitedlabs.co?subject=${encodeURIComponent(`Question about ${work.title}`)}`}
                  className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-[14px] text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:scale-105 hover:border-ink"
                >
                  hello@limitedlabs.co
                </a>
              </div>
            </div>

            <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border lg:sticky lg:top-[120px] ${work.gradientClass}`} aria-hidden="true">
              <div className="absolute inset-0 grid place-items-center p-10">
                <div className="w-[min(320px,58%)] max-w-full">
                  <WorkArt variant={work.art} width="100%" className="h-auto opacity-95 drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(64px,8vw,120px)] grid grid-cols-1 gap-5 md:grid-cols-2">
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-4`}>01 / {copy.labels.challenge}</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{content.challenge}</p>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-4`}>02 / {copy.labels.approach}</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{content.approach}</p>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)] md:col-span-2" data-reveal>
              <h2 className={`${eyebrow} mb-5`}>03 / {copy.labels.deliverables}</h2>
              <ul className="grid grid-cols-1 gap-3 min-[620px]:grid-cols-2">
                {content.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)] md:col-span-2" data-reveal>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h2 className={`${eyebrow} mb-5`}>04 / {copy.labels.systems}</h2>
                  <ul className="flex flex-col gap-3">
                    {content.systems.map((item) => (
                      <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                        <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[18px] border border-dashed border-border-strong bg-page p-[clamp(20px,2.8vw,28px)]">
                  <h2 className={`${eyebrow} mb-4`}>05 / {copy.labels.results}</h2>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{content.results}</p>
                </div>
              </div>
            </section>
          </div>

          <nav className="my-[clamp(48px,6vw,90px)] flex flex-col gap-4 rounded-[22px] border border-border-strong px-[clamp(20px,3vw,32px)] py-[clamp(20px,3vw,28px)] min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between" aria-label={copy.adjacentAria} data-reveal>
            <div className="text-sm text-ink-muted">{copy.adjacentBody}</div>
            <div className="flex flex-wrap gap-3">
              {prev && prevContent ? (
                <Link href={`/work/${prev.slug}`} className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-ink">
                  {copy.previous}<span className="text-ink-faint">{prevContent.title}</span>
                </Link>
              ) : null}
              {next && nextContent ? (
                <Link href={`/work/${next.slug}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-page">
                  {copy.next}<span className="text-page/90">{nextContent.title}</span>
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
