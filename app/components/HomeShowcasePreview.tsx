"use client";

import Link from "next/link";

import { SHOWCASE_WORKS } from "../work/showcase/index";
import ShowcaseCard from "../work/showcase/ShowcaseCard";

/** The full 25-work collection, covers and all, shown right on the homepage. */
export default function HomeShowcasePreview() {
  return (
    <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SHOWCASE_WORKS.map((work, i) => (
          <ShowcaseCard key={work.slug} work={work} number={i + 1} priority={i < 3} />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-start gap-4 border-t border-border pt-8 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between">
        <p className="max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
          All twenty-five works, with filters by discipline and the full case study behind each one.
        </p>
        <Link
          href="/work"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
        >
          Explore the full showcase <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
