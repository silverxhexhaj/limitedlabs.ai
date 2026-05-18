import { cookies } from "next/headers";

import type { AdminUser } from "./types";

export const ADMIN_COOKIE = "ll_admin";
export const ADMIN_EMAIL_COOKIE = "ll_admin_email";

const STUB_ADMIN: AdminUser = {
  email: "admin@limitedlabs.co",
  name: "Limited Labs",
};

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  const jar = await cookies();
  if (jar.get(ADMIN_COOKIE)?.value !== "1") return null;
  const email = jar.get(ADMIN_EMAIL_COOKIE)?.value ?? STUB_ADMIN.email;
  return { ...STUB_ADMIN, email };
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(ADMIN_COOKIE)?.value === "1";
}
