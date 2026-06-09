import Link from "next/link";

import AdminTopbar from "../_components/AdminTopbar";
import ProjectCard from "../_components/ProjectCard";
import StatCard from "../_components/StatCard";
import { SERVICE_ITEMS } from "@/app/services/servicesData";
import { countProjectsByService, listProjects } from "@/lib/admin/projects";

export default async function AdminDashboardPage() {
  const projects = await listProjects();
  const counts = await countProjectsByService();
  const inProgress = projects.filter((p) => p.status === "in-progress").length;
  const shipped = projects.filter((p) => p.status === "shipped").length;
  const serviceCount = Object.keys(counts).length;
  const recent = [...projects]
    .sort((a, b) => b.startedAt.localeCompare(a.startedAt))
    .slice(0, 5);

  return (
    <>
      <AdminTopbar title="Overview" />
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Total projects" value={projects.length} />
          <StatCard label="In progress" value={inProgress} />
          <StatCard label="Shipped" value={shipped} />
          <StatCard label="Active services" value={serviceCount} hint="Services with ≥1 project" />
        </div>

        <section className="mt-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
              Recent projects
            </h2>
            <Link
              href="/admin/projects"
              className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint transition-colors hover:text-ink"
            >
              View all →
            </Link>
          </div>
          {recent.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recent.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-muted">No projects yet.</p>
          )}
        </section>

        <section className="mt-12">
          <h2 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_ITEMS.map((service) => (
              <Link
                key={service.slug}
                href={`/admin/services/${service.slug}`}
                className="group rounded-[20px] border border-border bg-surface p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong"
              >
                <span className="font-mono text-[10px] text-ink-faint">
                  {service.index} / {service.name}
                </span>
                <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-ink group-hover:text-accent">
                  {service.tagline}
                </p>
                <p className="mt-3 font-mono text-[11px] text-ink-muted">
                  {(counts[service.slug as keyof typeof counts] ?? 0) === 0
                    ? "No projects"
                    : `${counts[service.slug as keyof typeof counts]} project${
                        (counts[service.slug as keyof typeof counts] ?? 0) === 1 ? "" : "s"
                      }`}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
