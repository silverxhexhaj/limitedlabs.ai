"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SERVICE_ITEMS } from "@/app/services/servicesData";

import SignOutButton from "./SignOutButton";

type AdminSidebarProps = {
  adminEmail: string;
  className?: string;
  onClose?: () => void;
};

const NAV_MAIN = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/operators", label: "Operators", exact: false },
  { href: "/admin/projects", label: "Projects", exact: false },
  { href: "/admin/services", label: "Services", exact: false },
] as const;

function linkClass(active: boolean) {
  return `flex min-h-11 items-center rounded-xl px-3 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
    active
      ? "bg-ink text-page"
      : "text-ink-muted hover:bg-surface hover:text-ink"
  }`;
}

export default function AdminSidebar({
  adminEmail,
  className = "",
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(
    pathname.startsWith("/admin/services"),
  );

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside className={`flex h-full w-[260px] max-w-full shrink-0 flex-col border-r border-border bg-surface ${className}`}>
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-5">
        <Link href="/admin" className="inline-flex min-w-0 items-center gap-2.5 text-ink">
          <Image
            src="/ll-logo-white.png"
            alt=""
            width={32}
            height={36}
            className="site-logo-img h-7 w-auto shrink-0"
          />
          <span className="truncate font-display text-sm font-bold tracking-[-0.02em]">
            Admin
          </span>
        </Link>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="ml-auto grid size-11 shrink-0 place-items-center rounded-full border border-border-strong bg-page text-ink"
            aria-label="Close admin navigation"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        ) : null}
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Admin">
        {NAV_MAIN.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkClass(isActive(item.href, item.exact))}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-ink-muted"
            aria-expanded={servicesOpen}
          >
            By service
            <span className="text-ink-faint" aria-hidden>
              {servicesOpen ? "−" : "+"}
            </span>
          </button>
          {servicesOpen ? (
            <ul className="mt-1 flex flex-col gap-0.5 pl-1">
              {SERVICE_ITEMS.map((service) => {
                const href = `/admin/services/${service.slug}`;
                const active = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <li key={service.slug}>
                    <Link href={href} className={linkClass(active)} onClick={onClose}>
                      {service.index} / {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </nav>

      <div className="border-t border-border px-4 py-4">
        <p className="mb-3 truncate font-mono text-[10px] text-ink-faint">{adminEmail}</p>
        <SignOutButton />
        <Link
          href="/"
          onClick={onClose}
          className="mt-3 block text-center font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint transition-colors hover:text-ink-muted"
        >
          ← Public site
        </Link>
      </div>
    </aside>
  );
}
