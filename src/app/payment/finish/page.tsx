import Link from "next/link";
import { CheckCircle2, ArrowRight, Compass, Award } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

interface FinishPageProps {
  searchParams: Promise<{
    order_id?: string;
    transaction_status?: string;
  }>;
}

export default async function PaymentFinishPage({ searchParams }: FinishPageProps) {
  const params = await searchParams;
  const orderId = params.order_id ?? "WA-ORDER";

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-lg rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-xl shadow-emerald-500/5 sm:p-10">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 sm:size-20">
            <CheckCircle2 className="size-10 sm:size-12" aria-hidden />
          </div>

          <span className="mt-6 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Pembayaran Berhasil
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Akses Belajar Kamu Telah Aktif! 🎉
          </h1>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Terima kasih telah bergabung bersama Wiyata Academy. Seluruh modul latihan, bank soal
            HOTS, simulasi CAT, dan materi akselerasi sudah bisa kamu akses penuh.
          </p>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Nomor Pesanan</span>
              <span className="font-mono font-medium text-slate-700">{orderId}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Status Akun</span>
              <span className="font-semibold text-emerald-600">Aktif Selamanya</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-blue-600 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
            >
              <Link href={APP_ROUTES.courseDetail("skd-intensif")}>
                <Compass className="size-4" aria-hidden />
                Mulai Roadmap Belajar
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Link href={APP_ROUTES.tryout}>
                <Award className="size-4" aria-hidden />
                Tryout CAT 110 Soal
              </Link>
            </Button>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400">
            Ada kendala akses? Hubungi tim support kami melalui menu bantuan atau WhatsApp resmi.
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
