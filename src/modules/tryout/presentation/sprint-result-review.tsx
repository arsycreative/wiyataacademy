"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Gauge,
  Lightbulb,
  RotateCcw,
  Target,
  Timer,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { OptionKey } from "@/modules/question-bank/domain/question";
import { formatSubPatternLabel } from "@/modules/question-bank/presentation/practice-ui-primitives";
import {
  OptionContent,
  QuestionPrompt,
} from "@/modules/question-bank/presentation/question-content";
import type { SprintEvaluation } from "@/modules/tryout/domain/sprint-config";
import {
  buildPatternPracticeHref,
  formatDurationVerbose,
  type TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-config";
import { APP_ROUTES } from "@/shared/constants/app";

type ReviewFilter = "all" | "wrong" | "slow";

type SprintResultReviewProps = {
  items: readonly TryoutQuestionItem[];
  answers: Readonly<Record<string, OptionKey>>;
  evaluation: SprintEvaluation;
  onBackToLobby: () => void;
  onRetakeSameConfig: () => void;
};

export function SprintResultReview({
  items,
  answers,
  evaluation,
  onBackToLobby,
  onRetakeSameConfig,
}: SprintResultReviewProps) {
  const [filter, setFilter] = useState<ReviewFilter>("all");

  const resultMap = useMemo(() => {
    const map = new Map<string, (typeof evaluation.questionResults)[number]>();
    for (const r of evaluation.questionResults) map.set(r.questionId, r);
    return map;
  }, [evaluation]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const res = resultMap.get(item.question.id);
      if (!res) return false;
      if (filter === "wrong") return !res.isOptimal;
      if (filter === "slow") return res.isSlow;
      return true;
    });
  }, [items, filter, resultMap]);

  const wrongCount = evaluation.questionResults.filter((r) => !r.isOptimal).length;
  const slowCount = evaluation.questionResults.filter((r) => r.isSlow).length;

  const paceLabel =
    evaluation.paceStatus === "fast"
      ? "Cepat • Di Bawah Target"
      : evaluation.paceStatus === "on_track"
        ? "Stabil • Sesuai Target"
        : "Perlu Percepatan";

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      {/* Top Nav */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={onBackToLobby}
          className="-ml-2 text-blue-700 hover:bg-blue-50"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Kembali ke Lobi Sprint
        </Button>

        <div className="flex flex-wrap items-center gap-2">
          {evaluation.patternId && evaluation.subtest !== "SKD" && (
            <Button
              asChild
              variant="outline"
              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              <Link
                href={buildPatternPracticeHref(evaluation.subtest, evaluation.patternId)}
              >
                <BookOpen className="size-4" aria-hidden />
                Buka Cheat Sheet &amp; Bank Soal
              </Link>
            </Button>
          )}
          <Button
            type="button"
            onClick={onRetakeSameConfig}
            className="bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            <RotateCcw className="size-4" aria-hidden />
            Ulangi Sprint Baru
          </Button>
        </div>
      </div>

      {/* Summary Banner */}
      <section className="rounded-3xl border border-indigo-200 bg-[linear-gradient(135deg,#eef2ff_0%,#ffffff_55%,#ecfdf5_100%)] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
                evaluation.paceStatus === "fast"
                  ? "bg-emerald-600 text-white"
                  : evaluation.paceStatus === "on_track"
                    ? "bg-blue-600 text-white"
                    : "bg-amber-600 text-white",
              )}
            >
              <Gauge className="size-3.5" aria-hidden />
              {paceLabel}
            </span>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {evaluation.packageLabel}
            </h1>
            <p className="mt-1.5 text-sm text-slate-600">
              Terjawab {evaluation.answeredCount}/{evaluation.totalQuestions} soal dalam{" "}
              {formatDurationVerbose(evaluation.durationUsedSec)} (batas{" "}
              {formatDurationVerbose(evaluation.durationLimitSec)}).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl border border-indigo-100 bg-white p-4 text-center shadow-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Skor Total
              </p>
              <p className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                {evaluation.totalScore}
                <span className="text-sm font-medium text-slate-400">
                  /{evaluation.maxScore}
                </span>
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-center shadow-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Ketepatan
              </p>
              <p className="mt-1 text-2xl font-extrabold text-emerald-700 sm:text-3xl">
                {evaluation.accuracyPct}%
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Rata Kecepatan
              </p>
              <p className="mt-1 text-2xl font-extrabold text-blue-700 sm:text-3xl">
                {evaluation.avgSecondsPerAnswered}
                <span className="text-sm font-medium text-slate-500"> dtk</span>
              </p>
              <p className="text-[10px] text-slate-500">
                Target ≤ {evaluation.targetSecondsPerQuestion} dtk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Speed & Sub-patterns */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Top 3 Slowest Questions */}
        <section className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex items-center gap-2">
            <Timer className="size-5 text-amber-600" aria-hidden />
            <h2 className="text-base font-bold text-slate-950">
              3 Soal Paling Menyita Waktu
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-600">
            Audit nomor yang memakan waktu di atas target BKN agar di CAT sesungguhnya cepat
            ditandai ragu-ragu lalu dilewati sementara.
          </p>

          <div className="mt-4 space-y-2.5">
            {evaluation.slowestQuestions.map((sq) => {
              const overTarget = sq.spentSec > Math.round(sq.targetSec * 1.25);
              return (
                <div
                  key={sq.questionId}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">
                        Soal #{sq.number}
                      </span>
                      <span className="truncate text-xs font-semibold text-slate-800">
                        {sq.patternLabel}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Status:{" "}
                      <span
                        className={cn(
                          "font-semibold",
                          sq.isOptimal ? "text-emerald-700" : "text-rose-700",
                        )}
                      >
                        {sq.isOptimal ? "Benar / Skor 5" : "Perlu Perbaikan"}
                      </span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold tabular-nums",
                        overTarget
                          ? "bg-rose-100 text-rose-800"
                          : "bg-blue-50 text-blue-700",
                      )}
                    >
                      <Clock className="size-3" aria-hidden />
                      {sq.spentSec} dtk
                    </span>
                    <p className="mt-0.5 text-[10px] text-slate-500">Target {sq.targetSec} dtk</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SubPattern Breakdown */}
        <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex items-center gap-2">
            <Target className="size-5 text-blue-600" aria-hidden />
            <h2 className="text-base font-bold text-slate-950">
              Ketepatan &amp; Kecepatan per Sub-Topik
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-600">
            Diurutkan dari topik dengan rasio skor terendah ke tertinggi.
          </p>

          <div className="mt-4 space-y-2.5">
            {evaluation.subPatternBreakdown.map((sub) => {
              const pct =
                sub.maxPoints > 0 ? Math.round((sub.earnedPoints / sub.maxPoints) * 100) : 0;
              return (
                <div
                  key={sub.subPattern}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-slate-900">
                      {formatSubPatternLabel(sub.subPattern)}
                    </span>
                    <span className="tabular-nums text-slate-600">
                      {sub.correctCount}/{sub.total} optimal • <strong>{sub.avgSpentSec} dtk</strong>
                      /soal
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        pct >= 80
                          ? "bg-emerald-500"
                          : pct >= 50
                            ? "bg-blue-600"
                            : "bg-rose-500",
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Question-by-Question Review */}
      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-950">
            Pembahasan Lengkap &amp; Waktu per Soal
          </h2>

          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                filter === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              )}
            >
              Semua ({items.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("wrong")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                filter === "wrong"
                  ? "bg-rose-600 text-white"
                  : "bg-rose-50 text-rose-800 hover:bg-rose-100",
              )}
            >
              Belum Optimal ({wrongCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter("slow")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                filter === "slow"
                  ? "bg-amber-600 text-white"
                  : "bg-amber-50 text-amber-800 hover:bg-amber-100",
              )}
            >
              Melebihi Target Waktu ({slowCount})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => {
            const q = item.question;
            const res = resultMap.get(q.id)!;
            const userKey = answers[q.id];

            return (
              <article
                key={q.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                      #{item.number}
                    </span>
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                      {item.patternLabel}
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                      {formatSubPatternLabel(q.subPattern)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums",
                        res.isSlow
                          ? "bg-amber-100 text-amber-900"
                          : "bg-slate-100 text-slate-700",
                      )}
                    >
                      <Clock className="size-3" aria-hidden />
                      {res.spentSec} dtk
                      {res.isSlow ? ` (> target ${res.targetSec} dtk)` : ""}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold",
                        res.isOptimal
                          ? "bg-emerald-50 text-emerald-700"
                          : res.earnedPoints > 0
                            ? "bg-sky-50 text-sky-700"
                            : "bg-rose-50 text-rose-700",
                      )}
                    >
                      {res.isOptimal ? (
                        <CheckCircle2 className="size-3.5" aria-hidden />
                      ) : res.earnedPoints > 0 ? (
                        <AlertTriangle className="size-3.5" aria-hidden />
                      ) : (
                        <XCircle className="size-3.5" aria-hidden />
                      )}
                      {q.subtest === "TKP"
                        ? `+${res.earnedPoints} / 5 Poin`
                        : res.isOptimal
                          ? "Benar (+5)"
                          : res.isUnanswered
                            ? "Kosong (0)"
                            : "Salah (0)"}
                    </span>
                  </div>
                </div>

                <QuestionPrompt content={q.prompt} />

                <div className="mt-4 space-y-2">
                  {q.options.map((opt) => {
                    const isCorrect = opt.key === q.answer;
                    const isUserChoice = opt.key === userKey;
                    const tkpScore = q.optionScores?.[opt.key];

                    return (
                      <div
                        key={opt.key}
                        className={cn(
                          "flex items-start justify-between gap-3 rounded-xl border p-3 text-sm",
                          isCorrect
                            ? "border-emerald-500 bg-emerald-50/80"
                            : isUserChoice
                              ? "border-rose-400 bg-rose-50/80"
                              : "border-slate-200 bg-white",
                        )}
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={cn(
                              "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold",
                              isCorrect
                                ? "bg-emerald-600 text-white"
                                : isUserChoice
                                  ? "bg-rose-600 text-white"
                                  : "bg-slate-100 text-slate-700",
                            )}
                          >
                            {opt.key}
                          </span>
                          <OptionContent text={opt.text} />
                        </div>

                        <div className="flex shrink-0 items-center gap-1.5 text-[11px] font-bold">
                          {tkpScore !== undefined && (
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-700">
                              Skor {tkpScore}
                            </span>
                          )}
                          {isUserChoice && (
                            <span className="rounded-md bg-blue-600 px-2 py-0.5 text-white">
                              Pilihanmu
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 space-y-2.5 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-700 sm:text-sm">
                  <p>
                    <strong className="text-slate-950">Pembahasan:</strong> {q.explanation}
                  </p>
                  {q.tip && (
                    <p className="flex items-start gap-2 rounded-lg bg-amber-50/90 px-3 py-2 text-amber-950">
                      <Lightbulb className="mt-1 size-4 shrink-0 text-amber-600" aria-hidden />
                      <span>
                        <strong>Trik Cepat:</strong> {q.tip}
                      </span>
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="border-blue-200 text-blue-700">
            <Link href={APP_ROUTES.tryout}>
              Siap uji ketahanan penuh 100 menit? Lanjut ke Tryout CAT 110 Soal
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
