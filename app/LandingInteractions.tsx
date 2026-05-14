"use client";

import { useEffect } from "react";

const THEME_STORAGE_KEY = "limitedlabs-theme";

type Theme = "light" | "dark";

function readStoredTheme(): Theme | null {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
  } catch {
    /* ignore */
  }
  return null;
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveInitialTheme(): Theme {
  return readStoredTheme() ?? systemTheme();
}

function applyDomTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function syncThemeToggleLabel(button: HTMLElement, theme: Theme) {
  button.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
}

export default function LandingInteractions() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const initialTheme = resolveInitialTheme();
    applyDomTheme(initialTheme);

    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) syncThemeToggleLabel(toggleBtn, initialTheme);

    const onThemeToggleClick = () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next: Theme = current === "light" ? "dark" : "light";
      applyDomTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      if (toggleBtn) syncThemeToggleLabel(toggleBtn, next);
    };

    toggleBtn?.addEventListener("click", onThemeToggleClick);

    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    const scrollOpts: AddEventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, scrollOpts);
    onScroll();

    const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");
    const reduceHeroMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resetHeroTitle = () => {
      if (!heroTitle) return;
      heroTitle.classList.remove("is-hero-active");
      heroTitle.style.setProperty("--hero-tilt-x", "0deg");
      heroTitle.style.setProperty("--hero-tilt-y", "0deg");
      heroTitle.style.setProperty("--hero-glare-x", "50%");
      heroTitle.style.setProperty("--hero-glare-y", "50%");
    };

    const onHeroPointerMove = (e: PointerEvent) => {
      if (!heroTitle || reduceHeroMotion) return;
      const rect = heroTitle.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const clampedX = Math.min(Math.max(x, 0), 1);
      const clampedY = Math.min(Math.max(y, 0), 1);

      heroTitle.classList.add("is-hero-active");
      heroTitle.style.setProperty("--hero-tilt-x", `${((0.5 - clampedY) * 9).toFixed(2)}deg`);
      heroTitle.style.setProperty("--hero-tilt-y", `${((clampedX - 0.5) * 12).toFixed(2)}deg`);
      heroTitle.style.setProperty("--hero-glare-x", `${(clampedX * 100).toFixed(2)}%`);
      heroTitle.style.setProperty("--hero-glare-y", `${(clampedY * 100).toFixed(2)}%`);
    };

    if (heroTitle && !reduceHeroMotion) {
      heroTitle.addEventListener("pointermove", onHeroPointerMove);
      heroTitle.addEventListener("pointerleave", resetHeroTitle);
      heroTitle.addEventListener("pointercancel", resetHeroTitle);
    }

    const track = document.getElementById("workTrack");
    const DRAG_THRESHOLD_PX = 10;

    let pointerDown = false;
    let dragActive = false;
    let suppressNextClick = false;
    let startX = 0;
    let scrollLeftStart = 0;

    const onWindowMouseMove = (e: MouseEvent) => {
      if (!track || !pointerDown) return;
      const dx = e.pageX - startX;
      if (!dragActive && Math.abs(dx) > DRAG_THRESHOLD_PX) {
        dragActive = true;
        track.classList.add("dragging");
      }
      if (!dragActive) return;
      e.preventDefault();
      const walk = dx * 1.6;
      track.scrollLeft = scrollLeftStart - walk;
    };

    const endDrag = () => {
      if (!pointerDown) return;
      pointerDown = false;

      suppressNextClick = dragActive;

      dragActive = false;
      track?.classList.remove("dragging");

      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", endDrag);
    };

    const onTrackClickCapture = (e: MouseEvent) => {
      if (!track || !suppressNextClick) return;
      e.preventDefault();
      e.stopPropagation();
      suppressNextClick = false;
    };

    const onTrackMouseDown = (e: MouseEvent) => {
      if (!track || e.button !== 0) return;
      suppressNextClick = false;
      pointerDown = true;
      dragActive = false;
      startX = e.pageX;
      scrollLeftStart = track.scrollLeft;
      window.addEventListener("mousemove", onWindowMouseMove);
      window.addEventListener("mouseup", endDrag);
    };

    track?.addEventListener("mousedown", onTrackMouseDown);
    track?.addEventListener("click", onTrackClickCapture, true);

    let intersectionObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const el = en.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              intersectionObserver?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const node = el as HTMLElement;
        node.style.opacity = "0";
        node.style.transform = "translateY(24px)";
        node.style.transition =
          "opacity 0.7s cubic-bezier(.2,.6,.2,1), transform 0.7s cubic-bezier(.2,.6,.2,1)";
        intersectionObserver?.observe(el);
      });
    }

    return () => {
      toggleBtn?.removeEventListener("click", onThemeToggleClick);
      window.removeEventListener("scroll", onScroll, scrollOpts);
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", endDrag);
      heroTitle?.removeEventListener("pointermove", onHeroPointerMove);
      heroTitle?.removeEventListener("pointerleave", resetHeroTitle);
      heroTitle?.removeEventListener("pointercancel", resetHeroTitle);
      track?.removeEventListener("mousedown", onTrackMouseDown);
      track?.removeEventListener("click", onTrackClickCapture, true);
      intersectionObserver?.disconnect();
    };
  }, []);

  return null;
}
