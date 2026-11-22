import type { Metadata } from "next";

import { listAdminOrders } from "@/modules/admin/infrastructure/admin-repository.server";
import { OrdersTableClient } from "@/modules/admin/presentation/orders-table-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Transaksi & Order",
};

export default async function AdminOrdersPage() {
  const { orders } = await listAdminOrders({ limit: 150 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">
          Manajemen Transaksi &amp; Order
        </h1>
        <p className="text-sm text-slate-500">
          Verifikasi status pembayaran Midtrans secara real-time, aktivasi
          manual, atau proses refund pesanan siswa.
        </p>
      </div>

      <OrdersTableClient initialOrders={orders} />
    </div>
  );
}

