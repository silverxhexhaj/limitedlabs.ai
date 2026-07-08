/**
 * Showcase collection — 25 original Limited Labs works.
 *
 * Every work carries its own visual world (theme tokens + fonts + scene
 * pattern) which is applied via CSS custom properties (`--w-*`) inside the
 * "artifact" panels of the detail page, while the surrounding presentation
 * chrome stays on Limited Labs site tokens. See ShowcaseDetailContent.tsx.
 */

/** Filter groups used on the /work index. */
export type ShowcaseGroup =
  | "software"
  | "ai-automation"
  | "commerce"
  | "brand"
  | "marketing"
  | "experience";

export const SHOWCASE_GROUPS: ShowcaseGroup[] = [
  "software",
  "ai-automation",
  "commerce",
  "brand",
  "marketing",
  "experience",
];

/** Decorative pattern rendered behind the wordmark in the hero scene. */
export type ScenePattern =
  | "mesh"
  | "grid"
  | "rings"
  | "stripes"
  | "halftone"
  | "aurora"
  | "scan"
  | "orbit"
  | "contour"
  | "type";

/**
 * Per-work design tokens. All values are raw CSS values (hex colors, px
 * radii, font stacks) — they are injected as `--w-*` custom properties.
 */
export type WorkTheme = {
  scheme: "dark" | "light";
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  line: string;
  accent: string;
  /** Text color used on top of the accent (buttons, badges). */
  accentInk: string;
  accent2?: string;
  fontDisplay: string;
  fontBody?: string;
  fontMono?: string;
  /** Corner radius of buttons/chips inside the work's world. */
  radius: string;
  /** Corner radius of cards/panels; defaults to `radius` when omitted. */
  radiusCard?: string;
  headingTransform?: "uppercase" | "none";
  headingTracking?: string;
  headingWeight?: number;
};

/* ------------------------------------------------------------------ */
/* Mock screens                                                        */
/* ------------------------------------------------------------------ */

type ScreenBase = {
  frame: "browser" | "phone" | "none";
  /** Fake address-bar URL (browser frame only). */
  url?: string;
  /** Short label, e.g. "Homepage" or "Ops dashboard". */
  name: string;
  /** One-sentence caption: what the screen shows and why it matters. */
  caption: string;
};

export type LandingScreen = ScreenBase & {
  kind: "landing";
  nav: string[];
  navCta?: string;
  eyebrow?: string;
  headline: string;
  /** Word inside the headline rendered with the accent treatment. */
  accentWord?: string;
  sub: string;
  primaryCta: string;
  secondaryCta?: string;
  stats?: { value: string; label: string }[];
  cards?: { title: string; body: string }[];
  /** Visual motif of the hero media panel. */
  motif?: "panel" | "orbs" | "product" | "none";
};

export type StorefrontScreen = ScreenBase & {
  kind: "storefront";
  nav: string[];
  navCta?: string;
  collection: string;
  intro?: string;
  filters?: string[];
  products: { name: string; price: string; tag?: string; tone: string }[];
};

export type ProductDetailScreen = ScreenBase & {
  kind: "productDetail";
  breadcrumb: string[];
  productName: string;
  price: string;
  description: string;
  options: { label: string; values: string[]; selected: number }[];
  cta: string;
  /** Background tones of gallery thumbs; first is the main image. */
  gallery: string[];
  meta?: { label: string; value: string }[];
};

export type DashboardScreen = ScreenBase & {
  kind: "dashboard";
  appName: string;
  sidebar: string[];
  activeItem?: number;
  title: string;
  subtitle?: string;
  kpis: { label: string; value: string; delta?: string; up?: boolean }[];
  chart?: { label: string; type: "bars" | "line" | "area"; points: number[] };
  table?: { cols: string[]; rows: string[][] };
};

export type ChatScreen = ScreenBase & {
  kind: "chat";
  appName: string;
  threadTitle?: string;
  messages: { role: "user" | "ai"; text: string; chips?: string[] }[];
  composer: string;
  context?: { title: string; items: { label: string; value: string }[] };
};

export type BookingScreen = ScreenBase & {
  kind: "booking";
  appName: string;
  title: string;
  monthLabel: string;
  daysInMonth: number;
  selectedDay: number;
  slots: string[];
  selectedSlot: number;
  summary: { label: string; value: string }[];
  cta: string;
};

export type KanbanScreen = ScreenBase & {
  kind: "kanban";
  appName: string;
  title: string;
  columns: { name: string; cards: { title: string; tag?: string; meta?: string }[] }[];
};

export type WorkflowScreen = ScreenBase & {
  kind: "workflow";
  appName: string;
  title: string;
  nodes: { label: string; sublabel?: string; kind: "trigger" | "action" | "ai" | "branch" | "human" }[];
  note?: string;
};

export type EditorialScreen = ScreenBase & {
  kind: "editorial";
  masthead: string;
  kicker: string;
  headline: string;
  standfirst: string;
  columns: string[];
  pullquote: string;
  figureTones: string[];
  figureCaption?: string;
};

export type CampaignScreen = ScreenBase & {
  kind: "campaign";
  title: string;
  intro?: string;
  tiles: { format: "story" | "square" | "wide"; headline: string; sub?: string; badge?: string }[];
};

export type PortalScreen = ScreenBase & {
  kind: "portal";
  appName: string;
  greeting: string;
  steps?: { label: string; state: "done" | "active" | "todo" }[];
  cards: { title: string; value: string; sub?: string }[];
  list: { title: string; meta: string; state: string }[];
  listTitle?: string;
};

export type CheckoutScreen = ScreenBase & {
  kind: "checkout";
  appName: string;
  steps: string[];
  activeStep: number;
  items: { name: string; detail?: string; price: string }[];
  totals: { label: string; value: string }[];
  fields: string[];
  cta: string;
  note?: string;
};

export type MockScreen =
  | LandingScreen
  | StorefrontScreen
  | ProductDetailScreen
  | DashboardScreen
  | ChatScreen
  | BookingScreen
  | KanbanScreen
  | WorkflowScreen
  | EditorialScreen
  | CampaignScreen
  | PortalScreen
  | CheckoutScreen;

/* ------------------------------------------------------------------ */
/* The work itself                                                     */
/* ------------------------------------------------------------------ */

export type ShowcaseWork = {
  slug: string;
  /** Brand / product name. */
  name: string;
  tagline: string;
  /** Display label, e.g. "SaaS · Private wealth". */
  category: string;
  group: ShowcaseGroup;
  year: string;
  /** Limited Labs disciplines demonstrated (display chips). */
  services: string[];
  /** Primary Limited Labs service page this work maps to. */
  serviceSlug: "brand" | "software" | "marketing-engines" | "automation" | "product-lab";
  theme: WorkTheme;
  scene: {
    pattern: ScenePattern;
    /** Optional glyph placed next to the wordmark, e.g. "◆". */
    glyph?: string;
    /** Small caption line under the wordmark inside the scene. */
    motto?: string;
  };
  /** Optional generated hero image; the CSS scene remains the fallback. */
  heroImage?: { src: string; alt: string };
  /** Aesthetic reference language (Dribbble/Behance-style direction note). */
  reference?: string;
  /** Short business explanation: what the business is and how it makes money. */
  concept: string;
  audience: string;
  brand: {
    direction: string;
    personality: string[];
    palette: { name: string; hex: string; role: string }[];
    type: { display: string; text: string; note: string };
    voice: string;
  };
  /** First screen is the homepage / primary product interface. */
  screens: MockScreen[];
  marketing: {
    angle: string;
    campaign: string;
    channels: string[];
    headlines: string[];
  };
  /** "What Limited Labs built" — concrete deliverables. */
  built: string[];
  /** Which Limited Labs service this demonstrates, and why. */
  demonstrates: string;
  /** Concept outcome targets. */
  outcomes: { value: string; label: string }[];
};
