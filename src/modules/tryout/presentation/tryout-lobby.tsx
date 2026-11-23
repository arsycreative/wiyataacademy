"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  FileText,
  History,
  Lock,
  Play,
  Shuffle,
  Sparkles,
  Trash2,
  XCircle,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  formatDurationClock,
  formatDurationVerbose,
  TRYOUT_MODE_CONFIGS,
  TRYOUT_PRESETS,
  type TryoutPreset,
} from "@/modules/tryout/domain/tryout-config";
import type {
  ActiveTryoutSession,
  TryoutHistoryRecord,
} from "@/modules/tryout/infrastructure/tryout-storage";
import { APP_ROUTES } from "@/shared/constants/app";

type TryoutLobbyProps = {
  hasOfficialAccess?: boolean;
  activeSession: ActiveTryoutSession | null;
  activeRemainingSec: number;
  history: readonly TryoutHistoryRecord[];
  onStartPreset: (preset: TryoutPreset) => void;
  onResumeActive: () => void;
  onDiscardActive: () => void;
  onOpenHistory: (record: TryoutHistoryRecord) => void;
  onDeleteHistory: (recordId: string) => void;
};

function formatDateId(iso: string): string {
  try {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function TryoutLobby({
  hasOfficialAccess = true,
  activeSession,
  activeRemainingSec,
  history,
  onStartPreset,
  onResumeActive,
  onDiscardActive,
  onOpenHistory,
  onDeleteHistory,
}: TryoutLobbyProps) {
  const officialCfg = TRYOUT_MODE_CONFIGS.official;
  const activeAnswered = activeSession ? Object.keys(activeSession.answers).length : 0;
  const activeTotal = activeSession
    ? TRYOUT_MODE_CONFIGS[activeSession.mode].totalQuestions
    : 0;

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      {/* Header & Ringkasan Standar BKN */}
      <div className="border-b border-slate-200/80 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          Simulasi CAT • SKD CPNS
        </p>
        <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Tryout CAT SKD Resmi
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
          Simulasi 110 soal dalam 100 menit sesuai standar BKN. Pembahasan lengkap dan
          smart rekomendasi belajar dibuka setelah ujian selesai.
        </p>

        {/* Strip Ringkas Ambang Batas BKN */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-xs text-slate-600 shadow-2xs">
          <span className="font-semibold text-slate-900">Standar Resmi BKN:</span>
          <span>
            <strong className="text-slate-900">TWK</strong> {officialCfg.subtests.TWK.questionCount} soal (PG {officialCfg.subtests.TWK.passingGrade})
          </span>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <span>
            <strong className="text-slate-900">TIU</strong> {officialCfg.subtests.TIU.questionCount} soal (PG {officialCfg.subtests.TIU.passingGrade})
          </span>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <span>
            <strong className="text-slate-900">TKP</strong> {officialCfg.subtests.TKP.questionCount} soal (PG {officialCfg.subtests.TKP.passingGrade})
          </span>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <span className="font-semibold text-blue-700">100 Menit (Maks 550)</span>
        </div>
      </div>

      {/* Banner Lanjutkan Sesi Aktif */}
      {activeSession && (
        <section className="mt-6 rounded-2xl border-2 border-amber-300 bg-amber-50/90 p-5 shadow-xs sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Clock className="size-4" aria-hidden />
                Sesi Tryout Sedang Berjalan
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">
                {activeSession.packageLabel}
              </h2>
              <p className="mt-1 text-sm text-slate-700">
                Terjawab <strong>{activeAnswered}</strong> dari{" "}
                <strong>{activeTotal}</strong> soal • Sisa waktu{" "}
                <strong className="font-mono text-amber-900">
                  {formatDurationClock(activeRemainingSec)}
                </strong>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                type="button"
                onClick={onResumeActive}
                className="bg-amber-600 font-semibold text-white hover:bg-amber-700"
              >
                <Play className="size-4" aria-hidden />
                Lanjutkan Tryout
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onDiscardActive}
                className="border-amber-300 bg-white text-slate-700 hover:bg-rose-50 hover:text-rose-700"
              >
                Batalkan Sesi
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Pilihan Paket Tryout */}
      <section className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Pilih Paket Simulasi</h2>
            <p className="mt-1 text-sm text-slate-600">
              Paket Resmi 01–03 memiliki susunan soal konsisten untuk pembandingan skor. Paket Acak
              menghasilkan kombinasi baru setiap kali mulai.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRYOUT_PRESETS.map((preset) => {
            const cfg = TRYOUT_MODE_CONFIGS[preset.mode];
            const isMini = preset.mode === "mini";
            const isLocked = !hasOfficialAccess && !isMini;
            const isDynamic = !preset.fixedSeed && !isMini;
            const pastForPreset = history.filter((h) => h.presetId === preset.id);
            const bestScore =
              pastForPreset.length > 0
                ? Math.max(...pastForPreset.map((h) => h.totalScore))
                : null;

            return (
              <div
                key={preset.id}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-2xs transition hover:shadow-md",
                  isMini
                    ? "border-teal-200/80 hover:border-teal-300"
                    : isDynamic
                      ? "border-violet-200/80 hover:border-violet-300"
                      : "border-blue-100 hover:border-blue-300",
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold",
                        isMini
                          ? "bg-teal-50 text-teal-800"
                          : isDynamic
                            ? "bg-violet-50 text-violet-800"
                            : "bg-blue-50 text-blue-800",
                      )}
                    >
                      {isMini ? (
                        <Zap className="size-3" aria-hidden />
                      ) : isDynamic ? (
                        <Shuffle className="size-3" aria-hidden />
                      ) : (
                        <Sparkles className="size-3" aria-hidden />
                      )}
                      {preset.badge}
                      {isMini && !hasOfficialAccess ? " • Gratis" : ""}
                    </span>

                    {isLocked ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                        <Lock className="size-3" aria-hidden />
                        Premium
                      </span>
                    ) : bestScore !== null ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                        <Award className="size-3.5" aria-hidden />
                        Terbaik: {bestScore}/{cfg.maxScore}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-950 sm:text-lg">{preset.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">{preset.subtitle}</p>

                  <p className="mt-3.5 text-xs font-medium text-slate-500">
                    TWK {cfg.subtests.TWK.questionCount} • TIU {cfg.subtests.TIU.questionCount} • TKP{" "}
                    {cfg.subtests.TKP.questionCount} •{" "}
                    <span className="font-semibold text-slate-800">
                      {Math.round(cfg.durationSec / 60)} menit
                    </span>
                  </p>
                </div>

                {isLocked ? (
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 w-full border-amber-300 bg-amber-50/70 font-semibold text-amber-900 hover:bg-amber-100"
                  >
                    <Link href={APP_ROUTES.pricing}>
                      <Lock className="size-4" aria-hidden />
                      Buka Akses Paket
                    </Link>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => onStartPreset(preset)}
                    className={cn(
                      "mt-5 w-full font-semibold text-white",
                      isMini
                        ? "bg-teal-600 hover:bg-teal-700"
                        : isDynamic
                          ? "bg-violet-600 hover:bg-violet-700"
                          : "bg-blue-600 hover:bg-blue-700",
                    )}
                  >
                    Mulai Simulasi
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Riwayat Tryout CAT */}
      <section className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <History className="size-5 text-blue-700" aria-hidden />
            <h2 className="text-lg font-semibold text-slate-950">Riwayat Tryout CAT</h2>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Tersimpan otomatis di perangkat ini ({history.length} sesi)
          </span>
        </div>

        {history.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-8 text-center">
            <FileText className="mx-auto size-8 text-slate-400" aria-hidden />
            <p className="mt-2 text-sm font-semibold text-slate-800">
              Belum ada riwayat tryout CAT
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Pilih salah satu paket simulasi di atas untuk mengukur skor TWK, TIU, dan TKP Anda
              berdasarkan passing grade BKN.
            </p>
          </div>
        ) : (
          <div className="mt-4 divide-y divide-slate-100">
            {history.map((record) => (
              <div
                key={record.id}
                className="flex flex-col gap-3 py-4 first:pt-1 last:pb-0 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-950">{record.packageLabel}</p>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                        record.passed
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700",
                      )}
                    >
                      {record.passed ? (
                        <CheckCircle2 className="size-3.5" aria-hidden />
                      ) : (
                        <XCircle className="size-3.5" aria-hidden />
                      )}
                      {record.passed ? "LULUS PG" : "BELUM LULUS PG"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {formatDateId(record.completedAt)} • Durasi{" "}
                    {formatDurationVerbose(record.durationUsedSec)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {(["TWK", "TIU", "TKP"] as const).map((sub) => {
                    const st = record.subtests[sub];
                    return (
                      <span
                        key={sub}
                        className={cn(
                          "rounded-lg border px-2.5 py-1 text-xs font-semibold",
                          st.passed
                            ? "border-emerald-200 bg-emerald-50/70 text-emerald-800"
                            : "border-rose-200 bg-rose-50/70 text-rose-800",
                        )}
                      >
                        {sub}: {st.score}
                        <span className="opacity-70">/{st.passingGrade}</span>
                      </span>
                    );
                  })}

                  <span className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                    Total {record.totalScore}/{record.maxScore}
                  </span>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => onOpenHistory(record)}
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    Rapor &amp; Pembahasan
                  </Button>

                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    aria-label={`Hapus riwayat ${record.packageLabel}`}
                    onClick={() => onDeleteHistory(record.id)}
                    className="size-8 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

