"use client";

import { useEffect, useState } from "react";
import { BookOpen, Loader2, Receipt, X } from "lucide-react";

import {
  formatIdr,
  formatShortDateTime,
  type AdminUserDetailResult,
} from "@/modules/admin/domain/types";
import {
  OrderStatusBadge,
  RoleBadge,
} from "@/modules/admin/presentation/status-badge";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";

interface UserDetailDrawerProps {
  userId: string | null;
  onClose: () => void;
}

export function UserDetailDrawer({ userId, onClose }: UserDetailDrawerProps) {
  if (!userId) return null;
  return <UserDetailPanel key={userId} userId={userId} onClose={onClose} />;
}

function UserDetailPanel({
  userId,
  onClose,
}: {
  userId: string;
  onClose: () => void;
}) {
  const [detail, setDetail] = useState<AdminUserDetailResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    fetch(`/api/admin/users/${encodeURIComponent(userId)}/detail`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Gagal memuat detail siswa.");
        }
        return (await res.json()) as AdminUserDetailResult;
      })
      .then((data) => {
        if (!cancelled) {
          setDetail(data);
        }
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Gagal memuat detail siswa.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [userId]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden
      />
      <aside className="relative z-10 flex h-full w-full max-w-lg flex-col border-l border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="text-base font-bold text-slate-950">
              Detail Progres &amp; Transaksi Siswa
            </h2>
            <p className="text-xs text-slate-500">
              ID: <span className="font-mono">{userId.slice(0, 12)}...</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail siswa"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Loader2 className="size-7 animate-spin text-blue-600" aria-hidden />
              <p className="mt-3 text-xs font-medium text-slate-600">
                Memuat progres belajar dan riwayat invoice...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-medium text-rose-700">
              {error}
            </div>
          ) : detail ? (
            <div className="space-y-6">
              {/* Identitas */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-950">
                    {detail.user.full_name || "Tanpa Nama"}
                  </p>
                  <RoleBadge role={detail.user.role} />
                </div>
                <p className="mt-0.5 text-xs text-slate-600">
                  {detail.user.email ?? "—"}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Bergabung: {formatShortDateTime(detail.user.created_at)}
                </p>
              </div>

              {/* Progres Belajar per Subtes */}
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <BookOpen className="size-3.5 text-blue-600" aria-hidden />
                    Progres Bank Soal (Cloud Sync)
                  </h3>
                  {detail.progressUpdatedAt && (
                    <span className="text-[10px] text-slate-400">
                      Update: {formatShortDateTime(detail.progressUpdatedAt)}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {(["twk", "tiu", "tkp"] as const).map((key) => {
                    const summary = detail.progressSummaries[key];
                    const pct =
                      summary.totalQuestions > 0
                        ? Math.round(
                            (summary.totalAnswered / summary.totalQuestions) * 100,
                          )
                        : 0;
                    return (
                      <div
                        key={key}
                        className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-center"
                      >
                        <p className="text-[11px] font-bold uppercase text-blue-700">
                          {key}
                        </p>
                        <p className="mt-1 text-base font-bold text-slate-950">
                          {summary.totalAnswered}
                          <span className="text-xs font-normal text-slate-400">
                            /{summary.totalQuestions}
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {pct}% selesai
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Paket Aktif */}
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Riwayat Langganan Paket
                </h3>
                {detail.subscriptions.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-slate-200 py-4 text-center text-xs text-slate-500">
                    Belum memiliki riwayat langganan paket.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {detail.subscriptions.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">
                            {PRODUCTS[sub.product_id as ProductId]?.name ??
                              sub.product_id}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Sejak {formatShortDateTime(sub.starts_at)}
                          </p>
                        </div>
                        <span
                          className={
                            sub.status === "active"
                              ? "rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700"
                              : "rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500"
                          }
                        >
                          {sub.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Riwayat Transaksi */}
              <div>
                <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Receipt className="size-3.5 text-slate-400" aria-hidden />
                  Riwayat Transaksi ({detail.orders.length})
                </h3>
                {detail.orders.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-slate-200 py-4 text-center text-xs text-slate-500">
                    Belum ada transaksi.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {detail.orders.map((order) => (
                      <div
                        key={order.order_id}
                        className="rounded-xl border border-slate-200 p-3 text-xs"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[11px] font-semibold text-slate-900">
                            {order.order_id}
                          </span>
                          <OrderStatusBadge status={order.status} />
                        </div>
                        <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-600">
                          <span>{order.product_name}</span>
                          <span className="font-bold text-slate-900">
                            {formatIdr(order.amount)}
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] text-slate-400">
                          {formatShortDateTime(order.created_at)} •{" "}
                          {order.payment_method ?? "—"}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
