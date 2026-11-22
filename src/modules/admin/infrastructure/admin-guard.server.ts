import "server-only";

import { NextResponse } from "next/server";

import {
  isAdminRole,
  type AdminRole,
  type AdminSessionCheck,
} from "@/modules/admin/domain/types";
import type { AuthSessionUser, UserRole } from "@/modules/auth/application/ports";
import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import { createSupabaseAdminClient } from "@/shared/supabase/admin";
import { createSupabaseServerClient } from "@/shared/supabase/server";

function isSchemaMissingError(
  error: { code?: string; message?: string } | null,
): boolean {
  if (!error) return false;
  return (
    error.code === "42703" ||
    error.code === "42P01" ||
    error.code === "PGRST204" ||
    error.code === "PGRST205" ||
    Boolean(error.message?.toLowerCase().includes("role"))
  );
}

/**
 * Memeriksa apakah pengguna saat ini sudah login dan memiliki role `admin` atau `superadmin`.
 */
export async function getAdminSession(): Promise<AdminSessionCheck> {
  const user = await getAuthenticatedUser();
  if (!user) {
    return { authorized: false, reason: "unauthenticated" };
  }

  const client =
    createSupabaseAdminClient() ?? (await createSupabaseServerClient());

  if (!client) {
    return { authorized: false, reason: "schema_missing", user };
  }

  const { data, error } = await client
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<{ role: string | null }>();

  if (error) {
    if (isSchemaMissingError(error)) {
      return { authorized: false, reason: "schema_missing", user };
    }
    return { authorized: false, reason: "forbidden", user, role: "student" };
  }

  const rawRole = data?.role ?? "student";
  if (!isAdminRole(rawRole)) {
    return {
      authorized: false,
      reason: "forbidden",
      user,
      role: rawRole as UserRole,
    };
  }

  return {
    authorized: true,
    user,
    role: rawRole,
  };
}

export type AdminApiGuardResult =
  | { ok: true; user: AuthSessionUser; role: AdminRole }
  | { ok: false; response: NextResponse };

/**
 * Guard untuk Route Handler `/api/admin/*`.
 */
export async function requireAdminApi(options?: {
  requireSuperAdmin?: boolean;
}): Promise<AdminApiGuardResult> {
  const session = await getAdminSession();

  if (!session.authorized) {
    if (session.reason === "unauthenticated") {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Silakan login terlebih dahulu." },
          { status: 401 },
        ),
      };
    }

    return {
      ok: false,
      response: NextResponse.json(
        { error: "Akses ditolak. Hanya untuk admin." },
        { status: 403 },
      ),
    };
  }

  if (options?.requireSuperAdmin && session.role !== "superadmin") {
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Hanya Super Admin yang dapat melakukan tindakan ini." },
        { status: 403 },
      ),
    };
  }

  return {
    ok: true,
    user: session.user,
    role: session.role,
  };
}

