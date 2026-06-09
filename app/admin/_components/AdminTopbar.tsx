"use client";

import Link from "next/link";

import AdminThemeToggle from "./AdminThemeToggle";
import { useAdminMobileNavigation } from "./AdminShell";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type AdminTopbarProps = {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function AdminTopbar({ title, breadcrumbs = [] }: AdminTopbarProps) {
  const { openNavigation } = useAdminMobileNavigation();

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-border bg-page/90 px-4 py-3 backdrop-blur-md sm:gap-4 sm:px-6 sm:py-4">
      <button
        type="button"
        onClick={openNavigation}
        className="grid size-11 shrink-0 place-items-center rounded-full border border-border-strong bg-surface text-ink md:hidden"
        aria-label="Open admin navigation"
        aria-haspopup="dialog"
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
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
        <h1 className="truncate font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">{title}</h1>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
          className="hidden min-h-10 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-page opacity-50 cursor-not-allowed min-[480px]:inline-flex"
          title="Coming soon"
        >
          New project
        </button>
      </div>
    </header>
  );
}
