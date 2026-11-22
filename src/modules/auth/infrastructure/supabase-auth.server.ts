import "server-only";

import type { User } from "@supabase/supabase-js";

import type {
  AuthSessionUser,
  ProfileLookupResult,
  ProfileRepository,
  ProfileUpsertInput,
  ProfileWriteResult,
  UserRole,
} from "@/modules/auth/application/ports";
import { createSupabaseServerClient } from "@/shared/supabase/server";

type ProfileRow = {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role?: string | null;
};

function parseUserRole(raw: string | null | undefined): UserRole {
  if (raw === "admin" || raw === "superadmin") return raw;
  return "student";
}

function isMissingProfilesTableError(
  error: { code?: string; message?: string } | null,
): boolean {
  if (!error) return false;
  return (
    error.code === "42P01" ||
    error.code === "42703" ||
    error.code === "PGRST204" ||
    error.code === "PGRST205" ||
    Boolean(error.message?.toLowerCase().includes("profiles"))
  );
}

export function mapSupabaseUser(user: User): AuthSessionUser {
  const fullName =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    "";
  const avatarUrl =
    (user.user_metadata?.avatar_url as string | undefined) ??
    (user.user_metadata?.picture as string | undefined) ??
    null;
  const providers = Array.isArray(user.app_metadata?.providers)
    ? (user.app_metadata.providers as string[])
    : user.app_metadata?.provider
      ? [String(user.app_metadata.provider)]
      : [];

  return {
    id: user.id,
    email: user.email ?? "",
    fullName,
    avatarUrl,
    providers,
    createdAt: user.created_at,
  };
}

export async function getSupabaseAuthenticatedUser(): Promise<AuthSessionUser | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? mapSupabaseUser(user) : null;
}

export async function updateSupabaseAuthDisplayName(
  fullName: string,
): Promise<{ error: string | null }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { error: "Konfigurasi Supabase belum tersedia." };
  }

  const { error } = await supabase.auth.updateUser({
    data: { full_name: fullName },
  });

  return { error: error ? error.message : null };
}

export function createSupabaseProfileRepository(): ProfileRepository {
  return {
    async findById(userId: string): Promise<ProfileLookupResult> {
      const supabase = await createSupabaseServerClient();
      if (!supabase) {
        return {
          data: null,
          schemaMissing: false,
          error: "Konfigurasi Supabase belum tersedia.",
        };
      }

      let { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, avatar_url, role")
        .eq("id", userId)
        .maybeSingle<ProfileRow>();

      // Fallback aman bila migrasi 004_admin_roles.sql (kolom role) belum dijalankan
      if (error && (error.code === "42703" || error.message?.includes("role"))) {
        const legacy = await supabase
          .from("profiles")
          .select("id, email, full_name, avatar_url")
          .eq("id", userId)
          .maybeSingle<ProfileRow>();
        data = legacy.data;
        error = legacy.error;
      }

      if (error) {
        return {
          data: null,
          schemaMissing: isMissingProfilesTableError(error),
          error: error.message,
        };
      }

      if (!data) {
        return { data: null, schemaMissing: false, error: null };
      }

      return {
        data: {
          id: data.id,
          email: data.email,
          fullName: data.full_name,
          avatarUrl: data.avatar_url,
          role: parseUserRole(data.role),
        },
        schemaMissing: false,
        error: null,
      };
    },

    async upsert(input: ProfileUpsertInput): Promise<ProfileWriteResult> {
      const supabase = await createSupabaseServerClient();
      if (!supabase) {
        return {
          ok: false,
          schemaMissing: false,
          error: "Konfigurasi Supabase belum tersedia.",
        };
      }

      const payload: Record<string, string | null> = {
        id: input.id,
      };
      if (input.email !== undefined) payload.email = input.email;
      if (input.fullName !== undefined) payload.full_name = input.fullName;
      if (input.avatarUrl !== undefined) payload.avatar_url = input.avatarUrl;

      const { error } = await supabase
        .from("profiles")
        .upsert(payload, { onConflict: "id" });

      if (error) {
        return {
          ok: false,
          schemaMissing: isMissingProfilesTableError(error),
          error: error.message,
        };
      }

      return { ok: true, schemaMissing: false, error: null };
    },
  };
}
