import { WORKS_A } from "./data/works-a";
import { WORKS_B } from "./data/works-b";
import { WORKS_C } from "./data/works-c";
import { WORKS_D } from "./data/works-d";
import { WORKS_E } from "./data/works-e";
import type { ShowcaseGroup, ShowcaseWork } from "./types";

/** The full 25-work showcase collection, in presentation order. */
export const SHOWCASE_WORKS: ShowcaseWork[] = [
  ...WORKS_A,
  ...WORKS_B,
  ...WORKS_C,
  ...WORKS_D,
  ...WORKS_E,
];

export const SHOWCASE_GROUP_LABELS: Record<ShowcaseGroup, string> = {
  software: "Software & Product",
  "ai-automation": "AI & Automation",
  commerce: "Commerce",
  brand: "Brand & Identity",
  marketing: "Marketing Engines",
  experience: "Experience & 3D",
};

/** Short label for the service a work maps to (matches services routes). */
export const SERVICE_SLUG_LABELS: Record<ShowcaseWork["serviceSlug"], string> = {
  brand: "Brand",
  software: "Software",
  "marketing-engines": "Marketing Engines",
  automation: "AI Automation",
  "product-lab": "Product Lab",
};

export function getShowcaseBySlug(slug: string): ShowcaseWork | undefined {
  return SHOWCASE_WORKS.find((w) => w.slug === slug);
}

export function getShowcaseIndex(slug: string): number {
  return SHOWCASE_WORKS.findIndex((w) => w.slug === slug);
}

export type { ShowcaseWork, ShowcaseGroup } from "./types";
