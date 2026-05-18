import Link from "next/link";

import AdminThemeToggle from "./AdminThemeToggle";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type AdminTopbarProps = {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function AdminTopbar({ title, breadcrumbs = [] }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center gap-4 border-b border-border bg-page/90 px-6 py-4 backdrop-blur-md">
      <div className="min-w-0 flex-1">
        {breadcrumbs.length > 0 ? (
          <nav className="mb-1 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="inline-flex items-center gap-2">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-ink-muted">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <h1 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{title}</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <label className="relative hidden sm:block">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            disabled
            placeholder="Search projects…"
            className="w-[200px] rounded-full border border-border-strong bg-surface px-4 py-2 font-mono text-[11px] text-ink placeholder:text-ink-faint disabled:cursor-not-allowed disabled:opacity-60 lg:w-[240px]"
          />
        </label>
        <AdminThemeToggle />
        <button
          type="button"
          disabled
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-page opacity-50 cursor-not-allowed"
          title="Coming soon"
        >
          New project
        </button>
      </div>
    </header>
  );
}
