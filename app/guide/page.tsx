import type { Metadata } from "next";

import GuideContent from "./GuideContent";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import LandingInteractions from "../LandingInteractions";

export const metadata: Metadata = {
  title: "How the showcase was made — Limited Labs Guide",
  description:
    "The creative process, structure, tools and design approach behind Limited Labs' 25-work showcase — and a blueprint for building a similar proof-of-capability collection yourself.",
  alternates: { canonical: "/guide" },
};

export default function GuidePage() {
  return (
    <>
      <SiteHeader />
      <GuideContent />
      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
