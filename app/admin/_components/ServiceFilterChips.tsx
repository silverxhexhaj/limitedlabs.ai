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
    <div
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0"
      role="group"
      aria-label="Filter by service"
    >
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
  return `min-h-11 shrink-0 rounded-full border px-3 py-[7px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] transition-colors ${
    active
      ? "border-ink bg-ink text-page"
      : "border-border-strong text-ink-muted hover:border-ink-muted hover:text-ink"
  }`;
}
