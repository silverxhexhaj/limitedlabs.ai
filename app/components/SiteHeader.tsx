"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { wrap } from "../site";

const navLinkDesktop =
  "rounded-full px-3 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 hover:bg-surface hover:text-ink";

const navLinkMobile =
  "block rounded-2xl border border-border bg-surface px-4 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:border-ink-faint";

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] py-[18px] transition-[background,border-color] duration-300 ease-out"
      id="nav"
    >
      <div className={`${wrap} flex items-center justify-between gap-4`}>
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-10">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-3 text-ink"
            aria-label="Limited Labs home"
            onClick={closeMenu}
          >
            <span className="font-display hidden text-lg font-bold tracking-[-0.02em] min-[720px]:inline">
              Limited Labs
            </span>
          </Link>

          <nav className="hidden md:flex flex-wrap items-center gap-0.5" aria-label="Sections">
            <a className={navLinkDesktop} href={sectionHref("services", isHome)}>
              Services
            </a>
            <a className={navLinkDesktop} href={sectionHref("work", isHome)}>
              Work
            </a>
            <a className={navLinkDesktop} href={sectionHref("why", isHome)}>
              Impact
            </a>
            <a className={navLinkDesktop} href={sectionHref("voices", isHome)}>
              Proof
            </a>
            <a className={navLinkDesktop} href={sectionHref("contact", isHome)}>
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink transition-[border-color,transform] duration-200 hover:scale-105 hover:border-ink-faint"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              Menu
            </button>
            {menuOpen ? (
              <div
                className="absolute left-[var(--gutter)] right-[var(--gutter)] top-[calc(100%+8px)] z-[110] rounded-2xl border border-border-strong bg-[var(--nav-scrolled-bg)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                id="mobile-nav"
                role="dialog"
                aria-label="Site navigation"
              >
                <nav className="flex flex-col gap-2">
                  <a className={navLinkMobile} href={sectionHref("services", isHome)} onClick={closeMenu}>
                    Services
                  </a>
                  <a className={navLinkMobile} href={sectionHref("work", isHome)} onClick={closeMenu}>
                    Work
                  </a>
                  <a className={navLinkMobile} href={sectionHref("why", isHome)} onClick={closeMenu}>
                    Impact
                  </a>
                  <a className={navLinkMobile} href={sectionHref("voices", isHome)} onClick={closeMenu}>
                    Proof
                  </a>
                  <a className={navLinkMobile} href={sectionHref("contact", isHome)} onClick={closeMenu}>
                    Contact
                  </a>
                </nav>
              </div>
            ) : null}
          </div>

          <button
            type="button"
            id="themeToggle"
            className="grid size-11 shrink-0 grid-cols-1 grid-rows-1 place-items-center rounded-full border border-border-strong bg-surface text-ink transition-[border-color,transform,background-color] duration-200 ease-out hover:scale-105 hover:border-ink-faint"
            aria-label="Switch color theme"
          >
            <svg
              className="col-start-1 row-start-1 hidden size-5 stroke-[1.75] dark:block"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="col-start-1 row-start-1 block size-5 stroke-[1.75] dark:hidden"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
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
            href={sectionHref("contact", isHome)}
            className="inline-flex items-center gap-2.5 rounded-full bg-ink px-[22px] py-3 text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent max-[379px]:px-4 max-[379px]:text-[13px]"
          >
            <span
              className="size-[7px] shrink-0 rounded-full bg-[#00d27a] shadow-[0_0_0_0_rgba(0,210,122,0.6)] motion-safe:animate-[pulse_2s_infinite]"
              aria-hidden="true"
            />
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
