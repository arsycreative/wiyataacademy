import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { coreApi } from "@/lib/midtrans";
import {
  buildProductRevenueBreakdown,
  computeConversionRate,
  type AdminOrderItem,
  type AdminOverviewStats,
  type AdminSubscriptionSummary,
  type AdminUserItem,
  type OrderStatusFilter,
  type UserFilter,
} from "@/modules/admin/domain/types";
import type { UserRole } from "@/modules/auth/application/ports";
import { getProduct } from "@/modules/payment/domain/products";
import {
  mapMidtransTransactionStatus,
  type OrderStatus,
} from "@/modules/payment/domain/status";
import {
  createSupabaseAdminClient,
  hasSupabaseServiceRoleKey,
} from "@/shared/supabase/admin";
import { createSupabaseServerClient } from "@/shared/supabase/server";

type ProfileLookupRow = {
  id: string;
  email: string | null;
  full_name: string | null;
  role?: string | null;
  created_at: string;
};

type OrderRow = {
  order_id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  amount: number;
  status: string;
  payment_method: string | null;
  midtrans_transaction_id: string | null;
  midtrans_status: string | null;
  paid_at: string | null;
  created_at: string;
};

type SubscriptionRow = {
  id: string;
  user_id: string;
  order_id: string;
  product_id: string;
  plan: string;
  status: "active" | "expired" | "cancelled";
  starts_at: string;
  expires_at: string | null;
};

interface MidtransStatusPayload {
  transaction_status?: string;
  fraud_status?: string;
  payment_type?: string;
  transaction_id?: string;
}

async function getAdminDbClient(): Promise<{
  client: SupabaseClient;
  usingServiceRole: boolean;
}> {
  const serviceClient = createSupabaseAdminClient();
  if (serviceClient) {
    return { client: serviceClient, usingServiceRole: true };
  }

  const serverClient = await createSupabaseServerClient();
  if (!serverClient) {
    throw new Error("Konfigurasi Supabase belum tersedia.");
  }

  return { client: serverClient, usingServiceRole: false };
}

function isMissingTableOrColumn(
  error: { code?: string; message?: string } | null,
): boolean {
  if (!error) return false;
  return (
    error.code === "42P01" ||
    error.code === "42703" ||
    error.code === "PGRST204" ||
    error.code === "PGRST205"
  );
}

function mapOrdersWithProfiles(
  orders: OrderRow[],
  profileMap: Map<string, ProfileLookupRow>,
): AdminOrderItem[] {
  return orders.map((order) => {
    const profile = profileMap.get(order.user_id);
    return {
      order_id: order.order_id,
      user_id: order.user_id,
      user_email: profile?.email ?? null,
      user_name: profile?.full_name ?? null,
      product_id: order.product_id,
      product_name: order.product_name,
      amount: order.amount,
      status: (order.status as OrderStatus) ?? "pending",
      payment_method: order.payment_method,
      midtrans_transaction_id: order.midtrans_transaction_id,
      midtrans_status: order.midtrans_status,
      paid_at: order.paid_at,
      created_at: order.created_at,
    };
  });
}

async function fetchProfilesMapByIds(
  client: SupabaseClient,
  userIds: string[],
): Promise<Map<string, ProfileLookupRow>> {
  const map = new Map<string, ProfileLookupRow>();
  if (userIds.length === 0) return map;

  const uniqueIds = Array.from(new Set(userIds));
  const { data } = await client
    .from("profiles")
    .select("id, email, full_name, role, created_at")
    .in("id", uniqueIds);

  for (const row of (data ?? []) as ProfileLookupRow[]) {
    map.set(row.id, row);
  }
  return map;
}

async function upsertActiveSubscription(
  client: SupabaseClient,
  userId: string,
  orderId: string,
  productId: string,
): Promise<void> {
  const { error } = await client.from("subscriptions").upsert(
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
  if (error) {
    throw new Error(`Gagal mengaktifkan paket siswa: ${error.message}`);
  }
}

export async function getAdminOverviewStats(): Promise<AdminOverviewStats> {
  const { client, usingServiceRole } = await getAdminDbClient();

  const [ordersRes, subsRes, profilesRes] = await Promise.all([
    client
      .from("orders")
      .select(
        "order_id, user_id, product_id, product_name, amount, status, payment_method, midtrans_transaction_id, midtrans_status, paid_at, created_at",
      )
      .order("created_at", { ascending: false }),
    client
      .from("subscriptions")
      .select("id, user_id, status")
      .eq("status", "active"),
    client.from("profiles").select("id", { count: "exact", head: true }),
  ]);

  const schemaMissing =
    isMissingTableOrColumn(ordersRes.error) ||
    isMissingTableOrColumn(subsRes.error) ||
    isMissingTableOrColumn(profilesRes.error);

  const orders = (ordersRes.data ?? []) as OrderRow[];
  const activeSubs = (subsRes.data ?? []) as Array<{
    id: string;
    user_id: string;
  }>;
  const totalUsersCount = profilesRes.count ?? 0;

  const now = new Date();
  const monthStartIso = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
  ).toISOString();

  let totalRevenue = 0;
  let monthlyRevenue = 0;
  let paidOrdersCount = 0;
  let pendingOrdersCount = 0;

  for (const order of orders) {
    if (order.status === "paid") {
      totalRevenue += order.amount;
      paidOrdersCount += 1;
      const effectiveDate = order.paid_at ?? order.created_at;
      if (effectiveDate >= monthStartIso) {
        monthlyRevenue += order.amount;
      }
    } else if (order.status === "pending") {
      pendingOrdersCount += 1;
    }
  }

  const activeSubscriberUserIds = new Set(activeSubs.map((s) => s.user_id));
  const recentOrderRows = orders.slice(0, 8);
  const profileMap = await fetchProfilesMapByIds(
    client,
    recentOrderRows.map((o) => o.user_id),
  );

  return {
    totalRevenue,
    monthlyRevenue,
    paidOrdersCount,
    pendingOrdersCount,
    totalOrdersCount: orders.length,
    totalUsersCount,
    activeSubscribersCount: activeSubscriberUserIds.size,
    conversionRate: computeConversionRate(
      activeSubscriberUserIds.size,
      totalUsersCount,
    ),
    revenueByProduct: buildProductRevenueBreakdown(orders),
    recentOrders: mapOrdersWithProfiles(recentOrderRows, profileMap),
    schemaMissing,
    usingServiceRole: usingServiceRole && hasSupabaseServiceRoleKey(),
  };
}

export async function listAdminOrders(options?: {
  status?: OrderStatusFilter;
  search?: string;
  limit?: number;
}): Promise<{ orders: AdminOrderItem[]; schemaMissing: boolean }> {
  const { client } = await getAdminDbClient();
  const limit = options?.limit ?? 100;

  let query = client
    .from("orders")
    .select(
      "order_id, user_id, product_id, product_name, amount, status, payment_method, midtrans_transaction_id, midtrans_status, paid_at, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (options?.status && options.status !== "all") {
    query = query.eq("status", options.status);
  }

  const { data, error } = await query;
  if (error) {
    return {
      orders: [],
      schemaMissing: isMissingTableOrColumn(error),
    };
  }

  const orderRows = (data ?? []) as OrderRow[];
  const profileMap = await fetchProfilesMapByIds(
    client,
    orderRows.map((o) => o.user_id),
  );

  let enriched = mapOrdersWithProfiles(orderRows, profileMap);

  const keyword = options?.search?.trim().toLowerCase();
  if (keyword) {
    enriched = enriched.filter(
      (item) =>
        item.order_id.toLowerCase().includes(keyword) ||
        (item.user_email?.toLowerCase().includes(keyword) ?? false) ||
        (item.user_name?.toLowerCase().includes(keyword) ?? false) ||
        item.product_name.toLowerCase().includes(keyword) ||
        (item.midtrans_transaction_id?.toLowerCase().includes(keyword) ?? false),
    );
  }

  return { orders: enriched, schemaMissing: false };
}

export async function listAdminUsers(options?: {
  filter?: UserFilter;
  search?: string;
  limit?: number;
}): Promise<{ users: AdminUserItem[]; schemaMissing: boolean }> {
  const { client } = await getAdminDbClient();
  const limit = options?.limit ?? 150;

  const { data: profilesData, error: profilesError } = await client
    .from("profiles")
    .select("id, email, full_name, role, created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (profilesError) {
    return {
      users: [],
      schemaMissing: isMissingTableOrColumn(profilesError),
    };
  }

  const profiles = (profilesData ?? []) as ProfileLookupRow[];
  const userIds = profiles.map((p) => p.id);

  if (userIds.length === 0) {
    return { users: [], schemaMissing: false };
  }

  const [subsRes, ordersRes] = await Promise.all([
    client
      .from("subscriptions")
      .select("id, user_id, order_id, product_id, plan, status, starts_at, expires_at")
      .in("user_id", userIds),
    client
      .from("orders")
      .select("user_id, amount, status")
      .in("user_id", userIds),
  ]);

  const subsByUser = new Map<string, AdminSubscriptionSummary[]>();
  for (const row of (subsRes.data ?? []) as SubscriptionRow[]) {
    const existing = subsByUser.get(row.user_id) ?? [];
    existing.push({
      id: row.id,
      order_id: row.order_id,
      product_id: row.product_id,
      plan: row.plan,
      status: row.status,
      starts_at: row.starts_at,
      expires_at: row.expires_at,
    });
    subsByUser.set(row.user_id, existing);
  }

  const orderStatsByUser = new Map<
    string,
    { count: number; totalSpent: number }
  >();
  for (const order of (ordersRes.data ?? []) as Array<{
    user_id: string;
    amount: number;
    status: string;
  }>) {
    const prev = orderStatsByUser.get(order.user_id) ?? {
      count: 0,
      totalSpent: 0,
    };
    prev.count += 1;
    if (order.status === "paid") {
      prev.totalSpent += order.amount;
    }
    orderStatsByUser.set(order.user_id, prev);
  }

  let users: AdminUserItem[] = profiles.map((profile) => {
    const userSubs = subsByUser.get(profile.id) ?? [];
    const stats = orderStatsByUser.get(profile.id) ?? {
      count: 0,
      totalSpent: 0,
    };
    const role: UserRole =
      profile.role === "admin" || profile.role === "superadmin"
        ? profile.role
        : "student";

    return {
      id: profile.id,
      email: profile.email,
      full_name: profile.full_name,
      role,
      created_at: profile.created_at,
      subscriptions: userSubs,
      orders_count: stats.count,
      total_spent: stats.totalSpent,
    };
  });

  const filter = options?.filter ?? "all";
  if (filter === "subscribed") {
    users = users.filter((u) =>
      u.subscriptions.some((s) => s.status === "active"),
    );
  } else if (filter === "free") {
    users = users.filter(
      (u) => !u.subscriptions.some((s) => s.status === "active"),
    );
  } else if (filter === "admin") {
    users = users.filter((u) => u.role === "admin" || u.role === "superadmin");
  }

  const keyword = options?.search?.trim().toLowerCase();
  if (keyword) {
    users = users.filter(
      (u) =>
        (u.email?.toLowerCase().includes(keyword) ?? false) ||
        (u.full_name?.toLowerCase().includes(keyword) ?? false) ||
        u.id.toLowerCase().includes(keyword),
    );
  }

  return { users, schemaMissing: false };
}

export async function syncOrderWithMidtrans(orderId: string): Promise<{
  status: OrderStatus;
  midtransStatus: string;
}> {
  const { client } = await getAdminDbClient();

  const { data: order, error: findError } = await client
    .from("orders")
    .select("order_id, user_id, product_id, status")
    .eq("order_id", orderId)
    .maybeSingle<Pick<OrderRow, "order_id" | "user_id" | "product_id" | "status">>();

  if (findError || !order) {
    throw new Error(`Order ${orderId} tidak ditemukan.`);
  }

  const response = (await coreApi.transaction.status(
    orderId,
  )) as MidtransStatusPayload;

  const midtransStatus = response.transaction_status ?? "pending";
  const mappedStatus = mapMidtransTransactionStatus(
    midtransStatus,
    response.fraud_status,
  );

  const patch: Record<string, unknown> = {
    status: mappedStatus,
    midtrans_status: midtransStatus,
    updated_at: new Date().toISOString(),
  };

  if (response.payment_type) {
    patch.payment_method = response.payment_type;
  }
  if (response.transaction_id) {
    patch.midtrans_transaction_id = response.transaction_id;
  }
  if (mappedStatus === "paid") {
    patch.paid_at = new Date().toISOString();
  }

  const { error: updateError } = await client
    .from("orders")
    .update(patch)
    .eq("order_id", orderId);

  if (updateError) {
    throw new Error(`Gagal memperbarui status order: ${updateError.message}`);
  }

  if (mappedStatus === "paid") {
    await upsertActiveSubscription(client, order.user_id, orderId, order.product_id);
  }

  return { status: mappedStatus, midtransStatus };
}

export async function updateOrderStatusManually(
  orderId: string,
  newStatus: OrderStatus,
): Promise<void> {
  const { client } = await getAdminDbClient();

  const { data: order, error: findError } = await client
    .from("orders")
    .select("order_id, user_id, product_id, payment_method")
    .eq("order_id", orderId)
    .maybeSingle<
      Pick<OrderRow, "order_id" | "user_id" | "product_id" | "payment_method">
    >();

  if (findError || !order) {
    throw new Error(`Order ${orderId} tidak ditemukan.`);
  }

  const patch: Record<string, unknown> = {
    status: newStatus,
    updated_at: new Date().toISOString(),
  };

  if (newStatus === "paid") {
    patch.paid_at = new Date().toISOString();
    patch.payment_method = order.payment_method ?? "manual_admin";
  }

  const { error: updateError } = await client
    .from("orders")
    .update(patch)
    .eq("order_id", orderId);

  if (updateError) {
    throw new Error(`Gagal mengubah status order: ${updateError.message}`);
  }

  if (newStatus === "paid") {
    await upsertActiveSubscription(client, order.user_id, orderId, order.product_id);
  } else if (newStatus === "refunded" || newStatus === "cancelled") {
    await client
      .from("subscriptions")
      .update({
        status: "cancelled",
        updated_at: new Date().toISOString(),
      })
      .eq("order_id", orderId);
  }
}

export async function grantSubscriptionManually(
  userId: string,
  productId: string,
): Promise<{ orderId: string }> {
  const product = getProduct(productId);
  if (!product) {
    throw new Error(`Produk '${productId}' tidak ditemukan di katalog.`);
  }

  const { client } = await getAdminDbClient();
  const manualOrderId = `ADMIN-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  const { error: orderError } = await client.from("orders").insert({
    user_id: userId,
    order_id: manualOrderId,
    product_id: product.id,
    product_name: `${product.name} (Aktivasi Admin)`,
    amount: 0,
    status: "paid",
    payment_method: "admin_grant",
    midtrans_status: "manual_grant",
    paid_at: new Date().toISOString(),
    metadata: { granted_by_admin: true },
  });

  if (orderError) {
    throw new Error(`Gagal membuat catatan order manual: ${orderError.message}`);
  }

  await upsertActiveSubscription(client, userId, manualOrderId, product.id);
  return { orderId: manualOrderId };
}

export async function revokeSubscriptionManually(
  userId: string,
  productId: string,
): Promise<void> {
  const { client } = await getAdminDbClient();
  const { error } = await client
    .from("subscriptions")
    .update({
      status: "cancelled",
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId)
    .eq("product_id", productId);

  if (error) {
    throw new Error(`Gagal mencabut akses paket: ${error.message}`);
  }
}

export async function updateUserRole(
  targetUserId: string,
  newRole: UserRole,
): Promise<void> {
  const { client } = await getAdminDbClient();
  const { error } = await client
    .from("profiles")
    .update({
      role: newRole,
      updated_at: new Date().toISOString(),
    })
    .eq("id", targetUserId);

  if (error) {
    throw new Error(`Gagal mengubah role pengguna: ${error.message}`);
  }
}
