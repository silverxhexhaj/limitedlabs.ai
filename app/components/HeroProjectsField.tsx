"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { hasFinePointer, prefersReducedMotion } from "../lib/gsap";
import { SHOWCASE_WORKS } from "../work/showcase/index";

/**
 * Interactive hero background: all 25 project covers drift across the canvas
 * and are magnetically pulled toward the cursor (same feel as the [data-magnetic]
 * CTAs) — hover to attract, click to open the work.
 *
 * On a slow loop the whole field eases between organized *formations* — an
 * organic scatter, a neat grid, a sheared diagonal, a spiral, tilted columns —
 * so the projects keep re-arranging into different tidy orientations. Hovering
 * a card snaps it fully crisp and forward.
 *
 * Positions are deterministic (an R2 low-discrepancy sequence) so SSR and client
 * match with no hydration jump. Motion + magnetism are gated on fine-pointer /
 * motion-allowed; otherwise the tiles render as a static scattered collage. The
 * field is aria-hidden — the canonical, keyboard-navigable list lives below.
 */

const TAU = Math.PI * 2;
const COLS = 5;
// Plastic number reciprocals — an R2 sequence gives an even, non-grid scatter.
const G = 1.32471795724474602596;
const A1 = 1 / G;
const A2 = 1 / (G * G);

const frac = (n: number) => n - Math.floor(n);
const hash = (n: number) => frac(Math.sin(n * 127.1 + 311.7) * 43758.5453);
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smoothstep = (p: number) => p * p * (3 - 2 * p);

type TileLayout = {
  bx: number; // scatter home (fraction of field)
  by: number;
  depth: number;
  width: number;
  baseOpacity: number;
  baseBlur: number;
  react: number;
  radius: number;
  amp: number;
  speed: number;
  phase: number;
  rotAmp: number;
  z: number;
};

const LAYOUT: TileLayout[] = SHOWCASE_WORKS.map((_, i) => {
  const depth = hash(i + 4); // 0 = far, 1 = near
  const bx = 0.05 + frac(0.5 + A1 * (i + 1)) * 0.9;
  const by = 0.08 + frac(0.5 + A2 * (i + 1)) * 0.84;
  return {
    bx,
    by,
    depth,
    width: 92 + depth * 116,
    baseOpacity: 0.42 + depth * 0.5,
    baseBlur: (1 - depth) * 2.6,
    react: 0.5 + depth * 0.85,
    radius: 190 + depth * 180,
    amp: 6 + depth * 9,
    speed: 0.12 + hash(i + 21) * 0.22,
    phase: hash(i + 37) * TAU,
    rotAmp: 1.2 + hash(i + 53) * 3.6,
    z: 6 + Math.round(depth * 24),
  };
});

/* ---- Organized formations the field loops through ---------------------- */

type Node = { bx: number; by: number; rot: number };

const FORMATIONS: Node[][] = (() => {
  const N = SHOWCASE_WORKS.length;

  const scatter: Node[] = LAYOUT.map((L, i) => ({ bx: L.bx, by: L.by, rot: (hash(i + 9) * 2 - 1) * 6 }));

  const grid: Node[] = SHOWCASE_WORKS.map((_, i) => {
    const c = i % COLS;
    const r = Math.floor(i / COLS);
    return { bx: 0.1 + c * 0.2, by: 0.14 + r * 0.18, rot: 0 };
  });

  const diagonal: Node[] = SHOWCASE_WORKS.map((_, i) => {
    const c = i % COLS;
    const r = Math.floor(i / COLS);
    return { bx: 0.07 + c * 0.17 + r * 0.04, by: 0.13 + r * 0.17 - c * 0.02, rot: -11 };
  });

  const columns: Node[] = SHOWCASE_WORKS.map((_, i) => {
    const c = i % COLS;
    const r = Math.floor(i / COLS);
    return { bx: 0.12 + c * 0.19, by: 0.12 + r * 0.185, rot: c % 2 === 0 ? 5 : -5 };
  });

  const spiral: Node[] = SHOWCASE_WORKS.map((_, i) => {
    const a = i * 0.62;
    const rad = 0.05 + (i / (N - 1)) * 0.42;
    return {
      bx: 0.5 + Math.cos(a) * rad * 0.62,
      by: 0.5 + Math.sin(a) * rad,
      rot: ((a * 180) / Math.PI) % 30 - 15,
    };
  });

  return [scatter, grid, diagonal, spiral, columns];
})();

const STAGGER = LAYOUT.map((_, i) => (i * 137) % 620); // per-tile transition delay (ms)
const SLOT_MS = 6800; // time each formation holds before advancing
const TRANS_MS = 2600; // ease time between formations

type TileState = {
  el: HTMLAnchorElement;
  magX: number;
  magY: number;
  scl: number;
  ext: number;
  hov: number;
  hovered: boolean;
};

export default function HeroProjectsField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // The ambient drift + formation loop runs whenever motion is allowed (incl.
    // touch). Only the cursor magnetism + hover-to-sharpen need a fine pointer.
    if (prefersReducedMotion()) return;
    const fine = hasFinePointer();

    const states: TileState[] = [];
    const tileCleanups: (() => void)[] = [];
    tileRefs.current.forEach((el) => {
      if (!el) return;
      const s: TileState = { el, magX: 0, magY: 0, scl: 1, ext: 0, hov: 0, hovered: false };
      if (fine) {
        const enter = () => {
          s.hovered = true;
        };
        const leave = () => {
          s.hovered = false;
        };
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        tileCleanups.push(() => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
        });
      }
      states.push(s);
    });

    let rect = container.getBoundingClientRect();
    let pointerX = 0;
    let pointerY = 0;
    let pointerActive = false;
    let raf = 0;
    let start = 0;

    // Formation cycle state.
    let slotStart = 0;
    let cur = 0;
    let prev = 0;

    const refreshRect = () => {
      rect = container.getBoundingClientRect();
    };
    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      pointerActive = true;
    };
    const onLeave = () => {
      pointerActive = false;
    };

    const tick = (now: number) => {
      if (!start) start = now;
      if (!slotStart) slotStart = now;
      const t = (now - start) / 1000;

      let inSlot = now - slotStart;
      if (inSlot > SLOT_MS) {
        prev = cur;
        cur = (cur + 1) % FORMATIONS.length;
        slotStart = now;
        inSlot = 0;
      }

      for (let i = 0; i < states.length; i++) {
        const s = states[i];
        const L = LAYOUT[i];

        // Blend the two active formations (per-tile staggered for a soft wave).
        const p = smoothstep(clamp01((inSlot - STAGGER[i]) / TRANS_MS));
        const A = FORMATIONS[prev][i];
        const B = FORMATIONS[cur][i];
        const fbx = A.bx + (B.bx - A.bx) * p;
        const fby = A.by + (B.by - A.by) * p;
        const frot = A.rot + (B.rot - A.rot) * p;

        // Idle drift + gentle wobble.
        const dx = Math.sin(t * L.speed + L.phase) * L.amp;
        const dy = Math.cos(t * L.speed * 0.85 + L.phase * 1.3) * L.amp * 0.72;
        const wob = Math.sin(t * L.speed * 0.5 + L.phase) * L.rotAmp;

        // Formation home in viewport coords (+ drift) for magnetic distance.
        const cx = rect.left + fbx * rect.width + dx;
        const cy = rect.top + fby * rect.height + dy;

        let targetMagX = 0;
        let targetMagY = 0;
        let targetScale = 1;
        let targetExt = 0;

        if (pointerActive) {
          const ox = pointerX - cx;
          const oy = pointerY - cy;
          const dist = Math.hypot(ox, oy);
          if (dist < L.radius) {
            const f = 1 - dist / L.radius;
            const ease = f * f * (3 - 2 * f);
            targetMagX = ox * ease * 0.5 * L.react;
            targetMagY = oy * ease * 0.5 * L.react;
            targetScale = 1 + ease * 0.4;
            targetExt = ease;
          }
        }

        const hovTarget = s.hovered ? 1 : 0;
        s.magX += (targetMagX - s.magX) * 0.14;
        s.magY += (targetMagY - s.magY) * 0.14;
        s.scl += (targetScale - s.scl) * 0.14;
        s.ext += (targetExt - s.ext) * 0.14;
        s.hov += (hovTarget - s.hov) * 0.2;

        // Hover forces the card fully crisp + forward, overriding depth blur.
        const clarity = Math.max(s.ext, s.hov);

        // Position via a delta from the scatter anchor set on left/top.
        const deltaX = (fbx - L.bx) * rect.width + dx + s.magX;
        const deltaY = (fby - L.by) * rect.height + dy + s.magY;
        const tilt = frot + wob - s.magX * 0.03;
        const sc = s.scl * (1 + s.hov * 0.12);
        s.el.style.transform = `translate(-50%, -50%) translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
        s.el.style.zIndex = String(s.hovered ? 200 : L.z + Math.round(s.ext * 60));

        const inner = s.el.firstElementChild as HTMLElement | null;
        if (inner) {
          inner.style.opacity = String(L.baseOpacity + clarity * (1 - L.baseOpacity));
          const blur = L.baseBlur * (1 - clarity);
          inner.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "none";
          const label = inner.lastElementChild as HTMLElement | null;
          if (label && label.dataset.tileLabel) label.style.opacity = String(Math.max(0, clarity * 1.4 - 0.15));
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? true;
        if (visible && !raf) {
          start = 0;
          raf = requestAnimationFrame(tick);
        } else if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(container);

    if (fine) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      window.addEventListener("blur", onLeave);
    }
    window.addEventListener("scroll", refreshRect, { passive: true });
    window.addEventListener("resize", refreshRect);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      tileCleanups.forEach((c) => c());
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("scroll", refreshRect);
      window.removeEventListener("resize", refreshRect);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 isolate overflow-hidden [--tilescale:0.44] sm:[--tilescale:0.72] lg:[--tilescale:0.92]"
    >
      {SHOWCASE_WORKS.map((work, i) => {
        const L = LAYOUT[i];
        return (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            tabIndex={-1}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            data-cursor-label={work.name}
            className={`pointer-events-auto absolute block ${L.depth < 0.5 ? "max-sm:hidden" : ""}`}
            style={{
              left: `${(L.bx * 100).toFixed(2)}%`,
              top: `${(L.by * 100).toFixed(2)}%`,
              width: `calc(${L.width}px * var(--tilescale))`,
              zIndex: L.z,
              transform: "translate(-50%, -50%)",
              willChange: "transform",
            }}
          >
            <span
              className="relative block aspect-[16/11] overflow-hidden rounded-[12px] border border-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] transition-shadow duration-300"
              style={{
                opacity: L.baseOpacity,
                filter: L.baseBlur ? `blur(${L.baseBlur}px)` : undefined,
              }}
            >
              <Image src={work.heroImage!.src} alt="" fill sizes="220px" className="object-cover" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span
                data-tile-label="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 px-2 pb-1.5 text-[10px] font-semibold leading-tight text-white opacity-0"
                style={{ fontFamily: "var(--display)" }}
              >
                {work.name}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
