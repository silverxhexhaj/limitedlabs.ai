"use client";

import { useEffect } from "react";

import { prefersReducedMotion, hasFinePointer } from "../lib/gsap";

/**
 * Soft trailing ring + precise dot. Grows and can show a contextual label over
 * elements marked [data-cursor] / [data-cursor-label]. Fine-pointer only; never
 * mounts under reduced-motion or on touch. Hides the native cursor while active.
 */
export default function CustomCursor() {
  useEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;

    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    const label = document.createElement("span");
    label.className = "cursor-label";
    ring.appendChild(label);
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.append(ring, dot);
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let running = false;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (!visible) {
        visible = true;
        ring.classList.add("is-visible");
        dot.classList.add("is-visible");
      }
      kick();
    };

    const onLeave = () => {
      visible = false;
      ring.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };

    const interactiveSel =
      'a, button, [role="button"], input, textarea, select, [data-cursor], [data-magnetic]';

    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(interactiveSel);
      if (el) {
        ring.classList.add("is-active");
        const text = el.getAttribute("data-cursor-label");
        if (text) {
          label.textContent = text;
          ring.classList.add("has-label");
        } else {
          ring.classList.remove("has-label");
          label.textContent = "";
        }
      } else {
        ring.classList.remove("is-active", "has-label");
        label.textContent = "";
      }
    };

    const tick = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.18;
      ringY += dy * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      // Idle: stop rescheduling once the ring catches up; re-kicked on the next move.
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    function kick() {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      ring.remove();
      dot.remove();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return null;
}
