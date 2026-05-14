"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { wrap } from "../site";

const navLinkDesktop =
  "rounded-full px-3 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 hover:bg-surface hover:text-ink";

const MOBILE_SECTIONS = [
  { slug: "services" as const, title: "Services", hint: "Brand, product, systems" },
  { slug: "work" as const, title: "Work", hint: "Cases & craft" },
  { slug: "why" as const, title: "Impact", hint: "Why this model" },
  { slug: "voices" as const, title: "Proof", hint: "Signals & voices" },
  { slug: "contact" as const, title: "Contact", hint: "Start a thread" },
] as const;

function sectionHref(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

/** Hamburger → X; straight bars so the open state reads as a single crossing pair */
function AnimatedMenuGlyph({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        className="h-auto w-[20px] shrink-0 text-ink"
        viewBox="0 0 200 100"
        fill="none"
        aria-hidden
      >
        <path
          d="M10 10 V 70 Q 10 90, 30 90 H 80"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M110 10 V 70 Q 110 90, 130 90 H 190"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <g transform="translate(180, 18)" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <line x1="0" y1="-8" x2="0" y2="8" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="-6" y1="-6" x2="6" y2="6" />
          <line x1="-6" y1="6" x2="6" y2="-6" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className="size-[22px] shrink-0 text-ink"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M5.25 7.5h13.5"
          className={`menu-hamburger-bar origin-[12px_7.5px] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] motion-reduce:transition-none ${
            open ? "translate-y-[4.5px] rotate-45" : ""
          }`}
        />
        <path
          d="M5.25 12h13.5"
          className={`origin-center transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none ${
            open ? "scale-x-0 opacity-0" : ""
          }`}
        />
        <path
          d="M5.25 16.5h13.5"
          className={`menu-hamburger-bar origin-[12px_16.5px] transition-[transform] duration-300 ease-[cubic-bezier(0.2,0.6,0.2,1)] motion-reduce:transition-none ${
            open ? "-translate-y-[4.5px] -rotate-45" : ""
          }`}
        />
      </g>
    </svg>
  );
}

function MobileNavDecoration() {
  return (
    <svg
      className="pointer-events-none absolute -right-6 bottom-8 h-[min(38vh,220px)] w-auto text-ink opacity-[0.07] dark:opacity-[0.12]"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 18 V 78 Q 10 98, 30 98 H 88"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M118 18 V 78 Q 118 98, 138 98 H 196"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(186, 28)" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-6" y1="0" x2="6" y2="0" />
        <line x1="-4.2" y1="-4.2" x2="4.2" y2="4.2" />
        <line x1="-4.2" y1="4.2" x2="4.2" y2="-4.2" />
      </g>
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const menuTitleId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [menuOpen]);

  return (
    <>
      {/* Full-screen mobile nav — below header z-index so bar stays interactive */}
      {menuOpen ? (
        <div
          className="mobile-nav-overlay fixed inset-0 z-[98] flex min-h-dvh flex-col md:hidden"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 cursor-default border-0 bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-[14px] backdrop-saturate-150 dark:bg-[color-mix(in_oklab,var(--bg)_88%,transparent)]"
            aria-label="Close navigation"
            onClick={closeMenu}
          />

          <div className="relative z-[1] flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain pointer-events-none">
            <div
              className={`${wrap} pointer-events-auto flex min-h-0 flex-1 flex-col pb-10 pt-[calc(1rem*2+2.75rem+12px)] sm:pt-[calc(18px*2+48px+16px)]`}
            >
              <div className="flex flex-1 flex-col gap-10 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between min-[420px]:gap-8">

                <nav className="flex w-full flex-col gap-2.5 sm:gap-3" aria-label="Mobile sections">
                  {MOBILE_SECTIONS.map((item, index) => (
                    <a
                      key={item.slug}
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={sectionHref(item.slug, isHome)}
                      onClick={closeMenu}
                      className="mobile-nav-sheet-item group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border-strong bg-surface/95 px-4 py-4 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-[border-color,transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink-muted hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] sm:px-5 sm:py-[18px]"
                    >
                      <span className="font-mono text-[11px] font-medium tabular-nums text-ink-faint transition-colors duration-200 group-hover:text-ink-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-ink-muted">{item.hint}</span>
                      </span>
                      <span
                        className="hidden text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink sm:block"
                        aria-hidden
                      >
                        →
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="relative mt-12 border-t border-border pt-8">
                <MobileNavDecoration />
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                  Ready when you are
                </p>
                <a
                  href={sectionHref("contact", isHome)}
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full min-[420px]:w-auto items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-semibold text-page transition-[transform,background-color] duration-200 ease-out hover:scale-[1.02] hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-[#00d27a] shadow-[0_0_0_0_rgba(0,210,122,0.55)] motion-safe:animate-[pulse_2s_infinite]"
                    aria-hidden
                  />
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <header
        className="fixed inset-x-0 top-0 z-[100] py-4 transition-[background,border-color] duration-300 ease-out sm:py-[18px]"
        id="nav"
      >
        <div className={`${wrap} flex items-center justify-between gap-2 sm:gap-4`}>
          <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-10">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center gap-3 text-ink"
              aria-label="Limited Labs home"
              onClick={closeMenu}
            >
              <Image
                src="/ll-logo-white.png"
                alt=""
                width={137}
                height={156}
                priority
                className="site-logo-img h-[26px] w-auto shrink-0 sm:h-[30px]"
              />
              <span className="font-display text-base font-bold tracking-[-0.02em] min-[720px]:inline sm:text-lg">
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

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            

            <button
              type="button"
              id="themeToggle"
              className="grid size-11 shrink-0 grid-cols-1 grid-rows-1 place-items-center rounded-full border border-border-strong bg-surface text-ink transition-[border-color,transform,background-color] duration-200 ease-out hover:scale-105 hover:border-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
              aria-label="Switch color theme"
            >
              <svg
                className="col-start-1 row-start-1 hidden size-5 stroke-[1.75] dark:block"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
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
                aria-hidden
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
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none sm:gap-2.5 sm:px-[22px] sm:py-3 sm:text-sm"
            >
              <span
                className="size-[7px] shrink-0 rounded-full bg-[#00d27a] shadow-[0_0_0_0_rgba(0,210,122,0.6)] motion-safe:animate-[pulse_2s_infinite]"
                aria-hidden
              />
              Let&apos;s Talk
            </a>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border-strong bg-surface text-ink transition-[border-color,transform,background-color] duration-200 ease-out hover:scale-105 hover:border-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <AnimatedMenuGlyph open={menuOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
