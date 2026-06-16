"use client";

import { useEffect } from "react";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

type LenisInstance = {
  raf: (time: number) => void;
  on: (event: string, cb: (...args: unknown[]) => void) => void;
  scrollTo: (target: string | number | HTMLElement, opts?: Record<string, unknown>) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    __lenis?: LenisInstance;
  }
}

/**
 * Buttery inertia scroll (Lenis) wired into GSAP's ticker + ScrollTrigger.
 * Disabled entirely under prefers-reduced-motion — the page falls back to native scroll.
 * Mounted once near the root; renders nothing.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let lenis: LenisInstance | undefined;
    let rafCb: ((time: number) => void) | undefined;
    let disposed = false;

    (async () => {
      const Lenis = (await import("lenis")).default;
      if (disposed) return;

      lenis = new Lenis({
        duration: 1.1,
        // easeOutExpo — long, weighted glide
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      }) as unknown as LenisInstance;

      window.__lenis = lenis;

      lenis.on("scroll", () => ScrollTrigger.update());

      rafCb = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(rafCb);
      gsap.ticker.lagSmoothing(0);

      // Smooth in-page anchor navigation through Lenis.
      const onAnchorClick = (event: MouseEvent) => {
        const target = (event.target as HTMLElement)?.closest<HTMLAnchorElement>(
          'a[href^="#"], a[href^="/#"]',
        );
        if (!target) return;
        const href = target.getAttribute("href") ?? "";
        const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
        if (!hash || hash === "#") return;
        const el = document.querySelector(hash);
        if (!el) return;
        event.preventDefault();
        lenis?.scrollTo(el as HTMLElement, { offset: -96, duration: 1.2 });
        history.pushState(null, "", hash);
      };
      document.addEventListener("click", onAnchorClick);

      // Recalc triggers once everything (fonts, images) settles.
      ScrollTrigger.refresh();

      const cleanupAnchor = () => document.removeEventListener("click", onAnchorClick);
      (lenis as unknown as { __cleanupAnchor?: () => void }).__cleanupAnchor = cleanupAnchor;
    })();

    return () => {
      disposed = true;
      if (rafCb) gsap.ticker.remove(rafCb);
      (lenis as unknown as { __cleanupAnchor?: () => void })?.__cleanupAnchor?.();
      lenis?.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return null;
}
