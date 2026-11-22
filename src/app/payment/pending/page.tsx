import Link from "next/link";
import { Clock, RefreshCw, Home } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

interface PendingPageProps {
  searchParams: Promise<{
    order_id?: string;
  }>;
}

export default async function PaymentPendingPage({ searchParams }: PendingPageProps) {
  const params = await searchParams;
  const orderId = params.order_id ?? "WA-ORDER";

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-lg rounded-2xl border border-amber-100 bg-white p-8 text-center shadow-xl shadow-amber-500/5 sm:p-10">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 sm:size-20">
            <Clock className="size-10 sm:size-12" aria-hidden />
          </div>

          <span className="mt-6 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Menunggu Pembayaran
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Transaksi Sedang Diproses ⏳
          </h1>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Pesanan Anda telah dibuat. Silakan selesaikan pembayaran melalui kanal yang Anda pilih
            (Virtual Account, QRIS, atau E-Wallet) sebelum batas waktu berakhir.
          </p>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Nomor Pesanan</span>
              <span className="font-mono font-medium text-slate-700">{orderId}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Status</span>
              <span className="font-semibold text-amber-600">Menunggu Pelunasan</span>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Setelah pembayaran selesai, sistem Midtrans akan otomatis mengaktifkan paket belajar
            Anda dalam hitungan detik.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-blue-600 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
            >
              <Link href={APP_ROUTES.account}>
                <RefreshCw className="size-4" aria-hidden />
                Lihat Status di Akun
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Link href={APP_ROUTES.home}>
                <Home className="size-4" aria-hidden />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsappFloatingButton
        label="Konfirmasi via WA"
        message={`Halo CS Wiyata Academy, saya ingin konfirmasi pembayaran untuk Order ID ${orderId}.`}
      />
    </div>
  );
}
