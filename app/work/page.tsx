import type { Metadata } from "next";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import LandingInteractions from "../LandingInteractions";
import ShowcaseFonts from "./showcase/ShowcaseFonts";
import WorkIndexContent from "./WorkIndexContent";

export const metadata: Metadata = {
  title: "Work — 25 systems by Limited Labs",
  description:
    "A showcase of 25 original works — brands, products, e-commerce, AI tools, dashboards, campaigns and experiences — each designed end to end to prove what a complete digital systems studio can build.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <>
      <ShowcaseFonts />
      <SiteHeader />
      <main id="top">
        <WorkIndexContent />
      </main>
      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
