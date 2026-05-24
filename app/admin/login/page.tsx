import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign in — Limited Labs Admin",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-[var(--gutter)] py-12">
      <div className="w-full max-w-[400px]">
        <Link href="/" className="mb-10 inline-flex items-center gap-3 text-ink">
          <Image
            src="/ll-logo-white.png"
            alt=""
            width={32}
            height={36}
            className="site-logo-img h-8 w-auto"
          />
          <span className="font-display text-lg font-bold tracking-[-0.02em]">Limited Labs</span>
        </Link>

        <div className="rounded-[22px] border border-border bg-surface p-8">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
            Admin
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-ink">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Authorized Limited Labs staff only. Sign in with your admin account.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
