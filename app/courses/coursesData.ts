export type CourseStatus = "available" | "coming-soon";

export type CourseModule = {
  index: string;
  title: string;
  duration: string;
  lessons: string[];
};

export type CourseInclude = {
  title: string;
  description: string;
};

export type CoursePricingTier = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  /** Checkout target. Until Stripe/Lemon Squeezy is wired, this is a mailto so
   *  enrollment works day one and routes to a real conversation. */
  checkoutUrl: string;
  featured?: boolean;
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type CourseItem = {
  slug: string;
  index: string;
  status: CourseStatus;
  /** Free courses swap price displays for the localized "Free" label and hide
   *  payment-only chrome (one-time payment, money-back guarantee). */
  isFree?: boolean;
  /** Hero H1. Words listed in `accentWords` render in the lime accent. */
  title: string;
  accentWords: string[];
  subtitle: string;
  /** Short description used for cards + metadata. */
  summary: string;
  level: string;
  durationLabel: string;
  moduleCount: number;
  languages: string;
  priceFrom: string;
  /** Hero meta chips, e.g. "2.5 HRS". */
  meta: string[];
  outcomes: string[];
  whoItsFor: string[];
  modules: CourseModule[];
  included: CourseInclude[];
  pricing: CoursePricingTier[];
  faqs: CourseFaq[];
  tags: string[];
};

const ENROLL_EMAIL = "hello@limitedlabs.co";

function enrollMailto(courseTitle: string, tier: string): string {
  const subject = `Enroll: ${courseTitle} (${tier})`;
  const body =
    `I'd like to enroll in "${courseTitle}" on the ${tier} track.\n\n` +
    `Name:\nBusiness:\nWhat you do manually every week:`;
  // TODO: swap for a Stripe / Lemon Squeezy payment link once checkout is live.
  return `mailto:${ENROLL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const AI_OPERATIONS_TITLE = "Run your business on AI — without losing control.";
const AI_ESSENTIALS_TITLE = "Get real work done with Claude & ChatGPT.";

export const COURSE_ITEMS: CourseItem[] = [
  {
    slug: "ai-operations-for-business-owners",
    index: "01",
    status: "available",
    title: AI_OPERATIONS_TITLE,
    accentWords: ["AI", "control"],
    subtitle:
      "A short, practical course that teaches business operators to automate their recurring work with AI — where AI drafts and humans decide. No code, no hype, no computer-science degree required.",
    summary:
      "Automate your recurring work with AI — lead routing, proposals, and reporting — while keeping humans in control of every consequential decision.",
    level: "No-code · For operators",
    durationLabel: "2.5 hours",
    moduleCount: 5,
    languages: "EN / SQ",
    priceFrom: "$99",
    meta: ["2.5 HRS", "5 MODULES", "EN / SQ", "LIFETIME ACCESS"],
    outcomes: [
      "Map every recurring task in your business and score it for automation leverage.",
      "Build three working automations: lead routing, proposal drafts, and a self-assembling weekly report.",
      "Write approval gates so AI drafts and humans decide the consequential calls.",
      "Ship a 90-day operations plan you can run without hiring an agency.",
    ],
    whoItsFor: [
      "Owners and operators of small and medium businesses doing the same manual work every week.",
      "Non-technical teams that want AI to draft while people stay in control.",
      "Agencies and freelancers who want a repeatable operations system, not one-off prompts.",
      "Anyone who tried ChatGPT once and never turned it into a real workflow.",
    ],
    modules: [
      {
        index: "01",
        title: "Map your recurring work & find the automation leverage",
        duration: "35 min",
        lessons: [
          "Why most AI adoption fails in small businesses",
          "The Operations Inventory: list every recurring task",
          "Scoring for leverage: frequency × time × judgment",
          "The judgment line: what must stay human",
          "Choosing your first three automations",
          "Deliverable: your Automation Map",
        ],
      },
      {
        index: "02",
        title: "AI-assisted lead capture & routing",
        duration: "30 min",
        lessons: [
          "Where leads leak: intake, response time, follow-up",
          "Building an AI intake that qualifies and tags",
          "Routing rules: who gets what, and when",
          "Auto-replies that sound human — with approval gates",
          "Connecting your forms, inbox, and CRM (no code)",
          "Deliverable: a working lead-routing flow",
        ],
      },
      {
        index: "03",
        title: "Documents, proposals & client communication",
        duration: "30 min",
        lessons: [
          "AI-drafted proposals from a template and a short brief",
          "Turning messy notes into follow-up emails and summaries",
          "A prompt library for your recurring messages",
          "Keeping brand voice consistent across every draft",
          "The human review checklist before anything sends",
          "Deliverable: your proposal + comms drafting system",
        ],
      },
      {
        index: "04",
        title: "Reporting & internal tools without code",
        duration: "30 min",
        lessons: [
          "The weekly report that assembles itself",
          "Pulling numbers from your tools into one view",
          "AI summaries to Slack, WhatsApp, or email",
          'Building a simple "ask-your-docs" internal assistant',
          "Dashboards your team will actually open",
          "Deliverable: an automated weekly report",
        ],
      },
      {
        index: "05",
        title: "The control model: governance, quality & what never to automate",
        duration: "25 min",
        lessons: [
          "Approval gates, audit logs, and rollback plans",
          "Quality checks: catching AI mistakes before customers do",
          "Data and privacy: what never to paste into AI",
          "Writing SOPs so the system survives staff turnover",
          "When to keep it manual — and when to hire it out",
          "Deliverable: your governance one-pager + 90-day plan",
        ],
      },
    ],
    included: [
      {
        title: "5 video modules (~2.5 hrs)",
        description: "Short, do-it-alongside lessons — not lecture theory.",
      },
      {
        title: "Templates pack",
        description: "Operations Inventory, Leverage Scoring matrix, and Approval Rules one-pager.",
      },
      {
        title: "Prompt library",
        description: "30+ ready-to-adapt prompts for intake, proposals, and reporting.",
      },
      {
        title: "Tool-agnostic setup guides",
        description: "Build it in Make.com, n8n, or Zapier — whatever you already use.",
      },
      {
        title: "Lifetime access & updates",
        description: "Buy once. New lessons and tool updates included as the space moves.",
      },
      {
        title: "Certificate of completion",
        description: "A shareable certificate once you finish all five modules.",
      },
    ],
    pricing: [
      {
        id: "self-serve",
        name: "Self-serve",
        price: "$99",
        tagline: "Learn it and build it yourself.",
        features: [
          "All 5 modules (~2.5 hrs)",
          "Templates + prompt library",
          "Tool-agnostic setup guides",
          "Lifetime access & updates",
          "Community Q&A",
          "Certificate of completion",
        ],
        ctaLabel: "Enroll now",
        checkoutUrl: enrollMailto(AI_OPERATIONS_TITLE, "Self-serve"),
      },
      {
        id: "pro",
        name: "Pro",
        price: "$399",
        tagline: "Learn it, then get expert eyes on your build.",
        features: [
          "Everything in Self-serve",
          "60-min 1:1 systems audit call",
          "Personalized automation map",
          "Priority email support (30 days)",
          "Team license (up to 5 people)",
        ],
        ctaLabel: "Get the Pro track",
        checkoutUrl: enrollMailto(AI_OPERATIONS_TITLE, "Pro"),
        featured: true,
      },
    ],
    faqs: [
      {
        question: "Do I need to know how to code?",
        answer:
          "No. Every automation is built with no-code tools like Make.com, n8n, or Zapier. If you can use a spreadsheet, you can follow along.",
      },
      {
        question: "What tools do I need?",
        answer:
          "A computer, an AI account (ChatGPT or Claude), and a free tier of Make.com or Zapier. We keep it to tools with generous free plans wherever possible.",
      },
      {
        question: "Is this available in Albanian?",
        answer:
          "Yes. The course is available in both English and Albanian — likely the only serious Albanian-language AI operations course you'll find.",
      },
      {
        question: "How long do I have access?",
        answer:
          "Lifetime, including future updates. AI moves fast, so we refresh lessons as tools change — you keep every update.",
      },
      {
        question: "What if it's not for me?",
        answer:
          "There's a 14-day money-back guarantee. Work through the first module, and if it isn't a fit, email us for a full refund.",
      },
      {
        question: "Can my team take it together?",
        answer:
          "Yes. The Pro track includes a team license for up to five people, plus a 1:1 systems audit call for your business.",
      },
    ],
    tags: ["AI Automation", "No-code", "Operations", "Make.com", "Prompting", "SMB"],
  },
  {
    slug: "ai-essentials-claude-chatgpt",
    index: "02",
    status: "available",
    isFree: true,
    title: AI_ESSENTIALS_TITLE,
    accentWords: ["Claude", "ChatGPT"],
    subtitle:
      "A free, non-technical starter course on Claude and ChatGPT. Learn to write, plan, research, and solve everyday problems with AI — in plain language, with zero jargon and nothing to install.",
    summary:
      "A free, beginner-friendly course on using Claude and ChatGPT for everyday work — writing, planning, and research in plain language, no technical background needed.",
    level: "Beginner · Non-technical",
    durationLabel: "90 minutes",
    moduleCount: 5,
    languages: "EN / SQ",
    priceFrom: "$0",
    meta: ["90 MIN", "5 MODULES", "EN / SQ", "FREE"],
    outcomes: [
      "Use Claude or ChatGPT confidently every day — and know which to reach for.",
      "Write clear prompts that get useful answers on the first or second try.",
      "Draft emails, documents, and translations in minutes instead of hours.",
      "Research, plan, and make decisions with AI — while fact-checking what it tells you.",
    ],
    whoItsFor: [
      "Complete beginners who have never used AI — or tried it once and gave up.",
      "Office workers, managers, and business owners who want practical daily wins.",
      "Teams that keep hearing about AI but nobody has shown them where to start.",
      "Anyone who wants a plain-language introduction — no technical background needed.",
    ],
    modules: [
      {
        index: "01",
        title: "Meet your AI assistant",
        duration: "15 min",
        lessons: [
          "What Claude and ChatGPT actually are — in plain words",
          "What AI is great at, and where it fails",
          "Setting up your free account (nothing to install)",
          "Your first conversation: a guided walkthrough",
          "Why AI sometimes makes things up — and how to spot it",
        ],
      },
      {
        index: "02",
        title: "Prompting that actually works",
        duration: "20 min",
        lessons: [
          "The simple formula: context, task, format",
          "Why your first answer is a draft, not a result",
          "Asking follow-ups: shorter, longer, simpler, different tone",
          "Giving examples so AI matches your style",
          "Deliverable: your personal prompt cheat-sheet",
        ],
      },
      {
        index: "03",
        title: "Everyday writing with AI",
        duration: "20 min",
        lessons: [
          "Emails: drafting, replying, and softening difficult messages",
          "Summarizing long documents and meeting notes",
          "Translating between Albanian and English that sounds natural",
          "Social posts and announcements in your voice",
          "Proofreading and improving anything you've written",
        ],
      },
      {
        index: "04",
        title: "Thinking, planning & research",
        duration: "20 min",
        lessons: [
          "Brainstorming: getting 20 ideas when you're stuck at zero",
          "Weighing decisions: pros, cons, and blind spots",
          "Researching a topic — and verifying what AI tells you",
          "Learning anything faster with AI as a tutor",
          "Planning projects, trips, and events step by step",
        ],
      },
      {
        index: "05",
        title: "Safe & smart use",
        duration: "15 min",
        lessons: [
          "Privacy basics: what never to paste into AI",
          "Fact-checking: trust, but verify",
          "Using AI at work honestly and openly",
          "Free vs. paid plans: when upgrading is worth it",
          "Where to go next: automating your recurring work",
        ],
      },
    ],
    included: [
      {
        title: "5 video modules (~90 min)",
        description: "Short, plain-language lessons you can finish in one sitting.",
      },
      {
        title: "Prompt cheat-sheet",
        description: "50 copy-paste prompts for emails, summaries, translations, and planning.",
      },
      {
        title: "Daily-use templates",
        description: "Ready-made starting points for the tasks you do every week.",
      },
      {
        title: "English & Albanian",
        description: "Full course available in both languages.",
      },
      {
        title: "Lifetime access & updates",
        description: "Free forever, including updates as the tools change.",
      },
      {
        title: "Certificate of completion",
        description: "A shareable certificate once you finish all five modules.",
      },
    ],
    pricing: [
      {
        id: "free",
        name: "Free",
        price: "$0",
        tagline: "The full course. No credit card, no catch.",
        features: [
          "All 5 modules (~90 min)",
          "Prompt cheat-sheet (50 prompts)",
          "Daily-use templates",
          "English & Albanian",
          "Lifetime access & updates",
          "Certificate of completion",
        ],
        ctaLabel: "Start for free",
        checkoutUrl: enrollMailto(AI_ESSENTIALS_TITLE, "Free"),
        featured: true,
      },
    ],
    faqs: [
      {
        question: "Is it really free?",
        answer:
          "Yes — the full course, not a teaser. No credit card required. It's our introduction to how Limited Labs thinks about AI; if you later want to automate your business, our paid AI Operations course picks up where this ends.",
      },
      {
        question: "Do I need a paid ChatGPT or Claude account?",
        answer:
          "No. Everything in the course works on the free plans of both tools. We cover when a paid plan is worth it — but you won't need one to follow along.",
      },
      {
        question: "I'm not technical at all. Is this for me?",
        answer:
          "Especially for you. There's no code, no jargon, and nothing to install. If you can write an email, you can do everything in this course.",
      },
      {
        question: "Is it available in Albanian?",
        answer: "Yes — the full course is available in both English and Albanian.",
      },
      {
        question: "How long do I have access?",
        answer: "Forever, including future updates as Claude and ChatGPT evolve.",
      },
      {
        question: "What should I take after this?",
        answer:
          "If you run a business or a team, the next step is AI Operations for Business Owners — it turns what you learned here into working automations for leads, proposals, and reporting.",
      },
    ],
    tags: ["Claude", "ChatGPT", "Prompting", "Writing", "Research", "Beginner"],
  },
];

export function getCourseBySlug(slug: string): CourseItem | undefined {
  return COURSE_ITEMS.find((course) => course.slug === slug);
}
