"use client";

import { useId, useMemo, useState } from "react";

import WorkCardLink from "./WorkCardLink";
import { useLanguage } from "../i18n/LanguageProvider";
import { WORK_ITEMS, type WorkItem } from "../work/workData";

export type WorkCategory = "all" | "brand" | "software" | "marketing" | "automation";

const CATEGORY_IDS: WorkCategory[] = ["all", "brand", "software", "marketing", "automation"];

/** Tag substrings matched per category (case-insensitive). */
const CATEGORY_MATCHERS: Record<Exclude<WorkCategory, "all">, string[]> = {
  brand: ["branding", "identity", "brand", "visual"],
  software: ["ui/ux", "next.js", "supabase", "pwa", "product", "tooling", "mvp"],
  marketing: ["meta ads", "marketing", "strategy", "campaign", "content"],
  automation: ["automation", "ai"],
};

function tagMatchesCategory(tag: string, category: Exclude<WorkCategory, "all">): boolean {
  const normalized = tag.toLowerCase();
  return CATEGORY_MATCHERS[category].some(
    (matcher) => normalized.includes(matcher) || matcher.includes(normalized),
  );
}

function workMatchesCategory(work: WorkItem, category: WorkCategory): boolean {
  if (category === "all") return true;
  return work.tags.some((tag) => tagMatchesCategory(tag, category));
}

type WorksTabsProps = {
  tagRow: string;
  tagSm: string;
};

export default function WorksTabs({ tagRow, tagSm }: WorksTabsProps) {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all");
  const panelId = useId();
  const { t } = useLanguage();
  const categories = CATEGORY_IDS.map((id) => ({ id, label: t.work.categories[id] }));

  const filteredItems = useMemo(
    () => WORK_ITEMS.filter((work) => workMatchesCategory(work, activeCategory)),
    [activeCategory],
  );

  return (
    <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
      <div
        role="tablist"
        aria-label={t.work.filterAria}
        className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`${panelId}-tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`${panelId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveCategory(category.id)}
              className={[
                "min-h-11 shrink-0 rounded-full border px-3 py-[7px] font-mono text-[10.5px] font-medium uppercase tracking-[0.06em] transition-[border-color,background-color,color] duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-page",
                isActive
                  ? "border-ink bg-ink text-page"
                  : "border-border-strong text-ink-muted hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${activeCategory}`}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredItems.map((work) => (
          <WorkCardLink key={work.slug} work={work} tagRow={tagRow} tagSm={tagSm} layout="grid" />
        ))}
      </div>
    </div>
  );
}
