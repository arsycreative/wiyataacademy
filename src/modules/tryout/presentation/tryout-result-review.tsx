"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  Lightbulb,
  RotateCcw,
  Target,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { OptionKey, QuestionSubtest } from "@/modules/question-bank/domain/question";
import { formatSubPatternLabel } from "@/modules/question-bank/presentation/practice-ui-primitives";
import {
  OptionContent,
  QuestionPrompt,
} from "@/modules/question-bank/presentation/question-content";
import {
  buildPatternPracticeHref,
  formatDurationVerbose,
  TRYOUT_SUBTEST_ORDER,
  type TryoutEvaluation,
  type TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-engine";

type ReviewSubtestFilter = "ALL" | QuestionSubtest;
type ReviewStatusFilter = "all" | "wrong" | "unanswered" | "optimal" | "flagged";

const PAGE_SIZE = 10;

type TryoutResultReviewProps = {
  packageLabel: string;
  items: readonly TryoutQuestionItem[];
  answers: Readonly<Record<string, OptionKey>>;
  flagged: Readonly<Record<string, boolean>>;
  evaluation: TryoutEvaluation;
  onBackToLobby: () => void;
  onRetakeFresh: () => void;
};

export function TryoutResultReview({
  packageLabel,
  items,
  answers,
  flagged,
  evaluation,
  onBackToLobby,
  onRetakeFresh,
}: TryoutResultReviewProps) {
  const [subtestFilter, setSubtestFilter] = useState<ReviewSubtestFilter>("ALL");
  const [statusFilter, setStatusFilter] = useState<ReviewStatusFilter>("all");
  const [page, setPage] = useState(1);

  const resultByQuestionId = useMemo(() => {
    const map = new Map<string, (typeof evaluation.questionResults)[number]>();
    for (const r of evaluation.questionResults) {
      map.set(r.questionId, r);
    }
    return map;
  }, [evaluation]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (subtestFilter !== "ALL" && item.subtest !== subtestFilter) return false;
      const res = resultByQuestionId.get(item.question.id);
      if (!res) return false;
      if (statusFilter === "wrong") return !res.isOptimal;
      if (statusFilter === "unanswered") return res.isUnanswered;
      if (statusFilter === "optimal") return res.isOptimal;
      if (statusFilter === "flagged") return Boolean(flagged[item.question.id]);
      return true;
    });
  }, [items, subtestFilter, statusFilter, resultByQuestionId, flagged]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filteredItems.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const wrongCount = evaluation.questionResults.filter((r) => !r.isOptimal).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      {/* Top Actions */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={onBackToLobby}
          className="-ml-2 text-blue-700 hover:bg-blue-50"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Kembali ke Lobi Tryout
        </Button>

        <Button
          type="button"
          onClick={onRetakeFresh}
          className="bg-blue-600 font-semibold text-white hover:bg-blue-700"
        >
          <RotateCcw className="size-4" aria-hidden />
          Coba Paket Baru
        </Button>
      </div>

      {/* Verdict Hero Banner */}
      <section
        className={cn(
          "rounded-3xl border p-6 shadow-sm sm:p-8",
          evaluation.passed
            ? "border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_55%,#f0fdf4_100%)]"
            : "border-rose-200 bg-[linear-gradient(135deg,#fff1f2_0%,#ffffff_55%,#fff7ed_100%)]",
        )}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
                evaluation.passed
                  ? "bg-emerald-600 text-white"
                  : "bg-rose-600 text-white",
              )}
            >
              {evaluation.passed ? (
                <Award className="size-4" aria-hidden />
              ) : (
                <XCircle className="size-4" aria-hidden />
              )}
              {evaluation.passed
                ? "LULUS AMBANG BATAS SKD"
                : `BELUM MEMENUHI AMBANG BATAS (${evaluation.failedSubtests.join(", ")})`}
            </span>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Rapor {packageLabel}
            </h1>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
              {evaluation.passed
                ? "Selamat! Seluruh subtes TWK, TIU, dan TKP melampaui nilai ambang batas. Pertahankan akurasi dan tingkatkan poin optimal untuk posisi peringkat tertinggi."
                : `Berdasarkan aturan SKD BKN, kelulusan mewajibkan ketiga subtes memenuhi passing grade. Fokus perbaiki subtes ${evaluation.failedSubtests.join(" dan ")} melalui evaluasi pola di bawah.`}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="min-w-[130px] rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-center shadow-2xs">
              <p className="text-xs font-medium text-slate-500">Total Skor SKD</p>
              <p className="mt-0.5 text-3xl font-extrabold text-slate-950">
                {evaluation.totalScore}
                <span className="text-sm font-semibold text-slate-400">
                  /{evaluation.maxScore}
                </span>
              </p>
            </div>

            <div className="min-w-[140px] rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-center shadow-2xs">
              <p className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                <Clock className="size-3.5" aria-hidden />
                Waktu &amp; Ritme
              </p>
              <p className="mt-1 text-sm font-bold text-slate-950">
                {formatDurationVerbose(evaluation.durationUsedSec)}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                ~{evaluation.avgSecondsPerAnswered} dtk/soal terjawab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Subtest Passing-Grade Cards */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {TRYOUT_SUBTEST_ORDER.map((sub) => {
          const st = evaluation.subtests[sub];
          const scorePct = Math.min(100, Math.round((st.score / st.maxScore) * 100));
          const pgPct = Math.round((st.passingGrade / st.maxScore) * 100);

          return (
            <div
              key={sub}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {st.subtest}
                  </p>
                  <h2 className="text-sm font-semibold text-slate-900">{st.label}</h2>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                    st.passed
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700",
                  )}
                >
                  {st.passed ? (
                    <CheckCircle2 className="size-3.5" aria-hidden />
                  ) : (
                    <XCircle className="size-3.5" aria-hidden />
                  )}
                  {st.passed ? "Lulus" : "Kurang PG"}
                </span>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <p className="text-3xl font-extrabold text-slate-950">
                  {st.score}
                  <span className="text-sm font-medium text-slate-400">/{st.maxScore}</span>
                </p>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    st.passed ? "text-emerald-700" : "text-rose-700",
                  )}
                >
                  PG {st.passingGrade} ({st.gapToPassing >= 0 ? `+${st.gapToPassing}` : st.gapToPassing})
                </span>
              </div>

              {/* Progress bar with PG vertical marker */}
              <div className="relative mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    st.passed ? "bg-emerald-500" : "bg-rose-500",
                  )}
                  style={{ width: `${scorePct}%` }}
                />
                <span
                  title={`Ambang batas: ${st.passingGrade}`}
                  className="absolute bottom-0 top-0 w-0.5 bg-slate-900"
                  style={{ left: `${pgPct}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-medium text-emerald-800">
                  {sub === "TKP" ? `Poin 5: ${st.correctCount}` : `Benar: ${st.correctCount}`}
                </span>
                <span className="rounded-md bg-rose-50 px-2 py-0.5 font-medium text-rose-800">
                  {sub === "TKP" ? `Poin 1–4: ${st.wrongCount}` : `Salah: ${st.wrongCount}`}
                </span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
                  Kosong: {st.unansweredCount}
                </span>
              </div>

              {st.tkpDistribution && (
                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-600">
                  {([5, 4, 3, 2, 1] as const).map((pt) => (
                    <span
                      key={pt}
                      className="rounded bg-slate-100 px-2 py-0.5 text-slate-700"
                    >
                      {pt}pt: {st.tkpDistribution?.[pt] ?? 0}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Rekomendasi 4 Pola Terlemah */}
      <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-2xs">
        <div className="flex items-center gap-2 text-blue-700">
          <Target className="size-5" aria-hidden />
          <h2 className="text-base font-semibold text-slate-950">
            Prioritas Perbaikan (4 Pola Terlemah pada Sesi Ini)
          </h2>
        </div>
        <p className="mt-1 text-xs text-slate-600">
          Langsung latih pola dengan perolehan poin terendah pada simulasi ini untuk mendongkrak
          skor tryout berikutnya.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {evaluation.weakestPatterns.map((pat) => (
            <div
              key={`${pat.subtest}:${pat.patternId}`}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                    {pat.subtest}
                  </span>
                  <span className="text-xs font-bold text-rose-700">{pat.accuracyPct}%</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">{pat.patternLabel}</p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Skor {pat.earnedPoints}/{pat.maxPoints} ({pat.correct}/{pat.total}{" "}
                  {pat.subtest === "TKP" ? "poin 5" : "benar"})
                </p>
              </div>
              <Link
                href={pat.practiceHref}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                Latih Pola Ini
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pembahasan Lengkap */}
      <section className="mt-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-2xs sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="size-5 text-blue-700" aria-hidden />
              <h2 className="text-lg font-semibold text-slate-950">
                Pembahasan Lengkap ({filteredItems.length} soal)
              </h2>
            </div>

            {/* Subtest Filter */}
            <div className="flex flex-wrap gap-1.5">
              {(["ALL", "TWK", "TIU", "TKP"] as const).map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => {
                    setSubtestFilter(sub);
                    setPage(1);
                  }}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
                    subtestFilter === sub
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                  )}
                >
                  {sub === "ALL" ? "Semua Subtes" : sub}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
            {(
              [
                { id: "all", label: `Semua (${items.length})` },
                { id: "wrong", label: `Salah / Belum Optimal (${wrongCount})` },
                { id: "unanswered", label: `Kosong (${evaluation.unansweredCount})` },
                { id: "optimal", label: `Benar / Skor 5 (${items.length - wrongCount})` },
                { id: "flagged", label: `Ragu-ragu (${flaggedCount})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setStatusFilter(tab.id);
                  setPage(1);
                }}
                className={cn(
                  "rounded-lg border px-3 py-1 text-xs font-semibold transition",
                  statusFilter === tab.id
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Review Question Cards */}
        {pageItems.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-white py-10 text-center text-sm text-slate-500">
            Tidak ada soal yang cocok dengan filter evaluasi ini.
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {pageItems.map((item) => {
              const q = item.question;
              const userChoice = answers[q.id];
              const res = resultByQuestionId.get(q.id)!;
              const isTkp = item.subtest === "TKP" && Boolean(q.optionScores);

              return (
                <article
                  key={q.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                        No. {item.number}
                      </span>
                      <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-800">
                        {item.subtest} • {item.patternLabel}
                      </span>
                      <span className="hidden rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 sm:inline">
                        {formatSubPatternLabel(q.subPattern)}
                      </span>
                      {flagged[q.id] && (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-800">
                          <Flag className="size-3" aria-hidden />
                          Ragu
                        </span>
                      )}
                    </div>

                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-bold",
                        res.isOptimal
                          ? "bg-emerald-50 text-emerald-700"
                          : res.isUnanswered
                            ? "bg-slate-100 text-slate-700"
                            : "bg-rose-50 text-rose-700",
                      )}
                    >
                      {res.isUnanswered
                        ? "Kosong (0 poin)"
                        : isTkp
                          ? `Skor Anda: ${res.earnedPoints} / 5 poin`
                          : res.isOptimal
                            ? "Benar (+5 poin)"
                            : "Salah (0 poin)"}
                    </span>
                  </div>

                  <QuestionPrompt content={q.prompt} />

                  <div className="mt-4 space-y-2">
                    {q.options.map((opt) => {
                      const isUserOpt = userChoice === opt.key;
                      const isKeyOpt = q.answer === opt.key;
                      const tkpPts = isTkp ? q.optionScores?.[opt.key] : undefined;

                      return (
                        <div
                          key={opt.key}
                          className={cn(
                            "flex items-start gap-3 rounded-xl border p-3 text-sm",
                            isKeyOpt
                              ? "border-emerald-300 bg-emerald-50/70"
                              : isUserOpt
                                ? "border-rose-300 bg-rose-50/70"
                                : "border-slate-200 bg-white",
                          )}
                        >
                          <span
                            className={cn(
                              "flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold",
                              isKeyOpt
                                ? "bg-emerald-600 text-white"
                                : isUserOpt
                                  ? "bg-rose-600 text-white"
                                  : "bg-slate-100 text-slate-700",
                            )}
                          >
                            {opt.key}
                          </span>
                          <div className="min-w-0 flex-1">
                            <OptionContent text={opt.text} />
                          </div>
                          <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                            {isUserOpt && (
                              <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                                Pilihan Anda
                              </span>
                            )}
                            {isTkp && tkpPts !== undefined ? (
                              <span
                                className={cn(
                                  "rounded px-2 py-0.5 text-[10px] font-bold",
                                  tkpPts === 5
                                    ? "bg-emerald-600 text-white"
                                    : tkpPts === 4
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-slate-100 text-slate-700",
                                )}
                              >
                                {tkpPts} poin
                              </span>
                            ) : isKeyOpt ? (
                              <span className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                                Kunci
                              </span>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Tip */}
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                      Pembahasan
                    </p>
                    <p className="mt-1 whitespace-pre-line">{q.explanation}</p>
                    {q.tip && (
                      <p className="mt-2.5 flex items-start gap-1.5 border-t border-blue-100 pt-2.5 text-xs font-medium text-blue-900">
                        <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-amber-600" aria-hidden />
                        <span>{q.tip}</span>
                      </p>
                    )}
                    <div className="mt-3">
                      <Link
                        href={buildPatternPracticeHref(item.subtest, q.pattern)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline"
                      >
                        Perdalam pola {item.patternLabel}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-blue-100 bg-white px-4 py-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="size-4" aria-hidden />
              Sebelumnya
            </Button>
            <span className="text-xs font-semibold text-slate-600">
              Halaman {safePage} dari {totalPages}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Berikutnya
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
