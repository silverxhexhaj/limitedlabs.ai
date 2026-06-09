import Image from "next/image";
import Link from "next/link";

import AdminTopbar from "../../_components/AdminTopbar";
import { SERVICE_ITEMS } from "@/app/services/servicesData";
import { countProjectsByService } from "@/lib/admin/projects";

export default async function AdminServicesPage() {
  const counts = await countProjectsByService();

  return (
    <>
      <AdminTopbar
        title="Services"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Services" }]}
      />
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
        <p className="mb-8 max-w-[52ch] text-sm text-ink-muted">
          Manage client projects grouped by service line — Brand, Software, Marketing Engines,
          Automation, and Product Lab.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_ITEMS.map((service) => {
            const count = counts[service.slug as keyof typeof counts] ?? 0;
            return (
              <Link
                key={service.slug}
                href={`/admin/services/${service.slug}`}
                className="group flex flex-col rounded-[20px] border border-border bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong sm:p-6"
              >
                <div className="relative mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[16px] border border-border bg-page p-6">
                  <Image
                    src={service.illustration}
                    alt=""
                    width={120}
                    height={120}
                    className="h-auto max-h-full w-auto max-w-full object-contain opacity-90"
                  />
                </div>
                <span className="font-mono text-[10px] text-ink-faint">
                  {service.index} / {service.name}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-ink group-hover:text-accent">
                  {service.name}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{service.tagline}</p>
                <p className="mt-4 font-mono text-[11px] text-ink-muted">
                  {count === 0
                    ? "No projects yet"
                    : `${count} project${count === 1 ? "" : "s"}`}
                </p>
                <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint group-hover:text-ink">
                  Manage →
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
