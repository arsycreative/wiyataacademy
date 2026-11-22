import Link from "next/link";
import { CheckCircle2, CreditCard, Lock, Receipt, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatIdr, formatShortDateTime } from "@/modules/admin/domain/types";
import { OrderStatusBadge } from "@/modules/admin/presentation/status-badge";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";
import type { OrderStatus } from "@/modules/payment/domain/status";
import type { UserBillingSummary } from "@/modules/payment/infrastructure/entitlements.server";
import { APP_ROUTES } from "@/shared/constants/app";

interface AccountBillingSectionProps {
  billing: UserBillingSummary;
  isAdmin?: boolean;
}

export function AccountBillingSection({
  billing,
  isAdmin = false,
}: AccountBillingSectionProps) {
  const activeSubs = billing.subscriptions.filter((s) => s.status === "active");

  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-blue-700">
            <CreditCard className="size-4" aria-hidden />
            <h2 className="text-base font-semibold text-slate-950">
              Paket Belajar &amp; Riwayat Transaksi
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-600">
            Status keanggotaan aktif dan catatan invoice pembayaran Anda di Wiyata Academy.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-fit border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
        >
          <Link href={APP_ROUTES.pricing}>
            <Sparkles className="size-3.5 text-amber-500" aria-hidden />
            {activeSubs.length > 0 ? "Lihat Paket Lainnya" : "Upgrade Paket Belajar"}
          </Link>
        </Button>
      </div>

      {/* Status Paket Aktif */}
      <div className="mt-5">
        {isAdmin ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-blue-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Akses Penuh Internal Admin Aktif
                </p>
                <p className="text-xs text-blue-800/80">
                  Akun Anda memiliki akses penuh ke seluruh bank soal, modul, dan simulasi Tryout CAT.
                </p>
              </div>
            </div>
          </div>
        ) : activeSubs.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {activeSubs.map((sub) => {
              const product = PRODUCTS[sub.product_id as ProductId];
              return (
                <div
                  key={sub.id}
                  className="flex items-start justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        {product?.name ?? sub.product_id}
                      </p>
                      <p className="mt-0.5 text-xs text-emerald-800">
                        Aktif Seumur Hidup • Sejak{" "}
                        {formatShortDateTime(sub.starts_at)}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Aktif
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Lock className="size-4" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Status Akun: Paket Gratis (Trial)
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Anda dapat mencoba 1 pola gratis tiap subtes &amp; Mini Tryout 35 soal. Upgrade ke Paket Intensif untuk membuka 2.540+ soal dan Tryout Resmi 110 soal.
                </p>
              </div>
            </div>
            <Button
              asChild
              size="sm"
              className="shrink-0 bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700"
            >
              <Link href={APP_ROUTES.pricing}>Buka Akses Penuh</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Riwayat Transaksi */}
      {billing.orders.length > 0 && (
        <div className="mt-6 border-t border-slate-100 pt-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Receipt className="size-3.5" aria-hidden />
            <span>Riwayat Invoice Pembayaran</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                  <th className="py-2 pr-3">Order ID</th>
                  <th className="py-2 pr-3">Paket</th>
                  <th className="py-2 pr-3">Nominal</th>
                  <th className="py-2 pr-3">Metode</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {billing.orders.map((order) => (
                  <tr key={order.order_id} className="hover:bg-slate-50/70">
                    <td className="py-2.5 pr-3 font-mono text-[11px] font-semibold text-slate-800">
                      {order.order_id}
                    </td>
                    <td className="py-2.5 pr-3 font-medium text-slate-900">
                      {order.product_name}
                      {order.voucher_code && (
                        <span className="ml-1.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                          Promo: {order.voucher_code}
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 pr-3 font-semibold text-slate-900">
                      {formatIdr(order.amount)}
                    </td>
                    <td className="py-2.5 pr-3 text-slate-500">
                      {order.payment_method ?? "—"}
                    </td>
                    <td className="py-2.5 pr-3">
                      <OrderStatusBadge status={order.status as OrderStatus} />
                    </td>
                    <td className="py-2.5 text-slate-500">
                      {formatShortDateTime(order.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
