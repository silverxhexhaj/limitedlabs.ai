"use client";

import { useEffect } from "react";

export default function LandingInteractions() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    const track = document.getElementById("workTrack");
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      if (!track) return;
      isDown = true;
      track.classList.add("dragging");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onMouseLeave = () => {
      if (!track) return;
      isDown = false;
      track.classList.remove("dragging");
    };
    const onMouseUp = () => {
      if (!track) return;
      isDown = false;
      track.classList.remove("dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!track || !isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.6;
      track.scrollLeft = scrollLeft - walk;
    };

    if (track) {
      track.addEventListener("mousedown", onMouseDown);
      track.addEventListener("mouseleave", onMouseLeave);
      track.addEventListener("mouseup", onMouseUp);
      track.addEventListener("mousemove", onMouseMove);
    }

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
      document
        .querySelectorAll(".service-slide, .stat-card, .test-card, .work-card")
        .forEach((el) => {
          const node = el as HTMLElement;
          node.style.opacity = "0";
          node.style.transform = "translateY(24px)";
          node.style.transition =
            "opacity 0.7s cubic-bezier(.2,.6,.2,1), transform 0.7s cubic-bezier(.2,.6,.2,1)";
          intersectionObserver?.observe(el);
        });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (track) {
        track.removeEventListener("mousedown", onMouseDown);
        track.removeEventListener("mouseleave", onMouseLeave);
        track.removeEventListener("mouseup", onMouseUp);
        track.removeEventListener("mousemove", onMouseMove);
      }
      intersectionObserver?.disconnect();
    };
  }, []);

  return null;
}
