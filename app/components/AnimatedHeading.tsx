"use client";

import { createElement, useEffect, useLayoutEffect, useRef, type CSSProperties } from "react";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const normalize = (w: string) => w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

type Props = {
  text: string;
  /** Words rendered in Instrument Serif italic + accent color (matched, punctuation-insensitive). */
  accentWords?: string[];
  /** Render the final N words as accents — language-agnostic, robust to copy edits. */
  accentLast?: number;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  className?: string;
  /** Animate on mount (hero) rather than on scroll-in. */
  immediate?: boolean;
  delay?: number;
  style?: CSSProperties;
};

/**
 * Word-by-word rise + de-blur reveal with the wibify signature: chosen words
 * swap into Instrument Serif italic in the accent color. No overflow clipping,
 * so tight leading, descenders and diacritics (ë, ç) are never cut. SSR-safe and
 * screen-reader-friendly (real text content). Inert under reduced motion.
 */
export default function AnimatedHeading({
  text,
  accentWords = [],
  accentLast = 0,
  as = "h2",
  id,
  className = "",
  immediate = false,
  delay = 0,
  style,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const accentSet = new Set(accentWords.map(normalize));

  useIso(() => {
    const root = rootRef.current;
    if (!root) return;
    const inners = Array.from(root.querySelectorAll<HTMLElement>(".ah-inner"));
    if (!inners.length) return;

    if (prefersReducedMotion()) {
      gsap.set(inners, { opacity: 1, yPercent: 0, filter: "blur(0px)" });
      return;
    }

    gsap.set(inners, { opacity: 0, yPercent: 55, filter: "blur(8px)" });
    const tl = gsap.timeline({ paused: true });
    tl.to(inners, {
      opacity: 1,
      yPercent: 0,
      filter: "blur(0px)",
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.05,
      delay,
      onComplete: () => gsap.set(inners, { clearProps: "filter,willChange" }),
    });

    let trigger: ScrollTrigger | undefined;
    if (immediate) {
      tl.play(0);
    } else {
      trigger = ScrollTrigger.create({
        trigger: root,
        start: "top 84%",
        once: true,
        onEnter: () => tl.play(0),
      });
    }

    return () => {
      trigger?.kill();
      tl.kill();
    };
  }, [text, immediate, delay]);

  const tokens = text.split(/(\s+)/); // keep whitespace tokens to preserve spacing
  const wordIndices = tokens.reduce<number[]>((acc, tk, i) => {
    if (!/^\s+$/.test(tk)) acc.push(i);
    return acc;
  }, []);
  const lastAccentSet = new Set(accentLast > 0 ? wordIndices.slice(-accentLast) : []);
  const nodes = tokens.map((token, i) => {
    if (/^\s+$/.test(token)) return token;
    const isAccent = accentSet.has(normalize(token)) || lastAccentSet.has(i);
    return (
      <span key={i} className="ah-word inline-block">
        <span
          className={
            "ah-inner inline-block will-change-transform" +
            (isAccent ? " font-serif italic text-accent pr-[0.04em]" : "")
          }
        >
          {token}
        </span>
      </span>
    );
  });

  // eslint-disable-next-line react-hooks/refs -- forwarding the ref object to the element; .current is never read during render
  return createElement(as, { ref: rootRef, id, className, style }, nodes);
}
