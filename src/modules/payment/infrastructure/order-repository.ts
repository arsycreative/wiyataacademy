import { createClient } from "@supabase/supabase-js";

/** Supabase Admin client (service role) — server-side only */
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "[Supabase Admin] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing.",
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export interface OrderRecord {
  id?: string;
  user_id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  amount: number;
  status: string;
  payment_method?: string;
  midtrans_transaction_id?: string;
  midtrans_status?: string;
  snap_token?: string;
  snap_redirect_url?: string;
  paid_at?: string;
  metadata?: Record<string, unknown>;
}

export async function createOrder(order: OrderRecord): Promise<void> {
  const admin = getAdminClient();
  const { error } = await admin.from("orders").insert(order);
  if (error) throw new Error(`[DB] createOrder failed: ${error.message}`);
}

export async function updateOrderByOrderId(
  orderId: string,
  patch: Partial<OrderRecord>,
): Promise<void> {
  const admin = getAdminClient();
  const { error } = await admin
    .from("orders")
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq("order_id", orderId);
  if (error) throw new Error(`[DB] updateOrder failed: ${error.message}`);
}

export async function getOrderByOrderId(
  orderId: string,
): Promise<OrderRecord | null> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from("orders")
    .select("*")
    .eq("order_id", orderId)
    .single();
  if (error) return null;
  return data as OrderRecord;
}

export async function getUserOrders(userId: string): Promise<OrderRecord[]> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as OrderRecord[];
}

export async function activateSubscription(
  userId: string,
  orderId: string,
  productId: string,
): Promise<void> {
  const admin = getAdminClient();
  const { error } = await admin.from("subscriptions").upsert(
    {
      user_id: userId,
      order_id: orderId,
      product_id: productId,
      plan: "lifetime",
      status: "active",
      starts_at: new Date().toISOString(),
      expires_at: null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,product_id" },
  );
  if (error)
    throw new Error(`[DB] activateSubscription failed: ${error.message}`);
}

export async function hasActiveSubscription(
  userId: string,
  productId: string,
): Promise<boolean> {
  const admin = getAdminClient();
  const { data } = await admin
    .from("subscriptions")
    .select("id")
    .eq("user_id", userId)
    .eq("product_id", productId)
    .eq("status", "active")
    .maybeSingle();
  return !!data;
}

