"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { gsap, prefersReducedMotion, hasFinePointer } from "../lib/gsap";

/**
 * Magnetic pull on [data-magnetic] elements — they drift toward the cursor and
 * spring back on leave. Fine-pointer + motion-allowed only. Re-binds per route.
 * Note: magnetic elements should not also use a CSS hover:transform (GSAP owns it).
 */
export default function MagneticFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups = els.map((el) => {
      const strength = parseFloat(el.dataset.magneticStrength ?? "0.35");
      const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { x: 0, y: 0 });
      };
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
