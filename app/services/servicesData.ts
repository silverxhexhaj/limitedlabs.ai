export type ServiceCategory = "brand" | "software" | "marketing" | "automation" | "product-lab";

export type ServiceInclude = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  slug: string;
  index: string;
  category: ServiceCategory;
  name: string;
  tagline: string;
  summary: string;
  illustration: string;
  includes: ServiceInclude[];
  whoItsFor: string[];
  process: ServiceProcessStep[];
  deliverables: string[];
  tags: string[];
  invitationOnly?: boolean;
};

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    slug: "brand",
    index: "01",
    category: "brand",
    name: "Brand",
    tagline: "Strategic, sharp, and built to last.",
    summary:
      "Positioning, voice, identity, and content pillars — not a logo on a Pinterest moodboard. A brand system that holds up across every channel for years.",
    illustration: "/svg/brand-service.svg",
    includes: [
      {
        title: "Brand strategy & positioning",
        description: "Competitive audit, audience map, positioning statement, and brand pillars.",
      },
      {
        title: "Naming & taglines",
        description: "Shortlist, linguistic check (AL/EN), and trademark sanity check.",
      },
      {
        title: "Visual identity",
        description: "Logo system, type, color, iconography, and photo direction.",
      },
      {
        title: "Voice & tone",
        description: "Voice rules, copy style guide, and do/don't examples.",
      },
      {
        title: "Content pillars",
        description: "4–6 pillar definitions, monthly themes, and post archetypes.",
      },
      {
        title: "Brand guidelines",
        description: "Lightweight PDF or Notion site, asset library, and file naming.",
      },
      {
        title: "Launch narrative",
        description: "Story doc, hero copy, founder message, and internal rollout.",
      },
      {
        title: "Touchpoint starters",
        description: "Social templates, email signature, deck, pitch one-pager, signage starters.",
      },
      {
        title: "Brand audit (paid discovery)",
        description: "Heuristic review across web, social, and in-person — gap report included.",
      },
    ],
    whoItsFor: [
      "Hospitality, real estate, and service businesses that look inconsistent across channels.",
      "Founders who need a real positioning story before spending on ads or a website.",
      "Teams tired of one-off design assets with no system behind them.",
      "Operators ready to invest in a brand that lasts — not a Fiverr logo drop.",
    ],
    process: [
      {
        step: "01",
        title: "Listen & audit",
        description:
          "We map your market, audience, and current touchpoints. You get a clear read on what's working, what's noise, and where the gaps are.",
      },
      {
        step: "02",
        title: "System & sample",
        description:
          "We lock positioning, voice, and visual direction — then show it applied across real channels so you can feel the system before it ships.",
      },
      {
        step: "03",
        title: "Ship & guidelines",
        description:
          "Final assets, guidelines, and templates land in a structure your team can run without us in the room every week.",
      },
    ],
    deliverables: [
      "Positioning + naming guardrails",
      "Logo system + usage rules",
      "Type, color, and layout primitives",
      "Voice & tone guide",
      "Content pillars + monthly themes",
      "Brand guidelines (PDF or Notion)",
      "Social + OOH templates",
      "Launch narrative + key messaging",
    ],
    tags: ["Strategy", "Positioning", "Visual Identity", "Copywriting", "Content Pillars", "Brand Guidelines"],
  },
  {
    slug: "software",
    index: "02",
    category: "software",
    name: "Software",
    tagline: "Websites, MVPs, internal tools.",
    summary:
      "From a landing page that converts to a shipped MVP. Next.js, Supabase, deployed on Vercel — a stack you can grow into, with documentation you'll actually read.",
    illustration: "/svg/code-service.svg",
    includes: [
      {
        title: "Landing pages",
        description: "Conversion one-pagers, A/B variants, and fast LCP.",
      },
      {
        title: "Marketing websites",
        description: "Multi-page sites with light CMS where needed.",
      },
      {
        title: "PWAs",
        description: "Installable, offline-friendly apps for catalogs, listings, and menus.",
      },
      {
        title: "E-commerce MVPs",
        description: "Next.js + Supabase storefronts, Stripe checkout, and admin basics.",
      },
      {
        title: "SaaS MVPs",
        description: "Auth, billing, dashboards, and role-based access.",
      },
      {
        title: "Internal tools",
        description: "Ops consoles and custom CRMs that replace spreadsheets.",
      },
      {
        title: "Performance & SEO audits",
        description: "Core Web Vitals, structured data, and redirect cleanup.",
      },
      {
        title: "Integrations",
        description: "Payments, analytics, CRM, calendar, and email.",
      },
      {
        title: "Maintenance retainer",
        description: "Monthly improvement budget, bug fixes, and analytics review.",
      },
    ],
    whoItsFor: [
      "Early-stage founders who need an MVP but don't have an in-house team.",
      "SMBs with a website that doesn't convert or can't be updated without a developer.",
      "Operators who've outgrown spreadsheets and need a thin internal tool.",
      "Businesses that want a modern stack — not a WordPress theme from 2019.",
    ],
    process: [
      {
        step: "01",
        title: "Scope & architecture",
        description:
          "We define the smallest shippable version, map data models, and agree on what v1 does — and what it deliberately doesn't.",
      },
      {
        step: "02",
        title: "Design & build",
        description:
          "UX flows first, then code. You see working software early, not a Figma deck that never ships.",
      },
      {
        step: "03",
        title: "Deploy & handoff",
        description:
          "Production deploy, environment docs, and a clear path for your team to iterate or for us to stay on retainer.",
      },
    ],
    deliverables: [
      "Product architecture + MVP scope doc",
      "UI screens for core user flows",
      "Next.js app with Supabase backend",
      "Deployment + environment setup",
      "Documentation your team can follow",
      "Analytics and error monitoring hooks",
    ],
    tags: ["Landing Pages", "PWAs", "MVPs", "Internal Tools", "Next.js", "Supabase", "Vercel"],
  },
  {
    slug: "marketing-engines",
    index: "03",
    category: "marketing",
    name: "Marketing Engines",
    tagline: "Content + ads that compound.",
    summary:
      "Meta Ads, content systems, and lead workflows. Built to publish, learn, and improve every month — not to win a creative award and disappear.",
    illustration: "/svg/marketing-service.svg",
    includes: [
      {
        title: "Meta Ads",
        description: "Account setup, pixel + events, audiences, creative matrix, and weekly optimization.",
      },
      {
        title: "Google Ads (Search/PMax)",
        description: "Optional add-on for high-intent local search.",
      },
      {
        title: "Content system",
        description: "Monthly calendar, batch shoot day, and scripted post archetypes.",
      },
      {
        title: "Copywriting (AL/EN)",
        description: "Captions, ad copy, email, and landing copy in Albanian and English.",
      },
      {
        title: "Lead workflows",
        description: "Landing pages, capture, follow-up sequences, and WhatsApp/email handoff.",
      },
      {
        title: "Email marketing",
        description: "List setup, welcome flow, and monthly broadcast plan.",
      },
      {
        title: "Analytics & KPI dashboard",
        description: "UTM scheme, event naming, and monthly KPI report.",
      },
      {
        title: "Influencer / UGC briefs",
        description: "Vetted local creator outreach and brief templates.",
      },
      {
        title: "Local / geo campaigns",
        description: "Geofenced ads for restaurants, real estate, and hospitality.",
      },
      {
        title: "Content audit (one-off)",
        description: "Teardown of current channel performance with clear next steps.",
      },
    ],
    whoItsFor: [
      "Local Albanian businesses spending on ads without a system behind the creative.",
      "E-commerce brands that need content and paid working as one engine.",
      "Hospitality and real estate operators who need booked demand, not vanity reach.",
      "Teams that want weekly learning cadence — not a one-time campaign and silence.",
    ],
    process: [
      {
        step: "01",
        title: "Offer & funnel map",
        description:
          "We align your offer, landing experience, and ad narrative so every euro spent has somewhere useful to land.",
      },
      {
        step: "02",
        title: "Creative system & launch",
        description:
          "Repeatable ad angles, content batch, and tracking setup — then we go live with a clear test matrix.",
      },
      {
        step: "03",
        title: "Learn & optimize",
        description:
          "Weekly decisions: keep, fix, or kill. Reporting that forces action, not slide decks.",
      },
    ],
    deliverables: [
      "Offer + landing alignment map",
      "Creative matrix (angles × formats)",
      "Meta Ads account structure",
      "Content calendar (monthly)",
      "Weekly optimization checklist",
      "Lead follow-up script templates",
      "KPI dashboard (lightweight)",
    ],
    tags: ["Content Calendars", "Meta Ads", "Copywriting (AL/EN)", "Campaign Strategy", "KPI Reporting", "Lead Workflows"],
  },
  {
    slug: "automation",
    index: "04",
    category: "automation",
    name: "Automation",
    tagline: "Remove drag. Keep humans deciding.",
    summary:
      "Workflow audit, automation map, and a working system. AI drafts, you decide. Built with Make.com, Supabase, and APIs that talk to each other — instead of email threads that don't.",
    illustration: "/svg/ai-service.svg",
    includes: [
      {
        title: "Workflow audit",
        description: "Map current processes, identify top drag points, and score feasibility.",
      },
      {
        title: "Make.com / n8n / Zapier builds",
        description: "Connecting the tools you already use — no rip-and-replace.",
      },
      {
        title: "API integrations",
        description: "Custom connectors when no native integration exists.",
      },
      {
        title: "Internal AI tools",
        description: "Chatbots over your docs, AI-assisted drafts, and categorization.",
      },
      {
        title: "CRM / pipeline setup",
        description: "HubSpot, Pipedrive, or Notion pipelines with auto-tagging.",
      },
      {
        title: "Lead routing & handoff",
        description: "Round-robin assignment, auto-replies, and escalation rules.",
      },
      {
        title: "Review request workflow",
        description: "Auto-triggered after purchase or visit — with human approval gates.",
      },
      {
        title: "Reporting bots",
        description: "Daily or weekly summaries to Slack, WhatsApp, or email.",
      },
      {
        title: "Document automation",
        description: "Invoices, proposals, and contracts generated from templates.",
      },
      {
        title: "SOPs & training",
        description: "Written playbooks and Loom walkthroughs per workflow.",
      },
    ],
    whoItsFor: [
      "Operators inside small companies who can't justify a full engineering hire.",
      "Teams drowning in manual handoffs — email, WhatsApp, spreadsheets.",
      "Businesses that want AI to draft and humans to decide — not the other way around.",
      "Anyone who's tried Zapier once and gave up because nobody documented it.",
    ],
    process: [
      {
        step: "01",
        title: "Audit & map",
        description:
          "We interview the people doing the work, draw the real state machine, and pick the highest-leverage automations first.",
      },
      {
        step: "02",
        title: "Build & gate",
        description:
          "Working flows with human approval gates, audit logs, and rollback plans — nothing goes live without a sign-off path.",
      },
      {
        step: "03",
        title: "Train & maintain",
        description:
          "SOPs, Loom walkthroughs, and a maintenance window so the system keeps working after we leave.",
      },
    ],
    deliverables: [
      "Workflow audit + automation map",
      "Top 3 priority flows built and tested",
      "API integration plan",
      "Human approval gates + audit logs",
      "SOPs per workflow",
      "Rollout checklist + training notes",
    ],
    tags: ["Workflow Audit", "Make.com", "API Integrations", "Internal AI Tools", "SOPs"],
  },
  {
    slug: "product-lab",
    index: "05",
    category: "product-lab",
    name: "Product Lab",
    tagline: "For founders with an idea worth testing.",
    summary:
      "By invitation. We scope, build, validate — and we'll tell you when to pull the plug. No vanity MVPs. No \"let's see what happens.\"",
    illustration: "/svg/productlab-service.svg",
    invitationOnly: true,
    includes: [
      {
        title: "Idea evaluation sprint",
        description: "1–2 week sprint: problem validation, market sizing, go/no-go recommendation.",
      },
      {
        title: "MVP scoping & roadmap",
        description: "Ruthless v1 scope, milestones, and build-vs-buy calls.",
      },
      {
        title: "Validation plan",
        description: "Landing test, ad test, customer interviews, and success metrics.",
      },
      {
        title: "Pitch deck",
        description: "Narrative arc, financial story, and design polish.",
      },
      {
        title: "Investor materials",
        description: "One-pager, data room outline, and FAQ.",
      },
      {
        title: "Co-build engagement",
        description: "Limited Labs builds the MVP — optional equity or revenue share component.",
      },
      {
        title: "Founder coaching cadence",
        description: "Weekly check-ins through the sprint.",
      },
      {
        title: "Explicit go/no-go decision",
        description: "Clear recommendation at the end of the validation window — including when to stop.",
      },
    ],
    whoItsFor: [
      "Founders with a specific idea and the discipline to test it — not explore forever.",
      "Early-stage operators who need a partner to say no, not just yes.",
      "Teams invited after a discovery call — we don't take every idea.",
      "Anyone who'd rather kill a bad idea fast than fund a vanity MVP for six months.",
    ],
    process: [
      {
        step: "01",
        title: "Evaluate",
        description:
          "Problem, market, and feasibility — we stress-test the idea before writing a single line of code.",
      },
      {
        step: "02",
        title: "Scope & validate",
        description:
          "Ruthless MVP scope and a validation plan with real success metrics — not vanity signups.",
      },
      {
        step: "03",
        title: "Build or stop",
        description:
          "Co-build the MVP, hand off to your team, or recommend a clean sunset. We tell you which.",
      },
    ],
    deliverables: [
      "Idea evaluation report",
      "MVP scope + roadmap",
      "Validation plan with success metrics",
      "Pitch deck (if raising)",
      "Go/no-go recommendation",
      "Co-build proposal (if proceeding)",
    ],
    tags: ["Idea Evaluation", "MVP Scope", "Validation Plan", "Pitch Deck", "Roadmap"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICE_ITEMS.find((s) => s.slug === slug);
}

export function serviceToRequestedSystem(
  service: ServiceItem,
): "brand" | "marketing" | "software" | "ai-automation" | "not-sure" {
  if (service.category === "automation") return "ai-automation";
  if (service.category === "product-lab") return "not-sure";
  return service.category;
}

/** Maps service categories to work tab filter categories (excludes product-lab). */
export type WorkFilterCategory = "brand" | "software" | "marketing" | "automation";

export function serviceCategoryToWorkFilter(
  category: ServiceCategory,
): WorkFilterCategory | null {
  if (category === "product-lab") return null;
  return category;
}
