"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cloud,
  CloudOff,
  Loader2,
  LogOut,
  Save,
  User as UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileSchema } from "@/modules/auth/domain/auth-schema";
import { summarizeTiuProgress } from "@/modules/question-bank/domain/question-shuffle";
import {
  summarizeTkpProgress,
  summarizeTwkProgress,
} from "@/modules/question-bank/domain/subtest-summary";
import {
  mergePracticeProgress,
  readLocalTiuProgress,
  sanitizePracticeProgress,
  type SanitizedPracticeProgress,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { APP_ROUTES } from "@/shared/constants/app";
import { useToastStore } from "@/shared/stores/toast-store";
import { createSupabaseBrowserClient } from "@/shared/supabase/client";
import { fieldErrorsFromZod, type FieldErrors } from "@/shared/validation/form";

type AccountUser = {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  providers: string[];
  createdAt: string;
};

type AccountDashboardProps = {
  user: AccountUser;
  initialCloudProgress: SanitizedPracticeProgress | null;
  initialSchemaMissing: boolean;
};

function getInitials(name: string, email: string): string {
  const source = name.trim() || email.split("@")[0] || "WA";
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}

export function AccountDashboard({
  user,
  initialCloudProgress,
  initialSchemaMissing,
}: AccountDashboardProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);

  const [fullName, setFullName] = useState(user.fullName);
  const [savedName, setSavedName] = useState(user.fullName);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [progressState, setProgressState] = useState<SanitizedPracticeProgress>(() =>
    initialCloudProgress ?? sanitizePracticeProgress({}),
  );

  // Gabungkan progres lokal browser agar ringkasan di /akun selalu mutakhir
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const localProgress = readLocalTiuProgress();
      if (!localProgress) return;
      setProgressState(mergePracticeProgress(localProgress, initialCloudProgress));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [initialCloudProgress]);

  const tiuSummary = useMemo(
    () =>
      summarizeTiuProgress(
        progressState.selectedAnswers,
        progressState.flaggedQuestions,
        progressState.patternSeeds,
        progressState.questionSeeds,
      ),
    [progressState],
  );

  const twkSummary = useMemo(
    () =>
      summarizeTwkProgress(
        progressState.selectedAnswers,
        progressState.flaggedQuestions,
        progressState.patternSeeds,
        progressState.questionSeeds,
      ),
    [progressState],
  );

  const tkpSummary = useMemo(
    () =>
      summarizeTkpProgress(
        progressState.selectedAnswers,
        progressState.flaggedQuestions,
        progressState.patternSeeds,
        progressState.questionSeeds,
      ),
    [progressState],
  );

  const formattedJoinDate = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(user.createdAt));
    } catch {
      return "-";
    }
  }, [user.createdAt]);

  const handleProfileSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldErrors({});

    const parsed = profileSchema.safeParse({ fullName });
    if (!parsed.success) {
      setFieldErrors(fieldErrorsFromZod(parsed.error));
      return;
    }

    setIsSavingProfile(true);
    try {
      const response = await fetch("/api/account/profile", {
        method: "PATCH",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName: parsed.data.fullName }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string | null;
      };

      if (!response.ok || !payload.ok) {
        addToast(
          payload.error ?? "Gagal menyimpan perubahan profil. Silakan coba lagi.",
          "error",
        );
        return;
      }

      setSavedName(parsed.data.fullName);
      addToast("Nama profil berhasil diperbarui.", "success");
      router.refresh();
    } catch {
      addToast("Gagal menyimpan perubahan profil. Silakan coba lagi.", "error");
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    if (!supabase) return;

    setIsSigningOut(true);
    try {
      await supabase.auth.signOut();
      addToast("Anda telah keluar dari akun.", "info");
      router.push(APP_ROUTES.home);
      router.refresh();
    } catch {
      addToast("Gagal keluar dari akun. Silakan coba lagi.", "error");
      setIsSigningOut(false);
    }
  };

  const hasGoogle = user.providers.includes("google");
  const hasEmail = user.providers.includes("email");

  return (
    <div className="space-y-6">
      {/* Header Profil Pengguna */}
      <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={savedName || user.email}
                width={64}
                height={64}
                className="size-16 rounded-2xl border border-blue-100 object-cover shadow-xs"
              />
            ) : (
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-md shadow-blue-200">
                {getInitials(savedName, user.email)}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-xl font-semibold text-slate-950 sm:text-2xl">
                  {savedName || "Peserta Wiyata Academy"}
                </h1>
                {hasGoogle && (
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    Google
                  </span>
                )}
                {hasEmail && (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    Email
                  </span>
                )}
              </div>
              <p className="mt-1 truncate text-sm text-slate-600">{user.email}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Bergabung sejak {formattedJoinDate}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              asChild
              variant="outline"
              className="border-blue-200 font-semibold text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <Link href={APP_ROUTES.twkPractice}>
                <BookOpen className="size-4" aria-hidden />
                Latihan TWK
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-200 font-semibold text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <Link href={APP_ROUTES.tkpPractice}>
                <BookOpen className="size-4" aria-hidden />
                Latihan TKP
              </Link>
            </Button>
            <Button
              asChild
              className="bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              <Link href={APP_ROUTES.tiuPatternPractice(progressState.lastPattern)}>
                <BookOpen className="size-4" aria-hidden />
                Lanjut Latihan TIU
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={isSigningOut}
              onClick={handleSignOut}
              className="border-rose-200 text-rose-700 hover:bg-rose-50 hover:text-rose-800"
            >
              {isSigningOut ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : (
                <LogOut className="size-4" aria-hidden />
              )}
              Keluar
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        {/* Form Edit Nama Profil */}
        <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60 lg:col-span-5">
          <div className="flex items-center gap-2 text-blue-700">
            <UserIcon className="size-4" aria-hidden />
            <h2 className="text-base font-semibold text-slate-950">Pengaturan Profil</h2>
          </div>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            Perbarui nama tampilan yang digunakan di akun Wiyata Academy Anda.
          </p>

          <form onSubmit={handleProfileSave} noValidate className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="account-full-name"
                className="block text-sm font-medium text-slate-800"
              >
                Nama Lengkap
              </label>
              <input
                id="account-full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={cn(
                  "mt-1.5 h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:ring-3",
                  fieldErrors.fullName
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200/70"
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                )}
              />
              {fieldErrors.fullName?.[0] && (
                <p className="mt-1 text-xs font-medium text-rose-600">
                  {fieldErrors.fullName[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="account-email"
                className="block text-sm font-medium text-slate-800"
              >
                Email Terdaftar
              </label>
              <input
                id="account-email"
                type="email"
                disabled
                value={user.email}
                className="mt-1.5 h-11 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSavingProfile}
              className="h-10 bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {isSavingProfile ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : (
                <Save className="size-4" aria-hidden />
              )}
              Simpan Profil
            </Button>
          </form>

          {/* Status Sinkronisasi Akun */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-700">
            {initialSchemaMissing ? (
              <div className="flex items-start gap-2.5">
                <CloudOff className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
                <div>
                  <p className="font-semibold text-slate-900">
                    Skema tabel progres belum diterapkan
                  </p>
                  <p className="mt-1 leading-5 text-slate-600">
                    Progres latihan sementara tersimpan aman di browser ini. Jalankan{" "}
                    <code className="rounded bg-slate-200/70 px-1 py-0.5 text-[11px]">
                      supabase/migrations/001_auth_and_tiu_progress.sql
                    </code>{" "}
                    di SQL Editor (serta{" "}
                    <code className="rounded bg-slate-200/70 px-1 py-0.5 text-[11px]">
                      002_supabase_rls.sql
                    </code>{" "}
                    bila di-host di Supabase).
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2.5">
                <Cloud className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                <div>
                  <p className="font-semibold text-slate-900">
                    Sinkronisasi Akun Aktif
                  </p>
                  <p className="mt-1 leading-5 text-slate-600">
                    Jawaban, penanda ragu-ragu, dan pola latihan terakhir Anda tersimpan otomatis ke
                    database akun.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Ringkasan Progres TKP (6 Aspek), TWK (5 Pilar) & TIU (9 Pola) */}
        <div className="space-y-6 lg:col-span-7">
          <SubtestSummaryCard
            title="Ringkasan Latihan TKP (6 Aspek)"
            subtitle="Pantau progres pengerjaan dan capaian skor 1–5 poin dari 6 aspek TKP SKD CPNS."
            summary={tkpSummary}
            buildPracticeHref={APP_ROUTES.tkpPatternPractice}
            isTkpPoints
          />
          <SubtestSummaryCard
            title="Ringkasan Latihan TWK (5 Pilar)"
            subtitle="Pantau progres pengerjaan dan akurasi dari 5 pilar Tes Wawasan Kebangsaan."
            summary={twkSummary}
            buildPracticeHref={APP_ROUTES.twkPatternPractice}
          />
          <SubtestSummaryCard
            title="Ringkasan Latihan TIU (9 Pola)"
            subtitle="Pantau progres pengerjaan dan akurasi dari setiap pola TIU SKD CPNS."
            summary={tiuSummary}
            buildPracticeHref={APP_ROUTES.tiuPatternPractice}
          />
        </div>
      </div>
    </div>
  );
}

type SummaryItem = {
  patternId: string;
  label: string;
  order: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  earnedPoints?: number;
  maxAnsweredPoints?: number;
};

function SubtestSummaryCard({
  title,
  subtitle,
  summary,
  buildPracticeHref,
  isTkpPoints = false,
}: {
  title: string;
  subtitle: string;
  summary: {
    totalQuestions: number;
    totalAnswered: number;
    totalCorrect: number;
    totalEarnedPoints?: number;
    totalMaxAnsweredPoints?: number;
    patterns: readonly SummaryItem[];
  };
  buildPracticeHref: (patternId: string) => string;
  isTkpPoints?: boolean;
}) {
  const accuracyPct = isTkpPoints
    ? (summary.totalMaxAnsweredPoints ?? 0) > 0
      ? Math.round(
          ((summary.totalEarnedPoints ?? 0) / (summary.totalMaxAnsweredPoints ?? 1)) * 100,
        )
      : 0
    : summary.totalAnswered > 0
      ? Math.round((summary.totalCorrect / summary.totalAnswered) * 100)
      : 0;

  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-950">{title}</h2>
          <p className="mt-0.5 text-xs text-slate-600">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-center">
            <p className="text-[11px] font-medium text-blue-700">Terjawab</p>
            <p className="text-sm font-bold text-blue-950">
              {summary.totalAnswered}/{summary.totalQuestions}
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-center">
            <p className="text-[11px] font-medium text-emerald-700">
              {isTkpPoints ? "Skor Poin" : "Akurasi"}
            </p>
            <p className="text-sm font-bold text-emerald-950">
              {isTkpPoints && summary.totalAnswered > 0
                ? `${summary.totalEarnedPoints ?? 0}/${summary.totalMaxAnsweredPoints ?? 0} (${accuracyPct}%)`
                : `${accuracyPct}%`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 divide-y divide-slate-100">
        {summary.patterns.map((pattern) => {
          const completionPct =
            pattern.totalQuestions > 0
              ? Math.round((pattern.answeredCount / pattern.totalQuestions) * 100)
              : 0;
          const patternAccuracy = isTkpPoints
            ? pattern.answeredCount > 0 && (pattern.maxAnsweredPoints ?? 0) > 0
              ? `${pattern.earnedPoints ?? 0}/${pattern.maxAnsweredPoints ?? 0} poin (${Math.round(
                  ((pattern.earnedPoints ?? 0) / (pattern.maxAnsweredPoints ?? 1)) * 100,
                )}%)`
              : null
            : pattern.answeredCount > 0
              ? `${Math.round((pattern.correctCount / pattern.answeredCount) * 100)}% benar`
              : null;

          return (
            <div
              key={pattern.patternId}
              className="flex flex-col gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-blue-700">
                    {pattern.order}
                  </span>
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {pattern.label}
                  </p>
                  {completionPct === 100 && (
                    <CheckCircle2
                      className="size-4 shrink-0 text-emerald-600"
                      aria-label="Selesai"
                    />
                  )}
                </div>

                <div className="mt-2 flex items-center gap-3 pl-8">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all"
                      style={{ width: `${completionPct}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs font-medium text-slate-600">
                    {pattern.answeredCount}/{pattern.totalQuestions}
                    {patternAccuracy !== null ? ` • ${patternAccuracy}` : ""}
                  </span>
                </div>
              </div>

              <Link
                href={buildPracticeHref(pattern.patternId)}
                className="ml-8 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline sm:ml-4"
              >
                Latih
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
