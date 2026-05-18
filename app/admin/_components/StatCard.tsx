type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
};

export default function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <article className="rounded-[20px] border border-border bg-surface p-5">
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink">{value}</p>
      {hint ? <p className="mt-1 text-[13px] text-ink-faint">{hint}</p> : null}
    </article>
  );
}
