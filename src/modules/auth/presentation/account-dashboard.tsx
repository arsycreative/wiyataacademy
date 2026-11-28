"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cloud,
  CloudOff,
  Loader2,
  LogOut,
  Save,
  ShieldCheck,
  Trophy,
  User as UserIcon,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileSchema } from "@/modules/auth/domain/auth-schema";
import type { AllProgressSummaries } from "@/modules/question-bank/domain/progress-summary-types";
import {
  fetchProgressSummaries,
  hasLocalProgressDiff,
  mergePracticeProgress,
  readLocalTiuProgress,
  sanitizePracticeProgress,
  type SanitizedPracticeProgress,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  mergeTryoutHistoryRecords,
  type TryoutAttemptRankSummary,
} from "@/modules/tryout/domain/leaderboard";
import {
  readTryoutHistory,
  type TryoutHistoryRecord,
} from "@/modules/tryout/infrastructure/tryout-storage";
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
  isAdmin?: boolean;
  billingSection?: ReactNode;
  initialCloudProgress: SanitizedPracticeProgress | null;
  initialSummaries: AllProgressSummaries;
  initialSchemaMissing: boolean;
  initialCloudTryoutHistory?: readonly TryoutHistoryRecord[];
  nationalRank?: TryoutAttemptRankSummary | null;
};

type AccountTab = "progress" | "billing" | "settings";

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
  isAdmin = false,
  billingSection,
  initialCloudProgress,
  initialSummaries,
  initialSchemaMissing,
  initialCloudTryoutHistory = [],
  nationalRank = null,
}: AccountDashboardProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);

  const [activeTab, setActiveTab] = useState<AccountTab>("progress");
  const [fullName, setFullName] = useState(user.fullName);
  const [savedName, setSavedName] = useState(user.fullName);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [progressState, setProgressState] = useState<SanitizedPracticeProgress>(() =>
    initialCloudProgress ?? sanitizePracticeProgress({}),
  );
  const [summaries, setSummaries] = useState<AllProgressSummaries>(initialSummaries);
  const [tryoutHistory, setTryoutHistory] = useState<TryoutHistoryRecord[]>(() => [
    ...initialCloudTryoutHistory,
  ]);

  useEffect(() => {
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      setTryoutHistory(
        mergeTryoutHistoryRecords(readTryoutHistory(), initialCloudTryoutHistory),
      );
      const localProgress = readLocalTiuProgress();
      if (!localProgress) return;
      const merged = mergePracticeProgress(localProgress, initialCloudProgress);
      setProgressState(merged);
      if (hasLocalProgressDiff(localProgress, initialCloudProgress)) {
        void fetchProgressSummaries(merged).then((nextSummaries) => {
          if (!cancelled && nextSummaries) {
            setSummaries(nextSummaries);
          }
        });
      }
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [initialCloudProgress, initialCloudTryoutHistory]);

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

  return (
    <div className="space-y-6">
      {/* Header Profil Ringkas */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={savedName || user.email}
                width={56}
                height={56}
                className="size-14 rounded-xl border border-slate-200 object-cover"
              />
            ) : (
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                {getInitials(savedName, user.email)}
              </div>
            )}

            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold text-slate-950 sm:text-2xl">
                {savedName || "Peserta Wiyata Edu"}
              </h1>
              <p className="mt-0.5 truncate text-sm text-slate-500">
                {user.email} • Bergabung {formattedJoinDate}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {isAdmin && (
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-xs font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Link href={APP_ROUTES.admin}>
                  <ShieldCheck className="size-4 text-blue-600" aria-hidden />
                  Dashboard Admin
                </Link>
              </Button>
            )}
            <Button
              asChild
              className="bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 sm:text-sm"
            >
              <Link href={APP_ROUTES.tiuPatternPractice(progressState.lastPattern)}>
                <BookOpen className="size-4" aria-hidden />
                Lanjut Latihan
              </Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              disabled={isSigningOut}
              onClick={handleSignOut}
              className="text-xs font-medium text-slate-500 hover:bg-rose-50 hover:text-rose-600"
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

        {/* 3-Tab Navigation */}
        <div
          role="tablist"
          aria-label="Navigasi menu akun"
          className="mt-6 flex flex-wrap gap-1 border-t border-slate-100 pt-4"
        >
          {(
            [
              { id: "progress", label: "Progres Belajar" },
              { id: "billing", label: "Paket & Transaksi" },
              { id: "settings", label: "Pengaturan Profil" },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Tab 1: Progres Belajar */}
      {activeTab === "progress" && (
        <div className="space-y-5">
          {/* Riwayat Tryout CAT */}
          <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-slate-950">
                    Riwayat Tryout CAT SKD
                  </h2>
                  {nationalRank && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">
                      <Trophy className="size-3" aria-hidden />
                      Rank #{nationalRank.rank}/{nationalRank.totalParticipants} (Top{" "}
                      {nationalRank.topPercent}%)
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-slate-500">
                  Capaian skor simulasi berbatas waktu terhadap passing grade BKN (tersinkron ke Cloud).
                </p>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Link href={APP_ROUTES.tryout}>
                  Buka Tryout CAT
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            </div>

            {tryoutHistory.length === 0 ? (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-xs text-slate-600">
                <Clock className="size-4 shrink-0 text-slate-400" aria-hidden />
                <span>
                  Belum ada riwayat simulasi tryout di perangkat ini. Coba Mini Tryout gratis atau
                  Paket Resmi 110 soal.
                </span>
              </div>
            ) : (
              <div className="mt-4 divide-y divide-slate-100">
                {tryoutHistory.slice(0, 3).map((rec) => (
                  <div
                    key={rec.id}
                    className="flex flex-wrap items-center justify-between gap-2 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {rec.packageLabel}
                        </p>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                            rec.passed
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-rose-50 text-rose-700",
                          )}
                        >
                          {rec.passed ? (
                            <CheckCircle2 className="size-3" aria-hidden />
                          ) : (
                            <XCircle className="size-3" aria-hidden />
                          )}
                          {rec.passed ? "Lulus PG" : "Belum PG"}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-slate-500">
                        TWK {rec.subtests.TWK.score} • TIU {rec.subtests.TIU.score} • TKP{" "}
                        {rec.subtests.TKP.score}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                        {rec.totalScore}/{rec.maxScore}
                      </span>
                      <Link
                        href={APP_ROUTES.tryout}
                        className="text-xs font-semibold text-blue-700 hover:underline"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Ringkasan Subtes Collapsible */}
          <div className="grid gap-4 lg:grid-cols-3">
            <SubtestSummaryCard
              title="TWK (5 Pilar)"
              summary={summaries.twk}
              buildPracticeHref={APP_ROUTES.twkPatternPractice}
            />
            <SubtestSummaryCard
              title="TIU (9 Pola)"
              summary={summaries.tiu}
              buildPracticeHref={APP_ROUTES.tiuPatternPractice}
            />
            <SubtestSummaryCard
              title="TKP (6 Aspek)"
              summary={summaries.tkp}
              buildPracticeHref={APP_ROUTES.tkpPatternPractice}
              isTkpPoints
            />
          </div>
        </div>
      )}

      {/* Tab 2: Paket & Transaksi */}
      {activeTab === "billing" && <div>{billingSection}</div>}

      {/* Tab 3: Pengaturan Profil */}
      {activeTab === "settings" && (
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs lg:col-span-6">
            <div className="flex items-center gap-2 text-slate-900">
              <UserIcon className="size-4 text-blue-600" aria-hidden />
              <h2 className="text-base font-bold">Pengaturan Profil</h2>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Perbarui nama tampilan yang digunakan pada akun dan rapor tryout Anda.
            </p>

            <form onSubmit={handleProfileSave} noValidate className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="account-full-name"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Nama Lengkap
                </label>
                <input
                  id="account-full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={cn(
                    "mt-1.5 h-10 w-full rounded-xl border bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:ring-2",
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
                  className="block text-xs font-semibold text-slate-700"
                >
                  Email Terdaftar
                </label>
                <input
                  id="account-email"
                  type="email"
                  disabled
                  value={user.email}
                  className="mt-1.5 h-10 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-500"
                />
              </div>

              <Button
                type="submit"
                disabled={isSavingProfile}
                className="h-10 bg-blue-600 px-5 text-xs font-semibold text-white hover:bg-blue-700"
              >
                {isSavingProfile ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  <Save className="size-4" aria-hidden />
                )}
                Simpan Perubahan
              </Button>
            </form>
          </section>

          <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs lg:col-span-6">
            <h2 className="text-base font-bold text-slate-950">
              Status Sinkronisasi Cloud
            </h2>
            <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 text-xs text-slate-700">
              {initialSchemaMissing ? (
                <div className="flex items-start gap-2.5">
                  <CloudOff className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Skema tabel progres belum diterapkan
                    </p>
                    <p className="mt-1 leading-5 text-slate-600">
                      Progres latihan sementara tersimpan di browser ini. Jalankan migrasi
                      database di Supabase SQL Editor untuk mengaktifkan sinkronisasi cloud.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2.5">
                  <Cloud className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900">Sinkronisasi Cloud Aktif</p>
                    <p className="mt-1 leading-5 text-slate-600">
                      Jawaban latihan, penanda ragu-ragu, dan progres belajar tersimpan otomatis
                      ke akun Anda.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
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
  summary,
  buildPracticeHref,
  isTkpPoints = false,
}: {
  title: string;
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
  const [expanded, setExpanded] = useState(false);

  const completionPct =
    summary.totalQuestions > 0
      ? Math.round((summary.totalAnswered / summary.totalQuestions) * 100)
      : 0;

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
    <section className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-sm font-bold text-slate-950">{title}</h2>
          <p className="mt-0.5 text-xs text-slate-500">
            {summary.totalAnswered}/{summary.totalQuestions} terjawab • Akurasi {accuracyPct}%
          </p>
        </div>
        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">
          {completionPct}%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${completionPct}%` }}
        />
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-4 flex w-full items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-600 hover:text-blue-700"
      >
        <span>{expanded ? "Sembunyikan rincian pola" : `Lihat rincian (${summary.patterns.length} modul)`}</span>
        <ChevronDown
          className={cn("size-3.5 transition-transform", expanded && "rotate-180")}
          aria-hidden
        />
      </button>

      {expanded && (
        <div className="mt-3 divide-y divide-slate-100 border-t border-slate-100 pt-2">
          {summary.patterns.map((pattern) => {
            const pct =
              pattern.totalQuestions > 0
                ? Math.round((pattern.answeredCount / pattern.totalQuestions) * 100)
                : 0;
            return (
              <div
                key={pattern.patternId}
                className="flex items-center justify-between gap-2 py-2.5 text-xs"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-800">
                    {pattern.order}. {pattern.label}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {pattern.answeredCount}/{pattern.totalQuestions} ({pct}%)
                  </p>
                </div>
                <Link
                  href={buildPracticeHref(pattern.patternId)}
                  className="shrink-0 font-semibold text-blue-700 hover:underline"
                >
                  Latih &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
