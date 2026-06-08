// English UI strings. This object is the canonical shape; `sq.ts` must match it
// (enforced via `typeof en` in messages/index.ts). Tokens like {system} are
// replaced at render time with `.replace("{token}", value)`.

export const en = {
  languageToggle: {
    label: "SQ",
    ariaLabel: "Switch to Albanian",
  },

  header: {
    homeAria: "Limited Labs home",
    primaryNavAria: "Primary navigation",
    mobileNavAria: "Mobile navigation",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    cta: "Free systems audit",
    mobileCta: "Get a free systems audit",
    nav: {
      services: "Services",
      work: "Work",
      why: "Why Limited Labs",
      proof: "Proof",
      faq: "FAQ",
      contact: "Contact",
    },
  },

  hero: {
    eyebrow: "AI-powered systems agency · Tirana, Albania",
    heading: "We help businesses improve how they look, sell, build, and work.",
    lead:
      "Brand, Marketing, Software, and AI Automation connected under one operating logic. We improve the highest-leverage parts of the business without adding another layer of disconnected vendors.",
    note:
      "AI accelerates research and execution. Humans make strategic, client-facing, and consequential decisions.",
    ctaPrimary: "Get a free systems audit",
    ctaSecondary: "Explore the four systems",
  },

  problem: {
    eyebrow: "The operating problem",
    heading: "Growth breaks when the systems disagree.",
    items: [
      {
        title: "The business looks inconsistent.",
        body: "Positioning, identity, website, and content tell different stories, so trust leaks before a conversation starts.",
      },
      {
        title: "Marketing has no shared logic.",
        body: "Content, ads, landing pages, and follow-up are managed as separate tasks instead of one measurable demand path.",
      },
      {
        title: "Recurring work creates drag.",
        body: "Email, WhatsApp, spreadsheets, and disconnected tools keep operators busy without making the business easier to run.",
      },
    ],
  },

  services: {
    eyebrow: "Four connected systems",
    heading: "Improve the whole path, starting where it matters most.",
    aiAutomationLabel: "AI Automation",
    explorePrefix: "Explore ",
    productLab: {
      eyebrow: "Selective engagement / Product Lab",
      title: "Focused validation and co-building, by invitation.",
      body: "Product Lab is considered after qualification when we have conviction in the problem. It is not a fifth self-service offer.",
      cta: "How selection works",
    },
  },

  why: {
    eyebrow: "Why this model",
    heading: "Fewer handoffs. Clearer accountability.",
    principles: [
      {
        title: "One operating logic",
        body: "Brand, marketing, software, and automation are designed together instead of handed across disconnected vendors.",
      },
      {
        title: "Systems over isolated outputs",
        body: "Every deliverable should become reusable business infrastructure, not another asset that expires after launch.",
      },
      {
        title: "AI with accountable control",
        body: "AI supports research, drafting, analysis, and workflow execution. Humans own strategy and consequential decisions.",
      },
      {
        title: "Built for the operating reality",
        body: "The solution has to fit the client's market, team, tools, and ability to maintain it after handoff.",
      },
    ],
  },

  work: {
    eyebrow: "Selected work and working models",
    heading: "Evidence is labeled before it is presented.",
    body: "Current items include concepts and internal systems. Each page states what the work is, what is known, and whether an outcome is measured or still a target.",
    filterAria: "Filter case snapshots by system",
    viewDetails: "View details",
    categories: {
      all: "All",
      brand: "Brand",
      software: "Software",
      marketing: "Marketing",
      automation: "Automation",
    },
  },

  proof: {
    eyebrow: "Proof",
    heading: "Built around operating needs, not invented claims.",
    items: [
      {
        title: "Limited Labs public system",
        classification: "Internal system",
        body: "Service architecture, route-level content, production checks, SEO foundations, and the audit intake are built as one operating surface.",
      },
      {
        title: "Marketplace operations",
        classification: "Internal system",
        body: "Seller, order, and administrative workflow patterns developed around a real marketplace operating model.",
      },
      {
        title: "Hospitality touchpoints",
        classification: "Experiment",
        body: "Brand, content, and local-presence patterns tested against the daily constraints of hospitality operators.",
      },
      {
        title: "Approval-gated automation",
        classification: "Experiment",
        body: "Workflow prototypes test routing, reporting, and AI assistance while preserving explicit human approval points.",
      },
    ],
  },

  audit: {
    eyebrow: "Free systems audit",
    heading: "Find the first system worth fixing.",
    body: "Qualified submissions receive a concise written review of the three highest-priority issues, why they matter, and the recommended first action.",
    steps: [
      "Share the business context and the systems creating friction.",
      "A human reviews the request and checks whether the audit can be useful.",
      "Qualified requests receive a written priority review within three business days.",
    ],
    form: {
      stepWord: "Step",
      ofThree: "of 3",
      contextPreselected:
        "{system} is preselected from the page you were viewing. You can add or change systems below.",
      contextWork:
        "We preserved the work example you were viewing so the review has the right context.",
      contextDefault:
        "Tell us where the business is stuck. A human reviews every qualified request.",
      errorSummary: "Review the highlighted fields.",
      networkError:
        "The request could not be submitted. Email hello@limitedlabs.co instead.",
      verificationNotConfigured: "Verification is not configured.",
      validationErrors: {
        fullName: "Enter a valid full name.",
        email: "Enter a valid work email.",
        companyName: "Enter a valid company or business name.",
        primaryUrl: "Enter a complete http or https URL.",
        additionalUrls: "Review the additional URLs.",
        requestedSystems: "Select at least one valid system.",
        challenge: "Describe the current challenge in at least 30 characters.",
        desiredOutcome: "Describe the desired outcome in at least 30 characters.",
        timeline: "Select a valid timeline.",
        consent: "Consent is required before submitting.",
        turnstile: "Complete the verification before submitting.",
        form: "Review the form and try again.",
      },
      selectPlaceholder: "Select",
      step1Legend: "Your business",
      fullName: "Full name *",
      email: "Work email *",
      company: "Company or business *",
      primaryUrl: "Primary website or social URL *",
      phone: "Phone or WhatsApp",
      industry: "Industry",
      teamSize: "Team size",
      teamSizeOptions: {
        solo: "Just me",
        small: "2–5",
        medium: "6–20",
        large: "21–50",
        xlarge: "51+",
      },
      additionalUrls: "Additional URLs",
      additionalUrlsPlaceholder: "Separate up to five URLs with commas",
      step2Legend: "What needs attention",
      requestedSystems: "Requested systems *",
      systemLabels: {
        brand: "Brand",
        marketing: "Marketing",
        software: "Software",
        "ai-automation": "AI Automation",
        "not-sure": "Not sure yet",
      },
      challenge: "Current challenge *",
      challengeHelp:
        "Minimum 30 characters. Do not include passwords or confidential credentials.",
      desiredOutcome: "Desired outcome *",
      desiredOutcomeHelp: "Describe what would materially improve for the business.",
      step3Legend: "Timing and review",
      timeline: "Timeline",
      timelineOptions: {
        immediately: "Immediately",
        "within-30-days": "Within 30 days",
        "within-90-days": "Within 90 days",
        exploring: "Exploring",
      },
      budget: "Approximate budget range",
      budgetOptions: {
        none: "Prefer not to say",
        "under-2000": "Under €2,000",
        "2000-5000": "€2,000–€5,000",
        "5000-10000": "€5,000–€10,000",
        "10000-plus": "€10,000+",
      },
      referral: "How did you hear about us?",
      summaryLine: "We will review {company} across {systems}.",
      summaryCompanyFallback: "your business",
      summarySystemsFallback: "the selected systems",
      summaryDisclaimer:
        "Submission does not guarantee a free deliverable. We may decline requests that lack enough information or are not a fit.",
      consentBefore: "I consent to Limited Labs storing and reviewing this submission as described in the ",
      consentLink: "privacy notice",
      consentAfter: ". *",
      back: "Back",
      continue: "Continue",
      submit: "Submit audit request",
      submitting: "Submitting…",
      confirmBadge: "Submission received",
      confirmHeading: "A human will review it.",
      confirmBody:
        "Qualified requests receive a concise written priority review within three business days. Keep this reference for follow-up.",
      confirmDuplicate:
        "This matched a recent request, so we kept the original submission instead of creating a duplicate.",
    },
  },

  faq: {
    eyebrow: "FAQ",
    heading: "What to know before you submit.",
    items: [
      {
        question: "What does Limited Labs do?",
        answer: "We diagnose and improve the connected systems behind how a business looks, sells, builds, and performs recurring work.",
      },
      {
        question: "Who is the best fit?",
        answer: "Established Albanian small and medium-sized businesses with a real offer, a decision owner, and a clear operational or growth constraint.",
      },
      {
        question: "Do you work outside Albania?",
        answer: "Yes. Tirana and the Albanian market are the primary focus, with international engagements accepted when the working fit is strong.",
      },
      {
        question: "What happens after the free audit request?",
        answer: "A human reviews the submission. Qualified requests receive three priority issues, why they matter, and a recommended first action within three business days.",
      },
      {
        question: "How is AI used?",
        answer: "AI accelerates research, synthesis, drafting, analysis, and workflow execution. Strategic and client-facing decisions remain human-controlled.",
      },
      {
        question: "How much does an engagement cost?",
        answer: "Pricing follows diagnosis because scope depends on the business constraint, systems involved, and required level of implementation.",
      },
    ],
  },

  contact: {
    eyebrow: "Direct contact",
    heading: "Start with context, not a sales pitch.",
    body: "The audit is the preferred starting point. Direct email and discovery-call requests remain available when the structured form is not suitable.",
    ctaEmail: "Email hello@limitedlabs.co",
    ctaCall: "Request a discovery call",
  },

  footer: {
    tagline: "An AI-powered systems agency helping business operators improve how they look, sell, build, and work.",
    location: "Tirana, Albania",
    navigateHeading: "Navigate",
    contactHeading: "Contact",
    auditLink: "Free systems audit",
    privacyLink: "Privacy notice",
    copyright: "© 2026 Limited Labs",
    accountability: "AI-assisted. Human accountable.",
  },

  workClassifications: {
    "verified-client-work": "Verified client work",
    "anonymized-client-work": "Anonymized client work",
    "internal-system": "Internal system",
    experiment: "Experiment",
    concept: "Concept",
  },

  serviceDetail: {
    back: "Back to services",
    serviceWord: "Service",
    byInvitation: "By invitation",
    focusAreasAria: "Focus areas",
    ctaAudit: "Get a free systems audit",
    ctaCall: "Request a discovery call",
    whatsIncluded: "What's included",
    whoItsFor: "Who it's for",
    deliverables: "Deliverables",
    howWeWork: "How we work",
    relatedWork: "Related work",
    relatedWorkBody: "Classified examples and working models that overlap with this system.",
    selectiveEngagement: "Selective engagement",
    invitationBefore: "Product Lab is considered after qualification when we have conviction in the problem. ",
    invitationLink: "Request a systems audit",
    invitationAfter: " to share the operating context.",
    noRelated: "No additional classified examples are published in this category yet.",
    adjacentBefore: "Explore another system or ",
    adjacentLink: "request a contextual audit",
    adjacentAfter: ".",
    adjacentAria: "Adjacent services",
    previous: "Previous",
    next: "Next",
  },

  workDetail: {
    back: "Back to work",
    focusAreasAria: "Focus areas",
    ctaAudit: "Get a free systems audit",
    labels: {
      challenge: "Challenge",
      approach: "Approach",
      deliverables: "Deliverables",
      systems: "Systems",
      results: "Results",
    },
    adjacentBody: "Browse the adjacent classified examples or return to the systems audit.",
    adjacentAria: "Adjacent projects",
    previous: "Previous",
    next: "Next",
  },

  privacy: {
    eyebrow: "Privacy notice · Updated June 8, 2026",
    heading: "Systems audit submissions",
    sections: [
      {
        heading: "What we collect",
        body: "We collect the contact, business, system-interest, challenge, outcome, timing, and attribution information shown in the audit form. Do not submit passwords, payment information, government identifiers, or confidential system credentials.",
      },
      {
        heading: "Why we collect it",
        body: "The information is used to review fit, prepare a priority assessment for qualified requests, respond to the person who submitted it, and measure the reliability of the public acquisition funnel.",
      },
      {
        heading: "Storage and access",
        body: "Submissions are transmitted over encrypted connections and stored in access-controlled systems. Access is limited to people operating Limited Labs who need the information to review and respond to the request.",
      },
      {
        heading: "Retention and deletion",
        body: "We retain submissions while they are actively reviewed and for a reasonable operational period afterward. To request access, correction, or deletion, email ",
      },
      {
        heading: "Analytics",
        body: "Public-site analytics must not include form names, emails, business URLs, challenge text, desired outcomes, or other personally identifiable form content.",
      },
    ],
    // The "Retention and deletion" section (index 3) renders its body, then the
    // email link, then this suffix.
    retentionEmailSuffix: ".",
    returnLink: "Return to the audit",
  },
};

export type Messages = typeof en;
