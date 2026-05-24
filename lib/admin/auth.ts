import { cookies } from "next/headers";

import type { AdminUser } from "./types";

export const ADMIN_COOKIE = "ll_admin";
export const ADMIN_EMAIL_COOKIE = "ll_admin_email";

const DEFAULT_ADMIN_EMAIL = "admin@limitedlabs.co";
const DEV_SESSION_TOKEN = "local-dev-session-token";

const STUB_ADMIN: AdminUser = {
  email: DEFAULT_ADMIN_EMAIL,
  name: "Limited Labs",
};

export function getExpectedAdminEmail() {
  return process.env.ADMIN_EMAIL?.trim().toLowerCase() || DEFAULT_ADMIN_EMAIL;
}

export function getExpectedAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? null;
}

export function getAdminSessionToken() {
  if (process.env.ADMIN_SESSION_TOKEN) return process.env.ADMIN_SESSION_TOKEN;
  return process.env.NODE_ENV === "production" ? null : DEV_SESSION_TOKEN;
}

export function isValidAdminSessionToken(token?: string) {
  const expectedToken = getAdminSessionToken();
  return Boolean(expectedToken && token === expectedToken);
}

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  const jar = await cookies();
  if (!isValidAdminSessionToken(jar.get(ADMIN_COOKIE)?.value)) return null;
  const email = jar.get(ADMIN_EMAIL_COOKIE)?.value ?? STUB_ADMIN.email;
  return { ...STUB_ADMIN, email };
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return isValidAdminSessionToken(jar.get(ADMIN_COOKIE)?.value);
}
