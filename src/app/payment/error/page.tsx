import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

interface ErrorPageProps {
  searchParams: Promise<{
    order_id?: string;
  }>;
}

export default async function PaymentErrorPage({ searchParams }: ErrorPageProps) {
  const params = await searchParams;
  const orderId = params.order_id ?? "WA-ORDER";

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-lg rounded-2xl border border-rose-100 bg-white p-8 text-center shadow-xl shadow-rose-500/5 sm:p-10">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 sm:size-20">
            <AlertCircle className="size-10 sm:size-12" aria-hidden />
          </div>

          <span className="mt-6 inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            Pembayaran Belum Berhasil
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Transaksi Dibatalkan atau Gagal
          </h1>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Kami tidak dapat memproses pembayaran Anda. Ini bisa terjadi karena transaksi
            dibatalkan, kartu ditolak, atau waktu pembayaran telah kedaluwarsa.
          </p>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Nomor Pesanan</span>
              <span className="font-mono font-medium text-slate-700">{orderId}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Status</span>
              <span className="font-semibold text-rose-600">Gagal / Dibatalkan</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-blue-600 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
            >
              <Link href="/paket">
                <RotateCcw className="size-4" aria-hidden />
                Coba Bayar Lagi
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
        label="Bantuan Pembayaran"
        message={`Halo CS Wiyata Edu, saya mengalami kendala pembayaran untuk Order ID ${orderId}.`}
      />
    </div>
  );
}
