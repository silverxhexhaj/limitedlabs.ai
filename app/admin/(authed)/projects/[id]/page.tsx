import Link from "next/link";
import { notFound } from "next/navigation";

import AdminTopbar from "../../../_components/AdminTopbar";
import StatusPill from "../../../_components/StatusPill";
import { getServiceBySlug } from "@/app/services/servicesData";
import { getProject } from "@/lib/admin/projects";

type PageProps = {
  params: Promise<{ id: string }>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function AdminProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceSlug);
  const doneCount = project.deliverables.filter((d) => d.done).length;

  return (
    <>
      <AdminTopbar
        title={project.name}
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Projects", href: "/admin/projects" },
          { label: project.name },
        ]}
      />
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <StatusPill status={project.status} />
          <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-faint">
            {service?.name ?? project.serviceSlug}
          </span>
          <button
            type="button"
            disabled
            className="min-h-11 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink opacity-50 cursor-not-allowed min-[480px]:ml-auto"
            title="Coming soon"
          >
            Edit project
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          <aside className="space-y-4">
            <section className="rounded-[20px] border border-border bg-surface p-5">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                Client
              </h2>
              <p className="mt-2 text-sm text-ink">{project.client}</p>
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block max-w-full break-all text-sm text-accent underline decoration-1 underline-offset-4"
                >
                  {project.website.replace(/^https?:\/\//, "")}
                </a>
              ) : null}
            </section>

            <section className="rounded-[20px] border border-border bg-surface p-5">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                Timeline
              </h2>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase text-ink-faint">Started</dt>
                  <dd className="text-ink-muted">{formatDate(project.startedAt)}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase text-ink-faint">Progress</dt>
                  <dd className="text-ink-muted">
                    {doneCount} of {project.deliverables.length} deliverables
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-[20px] border border-border bg-surface p-5">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                Tags
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[0.06em] text-ink-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <Link
              href={`/admin/services/${project.serviceSlug}`}
              className="block rounded-[20px] border border-dashed border-border-strong p-4 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
            >
              View all {service?.name ?? project.serviceSlug} projects →
            </Link>
          </aside>

          <div className="space-y-6">
            <section className="rounded-[20px] border border-border bg-surface p-5 sm:p-6">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                Summary
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{project.summary}</p>
            </section>

            <section className="rounded-[20px] border border-border bg-surface p-5 sm:p-6">
              <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                Deliverables
              </h2>
              <ul className="mt-4 space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border text-[10px] ${
                        item.done
                          ? "border-accent bg-accent text-page"
                          : "border-border-strong text-transparent"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className={item.done ? "text-ink" : "text-ink-muted"}>{item.title}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.notes ? (
              <section className="rounded-[20px] border border-dashed border-border-strong bg-page p-5 sm:p-6">
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                  Internal notes
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{project.notes}</p>
              </section>
            ) : null}

            {service ? (
              <section className="rounded-[20px] border border-border bg-surface/50 p-5 sm:p-6">
                <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                  Service context
                </h2>
                <p className="mt-2 font-display text-base font-bold text-ink">{service.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{service.tagline}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint hover:text-ink"
                >
                  Public service page →
                </Link>
              </section>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
