export type WorkArtVariant =
  | "check"
  | "wireframe"
  | "chart"
  | "property"
  | "waves"
  | "grid";

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
    title: "Hospitality Brand",
    quarter: "Q2 2026",
    tags: ["Branding", "Identity", "Content"],
    gradientClass: "bg-[linear-gradient(135deg,#ff7a59_0%,#c93b8b_50%,#4a1e5c_100%)]",
    art: "check",
    artWidthPercent: "60%",
    detail: {
      summary:
        "A full hospitality identity system—positioning, visual language, and repeatable content patterns so every touchpoint feels like the same place.",
      challenge:
        "The brand needed to feel premium without being generic, and hold up across menus, signage, social, and staff training—not just a logo drop.",
      approach:
        "We started with story and guest journey, then locked a tight type + color system, photography direction, and voice rules you can actually run day to day.",
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
        "Placeholder outcome copy—swap in timelines, KPIs, and named links once the engagement wraps (traffic, bookings, reopening notes, whatever’s real).",
    },
  },
  {
    slug: "e-commerce-mvp",
    title: "E-commerce MVP",
    quarter: "Q2 2026",
    tags: ["UI/UX", "Next.js", "Supabase"],
    gradientClass: "bg-[linear-gradient(135deg,#b8a4ff_0%,#6e7cff_50%,#1a3aa0_100%)]",
    art: "wireframe",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A shippable storefront MVP: catalogue, checkout path, admin basics, and analytics hooks—built to iterate, not stall in “almost done.”",
      challenge:
        "Move fast without painting the team into a corner—clean UX today, room for payments, inventory, and campaigns tomorrow.",
      approach:
        "We scoped a ruthlessly small v1, designed the purchase flow first, then wired data models and admin flows so operations stay sane.",
      deliverables: [
        "Product architecture + MVP scope",
        "UI screens for browse → cart → success",
        "Supabase schema + Row Level Security plan",
        "Deployment + environment setup",
      ],
      systems: ["Next.js app routes", "Supabase Postgres + Auth", "Vercel deploy pipeline", "Error monitoring hooks (optional)"],
      results:
        "Placeholder metrics—plug in conversion, AOV, or time-to-first-sale once live data exists.",
    },
  },
  {
    slug: "local-smb-campaign",
    title: "Local SMB Campaign",
    quarter: "Q2 2026",
    tags: ["Meta Ads", "Content", "Strategy"],
    gradientClass: "bg-[linear-gradient(135deg,#ffe27a_0%,#ff9c4a_50%,#b73a1a_100%)]",
    art: "chart",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A local growth engine: offer structure, creative system, and weekly learning cadence so ad spend turns into booked demand—not noise.",
      challenge:
        "Tight geo + limited budget means every creative and audience test has to teach something useful within days, not months.",
      approach:
        "We built a simple funnel narrative, three repeatable ad angles, and a reporting rhythm that forces decisions: keep, fix, or kill.",
      deliverables: [
        "Offer + landing alignment map",
        "Creative matrix (angles × formats)",
        "Weekly optimization checklist",
        "Lead follow-up script templates",
      ],
      systems: ["Meta Ads structure", "UTM + event naming", "Monthly content batching", "KPI dashboard (lightweight)"],
      results:
        "Placeholder learnings—replace with CPL, response rate, and revenue impact once campaigns have run.",
    },
  },
  {
    slug: "real-estate-pwa",
    title: "Real Estate PWA",
    quarter: "Q3 2026",
    tags: ["Product", "Branding", "PWA"],
    gradientClass: "bg-[linear-gradient(135deg,#7affc0_0%,#2da38a_50%,#0c4a5e_100%)]",
    art: "property",
    artWidthPercent: "55%",
    detail: {
      summary:
        "A fast, installable browsing experience with crisp listing hierarchy, inquiry flow, and performance tuned for flaky mobile networks.",
      challenge:
        "High-quality media without brutal load times—and a UX that earns trust quickly in a skeptical category.",
      approach:
        "We prototyped inquiry-first navigation, prioritized image pipelines and caching, and kept the IA boringly obvious on purpose.",
      deliverables: [
        "Listing + detail UX flows",
        "Brand surface area for agent trust signals",
        "PWA manifest + offline-friendly assets",
        "Performance budget + image strategy",
      ],
      systems: ["Next.js", "Edge-friendly caching", "Analytics events for inquiry funnel", "Email/SMS handoff hooks"],
      results:
        "Placeholder product stats—swap in LCP, inquiry rate, and install rate after launch.",
    },
  },
  {
    slug: "restaurant-system",
    title: "Restaurant System",
    quarter: "Q3 2026",
    tags: ["Brand", "Marketing", "Automation"],
    gradientClass: "bg-[linear-gradient(135deg,#ffbb9d_0%,#ff6b9d_50%,#5e1a4a_100%)]",
    art: "waves",
    artWidthPercent: "55%",
    detail: {
      summary:
        "Brand + marketing + lightweight automation as one system: consistent voice, scheduled promos, and fewer “can someone post this?” threads.",
      challenge:
        "Restaurants run on thin margins and thinner time—tools need to be obvious and maintainable by non-technical staff.",
      approach:
        "We mapped weekly operations, removed duplicate work with templates, and automated only the boring parts (reminders, routing, handoffs).",
      deliverables: [
        "Brand refresh + menu hierarchy",
        "Campaign calendar tied to real kitchen capacity",
        "Automation map (human approvals kept)",
        "Staff-friendly SOPs",
      ],
      systems: ["Content templates", "Lead/inquiry routing", "Review request workflow (optional)", "Light CRM tagging"],
      results:
        "Placeholder ops wins—drop in hours saved, repeat visits, or promo redemption when you have them.",
    },
  },
  {
    slug: "internal-ops-tool",
    title: "Internal Ops Tool",
    quarter: "Q3 2026",
    tags: ["Automation", "Tooling", "AI"],
    gradientClass: "bg-[linear-gradient(135deg,#c4a3ff_0%,#5a3aa0_50%,#1a1040_100%)]",
    art: "grid",
    artWidthPercent: "55%",
    detail: {
      summary:
        "An internal console that turns recurring admin work into a guided flow—fast search, clear states, and guardrails so mistakes are rare.",
      challenge:
        "Spreadsheets worked until they didn’t: permissions, auditability, and speed became the real product requirements.",
      approach:
        "We interviewed the actual operators, drew the real state machine, then shipped a thin shell that could grow module-by-module.",
      deliverables: [
        "Workflow audit + permission model",
        "Core screens for the top 3 jobs-to-be-done",
        "API integration plan",
        "Rollout checklist + training notes",
      ],
      systems: ["Role-based access", "Audit log events", "Background jobs for imports", "AI assist behind approval gates"],
      results:
        "Placeholder efficiency metrics—add time-to-complete, error rate reduction, or throughput once measured.",
    },
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((w) => w.slug === slug);
}
