"use client";

import { SERVICE_ITEMS } from "@/app/services/servicesData";
import type { ServiceCategory } from "@/app/services/servicesData";

export type ServiceFilterValue = ServiceCategory | "all";

type ServiceFilterChipsProps = {
  value: ServiceFilterValue;
  onChange: (value: ServiceFilterValue) => void;
};

export default function ServiceFilterChips({ value, onChange }: ServiceFilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by service">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={chipClass(value === "all")}
        aria-pressed={value === "all"}
      >
        All
      </button>
      {SERVICE_ITEMS.map((service) => (
        <button
          key={service.slug}
          type="button"
          onClick={() => onChange(service.slug as ServiceCategory)}
          className={chipClass(value === service.slug)}
          aria-pressed={value === service.slug}
        >
          {service.name}
        </button>
      ))}
    </div>
  );
}

function chipClass(active: boolean) {
  return `rounded-full border px-3 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] transition-colors ${
    active
      ? "border-ink bg-ink text-page"
      : "border-border-strong text-ink-muted hover:border-ink-muted hover:text-ink"
  }`;
}
