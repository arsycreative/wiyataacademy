import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

import {
  formatIdr,
  formatShortDateTime,
} from "@/modules/admin/domain/types";
import { getAdminOverviewStats } from "@/modules/admin/infrastructure/admin-repository.server";
import { RevenueChart } from "@/modules/admin/presentation/revenue-chart";
import { OrderStatusBadge } from "@/modules/admin/presentation/status-badge";
import { APP_ROUTES } from "@/shared/constants/app";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const stats = await getAdminOverviewStats();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Ringkasan Operasional
          </h1>
          <p className="text-sm text-slate-500">
            Pantau pendapatan Midtrans, status transaksi, dan pertumbuhan siswa
            Wiyata Edu.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href={APP_ROUTES.adminOrders}
            className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-white px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-xs transition-colors hover:bg-blue-50"
          >
            <span>Kelola Order</span>
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>

      {!stats.usingServiceRole && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs text-amber-900">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
          <div>
            <p className="font-semibold">
              Mode Fallback RLS Aktif (SUPABASE_SERVICE_ROLE_KEY belum diset)
            </p>
            <p className="mt-0.5 text-amber-800">
              Dashboard sedang membaca data menggunakan sesi Admin via RLS{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5">
                is_admin()
              </code>
              . Untuk performa dan kehandalan penuh webhook Midtrans, pastikan{" "}
              <code className="rounded bg-amber-100 px-1 py-0.5">
                SUPABASE_SERVICE_ROLE_KEY
              </code>{" "}
              diisi di environment server.
            </p>
          </div>
        </div>
      )}

      {/* 4 KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Total Pendapatan
            </span>
            <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Wallet className="size-4" aria-hidden />
            </div>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-950">
            {formatIdr(stats.totalRevenue)}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Bulan ini:{" "}
            <span className="font-semibold text-slate-700">
              {formatIdr(stats.monthlyRevenue)}
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Transaksi Lunas
            </span>
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="size-4" aria-hidden />
            </div>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-950">
            {stats.paidOrdersCount}
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <Clock className="size-3 text-amber-500" aria-hidden />
            <span>
              <strong>{stats.pendingOrdersCount}</strong> menunggu pembayaran
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Siswa Terdaftar
            </span>
            <div className="flex size-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Users className="size-4" aria-hidden />
            </div>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-950">
            {stats.totalUsersCount}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            <strong>{stats.activeSubscribersCount}</strong> siswa berlangganan
            aktif
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Rasio Konversi
            </span>
            <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <TrendingUp className="size-4" aria-hidden />
            </div>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-950">
            {stats.conversionRate}%
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Dari total akun ke pembeli aktif
          </p>
        </div>
      </div>

      {/* Grafik Tren Pendapatan 14 Hari */}
      <RevenueChart series={stats.dailyRevenueSeries} />

      {/* Product Breakdown + Recent Orders */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pendapatan per Paket */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900">
            Performa per Paket
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Distribusi transaksi lunas berdasarkan katalog
          </p>

          <div className="mt-4 space-y-3">
            {stats.revenueByProduct.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-900">
                    {item.productName}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.paidCount} terjual
                  </p>
                </div>
                <p className="shrink-0 text-xs font-bold text-blue-700">
                  {formatIdr(item.revenue)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transaksi Terbaru */}
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Transaksi Terbaru
              </h2>
              <p className="text-xs text-slate-500">
                8 pesanan terakhir yang masuk ke sistem
              </p>
            </div>
            <Link
              href={APP_ROUTES.adminOrders}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              Lihat semua &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-2 pr-3">Order ID</th>
                  <th className="py-2 pr-3">Siswa</th>
                  <th className="py-2 pr-3">Paket</th>
                  <th className="py-2 pr-3">Nominal</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.recentOrders.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-8 text-center text-sm text-slate-500"
                    >
                      Belum ada transaksi tercatat.
                    </td>
                  </tr>
                ) : (
                  stats.recentOrders.map((order) => (
                    <tr key={order.order_id} className="hover:bg-slate-50/60">
                      <td className="py-2.5 pr-3">
                        <p className="font-mono text-[11px] font-semibold text-slate-900">
                          {order.order_id}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {formatShortDateTime(order.created_at)}
                        </p>
                      </td>
                      <td className="py-2.5 pr-3">
                        <p className="font-medium text-slate-800">
                          {order.user_name || order.user_email || "—"}
                        </p>
                      </td>
                      <td className="py-2.5 pr-3 text-slate-600">
                        {order.product_name}
                      </td>
                      <td className="py-2.5 pr-3 font-semibold text-slate-900">
                        {formatIdr(order.amount)}
                      </td>
                      <td className="py-2.5">
                        <OrderStatusBadge status={order.status} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

