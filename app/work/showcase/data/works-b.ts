import type { ShowcaseWork } from "../types";

export const WORKS_B: ShowcaseWork[] = [
  /* ------------------------------------------------------------------ */
  /* 06 · TRUENORTH — AI strategy co-pilot for founders                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "truenorth",
    name: "TrueNorth",
    tagline: "A strategy partner that never sleeps and never bluffs.",
    category: "AI assistant · Strategy",
    group: "ai-automation",
    year: "2026",
    services: ["AI product", "Software design", "Brand identity"],
    serviceSlug: "automation",
    heroImage: {
      src: "/images/showcase/truenorth/hero.jpg",
      alt: "Abstract 3D compass geometry in slate-blue glass with an electric-blue core glow on a dark studio backdrop.",
    },
    reference: "Slate-blue glassmorphism, precise 3D geometry, single electric accent — Linear × Arc browser.",
    theme: {
      scheme: "dark",
      bg: "#0c1018",
      surface: "#141a26",
      ink: "#eaf0fa",
      muted: "#8695ad",
      line: "#232c3d",
      accent: "#3d7bff",
      accentInk: "#f4f8ff",
      accent2: "#7aa8ff",
      fontDisplay: '"Cabinet Grotesk", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "10px",
      radiusCard: "16px",
      headingTracking: "-0.03em",
      headingWeight: 800,
    },
    scene: { pattern: "orbit", glyph: "✦", motto: "Point the company somewhere true" },
    concept:
      "TrueNorth is an AI strategy co-pilot for early-stage founders who can't yet afford a seasoned operator. It ingests the company's metrics, notes and goals, then runs weekly strategy sessions: pressure-testing decisions, drafting board updates, and flagging where the plan and the numbers disagree. Unlike a generic chatbot, it holds durable context — it remembers last quarter's bet and asks how it played out. Revenue: per-seat SaaS with a premium 'board mode' tier.",
    audience: "Solo and first-time founders, pre-seed to Series A, running without a full leadership team.",
    brand: {
      direction:
        "Instrument-grade calm. A slate-blue cockpit with one electric accent, glass surfaces, and a confident grotesk. The compass is the mark — not a cute logo but a precision instrument. Everything signals judgment under uncertainty: readable, unpanicked, exact.",
      personality: ["Clear-eyed", "Candid", "Composed", "Rigorous"],
      palette: [
        { name: "Deep Slate", hex: "#0c1018", role: "Canvas" },
        { name: "Signal Blue", hex: "#3d7bff", role: "Accent" },
        { name: "Ice", hex: "#eaf0fa", role: "Type" },
        { name: "Horizon", hex: "#7aa8ff", role: "Secondary" },
      ],
      type: {
        display: "Cabinet Grotesk — assertive, engineered headlines",
        text: "General Sans — legible reasoning at length",
        note: "AI responses use a distinct measured line-length so 'the machine's judgment' reads differently from the founder's input.",
      },
      voice: "A great advisor: asks the hard question first, cites the number, never flatters.",
    },
    screens: [
      {
        kind: "chat",
        frame: "browser",
        url: "app.truenorth.ai/session/q3-review",
        name: "Strategy session",
        caption: "Not a chatbot — a weekly working session that remembers prior bets and argues with the plan using live numbers.",
        appName: "TrueNorth",
        threadTitle: "Weekly session · Q3 pipeline review",
        messages: [
          { role: "user", text: "We're thinking of doubling ad spend next month to hit the Q3 number." },
          {
            role: "ai",
            text: "Before you do — your CAC rose 34% over the last six weeks while conversion held flat. Doubling spend at this CAC misses the Q3 target by ~€40k and burns two extra weeks of runway. Two paths worth testing first:",
            chips: ["Fix the funnel leak", "Model both scenarios", "Draft the board note"],
          },
          { role: "user", text: "Show me the funnel leak." },
          {
            role: "ai",
            text: "Demo-to-close is where you're bleeding: 61% of qualified demos never get a follow-up within 48h. That's a process gap, not a spend gap. Cheaper to fix than to outspend.",
          },
        ],
        composer: "Ask TrueNorth, or type /update for a board draft…",
        context: {
          title: "Session context",
          items: [
            { label: "CAC (6-wk)", value: "€214 ▲34%" },
            { label: "Runway", value: "11 months" },
            { label: "Q3 target", value: "€180k · 68% tracked" },
            { label: "Open bet", value: "Outbound hire" },
          ],
        },
      },
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.truenorth.ai/compass",
        name: "Company compass",
        caption: "The founder's home screen: goals, live metrics, and the one decision TrueNorth thinks matters most this week.",
        appName: "TrueNorth",
        sidebar: ["Compass", "Sessions", "Metrics", "Board mode", "Memory", "Settings"],
        activeItem: 0,
        title: "This week's heading",
        subtitle: "Focus: fix demo-to-close before scaling spend",
        kpis: [
          { label: "North-star / MRR", value: "€61.2k", delta: "+8.1%", up: true },
          { label: "CAC", value: "€214", delta: "▲ watch", up: false },
          { label: "Runway", value: "11 mo", delta: "stable" },
          { label: "Confidence", value: "72%", delta: "Q3 target" },
        ],
        chart: { label: "MRR vs plan — this quarter", type: "line", points: [44, 47, 49, 52, 54, 57, 58, 61] },
        table: {
          cols: ["Decision", "Status", "TrueNorth view", "Due"],
          rows: [
            ["Double ad spend", "Proposed", "Hold — fix funnel", "This wk"],
            ["Outbound hire", "Open", "Green light", "Aug"],
            ["Pricing +15%", "Testing", "Promising", "Sep"],
            ["Churn playbook", "Live", "Working", "—"],
          ],
        },
      },
    ],
    marketing: {
      angle:
        "Sell the missing co-founder: every solo founder's 2 a.m. fear is making the wrong big call alone. TrueNorth is the sounding board that has read all their numbers.",
      campaign:
        "\"The Second Opinion\" — a launch series where real founders submit a decision they're stuck on; TrueNorth's actual reasoning (numbers redacted) is published as short case cards. It demonstrates candor and context-holding better than any feature list.",
      channels: ["Founder communities (YC, Indie Hackers)", "X/LinkedIn build-in-public threads", "Newsletter sponsorships", "Referral via board-update exports"],
      headlines: [
        "You don't need advice. You need a second opinion that read the numbers.",
        "The plan says grow. The data says fix. TrueNorth settles it.",
        "A co-founder-grade brain, without the equity conversation.",
      ],
    },
    built: [
      "AI product concept with durable, per-company strategic memory",
      "Conversational session UI distinct from generic chat patterns",
      "'Company compass' dashboard tying goals to live metrics and decisions",
      "Board-mode export flow (updates, scenario models)",
      "Instrument-grade brand identity and 'Second Opinion' launch campaign",
    ],
    demonstrates:
      "AI automation & product — an AI tool designed around trust and judgment, where the interface makes the model's reasoning legible and accountable rather than magical.",
    outcomes: [
      { value: "Weekly", label: "Cadence of strategic review" },
      { value: "48h", label: "Decision-to-draft loop" },
      { value: "1", label: "Clear heading per week" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 07 · LODESTAR — freight visibility platform                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "lodestar",
    name: "Lodestar",
    tagline: "Every load, every yard, one live map.",
    category: "SaaS · Logistics",
    group: "software",
    year: "2026",
    services: ["Software architecture", "Product design", "Data visualization"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/lodestar/hero.jpg",
      alt: "Aerial night shot of a freight yard, amber sodium lights on graphite asphalt with long-exposure light trails.",
    },
    reference: "Industrial-cinematic ops software — graphite + amber, dense data with breathing room, Ramp × Watershed.",
    theme: {
      scheme: "dark",
      bg: "#0e0f10",
      surface: "#17191b",
      ink: "#f0ede8",
      muted: "#8b8a85",
      line: "#26282b",
      accent: "#f5a623",
      accentInk: "#0e0f10",
      accent2: "#d97a1a",
      fontDisplay: '"Khand", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "6px",
      radiusCard: "10px",
      headingTransform: "uppercase",
      headingTracking: "0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "grid", glyph: "▲", motto: "Freight, made legible" },
    concept:
      "Lodestar is a freight-visibility platform for mid-size carriers and 3PLs drowning in phone calls and yard checks. It unifies telematics, dock schedules and driver ETAs into one live operations map, then automates the exception work — a late load texts the customer and re-slots the dock before dispatch even notices. Revenue: per-truck SaaS plus a premium exceptions-automation tier.",
    audience: "Operations managers at regional carriers and third-party logistics firms (20–500 trucks).",
    brand: {
      direction:
        "Night-shift industrial. Graphite panels lit by one sodium-amber accent, a condensed athletic display face, and tabular data everywhere. It looks like the yard at 3 a.m.: dark, high-contrast, every signal earning its glow. Uppercase headings read like shipping stencils.",
      personality: ["Rugged", "Legible", "Always-on", "No-nonsense"],
      palette: [
        { name: "Asphalt", hex: "#0e0f10", role: "Canvas" },
        { name: "Sodium Amber", hex: "#f5a623", role: "Accent" },
        { name: "Fog", hex: "#f0ede8", role: "Type" },
        { name: "Rust", hex: "#d97a1a", role: "Alert" },
      ],
      type: {
        display: "Khand — condensed, stencil-adjacent, industrial",
        text: "General Sans — dense tables stay readable",
        note: "ETAs and load IDs use tabular figures; amber is reserved strictly for exceptions and 'now'.",
      },
      voice: "Dispatch radio: terse, exact, unflappable. Says the ETA, not the excuse.",
    },
    screens: [
      {
        kind: "dashboard",
        frame: "browser",
        url: "ops.lodestar.io/board",
        name: "Live ops board",
        caption: "The whole network on one screen — loads, yards and ETAs — with exceptions pushed to the top, already actioned.",
        appName: "Lodestar",
        sidebar: ["Live board", "Loads", "Yards", "Exceptions", "Customers", "Reports"],
        activeItem: 0,
        title: "Network — live",
        subtitle: "312 active loads · 4 yards · 11 exceptions auto-handled",
        kpis: [
          { label: "On-time %", value: "94.2%", delta: "+1.8pt", up: true },
          { label: "Active loads", value: "312", delta: "live" },
          { label: "Exceptions", value: "11", delta: "9 auto-fixed" },
          { label: "Detention $ / wk", value: "-€8.4k", delta: "avoided", up: true },
        ],
        chart: { label: "On-time delivery — trailing 14 days", type: "area", points: [88, 90, 89, 91, 92, 90, 93, 92, 94, 93, 95, 94, 96, 94] },
        table: {
          cols: ["Load", "Lane", "ETA", "Status"],
          rows: [
            ["LD-4471", "Durrës → Prishtina", "14:20", "On time"],
            ["LD-4488", "Tirana → Skopje", "+42m", "Customer texted"],
            ["LD-4502", "Bari → Vlorë", "16:05", "At yard 2"],
            ["LD-4519", "Tirana → Podgorica", "Delayed", "Re-slotted dock"],
          ],
        },
      },
      {
        kind: "workflow",
        frame: "browser",
        url: "ops.lodestar.io/automations/late-load",
        name: "Exception automation",
        caption: "The rule that saves the ops team's afternoon: a late load notifies the customer and re-books the dock automatically.",
        appName: "Lodestar Automations",
        title: "When a load runs late",
        nodes: [
          { label: "ETA slips > 30 min", sublabel: "Telematics + traffic", kind: "trigger" },
          { label: "Recalculate dock slot", sublabel: "Yard schedule", kind: "action" },
          { label: "Draft customer update", sublabel: "New ETA + reason", kind: "ai" },
          { label: "Send + log", sublabel: "SMS / email / portal", kind: "action" },
          { label: "Escalate if > 2h", sublabel: "Ping dispatcher", kind: "human" },
        ],
        note: "Handled 9 of 11 exceptions today with no human touch",
      },
    ],
    marketing: {
      angle:
        "Attack the phone: the average dispatcher makes 80 'where's my truck' calls a day. Lodestar's pitch is a quieter office and fewer detention invoices.",
      campaign:
        "\"Kill the Check Call\" — an ROI-led B2B campaign anchored on a detention-cost calculator: paste your fleet size and lanes, see the money lost to check calls and detention, then watch it drop in a live demo. Distributed through logistics trade media and LinkedIn.",
      channels: ["Logistics trade publications", "LinkedIn (ops leaders)", "Detention-cost calculator lead magnet", "Telematics partner co-marketing"],
      headlines: [
        "80 check calls a day is a software problem.",
        "Your detention invoices are a dashboard you don't have yet.",
        "See the whole network. Sleep through the night shift.",
      ],
    },
    built: [
      "Platform architecture unifying telematics, dock and ETA data",
      "Live operations board with exception-first information design",
      "Exceptions-automation engine with human escalation gates",
      "Detention-cost ROI calculator as lead-gen tool",
      "Industrial brand system and 'Kill the Check Call' campaign",
    ],
    demonstrates:
      "Software & data products — turning a chaotic real-world operation into a single legible interface, with automation removing the busywork underneath it.",
    outcomes: [
      { value: "94%", label: "On-time target model" },
      { value: "-80%", label: "Check calls designed out" },
      { value: "€8k+/wk", label: "Detention avoided at scale" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 08 · SALUS — modern clinic patient experience                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "salus",
    name: "Salus",
    tagline: "Healthcare that feels like it was designed for humans.",
    category: "Software · Health",
    group: "software",
    year: "2026",
    services: ["Product design", "Booking systems", "Brand identity"],
    serviceSlug: "software",
    heroImage: {
      src: "/images/showcase/salus/hero.jpg",
      alt: "Serene light-filled clinical interior with mint and deep-teal accents in soft daylight, architectural photography.",
    },
    reference: "Calm clinical design — soft daylight, mint/teal, generous whitespace — One Medical × Oura.",
    theme: {
      scheme: "light",
      bg: "#eef4f2",
      surface: "#ffffff",
      ink: "#183a37",
      muted: "#5c7d78",
      line: "#d5e4e0",
      accent: "#12857a",
      accentInk: "#f2fbf9",
      accent2: "#7fd1c3",
      fontDisplay: '"Chillax", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "20px",
      headingTracking: "-0.02em",
      headingWeight: 600,
    },
    scene: { pattern: "mesh", glyph: "＋", motto: "Care, calmly coordinated" },
    concept:
      "Salus is a patient-experience layer for private clinics and specialist practices whose care is excellent but whose booking, intake and follow-up feel like 2009. It replaces the phone-and-paper intake with a calm mobile flow: book, complete history at home, arrive to a prepared clinician, and receive a plain-language after-visit summary. Revenue: per-provider SaaS plus a patient-facing premium care-plan tier.",
    audience: "Private clinics, dental groups and specialist practices that compete on experience, not just outcomes.",
    brand: {
      direction:
        "Spa-grade clinical calm. Soft daylight whites, mint and deep teal, rounded geometry, and a friendly humanist face. It deliberately rejects both sterile hospital blue and startup neon — it feels like a well-lit waiting room you don't mind sitting in. Lots of air; nothing shouts.",
      personality: ["Calm", "Trustworthy", "Warm", "Precise"],
      palette: [
        { name: "Sea Glass", hex: "#eef4f2", role: "Canvas" },
        { name: "Deep Teal", hex: "#12857a", role: "Accent" },
        { name: "Pine Ink", hex: "#183a37", role: "Type" },
        { name: "Mint", hex: "#7fd1c3", role: "Highlight" },
      ],
      type: {
        display: "Chillax — soft, rounded, reassuring",
        text: "General Sans — clinical clarity for forms",
        note: "Medical language is always paired with a plain-language line set slightly larger than the clinical term.",
      },
      voice: "A great nurse: warm, plain-spoken, never patronizing. Explains before it asks.",
    },
    screens: [
      {
        kind: "booking",
        frame: "phone",
        name: "Patient booking",
        caption: "Booking a specialist in under a minute, with intake completed at home so the visit starts prepared.",
        appName: "Salus",
        title: "Book — Dr. Hoxha, Dermatology",
        monthLabel: "May 2026",
        daysInMonth: 31,
        selectedDay: 14,
        slots: ["09:20", "10:00", "11:40", "14:15", "16:30"],
        selectedSlot: 3,
        summary: [
          { label: "With", value: "Dr. A. Hoxha" },
          { label: "Type", value: "Skin review · 20 min" },
          { label: "Intake", value: "Complete at home" },
          { label: "Covered", value: "SIGAL insurance" },
        ],
        cta: "Confirm & start intake",
      },
      {
        kind: "portal",
        frame: "phone",
        name: "Patient care portal",
        caption: "After the visit: a plain-language summary, the care plan as clear steps, and everything the patient usually forgets.",
        appName: "Salus",
        greeting: "You're on track, Elira.",
        steps: [
          { label: "Visit", state: "done" },
          { label: "Plan", state: "active" },
          { label: "Follow-up", state: "todo" },
        ],
        cards: [
          { title: "Next visit", value: "Jun 11", sub: "Follow-up · 15 min" },
          { title: "Care plan", value: "3 steps", sub: "1 done today" },
          { title: "Messages", value: "1", sub: "From your nurse" },
        ],
        listTitle: "Your plan",
        list: [
          { title: "Apply prescribed cream nightly", meta: "14 days · reminder set", state: "Active" },
          { title: "Photo check-in", meta: "Upload on day 7", state: "Upcoming" },
          { title: "After-visit summary", meta: "Plain-language PDF", state: "Ready" },
        ],
      },
    ],
    marketing: {
      angle:
        "Compete on the 90% of care that isn't the appointment: the booking, the waiting, the not-knowing. Salus makes a good clinic feel great before and after the ten minutes with the doctor.",
      campaign:
        "\"The Ten Good Minutes\" — a trust campaign built around one insight: patients judge a clinic on everything around the visit. Testimonial-led social plus a clinic-facing ROI story (no-shows down, reviews up). Waiting-room QR posters convert existing patients to the app.",
      channels: ["Local Instagram/Facebook (patient trust)", "Clinic waiting-room QR onboarding", "Google reviews engine", "Referral cards after visits"],
      headlines: [
        "Great care shouldn't start with a busy phone line.",
        "Arrive prepared. Leave understood.",
        "The ten minutes are the doctor's. We fixed the other ninety.",
      ],
    },
    built: [
      "Patient-experience product: booking, at-home intake, care portal",
      "Mobile-first booking and plain-language after-visit summaries",
      "Care-plan tracker with reminders and photo check-ins",
      "Calm clinical brand identity and voice system",
      "'The Ten Good Minutes' trust campaign and review engine",
    ],
    demonstrates:
      "Product design for regulated, human-critical services — reducing anxiety through interface calm, clarity, and thoughtful flows.",
    outcomes: [
      { value: "-40%", label: "Target no-show rate" },
      { value: "<60s", label: "Booking-to-confirmed" },
      { value: "+★", label: "Reviews as a growth loop" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 09 · COVE — coastal escapes, an interactive story                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "cove",
    name: "Cove",
    tagline: "A collection of coastlines you can actually book.",
    category: "Experience · Travel",
    group: "experience",
    year: "2026",
    services: ["Motion web experience", "Brand identity", "Marketing"],
    serviceSlug: "product-lab",
    heroImage: {
      src: "/images/showcase/cove/hero.jpg",
      alt: "Coastal cottage at golden hour with seafoam water and pale sand, airy natural light, editorial travel photography.",
    },
    reference: "Editorial scroll-storytelling — golden-hour coastal photography, serif/sans mix, Airbnb Design × Kinfolk.",
    theme: {
      scheme: "light",
      bg: "#f4efe6",
      surface: "#fbf7ef",
      ink: "#2b3a3a",
      muted: "#6f8180",
      line: "#e0d8c8",
      accent: "#2f8f86",
      accentInk: "#f7fbfa",
      accent2: "#e0a45e",
      fontDisplay: '"Melodrama", Georgia, serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "999px",
      radiusCard: "22px",
      headingTracking: "-0.01em",
      headingWeight: 700,
    },
    scene: { pattern: "aurora", glyph: "≈", motto: "Slow mornings, salt air" },
    concept:
      "Cove is a curated collection of independently-owned coastal stays — cabins, cottages, lighthouses — sold as an immersive, scroll-driven story rather than a listings grid. Each place is a chapter: the light at 7 a.m., the walk to the water, the host's breakfast. Booking happens inside the narrative. Revenue: booking commission plus a paid membership with early access to new coves.",
    audience: "Design-literate couples and remote workers who choose where to stay by feeling, not filters.",
    brand: {
      direction:
        "Editorial coastal warmth. Sun-bleached sand and sea-glass teal, a dramatic display serif for chapter titles, and full-bleed golden-hour photography. The web experience is motion-led: text and images parallax as you scroll a shoreline, so browsing feels like a slow walk rather than a search.",
      personality: ["Serene", "Cinematic", "Curated", "Unhurried"],
      palette: [
        { name: "Pale Sand", hex: "#f4efe6", role: "Canvas" },
        { name: "Sea Glass", hex: "#2f8f86", role: "Accent" },
        { name: "Driftwood", hex: "#2b3a3a", role: "Type" },
        { name: "Low Sun", hex: "#e0a45e", role: "Warmth" },
      ],
      type: {
        display: "Melodrama — expressive high-contrast serif for chapters",
        text: "General Sans — quiet captions and booking UI",
        note: "Chapter numbers ('Cove Nº 04') anchor the scroll; the serif is used large and sparingly.",
      },
      voice: "A travel diary, not a brochure: sensory, specific, a little in love with the place.",
    },
    screens: [
      {
        kind: "landing",
        frame: "browser",
        url: "cove.travel/coves/lighthouse-point",
        name: "Story homepage",
        caption: "A scroll-driven chapter: full-bleed light, a serif title, and a book button that lives inside the story.",
        nav: ["The coves", "Membership", "Journal", "Hosts"],
        navCta: "Find a cove",
        eyebrow: "Cove Nº 04 · Lighthouse Point",
        headline: "The morning the sea comes to you.",
        accentWord: "sea",
        sub: "A restored keeper's cottage on a headland with nothing between you and the water but a kettle and the tide chart.",
        primaryCta: "Check dates",
        secondaryCta: "Walk the cove",
        stats: [
          { value: "18", label: "Coves, hand-picked" },
          { value: "2 nights", label: "Minimum stay" },
          { value: "Members", label: "See new coves first" },
        ],
        motif: "product",
      },
      {
        kind: "editorial",
        frame: "browser",
        url: "cove.travel/journal/why-we-only-list-eighteen",
        name: "Journal chapter",
        caption: "The content engine: a journal that sells the curation philosophy and seeds SEO around 'quiet coastal stays'.",
        masthead: "THE COVE JOURNAL",
        kicker: "On curation · Issue 06",
        headline: "Why we only list eighteen",
        standfirst:
          "Every other platform wants more inventory. We spent the year removing places. Here is the test a coastline has to pass before it becomes a Cove.",
        columns: [
          "It starts with the seven o'clock light. We stay one night in every property before it is listed, and if the morning doesn't stop us at the window with a coffee, it doesn't make the collection. That single rule has cost us dozens of otherwise fine cottages.",
          "The second test is the walk to the water. Under four minutes, no roads to cross, shoes optional. It sounds precious. It is the entire product. Members tell us they book the feeling, and the feeling is that walk.",
        ],
        pullquote: "We are not a marketplace. We are eighteen good mornings.",
        figureTones: [
          "linear-gradient(150deg,#8fc3bb,#2f8f86 80%)",
          "linear-gradient(160deg,#efd9b4,#e0a45e)",
          "linear-gradient(140deg,#a9bcbb,#2b3a3a)",
        ],
        figureCaption: "Lighthouse Point · 07:04, low tide",
      },
    ],
    marketing: {
      angle:
        "Scarcity as taste: 'eighteen coves' says more than 'thousands of stays.' The brand sells editorial curation and a feeling, and lets the algorithm-fatigued self-select.",
      campaign:
        "\"Eighteen Good Mornings\" — a slow-media launch: one cove revealed per week as a cinematic scroll story and a printed zine for members. Each reveal is a Reel of the 7 a.m. light; the CTA is always 'walk the cove,' never 'book now.'",
      channels: ["Instagram/TikTok cinematic Reels", "Printed members' zine", "Design & travel newsletter placements", "Host co-marketing"],
      headlines: [
        "Eighteen coves. One good morning each.",
        "You don't filter a feeling.",
        "Book the walk to the water.",
      ],
    },
    built: [
      "Motion-led, scroll-driven web experience with chapter storytelling",
      "Booking flow embedded inside the narrative (no listings grid)",
      "Editorial coastal brand identity and photographic direction",
      "'The Cove Journal' content engine and members' zine format",
      "'Eighteen Good Mornings' slow-media launch campaign",
    ],
    demonstrates:
      "Interactive storytelling & motion web — a conversion experience where narrative and animation, not filters, drive the booking.",
    outcomes: [
      { value: "18", label: "Curated coves at launch" },
      { value: "×1/wk", label: "Cinematic reveal cadence" },
      { value: "Members", label: "Recurring-revenue layer" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 10 · NUMERA — bookkeeping automation for SMBs                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "numera",
    name: "Numera",
    tagline: "Your books, closed by Tuesday. Automatically.",
    category: "AI automation · Finance",
    group: "ai-automation",
    year: "2026",
    services: ["Automation", "AI product", "Software design"],
    serviceSlug: "automation",
    heroImage: {
      src: "/images/showcase/numera/hero.jpg",
      alt: "Paper-white still life of ledger sheets with cobalt-blue ink geometry, precise overhead flat-lay.",
    },
    reference: "Precise fintech minimalism — paper white, cobalt ink, ledger geometry — Mercury × Pennylane.",
    theme: {
      scheme: "light",
      bg: "#f4f5f9",
      surface: "#ffffff",
      ink: "#0f1e3d",
      muted: "#5a668a",
      line: "#dfe3ee",
      accent: "#1f45d8",
      accentInk: "#f2f5ff",
      accent2: "#5f7fe8",
      fontDisplay: '"General Sans", system-ui, sans-serif',
      fontBody: '"General Sans", system-ui, sans-serif',
      radius: "8px",
      radiusCard: "14px",
      headingTracking: "-0.025em",
      headingWeight: 700,
    },
    scene: { pattern: "grid", glyph: "∑", motto: "Reconciled while you sleep" },
    concept:
      "Numera is an AI bookkeeping layer that sits on top of a small business's bank feeds and invoicing, categorizing transactions, chasing missing receipts, and drafting the month-end close before the accountant opens their laptop. The human accountant reviews and signs off; Numera does the ninety percent that is rules and pattern-matching. Revenue: monthly SaaS by transaction volume, with an accountant-partner channel.",
    audience: "Owner-run SMBs and the bookkeepers/accountants who serve dozens of them.",
    brand: {
      direction:
        "Ledger modernism. Paper-white surfaces, cobalt ink, and hairline rules that echo an accounting sheet. The identity treats numbers as the hero and clutter as the enemy — no illustration, just impeccably-set figures, generous grids, and one confident blue. It should feel like the tidiest spreadsheet you've ever seen.",
      personality: ["Exact", "Trustworthy", "Quiet", "Fast"],
      palette: [
        { name: "Paper", hex: "#f4f5f9", role: "Canvas" },
        { name: "Cobalt Ink", hex: "#1f45d8", role: "Accent" },
        { name: "Ledger Navy", hex: "#0f1e3d", role: "Type" },
        { name: "Rule Blue", hex: "#5f7fe8", role: "Lines" },
      ],
      type: {
        display: "General Sans — one grotesk, tabular figures throughout",
        text: "General Sans — consistency signals accuracy",
        note: "Every monetary figure is tabular and right-aligned; the accent blue marks only what needs a human.",
      },
      voice: "A brilliant bookkeeper: precise, calm, tells you exactly what needs your signature and nothing more.",
    },
    screens: [
      {
        kind: "dashboard",
        frame: "browser",
        url: "app.numera.finance/close",
        name: "Month-end close",
        caption: "The close, ninety percent done: categorized, reconciled, and reduced to a short list of things only a human should decide.",
        appName: "Numera",
        sidebar: ["Close", "Transactions", "Receipts", "Reports", "Clients", "Rules"],
        activeItem: 0,
        title: "May close — Kafe Bar Nova",
        subtitle: "Auto-reconciled · 6 items need your review",
        kpis: [
          { label: "Reconciled", value: "94%", delta: "412 / 438 txns", up: true },
          { label: "Needs review", value: "6", delta: "flagged" },
          { label: "Missing receipts", value: "3", delta: "auto-chased" },
          { label: "Est. close", value: "Tue", delta: "2 days early", up: true },
        ],
        chart: { label: "Cash in vs out — May", type: "bars", points: [62, 48, 71, 55, 80, 44, 68, 90, 58, 76] },
        table: {
          cols: ["Txn", "Vendor", "Category", "Flag"],
          rows: [
            ["€1,240", "Metro Cash & Carry", "Inventory", "Auto"],
            ["€380", "Unknown transfer", "—", "Review"],
            ["€92", "Adobe", "Software", "Auto"],
            ["€540", "Cash deposit", "Sales?", "Review"],
          ],
        },
      },
      {
        kind: "workflow",
        frame: "browser",
        url: "app.numera.finance/rules/missing-receipt",
        name: "Receipt-chase automation",
        caption: "The unglamorous work, automated: a receipt-less expense chases itself down before it ever reaches the accountant.",
        appName: "Numera Rules",
        title: "When a receipt is missing",
        nodes: [
          { label: "Expense > €50, no receipt", sublabel: "Bank feed", kind: "trigger" },
          { label: "Match to likely vendor", sublabel: "Pattern history", kind: "ai" },
          { label: "Text the owner", sublabel: "'Snap the receipt for €380?'", kind: "action" },
          { label: "File & categorize", sublabel: "On reply", kind: "action" },
          { label: "Still missing at close?", sublabel: "Flag for accountant", kind: "human" },
        ],
        note: "Chased 3 receipts this month — 2 resolved by owner, 1 escalated",
      },
    ],
    marketing: {
      angle:
        "Sell the accountant more capacity, not less relevance: Numera lets one bookkeeper handle 3× the clients by killing the manual 90%, and lets SMB owners stop dreading month-end.",
      campaign:
        "\"Closed by Tuesday\" — a dual-audience campaign. For owners: the dread of the shoebox of receipts, gone. For accountants: a partner program with a live 'clients-per-bookkeeper' calculator showing new capacity. Anchored by a public close-time leaderboard.",
      channels: ["Accountant partner program", "SMB owner Facebook/Instagram", "Fintech & bookkeeping newsletters", "Capacity calculator lead magnet"],
      headlines: [
        "Month-end shouldn't cost you a weekend.",
        "One bookkeeper. Three times the clients. Same hours.",
        "The shoebox of receipts is a solved problem.",
      ],
    },
    built: [
      "AI categorization + reconciliation engine over bank and invoice feeds",
      "Month-end close workspace with human review queue",
      "Automated receipt-chasing and vendor-matching flows",
      "Accountant partner program and capacity calculator",
      "Ledger-modern brand identity and 'Closed by Tuesday' campaign",
    ],
    demonstrates:
      "AI automation — removing high-volume, rules-based financial busywork while keeping a human accountable for judgment and sign-off.",
    outcomes: [
      { value: "94%", label: "Auto-reconciled target" },
      { value: "3×", label: "Clients per bookkeeper" },
      { value: "-2 days", label: "Faster month-end close" },
    ],
  },
];
