import "server-only";

import { isAdminRole } from "@/modules/admin/domain/types";
import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import {
  resolveUserEntitlements,
  type UserEntitlements,
} from "@/modules/payment/domain/entitlements";
import type { OrderRecord } from "@/modules/payment/infrastructure/order-repository";
import { createSupabaseAdminClient } from "@/shared/supabase/admin";
import { createSupabaseServerClient } from "@/shared/supabase/server";

export interface UserSubscriptionItem {
  id: string;
  order_id: string;
  product_id: string;
  plan: string;
  status: "active" | "expired" | "cancelled";
  starts_at: string;
  expires_at: string | null;
}

export interface UserBillingSummary {
  subscriptions: UserSubscriptionItem[];
  orders: OrderRecord[];
}

/**
 * Mengambil hak akses fitur pengguna saat ini dari database (graceful fallback bila belum migrasi).
 */
export async function getCurrentUserEntitlements(): Promise<UserEntitlements> {
  const user = await getAuthenticatedUser();
  if (!user) {
    return resolveUserEntitlements({
      isAuthenticated: false,
      isAdmin: false,
      activeProductIds: [],
    });
  }

  const client =
    createSupabaseAdminClient() ?? (await createSupabaseServerClient());
  if (!client) {
    return resolveUserEntitlements({
      isAuthenticated: true,
      isAdmin: false,
      activeProductIds: [],
    });
  }

  const [profileRes, subsRes] = await Promise.all([
    client
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role?: string | null }>(),
    client
      .from("subscriptions")
      .select("product_id")
      .eq("user_id", user.id)
      .eq("status", "active"),
  ]);

  const isAdmin = isAdminRole(profileRes.data?.role);
  const activeProductIds = (
    (subsRes.data ?? []) as Array<{ product_id: string }>
  ).map((s) => s.product_id);

  return resolveUserEntitlements({
    isAuthenticated: true,
    isAdmin,
    activeProductIds,
  });
}

/**
 * Mengambil paket aktif & riwayat transaksi pengguna untuk halaman `/akun`.
 */
export async function getUserBillingSummary(
  userId: string,
): Promise<UserBillingSummary> {
  const client =
    createSupabaseAdminClient() ?? (await createSupabaseServerClient());
  if (!client) {
    return { subscriptions: [], orders: [] };
  }

  const [subsRes, ordersRes] = await Promise.all([
    client
      .from("subscriptions")
      .select("id, order_id, product_id, plan, status, starts_at, expires_at")
      .eq("user_id", userId)
      .order("starts_at", { ascending: false }),
    client
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(15),
  ]);

  return {
    subscriptions: (subsRes.data ?? []) as UserSubscriptionItem[],
    orders: (ordersRes.data ?? []) as OrderRecord[],
  };
}

