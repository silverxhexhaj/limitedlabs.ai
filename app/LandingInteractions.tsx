"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

const THEME_STORAGE_KEY = "limitedlabs-theme";
type Theme = "light" | "dark";

function initialTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Use the system preference when storage is unavailable.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const button = document.getElementById("themeToggle");
  button?.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
}

export default function LandingInteractions() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("themeToggle");
    applyTheme(initialTheme());

    const onThemeToggle = () => {
      const next: Theme =
        document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Theme still applies for the current page.
      }
    };

    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 32);

    const onAnalyticsClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-analytics-event]");
      if (!target) return;
      const name = target.dataset.analyticsEvent;
      if (name === "email_clicked" || name === "discovery_call_clicked") {
        trackEvent(name, {
          page_path: window.location.pathname,
          placement: target.dataset.analyticsPlacement || "unknown",
        });
      } else if (name === "service_audit_clicked" && target.dataset.analyticsSlug) {
        trackEvent(name, {
          page_path: window.location.pathname,
          service_slug: target.dataset.analyticsSlug,
        });
      } else if (name === "work_audit_clicked" && target.dataset.analyticsSlug) {
        trackEvent(name, {
          page_path: window.location.pathname,
          work_slug: target.dataset.analyticsSlug,
        });
      }
    };

    toggle?.addEventListener("click", onThemeToggle);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnalyticsClick);
    onScroll();

    const pageView = document.querySelector<HTMLElement>("[data-page-view-event]");
    if (
      pageView?.dataset.pageViewEvent === "service_interest_viewed" &&
      pageView.dataset.pageViewSlug
    ) {
      trackEvent("service_interest_viewed", {
        service_slug: pageView.dataset.pageViewSlug,
        page_path: window.location.pathname,
      });
    } else if (
      pageView?.dataset.pageViewEvent === "work_viewed" &&
      pageView.dataset.pageViewSlug &&
      pageView.dataset.pageViewClassification
    ) {
      trackEvent("work_viewed", {
        work_slug: pageView.dataset.pageViewSlug,
        classification: pageView.dataset.pageViewClassification,
        page_path: window.location.pathname,
      });
    }

    // [data-reveal] entrance animation is handled globally by <ScrollReveal /> (GSAP).

    return () => {
      toggle?.removeEventListener("click", onThemeToggle);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnalyticsClick);
    };
  }, []);

  return null;
}
