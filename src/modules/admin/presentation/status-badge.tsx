import { cn } from "@/lib/utils";
import type { UserRole } from "@/modules/auth/application/ports";
import {
  ORDER_STATUS_LABELS,
  type OrderStatus,
} from "@/modules/payment/domain/status";

const ORDER_STATUS_STYLES: Record<OrderStatus, string> = {
  paid: "border-emerald-200 bg-emerald-50 text-emerald-700",
  pending: "border-amber-200 bg-amber-50 text-amber-700",
  expired: "border-slate-200 bg-slate-100 text-slate-600",
  cancelled: "border-rose-200 bg-rose-50 text-rose-700",
  failed: "border-rose-200 bg-rose-50 text-rose-700",
  refunded: "border-purple-200 bg-purple-50 text-purple-700",
};

const ROLE_STYLES: Record<UserRole, { label: string; className: string }> = {
  superadmin: {
    label: "Super Admin",
    className: "border-blue-300 bg-blue-600 text-white",
  },
  admin: {
    label: "Admin",
    className: "border-blue-200 bg-blue-50 text-blue-700",
  },
  student: {
    label: "Siswa",
    className: "border-slate-200 bg-slate-50 text-slate-600",
  },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
        ORDER_STATUS_STYLES[status] ?? ORDER_STATUS_STYLES.pending,
      )}
    >
      {ORDER_STATUS_LABELS[status] ?? status}
    </span>
  );
}

export function RoleBadge({ role }: { role: UserRole }) {
  const config = ROLE_STYLES[role] ?? ROLE_STYLES.student;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
        config.className,
      )}
    >
      {config.label}
    </span>
  );
}

