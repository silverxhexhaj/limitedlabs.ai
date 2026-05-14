import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";
import WorkArt from "../WorkArt";
import { WORK_ITEMS, getWorkBySlug } from "../workData";

const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";

const eyebrowCore =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return WORK_ITEMS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) {
    return { title: "Work — Limited Labs" };
  }
  return {
    title: `${item.title} — Limited Labs`,
    description: item.detail.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const idx = WORK_ITEMS.findIndex((w) => w.slug === slug);
  const prev = idx > 0 ? WORK_ITEMS[idx - 1] : null;
  const next = idx < WORK_ITEMS.length - 1 ? WORK_ITEMS[idx + 1] : null;

  return (
    <>
      <SiteHeader />

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
              Back to work
            </Link>
            <span className={eyebrowCore}>Case outline</span>
          </nav>

          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
            <div>
              <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                {work.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border-strong px-3 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                  {work.quarter}
                </span>
                <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
                  {work.tags.map((t) => (
                    <li key={t} className={tagSm}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 max-w-[52ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">{work.detail.summary}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-[14px] text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
                >
                  Start something similar
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8 H 13 M 9 4 L 13 8 L 9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="mailto:hello@limitedlabs.co?subject=Loved%20this%20case%20%E2%80%94%20"
                  className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-[14px] text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:scale-105 hover:border-ink"
                >
                  hello@limitedlabs.co
                </a>
              </div>
            </div>

            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border lg:sticky lg:top-[120px] ${work.gradientClass}`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 grid place-items-center p-10">
                <div className="w-[min(320px,58%)] max-w-full">
                  <WorkArt variant={work.art} width="100%" className="h-auto opacity-95 drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[clamp(64px,8vw,120px)] grid grid-cols-1 gap-5 md:grid-cols-2">
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrowCore} mb-4`}>01 / Challenge</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{work.detail.challenge}</p>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrowCore} mb-4`}>02 / Approach</h2>
              <p className="text-[clamp(14.5px,1.1vw,16px)] leading-relaxed text-ink-muted">{work.detail.approach}</p>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)] md:col-span-2" data-reveal>
              <h2 className={`${eyebrowCore} mb-5`}>03 / Deliverables</h2>
              <ul className="grid grid-cols-1 gap-3 min-[620px]:grid-cols-2">
                {work.detail.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)] md:col-span-2" data-reveal>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h2 className={`${eyebrowCore} mb-5`}>04 / Systems</h2>
                  <ul className="flex flex-col gap-3">
                    {work.detail.systems.map((s) => (
                      <li key={s} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                        <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[18px] border border-dashed border-border-strong bg-page p-[clamp(20px,2.8vw,28px)]">
                  <h2 className={`${eyebrowCore} mb-4`}>05 / Results</h2>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{work.detail.results}</p>
                </div>
              </div>
            </section>
          </div>

          <nav
            className="my-[clamp(48px,6vw,90px)] flex flex-col gap-4 rounded-[22px] border border-border-strong bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(245,244,239,0.015)_14px,rgba(245,244,239,0.015)_15px)] px-[clamp(20px,3vw,32px)] py-[clamp(20px,3vw,28px)] min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between"
            aria-label="Adjacent projects"
            data-reveal
          >
            <div className="text-sm text-ink-muted">
              Swap details any time — it lives in <span className="font-mono text-[11px] text-ink">app/work/workData.ts</span>.
            </div>
            <div className="flex flex-wrap gap-3">
              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:-translate-x-0.5 hover:border-ink-faint"
                >
                  Previous
                  <span className="text-ink-faint">{prev.title}</span>
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-page transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-accent"
                >
                  Next
                  <span className="text-page/90">{next.title}</span>
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
