import Link from "next/link";
import { CheckCircle2, Lock, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

interface PremiumPaywallCardProps {
  title?: string;
  description?: string;
  featureHighlights?: readonly string[];
}

export function PremiumPaywallCard({
  title = "Buka Akses Penuh Bank Soal & Simulasi CAT",
  description = "Modul atau paket simulasi ini khusus untuk peserta Paket Intensif / Premium SKD CPNS. Upgrade akun Anda satu kali bayar untuk akses selamanya.",
  featureHighlights = [
    "2.890+ Soal HOTS lengkap TWK, TIU, dan TKP dengan pembahasan taktis",
    "20 Cheat Sheet rumus cepat & analisis pola kesalahan",
    "Simulasi Tryout CAT Resmi 110 soal standar BKN",
  ],
}: PremiumPaywallCardProps) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
            <Lock className="size-3.5" aria-hidden />
            Konten Paket Premium
          </span>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {description}
          </p>

          <ul className="mt-4 space-y-2 text-xs text-slate-700 sm:text-sm">
            {featureHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-emerald-600"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col">
          <Button
            asChild
            className="h-11 bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700"
          >
            <Link href={APP_ROUTES.pricing}>
              <Sparkles className="size-4 text-amber-300" aria-hidden />
              Lihat Paket Belajar
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-10 border-blue-200 bg-white text-xs font-semibold text-blue-700 hover:bg-blue-50"
          >
            <Link href={APP_ROUTES.account}>Cek Status Akun Saya</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

