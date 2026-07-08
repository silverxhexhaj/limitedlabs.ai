import type { ShowcaseWork } from "../types";

export const WORKS_C: ShowcaseWork[] = [
  /* ------------------------------------------------------------------ */
  /* 11 · SIFT — AI lead-intelligence workspace                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "sift",
    name: "Sift",
    tagline: "From raw list to ranked pipeline in one pass.",
    category: "AI tool · Sales",
    group: "ai-automation",
    year: "2026",
    services: ["AI product", "Software design", "Automation"],
    serviceSlug: "automation",
    heroImage: {
      src: "/images/showcase/sift/hero.jpg",
      alt: "Abstract violet-and-black data streams of glassy 3D particles sorting into order on a dark background.",
    },
    reference: "Futuristic data-viz UI — violet-on-black, glass particles, motion that implies sorting; Retool × Clay.",
    theme: {
      scheme: "dark",
      bg: "#0c0a14",
      surface: "#161327",
      ink: "#efe9ff",
      muted: "#9186b0",
      line: "#272041",
      accent: "#8b5cf6",
      accentInk: "#0c0a14",
      accent2: "#c4b5fd",
      fontDisplay: '"Space Grotesk", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "10px",
      radiusCard: "14px",
      headingTracking: "-0.03em",
      headingWeight: 700,
    },
    scene: { pattern: "mesh", glyph: "⋔", motto: "Signal, sorted from noise" },
    concept:
      "Sift is an AI lead-intelligence workspace for B2B sales teams who buy messy lists and waste hours qualifying them. Drop in a CSV or a domain, and Sift enriches every record, scores fit against your ideal customer, drafts the first-touch message, and hands sales a ranked queue. The AI does the research; the rep does the relationship. Revenue: per-seat SaaS plus enrichment credits.",
    audience: "SDR teams and founders doing outbound at seed-to-Series-B companies.",
    brand: {
      direction:
        "Computational violet. A near-black canvas with a single electric-violet accent and glassy particle motifs that visualize data resolving into order. The identity animates the core promise — chaos sorting into a ranked list — and keeps the UI dense but calm, like a well-lit control room.",
      personality: ["Sharp", "Fast", "Analytical", "Modern"],
      palette: [
        { name: "Void", hex: "#0c0a14", role: "Canvas" },
        { name: "Electric Violet", hex: "#8b5cf6", role: "Accent" },
        { name: "Lilac Mist", hex: "#c4b5fd", role: "Secondary" },
        { name: "Signal White", hex: "#efe9ff", role: "Type" },
      ],
      type: {
        display: "Space Grotesk — technical, screen-native headlines",
        text: "General Sans — dense record data stays readable",
        note: "Fit scores use a monospaced tabular treatment; violet marks only the highest-signal records.",
      },
      voice: "A sharp analyst: leads with the ranking, explains the 'why' in one line, never pads.",
    },
    screens: [
      {
        kind: "kanban",
        frame: "browser",
        url: "app.sift.ai/queue",
        name: "Ranked pipeline",
        caption: "Sift turns a raw import into a triaged board — reps work top-down through fit-scored, pre-researched accounts.",
        appName: "Sift",
        title: "Outbound queue — 412 leads sifted",
        columns: [
          {
            name: "Hot · fit 90+",
            cards: [
              { title: "Meridian Logistics — VP Ops", tag: "94", meta: "Draft ready" },
              { title: "Kova Retail — Founder", tag: "91", meta: "Draft ready" },
              { title: "Arber Health — COO", tag: "90", meta: "Warm intro" },
            ],
          },
          {
            name: "Warm · 70–89",
            cards: [
              { title: "Nord Freight — Head of Sales", tag: "84", meta: "Enriching" },
              { title: "Lumo SaaS — RevOps", tag: "78", meta: "Draft ready" },
            ],
          },
          {
            name: "Nurture · <70",
            cards: [
              { title: "Small studio — Owner", tag: "61", meta: "Too early" },
              { title: "Agency X — Partner", tag: "55", meta: "No budget signal" },
            ],
          },
        ],
      },
      {
        kind: "chat",
        frame: "browser",
        url: "app.sift.ai/lead/meridian-logistics",
        name: "Research + draft",
        caption: "One click opens the AI's reasoning: why this account scored 94, the trigger event, and a first-touch draft to edit.",
        appName: "Sift",
        threadTitle: "Meridian Logistics · fit 94",
        messages: [
          { role: "user", text: "Why did Meridian score 94, and what should I open with?" },
          {
            role: "ai",
            text: "Strong fit: 180-truck regional carrier (your ICP is 50–500), just posted two dispatcher roles (scaling ops = pain you solve), and their VP Ops liked a freight-visibility post last week. Trigger is fresh — reach out this week.",
            chips: ["Use this draft", "Find the mobile number", "Add to sequence"],
          },
          {
            role: "ai",
            text: "Draft: \"Saw you're adding dispatchers — usually that means check-calls are eating the ops team. We cut those ~80% for carriers your size. Worth 15 minutes?\"",
          },
        ],
        composer: "Refine the draft, or ask Sift for another angle…",
        context: {
          title: "Why 94",
          items: [
            { label: "ICP match", value: "180 trucks ✓" },
            { label: "Trigger", value: "2 dispatcher roles" },
            { label: "Intent", value: "Engaged last wk" },
            { label: "Reach", value: "Email + mobile" },
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Sell reps their evenings back: the pitch isn't 'more data', it's 'your list, already qualified, drafted, and ranked — start at the top.'",
      campaign:
        "\"Sift the List\" — a live-demo campaign where prospects upload (or paste) a real messy list and watch it get enriched, scored and drafted in under a minute on a shared screen. Clips of the sort-into-order animation run as paid social; the payoff is always the ranked board.",
      channels: ["LinkedIn (sales leaders)", "Live 'sift my list' demo webinars", "Sales-tool marketplaces", "Founder outbound communities"],
      headlines: [
        "You bought a list. Sift built you a pipeline.",
        "Stop qualifying. Start at 94.",
        "The research is done. Go be human.",
      ],
    },
    built: [
      "AI enrichment + fit-scoring engine over imported lists and domains",
      "Ranked kanban pipeline with triage columns",
      "Per-lead reasoning view with editable first-touch drafts",
      "Sequence handoff and enrichment-credit system",
      "Computational-violet brand identity and 'Sift the List' launch",
    ],
    demonstrates:
      "AI automation & product — an AI tool that compresses hours of manual research into a ranked, explainable queue while keeping the human in the outreach loop.",
    outcomes: [
      { value: "<60s", label: "List → ranked pipeline" },
      { value: "412→top", label: "Triaged by fit score" },
      { value: "3×", label: "More reps' time on selling" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 12 · OTTO — AI support teammate for small teams                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "otto",
    name: "Otto",
    tagline: "The support teammate who reads every doc and never sleeps.",
    category: "AI assistant · Support",
    group: "ai-automation",
    year: "2026",
    services: ["AI product", "Automation", "Brand & character design"],
    serviceSlug: "automation",
    heroImage: {
      src: "/images/showcase/otto/hero.jpg",
      alt: "Friendly rounded 3D orange character-like shape on warm cream in soft studio light, playful minimal render.",
    },
    reference: "Warm approachable AI — cream + soft orange, rounded 3D mascot, friendly grotesk; Intercom Fin × Duolingo.",
    theme: {
      scheme: "light",
      bg: "#fbf4ec",
      surface: "#ffffff",
      ink: "#2a1c12",
      muted: "#8a7461",
      line: "#eaddce",
      accent: "#f26a1b",
      accentInk: "#fff7f0",
      accent2: "#ffb27a",
      fontDisplay: '"Chillax", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "20px",
      headingTracking: "-0.02em",
      headingWeight: 700,
    },
    scene: { pattern: "rings", glyph: "◕", motto: "Answers first, humans for the rest" },
    concept:
      "Otto is an AI support teammate for small SaaS and e-commerce teams who can't staff a 24/7 help desk. It learns from your docs, past tickets and order data, resolves the repetitive 60% instantly, and hands the hard or emotional cases to a human with a full summary. Otto has a friendly character so customers know when they're talking to the bot — no dark patterns. Revenue: per-resolution pricing plus a flat platform fee.",
    audience: "Founders and lean support teams at companies too small for a big support org but too busy to answer everything themselves.",
    brand: {
      direction:
        "Friendly, honest AI. Warm cream and soft orange, generous rounded shapes, and a plush 3D character named Otto that appears in-product. The design leans into approachability without being childish — it signals 'a helpful teammate' rather than 'a cold bot', and it's always transparent about being AI.",
      personality: ["Warm", "Honest", "Helpful", "Playful"],
      palette: [
        { name: "Warm Cream", hex: "#fbf4ec", role: "Canvas" },
        { name: "Otto Orange", hex: "#f26a1b", role: "Accent" },
        { name: "Peach", hex: "#ffb27a", role: "Secondary" },
        { name: "Cocoa Ink", hex: "#2a1c12", role: "Type" },
      ],
      type: {
        display: "Chillax — rounded, friendly, approachable",
        text: "General Sans — clean support content",
        note: "Otto always labels itself; AI messages carry a small character avatar so the handoff to a human is unmistakable.",
      },
      voice: "A kind, competent colleague: cheerful but never fake, quick to say 'let me get a human for this.'",
    },
    screens: [
      {
        kind: "chat",
        frame: "phone",
        name: "Customer chat",
        caption: "Otto resolves the common stuff instantly and transparently — and knows exactly when to fetch a person.",
        appName: "Otto",
        threadTitle: "Order #10428",
        messages: [
          { role: "user", text: "My order says delivered but it's not here 😟" },
          {
            role: "ai",
            text: "Oh no — sorry, Elira! I can see #10428 was marked delivered at 11:02 to your building's front desk. Here's what I can do right now:",
            chips: ["Resend proof of delivery", "Start a replacement", "Talk to a human"],
          },
          { role: "user", text: "Start a replacement please." },
          {
            role: "ai",
            text: "Done — a replacement is on its way, no charge, arriving Thursday. I've logged everything and looped in Marta from our team in case you need anything. 🧡",
          },
        ],
        composer: "Message Otto…",
      },
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.otto.support/inbox",
        name: "Team inbox",
        caption: "The human view: Otto handles volume, escalates with a summary, and shows the team exactly what it's deflecting.",
        appName: "Otto",
        sidebar: ["Inbox", "Escalations", "Knowledge", "Insights", "Otto settings"],
        activeItem: 3,
        title: "Support insights — this week",
        subtitle: "Otto resolved 61% · 4.8★ CSAT on AI replies",
        kpis: [
          { label: "Resolved by Otto", value: "61%", delta: "418 tickets", up: true },
          { label: "Escalated w/ summary", value: "271", delta: "to humans" },
          { label: "First reply", value: "8s", delta: "median", up: true },
          { label: "AI CSAT", value: "4.8★", delta: "+0.3", up: true },
        ],
        chart: { label: "Tickets: Otto vs human — 7 days", type: "bars", points: [61, 66, 58, 72, 64, 49, 55] },
        table: {
          cols: ["Topic", "Volume", "Otto solved", "Note"],
          rows: [
            ["Where is my order", "182", "88%", "Auto"],
            ["Returns & refunds", "121", "71%", "Policy-gated"],
            ["Sizing questions", "96", "64%", "From docs"],
            ["Angry / urgent", "44", "0%", "Always human"],
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Anti-creepy AI: while support bots hide that they're bots, Otto's whole brand is honesty — customers trust it because it says what it is and hands off gracefully.",
      campaign:
        "\"Meet Otto\" — a character-led launch: an animated intro film, a 3D Otto that answers on the marketing site in real time, and a 'watch Otto deflect' live counter. Founders get a 'first 100 resolutions free' trial to see the volume drop for themselves.",
      channels: ["Product Hunt / founder launch", "Character-led social (animated Otto)", "E-commerce & SaaS communities", "In-app 'first 100 free' trial"],
      headlines: [
        "Support that answers in 8 seconds and admits when it's stuck.",
        "Otto handles the 60% you're tired of typing.",
        "A bot honest enough to say 'let me get a human.'",
      ],
    },
    built: [
      "AI support engine grounded in docs, tickets and order data",
      "Transparent customer chat with graceful human handoff",
      "Team inbox with escalation summaries and deflection insights",
      "Otto character design and in-product 3D mascot system",
      "'Meet Otto' character-led launch campaign",
    ],
    demonstrates:
      "AI automation with brand & character design — pairing a trustworthy conversational product with an identity that makes AI feel honest and human-friendly.",
    outcomes: [
      { value: "61%", label: "Tickets auto-resolved" },
      { value: "8s", label: "Median first reply" },
      { value: "4.8★", label: "CSAT on AI answers" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 13 · LOOMLINE — no-code automation weaver                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "loomline",
    name: "Loomline",
    tagline: "Weave your tools together. No engineers required.",
    category: "SaaS · Automation",
    group: "software",
    year: "2026",
    services: ["Product design", "Automation platform", "Brand identity"],
    serviceSlug: "automation",
    heroImage: {
      src: "/images/showcase/loomline/hero.jpg",
      alt: "Lime-green threads weaving through black geometric nodes, macro textile-meets-circuitry, high contrast.",
    },
    reference: "High-contrast automation canvas — black + lime, node-and-thread motif; Make.com × Framer.",
    theme: {
      scheme: "dark",
      bg: "#0a0c0a",
      surface: "#131613",
      ink: "#eefbe8",
      muted: "#8fa389",
      line: "#20261f",
      accent: "#a3e635",
      accentInk: "#0a0c0a",
      accent2: "#65a30d",
      fontDisplay: '"Cabinet Grotesk", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "8px",
      radiusCard: "12px",
      headingTracking: "-0.03em",
      headingWeight: 800,
    },
    scene: { pattern: "grid", glyph: "⌘", motto: "Connect · automate · relax" },
    concept:
      "Loomline is a no-code automation platform aimed squarely at non-technical operators at small businesses — the office manager, the clinic coordinator, the shop owner. Where competitors overwhelm with 5,000 integrations and developer language, Loomline ships opinionated, pre-woven 'looms' for real jobs ('new booking → text client → add to sheet → invoice') that anyone can adapt on a visual canvas. Revenue: tiered SaaS by run volume.",
    audience: "Non-technical operations people at SMBs who currently copy-paste between apps all day.",
    brand: {
      direction:
        "Electric loom. A black canvas threaded with acid-lime lines that literally depict automations as woven threads between nodes. The identity turns the abstract idea of 'connecting apps' into something tactile and visual, with a bold engineered grotesk and a canvas that feels alive but never chaotic.",
      personality: ["Empowering", "Visual", "Bold", "Practical"],
      palette: [
        { name: "Loom Black", hex: "#0a0c0a", role: "Canvas" },
        { name: "Acid Lime", hex: "#a3e635", role: "Accent" },
        { name: "Moss", hex: "#65a30d", role: "Secondary" },
        { name: "Thread White", hex: "#eefbe8", role: "Type" },
      ],
      type: {
        display: "Cabinet Grotesk — engineered, confident headlines",
        text: "General Sans — plain-language step labels",
        note: "Every automation step is labeled in plain English ('text the client'), never in API/developer terms.",
      },
      voice: "An encouraging power-user friend: 'you can absolutely build this yourself — here's the loom.'",
    },
    screens: [
      {
        kind: "workflow",
        frame: "browser",
        url: "app.loomline.io/looms/new-booking",
        name: "Automation canvas",
        caption: "Automations shown as woven threads — a non-technical owner can read, edit and trust the whole flow at a glance.",
        appName: "Loomline",
        title: "Loom: New booking → happy client",
        nodes: [
          { label: "New booking comes in", sublabel: "Calendar / site form", kind: "trigger" },
          { label: "Text the client a confirmation", sublabel: "SMS template", kind: "action" },
          { label: "Personalize the message", sublabel: "AI adds their name + service", kind: "ai" },
          { label: "Add row to bookings sheet", sublabel: "Google Sheets", kind: "action" },
          { label: "First booking ever?", sublabel: "Branch", kind: "branch" },
          { label: "Send the welcome offer", sublabel: "Email", kind: "action" },
        ],
        note: "This loom has run 1,284 times this month with 0 errors",
      },
      {
        kind: "landing",
        frame: "browser",
        url: "loomline.io",
        name: "Marketing site",
        caption: "The homepage sells outcomes, not integrations — 'looms' for real jobs a non-technical owner recognizes instantly.",
        nav: ["Looms", "How it works", "Pricing", "Templates"],
        navCta: "Start weaving",
        eyebrow: "No-code automation for real businesses",
        headline: "Stop copy-pasting between apps.",
        accentWord: "copy-pasting",
        sub: "Loomline weaves your booking form, texts, spreadsheets and invoices into one flow you can build yourself — in an afternoon, not a sprint.",
        primaryCta: "Browse the loom library",
        secondaryCta: "Watch a 2-min build",
        stats: [
          { value: "120+", label: "Pre-woven looms" },
          { value: "0", label: "Lines of code" },
          { value: "1 afternoon", label: "Typical setup" },
        ],
        cards: [
          { title: "New booking loom", body: "Confirm, log, invoice and follow up automatically." },
          { title: "Review request loom", body: "Ask happy customers for a review at the perfect moment." },
          { title: "Restock alert loom", body: "Low stock texts your supplier before you run out." },
        ],
      },
    ],
    marketing: {
      angle:
        "Position against developer-first tools: Loomline is 'automation for people who aren't in tech.' Its enemy is the intimidating blank canvas full of jargon.",
      campaign:
        "\"Built It Myself\" — a UGC-led campaign featuring real non-technical owners (a florist, a dentist, a barber) showing the one loom that saved them hours, in their own words. Each becomes a copyable template, turning stories directly into product activation.",
      channels: ["Short-form UGC (owners' stories)", "Template SEO ('automate X without code')", "SMB Facebook groups", "Loom-template affiliate creators"],
      headlines: [
        "You don't need a developer. You need a loom.",
        "If you can follow a recipe, you can automate your business.",
        "The copy-paste tax ends today.",
      ],
    },
    built: [
      "No-code automation platform with a visual 'thread' canvas",
      "Library of 120+ pre-woven, plain-language looms",
      "AI-assisted steps for personalization inside flows",
      "Outcome-led marketing site and template SEO engine",
      "Electric-loom brand identity and 'Built It Myself' UGC campaign",
    ],
    demonstrates:
      "Automation platforms & product design — making a technical category genuinely usable by non-technical operators through opinionated templates and visual clarity.",
    outcomes: [
      { value: "120+", label: "Ready-made looms" },
      { value: "0", label: "Code required" },
      { value: "1,284", label: "Runs/mo per loom modelled" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 14 · PÉTALA — luxury florist brand + commerce                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "petala",
    name: "Pétala",
    tagline: "Flowers as objects, not bouquets.",
    category: "E-commerce · Luxury florals",
    group: "commerce",
    year: "2026",
    services: ["Brand identity", "E-commerce", "Art direction"],
    serviceSlug: "brand",
    heroImage: {
      src: "/images/showcase/petala/hero.jpg",
      alt: "Blush petals against deep forest green in dramatic chiaroscuro, luxury botanical photography.",
    },
    reference: "Luxury botanical editorial — chiaroscuro florals, forest green + blush, couture-house restraint.",
    theme: {
      scheme: "dark",
      bg: "#0f1a12",
      surface: "#16251b",
      ink: "#f3ede4",
      muted: "#9caa9b",
      line: "#233329",
      accent: "#e6a4b4",
      accentInk: "#141d15",
      accent2: "#caa46a",
      fontDisplay: '"Zodiak", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "18px",
      headingTracking: "-0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "halftone", glyph: "❃", motto: "Composed, not arranged" },
    concept:
      "Pétala is a luxury florist positioned like a fashion house: seasonal 'collections' instead of a permanent catalogue, numbered signature arrangements treated as design objects, and a same-day couriered experience for a high-end urban clientele. It sells to individuals for occasions and to hospitality/events on retainer. Revenue: premium single orders, corporate/hospitality contracts, and a standing-order subscription.",
    audience: "Affluent individuals marking occasions, plus design hotels and event planners wanting a signature floral partner.",
    brand: {
      direction:
        "Chiaroscuro couture. Deep forest-green darkness with dramatic single-source light on blush petals, a high-contrast serif, and gold used like a couture label. Photography is the product — moody, sculptural, almost Dutch-master. The identity treats each arrangement as a named, numbered edition.",
      personality: ["Opulent", "Sculptural", "Romantic", "Editorial"],
      palette: [
        { name: "Deep Fern", hex: "#0f1a12", role: "Canvas" },
        { name: "Petal Blush", hex: "#e6a4b4", role: "Accent" },
        { name: "Gilt", hex: "#caa46a", role: "Label gold" },
        { name: "Bone", hex: "#f3ede4", role: "Type" },
      ],
      type: {
        display: "Zodiak — dramatic high-contrast serif",
        text: "General Sans — restrained commerce UI",
        note: "Arrangement names are set in italic serif with a numbered edition mark, e.g. 'Vesper — Nº 02'.",
      },
      voice: "A couturier of flowers: evocative but precise, names each piece, never says 'pretty.'",
    },
    screens: [
      {
        kind: "storefront",
        frame: "browser",
        url: "petala.flowers/autumn-collection",
        name: "Collection storefront",
        caption: "Sold like fashion: a seasonal collection of named, numbered arrangements shot as sculptural objects.",
        nav: ["Collection", "Standing orders", "Hospitality", "Atelier"],
        navCta: "Order",
        collection: "The Autumn Collection",
        intro: "Twelve arrangements composed for the low light of the season. Couriered the same day, within the hour on request.",
        filters: ["The full collection", "Signature", "Petite", "For the table"],
        products: [
          { name: "Vesper — Nº 02", price: "€185", tag: "Signature", tone: "linear-gradient(150deg,#3a2530,#e6a4b4 130%)" },
          { name: "Ember — Nº 05", price: "€140", tone: "linear-gradient(160deg,#2a1f16,#caa46a 140%)" },
          { name: "Fern & Bone — Nº 08", price: "€120", tone: "linear-gradient(140deg,#18271c,#9caa9b 150%)" },
          { name: "Nocturne — Nº 11", price: "€210", tag: "Limited", tone: "linear-gradient(150deg,#141d15,#e6a4b4 160%)" },
        ],
      },
      {
        kind: "productDetail",
        frame: "browser",
        url: "petala.flowers/piece/vesper-02",
        name: "Arrangement page",
        caption: "Each arrangement is a design object with stems listed like materials, delivery windows, and a vase edition.",
        breadcrumb: ["Autumn", "Signature", "Vesper Nº 02"],
        productName: "Vesper — Nº 02",
        price: "€185",
        description:
          "A low, sculptural composition in blush and oxblood: garden roses, hellebore, smoke bush and dried fern, built for candlelight and a long dinner. Composed to order, never repeated exactly.",
        options: [
          { label: "Size", values: ["Petite", "Signature", "Grand"], selected: 1 },
          { label: "Vessel", values: ["Studio ceramic", "Glass", "None"], selected: 0 },
          { label: "Delivery", values: ["Same day", "Within the hour +€25"], selected: 0 },
        ],
        cta: "Compose & courier",
        gallery: [
          "radial-gradient(80% 90% at 45% 35%,#e6a4b4,#2a1620 90%)",
          "linear-gradient(150deg,#3a2530,#e6a4b4 140%)",
          "linear-gradient(160deg,#2a1f16,#caa46a 150%)",
          "linear-gradient(140deg,#18271c,#9caa9b 150%)",
          "linear-gradient(150deg,#141d15,#e6a4b4 160%)",
        ],
        meta: [
          { label: "Stems", value: "Rose · hellebore · smoke bush" },
          { label: "Lasts", value: "7–10 days" },
          { label: "Courier", value: "Same day · within city" },
        ],
      },
    ],
    marketing: {
      angle:
        "Reframe flowers from perishable gift to collectible object: a Pétala arrangement is a numbered piece by an atelier, worth photographing and worth its price.",
      campaign:
        "\"The Collection Drops\" — treat each seasonal collection like a fashion release: a lookbook film, a private preview for standing-order clients and hospitality partners, and editorial stills seeded to interiors and lifestyle press. Occasion moments (Valentine's, holidays) become limited editions.",
      channels: ["Instagram lookbook + Reels", "Hospitality & events partnerships", "Interiors/lifestyle press", "Standing-order concierge email"],
      headlines: [
        "This season's collection is composed, not arranged.",
        "A florist that names its work.",
        "Nº 02 of the Autumn Collection, at your table by tonight.",
      ],
    },
    built: [
      "Fashion-house brand identity with numbered-edition system",
      "Collection-based e-commerce with same-day courier flow",
      "Object-led product pages (materials, longevity, vessel editions)",
      "Photographic art direction and seasonal lookbook format",
      "'The Collection Drops' launch and hospitality-partner program",
    ],
    demonstrates:
      "Brand identity + luxury commerce — elevating a commodity category into a premium, editorial product experience through positioning and art direction.",
    outcomes: [
      { value: "×4/yr", label: "Seasonal collections" },
      { value: "€185", label: "Signature price point" },
      { value: "Retainer", label: "Hospitality revenue base" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 15 · LUCERNA — sculptural lighting, 3D product showcase             */
  /* ------------------------------------------------------------------ */
  {
    slug: "lucerna",
    name: "Lucerna",
    tagline: "Light, designed to be looked at even when it's off.",
    category: "Product · Design objects",
    group: "experience",
    year: "2026",
    services: ["3D product showcase", "Brand identity", "E-commerce"],
    serviceSlug: "product-lab",
    heroImage: {
      src: "/images/showcase/lucerna/hero.jpg",
      alt: "Sculptural lamp glowing warm amber in a near-black room with volumetric light, premium product photography.",
    },
    reference: "Premium product cinema — near-black rooms, volumetric amber light, 3D-hero configurator; Apple × Flos.",
    theme: {
      scheme: "dark",
      bg: "#0b0a09",
      surface: "#141210",
      ink: "#f1e9dc",
      muted: "#9a9082",
      line: "#241f1a",
      accent: "#f0a94c",
      accentInk: "#0b0a09",
      accent2: "#c8752a",
      fontDisplay: '"Fraunces", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "6px",
      radiusCard: "14px",
      headingTracking: "-0.02em",
      headingWeight: 600,
    },
    scene: { pattern: "rings", glyph: "☀", motto: "Objects that happen to glow" },
    concept:
      "Lucerna is a design-lighting brand selling a small line of sculptural lamps as collectible objects. The commercial challenge — lighting is hard to sell online because you can't feel the glow — is solved with a real-time 3D product experience: rotate each lamp, dim it from warm to bright, and see the light fall in a rendered room before buying. Revenue: premium DTC sales plus trade/architect accounts.",
    audience: "Design-led homeowners, interior designers and architects specifying statement lighting.",
    brand: {
      direction:
        "Volumetric warmth. Near-black galleries where the product's own amber glow is the only light, a refined serif, and a 3D-first experience that makes the screen feel like a showroom. Restraint everywhere except the light itself. The lamp is photographed off as often as on — form first, function second.",
      personality: ["Sculptural", "Warm", "Precise", "Gallery-grade"],
      palette: [
        { name: "Gallery Black", hex: "#0b0a09", role: "Canvas" },
        { name: "Warm Glow", hex: "#f0a94c", role: "Accent / light" },
        { name: "Ember", hex: "#c8752a", role: "Depth" },
        { name: "Alabaster", hex: "#f1e9dc", role: "Type" },
      ],
      type: {
        display: "Fraunces — refined serif with optical warmth",
        text: "General Sans — quiet spec and cart UI",
        note: "Product names set in serif; the accent amber is used as if it were light spilling from the fixture.",
      },
      voice: "A design gallerist: talks about form, material and light temperature; lets the object speak.",
    },
    screens: [
      {
        kind: "productDetail",
        frame: "browser",
        url: "lucerna.design/halo-floor",
        name: "3D product experience",
        caption: "The 3D hero solves lighting's online problem: rotate the piece, dim it warm-to-bright, watch the glow fill the room.",
        breadcrumb: ["Floor lamps", "Halo"],
        productName: "Halo Floor Lamp",
        price: "€1,240",
        description:
          "A hand-spun aluminium ring on a slim brass stem, dimmable from candle-warm to work-bright. Rotate to inspect the diffuser; drag the dimmer to see the light it casts. Made to order in three finishes.",
        options: [
          { label: "Finish", values: ["Brushed brass", "Matte black", "Bronze"], selected: 0 },
          { label: "Warmth", values: ["2200K", "2700K", "3000K"], selected: 1 },
          { label: "Trade account", values: ["Retail", "Architect / -20%"], selected: 0 },
        ],
        cta: "Add to cart · made to order",
        gallery: [
          "radial-gradient(60% 60% at 55% 40%,#f0a94c,#0b0a09 80%)",
          "linear-gradient(160deg,#1a1613,#f0a94c 180%)",
          "linear-gradient(150deg,#141210,#c8752a 170%)",
          "radial-gradient(70% 70% at 40% 60%,#f0a94c,#0b0a09 85%)",
        ],
        meta: [
          { label: "Material", value: "Spun aluminium · brass" },
          { label: "Output", value: "Dimmable 2200–3000K" },
          { label: "Lead time", value: "3–4 weeks · made to order" },
        ],
      },
      {
        kind: "landing",
        frame: "browser",
        url: "lucerna.design",
        name: "Brand homepage",
        caption: "The homepage is a dark gallery — one glowing object at a time, spec and price whispered beneath.",
        nav: ["Collection", "The 3D showroom", "Trade", "Atelier"],
        navCta: "Explore in 3D",
        eyebrow: "Sculptural lighting, made to order",
        headline: "Light you'd keep even unplugged.",
        accentWord: "unplugged",
        sub: "A small collection of lamps designed as objects first. Explore each one in real-time 3D — rotate it, dim it, and see the room it makes.",
        primaryCta: "Enter the 3D showroom",
        secondaryCta: "Book a trade consult",
        stats: [
          { value: "6", label: "Pieces in the collection" },
          { value: "3D", label: "Real-time configurator" },
          { value: "Made to order", label: "Three finishes each" },
        ],
        motif: "product",
      },
    ],
    marketing: {
      angle:
        "Solve the trust gap in buying light online by letting people play with it: the 3D dimmer is both the product demo and the ad. Sell the object, not the bulb.",
      campaign:
        "\"See the Glow\" — a campaign built entirely on the interactive 3D moment: short loops of a lamp dimming warm-to-bright as thumb-stopping social creative, an embeddable 3D viewer press/designers can drop into articles, and a trade program giving architects the configurator as a spec tool.",
      channels: ["Instagram/Pinterest (3D loops)", "Interior-design press & embeds", "Architect/trade program", "Design-fair digital presence"],
      headlines: [
        "You can't feel a lamp through a photo. So we built the glow.",
        "Rotate it. Dim it. Then decide.",
        "Lighting as a collectible, not a fixture.",
      ],
    },
    built: [
      "Real-time 3D product configurator (rotate, dim, room preview)",
      "Gallery-grade brand identity and photographic direction",
      "Made-to-order DTC commerce with trade/architect accounts",
      "Embeddable 3D viewer as a PR and spec tool",
      "'See the Glow' interactive launch campaign",
    ],
    demonstrates:
      "3D product experience & product lab — using real-time 3D to solve a genuine commercial problem (selling light online) and turn the demo into the marketing.",
    outcomes: [
      { value: "3D", label: "Configurator as hero" },
      { value: "€1,240", label: "Flagship object price" },
      { value: "Trade", label: "Architect spec channel" },
    ],
  },
];
