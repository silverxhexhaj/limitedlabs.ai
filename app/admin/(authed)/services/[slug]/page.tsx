import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AdminTopbar from "../../../_components/AdminTopbar";
import EmptyState from "../../../_components/EmptyState";
import ProjectCard from "../../../_components/ProjectCard";
import { getServiceBySlug } from "@/app/services/servicesData";
import { listProjects } from "@/lib/admin/projects";
import type { ServiceCategory } from "@/app/services/servicesData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AdminServiceProjectsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const projects = await listProjects({
    serviceSlug: slug as ServiceCategory,
  });

  return (
    <>
      <AdminTopbar
        title={service.name}
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Services", href: "/admin/services" },
          { label: service.name },
        ]}
      />
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_200px] lg:items-start">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
              {service.index} / {service.name}
            </p>
            <p className="mt-2 max-w-[52ch] font-display text-2xl font-bold tracking-[-0.03em] text-ink">
              {service.tagline}
            </p>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-ink-muted">
              {service.summary}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint transition-colors hover:text-ink"
            >
              View public service page →
            </Link>
          </div>
          <div className="relative flex aspect-square max-w-[200px] items-center justify-center overflow-hidden rounded-[20px] border border-border bg-surface p-6">
            <Image
              src={service.illustration}
              alt=""
              width={160}
              height={160}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </div>
        </div>

        <h2 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
          Projects ({projects.length})
        </h2>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No projects in this service yet"
            description={`When you add a ${service.name} engagement, it will show up here.`}
          />
        )}
      </main>
    </>
  );
}
