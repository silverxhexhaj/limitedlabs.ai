import type { ShowcaseWork } from "../types";

export const WORKS_D: ShowcaseWork[] = [
  /* ------------------------------------------------------------------ */
  /* 16 · ANNUM — capsule wardrobe membership                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "annum",
    name: "Annum",
    tagline: "Twelve pieces a year. Nothing you'll regret.",
    category: "E-commerce · Fashion",
    group: "commerce",
    year: "2026",
    services: ["Brand identity", "E-commerce", "Membership systems"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/annum/hero.jpg",
      alt: "Monochrome garment on a rail in a raw concrete space, hard flash, editorial fashion archive mood.",
    },
    reference: "Archival fashion minimalism — concrete grey, hard flash, monospaced captions; COS × SSENSE editorial.",
    theme: {
      scheme: "dark",
      bg: "#131313",
      surface: "#1c1c1c",
      ink: "#ededea",
      muted: "#8f8f8a",
      line: "#2a2a2a",
      accent: "#c8503c",
      accentInk: "#f4f4f2",
      accent2: "#6b6b66",
      fontDisplay: '"Erode", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "2px",
      radiusCard: "4px",
      headingTransform: "uppercase",
      headingTracking: "0.02em",
      headingWeight: 600,
    },
    scene: { pattern: "stripes", glyph: "▨", motto: "A slower wardrobe" },
    concept:
      "Annum is an anti-fast-fashion membership: for a yearly fee, members receive twelve considered wardrobe pieces — one per month — designed to layer into a single coherent capsule. It fights decision fatigue and overconsumption with restraint, not more choice. Members can swap, skip, or bank credits. Revenue: annual membership, plus a limited archive shop of past pieces.",
    audience: "Professionals tired of overflowing closets who want to dress well with less thought and less waste.",
    brand: {
      direction:
        "Archival concrete. A monochrome, gallery-cold identity shot with hard flash on raw concrete — the aesthetic of a fashion archive, not a boutique. One oxblood accent is the only warmth. An uppercase serif and monospaced captions give it the feel of a lookbook that outlasts trends. Restraint is the entire pitch.",
      personality: ["Considered", "Austere", "Editorial", "Enduring"],
      palette: [
        { name: "Concrete", hex: "#131313", role: "Canvas" },
        { name: "Oxblood", hex: "#c8503c", role: "Accent" },
        { name: "Paper", hex: "#ededea", role: "Type" },
        { name: "Ash", hex: "#6b6b66", role: "Secondary" },
      ],
      type: {
        display: "Erode — refined serif, set uppercase and wide",
        text: "General Sans + mono captions",
        note: "Pieces are catalogued like an archive: 'ANNUM · 2026 · PIECE 04' in monospace beneath the serif name.",
      },
      voice: "A calm editor: fewer words, no hype, quietly confident that less is the luxury.",
    },
    screens: [
      {
        kind: "storefront",
        frame: "browser",
        url: "annum.club/2026",
        name: "The year's capsule",
        caption: "The product is a year, not a catalogue: twelve pieces revealed monthly, designed to work only as a set.",
        nav: ["The 2026 capsule", "How it works", "Archive", "Members"],
        navCta: "Join for 2026",
        collection: "The 2026 Capsule",
        intro: "Twelve pieces, one per month, engineered to layer into a single wardrobe. Skip, swap or bank any month.",
        filters: ["All twelve", "Delivered", "Upcoming", "Archive"],
        products: [
          { name: "Piece 01 · The Coat", price: "Included", tag: "Delivered", tone: "linear-gradient(160deg,#2a2a2a,#4a4a48)" },
          { name: "Piece 02 · Wide Trouser", price: "Included", tag: "Delivered", tone: "linear-gradient(150deg,#20201f,#3a3a38)" },
          { name: "Piece 03 · Fine Knit", price: "Included", tag: "This month", tone: "linear-gradient(155deg,#33211d,#c8503c 200%)" },
          { name: "Piece 04 · Oxford Shirt", price: "Upcoming", tone: "linear-gradient(150deg,#1c1c1c,#2f2f2e)" },
        ],
      },
      {
        kind: "checkout",
        frame: "browser",
        url: "annum.club/join",
        name: "Membership checkout",
        caption: "Joining is committing to a year — the checkout frames it as a plan and a philosophy, not a transaction.",
        appName: "Annum",
        steps: ["Plan", "Fit", "Payment"],
        activeStep: 2,
        items: [
          { name: "2026 Membership", detail: "12 pieces · monthly", price: "€1,140" },
          { name: "Fit profile", detail: "Tailored sizing", price: "Included" },
          { name: "Archive access", detail: "Past pieces", price: "Included" },
        ],
        totals: [
          { label: "Annual", value: "€1,140" },
          { label: "Per piece", value: "≈ €95" },
          { label: "Billed", value: "Yearly or 4×" },
          { label: "Total today", value: "€285" },
        ],
        fields: ["Name & sizing", "Delivery address", "Card details", "Skip-any-month toggle"],
        cta: "Begin your Annum",
        note: "Cancel before renewal · pieces are yours to keep",
      },
    ],
    marketing: {
      angle:
        "Sell the relief of less: Annum markets against the anxiety of a full closet and constant micro-decisions. The value proposition is fewer, better, decided-for-you.",
      campaign:
        "\"The Last Wardrobe You'll Overthink\" — a restrained campaign of archive-style photography and member essays about buying less. A 'closet audit' lead magnet (upload what you own, see the gaps) drives sign-ups; each month's piece reveal doubles as content.",
      channels: ["Instagram/Pinterest archive editorial", "Members' essays & newsletter", "Closet-audit lead magnet", "Sustainability & slow-fashion press"],
      headlines: [
        "Twelve pieces a year. That's the whole idea.",
        "Own less. Decide once. Dress better.",
        "The opposite of a sale.",
      ],
    },
    built: [
      "Membership commerce model (annual, monthly drops, skip/swap/bank)",
      "Archival monochrome brand identity and lookbook system",
      "Year-as-product storefront with capsule reveal cadence",
      "Fit-profile onboarding and membership checkout",
      "'Closet audit' lead magnet and slow-fashion campaign",
    ],
    demonstrates:
      "E-commerce + membership systems — a subscription commerce model whose brand and UX are built around restraint and retention rather than catalogue browsing.",
    outcomes: [
      { value: "12/yr", label: "Pieces per member" },
      { value: "€1,140", label: "Annual membership" },
      { value: "Skip", label: "Flex retention built in" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 17 · ALLOY — on-demand CNC parts marketplace                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "alloy",
    name: "Alloy",
    tagline: "Upload a part. Get it machined. Skip the phone tag.",
    category: "Marketplace · Manufacturing",
    group: "commerce",
    year: "2026",
    services: ["Marketplace platform", "Software design", "Brand identity"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/alloy/hero.jpg",
      alt: "Macro of a machined steel lattice part under signal-orange accent lighting in a dark industrial workshop.",
    },
    reference: "Industrial precision UI — dark workshop, signal-orange, engineered mono; Xometry × Linear.",
    theme: {
      scheme: "dark",
      bg: "#0d0e10",
      surface: "#16181b",
      ink: "#eef0f2",
      muted: "#868c93",
      line: "#24272b",
      accent: "#ff6a2b",
      accentInk: "#0d0e10",
      accent2: "#9aa0a6",
      fontDisplay: '"Khand", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "4px",
      radiusCard: "8px",
      headingTransform: "uppercase",
      headingTracking: "0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "grid", glyph: "⬡", motto: "Precision parts, on demand" },
    concept:
      "Alloy is a manufacturing marketplace connecting product companies and hardware startups that need custom CNC-machined or 3D-printed parts with a vetted network of machine shops. Upload a CAD file, get an instant price and lead-time quote from the geometry, and the job is routed to a shop with capacity. It replaces weeks of emailing quotes with a checkout. Revenue: marketplace margin on each job plus a shop SaaS tier.",
    audience: "Hardware startups, product designers and engineers sourcing low-to-mid volume custom parts.",
    brand: {
      direction:
        "Machined precision. A dark-workshop palette lit by one signal-orange, condensed industrial type, and interface geometry that echoes CAD and CMM readouts. Everything feels engineered and exact — tolerances, lead times and prices presented like machine specs. Orange means 'live/now'; grey is structure.",
      personality: ["Precise", "Fast", "Industrial", "Trustworthy"],
      palette: [
        { name: "Machine Black", hex: "#0d0e10", role: "Canvas" },
        { name: "Signal Orange", hex: "#ff6a2b", role: "Accent" },
        { name: "Steel", hex: "#9aa0a6", role: "Secondary" },
        { name: "Chalk", hex: "#eef0f2", role: "Type" },
      ],
      type: {
        display: "Khand — condensed, industrial, stencil-adjacent",
        text: "General Sans — spec tables and quotes",
        note: "Prices, tolerances and lead times use tabular figures; orange is reserved for the live quote and 'in production' state.",
      },
      voice: "A senior manufacturing engineer: exact, unhurried, quotes the tolerance before the price.",
    },
    screens: [
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.alloy.parts/quote",
        name: "Instant quote",
        caption: "Upload a CAD file and Alloy prices it from the geometry — no email chains, no three-day quote wait.",
        appName: "Alloy",
        sidebar: ["New quote", "Orders", "Parts library", "Shops", "Invoices"],
        activeItem: 0,
        title: "Quote — bracket_v4.step",
        subtitle: "Aluminium 6061 · CNC milled · qty 25",
        kpis: [
          { label: "Instant price", value: "€1,842", delta: "€73.68 / unit", up: true },
          { label: "Lead time", value: "6 days", delta: "3 shops available" },
          { label: "Tolerance", value: "±0.05mm", delta: "as-drawn" },
          { label: "DFM checks", value: "2", delta: "review flags" },
        ],
        chart: { label: "Price vs quantity — this part", type: "line", points: [120, 98, 86, 79, 74, 71, 69, 68] },
        table: {
          cols: ["Shop", "Location", "Lead", "Price"],
          rows: [
            ["Precikon", "Tirana", "6 days", "€1,842"],
            ["NordMill", "Skopje", "8 days", "€1,760"],
            ["Adriatic CNC", "Durrës", "5 days", "€1,990"],
            ["MetroFab", "Prishtina", "9 days", "€1,705"],
          ],
        },
      },
      {
        kind: "checkout",
        frame: "browser",
        url: "app.alloy.parts/order/confirm",
        name: "Order & route",
        caption: "Checkout routes the job to a chosen shop with a tracked production timeline — sourcing becomes one transaction.",
        appName: "Alloy",
        steps: ["Part", "Shop", "Confirm"],
        activeStep: 2,
        items: [
          { name: "bracket_v4.step ×25", detail: "AL 6061 · CNC · ±0.05mm", price: "€1,842" },
          { name: "Anodize — clear", detail: "Type II finish", price: "€180" },
          { name: "Rush handling", detail: "Priority queue", price: "€120" },
        ],
        totals: [
          { label: "Parts", value: "€1,842" },
          { label: "Finish + rush", value: "€300" },
          { label: "Alloy fee", value: "€107" },
          { label: "Total", value: "€2,249" },
        ],
        fields: ["Shipping address", "PO number (optional)", "Payment / net-30 terms", "Inspection report toggle"],
        cta: "Place order · route to Precikon",
        note: "Production starts on payment · live status in Orders",
      },
    ],
    marketing: {
      angle:
        "Kill the quote wait: every hardware engineer knows the pain of emailing five shops and waiting days. Alloy's promise is a price and a lead time before you finish your coffee.",
      campaign:
        "\"Quote in 60 Seconds\" — a developer/engineer-led campaign anchored on a public instant-quote demo (drop in a sample STEP file, see the price). Content lives where engineers are: hardware subreddits, maker YouTube, and CAD-tool integrations. Shops are recruited with a 'fill your idle machine hours' pitch.",
      channels: ["Engineering & hardware communities", "CAD-tool integrations & plugins", "Maker/hardware YouTube", "Shop-side idle-capacity outreach"],
      headlines: [
        "Five emails and three days, or one upload and a price.",
        "Your CAD file already knows what it costs.",
        "Machined, finished, tracked — from one screen.",
      ],
    },
    built: [
      "Two-sided marketplace: instant geometry-based quoting + shop routing",
      "CAD-upload quote flow with DFM checks and quantity pricing",
      "Order + production-tracking and shop-side capacity tools",
      "Industrial-precision brand identity and interface system",
      "'Quote in 60 Seconds' demo-led launch and shop recruitment",
    ],
    demonstrates:
      "Marketplace platforms & software — building a two-sided transaction engine that removes friction (instant quoting, routing) from a slow, offline B2B process.",
    outcomes: [
      { value: "60s", label: "CAD → priced quote" },
      { value: "3-day → same", label: "Quote turnaround killed" },
      { value: "2-sided", label: "Buyers + vetted shops" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 18 · STUDIO KIN — creative studio brand identity                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "studio-kin",
    name: "Studio Kin",
    tagline: "A studio that designs like it means it.",
    category: "Brand identity · Agency",
    group: "brand",
    year: "2026",
    services: ["Brand identity", "Art direction", "Web design"],
    serviceSlug: "brand",
    heroImage: {
      src: "/images/showcase/studio-kin/hero.jpg",
      alt: "Bold black-and-white typographic poster wall with oversized letterforms and one red accent, brutalist print aesthetic.",
    },
    reference: "Swiss-brutalist type — black/white, one red, oversized grotesk, print-poster energy; Pentagram × Gretel.",
    theme: {
      scheme: "light",
      bg: "#f2f2ef",
      surface: "#ffffff",
      ink: "#111111",
      muted: "#6a6a66",
      line: "#dcdcd7",
      accent: "#e4231b",
      accentInk: "#f7f7f5",
      accent2: "#111111",
      fontDisplay: '"Syne", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "0px",
      radiusCard: "0px",
      headingTransform: "uppercase",
      headingTracking: "-0.02em",
      headingWeight: 800,
    },
    scene: { pattern: "type", glyph: "", motto: "Design studio · est. 2026" },
    concept:
      "Studio Kin is the self-brand of a fictional creative studio — the meta-work that proves Limited Labs can build a design house's own identity and site. It's a brand-and-web system for a studio that positions itself between advertising wit and Swiss rigor: big type, hard grids, one red. The site is the pitch, the portfolio and the personality in one. Revenue (for the studio): retainer and project design work.",
    audience: "Ambitious founders and marketing leads shopping for a design partner with a point of view.",
    brand: {
      direction:
        "Swiss-brutalist confidence. Near-white paper, hard black type at enormous scale, one alarm-red accent, and a rigid grid with zero rounded corners. It borrows the poster tradition — type as image — and the attitude of a studio that has opinions. The wordmark is the whole system; everything else is scale and spacing.",
      personality: ["Bold", "Rigorous", "Witty", "Uncompromising"],
      palette: [
        { name: "Paper", hex: "#f2f2ef", role: "Canvas" },
        { name: "Alarm Red", hex: "#e4231b", role: "Accent" },
        { name: "Ink", hex: "#111111", role: "Type" },
        { name: "Slate", hex: "#6a6a66", role: "Secondary" },
      ],
      type: {
        display: "Syne — expressive display grotesk, set huge",
        text: "General Sans — quiet body against loud headlines",
        note: "Headlines run edge-to-edge and uppercase; red is used once per view, like a single spot color on a press.",
      },
      voice: "A studio with a mouth: confident, a little cheeky, allergic to corporate mush.",
    },
    screens: [
      {
        kind: "editorial",
        frame: "browser",
        url: "studiokin.co/manifesto",
        name: "Studio site / manifesto",
        caption: "The studio's site is a poster: oversized type, a hard grid, and one red — the identity system demonstrating itself.",
        masthead: "STUDIO KIN",
        kicker: "Manifesto · No. 01",
        headline: "Most brands are wallpaper.",
        standfirst:
          "We make the other kind — the ones people can draw from memory. Nine projects a year, no templates, one opinion per brand. If you want safe, there are cheaper studios.",
        columns: [
          "Kin started with a frustration: every 'brand refresh' looked like the last one with a new gradient. We build systems with a spine — a single idea expressed in type, grid and one decision you can't un-see. Then we make everything else get out of its way.",
          "We work in small: nine engagements a year, senior hands only, no account layers between you and the people drawing. It costs what focus costs. In return you get a brand that argues its own case before you say a word.",
        ],
        pullquote: "If you can't draw it from memory, it isn't a brand yet.",
        figureTones: [
          "linear-gradient(135deg,#111,#333)",
          "linear-gradient(135deg,#e4231b,#8f1610)",
          "linear-gradient(135deg,#f2f2ef,#c9c9c4)",
        ],
        figureCaption: "Selected identity work · 2026",
      },
      {
        kind: "campaign",
        frame: "none",
        name: "Identity system in use",
        caption: "One system, many surfaces: posters, social and signage all built from the same type, grid and single red.",
        title: "STUDIO KIN / SYSTEM",
        tiles: [
          { format: "story", headline: "TYPE AS IMAGE", sub: "Poster series", badge: "01" },
          { format: "square", headline: "ONE RED. USED ONCE.", sub: "Color rule", badge: "02" },
          { format: "wide", headline: "A GRID YOU CAN FEEL", sub: "Layout system across print + web", badge: "03" },
          { format: "square", headline: "KIN", sub: "Wordmark", badge: "Mark" },
          { format: "story", headline: "NINE A YEAR", sub: "Studio model", badge: "04" },
        ],
      },
    ],
    marketing: {
      angle:
        "The brand is the proof: a design studio that can't brand itself can't brand you. Studio Kin's own identity does all the selling — confidence as the pitch.",
      campaign:
        "\"Draw It From Memory\" — a provocation campaign: Kin publishes a weekly teardown of a famous brand redesigned to be more memorable, plus a challenge asking founders to sketch their own logo from memory (most can't). The lesson always routes to Kin's method.",
      channels: ["Design Twitter/X & LinkedIn teardowns", "Awwwards / design galleries", "Speaking at founder & design events", "Referral from delivered work"],
      headlines: [
        "If it needs a caption, it isn't working.",
        "We do nine brands a year. Yours could be one.",
        "Most brands are wallpaper. Let's not.",
      ],
    },
    built: [
      "Complete studio identity: wordmark, type system, one-red color rule",
      "Brutalist portfolio-and-manifesto website",
      "Poster/social/signage system from a single grid",
      "Studio positioning, voice and pitch narrative",
      "'Draw It From Memory' thought-leadership campaign",
    ],
    demonstrates:
      "Brand identity systems — a pure identity-and-art-direction showcase proving Limited Labs can build a design-house-grade brand with a genuine point of view.",
    outcomes: [
      { value: "1 idea", label: "Per brand, with a spine" },
      { value: "9/yr", label: "Focused studio model" },
      { value: "Memorable", label: "The only brief that matters" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 19 · EMBER & OAK — fire-kitchen restaurant brand                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "ember-and-oak",
    name: "Ember & Oak",
    tagline: "Everything touches fire. Book the counter.",
    category: "Brand + Marketing · Restaurant",
    group: "marketing",
    year: "2026",
    services: ["Brand identity", "Marketing", "Booking"],
    serviceSlug: "marketing-engines",
    heroImage: {
      src: "/images/showcase/ember-and-oak/hero.jpg",
      alt: "Open flame over a charcoal grill in darkness with ember sparks, flame-orange on near-black, cinematic food photography.",
    },
    reference: "Fire-kitchen cinema — near-black, ember-orange glow, tactile serif; Noma × steakhouse editorial.",
    theme: {
      scheme: "dark",
      bg: "#0c0806",
      surface: "#171008",
      ink: "#f4e9d8",
      muted: "#a08e77",
      line: "#28190f",
      accent: "#e8591f",
      accentInk: "#0c0806",
      accent2: "#c9962f",
      fontDisplay: '"Tanker", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "6px",
      radiusCard: "12px",
      headingTransform: "uppercase",
      headingTracking: "0.005em",
      headingWeight: 400,
    },
    scene: { pattern: "scan", glyph: "🔥", motto: "Live fire · one counter · nightly" },
    concept:
      "Ember & Oak is a fire-kitchen restaurant where every dish — including dessert — passes over live coals, seating 24 at a counter around the hearth. The brand and marketing system is built to keep that counter full nightly and to make the restaurant famous beyond its walls: a reservation engine, a content machine fed by the fire, and a membership for regulars. Revenue: covers, private hearth buyouts, and a supper-club membership.",
    audience: "Food-obsessed diners, date-night couples and out-of-town food tourists chasing a signature experience.",
    brand: {
      direction:
        "Ember cinema. Near-black rooms lit only by orange coals, a tactile display face with a hand-cut feel, and photography that treats flame as the hero. The identity smells like woodsmoke — warm, primal, premium. Menus, matchbooks and the site all glow from a single ember-orange light source.",
      personality: ["Primal", "Warm", "Crafted", "Intimate"],
      palette: [
        { name: "Charcoal", hex: "#0c0806", role: "Canvas" },
        { name: "Ember Orange", hex: "#e8591f", role: "Accent" },
        { name: "Brass", hex: "#c9962f", role: "Secondary" },
        { name: "Tallow", hex: "#f4e9d8", role: "Type" },
      ],
      type: {
        display: "Tanker — chunky, tactile, hand-cut character",
        text: "General Sans — clean menu and booking UI",
        note: "The accent is used like firelight — glows on CTAs and the nightly menu, never as flat fill.",
      },
      voice: "A chef at the pass: short, sensory, a little intense. Names the fire, not the plating.",
    },
    screens: [
      {
        kind: "landing",
        frame: "browser",
        url: "emberandoak.co",
        name: "Restaurant site",
        caption: "A site that sells the heat: full-bleed fire, the nightly counter, and a reservation as the single obvious action.",
        nav: ["The counter", "Menu", "Private hearth", "Supper club"],
        navCta: "Book a seat",
        eyebrow: "Live-fire kitchen · 24 seats",
        headline: "Everything here touches fire.",
        accentWord: "fire",
        sub: "One counter, twenty-four seats, a single nightly menu cooked over oak and coals an arm's length in front of you.",
        primaryCta: "Reserve the counter",
        secondaryCta: "See tonight's menu",
        stats: [
          { value: "24", label: "Seats at the hearth" },
          { value: "1", label: "Menu, changed nightly" },
          { value: "100%", label: "Cooked over fire" },
        ],
        motif: "product",
      },
      {
        kind: "booking",
        frame: "phone",
        name: "Reservation flow",
        caption: "Booking is designed for a scarce 24-seat counter — seatings, not tables, with a deposit that cuts no-shows.",
        appName: "Ember & Oak",
        title: "Reserve the counter",
        monthLabel: "November 2026",
        daysInMonth: 30,
        selectedDay: 21,
        slots: ["18:00 seating", "18:30 · 2 left", "20:30 seating", "21:00 · full"],
        selectedSlot: 0,
        summary: [
          { label: "Seats", value: "2 at the counter" },
          { label: "Seating", value: "Nov 21 · 18:00" },
          { label: "Menu", value: "Nightly · 7 courses" },
          { label: "Deposit", value: "€40 pp · held" },
        ],
        cta: "Confirm & hold seats",
      },
    ],
    marketing: {
      angle:
        "Sell the fire, not the food: 24 seats and live flame make scarcity and spectacle the story. The marketing turns every service into filmable content.",
      campaign:
        "\"Fed by the Fire\" — a content engine where the kitchen itself is the studio: nightly vertical clips of flame, char and plating; a monthly 'hearth buyout' for tastemakers; and a supper-club membership that guarantees regulars a counter seat and early access to collab nights.",
      channels: ["Instagram/TikTok fire content (nightly)", "Reservation waitlist & deposits", "Supper-club membership email", "Local & food-press partnerships"],
      headlines: [
        "Twenty-four seats. One fire. Every night.",
        "Dessert goes on the coals too.",
        "You don't get a table. You get the counter.",
      ],
    },
    built: [
      "Fire-kitchen brand identity, menu system and matchbook-to-web collateral",
      "Scarce-seating reservation engine with deposits and seatings",
      "'Fed by the Fire' nightly content engine and templates",
      "Supper-club membership design and private-hearth buyout offer",
      "Local launch and food-press partnership plan",
    ],
    demonstrates:
      "Marketing engines + brand — a restaurant growth system where identity, content and booking are engineered together to keep a scarce room full and famous.",
    outcomes: [
      { value: "24", label: "Seats to fill nightly" },
      { value: "-No-shows", label: "Deposits + seatings" },
      { value: "Members", label: "Guaranteed-regular revenue" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 20 · VANTAGE — luxury property development brand + portal           */
  /* ------------------------------------------------------------------ */
  {
    slug: "vantage",
    name: "Vantage",
    tagline: "Forty residences above the city. Sold before the concrete cured.",
    category: "Brand + Software · Real estate",
    group: "brand",
    year: "2026",
    services: ["Brand identity", "Sales portal", "Marketing"],
    serviceSlug: "brand",
    heroImage: {
      src: "/images/showcase/vantage/hero.jpg",
      alt: "Dusk facade of a dark luxury residential tower with bronze window light and a thin gold horizon, architectural render.",
    },
    reference: "Prestige real-estate — dusk render, bronze-on-charcoal, architectural serif; Related × luxury developer books.",
    theme: {
      scheme: "dark",
      bg: "#0e0d0b",
      surface: "#17150f",
      ink: "#efe8db",
      muted: "#9a9081",
      line: "#262115",
      accent: "#b8974f",
      accentInk: "#0e0d0b",
      accent2: "#6c88a0",
      fontDisplay: '"Zodiak", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "3px",
      radiusCard: "10px",
      headingTracking: "-0.01em",
      headingWeight: 400,
    },
    scene: { pattern: "contour", glyph: "◈", motto: "A view worth buying early" },
    concept:
      "Vantage is a pre-launch brand and sales system for a 40-residence luxury tower selling off-plan — before there's a physical show unit. The problem: how to sell €400k–€1.2M homes that don't exist yet. The answer is a cinematic brand plus a private buyer portal where prospects explore residences in 3D, reserve a unit, track construction, and manage their purchase. Revenue (for the developer): unit sales; the platform de-risks and accelerates the sell-out.",
    audience: "Investors and end-buyers purchasing premium off-plan residences; the developer's sales team.",
    brand: {
      direction:
        "Prestige at dusk. Charcoal and warm stone with a single bronze accent and a refined architectural serif, evoking a leather-bound property book. Renders are shot at blue hour with bronze window-light. The system reassures a nervous off-plan buyer: everything looks finished, considered and permanent long before the building is.",
      personality: ["Prestigious", "Assured", "Architectural", "Discreet"],
      palette: [
        { name: "Dusk Charcoal", hex: "#0e0d0b", role: "Canvas" },
        { name: "Bronze", hex: "#b8974f", role: "Accent" },
        { name: "Blue Hour", hex: "#6c88a0", role: "Atmosphere" },
        { name: "Stone", hex: "#efe8db", role: "Type" },
      ],
      type: {
        display: "Zodiak — architectural high-contrast serif",
        text: "General Sans — floor plans, specs, portal UI",
        note: "Residence numbers and floor levels set in serif; bronze marks availability and 'reserved' states.",
      },
      voice: "A private sales director: measured, exclusive, deals in views and light, not square-metre clichés.",
    },
    screens: [
      {
        kind: "landing",
        frame: "browser",
        url: "vantage.residences",
        name: "Development site",
        caption: "A cinematic pre-launch site that makes an unbuilt tower feel inevitable — and routes serious buyers to the portal.",
        nav: ["The tower", "Residences", "Amenities", "Register interest"],
        navCta: "Private viewing",
        eyebrow: "40 residences · completing 2028",
        headline: "Buy the view before the view exists.",
        accentWord: "view",
        sub: "A forty-home tower above the old harbour. Explore each residence in 3D, reserve off-plan, and watch it rise from your private portal.",
        primaryCta: "Enter the residences",
        secondaryCta: "Request the brochure",
        stats: [
          { value: "40", label: "Residences" },
          { value: "€395k+", label: "From, off-plan" },
          { value: "2028", label: "Completion" },
        ],
        motif: "product",
      },
      {
        kind: "portal",
        frame: "browser",
        url: "portal.vantage.residences/unit-1704",
        name: "Buyer portal",
        caption: "After reserving, buyers get a private portal: their residence, the purchase steps, construction progress and documents.",
        appName: "Vantage — Owner Portal",
        greeting: "Residence 1704 is reserved for you.",
        steps: [
          { label: "Reserved", state: "done" },
          { label: "Contract", state: "active" },
          { label: "Build", state: "todo" },
          { label: "Handover", state: "todo" },
        ],
        cards: [
          { title: "Your residence", value: "1704", sub: "3 bed · 128m² · SE corner" },
          { title: "Price", value: "€780,000", sub: "10% reserved" },
          { title: "Completion", value: "Q2 2028", sub: "On schedule" },
        ],
        listTitle: "Your purchase",
        list: [
          { title: "Reservation agreement", meta: "Signed · Mar 2026", state: "Done" },
          { title: "Purchase contract", meta: "Awaiting your signature", state: "Action" },
          { title: "Finish selections", meta: "Choose by Aug 2026", state: "Upcoming" },
          { title: "Construction update", meta: "Level 12 poured · photos", state: "New" },
        ],
      },
    ],
    marketing: {
      angle:
        "De-risk the leap of faith: off-plan buyers fear the unknown. Vantage sells certainty — a finished-feeling brand and a portal that shows the building rising, unit by unit.",
      campaign:
        "\"Watch It Rise\" — a launch built on transparency and scarcity: a private 3D residence explorer for registered buyers, monthly construction films tied to the buyer portal, and an availability board where units visibly turn bronze as they sell — manufacturing urgency honestly.",
      channels: ["Targeted investor & HNW campaigns", "Private viewings & broker network", "3D residence explorer (lead capture)", "Construction-progress email to buyers"],
      headlines: [
        "The best residences sell before the show unit opens.",
        "Reserve the light. Watch the tower rise.",
        "Forty homes. A live availability board. Choose early.",
      ],
    },
    built: [
      "Pre-launch luxury property brand and cinematic development site",
      "3D residence explorer for off-plan units",
      "Private buyer portal: reservation, contract, construction tracking",
      "Live availability board with honest scarcity mechanics",
      "'Watch It Rise' investor and buyer marketing campaign",
    ],
    demonstrates:
      "Brand + software together — a full go-to-market where a premium identity and a functional buyer portal combine to sell a high-value product that doesn't physically exist yet.",
    outcomes: [
      { value: "40", label: "Off-plan residences" },
      { value: "Pre-build", label: "Sold before show unit" },
      { value: "Portal", label: "Buyer trust + tracking" },
    ],
  },
];
