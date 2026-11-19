import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "./env";

let cachedClient: SupabaseClient | null = null;

/**
 * Mengembalikan browser client Supabase singleton untuk komponen Client.
 * Mengembalikan null apabila environment variable Supabase belum diisi.
 */
export function createSupabaseBrowserClient(): SupabaseClient | null {
  const { url, anonKey, isConfigured } = getSupabaseConfig();
  if (!isConfigured) {
    return null;
  }

  if (typeof window === "undefined") {
    return createBrowserClient(url, anonKey);
  }

  if (!cachedClient) {
    cachedClient = createBrowserClient(url, anonKey);
  }

  return cachedClient;
}

