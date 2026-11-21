"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Eraser,
  Flag,
  Gauge,
  Send,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  OPTION_KEYS,
  type OptionKey,
  type QuestionSubtest,
} from "@/modules/question-bank/domain/question";
import { formatSubPatternLabel } from "@/modules/question-bank/presentation/practice-ui-primitives";
import {
  OptionContent,
  QuestionPrompt,
} from "@/modules/question-bank/presentation/question-content";
import {
  formatDurationClock,
  type TryoutExamQuestion,
} from "@/modules/tryout/domain/tryout-config";

const SUBTEST_BADGE_CLASS: Record<QuestionSubtest, string> = {
  TWK: "bg-blue-600 text-white",
  TIU: "bg-violet-600 text-white",
  TKP: "bg-teal-600 text-white",
};

type SprintRunnerProps = {
  packageLabel: string;
  items: readonly TryoutExamQuestion[];
  answers: Readonly<Record<string, OptionKey>>;
  flagged: Readonly<Record<string, boolean>>;
  questionTimesSec: Readonly<Record<string, number>>;
  currentIndex: number;
  remainingSec: number;
  targetSecondsPerQuestion: number;
  isSubmitting: boolean;
  onSelectAnswer: (questionId: string, key: OptionKey) => void;
  onClearAnswer: (questionId: string) => void;
  onToggleFlag: (questionId: string) => void;
  onJumpToIndex: (index: number) => void;
  onSubmitSprint: () => void;
  onCancelSprint: () => void;
};

export function SprintRunner({
  packageLabel,
  items,
  answers,
  flagged,
  questionTimesSec,
  currentIndex,
  remainingSec,
  targetSecondsPerQuestion,
  isSubmitting,
  onSelectAnswer,
  onClearAnswer,
  onToggleFlag,
  onJumpToIndex,
  onSubmitSprint,
  onCancelSprint,
}: SprintRunnerProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const safeIndex = Math.max(0, Math.min(items.length - 1, currentIndex));
  const currentItem = items[safeIndex];
  const currentQuestion = currentItem.question;
  const selectedKey = answers[currentQuestion.id];
  const isFlagged = Boolean(flagged[currentQuestion.id]);
  const currentSpentSec = questionTimesSec[currentQuestion.id] ?? 0;

  const answeredCount = items.reduce(
    (sum, item) => sum + (answers[item.question.id] ? 1 : 0),
    0,
  );
  const isCriticalTime = remainingSec <= 90;
  const isSlowOnCurrent = currentSpentSec > Math.round(targetSecondsPerQuestion * 1.25);

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Top Sticky Timer Bar */}
      <header className="sticky top-0 z-30 border-b border-indigo-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Zap className="size-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-slate-900 sm:text-sm">
                {packageLabel}
              </p>
              <p className="text-[11px] text-slate-500">
                Terjawab {answeredCount}/{items.length} soal • Target ≤ {targetSecondsPerQuestion}{" "}
                dtk/soal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div
              aria-live="polite"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-sm font-bold tabular-nums",
                isCriticalTime
                  ? "animate-pulse bg-rose-600 text-white"
                  : "bg-slate-900 text-white",
              )}
            >
              <Clock className="size-4" aria-hidden />
              {formatDurationClock(remainingSec)}
            </div>

            <Button
              type="button"
              size="sm"
              disabled={isSubmitting}
              onClick={() => setConfirmOpen(true)}
              className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
            >
              <Send className="size-3.5" aria-hidden />
              Selesai
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-6 grid max-w-[1200px] gap-6 px-4 sm:px-8 lg:grid-cols-12">
        {/* Main Question Area */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-slate-900">
                  Soal {currentItem.number} / {items.length}
                </span>
                <span
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[11px] font-bold",
                    SUBTEST_BADGE_CLASS[currentItem.subtest],
                  )}
                >
                  {currentItem.subtest}
                </span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  {formatSubPatternLabel(currentQuestion.subPattern)}
                </span>
              </div>

              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums",
                  isSlowOnCurrent
                    ? "bg-amber-100 text-amber-900"
                    : "bg-indigo-50 text-indigo-700",
                )}
              >
                <Gauge className="size-3.5" aria-hidden />
                {currentSpentSec} dtk / {targetSecondsPerQuestion} dtk
              </span>
            </div>

            <QuestionPrompt content={currentQuestion.prompt} />

            <div className="mt-5 space-y-2.5">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedKey === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => onSelectAnswer(currentQuestion.id, opt.key)}
                    aria-pressed={isSelected}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition-all",
                      isSelected
                        ? "border-blue-600 bg-blue-50/90 text-slate-950 ring-1 ring-blue-600"
                        : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50/40",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700",
                      )}
                    >
                      {opt.key}
                    </span>
                    <OptionContent text={opt.text} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => onToggleFlag(currentQuestion.id)}
                  className={cn(
                    isFlagged
                      ? "border-amber-400 bg-amber-50 text-amber-900"
                      : "border-slate-200 text-slate-700",
                  )}
                >
                  <Flag className="size-3.5" aria-hidden />
                  {isFlagged ? "Ditandai Ragu" : "Ragu-ragu"}
                </Button>

                {selectedKey && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => onClearAnswer(currentQuestion.id)}
                    className="text-slate-600 hover:text-slate-900"
                  >
                    <Eraser className="size-3.5" aria-hidden />
                    Kosongkan
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  disabled={safeIndex === 0}
                  onClick={() => onJumpToIndex(safeIndex - 1)}
                >
                  <ChevronLeft className="size-4" aria-hidden />
                  Sebelumnya
                </Button>
                {safeIndex < items.length - 1 ? (
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => onJumpToIndex(safeIndex + 1)}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Berikutnya
                    <ChevronRight className="size-4" aria-hidden />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => setConfirmOpen(true)}
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Kumpulkan Sprint
                    <Send className="size-3.5" aria-hidden />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Navigator */}
        <aside className="lg:col-span-4">
          <div className="sticky top-20 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-950">Navigasi Nomor Sprint</h2>
              <button
                type="button"
                onClick={onCancelSprint}
                className="text-xs font-medium text-slate-500 hover:text-rose-600"
              >
                Keluar
              </button>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {items.map((item, idx) => {
                const isAnswered = OPTION_KEYS.includes(answers[item.question.id]);
                const isItemFlagged = Boolean(flagged[item.question.id]);
                const isCurrent = idx === safeIndex;

                return (
                  <button
                    key={item.question.id}
                    type="button"
                    onClick={() => onJumpToIndex(idx)}
                    className={cn(
                      "relative flex h-10 items-center justify-center rounded-xl border text-xs font-bold transition-all",
                      isAnswered
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isItemFlagged
                          ? "border-amber-400 bg-amber-50 text-amber-900"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300",
                      isCurrent && "ring-2 ring-blue-600 ring-offset-1",
                    )}
                  >
                    {item.number}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
              <span className="inline-flex items-center gap-1">
                <span className="size-2.5 rounded-xs bg-emerald-500" aria-hidden /> Terjawab (
                {answeredCount})
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="size-2.5 rounded-xs bg-amber-400" aria-hidden /> Ragu
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="size-2.5 rounded-xs border border-slate-300 bg-slate-50" aria-hidden />{" "}
                Belum ({items.length - answeredCount})
              </span>
            </div>
          </div>
        </aside>
      </div>

      {/* Confirmation Dialog */}
      {confirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-slate-950">Kumpulkan Sprint Drill?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Kamu telah menjawab <strong>{answeredCount}</strong> dari{" "}
              <strong>{items.length}</strong> soal dengan sisa waktu{" "}
              <strong>{formatDurationClock(remainingSec)}</strong>.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => setConfirmOpen(false)}
              >
                Lanjut Kerjakan
              </Button>
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  setConfirmOpen(false);
                  onSubmitSprint();
                }}
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                {isSubmitting ? "Menilai..." : "Ya, Nilai Sekarang"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
