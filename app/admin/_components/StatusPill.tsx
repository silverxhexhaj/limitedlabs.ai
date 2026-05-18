import type { ProjectStatus } from "@/lib/admin/types";

const LABELS: Record<ProjectStatus, string> = {
  draft: "Draft",
  "in-progress": "In progress",
  shipped: "Shipped",
  "on-hold": "On hold",
};

const STYLES: Record<ProjectStatus, string> = {
  draft: "border-border-strong text-ink-muted bg-page",
  "in-progress": "border-ink bg-ink text-page",
  shipped: "border-accent bg-accent text-page",
  "on-hold": "border-dashed border-border-strong text-ink-muted bg-transparent",
};

type StatusPillProps = {
  status: ProjectStatus;
  className?: string;
};

export default function StatusPill({ status, className = "" }: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] ${STYLES[status]} ${className}`}
    >
      {LABELS[status]}
    </span>
  );
}
