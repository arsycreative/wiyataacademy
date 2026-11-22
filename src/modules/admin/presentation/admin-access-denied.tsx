import Link from "next/link";
import { ArrowLeft, Database, ShieldAlert, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

interface AdminAccessDeniedProps {
  reason: "forbidden" | "schema_missing";
  userEmail: string;
}

export function AdminAccessDenied({
  reason,
  userEmail,
}: AdminAccessDeniedProps) {
  const promoteSql = `UPDATE public.profiles\nSET role = 'superadmin'\nWHERE email = '${userEmail}';`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fbff] px-5 py-12 text-slate-950">
      <div className="w-full max-w-xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            {reason === "schema_missing" ? (
              <Database className="size-5" aria-hidden />
            ) : (
              <ShieldAlert className="size-5" aria-hidden />
            )}
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">
              {reason === "schema_missing"
                ? "Skema Admin Belum Dimigrasi"
                : "Akses Terbatas (Khusus Admin)"}
            </h1>
            <p className="text-xs text-slate-500">
              Login saat ini: <span className="font-semibold">{userEmail}</span>
            </p>
          </div>
        </div>

        {reason === "schema_missing" ? (
          <p className="text-sm leading-relaxed text-slate-600">
            Kolom <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">role</code> pada tabel{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">public.profiles</code> belum ditemukan di database Supabase. Jalankan file migrasi{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              supabase/migrations/004_admin_roles.sql
            </code>{" "}
            melalui Supabase SQL Editor, lalu jalankan perintah promosi di bawah ini.
          </p>
        ) : (
          <p className="text-sm leading-relaxed text-slate-600">
            Akun Anda berstatus <strong>Siswa</strong> sehingga tidak memiliki izin membuka Dashboard Internal Admin. Jika Anda adalah pemilik sistem dan baru pertama kali menyiapkan dashboard ini, jalankan query berikut di Supabase SQL Editor untuk menjadikan akun Anda <strong>Super Admin</strong>:
          </p>
        )}

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs text-slate-100">
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
            <Terminal className="size-3.5" aria-hidden />
            <span>Supabase SQL Editor</span>
          </div>
          <pre className="overflow-x-auto font-mono leading-relaxed text-emerald-300">
            {promoteSql}
          </pre>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-slate-200">
            <Link href={APP_ROUTES.account}>
              <ArrowLeft className="size-4" aria-hidden />
              Ke Akun Siswa
            </Link>
          </Button>
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href={APP_ROUTES.home}>Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
