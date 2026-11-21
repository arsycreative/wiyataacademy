"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Award,
  Clock,
  Flame,
  Gauge,
  History,
  Loader2,
  Play,
  SlidersHorizontal,
  Trash2,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  TKP_PATTERN_IDS,
  TKP_PATTERNS,
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
  type PracticePatternId,
  type QuestionSubtest,
} from "@/modules/question-bank/domain/question";
import {
  SPRINT_DURATIONS,
  SPRINT_PRESETS,
  type SprintDifficultyFilter,
  type SprintDurationMinutes,
  type SprintStartRequest,
  type SprintSubtestScope,
} from "@/modules/tryout/domain/sprint-config";
import type { SprintHistoryRecord } from "@/modules/tryout/infrastructure/sprint-storage";
import { formatDurationVerbose } from "@/modules/tryout/domain/tryout-config";
import { APP_ROUTES } from "@/shared/constants/app";

type SprintLobbyProps = {
  initialSubtest?: SprintSubtestScope;
  initialPatternId?: PracticePatternId | null;
  initialDuration?: SprintDurationMinutes;
  isStarting: boolean;
  history: readonly SprintHistoryRecord[];
  onStartSprint: (req: SprintStartRequest) => void;
  onClearHistory: () => void;
};

function getPatternOptions(subtest: QuestionSubtest) {
  if (subtest === "TWK") {
    return TWK_PATTERN_IDS.map((id) => ({ id, label: `${TWK_PATTERNS[id].order}. ${TWK_PATTERNS[id].label}` }));
  }
  if (subtest === "TKP") {
    return TKP_PATTERN_IDS.map((id) => ({ id, label: `${TKP_PATTERNS[id].order}. ${TKP_PATTERNS[id].label}` }));
  }
  return TIU_PATTERN_IDS.map((id) => ({ id, label: `${TIU_PATTERNS[id].order}. ${TIU_PATTERNS[id].label}` }));
}

export function SprintLobby({
  initialSubtest = "TIU",
  initialPatternId = null,
  initialDuration = 10,
  isStarting,
  history,
  onStartSprint,
  onClearHistory,
}: SprintLobbyProps) {
  const [subtest, setSubtest] = useState<SprintSubtestScope>(initialSubtest);
  const [patternId, setPatternId] = useState<PracticePatternId | "ALL">(
    initialPatternId ?? "ALL",
  );
  const [durationMinutes, setDurationMinutes] = useState<SprintDurationMinutes>(initialDuration);
  const [difficultyFilter, setDifficultyFilter] = useState<SprintDifficultyFilter>("HOTS");

  const patternOptions = subtest === "SKD" ? [] : getPatternOptions(subtest);

  const handleSubtestChange = (nextSubtest: SprintSubtestScope) => {
    setSubtest(nextSubtest);
    setPatternId("ALL");
  };

  const handleCustomStart = () => {
    onStartSprint({
      subtest,
      patternId: subtest === "SKD" || patternId === "ALL" ? null : patternId,
      durationMinutes,
      difficultyFilter,
    });
  };

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      {/* Header Hero */}
      <div className="mb-8 flex flex-col gap-4 border-b border-blue-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Button
            asChild
            variant="ghost"
            className="-ml-2 mb-3 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={APP_ROUTES.home}>
              <ArrowLeft className="size-4" aria-hidden />
              Kembali ke Beranda
            </Link>
          </Button>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
            <Zap className="size-3.5" aria-hidden />
            SPRINT DRILL 10–15 MENIT • LATIH KECEPATAN CAT
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Sprint Drill SKD Berbatas Waktu
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Latih kecepatan 15 soal dalam 10–15 menit dengan stopwatch per nomor soal. Cocok
            untuk latihan harian di sela kerja dan mengaudit soal mana yang paling menyita waktu.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-fit border-slate-300 text-slate-800 hover:bg-slate-50"
        >
          <Link href={APP_ROUTES.tryout}>
            <Award className="size-4 text-blue-600" aria-hidden />
            Buka Simulasi Tryout Penuh (110 Soal)
          </Link>
        </Button>
      </div>

      {/* Presets Section */}
      <section aria-labelledby="sprint-presets-heading" className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 id="sprint-presets-heading" className="text-lg font-semibold text-slate-950">
            Paket Sprint Siap Mulai (15 Soal)
          </h2>
          <span className="text-xs text-slate-500">
            Kunci &amp; pembahasan hanya dibuka setelah selesai
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SPRINT_PRESETS.map((preset) => (
            <div
              key={preset.id}
              className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/50 transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">
                  <Clock className="size-3" aria-hidden />
                  {preset.badge}
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-950">{preset.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{preset.subtitle}</p>
              </div>

              <Button
                type="button"
                disabled={isStarting}
                onClick={() => onStartSprint(preset.config)}
                className="mt-5 w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
              >
                {isStarting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Menyiapkan Soal...
                  </>
                ) : (
                  <>
                    <Play className="size-4" aria-hidden />
                    Mulai Sprint ({preset.config.durationMinutes} Menit)
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Builder + History */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Custom Builder */}
        <section className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-100/40 lg:col-span-7">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <SlidersHorizontal className="size-4" aria-hidden />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-950">
                Rakitan Sprint Khusus (Pilih Pola Sendiri)
              </h2>
              <p className="text-xs text-slate-600">
                Bidik tepat 1 dari 20 modul TWK/TIU/TKP atau campuran subtes sesuai titik lemahmu.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {/* Step 1: Subtes */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                1. Pilih Subtes
              </p>
              <div className="grid grid-cols-4 gap-2">
                {(["TWK", "TIU", "TKP", "SKD"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSubtestChange(item)}
                    className={cn(
                      "rounded-xl border px-3 py-2 text-xs font-bold transition-colors sm:text-sm",
                      subtest === item
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50/70",
                    )}
                  >
                    {item === "SKD" ? "Campuran SKD" : item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pola / Pilar / Aspek */}
            {subtest !== "SKD" && (
              <div>
                <label
                  htmlFor="sprint-pattern-select"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  2. Pilih Pilar / Pola / Aspek ({subtest})
                </label>
                <select
                  id="sprint-pattern-select"
                  value={patternId}
                  onChange={(e) => setPatternId(e.target.value as PracticePatternId | "ALL")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="ALL">Semua Modul {subtest} (Acak Berimbang)</option>
                  {patternOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 3: Duration & Difficulty */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {subtest === "SKD" ? "2." : "3."} Durasi Sprint (15 Soal)
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {SPRINT_DURATIONS.map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDurationMinutes(mins)}
                      className={cn(
                        "rounded-xl border px-2.5 py-2 text-xs font-bold transition-colors",
                        durationMinutes === mins
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-indigo-50",
                      )}
                    >
                      {mins} Menit
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {subtest === "SKD" ? "3." : "4."} Tingkat Kesulitan
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDifficultyFilter("HOTS")}
                    className={cn(
                      "inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-colors",
                      difficultyFilter === "HOTS"
                        ? "border-amber-600 bg-amber-600 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-amber-50",
                    )}
                  >
                    <Flame className="size-3.5" aria-hidden />
                    HOTS Fokus
                  </button>
                  <button
                    type="button"
                    onClick={() => setDifficultyFilter("ALL")}
                    className={cn(
                      "rounded-xl border px-3 py-2 text-xs font-bold transition-colors",
                      difficultyFilter === "ALL"
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    Semua Level
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="button"
              size="lg"
              disabled={isStarting}
              onClick={handleCustomStart}
              className="mt-2 w-full bg-slate-900 font-semibold text-white hover:bg-slate-800"
            >
              {isStarting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Menyiapkan 15 Soal Sprint...
                </>
              ) : (
                <>
                  <Zap className="size-4 text-amber-400" aria-hidden />
                  Mulai Sprint 15 Soal ({durationMinutes} Menit)
                </>
              )}
            </Button>
          </div>
        </section>

        {/* Sprint History */}
        <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/40 lg:col-span-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <History className="size-4 text-blue-600" aria-hidden />
              <h2 className="text-base font-bold text-slate-950">Riwayat Sprint Terbaru</h2>
            </div>
            {history.length > 0 && (
              <button
                type="button"
                onClick={onClearHistory}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-rose-600"
              >
                <Trash2 className="size-3.5" aria-hidden />
                Hapus
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-5 text-center text-xs leading-6 text-slate-600">
              <Gauge className="mx-auto mb-2 size-7 text-blue-500" aria-hidden />
              Belum ada sesi Sprint di perangkat ini. Pilih paket 10 atau 15 menit untuk mulai
              mengukur kecepatan pengerjaanmu!
            </div>
          ) : (
            <div className="mt-4 space-y-2.5">
              {history.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-bold text-slate-900">{item.packageLabel}</p>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold",
                        item.paceStatus === "fast"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.paceStatus === "on_track"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-amber-50 text-amber-800",
                      )}
                    >
                      {item.avgSecondsPerAnswered} dtk/soal
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
                    <span>
                      Skor{" "}
                      <strong className="text-slate-900">
                        {item.totalScore}/{item.maxScore}
                      </strong>
                    </span>
                    <span>Akurasi {item.accuracyPct}%</span>
                    <span>Selesai {formatDurationVerbose(item.durationUsedSec)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

