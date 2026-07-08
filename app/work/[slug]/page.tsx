import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WorkDetailContent from "./WorkDetailContent";
import ShowcaseDetailContent from "../showcase/ShowcaseDetailContent";
import { SHOWCASE_WORKS, getShowcaseBySlug, getShowcaseIndex } from "../showcase/index";
import { WORK_ITEMS, getWorkBySlug } from "../workData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...SHOWCASE_WORKS.map((w) => ({ slug: w.slug })),
    ...WORK_ITEMS.map((w) => ({ slug: w.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const showcase = getShowcaseBySlug(slug);
  if (showcase) {
    return {
      title: `${showcase.name} — ${showcase.category} · Limited Labs`,
      description: showcase.concept,
      alternates: { canonical: `/work/${showcase.slug}` },
      openGraph: {
        title: `${showcase.name} · Limited Labs`,
        description: showcase.tagline,
        images: showcase.heroImage ? [{ url: showcase.heroImage.src }] : undefined,
      },
    };
  }

  const item = getWorkBySlug(slug);
  if (!item) return { title: "Work - Limited Labs" };
  return {
    title: `${item.title} - Limited Labs`,
    description: item.detail.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // 25-work showcase collection
  const showcase = getShowcaseBySlug(slug);
  if (showcase) {
    const index = getShowcaseIndex(slug);
    return (
      <ShowcaseDetailContent
        work={showcase}
        index={index}
        prev={index > 0 ? SHOWCASE_WORKS[index - 1] : null}
        next={index < SHOWCASE_WORKS.length - 1 ? SHOWCASE_WORKS[index + 1] : null}
      />
    );
  }

  // Legacy working-model entries
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const index = WORK_ITEMS.findIndex((item) => item.slug === slug);
  return (
    <WorkDetailContent
      work={work}
      prev={index > 0 ? WORK_ITEMS[index - 1] : null}
      next={index < WORK_ITEMS.length - 1 ? WORK_ITEMS[index + 1] : null}
    />
  );
}
