import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-constants";
import { BASE_PATH } from "@/lib/site";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const path =
    BASE_PATH && pathname.startsWith(BASE_PATH)
      ? pathname.slice(BASE_PATH.length) || "/"
      : pathname;

  const expected = process.env.ADMIN_SESSION_TOKEN;
  const session = request.cookies.get(ADMIN_COOKIE)?.value;
  const authenticated = Boolean(expected && session && session === expected);

  if (path === "/admin/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL(`${BASE_PATH}/admin`, request.url));
    }
    return NextResponse.next();
  }

  if (!authenticated) {
    return NextResponse.redirect(new URL(`${BASE_PATH}/admin/login`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/next-step/admin", "/next-step/admin/:path*"],
};
