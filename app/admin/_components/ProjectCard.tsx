import Link from "next/link";

import { SERVICE_ITEMS } from "@/app/services/servicesData";
import type { AdminProject } from "@/lib/admin/types";

import StatusPill from "./StatusPill";

type ProjectCardProps = {
  project: AdminProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const service = SERVICE_ITEMS.find((s) => s.slug === project.serviceSlug);
  const doneCount = project.deliverables.filter((d) => d.done).length;
  const totalDeliverables = project.deliverables.length;

  return (
    <Link
      href={`/admin/projects/${project.id}`}
      className="group flex min-w-0 flex-col rounded-[20px] border border-border bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-1 truncate text-sm text-ink-muted">{project.client}</p>
        </div>
        <StatusPill status={project.status} />
      </div>

      <p className="mt-4 line-clamp-2 text-[13.5px] leading-relaxed text-ink-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <span className="rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted">
          {service?.name ?? project.serviceSlug}
        </span>
        {project.website ? (
          <span className="min-w-0 max-w-full truncate font-mono text-[10px] text-ink-faint">
            {project.website.replace(/^https?:\/\//, "")}
          </span>
        ) : null}
        <span className="ml-auto font-mono text-[10px] text-ink-faint max-[420px]:ml-0 max-[420px]:w-full">
          {doneCount}/{totalDeliverables} deliverables
        </span>
      </div>
    </Link>
  );
}
