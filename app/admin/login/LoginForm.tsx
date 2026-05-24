"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { signIn } from "@/lib/admin/auth-actions";

export default function LoginForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    startTransition(async () => {
      const result = await signIn(email, password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin");
      router.refresh();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
          Email
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@limitedlabs.co"
          className="rounded-xl border border-border-strong bg-page px-4 py-3 text-sm text-ink outline-none transition-[border-color] focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
          Password
        </span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className="rounded-xl border border-border-strong bg-page px-4 py-3 text-sm text-ink outline-none transition-[border-color] focus:border-ink"
        />
      </label>
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-page transition-[background-color,opacity] hover:bg-accent disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
