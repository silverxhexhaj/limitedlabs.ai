import Link from "next/link";

import { SHOWCASE_GROUP_LABELS, SERVICE_SLUG_LABELS } from "./index";
import { themeVars } from "./mocks/frames";
import MockScreenView from "./mocks/MockScreenView";
import ShowcaseFonts from "./ShowcaseFonts";
import type { ShowcaseWork } from "./types";
import WorkScene from "./WorkScene";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";

const eyebrow =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";
const chip =
  "rounded-full border border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted";

type Props = {
  work: ShowcaseWork;
  prev: ShowcaseWork | null;
  next: ShowcaseWork | null;
  index: number;
};

export default function ShowcaseDetailContent({ work, prev, next, index }: Props) {
  const num = String(index + 1).padStart(2, "0");
  const [primaryScreen, ...moreScreens] = work.screens;
  const themeStyle = themeVars(work.theme);

  return (
    <>
      <ShowcaseFonts />
      <SiteHeader />
      <span hidden data-page-view-event="work_viewed" data-page-view-slug={work.slug} />

      <main id="top" className="pt-[80px] sm:pt-[92px]">
        {/* ---- Breadcrumb ---- */}
        <div className={`${wrap} pt-6`}>
          <nav className="flex flex-wrap items-center justify-between gap-3" aria-label="Breadcrumb">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 L 5 8 L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
              {num} / 25 · {SHOWCASE_GROUP_LABELS[work.group]}
            </span>
          </nav>
        </div>

        {/* ---- 01 · Hero: name, concept, generated visual ---- */}
        <header className={`${wrap} pt-[clamp(28px,5vw,56px)]`}>
          <p className={eyebrow}>{work.category} · {work.year}</p>
          <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(44px,8vw,110px)] font-bold leading-[0.9] tracking-[-0.045em] text-ink">
            {work.name}
          </h1>
          <p className="mt-6 max-w-[40ch] font-serif text-[clamp(22px,3vw,38px)] italic leading-[1.15] text-ink">
            {work.tagline}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Disciplines">
            {work.services.map((s) => (
              <li key={s} className={chip}>{s}</li>
            ))}
          </ul>
        </header>

        <div className={`${wrap} mt-[clamp(28px,4vw,52px)]`}>
          <div
            style={themeStyle}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-border shadow-[0_50px_120px_-50px_rgba(0,0,0,0.6)] sm:aspect-[16/8]"
          >
            <WorkScene work={work} variant="hero" withVars={false} showImage priority />
          </div>
        </div>

        {/* ---- 02 · Business concept + audience + outcomes ---- */}
        <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`} data-reveal>
          <div className="grid gap-[clamp(28px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 className={eyebrow}>The concept</h2>
              <p className="mt-6 max-w-[42ch] font-display text-[clamp(22px,2.6vw,34px)] font-semibold leading-[1.28] tracking-[-0.02em] text-ink">
                {work.concept}
              </p>
            </div>
            <div className="lg:pt-2">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">Who it&rsquo;s for</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{work.audience}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7">
                {work.outcomes.map((o) => (
                  <div key={o.label}>
                    <dt className="font-display text-[clamp(20px,2.4vw,30px)] font-bold leading-none tracking-[-0.03em] text-ink">{o.value}</dt>
                    <dd className="mt-2 font-mono text-[9.5px] uppercase leading-snug tracking-[0.06em] text-ink-faint">{o.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---- 03 · Brand direction ---- */}
        <section className="mt-[clamp(56px,8vw,110px)] border-y border-border bg-surface/40 py-[clamp(48px,7vw,96px)]" data-reveal>
          <div className={wrap}>
            <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h2 className={eyebrow}>Brand direction</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {work.brand.personality.map((p) => (
                    <span key={p} className="rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-accent">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="max-w-[58ch] text-[clamp(16px,1.5vw,20px)] leading-[1.6] text-ink-muted">
                {work.brand.direction}
              </p>
            </div>
          </div>
        </section>

        {/* ---- 04 · Visual identity: palette, type, voice ---- */}
        <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`} data-reveal>
          <h2 className={eyebrow}>Visual identity</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {work.brand.palette.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="h-24 w-full" style={{ background: c.hex }} />
                <div className="px-4 py-3.5">
                  <p className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">{c.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-faint">{c.hex}</p>
                  <p className="mt-1 text-[12px] text-ink-muted">{c.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6" style={themeStyle}>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Display type</p>
              <p className="mt-3 text-[34px] leading-[1.05] text-[var(--w-ink)] [font-family:var(--w-font-display)] [font-weight:var(--w-h-weight)]" style={{ background: "var(--w-surface)", borderRadius: 12, padding: "12px 16px" }}>
                {work.name}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{work.brand.type.display}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Text + system</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{work.brand.type.text}</p>
              <p className="mt-3 border-t border-border pt-3 text-[13px] leading-relaxed text-ink-muted">{work.brand.type.note}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Voice</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{work.brand.voice}</p>
              {work.reference ? (
                <p className="mt-3 border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-ink-faint">
                  REF · {work.reference}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {/* ---- 05 · Primary interface ---- */}
        <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`} data-reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={eyebrow}>{primaryScreen.frame === "phone" ? "Product · mobile" : "Homepage & product interface"}</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Screen 01 · {primaryScreen.name}</span>
          </div>
          <figure className="mt-7">
            <div style={themeStyle} className="rounded-[26px] border border-border bg-[var(--w-bg)] p-[clamp(16px,3vw,44px)]">
              <MockScreenView screen={primaryScreen} brandName={work.name} />
            </div>
            <figcaption className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-ink-muted">
              <span className="text-ink">{primaryScreen.name}.</span> {primaryScreen.caption}
            </figcaption>
          </figure>
        </section>

        {/* ---- 06 · Additional product screens ---- */}
        {moreScreens.map((screen, i) => (
          <section key={i} className={`${wrap} pt-[clamp(40px,6vw,80px)]`} data-reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={eyebrow}>{screenGroupLabel(screen.kind)}</h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
                Screen {String(i + 2).padStart(2, "0")} · {screen.name}
              </span>
            </div>
            <figure className="mt-7">
              <div style={themeStyle} className="rounded-[26px] border border-border bg-[var(--w-bg)] p-[clamp(16px,3vw,44px)]">
                <MockScreenView screen={screen} brandName={work.name} />
              </div>
              <figcaption className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-ink-muted">
                <span className="text-ink">{screen.name}.</span> {screen.caption}
              </figcaption>
            </figure>
          </section>
        ))}

        {/* ---- 07 · Marketing angle & campaign ---- */}
        <section className="mt-[clamp(56px,8vw,110px)] border-y border-border bg-surface/40 py-[clamp(48px,7vw,96px)]" data-reveal>
          <div className={wrap}>
            <h2 className={eyebrow}>Marketing angle</h2>
            <div className="mt-7 grid gap-[clamp(24px,4vw,56px)] lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="max-w-[46ch] font-display text-[clamp(22px,2.8vw,36px)] font-semibold leading-[1.22] tracking-[-0.02em] text-ink">
                  {work.marketing.angle}
                </p>
                <div className="mt-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">The campaign</h3>
                  <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">{work.marketing.campaign}</p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {work.marketing.channels.map((ch) => (
                    <span key={ch} className={chip}>{ch}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">Headline directions</h3>
                {work.marketing.headlines.map((h, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-page p-5">
                    <p className="font-display text-[clamp(17px,1.7vw,21px)] font-semibold leading-[1.25] tracking-[-0.015em] text-ink">
                      <span className="mr-2 text-accent">“</span>{h}<span className="ml-1 text-accent">”</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- 08 · What Limited Labs built + 09 · Service demonstrated ---- */}
        <section className={`${wrap} pt-[clamp(56px,8vw,110px)]`} data-reveal>
          <div className="grid gap-[clamp(28px,5vw,72px)] lg:grid-cols-[1fr_0.85fr]">
            <div>
              <h2 className={eyebrow}>What Limited Labs built</h2>
              <ul className="mt-7 flex flex-col">
                {work.built.map((b, i) => (
                  <li key={b} className="flex gap-5 border-b border-border py-4 last:border-0">
                    <span className="mt-0.5 font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] leading-snug text-ink">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7">
              <h2 className={eyebrow}>Service demonstrated</h2>
              <p className="mt-5 font-display text-[clamp(24px,3vw,34px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                {SERVICE_SLUG_LABELS[work.serviceSlug]}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{work.demonstrates}</p>
              <Link
                href={`/services/${work.serviceSlug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink hover:bg-accent hover:text-[color:var(--accent-ink)]"
              >
                Explore this service <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ---- 10 · Closing CTA ---- */}
        <section className="mt-[clamp(64px,9vw,130px)] border-t border-border py-[clamp(56px,8vw,104px)] text-center" data-reveal>
          <div className={wrap}>
            <p className={`${eyebrow} justify-center`}>Work {num} of 25</p>
            <p className="mx-auto mt-6 max-w-[24ch] font-display text-[clamp(32px,5vw,66px)] font-bold leading-[0.98] tracking-[-0.04em] text-ink">
              Want a <span className="font-serif italic text-accent">system</span> like this for your business?
            </p>
            <p className="mx-auto mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink-muted">
              Every work in this collection is one connected build — brand, product, and marketing designed together. That&rsquo;s the whole idea behind Limited Labs.
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
                See all 25 works
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Prev / next ---- */}
        <nav className={`${wrap} flex flex-wrap items-center justify-between gap-4 border-t border-border py-8`} aria-label="Adjacent works">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group inline-flex items-center gap-3 text-left">
              <span aria-hidden className="font-mono text-ink-faint transition-colors group-hover:text-accent">←</span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Previous</span>
                <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">{prev.name}</span>
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group inline-flex items-center gap-3 text-right">
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Next</span>
                <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">{next.name}</span>
              </span>
              <span aria-hidden className="font-mono text-ink-faint transition-colors group-hover:text-accent">→</span>
            </Link>
          ) : <span />}
        </nav>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}

function screenGroupLabel(kind: string): string {
  switch (kind) {
    case "dashboard":
      return "Dashboard & data";
    case "chat":
      return "AI conversation";
    case "booking":
      return "Booking flow";
    case "kanban":
      return "Pipeline & board";
    case "workflow":
      return "Automation flow";
    case "editorial":
      return "Editorial system";
    case "campaign":
      return "Campaign system";
    case "portal":
      return "Client portal";
    case "checkout":
      return "Checkout flow";
    case "storefront":
      return "Storefront";
    case "productDetail":
      return "Product detail";
    default:
      return "Key product screen";
  }
}
