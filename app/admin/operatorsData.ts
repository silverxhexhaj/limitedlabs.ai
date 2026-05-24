export type OperatorStatus = "ready" | "draft" | "scheduled";
export type OperatorCadence = "on-demand" | "daily" | "weekly" | "monthly";

export type OperatorItem = {
  slug: string;
  name: string;
  category: "Product" | "SEO" | "Conversion" | "Operations" | "Marketplace" | "Growth";
  status: OperatorStatus;
  cadence: OperatorCadence;
  priority: "P0" | "P1" | "P2";
  owner: string;
  outcome: string;
  manages: string[];
  inputs: string[];
  nextAction: string;
};

export const OPERATOR_ITEMS: OperatorItem[] = [
  {
    slug: "limitedlabs-site-operator",
    name: "Limited Labs Site Operator",
    category: "Operations",
    status: "ready",
    cadence: "weekly",
    priority: "P0",
    owner: "Limited Labs",
    outcome: "Keep the public site sharp, conversion-focused, SEO-safe, and production-ready.",
    manages: ["Homepage copy", "SEO metadata", "build checks", "case proof", "service pages"],
    inputs: ["Repo status", "readiness checks", "site copy", "service offers"],
    nextAction: "Run weekly audit and ship the top conversion fix.",
  },
  {
    slug: "landing-page-conversion-audit",
    name: "Landing Page Conversion Audit",
    category: "Conversion",
    status: "ready",
    cadence: "on-demand",
    priority: "P0",
    owner: "All platforms",
    outcome: "Find the fastest way to make a page clearer, more trusted, and more likely to convert.",
    manages: ["Hero clarity", "CTA strength", "proof", "objections", "mobile flow"],
    inputs: ["Live page", "target customer", "offer", "analytics if available"],
    nextAction: "Use before every landing page change.",
  },
  {
    slug: "seo-growth-audit",
    name: "SEO Growth Audit",
    category: "SEO",
    status: "ready",
    cadence: "weekly",
    priority: "P0",
    owner: "Limited Labs",
    outcome: "Grow qualified search demand through technical SEO, service pages, and local intent pages.",
    manages: ["Sitemap", "robots", "schema", "metadata", "industry pages", "internal links"],
    inputs: ["Source files", "Google/Search data", "competitor pages", "keyword targets"],
    nextAction: "Create restaurant, real-estate, and automation landing-page briefs.",
  },
  {
    slug: "product-positioning-audit",
    name: "Product Positioning Audit",
    category: "Product",
    status: "ready",
    cadence: "on-demand",
    priority: "P0",
    owner: "Silver",
    outcome: "Turn vague product ideas into sharper customers, pains, promises, and packages.",
    manages: ["ICP", "pain urgency", "offer", "differentiation", "pricing clarity"],
    inputs: ["Business idea", "target user", "competitors", "constraints"],
    nextAction: "Run against each new offer before build work starts.",
  },
  {
    slug: "weekly-business-operator-review",
    name: "Weekly Business Operator Review",
    category: "Operations",
    status: "scheduled",
    cadence: "weekly",
    priority: "P0",
    owner: "Silver",
    outcome: "Produce a weekly operator memo with what changed, what broke, and what to do next.",
    manages: ["Priorities", "site checks", "lead flow", "repo health", "business focus"],
    inputs: ["Limited Labs", "limited.al", "Vento Caffe", "recent sessions", "open tasks"],
    nextAction: "Schedule as a Monday morning cron once the format is approved.",
  },
  {
    slug: "limitedal-marketplace-operator",
    name: "limited.al Marketplace Operator",
    category: "Marketplace",
    status: "draft",
    cadence: "weekly",
    priority: "P1",
    owner: "limited.al",
    outcome: "Improve seller onboarding, trust, order flow, admin visibility, and automation opportunities.",
    manages: ["Seller onboarding", "orders", "admin states", "trust signals", "automation hooks"],
    inputs: ["Marketplace repo", "seller flow", "order states", "Mac mini signals"],
    nextAction: "Map seller journey and define the first automation dashboard.",
  },
  {
    slug: "local-business-growth-system",
    name: "Local Business Growth System",
    category: "Growth",
    status: "draft",
    cadence: "monthly",
    priority: "P1",
    owner: "Limited Labs clients",
    outcome: "Package websites, content, ads, follow-up, and reviews for restaurants, cafes, real estate, and services.",
    manages: ["Offer", "landing page", "ads/content", "follow-up", "reviews"],
    inputs: ["Industry", "location", "budget", "current channels", "sales process"],
    nextAction: "Turn this into a client-facing package page.",
  },
  {
    slug: "competitor-positioning-research",
    name: "Competitor Positioning Research",
    category: "Product",
    status: "draft",
    cadence: "monthly",
    priority: "P2",
    owner: "All platforms",
    outcome: "Monitor competitor offers, pricing signals, SEO pages, content angles, and gaps to attack.",
    manages: ["Competitors", "offers", "SEO gaps", "positioning", "content angles"],
    inputs: ["Competitor URLs", "search queries", "market category", "target geography"],
    nextAction: "Build the first competitor list for Limited Labs in Tirana/Albania.",
  },
];

export const OPERATOR_STATS = {
  total: OPERATOR_ITEMS.length,
  ready: OPERATOR_ITEMS.filter((item) => item.status === "ready").length,
  scheduled: OPERATOR_ITEMS.filter((item) => item.status === "scheduled").length,
  p0: OPERATOR_ITEMS.filter((item) => item.priority === "P0").length,
};
