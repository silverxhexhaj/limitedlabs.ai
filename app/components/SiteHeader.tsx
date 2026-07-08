"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageProvider";
import { wrap } from "../site";

const NAV_IDS = ["services", "work", "why", "proof", "faq", "contact"] as const;

// "Work" is a standalone route (the 25-work showcase); the rest are homepage
// section anchors.
const ROUTE_IDS: Partial<Record<(typeof NAV_IDS)[number], string>> = { work: "/work" };

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Section links come from NAV_IDS; Courses is a standalone route slotted in
  // right after Work so it reads as a first-class destination, not a hash.
  type NavLink = { key: string; label: string; href: string; route?: boolean };
  const navLinks: NavLink[] = [];
  NAV_IDS.forEach((id) => {
    const route = ROUTE_IDS[id];
    navLinks.push({
      key: id,
      label: t.header.nav[id],
      href: route ?? sectionHref(id, isHome),
      route: Boolean(route),
    });
    if (id === "work") {
      navLinks.push({ key: "courses", label: t.header.nav.courses, href: "/courses", route: true });
    }
  });

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus management: move focus into the dialog, trap it, and restore on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const overlay = document.getElementById("mobile-navigation");
    const focusables = overlay
      ? Array.from(overlay.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key === "Tab" && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] py-3 transition-[background,border-color] duration-300 sm:py-4"
        id="nav"
      >
        <div className={`${wrap} flex items-center justify-between gap-2 sm:gap-4`}>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-3 text-ink"
            aria-label={t.header.homeAria}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/ll-logo-white.png"
              alt=""
              width={137}
              height={156}
              priority
              className="site-logo-img h-[28px] w-auto"
            />
            <span className="font-display text-lg font-bold tracking-[-0.02em] max-[380px]:hidden">
              Limited Labs
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t.header.primaryNavAria}>
            {navLinks.map((item) => {
              const className =
                "rounded-full px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors hover:bg-surface hover:text-ink";
              return item.route ? (
                <Link key={item.key} href={item.href} className={className}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.key} href={item.href} className={className}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageToggle />
            <button
              type="button"
              id="themeToggle"
              className="grid size-11 place-items-center rounded-full border border-border-strong bg-surface text-ink transition-colors hover:border-ink"
              aria-label="Switch color theme"
            >
              <svg className="hidden size-5 dark:block" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="size-5 dark:hidden" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a
              href={sectionHref("audit", isHome)}
              data-cursor-label="Audit"
              className="hidden min-h-11 items-center rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page sm:inline-flex"
            >
              {t.header.cta}
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-border-strong bg-surface text-ink lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t.header.closeNav : t.header.openNav}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                {menuOpen ? (
                  <path
                    d="M5 5l14 14M19 5L5 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label={t.header.mobileNavAria}
          className="fixed inset-0 z-[99] overflow-y-auto overscroll-contain bg-page/95 px-[var(--gutter)] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-[var(--max)] flex-col" aria-label={t.header.mobileNavAria}>
            {navLinks.map((item, index) => {
              const number = (
                <span className="font-mono text-[10px] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              );
              const labelEl = (
                <span className="font-display text-[clamp(1.5rem,8vw,1.875rem)] font-bold tracking-[-0.03em]">{item.label}</span>
              );
              const rowClass = "flex min-h-16 items-center gap-4 border-b border-border py-4 sm:gap-5 sm:py-5";
              return item.route ? (
                <Link key={item.key} href={item.href} onClick={() => setMenuOpen(false)} className={rowClass}>
                  {number}
                  {labelEl}
                </Link>
              ) : (
                <a key={item.key} href={item.href} onClick={() => setMenuOpen(false)} className={rowClass}>
                  {number}
                  {labelEl}
                </a>
              );
            })}
            <a
              href={sectionHref("audit", isHome)}
              onClick={() => setMenuOpen(false)}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold text-page"
            >
              {t.header.mobileCta}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
