import "server-only";

import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

import { getSupabaseConfig } from "./env";

/**
 * Membuat Supabase client per-request untuk Server Components, Server Actions,
 * dan Route Handlers dengan membaca/menulis cookie sesi Next.js.
 */
export async function createSupabaseServerClient(): Promise<SupabaseClient | null> {
  const { url, anonKey, isConfigured } = getSupabaseConfig();
  if (!isConfigured) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Pemanggilan dari Server Component hanya boleh membaca cookie;
          // pembaruan token ditangani oleh proxy.ts.
        }
      },
    },
  });
}

