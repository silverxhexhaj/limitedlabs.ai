import type { ServiceCategory } from "@/app/services/servicesData";

import type { AdminProject, ProjectsByService } from "./types";

const SEED_PROJECTS: AdminProject[] = [
  {
    id: "homegallery-al",
    slug: "home-gallery",
    name: "Home Gallery",
    client: "Home Gallery sh.p.k.",
    website: "https://www.homegallery.al",
    serviceSlug: "brand",
    status: "in-progress",
    startedAt: "2026-03-10",
    summary:
      "Brand system refresh for a Tirana furniture & home goods retailer — positioning, voice, identity primitives, and content pillars for showroom + social.",
    tags: ["Retail", "Hospitality-adjacent", "AL/EN voice"],
    deliverables: [
      { title: "Brand strategy & positioning", done: true },
      { title: "Visual identity (logo system)", done: true },
      { title: "Type, color, layout primitives", done: false },
      { title: "Voice & tone (AL/EN)", done: false },
      { title: "Content pillars + monthly themes", done: false },
      { title: "Showroom signage starters", done: false },
    ],
    notes:
      "Showroom photography day pending. Founder wants AL-first voice with EN parity for international suppliers.",
  },
];

export type ListProjectsOptions = {
  serviceSlug?: ServiceCategory;
};

export async function listProjects(
  options: ListProjectsOptions = {},
): Promise<AdminProject[]> {
  const { serviceSlug } = options;
  if (serviceSlug) {
    return SEED_PROJECTS.filter((p) => p.serviceSlug === serviceSlug);
  }
  return [...SEED_PROJECTS];
}

export async function getProject(id: string): Promise<AdminProject | undefined> {
  return SEED_PROJECTS.find((p) => p.id === id || p.slug === id);
}

export async function listByService(): Promise<ProjectsByService[]> {
  const projects = await listProjects();
  const slugSet = new Set(projects.map((p) => p.serviceSlug));
  return Array.from(slugSet).map((serviceSlug) => ({
    serviceSlug,
    projects: projects.filter((p) => p.serviceSlug === serviceSlug),
  }));
}

export async function countProjectsByService(): Promise<Record<ServiceCategory, number>> {
  const projects = await listProjects();
  const counts = {} as Record<ServiceCategory, number>;
  for (const p of projects) {
    counts[p.serviceSlug] = (counts[p.serviceSlug] ?? 0) + 1;
  }
  return counts;
}
