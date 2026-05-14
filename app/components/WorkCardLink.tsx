import Link from "next/link";

import WorkArt from "../work/WorkArt";
import type { WorkItem } from "../work/workData";

type WorkCardLinkProps = {
  work: WorkItem;
  tagRow: string;
  tagSm: string;
};

export default function WorkCardLink({ work, tagRow, tagSm }: WorkCardLinkProps) {
  return (
    <Link
      href={`/work/${work.slug}`}
      scroll
      className="group/card min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-page"
      data-reveal
    >
      <article className="h-full">
        <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-none transition-[border-color,box-shadow] duration-300 group-hover/card:border-border-strong group-hover/card:shadow-[0_28px_80px_rgba(0,0,0,0.18)] dark:group-hover/card:shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
          <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
            {work.quarter}
          </span>
          <div
            className={`pointer-events-none absolute inset-0 grid place-items-center p-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover/card:scale-[1.02] ${work.gradientClass}`}
          >
            <WorkArt variant={work.art} width={work.artWidthPercent} />
          </div>
          <span className="pointer-events-none absolute bottom-3.5 right-3.5 z-[1] inline-flex items-center gap-2 rounded-full border border-white/25 bg-[rgba(10,10,10,0.45)] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-cream backdrop-blur-md opacity-95 transition-opacity duration-200 group-hover/card:opacity-100">
            View details
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="opacity-90">
              <path
                d="M3 13 L13 3 M7 3 H13 V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-200 group-hover/card:decoration-ink [font-variation-settings:'opsz'_36]">
          {work.title}
        </h4>
        <ul className={tagRow}>
          {work.tags.map((t) => (
            <li key={t} className={tagSm}>
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}
