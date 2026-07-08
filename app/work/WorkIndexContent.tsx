"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SHOWCASE_GROUP_LABELS, SHOWCASE_WORKS } from "./showcase/index";
import ShowcaseCard from "./showcase/ShowcaseCard";
import { SHOWCASE_GROUPS, type ShowcaseGroup } from "./showcase/types";

const eyebrow =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";

type Filter = "all" | ShowcaseGroup;

const FILTERS: Filter[] = ["all", ...SHOWCASE_GROUPS];

function filterLabel(f: Filter): string {
  return f === "all" ? "All work" : SHOWCASE_GROUP_LABELS[f];
}

export default function WorkIndexContent() {
  const [active, setActive] = useState<Filter>("all");

  const items = useMemo(
    () => (active === "all" ? SHOWCASE_WORKS : SHOWCASE_WORKS.filter((w) => w.group === active)),
    [active],
  );

  return (
    <div>
      {/* Header */}
      <header className="mx-auto w-full max-w-[var(--max)] px-[var(--gutter)] pt-[clamp(96px,14vw,168px)]">
        <p className={eyebrow}>The Limited Labs Showcase · 25 works</p>
        <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(44px,8.5vw,118px)] font-bold leading-[0.9] tracking-[-0.05em] text-ink">
          Twenty-five systems, built to <span className="font-serif italic text-accent">prove</span> a point.
        </h1>
        <p className="mt-7 max-w-[62ch] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-ink-muted">
          One studio can take an idea from brand to product to marketing to growth. Each work below is an original concept —
          its own business, visual world, interface, and campaign — designed end to end to show what a complete digital
          systems lab can do.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/guide"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink hover:bg-accent hover:text-[color:var(--accent-ink)]"
          >
            How this was made <span aria-hidden>→</span>
          </Link>
          <div className="flex items-center gap-6">
            {[
              { v: "25", l: "Original works" },
              { v: "6", l: "Disciplines" },
              { v: "12", l: "Interface styles" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-[22px] font-bold leading-none tracking-[-0.03em] text-ink">{s.v}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-ink-faint">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="mx-auto w-full max-w-[var(--max)] px-[var(--gutter)] pt-[clamp(40px,6vw,72px)]">
        <div
          role="tablist"
          aria-label="Filter works by discipline"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={[
                  "min-h-11 shrink-0 rounded-full border px-4 py-[7px] font-mono text-[10.5px] font-medium uppercase tracking-[0.06em] transition-[border-color,background-color,color] duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-page",
                  isActive
                    ? "border-ink bg-ink text-page"
                    : "border-border-strong text-ink-muted hover:border-ink hover:text-ink",
                ].join(" ")}
              >
                {filterLabel(f)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto w-full max-w-[var(--max)] px-[var(--gutter)] pb-[clamp(80px,12vw,160px)] pt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((work, i) => (
            <ShowcaseCard key={work.slug} work={work} number={SHOWCASE_WORKS.indexOf(work) + 1} priority={i < 3} />
          ))}
        </div>
        {items.length === 0 ? (
          <p className="py-16 text-center text-ink-muted">No works in this discipline yet.</p>
        ) : null}
      </div>
    </div>
  );
}
