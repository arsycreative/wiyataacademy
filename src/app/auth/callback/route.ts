import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

import {
  mapAuthErrorMessage,
  sanitizeRedirectPath,
} from "@/modules/auth/domain/auth-schema";
import {
  createProfileRepository,
  getAuthenticatedUser,
} from "@/modules/auth/infrastructure/profile-repository.server";
import { APP_ROUTES } from "@/shared/constants/app";
import { createSupabaseServerClient } from "@/shared/supabase/server";

const AUTH_NEXT_COOKIE = "wa_auth_next";

function getSafeOrigin(request: NextRequest, fallbackOrigin: string): string {
  const rawForwardedHost = request.headers.get("x-forwarded-host");
  const forwardedHost = rawForwardedHost?.split(",")[0]?.trim();
  const isLocalEnv = process.env.NODE_ENV === "development";
  if (!isLocalEnv && forwardedHost) {
    const rawForwardedProto = request.headers.get("x-forwarded-proto") ?? "https";
    const forwardedProto = rawForwardedProto.split(",")[0]?.trim() || "https";
    return `${forwardedProto}://${forwardedHost}`;
  }
  return fallbackOrigin;
}

function readNextFromCookie(rawCookie: string | undefined): string | null {
  if (!rawCookie) return null;
  try {
    return decodeURIComponent(rawCookie);
  } catch {
    return rawCookie;
  }
}

function redirectAndClearAuthNext(url: URL): NextResponse {
  const response = NextResponse.redirect(url);
  response.cookies.set(AUTH_NEXT_COOKIE, "", {
    path: "/",
    maxAge: 0,
  });
  return response;
}

async function syncPortableUserProfile() {
  try {
    const authUser = await getAuthenticatedUser();
    if (!authUser) return;
    const profileRepo = createProfileRepository();
    await profileRepo.upsert({
      id: authUser.id,
      email: authUser.email,
      fullName:
        authUser.fullName ||
        (authUser.email ? authUser.email.split("@")[0] : null),
      avatarUrl: authUser.avatarUrl,
    });
  } catch {
    // Tetap lanjutkan login meski tabel profil belum dimigrasi
  }
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const oauthError =
    searchParams.get("error_description") ?? searchParams.get("error");
  const rawNext =
    searchParams.get("next") ??
    readNextFromCookie(request.cookies.get(AUTH_NEXT_COOKIE)?.value);
  const nextPath = sanitizeRedirectPath(rawNext, APP_ROUTES.tiuPractice);

  const safeOrigin = getSafeOrigin(request, origin);

  if (oauthError) {
    const errorUrl = new URL(APP_ROUTES.login, safeOrigin);
    errorUrl.searchParams.set("error", mapAuthErrorMessage(oauthError));
    return redirectAndClearAuthNext(errorUrl);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    const errorUrl = new URL(APP_ROUTES.login, safeOrigin);
    errorUrl.searchParams.set(
      "error",
      "Konfigurasi Supabase belum tersedia di server.",
    );
    return redirectAndClearAuthNext(errorUrl);
  }

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      await syncPortableUserProfile();
      return redirectAndClearAuthNext(new URL(nextPath, safeOrigin));
    }
    const errorUrl = new URL(APP_ROUTES.login, safeOrigin);
    errorUrl.searchParams.set("error", mapAuthErrorMessage(error.message));
    return redirectAndClearAuthNext(errorUrl);
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });
    if (!error) {
      await syncPortableUserProfile();
      return redirectAndClearAuthNext(new URL(nextPath, safeOrigin));
    }
    const errorUrl = new URL(APP_ROUTES.login, safeOrigin);
    errorUrl.searchParams.set("error", mapAuthErrorMessage(error.message));
    return redirectAndClearAuthNext(errorUrl);
  }

  const fallbackUrl = new URL(APP_ROUTES.login, safeOrigin);
  fallbackUrl.searchParams.set(
    "error",
    "Tautan autentikasi tidak valid atau sudah kedaluwarsa.",
  );
  return redirectAndClearAuthNext(fallbackUrl);
}
