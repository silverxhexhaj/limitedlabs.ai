"use client";

import Link from "next/link";

import { SHOWCASE_GROUP_LABELS } from "./index";
import type { ShowcaseWork } from "./types";
import WorkScene from "./WorkScene";

type Props = {
  work: ShowcaseWork;
  /** 1-based position shown as the card index (00 padding applied). */
  number: number;
  /** Set for the first few above-the-fold cards to skip lazy-loading. */
  priority?: boolean;
};

/** Gallery card used on both the /work index and the homepage preview. */
export default function ShowcaseCard({ work, number, priority = false }: Props) {
  return (
    <Link
      href={`/work/${work.slug}`}
      data-reveal
      className="group/card block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-page"
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border transition-[border-color,box-shadow,transform] duration-300 group-hover/card:-translate-y-1 group-hover/card:border-border-strong group-hover/card:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.45)]">
          <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover/card:scale-[1.03]">
            <WorkScene work={work} variant="card" showImage priority={priority} />
          </div>
          <span className="pointer-events-none absolute right-3.5 top-3.5 grid size-8 place-items-center rounded-full border border-white/25 bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover/card:opacity-100">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 13 L13 3 M7 3 H13 V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="mt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
            {String(number).padStart(2, "0")} · {SHOWCASE_GROUP_LABELS[work.group]}
          </p>
          <h3 className="mt-1.5 font-display text-[22px] font-bold leading-[1.05] tracking-[-0.025em] text-ink underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-200 group-hover/card:decoration-ink">
            {work.name}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-snug text-ink-muted">{work.tagline}</p>
        </div>
      </article>
    </Link>
  );
}
