import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseDetailContent from "./CourseDetailContent";
import { getCourseBySlug } from "../coursesData";

const baseUrl = "https://www.limitedlabs.ai";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Courses - Limited Labs" };

  return {
    title: `${course.title} - Limited Labs`,
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} - Limited Labs`,
      description: course.summary,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    inLanguage: ["en", "sq"],
    provider: {
      "@type": "Organization",
      name: "Limited Labs",
      url: baseUrl,
    },
    teaches: course.outcomes,
    isAccessibleForFree: Boolean(course.isFree),
    offers: course.pricing.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      category: course.isFree ? "Free" : "Paid",
      url: `${baseUrl}/courses/${course.slug}`,
    })),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${course.modules.reduce(
        (total, m) => total + (parseInt(m.duration, 10) || 0),
        0,
      )}M`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailContent course={course} auditHref="/?service=ai-automation#audit" />
    </>
  );
}
