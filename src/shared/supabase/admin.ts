import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./env";

export interface AdminClientOptions {
  /** Fallback ke anon key bila service role key belum diset di environment. */
  allowAnonFallback?: boolean;
}

export function hasSupabaseServiceRoleKey(): boolean {
  return Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY?.trim());
}

/**
 * Membuat Supabase client server-side dengan service_role key (bypass RLS).
 * Jangan pernah dipanggil di client component.
 */
export function createSupabaseAdminClient(
  options: AdminClientOptions = {},
): SupabaseClient | null {
  const { url, anonKey } = getSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";

  const key = serviceRoleKey || (options.allowAnonFallback ? anonKey : "");
  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

