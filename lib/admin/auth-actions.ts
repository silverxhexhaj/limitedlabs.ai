"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ADMIN_COOKIE,
  ADMIN_EMAIL_COOKIE,
  getAdminSessionToken,
  getExpectedAdminEmail,
  getExpectedAdminPassword,
} from "./auth";

export type SignInResult = { ok: true } | { ok: false; error: string };

export async function signIn(email: string, password: string): Promise<SignInResult> {
  const trimmedEmail = email.trim().toLowerCase();
  if (!trimmedEmail || !password.trim()) {
    return { ok: false, error: "Email and password are required." };
  }

  const expectedPassword = getExpectedAdminPassword();
  const sessionToken = getAdminSessionToken();

  if (!expectedPassword || !sessionToken) {
    return { ok: false, error: "Admin authentication is not configured." };
  }

  if (trimmedEmail !== getExpectedAdminEmail() || password !== expectedPassword) {
    return { ok: false, error: "Invalid email or password." };
  }

  const jar = await cookies();
  jar.set(ADMIN_COOKIE, sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });
  jar.set(ADMIN_EMAIL_COOKIE, trimmedEmail, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { ok: true };
}

export async function signOut(): Promise<void> {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE);
  jar.delete(ADMIN_EMAIL_COOKIE);
  redirect("/admin/login");
}
