import type { ShowcaseWork } from "../types";

export const WORKS_A: ShowcaseWork[] = [
  /* ------------------------------------------------------------------ */
  /* 01 · AUREN — private wealth operating platform                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "auren",
    name: "Auren",
    tagline: "The operating system for private wealth.",
    category: "SaaS · Fintech",
    group: "software",
    year: "2026",
    services: ["Product design", "Software architecture", "Brand identity"],
    serviceSlug: "software",
    theme: {
      scheme: "dark",
      bg: "#0b0a07",
      surface: "#14120c",
      ink: "#f3ecdd",
      muted: "#9a9280",
      line: "#262218",
      accent: "#d4af6a",
      accentInk: "#0b0a07",
      accent2: "#7a6335",
      fontDisplay: '"Zodiak", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "4px",
      radiusCard: "10px",
      headingTracking: "-0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "contour", glyph: "◆", motto: "Private wealth, quietly mastered" },
    heroImage: {
      src: "/images/showcase/auren/hero.jpg",
      alt: "Cinematic macro of dark marble with thin gold veins under soft warm rim light.",
    },
    reference: "Luxury fintech minimalism — dark marble, gold veining, engraved-certificate restraint.",
    concept:
      "Auren is a portfolio operating platform for boutique wealth managers who run €50M–€500M books with spreadsheets and PDFs. It consolidates positions across custodians, automates client reporting, and turns quarterly review meetings from a two-day preparation ritual into a fifteen-minute export. Revenue model: per-seat SaaS with an assets-under-management tier.",
    audience: "Independent wealth managers, family offices, and boutique advisory firms of 2–20 people.",
    brand: {
      direction:
        "Old-money restraint executed with software precision. The identity borrows from engraved certificates and private bank stationery — a warm ivory ink on near-black, one metallic gold accent, and a high-contrast serif that feels like it was set by hand. Nothing glows, nothing bounces; confidence is communicated through spacing and silence.",
      personality: ["Discreet", "Precise", "Patrician", "Unhurried"],
      palette: [
        { name: "Vault Black", hex: "#0b0a07", role: "Canvas" },
        { name: "Parchment", hex: "#f3ecdd", role: "Type" },
        { name: "Sovereign Gold", hex: "#d4af6a", role: "Accent" },
        { name: "Bronze Shadow", hex: "#7a6335", role: "Depth" },
      ],
      type: {
        display: "Zodiak — high-contrast serif for headlines and figures",
        text: "General Sans — quiet grotesk for interface and body",
        note: "Figures are set in the serif at display sizes — the number is the hero of every screen.",
      },
      voice:
        "Speaks like a trusted counsel: short declarative sentences, no exclamation marks, numbers before adjectives.",
    },
    screens: [
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.auren.co/portfolios",
        name: "Portfolio console",
        caption:
          "The morning view: every custodian reconciled overnight, exceptions surfaced first, reporting one click away.",
        appName: "Auren",
        sidebar: ["Portfolios", "Clients", "Reports", "Mandates", "Documents", "Settings"],
        activeItem: 0,
        title: "Meridian Family Office",
        subtitle: "Consolidated across 4 custodians · reconciled 06:00 CET",
        kpis: [
          { label: "Assets under mgmt", value: "€248.2M", delta: "+2.4% QTD", up: true },
          { label: "Net flows / 30d", value: "+€3.1M", delta: "12 accounts", up: true },
          { label: "Reporting queue", value: "3", delta: "due Friday" },
          { label: "Exceptions", value: "1", delta: "FX mismatch" },
        ],
        chart: { label: "AUM — trailing 12 months", type: "area", points: [182, 188, 186, 195, 203, 199, 210, 214, 221, 228, 236, 248] },
        table: {
          cols: ["Mandate", "Strategy", "Value", "YTD"],
          rows: [
            ["Halvorsen Trust", "Balanced 60/40", "€82.4M", "+6.2%"],
            ["Meridian Growth", "Global equity", "€64.1M", "+9.8%"],
            ["Cassia Foundation", "Income", "€47.7M", "+3.1%"],
            ["Juno Reserve", "Multi-asset", "€53.9M", "+5.4%"],
          ],
        },
      },
      {
        kind: "landing",
        frame: "browser",
        url: "auren.co",
        name: "Marketing site",
        caption: "A landing page that sells trust to a skeptical, discreet buyer — proof and restraint over hype.",
        nav: ["Platform", "Security", "Pricing", "Journal"],
        navCta: "Request access",
        eyebrow: "For independent wealth managers",
        headline: "Run every mandate from one quiet desk.",
        accentWord: "quiet",
        sub: "Auren consolidates custodians, automates reporting, and keeps your book audit-ready — so review season stops eating your quarter.",
        primaryCta: "Request a private demo",
        secondaryCta: "Read the security brief",
        stats: [
          { value: "4 hrs → 15 min", label: "Quarterly report prep" },
          { value: "11", label: "Custodian integrations" },
          { value: "SOC 2", label: "Type II attested" },
        ],
        motif: "panel",
      },
    ],
    marketing: {
      angle:
        "Sell the silence: while fintech competitors shout about AI, Auren markets the absence of drama — 'your book, reconciled before you wake.'",
      campaign:
        "\"The Quiet Quarter\" — a private-circulation print-and-email series mailed to 400 boutique firms before reporting season, each issue showing one messy spreadsheet ritual replaced by one Auren screen. Ends with an invitation-only demo week.",
      channels: ["Direct mail to named partners", "LinkedIn thought pieces", "Private dinners with custodian partners", "Referral program inside client reports"],
      headlines: [
        "Reporting season is a software problem.",
        "Your custodians disagree. Auren settles it nightly.",
        "The best wealth managers are hard to reach in March. Be one of them.",
      ],
    },
    built: [
      "Complete brand identity: wordmark, engraved-certificate visual language, gold-on-black system",
      "Product architecture for multi-custodian reconciliation and reporting",
      "Portfolio console UI — dashboard, mandates, exceptions, report builder",
      "Marketing site with security-first messaging hierarchy",
      "\"The Quiet Quarter\" launch campaign concept and copy system",
    ],
    demonstrates:
      "Software & product design — a data-heavy financial product where the interface must earn trust through typography, hierarchy, and restraint rather than decoration.",
    outcomes: [
      { value: "15 min", label: "Target time-to-report" },
      { value: "€1.2B", label: "AUM designed for at launch scale" },
      { value: "0", label: "Marketing clichés survived review" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 02 · VESSEL — small-batch ceramics e-commerce                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "vessel",
    name: "Vessel",
    tagline: "Ceramics fired in small batches, sold in smaller ones.",
    category: "E-commerce · Craft",
    group: "commerce",
    year: "2026",
    services: ["E-commerce", "Brand identity", "Art direction"],
    serviceSlug: "software",
    theme: {
      scheme: "light",
      bg: "#f5f0e6",
      surface: "#fdfaf3",
      ink: "#33261c",
      muted: "#8a7a6a",
      line: "#e2d8c8",
      accent: "#b4552d",
      accentInk: "#f5f0e6",
      accent2: "#d9a566",
      fontDisplay: '"Gambetta", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "18px",
      headingTracking: "-0.015em",
      headingWeight: 600,
    },
    scene: { pattern: "halftone", glyph: "●", motto: "Thrown, glazed, numbered" },
    heroImage: {
      src: "/images/showcase/vessel/hero.jpg",
      alt: "Terracotta and cream ceramic vessels on linen in warm side light, artisan editorial still life.",
    },
    reference: "Warm craft editorial — clay tones, museum-label serif, generous negative space.",
    concept:
      "Vessel is a direct-to-consumer shop for a ceramics studio that releases numbered batches of 40–60 pieces every six weeks. Instead of fighting for always-on inventory, the store is built around the drop: a waitlist, a 48-hour window, and a sold-out archive that markets the next batch. Revenue: product sales plus a small 'seconds' subscription for kiln imperfects.",
    audience: "Design-conscious home cooks and collectors who follow independent makers on Instagram.",
    brand: {
      direction:
        "Warm clay minimalism. The palette is taken literally from the studio — unfired clay, cream glaze, one iron-oxide accent. A humanist serif gives product names the feel of museum labels, while generous whitespace lets each glaze read like a photograph. Batch numbers are treated typographically, like edition prints.",
      personality: ["Warm", "Honest", "Tactile", "Editioned"],
      palette: [
        { name: "Cream Glaze", hex: "#f5f0e6", role: "Canvas" },
        { name: "Fired Umber", hex: "#33261c", role: "Type" },
        { name: "Iron Oxide", hex: "#b4552d", role: "Accent" },
        { name: "Raw Ochre", hex: "#d9a566", role: "Warmth" },
      ],
      type: {
        display: "Gambetta — humanist serif with museum-label warmth",
        text: "General Sans — clean counterpoint for UI and cart",
        note: "Edition numbers set oversized in the serif — 'Nº 34 / 60' is a design element, not metadata.",
      },
      voice: "Studio-diary honest: talks about kiln temperatures and glaze accidents, never says 'artisanal.'",
    },
    screens: [
      {
        kind: "storefront",
        frame: "browser",
        url: "vessel.studio/batch-eleven",
        name: "Drop storefront",
        caption: "Batch Eleven live: scarcity is the layout — counts, numbers, and a 48-hour clock instead of a mega-menu.",
        nav: ["Current batch", "Archive", "Studio", "Journal"],
        navCta: "Waitlist",
        collection: "Batch Eleven — Riverbed",
        intro: "Fifty-two pieces thrown in March, glazed with ash from the studio stove. When they're gone, they're photographs.",
        filters: ["All 52", "Bowls", "Mugs", "Vases", "Seconds"],
        products: [
          { name: "Riverbed Bowl Nº 3", price: "€68", tag: "1 left", tone: "linear-gradient(150deg,#d9c4a5,#b4906a 70%)" },
          { name: "Tall Vase Nº 17", price: "€140", tone: "linear-gradient(160deg,#c9beae,#8a7a66 75%)" },
          { name: "Stacking Mug Nº 24", price: "€42", tag: "Sold", tone: "linear-gradient(140deg,#e7dbc5,#c2a173)" },
          { name: "Serving Dish Nº 8", price: "€96", tone: "linear-gradient(155deg,#d3c0ab,#a4693f 80%)" },
        ],
      },
      {
        kind: "productDetail",
        frame: "browser",
        url: "vessel.studio/piece/riverbed-bowl-3",
        name: "Piece page",
        caption: "Every piece is a one-off, so the product page reads like a catalogue entry: provenance, firing notes, edition number.",
        breadcrumb: ["Batch Eleven", "Bowls", "Nº 3"],
        productName: "Riverbed Bowl Nº 3 / 52",
        price: "€68",
        description:
          "Thrown from local stoneware, glazed in layered ash over iron slip. The interior pooling is unique to this piece — see firing notes. Dishwasher-hardy, kiln-blessed.",
        options: [
          { label: "Finish", values: ["Ash pool", "Matte rim"], selected: 0 },
          { label: "Gift wrap", values: ["None", "Studio paper +€4"], selected: 0 },
        ],
        cta: "Add to cart — 1 remaining",
        gallery: [
          "radial-gradient(80% 90% at 40% 30%,#e0cfb2,#a9754a 85%)",
          "linear-gradient(140deg,#d9c4a5,#b4906a)",
          "linear-gradient(160deg,#c9beae,#8a7a66)",
          "linear-gradient(150deg,#e7dbc5,#c2a173)",
          "linear-gradient(170deg,#d3c0ab,#a4693f)",
        ],
        meta: [
          { label: "Batch", value: "Eleven — Riverbed" },
          { label: "Fired", value: "March 2026 · cone 6" },
          { label: "Ships", value: "48h · recycled crate" },
        ],
      },
    ],
    marketing: {
      angle:
        "Turn inventory weakness into the story: 52 pieces is not 'limited stock', it is an edition. The archive of sold-out batches is the ad.",
      campaign:
        "\"Kiln Day\" — a recurring Instagram/email ritual: 24 hours before each drop, the studio publishes unedited kiln-opening footage and the full numbered list. Waitlist subscribers get a 2-hour head start; the sequence converts followers into a compounding first-party list.",
      channels: ["Instagram Reels + Stories", "Email waitlist", "Pinterest boards per glaze", "Two wholesale partners as social proof"],
      headlines: [
        "52 pieces. 48 hours. Then photographs.",
        "The kiln decides the collection.",
        "Batch Twelve doesn't exist yet. The waitlist does.",
      ],
    },
    built: [
      "Brand identity with edition-print numbering system and clay-derived palette",
      "Drop-based storefront: waitlist, timed release, sold-out archive",
      "Catalogue-style product pages with provenance and firing notes",
      "Email + Instagram launch ritual ('Kiln Day') with content templates",
      "Packaging and shipping-note art direction",
    ],
    demonstrates:
      "E-commerce systems — a store engineered around scarcity mechanics and brand storytelling instead of catalogue volume.",
    outcomes: [
      { value: "48h", label: "Target sell-through window" },
      { value: "6,000+", label: "Waitlist design capacity" },
      { value: "×6/yr", label: "Drop cadence the system supports" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 03 · NOCTURNE — boutique hotel collective booking                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "nocturne",
    name: "Nocturne",
    tagline: "Nine hotels for people who arrive after dark.",
    category: "Booking · Hospitality",
    group: "software",
    year: "2026",
    services: ["Booking platform", "Brand identity", "Motion design"],
    serviceSlug: "software",
    theme: {
      scheme: "dark",
      bg: "#0a0e22",
      surface: "#121735",
      ink: "#ece5d3",
      muted: "#8d92ad",
      line: "#232a4e",
      accent: "#e3c98f",
      accentInk: "#0a0e22",
      accent2: "#5560a8",
      fontDisplay: '"Fraunces", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "16px",
      headingTracking: "-0.02em",
      headingWeight: 600,
    },
    scene: { pattern: "aurora", glyph: "☾", motto: "Check in after midnight" },
    heroImage: {
      src: "/images/showcase/nocturne/hero.jpg",
      alt: "Moody boutique hotel lobby after midnight in deep indigo and candlelight tones with wet-street reflections.",
    },
    reference: "Midnight cinema — indigo canvas, candlelight accent, matchbook serif, long-exposure photography.",
    concept:
      "Nocturne is a collective of nine independent boutique hotels — Lisbon to Kyoto — united by one idea: they are built for the night. Late check-in is the default, the bar never closes before the kitchen, and rooms are engineered for sleeping until noon. The platform is a shared direct-booking engine that lets each hotel keep its identity while cutting OTA commissions. Revenue: booking margin plus membership.",
    audience: "Creative travellers, musicians, chefs and night-shift founders who hate 10am checkout.",
    brand: {
      direction:
        "Midnight-blue cinema. Deep indigo canvas, candlelight-champagne accent, and an expressive serif with ink-trap character that feels like a hotel matchbook from 1972. Photography direction: long exposures, lobby lamps, wet streets. The moon glyph works as a shared mark; each hotel keeps its own name set in the same type system.",
      personality: ["Nocturnal", "Cinematic", "Intimate", "Unhurried"],
      palette: [
        { name: "Midnight", hex: "#0a0e22", role: "Canvas" },
        { name: "Candlelight", hex: "#e3c98f", role: "Accent" },
        { name: "Moonstone", hex: "#ece5d3", role: "Type" },
        { name: "Blue Hour", hex: "#5560a8", role: "Atmosphere" },
      ],
      type: {
        display: "Fraunces — soft wonky serif, matchbook romance",
        text: "General Sans — quiet UI counterpoint",
        note: "Room names and times are set in the serif italic — '2:00 AM check-in' becomes a brand asset.",
      },
      voice: "A concierge at 1 a.m.: warm, low-volume, slightly conspiratorial.",
    },
    screens: [
      {
        kind: "landing",
        frame: "browser",
        url: "nocturne.hotel",
        name: "Collective homepage",
        caption: "The homepage sells the idea before the inventory — night-first hospitality as a category of its own.",
        nav: ["Hotels", "Membership", "Journal", "Late kitchen"],
        navCta: "Book a night",
        eyebrow: "Nine hotels · one philosophy",
        headline: "Hotels that keep your hours.",
        accentWord: "your",
        sub: "Check in after midnight without apology. Blackout rooms, kitchens that serve at 2 a.m., and checkout when you actually wake.",
        primaryCta: "Find your city",
        secondaryCta: "The Nocturne idea",
        stats: [
          { value: "9", label: "Hotels, Lisbon → Kyoto" },
          { value: "2 PM", label: "Standard checkout" },
          { value: "24h", label: "Kitchen & bar service" },
        ],
        motif: "orbs",
      },
      {
        kind: "booking",
        frame: "browser",
        url: "nocturne.hotel/lisbon/book",
        name: "Booking flow",
        caption: "A booking engine tuned for the brand: nights, not rooms — arrival windows instead of check-in deadlines.",
        appName: "Nocturne Lisbon",
        title: "Choose your nights",
        monthLabel: "October 2026",
        daysInMonth: 31,
        selectedDay: 17,
        slots: ["Arrive 6–10 PM", "Arrive 10–1 AM", "Arrive after 1 AM", "Land & sleep first"],
        selectedSlot: 2,
        summary: [
          { label: "Room", value: "Blackout Deluxe" },
          { label: "Nights", value: "Oct 17 – 19" },
          { label: "Late kitchen", value: "Included" },
          { label: "Total", value: "€418" },
        ],
        cta: "Reserve — pay at the desk",
      },
    ],
    marketing: {
      angle:
        "Own an enemy: the 10 a.m. checkout. Every piece of marketing attacks morning-person hospitality on behalf of everyone who lands at midnight.",
      campaign:
        "\"The 2AM Review\" — a content series where chefs, DJs and night workers review each hotel starting at 2 a.m. Cut into vertical video; each episode ends with the arrival-window booking screen. Paired with airline-delay triggered ads: 'Landing late? We're just opening.'",
      channels: ["Vertical video (Reels/TikTok)", "Airline delay-triggered paid ads", "Spotify late-night playlist takeovers", "Membership email"],
      headlines: [
        "Checkout is at 2 PM because you got in at 3 AM.",
        "We leave the kitchen light on.",
        "Nine hotels that don't believe in morning people.",
      ],
    },
    built: [
      "Collective brand system: shared moon mark + per-hotel type lockups",
      "Direct booking engine with arrival-window UX replacing check-in deadlines",
      "Cinematic marketing site with motion-led hero and hotel index",
      "Membership tier design ('Keyholder') with pricing logic",
      "The 2AM Review campaign format, scripts, and media plan",
    ],
    demonstrates:
      "Booking platforms — product thinking that reshapes a commodity flow (dates → nights → arrival windows) around a brand promise.",
    outcomes: [
      { value: "-18%", label: "Target OTA commission share" },
      { value: "9", label: "Properties on one engine" },
      { value: "2 AM", label: "The hour the brand owns" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 04 · HEKTAR — regenerative farm brand + local demand                */
  /* ------------------------------------------------------------------ */
  {
    slug: "hektar",
    name: "Hektar",
    tagline: "One farm. Four hundred families. Zero middlemen.",
    category: "Brand · Food & agriculture",
    group: "brand",
    year: "2026",
    services: ["Brand identity", "Packaging", "Local marketing"],
    serviceSlug: "brand",
    theme: {
      scheme: "light",
      bg: "#eef0e2",
      surface: "#f9faf0",
      ink: "#26331f",
      muted: "#6e7a5e",
      line: "#d5dabf",
      accent: "#3e6b2f",
      accentInk: "#eef0e2",
      accent2: "#c96f2c",
      fontDisplay: '"Sentient", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "8px",
      radiusCard: "14px",
      headingTracking: "-0.015em",
      headingWeight: 700,
    },
    scene: { pattern: "grid", glyph: "✳", motto: "Grown on one hectare at a time" },
    heroImage: {
      src: "/images/showcase/hektar/hero.jpg",
      alt: "Morning mist over green farmland with hands holding dark soil, documentary warmth.",
    },
    reference: "Agricultural modernism — field-map geometry, seed-catalogue serif, chard-and-soil palette.",
    concept:
      "Hektar is a regenerative farm outside Tirana converting from wholesale vegetables to a direct community model: weekly harvest boxes, an on-farm shop day, and standing orders for six restaurants. The brand turns soil practice into shelf language — every box states the parcel it came from and what that hectare is doing next season. Revenue: subscriptions, farm-day retail, restaurant contracts.",
    audience: "Urban families within 40 minutes of the farm, plus chefs who want provenance they can name.",
    brand: {
      direction:
        "Agricultural modernism: seed-catalogue typography, field-map geometry, and a palette lifted from chard, soil and squash. The grid motif is literal — the farm's parcel map becomes the identity system, with each hectare numbered and color-coded across packaging, signage and the harvest email.",
      personality: ["Grounded", "Generous", "Systematic", "Local-proud"],
      palette: [
        { name: "Field Cream", hex: "#eef0e2", role: "Canvas" },
        { name: "Chard Green", hex: "#3e6b2f", role: "Accent" },
        { name: "Topsoil", hex: "#26331f", role: "Type" },
        { name: "Squash", hex: "#c96f2c", role: "Seasonal pop" },
      ],
      type: {
        display: "Sentient — sturdy serif with seed-catalogue warmth",
        text: "General Sans — labels, tables, box slips",
        note: "Parcel numbers (H-01…H-12) are set like map coordinates and double as product SKUs.",
      },
      voice: "A farmer who keeps good records: concrete, seasonal, never precious.",
    },
    screens: [
      {
        kind: "editorial",
        frame: "browser",
        url: "hektar.al/journal/parcel-h07",
        name: "Field journal",
        caption: "The brand's engine is editorial: each parcel gets a story page that doubles as provenance for boxes and menus.",
        masthead: "HEKTAR FIELD JOURNAL",
        kicker: "Parcel H-07 · Week 41",
        headline: "The hectare that feeds Thursday",
        standfirst:
          "H-07 came out of cover crop in March. This week it fills 180 boxes with chard, leeks and the last of the peppers — here is what it cost the soil, and what it gave back.",
        columns: [
          "Rotation is the whole trick. H-07 spent last winter under vetch and rye, which is why the chard this autumn needed no feed at all. We counted worm casts on a wet Tuesday — forty-one per square metre, our best score yet.",
          "Next season this parcel rests. Boxes will lean on H-03 and H-09, and the journal will follow the cover crop instead. Subscribers voted for field beans. The chefs voted for anything they can pickle.",
        ],
        pullquote: "Provenance is not a sticker. It is a map reference.",
        figureTones: [
          "linear-gradient(140deg,#7f9757,#3e6b2f 80%)",
          "linear-gradient(150deg,#d8c791,#c96f2c)",
          "linear-gradient(160deg,#5c6e46,#26331f)",
        ],
        figureCaption: "H-07 on harvest morning · chard rows 4–11",
      },
      {
        kind: "campaign",
        frame: "none",
        name: "Local launch campaign",
        caption: "Market-day posters and social tiles share one grid: parcel number, plain claim, box CTA.",
        title: "HEKTAR / H-SERIES",
        tiles: [
          { format: "story", headline: "This chard has an address.", sub: "Parcel H-07 · picked 06:40", badge: "H-07" },
          { format: "square", headline: "400 families. Zero middlemen.", sub: "Weekly boxes from €12", badge: "Boxes" },
          { format: "wide", headline: "Meet your hectare on Saturday.", sub: "Farm day · every first Saturday · bring kids and boots", badge: "Farm day" },
          { format: "square", headline: "Chefs: name your parcel.", sub: "Standing orders for six kitchens", badge: "Trade" },
          { format: "story", headline: "The soil votes next season.", sub: "Subscribers pick the cover crop", badge: "H-12" },
        ],
      },
    ],
    marketing: {
      angle:
        "Radical specificity beats organic clichés: never say 'fresh and local', say 'Parcel H-07, picked 06:40, forty-one worm casts per square metre.'",
      campaign:
        "\"Meet Your Hectare\" — a 6-week local push: parcel-coded posters at markets and schools, WhatsApp broadcast for box subscribers with the week's parcel story, and a first-Saturday farm day where families walk the exact rows their box came from. Restaurants get parcel cards for their menus.",
      channels: ["Market & school posters", "WhatsApp broadcast list", "Instagram parcel stories", "Restaurant menu partnerships"],
      headlines: [
        "This chard has an address.",
        "Subscribe to a hectare, not a supermarket.",
        "Saturday: walk the rows your dinner grew in.",
      ],
    },
    built: [
      "Full identity: parcel-map mark, H-series numbering, seed-catalogue type system",
      "Packaging suite: box slips, parcel cards, market signage",
      "Field Journal editorial format powering provenance content",
      "Local campaign system: posters, WhatsApp cadence, farm-day playbook",
      "Restaurant partnership kit with menu provenance cards",
    ],
    demonstrates:
      "Brand identity systems — an identity that is also an operating system: the parcel grid organizes packaging, content, and sales channels alike.",
    outcomes: [
      { value: "400", label: "Weekly boxes at capacity" },
      { value: "6", label: "Restaurant standing orders" },
      { value: "12", label: "Parcels with their own stories" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 05 · CADENCE — boutique fitness studio operating system             */
  /* ------------------------------------------------------------------ */
  {
    slug: "cadence",
    name: "Cadence",
    tagline: "The studio runs on rhythm. So does the software.",
    category: "Business OS · Fitness",
    group: "software",
    year: "2026",
    services: ["Product design", "Automation", "Membership systems"],
    serviceSlug: "software",
    theme: {
      scheme: "dark",
      bg: "#101014",
      surface: "#1a1a21",
      ink: "#f4f2f7",
      muted: "#8f8d9c",
      line: "#2b2b35",
      accent: "#ff4d6d",
      accentInk: "#101014",
      accent2: "#7c3aed",
      fontDisplay: '"Space Grotesk", system-ui, sans-serif',
      fontBody: '"Space Grotesk", system-ui, sans-serif',
      radius: "12px",
      radiusCard: "16px",
      headingTracking: "-0.03em",
      headingWeight: 700,
    },
    scene: { pattern: "scan", glyph: "⧗", motto: "Book · train · repeat" },
    heroImage: {
      src: "/images/showcase/cadence/hero.jpg",
      alt: "Motion-blurred athlete under hot coral gym light on black, high-energy sports photography.",
    },
    reference: "Nightclub-meets-lab — near-black surfaces, pulse-red accent, metronomic motion, athletic grotesk.",
    concept:
      "Cadence is an operating system for boutique fitness studios (spin, strength, reformer) that replaces four disconnected tools: class booking, memberships, instructor payroll and win-back campaigns. The insight: studio revenue is a rhythm problem — empty 7 a.m. bikes and lapsing members — so the software treats occupancy like a beat to fill. Revenue: monthly SaaS per location.",
    audience: "Owner-operators of 1–5 location studios who currently duct-tape a booking app, spreadsheets and a newsletter tool.",
    brand: {
      direction:
        "Nightclub-meets-lab: near-black surfaces, one pulse-red accent, scanline texture, and a squared grotesk with tight tracking. Motion language is metronomic — everything animates on a beat. The UI reads like studio lighting: dark room, bright signal.",
      personality: ["Kinetic", "Precise", "Nocturnal", "Coach-like"],
      palette: [
        { name: "Studio Black", hex: "#101014", role: "Canvas" },
        { name: "Pulse Red", hex: "#ff4d6d", role: "Accent" },
        { name: "Violet Wave", hex: "#7c3aed", role: "Secondary" },
        { name: "Chalk", hex: "#f4f2f7", role: "Type" },
      ],
      type: {
        display: "Space Grotesk — squared, athletic, screen-native",
        text: "Space Grotesk — one family, weights do the work",
        note: "Numbers use tabular figures everywhere; occupancy percentages are the loudest element on any screen.",
      },
      voice: "A great coach: direct, rhythmic, zero fluff. Counts you in, never talks down.",
    },
    screens: [
      {
        kind: "booking",
        frame: "phone",
        name: "Member booking app",
        caption: "Members book in three taps; the class list is a rhythm bar showing how full each beat of the day is.",
        appName: "Cadence",
        title: "Thursday — ride",
        monthLabel: "June 2026",
        daysInMonth: 30,
        selectedDay: 11,
        slots: ["06:30 · 4 bikes", "07:30 · Full", "12:15 · 9 bikes", "18:00 · 2 bikes", "19:00 · Waitlist"],
        selectedSlot: 3,
        summary: [
          { label: "Class", value: "Ride 45 · Studio A" },
          { label: "Coach", value: "Mara K." },
          { label: "Bike", value: "#14 — your usual" },
          { label: "Credits", value: "7 left" },
        ],
        cta: "Lock it in",
      },
      {
        kind: "dashboard",
        frame: "browser",
        url: "studio.cadence.fit/pulse",
        name: "Owner's Pulse dashboard",
        caption: "The owner sees the week as occupancy rhythm — the system flags dead slots and drafts the win-back before they ask.",
        appName: "Cadence OS",
        sidebar: ["Pulse", "Schedule", "Members", "Campaigns", "Payroll", "Studios"],
        activeItem: 0,
        title: "This week's pulse",
        subtitle: "2 locations · 118 classes · auto-campaigns on",
        kpis: [
          { label: "Occupancy", value: "81%", delta: "+6% w/w", up: true },
          { label: "At-risk members", value: "23", delta: "12 auto-contacted" },
          { label: "Revenue MTD", value: "€38.4k", delta: "+11%", up: true },
          { label: "Dead slots", value: "4", delta: "offers drafted" },
        ],
        chart: { label: "Occupancy by hour — Mon → Sun", type: "bars", points: [42, 88, 96, 54, 38, 61, 92, 97, 74, 46, 83, 95, 68, 51] },
        table: {
          cols: ["Slot", "Class", "Fill", "Action"],
          rows: [
            ["Tue 14:00", "Strength 50", "31%", "Flash offer sent"],
            ["Wed 06:30", "Ride 45", "48%", "Nudge scheduled"],
            ["Fri 12:15", "Reformer", "37%", "Duo pass drafted"],
            ["Sun 09:00", "Ride 60", "44%", "Review pending"],
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Sell to the owner's Sunday night: the dread of opening four dashboards. One rhythm view replaces booking tool + spreadsheet + mail tool + payroll doc.",
      campaign:
        "\"Dead Slot Zero\" — a 30-day challenge for studio owners: connect Cadence, and the system publicly commits to filling their three worst slots in a month using win-back automation and flash passes. Documented as a case-study series with real occupancy charts.",
      channels: ["Instagram case-study reels", "Owner communities & podcasts", "Partner instructors as ambassadors", "Free 'rhythm audit' lead magnet"],
      headlines: [
        "Your 7 AM has 14 empty bikes. That's a software bug.",
        "Four tools. One studio. Pick the other option.",
        "Dead slots don't need more posts. They need a system.",
      ],
    },
    built: [
      "Product design for booking, memberships, payroll and campaign modules",
      "Member app with three-tap booking and rhythm-bar schedule",
      "Owner 'Pulse' dashboard with dead-slot detection and auto-drafted offers",
      "Win-back automation flows with human approval gates",
      "Brand system: pulse mark, scanline art direction, launch kit",
    ],
    demonstrates:
      "Business operating systems — replacing a stack of disconnected tools with one product whose interface embodies the business metric (occupancy as rhythm).",
    outcomes: [
      { value: "81%", label: "Occupancy target model" },
      { value: "4→1", label: "Tools consolidated" },
      { value: "30 days", label: "Dead-slot-zero challenge" },
    ],
  },
];
