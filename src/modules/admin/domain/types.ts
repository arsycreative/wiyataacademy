import type { AuthSessionUser, UserRole } from "@/modules/auth/application/ports";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";
import type { OrderStatus } from "@/modules/payment/domain/status";

export type AdminRole = Exclude<UserRole, "student">;

export type AdminSessionCheck =
  | {
      authorized: true;
      user: AuthSessionUser;
      role: AdminRole;
    }
  | {
      authorized: false;
      reason: "unauthenticated" | "forbidden" | "schema_missing";
      user?: AuthSessionUser;
      role?: UserRole;
    };

export interface AdminOrderItem {
  order_id: string;
  user_id: string;
  user_email: string | null;
  user_name: string | null;
  product_id: string;
  product_name: string;
  amount: number;
  status: OrderStatus;
  payment_method: string | null;
  midtrans_transaction_id: string | null;
  midtrans_status: string | null;
  paid_at: string | null;
  created_at: string;
}

export interface AdminSubscriptionSummary {
  id: string;
  order_id: string;
  product_id: string;
  plan: string;
  status: "active" | "expired" | "cancelled";
  starts_at: string;
  expires_at: string | null;
}

export interface AdminUserItem {
  id: string;
  email: string | null;
  full_name: string | null;
  role: UserRole;
  created_at: string;
  subscriptions: AdminSubscriptionSummary[];
  orders_count: number;
  total_spent: number;
}

export interface ProductRevenueBreakdown {
  productId: ProductId;
  productName: string;
  paidCount: number;
  revenue: number;
}

export interface AdminOverviewStats {
  totalRevenue: number;
  monthlyRevenue: number;
  paidOrdersCount: number;
  pendingOrdersCount: number;
  totalOrdersCount: number;
  totalUsersCount: number;
  activeSubscribersCount: number;
  conversionRate: number;
  revenueByProduct: ProductRevenueBreakdown[];
  recentOrders: AdminOrderItem[];
  schemaMissing: boolean;
  usingServiceRole: boolean;
}

export type OrderStatusFilter = "all" | OrderStatus;
export type UserFilter = "all" | "subscribed" | "free" | "admin";

export function isAdminRole(role: string | null | undefined): role is AdminRole {
  return role === "admin" || role === "superadmin";
}

export function formatIdr(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatShortDateTime(isoString: string | null | undefined): string {
  if (!isoString) return "—";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

/**
 * Menghitung persentase konversi siswa berbayar dari total user terdaftar.
 */
export function computeConversionRate(
  activeSubscribers: number,
  totalUsers: number,
): number {
  if (totalUsers <= 0 || activeSubscribers <= 0) return 0;
  return Math.round((activeSubscribers / totalUsers) * 1000) / 10;
}

/**
 * Mengelompokkan pendapatan pesanan berstatus `paid` berdasarkan katalog produk.
 */
export function buildProductRevenueBreakdown(
  orders: ReadonlyArray<{ product_id: string; amount: number; status: string }>,
): ProductRevenueBreakdown[] {
  const productIds = Object.keys(PRODUCTS) as ProductId[];
  const buckets = new Map<ProductId, ProductRevenueBreakdown>(
    productIds.map((id) => [
      id,
      {
        productId: id,
        productName: PRODUCTS[id].name,
        paidCount: 0,
        revenue: 0,
      },
    ]),
  );

  for (const order of orders) {
    if (order.status !== "paid") continue;
    const bucket = buckets.get(order.product_id as ProductId);
    if (!bucket) continue;
    bucket.paidCount += 1;
    bucket.revenue += order.amount;
  }

  return Array.from(buckets.values());
}
