import type { ReactNode } from "react";

import { BrowserFrame, MiniChart, MockAvatar, PhoneFrame, W } from "./frames";
import type {
  BookingScreen,
  CampaignScreen,
  ChatScreen,
  CheckoutScreen,
  DashboardScreen,
  EditorialScreen,
  KanbanScreen,
  LandingScreen,
  MockScreen,
  PortalScreen,
  ProductDetailScreen,
  StorefrontScreen,
  WorkflowScreen,
} from "../types";

/* All screens are decorative "screenshots": text inside is sized in `em`
 * against a container-relative root font-size, so the composition scales
 * proportionally at every viewport. */

type ViewProps = { screen: MockScreen; brandName: string };

export default function MockScreenView({ screen, brandName }: ViewProps) {
  const body = renderScreen(screen, brandName);

  if (screen.frame === "phone") {
    return (
      <PhoneFrame>
        <Root phone>{body}</Root>
      </PhoneFrame>
    );
  }
  if (screen.frame === "none") {
    return (
      <div aria-hidden="true" className="pointer-events-none select-none [container-type:inline-size]">
        <Root>{body}</Root>
      </div>
    );
  }
  return (
    <BrowserFrame url={screen.url}>
      <Root>{body}</Root>
    </BrowserFrame>
  );
}

function Root({ phone = false, children }: { phone?: boolean; children: ReactNode }) {
  return (
    <div
      className={`${W.body} bg-[var(--w-bg)] leading-[1.45] text-[var(--w-ink)]`}
      style={{ fontSize: phone ? "3.9cqw" : "1.5cqw" }}
    >
      {children}
    </div>
  );
}

function renderScreen(screen: MockScreen, brandName: string): ReactNode {
  switch (screen.kind) {
    case "landing":
      return <Landing s={screen} brand={brandName} />;
    case "storefront":
      return <Storefront s={screen} brand={brandName} />;
    case "productDetail":
      return <ProductDetail s={screen} brand={brandName} />;
    case "dashboard":
      return <Dashboard s={screen} />;
    case "chat":
      return <Chat s={screen} />;
    case "booking":
      return <Booking s={screen} />;
    case "kanban":
      return <Kanban s={screen} />;
    case "workflow":
      return <Workflow s={screen} />;
    case "editorial":
      return <Editorial s={screen} />;
    case "campaign":
      return <Campaign s={screen} />;
    case "portal":
      return <Portal s={screen} />;
    case "checkout":
      return <Checkout s={screen} />;
  }
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function NavBar({ brand, links, cta }: { brand: string; links: string[]; cta?: string }) {
  return (
    <header className="flex items-center justify-between gap-[2em] border-b border-[var(--w-line)] px-[2.2em] py-[1.1em]">
      <span className={`${W.heading} text-[1.15em]`}>{brand}</span>
      <nav className="flex gap-[1.6em] text-[0.82em] text-[var(--w-muted)]">
        {links.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </nav>
      {cta ? <span className={`${W.btn} px-[1.2em] py-[0.5em] text-[0.82em]`}>{cta}</span> : <span />}
    </header>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={`${W.mono} flex items-center gap-[0.8em] text-[0.68em] text-[var(--w-muted)]`}>
      <span className="h-px w-[2.4em] bg-[var(--w-accent)]" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* 01 · Landing                                                        */
/* ------------------------------------------------------------------ */

function Landing({ s, brand }: { s: LandingScreen; brand: string }) {
  const headline = s.accentWord ? (
    <>
      {s.headline.split(s.accentWord)[0]}
      <em className="not-italic text-[var(--w-accent)]">{s.accentWord}</em>
      {s.headline.split(s.accentWord)[1]}
    </>
  ) : (
    s.headline
  );

  return (
    <div>
      <NavBar brand={brand} links={s.nav} cta={s.navCta} />
      <div className={`grid gap-[2.5em] px-[2.6em] pb-[2.4em] pt-[2.6em] ${s.motif && s.motif !== "none" ? "grid-cols-[1.15fr_0.85fr] items-center" : ""}`}>
        <div>
          {s.eyebrow ? <Eyebrow>{s.eyebrow}</Eyebrow> : null}
          <h3 className={`${W.heading} mt-[0.55em] text-[3.4em] leading-[1.02]`}>{headline}</h3>
          <p className="mt-[1.1em] max-w-[36em] text-[1em] text-[var(--w-muted)]">{s.sub}</p>
          <div className="mt-[1.6em] flex items-center gap-[1em]">
            <span className={`${W.btn} px-[1.5em] py-[0.7em] text-[0.9em]`}>{s.primaryCta}</span>
            {s.secondaryCta ? (
              <span className={`${W.btnGhost} px-[1.5em] py-[0.7em] text-[0.9em]`}>{s.secondaryCta}</span>
            ) : null}
          </div>
        </div>
        {s.motif && s.motif !== "none" ? <HeroMotif motif={s.motif} /> : null}
      </div>
      {s.stats ? (
        <div className="mx-[2.6em] flex justify-between gap-[1.5em] border-t border-[var(--w-line)] py-[1.5em]">
          {s.stats.map((st) => (
            <div key={st.label}>
              <p className={`${W.heading} text-[1.7em]`}>{st.value}</p>
              <p className={`${W.mono} mt-[0.4em] text-[0.62em] text-[var(--w-muted)]`}>{st.label}</p>
            </div>
          ))}
        </div>
      ) : null}
      {s.cards ? (
        <div className="grid grid-cols-3 gap-[1.2em] px-[2.6em] pb-[2.4em]">
          {s.cards.map((c) => (
            <div key={c.title} className={`${W.card} p-[1.3em]`}>
              <span className="mb-[1em] block size-[0.9em] rounded-full bg-[var(--w-accent)]" />
              <p className={`${W.heading} text-[1em]`}>{c.title}</p>
              <p className="mt-[0.5em] text-[0.8em] leading-[1.5] text-[var(--w-muted)]">{c.body}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HeroMotif({ motif }: { motif: "panel" | "orbs" | "product" }) {
  if (motif === "orbs") {
    return (
      <div className="relative aspect-[4/3.4] overflow-hidden rounded-[var(--w-radius-card)] border border-[var(--w-line)] bg-[var(--w-surface)]">
        <span className="absolute left-[12%] top-[16%] size-[46%] rounded-full opacity-70 blur-[1.4em]" style={{ background: "var(--w-accent)" }} />
        <span className="absolute bottom-[10%] right-[8%] size-[54%] rounded-full opacity-50 blur-[1.8em]" style={{ background: "var(--w-accent2)" }} />
        <span className="absolute bottom-[18%] left-[16%] size-[26%] rounded-full opacity-60 blur-[1em]" style={{ background: "var(--w-ink)" }} />
      </div>
    );
  }
  if (motif === "product") {
    return (
      <div className="relative grid aspect-[4/3.4] place-items-center overflow-hidden rounded-[var(--w-radius-card)] border border-[var(--w-line)]" style={{ background: "radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, var(--w-accent) 24%, var(--w-surface)), var(--w-bg))" }}>
        <span className="block h-[62%] w-[46%] rounded-[12%] border border-[var(--w-line)] shadow-[0_3em_5em_-2em_rgba(0,0,0,0.55)]" style={{ background: "linear-gradient(160deg, color-mix(in srgb, var(--w-ink) 16%, var(--w-surface)), var(--w-surface) 55%, color-mix(in srgb, var(--w-accent) 30%, var(--w-surface)))" }} />
        <span className="absolute bottom-[12%] h-[3%] w-[40%] rounded-full bg-black/30 blur-[0.6em]" />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3.4] flex-col gap-[0.9em] overflow-hidden rounded-[var(--w-radius-card)] border border-[var(--w-line)] bg-[var(--w-surface)] p-[1.2em]">
      <div className="flex items-center justify-between">
        <span className="h-[0.8em] w-[34%] rounded-full bg-[var(--w-line)]" />
        <span className="h-[1.4em] w-[22%] rounded-[var(--w-radius)] bg-[var(--w-accent)] opacity-90" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-[0.9em]">
        <div className="col-span-2 rounded-[0.6em] border border-[var(--w-line)] bg-[var(--w-bg)] p-[0.9em]">
          <span className="block h-[0.65em] w-1/2 rounded-full bg-[var(--w-line)]" />
          <MiniChart points={[18, 26, 22, 34, 30, 44, 41, 56, 62]} type="area" height="7em" />
        </div>
        <div className="flex flex-col gap-[0.9em]">
          {[68, 42, 84].map((v, i) => (
            <div key={i} className="flex-1 rounded-[0.6em] border border-[var(--w-line)] bg-[var(--w-bg)] p-[0.8em]">
              <span className="block h-[0.5em] w-2/3 rounded-full bg-[var(--w-line)]" />
              <span className="mt-[0.6em] block h-[0.35em] rounded-full bg-[var(--w-line)]/60">
                <span className="block h-full rounded-full bg-[var(--w-accent)]" style={{ width: `${v}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 02 · Storefront                                                     */
/* ------------------------------------------------------------------ */

function Storefront({ s, brand }: { s: StorefrontScreen; brand: string }) {
  return (
    <div>
      <NavBar brand={brand} links={s.nav} cta={s.navCta} />
      <div className="px-[2.4em] pb-[2.4em] pt-[2.2em]">
        <div className="flex items-end justify-between gap-[2em]">
          <div>
            <h3 className={`${W.heading} text-[2.6em] leading-[1.02]`}>{s.collection}</h3>
            {s.intro ? <p className="mt-[0.7em] max-w-[34em] text-[0.9em] text-[var(--w-muted)]">{s.intro}</p> : null}
          </div>
          {s.filters ? (
            <div className="flex shrink-0 gap-[0.6em]">
              {s.filters.map((f, i) => (
                <span
                  key={f}
                  className={`${i === 0 ? W.btn : W.chip} px-[1em] py-[0.4em] text-[0.72em]`}
                >
                  {f}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-[1.8em] grid grid-cols-4 gap-[1.2em]">
          {s.products.map((p) => (
            <div key={p.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--w-radius-card)] border border-[var(--w-line)]" style={{ background: p.tone }}>
                {p.tag ? (
                  <span className={`${W.mono} absolute left-[8%] top-[7%] rounded-[var(--w-radius)] bg-[var(--w-bg)] px-[0.7em] py-[0.3em] text-[0.6em]`}>
                    {p.tag}
                  </span>
                ) : null}
              </div>
              <p className={`${W.heading} mt-[0.8em] text-[0.92em]`}>{p.name}</p>
              <p className="mt-[0.2em] text-[0.8em] text-[var(--w-muted)]">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 03 · Product detail                                                 */
/* ------------------------------------------------------------------ */

function ProductDetail({ s, brand }: { s: ProductDetailScreen; brand: string }) {
  return (
    <div>
      <NavBar brand={brand} links={s.breadcrumb.slice(0, 1).length ? ["Shop", "About", "Journal"] : []} />
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-[2.2em] px-[2.4em] py-[2em]">
        <div>
          <div className="aspect-[4/3.6] rounded-[var(--w-radius-card)] border border-[var(--w-line)]" style={{ background: s.gallery[0] }} />
          <div className="mt-[0.9em] grid grid-cols-4 gap-[0.9em]">
            {s.gallery.slice(1).map((g, i) => (
              <span key={i} className="block aspect-square rounded-[calc(var(--w-radius-card)*0.7)] border border-[var(--w-line)]" style={{ background: g }} />
            ))}
          </div>
        </div>
        <div>
          <p className={`${W.mono} text-[0.62em] text-[var(--w-muted)]`}>{s.breadcrumb.join(" / ")}</p>
          <h3 className={`${W.heading} mt-[0.5em] text-[2.4em] leading-[1.04]`}>{s.productName}</h3>
          <p className={`${W.heading} mt-[0.5em] text-[1.3em] text-[var(--w-accent)]`}>{s.price}</p>
          <p className="mt-[1em] text-[0.88em] leading-[1.55] text-[var(--w-muted)]">{s.description}</p>
          {s.options.map((o) => (
            <div key={o.label} className="mt-[1.2em]">
              <p className={`${W.mono} text-[0.6em] text-[var(--w-muted)]`}>{o.label}</p>
              <div className="mt-[0.55em] flex flex-wrap gap-[0.55em]">
                {o.values.map((v, i) => (
                  <span
                    key={v}
                    className={`px-[1em] py-[0.42em] text-[0.78em] ${
                      i === o.selected
                        ? `${W.btn}`
                        : `${W.chip} text-[var(--w-ink)]`
                    }`}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <span className={`${W.btn} mt-[1.6em] w-full py-[0.85em] text-[0.95em]`}>{s.cta}</span>
          {s.meta ? (
            <dl className="mt-[1.3em] border-t border-[var(--w-line)]">
              {s.meta.map((m) => (
                <div key={m.label} className="flex justify-between border-b border-[var(--w-line)] py-[0.65em] text-[0.78em]">
                  <dt className="text-[var(--w-muted)]">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 04 · Dashboard                                                      */
/* ------------------------------------------------------------------ */

function Dashboard({ s }: { s: DashboardScreen }) {
  return (
    <div className="grid grid-cols-[17%_1fr]">
      <aside className="border-r border-[var(--w-line)] bg-[var(--w-surface)] px-[1.2em] py-[1.4em]">
        <p className={`${W.heading} flex items-center gap-[0.6em] text-[1em]`}>
          <MockAvatar size="1.2em" />
          {s.appName}
        </p>
        <nav className="mt-[1.6em] flex flex-col gap-[0.35em]">
          {s.sidebar.map((item, i) => (
            <span
              key={item}
              className={`rounded-[calc(var(--w-radius)*0.75)] px-[0.8em] py-[0.5em] text-[0.8em] ${
                i === (s.activeItem ?? 0)
                  ? "bg-[color-mix(in_srgb,var(--w-accent)_16%,transparent)] font-semibold text-[var(--w-accent)]"
                  : "text-[var(--w-muted)]"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>
      </aside>
      <main className="px-[1.8em] py-[1.5em]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`${W.heading} text-[1.5em]`}>{s.title}</h3>
            {s.subtitle ? <p className="mt-[0.2em] text-[0.78em] text-[var(--w-muted)]">{s.subtitle}</p> : null}
          </div>
          <span className={`${W.btn} px-[1.1em] py-[0.5em] text-[0.78em]`}>Export</span>
        </div>
        <div className="mt-[1.3em] grid grid-cols-4 gap-[1em]">
          {s.kpis.map((k) => (
            <div key={k.label} className={`${W.card} p-[1em]`}>
              <p className={`${W.mono} text-[0.58em] text-[var(--w-muted)]`}>{k.label}</p>
              <p className={`${W.heading} mt-[0.35em] text-[1.45em]`}>{k.value}</p>
              {k.delta ? (
                <p className={`mt-[0.25em] text-[0.68em] font-semibold ${k.up === false ? "text-[var(--w-muted)]" : "text-[var(--w-accent)]"}`}>
                  {k.delta}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        {s.chart ? (
          <div className={`${W.card} mt-[1em] p-[1.2em]`}>
            <div className="flex items-center justify-between">
              <p className={`${W.mono} text-[0.6em] text-[var(--w-muted)]`}>{s.chart.label}</p>
              <span className="flex gap-[0.5em]">
                <i className="block h-[0.5em] w-[2.4em] rounded-full bg-[var(--w-accent)]" />
                <i className="block h-[0.5em] w-[2.4em] rounded-full bg-[var(--w-line)]" />
              </span>
            </div>
            <div className="mt-[0.9em]">
              <MiniChart points={s.chart.points} type={s.chart.type} height="9em" />
            </div>
          </div>
        ) : null}
        {s.table ? (
          (() => {
            const table = s.table;
            return (
              <div className={`${W.card} mt-[1em] overflow-hidden`}>
                <div className="grid border-b border-[var(--w-line)] bg-[color-mix(in_srgb,var(--w-ink)_4%,transparent)]" style={{ gridTemplateColumns: `repeat(${table.cols.length}, 1fr)` }}>
                  {table.cols.map((c) => (
                    <span key={c} className={`${W.mono} px-[1em] py-[0.6em] text-[0.56em] text-[var(--w-muted)]`}>{c}</span>
                  ))}
                </div>
                {table.rows.map((row, ri) => (
                  <div key={ri} className="grid border-b border-[var(--w-line)] last:border-0" style={{ gridTemplateColumns: `repeat(${table.cols.length}, 1fr)` }}>
                    {row.map((cell, ci) => (
                      <span key={ci} className={`truncate px-[1em] py-[0.62em] text-[0.74em] ${ci === 0 ? "font-semibold" : "text-[var(--w-muted)]"}`}>
                        {cell}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            );
          })()
        ) : null}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 05 · Chat                                                           */
/* ------------------------------------------------------------------ */

function Chat({ s }: { s: ChatScreen }) {
  const phone = s.frame === "phone";
  return (
    <div className={phone ? "" : "grid grid-cols-[1fr_30%]"}>
      <div className="flex flex-col">
        <header className="flex items-center gap-[0.8em] border-b border-[var(--w-line)] px-[1.6em] py-[1em]">
          <MockAvatar size="1.5em" />
          <div>
            <p className={`${W.heading} text-[0.95em]`}>{s.appName}</p>
            {s.threadTitle ? <p className="text-[0.68em] text-[var(--w-muted)]">{s.threadTitle}</p> : null}
          </div>
          <span className={`${W.mono} ml-auto flex items-center gap-[0.5em] text-[0.58em] text-[var(--w-accent)]`}>
            <i className="block size-[0.7em] rounded-full bg-[var(--w-accent)]" />
            Live
          </span>
        </header>
        <div className="flex flex-col gap-[0.9em] px-[1.6em] py-[1.4em]">
          {s.messages.map((m, i) =>
            m.role === "user" ? (
              <p key={i} className="ml-auto max-w-[78%] rounded-[var(--w-radius-card)] rounded-br-[0.3em] bg-[var(--w-accent)] px-[1em] py-[0.7em] text-[0.85em] leading-[1.45] text-[var(--w-accent-ink)]">
                {m.text}
              </p>
            ) : (
              <div key={i} className="max-w-[86%]">
                <div className={`${W.card} rounded-bl-[0.3em] px-[1em] py-[0.8em] text-[0.85em] leading-[1.5]`}>{m.text}</div>
                {m.chips ? (
                  <div className="mt-[0.6em] flex flex-wrap gap-[0.5em]">
                    {m.chips.map((c) => (
                      <span key={c} className={`${W.chip} border-[color-mix(in_srgb,var(--w-accent)_45%,transparent)] px-[0.85em] py-[0.35em] text-[0.68em] text-[var(--w-accent)]`}>
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ),
          )}
        </div>
        <div className="mt-auto px-[1.6em] pb-[1.4em]">
          <div className="flex items-center justify-between rounded-[var(--w-radius)] border border-[var(--w-line)] bg-[var(--w-surface)] px-[1.1em] py-[0.75em]">
            <span className="text-[0.82em] text-[var(--w-muted)]">{s.composer}</span>
            <span className="grid size-[1.9em] place-items-center rounded-full bg-[var(--w-accent)] text-[var(--w-accent-ink)]">
              <svg viewBox="0 0 12 12" className="h-[0.9em] w-auto" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 10 L10 2 M4.5 2 H10 V7.5" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {!phone && s.context ? (
        <aside className="border-l border-[var(--w-line)] bg-[var(--w-surface)] px-[1.3em] py-[1.4em]">
          <p className={`${W.mono} text-[0.58em] text-[var(--w-muted)]`}>{s.context.title}</p>
          <dl className="mt-[1em] flex flex-col gap-[0.9em]">
            {s.context.items.map((it) => (
              <div key={it.label} className="rounded-[calc(var(--w-radius-card)*0.8)] border border-[var(--w-line)] bg-[var(--w-bg)] p-[0.9em]">
                <dt className="text-[0.62em] text-[var(--w-muted)]">{it.label}</dt>
                <dd className={`${W.heading} mt-[0.25em] text-[0.95em]`}>{it.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 06 · Booking                                                        */
/* ------------------------------------------------------------------ */

function Booking({ s }: { s: BookingScreen }) {
  const phone = s.frame === "phone";
  const days = Array.from({ length: s.daysInMonth }, (_, i) => i + 1);
  return (
    <div className="px-[1.8em] py-[1.5em]">
      <div className="flex items-center justify-between">
        <p className={`${W.heading} text-[1.1em]`}>{s.appName}</p>
        <span className={`${W.mono} text-[0.6em] text-[var(--w-muted)]`}>Step 2 / 3</span>
      </div>
      <h3 className={`${W.heading} mt-[1em] text-[1.7em]`}>{s.title}</h3>
      <div className={`mt-[1.2em] grid gap-[1.4em] ${phone ? "" : "grid-cols-[1.2fr_0.9fr_1fr]"}`}>
        <div className={`${W.card} p-[1.1em]`}>
          <div className="flex items-center justify-between">
            <p className="text-[0.85em] font-semibold">{s.monthLabel}</p>
            <span className="flex gap-[0.6em] text-[0.8em] text-[var(--w-muted)]">
              <span>‹</span>
              <span>›</span>
            </span>
          </div>
          <div className="mt-[0.8em] grid grid-cols-7 gap-[0.35em]">
            {days.map((d) => (
              <span
                key={d}
                className={`grid aspect-square place-items-center rounded-[calc(var(--w-radius)*0.6)] text-[0.68em] ${
                  d === s.selectedDay
                    ? "bg-[var(--w-accent)] font-bold text-[var(--w-accent-ink)]"
                    : d < s.selectedDay
                      ? "text-[var(--w-line)]"
                      : "text-[var(--w-muted)]"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className={phone ? "flex flex-wrap gap-[0.55em]" : "flex flex-col gap-[0.55em]"}>
          {s.slots.map((slot, i) => (
            <span
              key={slot}
              className={`px-[1em] py-[0.55em] text-center text-[0.78em] ${
                i === s.selectedSlot ? W.btn : `${W.chip} text-[var(--w-ink)]`
              }`}
            >
              {slot}
            </span>
          ))}
        </div>
        <div className={`${W.card} flex flex-col p-[1.1em]`}>
          <p className={`${W.mono} text-[0.58em] text-[var(--w-muted)]`}>Summary</p>
          <dl className="mt-[0.8em] flex flex-col gap-[0.55em]">
            {s.summary.map((row) => (
              <div key={row.label} className="flex justify-between text-[0.78em]">
                <dt className="text-[var(--w-muted)]">{row.label}</dt>
                <dd className="font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>
          <span className={`${W.btn} mt-auto w-full py-[0.7em] text-[0.85em]`}>{s.cta}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 07 · Kanban                                                         */
/* ------------------------------------------------------------------ */

function Kanban({ s }: { s: KanbanScreen }) {
  return (
    <div className="px-[1.8em] py-[1.5em]">
      <div className="flex items-center justify-between">
        <p className={`${W.heading} flex items-center gap-[0.6em] text-[1em]`}>
          <MockAvatar size="1.2em" />
          {s.appName}
        </p>
        <span className={`${W.btn} px-[1em] py-[0.45em] text-[0.72em]`}>+ New</span>
      </div>
      <h3 className={`${W.heading} mt-[0.9em] text-[1.45em]`}>{s.title}</h3>
      <div className="mt-[1.1em] grid gap-[1em]" style={{ gridTemplateColumns: `repeat(${s.columns.length}, 1fr)` }}>
        {s.columns.map((col) => (
          <div key={col.name} className="rounded-[var(--w-radius-card)] bg-[color-mix(in_srgb,var(--w-ink)_4%,transparent)] p-[0.7em]">
            <p className={`${W.mono} flex items-center justify-between px-[0.4em] py-[0.4em] text-[0.58em] text-[var(--w-muted)]`}>
              {col.name}
              <span>{col.cards.length}</span>
            </p>
            <div className="mt-[0.4em] flex flex-col gap-[0.6em]">
              {col.cards.map((card) => (
                <div key={card.title} className={`${W.card} p-[0.85em]`}>
                  <p className="text-[0.78em] font-semibold leading-[1.35]">{card.title}</p>
                  <div className="mt-[0.55em] flex items-center justify-between">
                    {card.tag ? (
                      <span className={`${W.mono} rounded-[var(--w-radius)] bg-[color-mix(in_srgb,var(--w-accent)_16%,transparent)] px-[0.6em] py-[0.2em] text-[0.52em] text-[var(--w-accent)]`}>
                        {card.tag}
                      </span>
                    ) : <span />}
                    {card.meta ? <span className="text-[0.62em] text-[var(--w-muted)]">{card.meta}</span> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 08 · Workflow                                                       */
/* ------------------------------------------------------------------ */

const NODE_STYLES: Record<WorkflowScreen["nodes"][number]["kind"], string> = {
  trigger: "bg-[var(--w-accent)] text-[var(--w-accent-ink)] border-transparent",
  action: "bg-[var(--w-surface)] text-[var(--w-ink)] border-[var(--w-line)]",
  ai: "bg-[color-mix(in_srgb,var(--w-accent2)_22%,var(--w-surface))] text-[var(--w-ink)] border-[color-mix(in_srgb,var(--w-accent2)_55%,transparent)]",
  branch: "bg-[var(--w-bg)] text-[var(--w-ink)] border-[var(--w-line)] border-dashed",
  human: "bg-[var(--w-bg)] text-[var(--w-ink)] border-[var(--w-accent)] border-dashed",
};

const NODE_KIND_LABEL: Record<WorkflowScreen["nodes"][number]["kind"], string> = {
  trigger: "Trigger",
  action: "Action",
  ai: "AI step",
  branch: "Branch",
  human: "Human approval",
};

function Workflow({ s }: { s: WorkflowScreen }) {
  return (
    <div
      className="px-[1.8em] py-[1.5em]"
      style={{
        backgroundImage: "radial-gradient(color-mix(in srgb, var(--w-ink) 12%, transparent) 1px, transparent 1px)",
        backgroundSize: "1.4em 1.4em",
      }}
    >
      <div className="flex items-center justify-between">
        <p className={`${W.heading} text-[1em]`}>{s.appName}</p>
        <span className={`${W.mono} flex items-center gap-[0.5em] rounded-[var(--w-radius)] border border-[var(--w-line)] bg-[var(--w-surface)] px-[0.8em] py-[0.35em] text-[0.56em] text-[var(--w-accent)]`}>
          <i className="block size-[0.7em] rounded-full bg-[var(--w-accent)]" />
          Active
        </span>
      </div>
      <h3 className={`${W.heading} mt-[0.8em] text-[1.4em]`}>{s.title}</h3>
      <div className="mt-[1.4em] flex flex-wrap items-center gap-y-[1.2em]">
        {s.nodes.map((n, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-[11.5em] rounded-[var(--w-radius-card)] border p-[0.9em] shadow-[0_1.2em_2.4em_-1.4em_rgba(0,0,0,0.5)] ${NODE_STYLES[n.kind]}`}>
              <p className={`${W.mono} text-[0.5em] opacity-70`}>{NODE_KIND_LABEL[n.kind]}</p>
              <p className="mt-[0.3em] text-[0.78em] font-semibold leading-[1.3]">{n.label}</p>
              {n.sublabel ? <p className="mt-[0.25em] text-[0.62em] opacity-70">{n.sublabel}</p> : null}
            </div>
            {i < s.nodes.length - 1 ? (
              <svg viewBox="0 0 24 10" className="h-[1em] w-[2.4em] shrink-0 text-[var(--w-muted)]" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                <path d="M0 5 H20 M17 1.5 L21 5 L17 8.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
      {s.note ? (
        <p className={`${W.mono} mt-[1.5em] inline-block rounded-[var(--w-radius)] border border-[var(--w-line)] bg-[var(--w-surface)] px-[1em] py-[0.5em] text-[0.6em] text-[var(--w-muted)]`}>
          {s.note}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 09 · Editorial                                                      */
/* ------------------------------------------------------------------ */

function Editorial({ s }: { s: EditorialScreen }) {
  return (
    <div className="px-[2.6em] py-[2em]">
      <p className={`${W.heading} border-b-[0.16em] border-[var(--w-ink)] pb-[0.6em] text-center text-[1.3em] tracking-[0.08em]`}>
        {s.masthead}
      </p>
      <div className="mx-auto mt-[1.8em] max-w-[46em] text-center">
        <p className={`${W.mono} text-[0.62em] text-[var(--w-accent)]`}>{s.kicker}</p>
        <h3 className={`${W.heading} mt-[0.5em] text-[3em] leading-[1.02]`}>{s.headline}</h3>
        <p className="mt-[1em] text-[1em] leading-[1.55] text-[var(--w-muted)]">{s.standfirst}</p>
      </div>
      <div className="mt-[1.8em] grid grid-cols-3 gap-[0.7em]">
        {s.figureTones.map((tone, i) => (
          <div key={i} className={`${i === 0 ? "col-span-2 row-span-2" : ""} overflow-hidden rounded-[var(--w-radius-card)]`} style={{ background: tone, aspectRatio: i === 0 ? "auto" : "4/3" }} />
        ))}
      </div>
      {s.figureCaption ? (
        <p className={`${W.mono} mt-[0.7em] text-[0.58em] text-[var(--w-muted)]`}>{s.figureCaption}</p>
      ) : null}
      <div className="mt-[1.8em] grid grid-cols-3 gap-[1.8em]">
        <p className="text-[0.78em] leading-[1.65] text-[var(--w-muted)]">
          <span className={`${W.heading} float-left mr-[0.18em] text-[2.6em] leading-[0.8] text-[var(--w-ink)]`}>
            {s.columns[0]?.charAt(0)}
          </span>
          {s.columns[0]?.slice(1)}
        </p>
        <blockquote className={`${W.heading} border-y-[0.14em] border-[var(--w-accent)] py-[0.9em] text-center text-[1.25em] leading-[1.25]`}>
          “{s.pullquote}”
        </blockquote>
        <p className="text-[0.78em] leading-[1.65] text-[var(--w-muted)]">{s.columns[1]}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 10 · Campaign                                                       */
/* ------------------------------------------------------------------ */

const TILE_RATIOS: Record<CampaignScreen["tiles"][number]["format"], string> = {
  story: "9/14",
  square: "1/1",
  wide: "16/9",
};

function Campaign({ s }: { s: CampaignScreen }) {
  return (
    <div className="bg-transparent">
      <div className="grid grid-cols-6 items-end gap-[1em]">
        {s.tiles.map((tile, i) => {
          const span = tile.format === "wide" ? "col-span-4" : tile.format === "square" ? "col-span-2" : "col-span-2";
          return (
            <div
              key={i}
              className={`${span} relative flex flex-col justify-end overflow-hidden rounded-[var(--w-radius-card)] border border-[var(--w-line)] p-[1.3em]`}
              style={{
                aspectRatio: TILE_RATIOS[tile.format],
                background:
                  i % 3 === 0
                    ? "linear-gradient(160deg, var(--w-accent), color-mix(in srgb, var(--w-accent2) 80%, #000))"
                    : i % 3 === 1
                      ? "var(--w-surface)"
                      : "linear-gradient(200deg, color-mix(in srgb, var(--w-ink) 90%, var(--w-accent2)), var(--w-bg))",
              }}
            >
              <span className={`${W.mono} absolute left-[1.1em] top-[1.1em] text-[0.55em] ${i % 3 === 0 ? "text-[var(--w-accent-ink)]" : "text-[var(--w-muted)]"}`}>
                {tile.badge ?? s.title}
              </span>
              <p
                className={`${W.heading} text-[1.5em] leading-[1.02] ${
                  i % 3 === 0 ? "text-[var(--w-accent-ink)]" : i % 3 === 1 ? "text-[var(--w-ink)]" : "text-[var(--w-bg)]"
                }`}
                style={i % 3 === 2 ? { color: "var(--w-bg)", filter: "invert(0)" } : undefined}
              >
                {tile.headline}
              </p>
              {tile.sub ? (
                <p className={`mt-[0.4em] text-[0.72em] ${i % 3 === 0 ? "text-[var(--w-accent-ink)] opacity-80" : "text-[var(--w-muted)]"}`}>
                  {tile.sub}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 11 · Portal                                                         */
/* ------------------------------------------------------------------ */

function Portal({ s }: { s: PortalScreen }) {
  const phone = s.frame === "phone";
  return (
    <div className={`px-[1.7em] py-[1.5em] ${phone ? "pb-[2em]" : ""}`}>
      <div className="flex items-center justify-between">
        <p className={`${W.heading} text-[1em]`}>{s.appName}</p>
        <MockAvatar size="1.6em" />
      </div>
      <h3 className={`${W.heading} mt-[1em] text-[1.7em] leading-[1.05]`}>{s.greeting}</h3>
      {s.steps ? (
        <div className="mt-[1.2em] flex items-center gap-[0.4em]">
          {s.steps.map((st, i) => (
            <div key={st.label} className="flex flex-1 items-center gap-[0.4em]">
              <span
                className={`grid size-[1.5em] shrink-0 place-items-center rounded-full text-[0.62em] font-bold ${
                  st.state === "done"
                    ? "bg-[var(--w-accent)] text-[var(--w-accent-ink)]"
                    : st.state === "active"
                      ? "border-[0.14em] border-[var(--w-accent)] text-[var(--w-accent)]"
                      : "border border-[var(--w-line)] text-[var(--w-muted)]"
                }`}
              >
                {st.state === "done" ? "✓" : i + 1}
              </span>
              <span className={`truncate text-[0.62em] ${st.state === "todo" ? "text-[var(--w-muted)]" : "font-semibold"}`}>{st.label}</span>
              {i < (s.steps?.length ?? 0) - 1 ? <span className="h-px flex-1 bg-[var(--w-line)]" /> : null}
            </div>
          ))}
        </div>
      ) : null}
      <div className={`mt-[1.2em] grid gap-[0.9em] ${phone ? "grid-cols-1" : "grid-cols-3"}`}>
        {s.cards.map((c) => (
          <div key={c.title} className={`${W.card} p-[1em]`}>
            <p className={`${W.mono} text-[0.56em] text-[var(--w-muted)]`}>{c.title}</p>
            <p className={`${W.heading} mt-[0.35em] text-[1.35em]`}>{c.value}</p>
            {c.sub ? <p className="mt-[0.2em] text-[0.68em] text-[var(--w-muted)]">{c.sub}</p> : null}
          </div>
        ))}
      </div>
      <p className={`${W.mono} mt-[1.3em] text-[0.58em] text-[var(--w-muted)]`}>{s.listTitle ?? "Recent activity"}</p>
      <div className="mt-[0.6em] flex flex-col">
        {s.list.map((row) => (
          <div key={row.title} className="flex items-center justify-between gap-[1em] border-b border-[var(--w-line)] py-[0.75em] last:border-0">
            <div className="min-w-0">
              <p className="truncate text-[0.8em] font-semibold">{row.title}</p>
              <p className="text-[0.66em] text-[var(--w-muted)]">{row.meta}</p>
            </div>
            <span className={`${W.mono} shrink-0 rounded-[var(--w-radius)] bg-[color-mix(in_srgb,var(--w-accent)_15%,transparent)] px-[0.7em] py-[0.3em] text-[0.55em] text-[var(--w-accent)]`}>
              {row.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 12 · Checkout                                                       */
/* ------------------------------------------------------------------ */

function Checkout({ s }: { s: CheckoutScreen }) {
  return (
    <div className="px-[2.2em] py-[1.8em]">
      <div className="flex items-center justify-between">
        <p className={`${W.heading} text-[1.1em]`}>{s.appName}</p>
        <div className="flex items-center gap-[0.7em]">
          {s.steps.map((st, i) => (
            <span key={st} className={`${W.mono} flex items-center gap-[0.7em] text-[0.58em] ${i === s.activeStep ? "text-[var(--w-accent)]" : "text-[var(--w-muted)]"}`}>
              {st}
              {i < s.steps.length - 1 ? <i className="block h-px w-[1.6em] bg-[var(--w-line)]" /> : null}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-[1.5em] grid grid-cols-[1.1fr_0.9fr] gap-[1.6em]">
        <div className="flex flex-col gap-[0.8em]">
          {s.fields.map((f, i) => (
            <div key={f} className={`rounded-[calc(var(--w-radius)*0.8)] border px-[1em] py-[0.75em] ${i === 0 ? "border-[var(--w-accent)]" : "border-[var(--w-line)]"}`}>
              <p className={`${W.mono} text-[0.5em] text-[var(--w-muted)]`}>{f}</p>
              <span className={`mt-[0.3em] block h-[0.7em] rounded-full ${i === 0 ? "w-2/3 bg-[color-mix(in_srgb,var(--w-ink)_28%,transparent)]" : "w-1/3 bg-[var(--w-line)]"}`} />
            </div>
          ))}
        </div>
        <div className={`${W.card} flex flex-col p-[1.2em]`}>
          <p className={`${W.mono} text-[0.58em] text-[var(--w-muted)]`}>Order summary</p>
          <div className="mt-[0.8em] flex flex-col gap-[0.65em]">
            {s.items.map((it) => (
              <div key={it.name} className="flex items-start justify-between gap-[1em] text-[0.78em]">
                <span>
                  <span className="font-semibold">{it.name}</span>
                  {it.detail ? <span className="block text-[0.85em] text-[var(--w-muted)]">{it.detail}</span> : null}
                </span>
                <span className="shrink-0">{it.price}</span>
              </div>
            ))}
          </div>
          <dl className="mt-[0.9em] border-t border-[var(--w-line)] pt-[0.8em]">
            {s.totals.map((row, i) => (
              <div key={row.label} className={`flex justify-between py-[0.2em] ${i === s.totals.length - 1 ? `${W.heading} text-[0.95em]` : "text-[0.75em] text-[var(--w-muted)]"}`}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <span className={`${W.btn} mt-[1.1em] w-full py-[0.8em] text-[0.9em]`}>{s.cta}</span>
          {s.note ? <p className={`${W.mono} mt-[0.8em] text-center text-[0.52em] text-[var(--w-muted)]`}>{s.note}</p> : null}
        </div>
      </div>
    </div>
  );
}
