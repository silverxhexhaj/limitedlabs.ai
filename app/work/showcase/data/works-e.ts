import type { ShowcaseWork } from "../types";

export const WORKS_E: ShowcaseWork[] = [
  /* ------------------------------------------------------------------ */
  /* 21 · HARBOR — client portal for professional services              */
  /* ------------------------------------------------------------------ */
  {
    slug: "harbor",
    name: "Harbor",
    tagline: "One calm place for every client relationship.",
    category: "Software · Client portal",
    group: "software",
    year: "2026",
    services: ["Product design", "Software", "Brand identity"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/harbor/hero.jpg",
      alt: "Calm navy sea horizon with a single lighthouse and seafoam accents, minimal trust-forward landscape.",
    },
    reference: "Trust-forward SaaS — deep navy, seafoam, calm grotesk, generous space; Notion × Mercury for services.",
    theme: {
      scheme: "dark",
      bg: "#0a1420",
      surface: "#0f1d2e",
      ink: "#e8f1f7",
      muted: "#87a0b4",
      line: "#1c3044",
      accent: "#4fd1c5",
      accentInk: "#0a1420",
      accent2: "#3b82f6",
      fontDisplay: '"General Sans", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "10px",
      radiusCard: "16px",
      headingTracking: "-0.025em",
      headingWeight: 700,
    },
    scene: { pattern: "contour", glyph: "⚓", motto: "Every client, on the same page" },
    concept:
      "Harbor is a white-label client portal for professional-services firms — agencies, accountants, consultants, law practices — who currently run client relationships across email, WhatsApp, drive links and invoices. It gives each client one branded home: project status, deliverables, approvals, documents, messages and payments. It replaces 'did you see my email?' with a single source of truth. Revenue: per-seat SaaS with a branded-portal tier.",
    audience: "Boutique agencies and professional-services firms managing 10–200 ongoing client relationships.",
    brand: {
      direction:
        "Calm navy trust. A deep-sea palette with a seafoam accent, generous whitespace and a plain confident grotesk — the visual opposite of a chaotic inbox. The lighthouse mark signals 'a fixed point in the fog.' Everything communicates order and reassurance; nothing is loud, because the product's whole promise is calm.",
      personality: ["Calm", "Organized", "Trustworthy", "Professional"],
      palette: [
        { name: "Deep Navy", hex: "#0a1420", role: "Canvas" },
        { name: "Seafoam", hex: "#4fd1c5", role: "Accent" },
        { name: "Signal Blue", hex: "#3b82f6", role: "Secondary" },
        { name: "Mist", hex: "#e8f1f7", role: "Type" },
      ],
      type: {
        display: "General Sans — one calm, legible grotesk",
        text: "General Sans — consistency signals order",
        note: "Status pills carry the accent; the interface stays low-contrast and quiet so client-facing screens feel considered.",
      },
      voice: "A great account lead: clear, reassuring, always tells the client exactly what's next.",
    },
    screens: [
      {
        kind: "portal",
        frame: "browser",
        url: "acme.withharbor.com/project",
        name: "Client home",
        caption: "The client's single source of truth — status, deliverables, approvals and payments — all under the firm's own brand.",
        appName: "Harbor · Acme × Studio",
        greeting: "Welcome back, Acme. You're two approvals from launch.",
        steps: [
          { label: "Discovery", state: "done" },
          { label: "Design", state: "done" },
          { label: "Build", state: "active" },
          { label: "Launch", state: "todo" },
        ],
        cards: [
          { title: "Project", value: "Website 2026", sub: "On track · launch Jun 4" },
          { title: "Awaiting you", value: "2", sub: "Approvals due" },
          { title: "Next invoice", value: "€4,500", sub: "Due Jun 1" },
        ],
        listTitle: "Your deliverables",
        list: [
          { title: "Homepage design v3", meta: "Ready for your approval", state: "Action" },
          { title: "Brand guidelines.pdf", meta: "Delivered · Apr 18", state: "Done" },
          { title: "Copy deck — final", meta: "In review by your team", state: "Review" },
          { title: "May invoice", meta: "Paid · thank you", state: "Paid" },
        ],
      },
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.withharbor.com/firm",
        name: "Firm dashboard",
        caption: "The agency's overview: every client's status, what's blocked on approvals, and cash tied up in pending invoices.",
        appName: "Harbor",
        sidebar: ["Clients", "Projects", "Approvals", "Invoices", "Templates", "Brand"],
        activeItem: 0,
        title: "All clients",
        subtitle: "18 active · 5 awaiting client action · €22k in flight",
        kpis: [
          { label: "Active clients", value: "18", delta: "+2 this mo", up: true },
          { label: "Awaiting client", value: "5", delta: "nudged" },
          { label: "Invoices pending", value: "€22k", delta: "3 overdue" },
          { label: "On-time delivery", value: "96%", delta: "+4pt", up: true },
        ],
        chart: { label: "Client health — approvals responded / week", type: "area", points: [70, 74, 72, 80, 78, 85, 88, 91] },
        table: {
          cols: ["Client", "Project", "Status", "Waiting on"],
          rows: [
            ["Acme", "Website 2026", "Build", "Client · 2 approvals"],
            ["Nord Co", "Brand refresh", "Design", "Us · concepts"],
            ["Lumi", "Campaign", "Launch", "On track"],
            ["Kova", "Retainer", "Ongoing", "Invoice due"],
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Sell the end of chasing: every agency owner loses hours to 'did the client see it?' Harbor's pitch is faster approvals, faster payment, and clients who feel looked-after.",
      campaign:
        "\"The Last Status Email\" — a campaign for agency owners built on the shared pain of client chaos. A 'chaos calculator' (hours lost to status-chasing × rate) drives sign-ups; a template gallery lets firms launch a branded portal in a day. Case studies lead with faster approvals and paid-on-time rates.",
      channels: ["Agency owner communities & podcasts", "LinkedIn (services founders)", "Chaos-calculator lead magnet", "White-label referral from firms' clients"],
      headlines: [
        "Stop chasing clients. Give them a Harbor.",
        "Approvals in a day, not a week.",
        "Your inbox is not a project management tool.",
      ],
    },
    built: [
      "White-label client-portal product (status, deliverables, approvals, payments)",
      "Firm-side dashboard across all client relationships",
      "Branded per-client experience with templates",
      "Calm, trust-forward brand identity and voice",
      "'The Last Status Email' campaign and chaos calculator",
    ],
    demonstrates:
      "Software & product design — a relationship-management product whose entire design language (calm, order, clarity) is engineered to reduce client anxiety and speed decisions.",
    outcomes: [
      { value: "1 day", label: "Approval turnaround target" },
      { value: "96%", label: "On-time delivery modelled" },
      { value: "-Chasing", label: "Status emails designed out" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 22 · CHORUS — creator community + campaign platform                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "chorus",
    name: "Chorus",
    tagline: "Turn your quietest fans into your loudest channel.",
    category: "Marketing · Community",
    group: "marketing",
    year: "2026",
    services: ["Marketing platform", "Automation", "Brand identity"],
    serviceSlug: "marketing-engines",
    heroImage: {
      src: "/images/showcase/chorus/hero.jpg",
      alt: "Cream paper letters floating mid-air on cobalt blue, playful editorial collage with print-culture energy.",
    },
    reference: "Playful editorial marketing — cobalt + cream, cut-paper collage, expressive display; Mailchimp × Gumroad energy.",
    theme: {
      scheme: "dark",
      bg: "#111d63",
      surface: "#1a2778",
      ink: "#f4f1e4",
      muted: "#a7add8",
      line: "#2c3a95",
      accent: "#ffd34e",
      accentInk: "#111d63",
      accent2: "#ff7a9c",
      fontDisplay: '"Panchang", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "18px",
      headingTracking: "-0.02em",
      headingWeight: 800,
    },
    scene: { pattern: "halftone", glyph: "✦", motto: "Every fan is a channel" },
    concept:
      "Chorus is a community-marketing platform that helps brands and creators mobilize their existing fans as a distribution channel: referral drops, ambassador missions, UGC bounties and gated superfan tiers, all measured in one place. Instead of renting reach from ad platforms, brands turn owned audience into repeatable word-of-mouth. Revenue: SaaS tiers by community size plus a rev-share on referred sales.",
    audience: "Consumer brands, creators and community-led startups who have fans but no system to activate them.",
    brand: {
      direction:
        "Playful print-culture. A confident cobalt canvas with cream cut-paper letterforms, a sunshine-yellow accent and a coral secondary — collage energy that feels like a fanzine, not a dashboard. The identity is loud and human on the outside (marketing) and clean and organized on the inside (the product), signalling 'fun to be part of, serious to run.'",
      personality: ["Energetic", "Human", "Playful", "Rallying"],
      palette: [
        { name: "Cobalt", hex: "#111d63", role: "Canvas" },
        { name: "Sunshine", hex: "#ffd34e", role: "Accent" },
        { name: "Coral", hex: "#ff7a9c", role: "Secondary" },
        { name: "Cream", hex: "#f4f1e4", role: "Type" },
      ],
      type: {
        display: "Panchang — bold, characterful display",
        text: "General Sans — clean campaign UI",
        note: "Marketing surfaces use collage and mixed scale; the product UI calms down to keep data readable.",
      },
      voice: "A rallying community manager: warm, hype-positive but honest, celebrates the fans by name.",
    },
    screens: [
      {
        kind: "campaign",
        frame: "none",
        name: "Ambassador campaign",
        caption: "The brief a brand ships to its fans: missions, rewards and shareable assets — word-of-mouth turned into a campaign.",
        title: "CHORUS / DROP 07",
        tiles: [
          { format: "wide", headline: "Bring three friends. Unlock the vault.", sub: "Referral drop · live now", badge: "Mission" },
          { format: "square", headline: "Post it. Earn it.", sub: "UGC bounty · €15 / clip", badge: "Bounty" },
          { format: "story", headline: "Superfans get it first.", sub: "Tier 3 early access", badge: "Tier" },
          { format: "square", headline: "Top voice: @mara", sub: "41 referrals this drop", badge: "Leaderboard" },
          { format: "story", headline: "Your link, your cut.", sub: "10% rev-share", badge: "Reward" },
        ],
      },
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.chorus.community/drop-07",
        name: "Community dashboard",
        caption: "The organized inside: which fans drive sales, which missions convert, and the revenue owned audience is generating.",
        appName: "Chorus",
        sidebar: ["Overview", "Missions", "Members", "Rewards", "Referrals", "Payouts"],
        activeItem: 0,
        title: "Drop 07 — performance",
        subtitle: "1,240 active members · owned-audience revenue this week",
        kpis: [
          { label: "Referred revenue", value: "€18.4k", delta: "+62%", up: true },
          { label: "Active fans", value: "1,240", delta: "+180", up: true },
          { label: "UGC clips", value: "94", delta: "bounty" },
          { label: "Cost per sale", value: "€3.10", delta: "vs €14 ads", up: true },
        ],
        chart: { label: "Referred sales — Drop 07", type: "bars", points: [12, 20, 18, 31, 44, 38, 56, 61] },
        table: {
          cols: ["Member", "Missions", "Referrals", "Earned"],
          rows: [
            ["@mara", "6", "41", "€184"],
            ["@teoo", "5", "33", "€148"],
            ["@linnea", "4", "27", "€121"],
            ["@dritan", "3", "19", "€86"],
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Owned audience beats rented reach: as ad costs rise, Chorus sells a cheaper, more durable channel — the fans a brand already has, activated systematically.",
      campaign:
        "\"Cost Per Sale: €3 vs €14\" — a proof-led campaign contrasting referred-sale economics against paid ads, using real drop data. A free 'superfan scorecard' audits a brand's existing community potential; case-study drops show word-of-mouth outperforming paid.",
      channels: ["Creator & DTC founder communities", "Referral-economics case studies", "Superfan scorecard lead magnet", "Ambassador program templates"],
      headlines: [
        "Your fans are the channel you're not using.",
        "€3 a sale from people who already love you.",
        "Stop renting reach. Rally the ones you own.",
      ],
    },
    built: [
      "Community-marketing platform: missions, referrals, UGC bounties, tiers",
      "Fan-facing campaign/mission experience with shareable assets",
      "Brand-side analytics on referred revenue and top advocates",
      "Payouts and rev-share system for fans",
      "Playful collage brand identity and referral-economics campaign",
    ],
    demonstrates:
      "Marketing engines & automation — turning an owned audience into a measurable, repeatable acquisition channel with the tooling and incentives to run it.",
    outcomes: [
      { value: "€3.10", label: "Cost per referred sale" },
      { value: "+62%", label: "Referred-revenue lift modelled" },
      { value: "Owned", label: "Channel you don't rent" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 23 · FORMA — furniture brand with 3D configurator                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "forma",
    name: "Forma",
    tagline: "Design your chair. See it before it's made.",
    category: "Commerce · 3D product",
    group: "experience",
    year: "2026",
    services: ["3D configurator", "Brand identity", "E-commerce"],
    serviceSlug: "product-lab",
    heroImage: {
      src: "/images/showcase/forma/hero.jpg",
      alt: "Single sculptural chair in a white gallery space with soft shadows and a graphite accent, museum-grade 3D render.",
    },
    reference: "Gallery-grade product 3D — white space, soft shadow, graphite accents, real-time configurator; HAY × Vitra.",
    theme: {
      scheme: "light",
      bg: "#f4f3f0",
      surface: "#ffffff",
      ink: "#1e1e1c",
      muted: "#77756f",
      line: "#e3e1db",
      accent: "#2e2e2b",
      accentInk: "#f7f7f5",
      accent2: "#b98a5e",
      fontDisplay: '"Cabinet Grotesk", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "4px",
      radiusCard: "12px",
      headingTracking: "-0.03em",
      headingWeight: 700,
    },
    scene: { pattern: "orbit", glyph: "◲", motto: "Made to your specification" },
    concept:
      "Forma is a made-to-order furniture brand built around a real-time 3D configurator. Customers design a piece — frame, wood, upholstery, dimensions — and see a photoreal render rotate in a gallery space before ordering. It solves the two problems of premium furniture online: the fear of committing to something unseen, and the cost of holding inventory. Each piece is built to spec after purchase. Revenue: DTC made-to-order, plus trade accounts.",
    audience: "Design-conscious homeowners and interior designers furnishing considered spaces.",
    brand: {
      direction:
        "Museum-white restraint. A soft gallery palette, graphite and warm-wood accents, and a precise grotesk. The 3D configurator is the centerpiece: a single object floating in light with a soft contact shadow, rotatable and reconfigurable. The brand says 'quiet, permanent, yours' — furniture as design object, not fast-flat-pack.",
      personality: ["Precise", "Considered", "Tactile", "Quietly premium"],
      palette: [
        { name: "Gallery White", hex: "#f4f3f0", role: "Canvas" },
        { name: "Graphite", hex: "#2e2e2b", role: "Accent" },
        { name: "Warm Oak", hex: "#b98a5e", role: "Material" },
        { name: "Ink", hex: "#1e1e1c", role: "Type" },
      ],
      type: {
        display: "Cabinet Grotesk — precise, architectural",
        text: "General Sans — spec and configurator UI",
        note: "Dimensions and material names set in a quiet grotesk; the render, not the type, is the hero.",
      },
      voice: "A furniture maker's studio: talks joinery, wood grain and proportion; precise, never salesy.",
    },
    screens: [
      {
        kind: "productDetail",
        frame: "browser",
        url: "forma.studio/configure/lat-chair",
        name: "3D configurator",
        caption: "Design it live: change frame, wood and upholstery and watch a photoreal render update — commit with confidence.",
        breadcrumb: ["Seating", "Lat Chair", "Configure"],
        productName: "Lat Lounge Chair",
        price: "€1,180",
        description:
          "A low lounge chair in solid ash with a hand-upholstered seat. Configure the frame finish, wood, textile and seat depth; the render updates in real time. Built to your spec in 4–6 weeks.",
        options: [
          { label: "Wood", values: ["Ash", "Walnut", "Oak"], selected: 0 },
          { label: "Textile", values: ["Bouclé", "Wool", "Leather"], selected: 1 },
          { label: "Frame", values: ["Natural", "Graphite", "Oiled"], selected: 1 },
        ],
        cta: "Add configured piece · made to order",
        gallery: [
          "radial-gradient(70% 70% at 50% 55%,#ffffff,#dcdad3 90%)",
          "linear-gradient(160deg,#eceae4,#b98a5e 220%)",
          "linear-gradient(150deg,#f4f3f0,#2e2e2b 320%)",
          "radial-gradient(60% 60% at 45% 50%,#ffffff,#cfccc4 95%)",
        ],
        meta: [
          { label: "Material", value: "Solid ash · wool" },
          { label: "Dimensions", value: "W72 · D80 · H68 cm" },
          { label: "Made in", value: "4–6 weeks · to order" },
        ],
      },
      {
        kind: "landing",
        frame: "browser",
        url: "forma.studio",
        name: "Brand homepage",
        caption: "The homepage is a bright gallery — one configurable object at a time, with the configurator one click away.",
        nav: ["Collection", "Configure", "Trade", "The workshop"],
        navCta: "Design yours",
        eyebrow: "Made-to-order furniture",
        headline: "Furniture you finish designing.",
        accentWord: "you",
        sub: "Choose the wood, the textile and the proportions. See a photoreal render in real time. We build it to your spec — nothing sits in a warehouse.",
        primaryCta: "Open the configurator",
        secondaryCta: "For interior designers",
        stats: [
          { value: "Real-time", label: "3D configurator" },
          { value: "0", label: "Inventory held" },
          { value: "4–6 wk", label: "Made to order" },
        ],
        motif: "product",
      },
    ],
    marketing: {
      angle:
        "Remove the biggest reason people don't buy furniture online — not being able to see it. The configurator is the product demo and the marketing; every share is a bespoke piece.",
      campaign:
        "\"See It Before It Exists\" — social loops of chairs reconfiguring in real time (wood → walnut, bouclé → leather) as thumb-stopping creative, an embeddable configurator for design press and trade partners, and a 'design yours' challenge that turns customer configurations into shareable content.",
      channels: ["Instagram/Pinterest 3D loops", "Interior-design trade program", "Configurator embeds in press", "Designer collaboration drops"],
      headlines: [
        "You wouldn't buy a chair you can't see. So configure it.",
        "Zero warehouse. Infinite specification.",
        "Design it, rotate it, then we build it.",
      ],
    },
    built: [
      "Real-time 3D furniture configurator (materials, finish, dimensions)",
      "Made-to-order commerce with no inventory model",
      "Gallery-grade brand identity and render art direction",
      "Trade program and embeddable configurator",
      "'See It Before It Exists' 3D-led launch campaign",
    ],
    demonstrates:
      "3D product experience & product lab — a configurator that removes purchase risk, eliminates inventory cost, and doubles as the brand's primary marketing asset.",
    outcomes: [
      { value: "Real-time", label: "Configurator conversion tool" },
      { value: "0", label: "Inventory held" },
      { value: "Trade", label: "Designer spec channel" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 24 · MERIDIAN — expedition travel brand + itinerary product         */
  /* ------------------------------------------------------------------ */
  {
    slug: "meridian",
    name: "Meridian",
    tagline: "Small expeditions to the edges of the map.",
    category: "Experience · Travel",
    group: "experience",
    year: "2026",
    services: ["Brand identity", "Interactive web", "Marketing"],
    serviceSlug: "product-lab",
    heroImage: {
      src: "/images/showcase/meridian/hero.jpg",
      alt: "Vintage map contours blending into a deep-green mountain valley with cream overlays, cinematic expedition mood.",
    },
    reference: "Cartographic expedition editorial — topographic lines, deep green + cream, explorer-society type; Kinfolk × National Geographic.",
    theme: {
      scheme: "dark",
      bg: "#0d1512",
      surface: "#15211c",
      ink: "#eee7d6",
      muted: "#93a495",
      line: "#213029",
      accent: "#d98a3d",
      accentInk: "#0d1512",
      accent2: "#5f8f6e",
      fontDisplay: '"Zodiak", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "4px",
      radiusCard: "14px",
      headingTracking: "-0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "contour", glyph: "⛰", motto: "Twelve journeys a year" },
    concept:
      "Meridian designs and sells small-group expeditions — twelve a year, twelve guests each — to remote, hard-to-reach places, sold as an immersive cartographic web experience. Each expedition is a scroll-driven map story: the route, the elevation, the days, the people. Booking happens inside the journey. Revenue: high-margin trip fees plus a members' waitlist with priority access to sold-out departures.",
    audience: "Affluent, curious travellers who value rarity and story over resorts and checklists.",
    brand: {
      direction:
        "Explorer-society cartography. Deep forest and topographic-line motifs, cream paper overlays, an expedition-club serif and a burnt-orange accent like a route drawn on a map. The site behaves like an interactive atlas — you trace each route across terrain as you scroll. It feels like a leather field journal turned into a website.",
      personality: ["Adventurous", "Refined", "Storied", "Rare"],
      palette: [
        { name: "Deep Forest", hex: "#0d1512", role: "Canvas" },
        { name: "Route Orange", hex: "#d98a3d", role: "Accent" },
        { name: "Moss", hex: "#5f8f6e", role: "Secondary" },
        { name: "Parchment", hex: "#eee7d6", role: "Type" },
      ],
      type: {
        display: "Zodiak — expedition-club serif",
        text: "General Sans — itinerary and booking UI",
        note: "Coordinates and elevations set in mono; the route accent traces across the page as you scroll each journey.",
      },
      voice: "A seasoned expedition leader: understated, precise about terrain and risk, romantic about the place.",
    },
    screens: [
      {
        kind: "editorial",
        frame: "browser",
        url: "meridian.travel/expeditions/albanian-alps",
        name: "Expedition map story",
        caption: "Each expedition is a scroll-driven atlas — route, elevation and days unfold across the terrain, booking embedded.",
        masthead: "MERIDIAN · EXPEDITION Nº 07",
        kicker: "The Accursed Mountains · 8 days · 12 guests",
        headline: "Where the map still has edges",
        standfirst:
          "A traverse of the Albanian Alps on foot and by mule — three valleys, two mountain passes, and villages that see a dozen outsiders a year. Twelve guests, one departure, September light.",
        columns: [
          "We move slowly on purpose. Days are eight to fourteen kilometres, elevation earned rather than driven, and every night is a family guesthouse where dinner is whatever the valley grew that week. The route is drawn to reach places the roads never did.",
          "Twelve guests is not a marketing number, it is the number a single mountain guesthouse can host well. It is why departures sell out and why we run each expedition only once. If September fills, the members' waitlist gets first refusal on next year.",
        ],
        pullquote: "You don't book a trip. You take one of twelve seats to a place with edges.",
        figureTones: [
          "linear-gradient(150deg,#39543f,#0d1512 90%)",
          "linear-gradient(160deg,#d98a3d,#7a4a1e)",
          "linear-gradient(140deg,#5f8f6e,#213029)",
        ],
        figureCaption: "Valbona → Theth pass · day 4, 1,812m",
      },
      {
        kind: "landing",
        frame: "browser",
        url: "meridian.travel",
        name: "Expedition atlas",
        caption: "The homepage is a living atlas — twelve journeys a year, each a route you can trace before you commit.",
        nav: ["Expeditions", "The atlas", "Members", "Field notes"],
        navCta: "Reserve a seat",
        eyebrow: "12 expeditions · 12 guests each",
        headline: "Small expeditions, rare places.",
        accentWord: "rare",
        sub: "Twelve journeys a year to the edges of the map, each sold as a route you trace before you go. When a departure fills, it's gone.",
        primaryCta: "Explore the atlas",
        secondaryCta: "Join the members' waitlist",
        stats: [
          { value: "12", label: "Guests per expedition" },
          { value: "12/yr", label: "Departures, once each" },
          { value: "Members", label: "First refusal on seats" },
        ],
        motif: "orbs",
      },
    ],
    marketing: {
      angle:
        "Rarity is the product: 'twelve guests, once a year' sells the opposite of mass tourism. The interactive map story does the emotional selling that a listings page can't.",
      campaign:
        "\"The Edges of the Map\" — a slow-media launch: each expedition released as a cinematic map story and a printed field-note booklet for members. Field films of past departures drive a members' waitlist; scarcity (single departures, 12 seats) does the converting.",
      channels: ["Instagram/YouTube expedition films", "Members' printed field notes", "Travel & design press", "Referral from past guests"],
      headlines: [
        "Twelve seats. One departure. Then it's a story you missed.",
        "Trace the route before you take it.",
        "The edges of the map are still bookable.",
      ],
    },
    built: [
      "Cartographic brand identity and expedition-club art direction",
      "Interactive, scroll-driven map-story web experience",
      "In-journey booking with single-departure scarcity",
      "Members' waitlist and printed field-note format",
      "'The Edges of the Map' slow-media launch campaign",
    ],
    demonstrates:
      "Interactive storytelling & experience design — a narrative, map-driven web experience where the journey itself is the interface and rarity is the conversion mechanic.",
    outcomes: [
      { value: "12×12", label: "Departures × guests" },
      { value: "Once", label: "Each route runs a single time" },
      { value: "Waitlist", label: "Members-first demand engine" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 25 · CURIO — curated art & collectibles marketplace                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "curio",
    name: "Curio",
    tagline: "A gallery in your pocket. Bid before it closes.",
    category: "Marketplace · Art & collectibles",
    group: "commerce",
    year: "2026",
    services: ["Marketplace", "Product design", "Brand identity"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/curio/hero.jpg",
      alt: "A single spotlit artifact in a plum-dark gallery with a gold label glint, dramatic museum lighting.",
    },
    reference: "Digital auction house — plum-dark gallery, gold labels, museum lighting, refined serif; Sotheby's × Artsy.",
    theme: {
      scheme: "dark",
      bg: "#140f18",
      surface: "#1e1723",
      ink: "#efe7dd",
      muted: "#a094a6",
      line: "#2c2333",
      accent: "#c9a24a",
      accentInk: "#140f18",
      accent2: "#8b6fae",
      fontDisplay: '"DM Serif Display", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "4px",
      radiusCard: "12px",
      headingTracking: "-0.01em",
      headingWeight: 400,
    },
    scene: { pattern: "rings", glyph: "❖", motto: "Curated · authenticated · yours" },
    concept:
      "Curio is a curated marketplace for art and design collectibles — prints, ceramics, vintage design, small sculpture — that runs weekly themed sales with timed auctions and buy-now pieces. Every lot is vetted and authenticated by a curator, solving the trust problem that plagues open collectibles platforms. It sits between a chaotic auction site and an intimidating gallery. Revenue: seller commission plus buyer's premium and a premium collector membership.",
    audience: "Emerging art collectors and design lovers who want vetted pieces without gallery gatekeeping.",
    brand: {
      direction:
        "Digital auction house. A plum-dark gallery lit like a museum vitrine, gold used as label brass, and a refined display serif. Each lot is presented as a spotlit object with a wall-label typography system. The identity borrows the confidence of a great auction catalogue but strips out the intimidation — refined, warm, and legible on a phone.",
      personality: ["Curated", "Refined", "Trustworthy", "Intriguing"],
      palette: [
        { name: "Gallery Plum", hex: "#140f18", role: "Canvas" },
        { name: "Label Gold", hex: "#c9a24a", role: "Accent" },
        { name: "Amethyst", hex: "#8b6fae", role: "Secondary" },
        { name: "Ivory", hex: "#efe7dd", role: "Type" },
      ],
      type: {
        display: "DM Serif Display — auction-catalogue elegance",
        text: "General Sans — lot details and bidding UI",
        note: "Lot numbers and estimates set like wall labels; gold marks live bids and 'winning' states only.",
      },
      voice: "A warm gallery director: knowledgeable, unstuffy, tells you why a piece matters before its price.",
    },
    screens: [
      {
        kind: "storefront",
        frame: "browser",
        url: "curio.gallery/this-week",
        name: "Weekly curated sale",
        caption: "A themed weekly sale presented like a gallery hang — every lot vetted, spotlit, with a live timer and estimate.",
        nav: ["This week", "Auctions", "Buy now", "Collectors"],
        navCta: "Register to bid",
        collection: "This Week — Postwar Ceramics",
        intro: "Thirty-two vetted lots, authenticated and estimated by our ceramics curator. Auctions close Sunday, 8 PM.",
        filters: ["All lots", "Live auction", "Buy now", "Ending soon"],
        products: [
          { name: "Lot 04 · Stoneware Vessel", price: "Bid €340", tag: "6 bids", tone: "radial-gradient(70% 70% at 50% 40%,#3a2b46,#140f18 95%)" },
          { name: "Lot 09 · Studio Bowl", price: "Buy €210", tone: "radial-gradient(70% 70% at 50% 45%,#4a3a2a,#140f18 95%)" },
          { name: "Lot 17 · Glazed Form", price: "Bid €880", tag: "Ends 2h", tone: "radial-gradient(70% 70% at 50% 40%,#2c2333,#140f18 95%)" },
          { name: "Lot 22 · Ash Plate", price: "Buy €160", tone: "radial-gradient(70% 70% at 50% 45%,#3a3040,#140f18 95%)" },
        ],
      },
      {
        kind: "productDetail",
        frame: "browser",
        url: "curio.gallery/lot/17-glazed-form",
        name: "Lot & live bidding",
        caption: "The lot page reads like a wall label with a live auction: provenance, authentication, estimate and a closing timer.",
        breadcrumb: ["Postwar Ceramics", "Lot 17"],
        productName: "Lot 17 · Glazed Form, c.1978",
        price: "Current bid €880",
        description:
          "A wheel-thrown stoneware form in tenmoku glaze, attributed and authenticated by our curator. Provenance: private collection, Trieste. Estimate €700–€1,000. Auction closes in 2h 14m.",
        options: [
          { label: "Your max bid", values: ["€920", "€1,000", "Custom"], selected: 1 },
          { label: "Collector plan", values: ["Standard", "Member · -premium"], selected: 0 },
        ],
        cta: "Place bid · €1,000 max",
        gallery: [
          "radial-gradient(65% 65% at 50% 42%,#5a4668,#140f18 92%)",
          "radial-gradient(70% 70% at 50% 45%,#4a3a2a,#140f18 95%)",
          "radial-gradient(70% 70% at 50% 40%,#2c2333,#140f18 95%)",
          "radial-gradient(70% 70% at 50% 45%,#3a3040,#140f18 95%)",
        ],
        meta: [
          { label: "Estimate", value: "€700 – €1,000" },
          { label: "Authenticated", value: "Curio ceramics desk" },
          { label: "Closes", value: "Sunday · 2h 14m" },
        ],
      },
    ],
    marketing: {
      angle:
        "Trust is the differentiator: open collectibles sites are full of fakes and noise. Curio sells curation and authentication — 'every lot vetted' — plus the theatre of a weekly timed sale.",
      campaign:
        "\"The Sunday Sale\" — a weekly ritual: a themed curated drop every week with a Sunday-8PM close, teased through the week with curator picks and provenance stories. A collector membership (lower premium, early access) turns browsers into a recurring bidding audience.",
      channels: ["Instagram curator picks & lot stories", "Weekly 'Sunday Sale' email", "Art & design newsletters", "Seller/consignor outreach"],
      headlines: [
        "Every lot, vetted. Every Sunday, a new sale.",
        "The confidence of an auction house. The ease of a phone.",
        "Collecting, without the gatekeeping.",
      ],
    },
    built: [
      "Curated marketplace with weekly themed sales and timed auctions",
      "Vetting/authentication workflow and wall-label lot pages",
      "Live bidding experience and collector membership",
      "Auction-house brand identity adapted for mobile",
      "'The Sunday Sale' weekly ritual campaign and consignor pipeline",
    ],
    demonstrates:
      "Marketplace & product design — a trust-first transaction platform where curation, authentication and auction theatre are designed into the core experience.",
    outcomes: [
      { value: "Weekly", label: "Curated timed sales" },
      { value: "100%", label: "Lots vetted + authenticated" },
      { value: "Members", label: "Recurring bidder base" },
    ],
  },
];
