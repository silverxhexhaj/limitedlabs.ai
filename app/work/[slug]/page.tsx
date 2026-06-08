import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WorkDetailContent from "./WorkDetailContent";
import { WORK_ITEMS, getWorkBySlug } from "../workData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
