import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WORK_ITEMS, type WorkItem } from "../../work/workData";
import ServiceDetailContent from "./ServiceDetailContent";
import {
  SERVICE_ITEMS,
  getServiceBySlug,
  serviceCategoryToWorkFilter,
  serviceToRequestedSystem,
  type ServiceItem,
} from "../servicesData";

const CATEGORY_MATCHERS: Record<"brand" | "software" | "marketing" | "automation", string[]> = {
  brand: ["branding", "identity", "brand", "visual"],
  software: ["ui/ux", "next.js", "supabase", "pwa", "product", "tooling", "mvp"],
  marketing: ["meta ads", "marketing", "strategy", "campaign", "content"],
  automation: ["automation", "ai"],
};

function workMatchesCategory(
  work: WorkItem,
  category: "brand" | "software" | "marketing" | "automation",
): boolean {
  return work.tags.some((tag) => {
    const normalized = tag.toLowerCase();
    return CATEGORY_MATCHERS[category].some(
      (matcher) => normalized.includes(matcher) || matcher.includes(normalized),
    );
  });
}

function getRelatedWork(service: ServiceItem): WorkItem[] {
  const filter = serviceCategoryToWorkFilter(service.category);
  return filter
    ? WORK_ITEMS.filter((work) => workMatchesCategory(work, filter)).slice(0, 3)
    : [];
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) return { title: "Services - Limited Labs" };

  return {
    title: `${item.name} Systems - Limited Labs`,
    description: item.summary,
    alternates: { canonical: `/services/${item.slug}` },
    openGraph: {
      title: `${item.name} - Limited Labs`,
      description: item.summary,
      images: [{ url: item.illustration, alt: `${item.name} service` }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const index = SERVICE_ITEMS.findIndex((item) => item.slug === slug);
  const requestedSystem = serviceToRequestedSystem(service);

  return (
    <ServiceDetailContent
      service={service}
      prev={index > 0 ? SERVICE_ITEMS[index - 1] : null}
      next={index < SERVICE_ITEMS.length - 1 ? SERVICE_ITEMS[index + 1] : null}
      relatedWork={getRelatedWork(service)}
      auditHref={`/?service=${requestedSystem}#audit`}
    />
  );
}
