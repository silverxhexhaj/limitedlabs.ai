"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageProvider";
import { wrap } from "../site";

const NAV_IDS = ["services", "work", "why", "proof", "faq", "contact"] as const;

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navItems = NAV_IDS.map((id) => [id, t.header.nav[id]] as const);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] py-4 transition-[background,border-color] duration-300"
        id="nav"
      >
        <div className={`${wrap} flex items-center justify-between gap-4`}>
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
            <span className="font-display text-lg font-bold tracking-[-0.02em]">
              Limited Labs
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t.header.primaryNavAria}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={sectionHref(id, isHome)}
                className="rounded-full px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-page transition-transform hover:scale-[1.02] sm:px-5"
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
          className="fixed inset-0 z-[99] bg-page/95 px-[var(--gutter)] pb-10 pt-28 backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-[var(--max)] flex-col" aria-label={t.header.mobileNavAria}>
            {navItems.map(([id, label], index) => (
              <a
                key={id}
                href={sectionHref(id, isHome)}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-5 border-b border-border py-5"
              >
                <span className="font-mono text-[10px] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl font-bold tracking-[-0.03em]">{label}</span>
              </a>
            ))}
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
