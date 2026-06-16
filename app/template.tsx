"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { gsap, prefersReducedMotion } from "./lib/gsap";

// Module-scoped previous path. Comparing against it (rather than a flag flipped inside
// the effect) is safe under React Strict Mode's double-invoke: the remount sees the same
// path and is treated as "not a navigation", so the first load never plays the transition.
let lastPath: string | null = null;

/**
 * Route-change transition: a lime curtain wipe + content fade, with a Lenis-aware scroll
 * reset. Runs only on genuine navigations (not first load) and not on /admin. The curtain
 * sits above content during the swipe, masking the incoming page's fade-in start.
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const isNavigation = lastPath !== null && lastPath !== pathname;
    lastPath = pathname;
    if (!isNavigation) return;

    // Reset scroll to top on navigation (Lenis-aware).
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    if (prefersReducedMotion() || pathname?.startsWith("/admin")) return;

    const el = ref.current;
    const fade = el
      ? gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.12 })
      : null;

    const curtain = document.createElement("div");
    curtain.setAttribute("aria-hidden", "true");
    Object.assign(curtain.style, {
      position: "fixed",
      inset: "0",
      zIndex: "9998",
      background: "var(--accent)",
      transformOrigin: "top",
      pointerEvents: "none",
    });
    document.body.appendChild(curtain);
    const wipe = gsap.fromTo(
      curtain,
      { scaleY: 1 },
      { scaleY: 0, duration: 0.62, ease: "power3.inOut", onComplete: () => curtain.remove() },
    );

    return () => {
      fade?.kill();
      wipe.kill();
      if (el) gsap.set(el, { opacity: 1 });
      curtain.remove();
    };
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
