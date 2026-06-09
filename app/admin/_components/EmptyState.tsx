import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-[20px] border border-dashed border-border-strong bg-surface/50 px-5 py-10 text-center sm:px-8 sm:py-12">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
        {title}
      </p>
      {description ? (
        <p className="mx-auto mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  );
}
