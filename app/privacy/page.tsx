import type { Metadata } from "next";

import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Notice - Limited Labs",
  description: "How Limited Labs handles public systems audit submissions.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
