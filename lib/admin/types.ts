import type { ServiceCategory } from "@/app/services/servicesData";

export type ProjectStatus = "draft" | "in-progress" | "shipped" | "on-hold";

export type AdminDeliverable = {
  title: string;
  done: boolean;
};

export type AdminProject = {
  id: string;
  slug: string;
  name: string;
  client: string;
  website?: string;
  serviceSlug: ServiceCategory;
  status: ProjectStatus;
  startedAt: string;
  summary: string;
  tags: string[];
  deliverables: AdminDeliverable[];
  notes?: string;
};

export type AdminUser = {
  email: string;
  name: string;
};

export type ProjectsByService = {
  serviceSlug: ServiceCategory;
  projects: AdminProject[];
};
