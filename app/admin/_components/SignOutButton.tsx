"use client";

import { signOut } from "@/lib/admin/auth-actions";

export default function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="w-full rounded-full border border-border-strong px-4 py-2.5 text-left font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
      >
        Sign out
      </button>
    </form>
  );
}
