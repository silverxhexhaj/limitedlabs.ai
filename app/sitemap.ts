import type { MetadataRoute } from "next";

import { COURSE_ITEMS } from "./courses/coursesData";
import { SERVICE_ITEMS } from "./services/servicesData";
import { SHOWCASE_WORKS } from "./work/showcase/index";
import { WORK_ITEMS } from "./work/workData";

const baseUrl = "https://www.limitedlabs.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...SERVICE_ITEMS.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: service.slug === "automation" || service.slug === "software" ? 0.9 : 0.8,
    })),
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...SHOWCASE_WORKS.map((work) => ({
      url: `${baseUrl}/work/${work.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...WORK_ITEMS.map((work) => ({
      url: `${baseUrl}/work/${work.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${baseUrl}/courses`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...COURSE_ITEMS.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
