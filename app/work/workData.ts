export type WorkArtVariant =
  | "check"
  | "wireframe"
  | "chart"
  | "property"
  | "waves"
  | "grid";

export type WorkEvidenceClassification =
  | "verified-client-work"
  | "anonymized-client-work"
  | "internal-system"
  | "experiment"
  | "concept";

export const WORK_CLASSIFICATION_LABELS: Record<WorkEvidenceClassification, string> = {
  "verified-client-work": "Verified client work",
  "anonymized-client-work": "Anonymized client work",
  "internal-system": "Internal system",
  experiment: "Experiment",
  concept: "Concept",
};

export type WorkDetail = {
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  systems: string[];
  results: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  quarter: string;
  classification: WorkEvidenceClassification;
  primarySystem: "brand" | "marketing" | "software" | "ai-automation";
  tags: string[];
  /** Tailwind gradient background class for the thumbnail / hero art panel */
  gradientClass: string;
  art: WorkArtVariant;
  artWidthPercent: string;
  detail: WorkDetail;
};

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "hospitality-brand",
    title: "Hospitality Brand System",
    quarter: "Q2 2026",
    classification: "concept",
    primarySystem: "brand",
    tags: ["Branding", "Identity", "Content"],
    gradientClass: "bg-[linear-gradient(135deg,#ff7a59_0%,#c93b8b_50%,#4a1e5c_100%)]",
    art: "check",
    artWidthPercent: "60%",
    detail: {
      summary:
        "A concept showing how positioning, visual language, and repeatable content patterns can make hospitality touchpoints feel coherent.",
      challenge:
        "The brand needed to feel premium without being generic, and hold up across menus, signage, social, and staff training—not just a logo drop.",
      approach:
        "The proposed approach starts with story and guest journey, then defines a focused type and color system, photography direction, and practical voice rules.",
      deliverables: [
        "Positioning + naming guardrails",
        "Logo system + usage rules",
        "Type, color, and layout primitives",
        "Social + OOH templates",
        "Launch narrative + key messaging",
      ],
      systems: [
        "Brand guidelines (lightweight PDF)",
        "Content pillars + monthly themes",
        "Asset naming + folder structure",
      ],
      results:
        "Outcome target: a launch-ready hospitality brand system with reusable assets, clearer guest touchpoints, and a content structure ready for bookings, events, and local campaigns.",
    },
  },
  {
    slug: "e-commerce-mvp",
    title: "E-commerce MVP Blueprint",
    quarter: "Q2 2026",
    classification: "concept",
    primarySystem: "software",
    tags: ["UI/UX", "Next.js", "Supabase"],
    gradientClass: "bg-[linear-gradient(135deg,#b8a4ff_0%,#6e7cff_50%,#1a3aa0_100%)]",
    art: "wireframe",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A concept for a focused storefront MVP covering catalogue, checkout, admin basics, and analytics hooks.",
      challenge:
        "Move fast without painting the team into a corner—clean UX today, room for payments, inventory, and campaigns tomorrow.",
      approach:
        "The blueprint scopes a deliberately small v1, prioritizes the purchase flow, and maps data and admin needs before expansion.",
      deliverables: [
        "Product architecture + MVP scope",
        "UI screens for browse → cart → success",
        "Supabase schema + Row Level Security plan",
        "Deployment + environment setup",
      ],
      systems: ["Next.js app routes", "Supabase Postgres + Auth", "Vercel deploy pipeline", "Error monitoring hooks (optional)"],
      results:
        "Outcome target: a storefront foundation prepared for conversion tracking, campaign attribution, inventory expansion, and a faster path from first visit to first purchase.",
    },
  },
  {
    slug: "local-smb-campaign",
    title: "Local Demand System",
    quarter: "Q2 2026",
    classification: "concept",
    primarySystem: "marketing",
    tags: ["Meta Ads", "Content", "Strategy"],
    gradientClass: "bg-[linear-gradient(135deg,#ffe27a_0%,#ff9c4a_50%,#b73a1a_100%)]",
    art: "chart",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A concept for connecting offer structure, creative testing, and weekly decisions into a measurable local demand system.",
      challenge:
        "Tight geo + limited budget means every creative and audience test has to teach something useful within days, not months.",
      approach:
        "The proposed approach uses a simple funnel narrative, repeatable ad angles, and a reporting rhythm that forces keep, fix, or stop decisions.",
      deliverables: [
        "Offer + landing alignment map",
        "Creative matrix (angles × formats)",
        "Weekly optimization checklist",
        "Lead follow-up script templates",
      ],
      systems: ["Meta Ads structure", "UTM + event naming", "Monthly content batching", "KPI dashboard (lightweight)"],
      results:
        "Outcome target: a local campaign engine where every creative test, landing page visit, and lead response can be measured and improved weekly.",
    },
  },
  {
    slug: "real-estate-pwa",
    title: "Real Estate PWA Concept",
    quarter: "Q3 2026",
    classification: "concept",
    primarySystem: "software",
    tags: ["Product", "Branding", "PWA"],
    gradientClass: "bg-[linear-gradient(135deg,#7affc0_0%,#2da38a_50%,#0c4a5e_100%)]",
    art: "property",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A concept for a fast, installable property browsing experience designed around listing clarity, inquiry flow, and mobile performance.",
      challenge:
        "High-quality media without brutal load times—and a UX that earns trust quickly in a skeptical category.",
      approach:
        "The concept prioritizes inquiry-first navigation, responsive image delivery, caching, and deliberately obvious information architecture.",
      deliverables: [
        "Listing + detail UX flows",
        "Brand surface area for agent trust signals",
        "PWA manifest + offline-friendly assets",
        "Performance budget + image strategy",
      ],
      systems: ["Next.js", "Edge-friendly caching", "Analytics events for inquiry funnel", "Email/SMS handoff hooks"],
      results:
        "Outcome target: a fast property browsing experience designed around inquiry rate, mobile performance, and install-ready repeat usage.",
    },
  },
  {
    slug: "restaurant-system",
    title: "Restaurant Operating System",
    quarter: "Q3 2026",
    classification: "concept",
    primarySystem: "marketing",
    tags: ["Brand", "Marketing", "Automation"],
    gradientClass: "bg-[linear-gradient(135deg,#ffbb9d_0%,#ff6b9d_50%,#5e1a4a_100%)]",
    art: "waves",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A concept connecting brand, marketing, and lightweight automation for more consistent daily restaurant operations.",
      challenge:
        "Restaurants run on thin margins and thinner time—tools need to be obvious and maintainable by non-technical staff.",
      approach:
        "The proposed approach maps weekly operations, replaces duplicate work with templates, and automates routine reminders, routing, and handoffs.",
      deliverables: [
        "Brand refresh + menu hierarchy",
        "Campaign calendar tied to real kitchen capacity",
        "Automation map (human approvals kept)",
        "Staff-friendly SOPs",
      ],
      systems: ["Content templates", "Lead/inquiry routing", "Review request workflow (optional)", "Light CRM tagging"],
      results:
        "Outcome target: fewer repeated content requests, cleaner promo planning, and more consistent customer touchpoints across menu, social, and follow-up.",
    },
  },
  {
    slug: "internal-ops-tool",
    title: "Internal Operations Console",
    quarter: "Q3 2026",
    classification: "internal-system",
    primarySystem: "ai-automation",
    tags: ["Automation", "Tooling", "AI"],
    gradientClass: "bg-[linear-gradient(135deg,#c4a3ff_0%,#5a3aa0_50%,#1a1040_100%)]",
    art: "grid",
    artWidthPercent: "55%",
    detail: {
      summary:
        "An internal system pattern for turning recurring administrative work into guided flows with clear states and approval controls.",
      challenge:
        "Spreadsheets worked until they didn’t: permissions, auditability, and speed became the real product requirements.",
      approach:
        "The internal approach maps operator jobs and state transitions first, then grows the console module by module.",
      deliverables: [
        "Workflow audit + permission model",
        "Core screens for the top 3 jobs-to-be-done",
        "API integration plan",
        "Rollout checklist + training notes",
      ],
      systems: ["Role-based access", "Audit log events", "Background jobs for imports", "AI assist behind approval gates"],
      results:
        "Outcome target: lower manual admin load, clearer ownership, and safer throughput through permissions, audit logs, and approval-gated AI assistance.",
    },
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((w) => w.slug === slug);
}
