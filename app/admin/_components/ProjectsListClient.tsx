"use client";

import { useMemo, useState } from "react";

import { SERVICE_ITEMS } from "@/app/services/servicesData";
import type { AdminProject } from "@/lib/admin/types";

import EmptyState from "./EmptyState";
import ProjectCard from "./ProjectCard";
import ServiceFilterChips, { type ServiceFilterValue } from "./ServiceFilterChips";
import ViewToggle, { type ProjectsViewMode } from "./ViewToggle";

type ProjectsListClientProps = {
  projects: AdminProject[];
};

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  const [viewMode, setViewMode] = useState<ProjectsViewMode>("grouped");
  const [serviceFilter, setServiceFilter] = useState<ServiceFilterValue>("all");

  const filtered = useMemo(() => {
    if (serviceFilter === "all") return projects;
    return projects.filter((p) => p.serviceSlug === serviceFilter);
  }, [projects, serviceFilter]);

  const grouped = useMemo(() => {
    const slugs =
      serviceFilter === "all"
        ? SERVICE_ITEMS.map((s) => s.slug)
        : [serviceFilter];
    return slugs
      .map((slug) => {
        const service = SERVICE_ITEMS.find((s) => s.slug === slug);
        const items = filtered.filter((p) => p.serviceSlug === slug);
        return { slug, name: service?.name ?? slug, projects: items };
      })
      .filter((g) => g.projects.length > 0);
  }, [filtered, serviceFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <ViewToggle value={viewMode} onChange={setViewMode} />
        <ServiceFilterChips value={serviceFilter} onChange={setServiceFilter} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No projects match"
          description="Try another service filter or add a project when CRUD is enabled."
        />
      ) : viewMode === "flat" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.slug}>
              <h2 className="mb-4 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                {group.name}
                <span className="ml-2 font-mono text-[11px] font-medium text-ink-faint">
                  ({group.projects.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
