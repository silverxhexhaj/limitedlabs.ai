"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

/**
 * Global scroll-driven motion manager. Mounted once. Handles markup-driven effects so
 * components only need to add attributes:
 *   [data-reveal]            → fade + rise once, brightening into view
 *   [data-reveal-item]       → same, but batched/staggered with siblings entering together
 *   [data-parallax]          → scrubbed vertical parallax; depth via [data-parallax-speed]
 *
 * Fully inert under prefers-reduced-motion (content stays visible, no transforms).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal], [data-reveal-item]");
      if (revealItems.length) {
        gsap.set(revealItems, { opacity: 0, y: 30, willChange: "transform, opacity" });
        ScrollTrigger.batch(revealItems, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
              onComplete: () => gsap.set(batch, { willChange: "auto" }),
            }),
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.18");
        gsap.fromTo(
          el,
          { yPercent: -speed * 50 },
          {
            yPercent: speed * 50,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    // Recalculate after webfonts swap in (layout shifts the trigger points).
    let fontsDone = false;
    const refresh = () => ScrollTrigger.refresh();
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        fontsDone = true;
        refresh();
      });
    }
    const t = window.setTimeout(() => {
      if (!fontsDone) refresh();
    }, 600);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
