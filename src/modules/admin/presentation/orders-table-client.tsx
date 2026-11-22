"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Download,
  Loader2,
  RefreshCw,
  RotateCcw,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  buildCsvContent,
  downloadCsvFile,
} from "@/modules/admin/domain/csv";
import {
  formatIdr,
  formatShortDateTime,
  type AdminOrderItem,
} from "@/modules/admin/domain/types";
import { OrderStatusBadge } from "@/modules/admin/presentation/status-badge";
import type { OrderStatus } from "@/modules/payment/domain/status";
import { useToastStore } from "@/shared/stores/toast-store";

type TabFilter = "all" | "paid" | "pending" | "expired" | "other";

const STATUS_TABS: Array<{ id: TabFilter; label: string }> = [
  { id: "all", label: "Semua" },
  { id: "paid", label: "Lunas" },
  { id: "pending", label: "Menunggu" },
  { id: "expired", label: "Kedaluwarsa" },
  { id: "other", label: "Batal / Refund" },
];

interface OrdersTableClientProps {
  initialOrders: AdminOrderItem[];
}

export function OrdersTableClient({ initialOrders }: OrdersTableClientProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);

  const [orders, setOrders] = useState<AdminOrderItem[]>(initialOrders);
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [search, setSearch] = useState("");
  const [busyOrderId, setBusyOrderId] = useState<string | null>(null);

  const filteredOrders = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return orders.filter((order) => {
      if (activeTab === "paid" && order.status !== "paid") return false;
      if (activeTab === "pending" && order.status !== "pending") return false;
      if (activeTab === "expired" && order.status !== "expired") return false;
      if (
        activeTab === "other" &&
        order.status !== "cancelled" &&
        order.status !== "refunded" &&
        order.status !== "failed"
      ) {
        return false;
      }

      if (!keyword) return true;
      return (
        order.order_id.toLowerCase().includes(keyword) ||
        (order.user_email?.toLowerCase().includes(keyword) ?? false) ||
        (order.user_name?.toLowerCase().includes(keyword) ?? false) ||
        order.product_name.toLowerCase().includes(keyword) ||
        (order.payment_method?.toLowerCase().includes(keyword) ?? false)
      );
    });
  }, [orders, activeTab, search]);

  const handleSyncMidtrans = async (orderId: string) => {
    setBusyOrderId(orderId);
    try {
      const res = await fetch(
        `/api/admin/orders/${encodeURIComponent(orderId)}/status`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "sync_midtrans" }),
        },
      );
      const data = (await res.json()) as {
        ok?: boolean;
        status?: OrderStatus;
        midtransStatus?: string;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.status) {
        addToast(data.error ?? "Gagal menyinkronkan status Midtrans.", "error");
        return;
      }

      setOrders((prev) =>
        prev.map((item) =>
          item.order_id === orderId
            ? {
                ...item,
                status: data.status!,
                midtrans_status: data.midtransStatus ?? item.midtrans_status,
                paid_at:
                  data.status === "paid"
                    ? new Date().toISOString()
                    : item.paid_at,
              }
            : item,
        ),
      );
      addToast(
        `Status ${orderId} diperbarui dari Midtrans (${data.midtransStatus}).`,
        "success",
      );
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan saat menghubungi server.", "error");
    } finally {
      setBusyOrderId(null);
    }
  };

  const handleManualStatus = async (
    orderId: string,
    targetStatus: OrderStatus,
    confirmMessage: string,
  ) => {
    if (!window.confirm(confirmMessage)) return;

    setBusyOrderId(orderId);
    try {
      const res = await fetch(
        `/api/admin/orders/${encodeURIComponent(orderId)}/status`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "set_status", status: targetStatus }),
        },
      );
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal memperbarui status order.", "error");
        return;
      }

      setOrders((prev) =>
        prev.map((item) =>
          item.order_id === orderId
            ? {
                ...item,
                status: targetStatus,
                paid_at:
                  targetStatus === "paid"
                    ? new Date().toISOString()
                    : item.paid_at,
              }
            : item,
        ),
      );
      addToast(`Status order ${orderId} diubah menjadi ${targetStatus}.`, "success");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyOrderId(null);
    }
  };

  const handleExportCsv = () => {
    const csv = buildCsvContent(
      [
        "Order ID",
        "Tanggal Buat",
        "Nama Siswa",
        "Email Siswa",
        "Paket",
        "Nominal (IDR)",
        "Metode Bayar",
        "Status",
        "ID Transaksi Midtrans",
        "Tanggal Lunas",
      ],
      filteredOrders.map((o) => [
        o.order_id,
        o.created_at,
        o.user_name ?? "",
        o.user_email ?? "",
        o.product_name,
        o.amount,
        o.payment_method ?? "",
        o.status,
        o.midtrans_transaction_id ?? "",
        o.paid_at ?? "",
      ]),
    );
    const dateStamp = new Date().toISOString().slice(0, 10);
    downloadCsvFile(`wiyata-orders-${dateStamp}.csv`, csv);
    addToast(`${filteredOrders.length} transaksi diekspor ke CSV.`, "success");
  };

  return (
    <div className="space-y-4">
      {/* Toolbar Filter & Search */}
      <div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Order ID, email, paket..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleExportCsv}
            disabled={filteredOrders.length === 0}
            className="h-9 gap-1.5 border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Download className="size-3.5" aria-hidden />
            Ekspor CSV
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Order ID &amp; Waktu</th>
                <th className="px-4 py-3">Siswa</th>
                <th className="px-4 py-3">Paket</th>
                <th className="px-4 py-3">Nominal</th>
                <th className="px-4 py-3">Metode</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Aksi Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-10 text-center text-sm text-slate-500"
                  >
                    Tidak ada transaksi yang sesuai filter.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const isBusy = busyOrderId === order.order_id;
                  const isManualGrant = order.order_id.startsWith("ADMIN-");

                  return (
                    <tr
                      key={order.order_id}
                      className="transition-colors hover:bg-blue-50/30"
                    >
                      <td className="px-4 py-3 align-top">
                        <p className="font-mono text-[11px] font-semibold text-slate-900">
                          {order.order_id}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {formatShortDateTime(order.created_at)}
                        </p>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <p className="font-semibold text-slate-900">
                          {order.user_name || "Tanpa Nama"}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {order.user_email || order.user_id.slice(0, 8)}
                        </p>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <p className="font-medium text-slate-800">
                          {order.product_name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {order.product_id}
                        </p>
                      </td>
                      <td className="px-4 py-3 align-top font-semibold text-slate-900">
                        {formatIdr(order.amount)}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-600">
                        {order.payment_method ?? "—"}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <OrderStatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-3 align-top text-right">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          {!isManualGrant && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              disabled={isBusy}
                              onClick={() => handleSyncMidtrans(order.order_id)}
                              title="Cek status terbaru dari Midtrans"
                              className="h-7 gap-1 border-slate-200 px-2 text-[11px]"
                            >
                              {isBusy ? (
                                <Loader2 className="size-3 animate-spin" aria-hidden />
                              ) : (
                                <RefreshCw className="size-3" aria-hidden />
                              )}
                              Sync
                            </Button>
                          )}

                          {order.status !== "paid" && (
                            <Button
                              type="button"
                              size="sm"
                              disabled={isBusy}
                              onClick={() =>
                                handleManualStatus(
                                  order.order_id,
                                  "paid",
                                  `Aktifkan manual order ${order.order_id} sebagai LUNAS dan buka akses paket untuk siswa ini?`,
                                )
                              }
                              className="h-7 gap-1 bg-emerald-600 px-2 text-[11px] text-white hover:bg-emerald-700"
                            >
                              <CheckCircle2 className="size-3" aria-hidden />
                              Lunaskan
                            </Button>
                          )}

                          {order.status === "paid" && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              disabled={isBusy}
                              onClick={() =>
                                handleManualStatus(
                                  order.order_id,
                                  "refunded",
                                  `Tandai order ${order.order_id} sebagai REFUND dan cabut akses paket terkait?`,
                                )
                              }
                              className="h-7 gap-1 border-rose-200 px-2 text-[11px] text-rose-600 hover:bg-rose-50"
                            >
                              <RotateCcw className="size-3" aria-hidden />
                              Refund
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

