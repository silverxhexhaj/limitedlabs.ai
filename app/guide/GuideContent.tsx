import Link from "next/link";

import { SHOWCASE_GROUP_LABELS, SHOWCASE_WORKS } from "../work/showcase/index";
import { SHOWCASE_GROUPS } from "../work/showcase/types";

const eyebrow =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";
const wrap = "mx-auto w-full max-w-[var(--max)] px-[var(--gutter)]";

const PROCESS = [
  {
    n: "01",
    title: "Set one impossible brief",
    body: "Twenty-five works, each fundamentally different — different business, audience, interface, palette, and type. The constraint that made it work: no two could share a template or a visual world. Difference was the requirement, not a nice-to-have.",
  },
  {
    n: "02",
    title: "Map the capability, not the categories",
    body: "Rather than 25 random ideas, each work was assigned a discipline to prove — software, AI & automation, commerce, brand, marketing, experience — and a real Limited Labs service it maps to. The collection is a coverage map of what the studio actually does.",
  },
  {
    n: "03",
    title: "Design a data model, then the art",
    body: "Every work is a typed record: theme tokens, a brand system, mock-screen definitions, a marketing angle, and a service mapping. Building the model first meant the design system stayed consistent while each work's world stayed unique.",
  },
  {
    n: "04",
    title: "Give every work its own type & palette",
    body: "Each work ships its own font pairing and color tokens, injected as scoped CSS variables. A luxury-fintech serif, an industrial condensed grotesk, a friendly rounded face — the type does as much brand work as the color.",
  },
  {
    n: "05",
    title: "Build interfaces, not screenshots",
    body: "The product screens are real, responsive components — dashboards, chat, booking, checkout, kanban, workflows — driven by each work's theme. They scale like screenshots but are coded, so every pixel stays on-brand.",
  },
  {
    n: "06",
    title: "Generate cinematic hero imagery",
    body: "Each work has an AI-generated 16:9 hero photograph, art-directed with a reference note (a Dribbble/Behance-style direction), then composited under the work's pattern and wordmark so image and identity read as one system.",
  },
  {
    n: "07",
    title: "Write the business, then the copy",
    body: "Every work has a revenue model, an audience, and an outcome target before a single headline. The marketing angle and campaign come out of the business logic — so the copy sells something real, not just vibes.",
  },
  {
    n: "08",
    title: "Iterate at least three times",
    body: "No work was 'approved' until it passed three review passes across typography, spacing, color, storytelling, conversion, originality and wow-factor. Polish was a gate, not a final coat.",
  },
];

const STACK = [
  { k: "Framework", v: "Next.js (App Router) + React, statically generated per work" },
  { k: "Styling", v: "Tailwind v4 CSS-first tokens; per-work themes via scoped --w-* CSS variables" },
  { k: "Type", v: "Fontshare + Google Fonts — a distinct display/text pairing per work" },
  { k: "Motion", v: "Lenis smooth scroll + GSAP scroll-reveals, gated on prefers-reduced-motion" },
  { k: "Imagery", v: "AI image generation (16:9 heroes) + generative CSS scenes as a no-image fallback" },
  { k: "Interfaces", v: "Hand-built responsive mock-screen components sized in container units (cqw)" },
];

const RECREATE = [
  {
    title: "Start with a capability map",
    body: "List the disciplines you want to prove. Assign each a real service. Aim for even coverage — that's what turns a portfolio into a proof-of-capability.",
  },
  {
    title: "Model a work as data",
    body: "Define one schema: identity tokens, brand system, screen specs, marketing, service mapping. Author works as records so the system stays consistent and the worlds stay distinct.",
  },
  {
    title: "Theme with scoped variables",
    body: "Give each work its own font + color tokens injected as CSS variables on a wrapper. Build the UI against the variables, not hard-coded values, and one component set renders infinite worlds.",
  },
  {
    title: "Composite image + identity",
    body: "Generate a cinematic hero, then layer your pattern and wordmark on top at reduced opacity. Keep a pure-CSS fallback so the layout never shifts if an image is missing.",
  },
  {
    title: "Gate on iteration",
    body: "Review every work three times against a fixed rubric. Don't ship until it feels unique, premium, and worthy of being shown publicly. The gate is the product.",
  },
];

export default function GuideContent() {
  const groupCounts = SHOWCASE_GROUPS.map((g) => ({
    label: SHOWCASE_GROUP_LABELS[g],
    count: SHOWCASE_WORKS.filter((w) => w.group === g).length,
  }));

  return (
    <main id="top" className="pt-[80px] sm:pt-[92px]">
      {/* Hero */}
      <header className={`${wrap} pt-[clamp(56px,10vw,120px)]`}>
        <p className={eyebrow}>The making-of guide</p>
        <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(44px,8vw,110px)] font-bold leading-[0.9] tracking-[-0.05em] text-ink">
          How we built <span className="font-serif italic text-accent">25 worlds</span> in one system.
        </h1>
        <p className="mt-7 max-w-[64ch] text-[clamp(17px,1.6vw,21px)] leading-relaxed text-ink-muted">
          This showcase is itself a case study. Here&rsquo;s the creative process, the structure, the tools, and the design
          approach behind the collection — and a blueprint for building something like it yourself.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
          >
            View the 25 works <span aria-hidden>→</span>
          </Link>
          <Link
            href="/#services"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Limited Labs services
          </Link>
        </div>
      </header>

      {/* Coverage map */}
      <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`}>
        <h2 className={eyebrow}>What the collection covers</h2>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {groupCounts.map((g) => (
            <div key={g.label} className="bg-page p-6">
              <p className="font-display text-[clamp(30px,4vw,48px)] font-bold leading-none tracking-[-0.04em] text-ink">
                {String(g.count).padStart(2, "0")}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase leading-snug tracking-[0.08em] text-ink-muted">{g.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-[clamp(56px,8vw,110px)] border-y border-border bg-surface/40 py-[clamp(56px,8vw,104px)]">
        <div className={wrap}>
          <h2 className={eyebrow}>The creative process</h2>
          <p className="mt-6 max-w-[52ch] font-display text-[clamp(24px,3vw,38px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            Eight moves, repeated twenty-five times.
          </p>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PROCESS.map((p) => (
              <div key={p.n} className="flex gap-5">
                <span className="font-mono text-[13px] font-medium text-accent">{p.n}</span>
                <div>
                  <h3 className="font-display text-[clamp(19px,2vw,24px)] font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                  <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`}>
        <div className="grid gap-[clamp(28px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={eyebrow}>How each work is structured</h2>
            <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-ink-muted">
              Every detail page follows the same ten-part spine, so the collection reads as one system even though each
              world looks entirely its own.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {[
              "Name & concept",
              "Business explanation",
              "Brand direction",
              "Visual identity",
              "Homepage / product interface",
              "Key product screen",
              "Marketing angle & campaign",
              "What Limited Labs built",
              "Service demonstrated",
              "Polished presentation",
            ].map((s, i) => (
              <li key={s} className="flex items-baseline gap-3 bg-page p-5">
                <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14.5px] text-ink">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stack */}
      <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`}>
        <h2 className={eyebrow}>Tools & design approach</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STACK.map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">{s.k}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recreate */}
      <section className="mt-[clamp(56px,8vw,110px)] border-y border-border bg-surface/40 py-[clamp(56px,8vw,104px)]">
        <div className={wrap}>
          <h2 className={eyebrow}>Build one yourself</h2>
          <p className="mt-6 max-w-[52ch] font-display text-[clamp(24px,3vw,38px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            The five-step blueprint.
          </p>
          <div className="mt-12 flex flex-col">
            {RECREATE.map((r, i) => (
              <div key={r.title} className="flex flex-col gap-2 border-b border-border py-7 last:border-0 md:flex-row md:gap-10">
                <div className="flex items-center gap-4 md:w-[38%]">
                  <span className="font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-none tracking-[-0.04em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(19px,2vw,26px)] font-bold tracking-[-0.02em] text-ink">{r.title}</h3>
                </div>
                <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted md:flex-1">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(64px,9vw,130px)] text-center">
        <div className={wrap}>
          <p className="mx-auto max-w-[24ch] font-display text-[clamp(32px,5vw,66px)] font-bold leading-[0.98] tracking-[-0.04em] text-ink">
            Your business could be <span className="font-serif italic text-accent">work 26</span>.
          </p>
          <p className="mx-auto mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink-muted">
            The same process that built this showcase builds real systems for real businesses — brand, product, and
            marketing designed as one.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 min-[480px]:flex-row">
            <Link
              href="/#audit"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-[14px] text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
            >
              Get a free systems audit <span aria-hidden>→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-[14px] text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Explore the showcase
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
