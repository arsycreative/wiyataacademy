import type { Metadata } from "next";

import { listAdminVouchers } from "@/modules/admin/infrastructure/admin-repository.server";
import { VouchersManagerClient } from "@/modules/admin/presentation/vouchers-manager-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kode Promo & Voucher",
};

export default async function AdminVouchersPage() {
  const { vouchers, schemaMissing } = await listAdminVouchers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">
          Manajemen Kode Promo &amp; Voucher Diskon
        </h1>
        <p className="text-sm text-slate-500">
          Buat kode promo diskon persentase atau nominal Rupiah untuk kampanye
          pendaftaran dan potong harga otomatis di halaman Paket Belajar.
        </p>
      </div>

      <VouchersManagerClient
        initialVouchers={vouchers}
        schemaMissing={schemaMissing}
      />
    </div>
  );
}

