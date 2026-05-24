import type { ReactNode } from "react";

import AdminTopbar from "../../_components/AdminTopbar";
import StatCard from "../../_components/StatCard";
import { OPERATOR_ITEMS, OPERATOR_STATS, type OperatorItem } from "../../operatorsData";

const statusClass: Record<OperatorItem["status"], string> = {
  ready: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  draft: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  scheduled: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

const priorityClass: Record<OperatorItem["priority"], string> = {
  P0: "bg-ink text-page",
  P1: "border border-border-strong text-ink-muted",
  P2: "border border-border text-ink-faint",
};

function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] ${className}`}
    >
      {children}
    </span>
  );
}

function OperatorCard({ operator }: { operator: OperatorItem }) {
  return (
    <article className="shadcn-inspired rounded-2xl border border-border bg-surface p-5 shadow-sm transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-faint">
            {operator.category} / {operator.owner}
          </p>
          <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-ink">
            {operator.name}
          </h2>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Pill className={priorityClass[operator.priority]}>{operator.priority}</Pill>
          <Pill className={`border ${statusClass[operator.status]}`}>{operator.status}</Pill>
        </div>
      </div>

      <p className="min-h-[66px] text-sm leading-relaxed text-ink-muted">{operator.outcome}</p>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-faint">
            Manages
          </p>
          <div className="flex flex-wrap gap-1.5">
            {operator.manages.map((item) => (
              <Pill key={item} className="border border-border text-ink-muted">
                {item}
              </Pill>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-faint">
            Inputs
          </p>
          <ul className="flex flex-col gap-1.5 text-[13px] text-ink-muted">
            {operator.inputs.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-page p-4">
        <p className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-faint">
          Next action
        </p>
        <p className="text-sm text-ink-muted">{operator.nextAction}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-page transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-accent"
        >
          Open playbook
        </button>
        <button
          type="button"
          className="rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink transition-[border-color] duration-200 hover:border-ink"
        >
          Queue run
        </button>
      </div>
    </article>
  );
}

export default function AdminOperatorsPage() {
  const installQueue = OPERATOR_ITEMS.filter((operator) => operator.status !== "ready");
  const weeklyOperators = OPERATOR_ITEMS.filter((operator) => operator.cadence === "weekly");

  return (
    <>
      <AdminTopbar
        title="Operators"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Operators" }]}
      />
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <section className="mb-8 rounded-[24px] border border-border bg-surface p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                shadcn-inspired operator console
              </p>
              <h1 className="font-display text-[clamp(32px,5vw,72px)] font-bold leading-[0.92] tracking-[-0.045em] text-ink">
                Operator Command Center
              </h1>
              <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-ink-muted">
                Manage the product-analysis, SEO, conversion, marketplace, and weekly operating
                playbooks that make Limited Labs act like a strategic operator — not just a website.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Operators" value={OPERATOR_STATS.total} />
              <StatCard label="Ready" value={OPERATOR_STATS.ready} />
              <StatCard label="Scheduled" value={OPERATOR_STATS.scheduled} />
              <StatCard label="P0" value={OPERATOR_STATS.p0} hint="Core stack" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
                  Beast-mode stack
                </p>
                <p className="mt-1 text-sm text-ink-faint">
                  Product analyzers, growth operators, and execution playbooks.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(OPERATOR_ITEMS.map((item) => item.category))).map((category) => (
                  <Pill key={category} className="border border-border-strong text-ink-muted">
                    {category}
                  </Pill>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
              {OPERATOR_ITEMS.map((operator) => (
                <OperatorCard key={operator.slug} operator={operator} />
              ))}
            </div>
          </section>

          <aside className="flex flex-col gap-5">
            <section className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-ink">
                Install queue
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                These operators still need playbook files, connected data sources, or cron approval before
                they become fully active.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {installQueue.map((operator) => (
                  <div key={operator.slug} className="rounded-xl border border-border bg-page p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="font-medium text-ink">{operator.name}</p>
                      <Pill className={priorityClass[operator.priority]}>{operator.priority}</Pill>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                      {operator.status} · {operator.cadence}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-ink">
                Weekly operating rhythm
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Suggested Monday cadence: inspect what changed, identify friction, pick the highest
                leverage action, then ship or queue it.
              </p>
              <ol className="mt-5 flex flex-col gap-3">
                {weeklyOperators.map((operator, index) => (
                  <li key={operator.slug} className="flex gap-3 rounded-xl border border-border bg-page p-4">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink font-mono text-[10px] text-page">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium text-ink">{operator.name}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                        {operator.nextAction}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
