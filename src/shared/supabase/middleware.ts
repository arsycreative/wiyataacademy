import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { APP_ROUTES } from "@/shared/constants/app";
import { getSupabaseConfig } from "./env";

const PROTECTED_PATHS = [APP_ROUTES.account];
const AUTH_GUEST_ONLY_PATHS = [APP_ROUTES.login, APP_ROUTES.register];

function isPathMatch(pathname: string, prefixes: readonly string[]) {
  return prefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function resolveSafeRedirect(nextParam: string | null): string {
  if (!nextParam || !nextParam.startsWith("/") || nextParam.startsWith("//")) {
    return APP_ROUTES.account;
  }
  return nextParam;
}

export async function updateSupabaseSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const { url, anonKey, isConfigured } = getSupabaseConfig();
  if (!isConfigured) {
    return response;
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
        Object.entries(headers).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      },
    },
  });

  let user = null;
  try {
    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch {
    user = null;
  }

  const { pathname, search } = request.nextUrl;

  if (!user && isPathMatch(pathname, PROTECTED_PATHS)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = APP_ROUTES.login;
    loginUrl.search = "";
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isPathMatch(pathname, AUTH_GUEST_ONLY_PATHS)) {
    const targetPath = resolveSafeRedirect(request.nextUrl.searchParams.get("next"));
    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  return response;
}

