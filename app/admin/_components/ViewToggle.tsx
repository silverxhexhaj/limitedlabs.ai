"use client";

export type ProjectsViewMode = "grouped" | "flat";

type ViewToggleProps = {
  value: ProjectsViewMode;
  onChange: (mode: ProjectsViewMode) => void;
};

export default function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-border-strong bg-page p-1"
      role="group"
      aria-label="Projects view mode"
    >
      {(
        [
          { id: "grouped" as const, label: "Grouped" },
          { id: "flat" as const, label: "Flat" },
        ] as const
      ).map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={`rounded-full px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] transition-colors ${
            value === opt.id
              ? "bg-ink text-page"
              : "text-ink-muted hover:text-ink"
          }`}
          aria-pressed={value === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
