import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ADMIN_COOKIE } from "@/lib/admin/auth";

function getExpectedSessionToken() {
  if (process.env.ADMIN_SESSION_TOKEN) return process.env.ADMIN_SESSION_TOKEN;
  return process.env.NODE_ENV === "production" ? null : "local-dev-session-token";
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === "limitedlabs.ai") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.hostname = "www.limitedlabs.ai";
    return NextResponse.redirect(redirectUrl, 308);
  }

  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    const hasSession = request.cookies.get(ADMIN_COOKIE)?.value === getExpectedSessionToken();
    if (hasSession) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  const hasSession = request.cookies.get(ADMIN_COOKIE)?.value === getExpectedSessionToken();
  if (!hasSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
