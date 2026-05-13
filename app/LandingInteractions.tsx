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

    const track = document.getElementById("workTrack");
    let isDown = false;
    let startX = 0;
    let scrollLeftStart = 0;

    const onWindowMouseMove = (e: MouseEvent) => {
      if (!track || !isDown) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.6;
      track.scrollLeft = scrollLeftStart - walk;
    };

    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      track?.classList.remove("dragging");
      window.removeEventListener("mousemove", onWindowMouseMove);
      window.removeEventListener("mouseup", endDrag);
    };

    const onTrackMouseDown = (e: MouseEvent) => {
      if (!track || e.button !== 0) return;
      isDown = true;
      track.classList.add("dragging");
      startX = e.pageX;
      scrollLeftStart = track.scrollLeft;
      window.addEventListener("mousemove", onWindowMouseMove);
      window.addEventListener("mouseup", endDrag);
    };

    track?.addEventListener("mousedown", onTrackMouseDown);

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
      track?.removeEventListener("mousedown", onTrackMouseDown);
      intersectionObserver?.disconnect();
    };
  }, []);

  return null;
}
