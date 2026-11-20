"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eraser,
  Flag,
  LayoutGrid,
  Send,
  X,
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
  TRYOUT_SUBTEST_ORDER,
  type TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-engine";

type MatrixFilter = "all" | "unanswered" | "flagged";

type TryoutExamRunnerProps = {
  packageLabel: string;
  items: readonly TryoutQuestionItem[];
  answers: Readonly<Record<string, OptionKey>>;
  flagged: Readonly<Record<string, boolean>>;
  currentIndex: number;
  remainingSec: number;
  onSelectAnswer: (questionId: string, key: OptionKey) => void;
  onClearAnswer: (questionId: string) => void;
  onToggleFlag: (questionId: string) => void;
  onJumpToIndex: (index: number) => void;
  onSubmitExam: () => void;
  onPauseToLobby: () => void;
};

const SUBTEST_BADGE_CLASS: Record<QuestionSubtest, string> = {
  TWK: "bg-blue-600 text-white",
  TIU: "bg-violet-600 text-white",
  TKP: "bg-teal-600 text-white",
};

export function TryoutExamRunner({
  packageLabel,
  items,
  answers,
  flagged,
  currentIndex,
  remainingSec,
  onSelectAnswer,
  onClearAnswer,
  onToggleFlag,
  onJumpToIndex,
  onSubmitExam,
  onPauseToLobby,
}: TryoutExamRunnerProps) {
  const [matrixFilter, setMatrixFilter] = useState<MatrixFilter>("all");
  const [mobileMatrixOpen, setMobileMatrixOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const safeIndex = Math.max(0, Math.min(items.length - 1, currentIndex));
  const currentItem = items[safeIndex];
  const currentQuestion = currentItem.question;
  const selectedKey = answers[currentQuestion.id];
  const isFlagged = Boolean(flagged[currentQuestion.id]);

  const stats = useMemo(() => {
    let answered = 0;
    let flaggedCount = 0;
    const bySubtest: Record<
      QuestionSubtest,
      { firstIndex: number; total: number; answered: number }
    > = {
      TWK: { firstIndex: 0, total: 0, answered: 0 },
      TIU: { firstIndex: 0, total: 0, answered: 0 },
      TKP: { firstIndex: 0, total: 0, answered: 0 },
    };

    items.forEach((item, idx) => {
      const bucket = bySubtest[item.subtest];
      if (bucket.total === 0) bucket.firstIndex = idx;
      bucket.total += 1;
      if (answers[item.question.id] !== undefined) {
        answered += 1;
        bucket.answered += 1;
      }
      if (flagged[item.question.id]) {
        flaggedCount += 1;
      }
    });

    return {
      answered,
      unanswered: items.length - answered,
      flaggedCount,
      bySubtest,
    };
  }, [items, answers, flagged]);

  const filteredMatrixItems = useMemo(() => {
    return items
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => {
        if (matrixFilter === "unanswered") return answers[item.question.id] === undefined;
        if (matrixFilter === "flagged") return Boolean(flagged[item.question.id]);
        return true;
      });
  }, [items, answers, flagged, matrixFilter]);

  // Pintasan keyboard CAT desktop: A–E / 1–5 jawab, ←/→ navigasi, F tandai ragu
  useEffect(() => {
    if (confirmOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const key = event.key;
      if (key === "ArrowRight") {
        event.preventDefault();
        if (safeIndex < items.length - 1) onJumpToIndex(safeIndex + 1);
        return;
      }
      if (key === "ArrowLeft") {
        event.preventDefault();
        if (safeIndex > 0) onJumpToIndex(safeIndex - 1);
        return;
      }
      if (key === "f" || key === "F") {
        event.preventDefault();
        onToggleFlag(currentQuestion.id);
        return;
      }
      const upper = key.toUpperCase();
      if ((OPTION_KEYS as readonly string[]).includes(upper)) {
        event.preventDefault();
        onSelectAnswer(currentQuestion.id, upper as OptionKey);
        return;
      }
      if (key >= "1" && key <= "5") {
        event.preventDefault();
        onSelectAnswer(currentQuestion.id, OPTION_KEYS[Number(key) - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    confirmOpen,
    safeIndex,
    items.length,
    currentQuestion.id,
    onJumpToIndex,
    onToggleFlag,
    onSelectAnswer,
  ]);

  const timerUrgent = remainingSec <= 5 * 60;
  const timerWarning = !timerUrgent && remainingSec <= 15 * 60;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky CAT Exam Top Bar */}
      <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 shadow-2xs backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-wider text-blue-700">
              Mode Ujian CAT SKD
            </p>
            <p className="truncate text-sm font-bold text-slate-950 sm:text-base">
              {packageLabel}
            </p>
          </div>

          {/* Subtest Jump Tabs */}
          <div className="hidden items-center gap-1.5 md:flex">
            {TRYOUT_SUBTEST_ORDER.map((sub) => {
              const b = stats.bySubtest[sub];
              const isCurrent = currentItem.subtest === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onJumpToIndex(b.firstIndex)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition",
                    isCurrent
                      ? "border-blue-600 bg-blue-600 text-white shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-blue-50",
                  )}
                >
                  <span>{sub}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[11px]",
                      isCurrent ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    {b.answered}/{b.total}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timer & Submit */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              role="timer"
              aria-live="off"
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 font-mono text-sm font-bold sm:px-3.5 sm:text-base",
                timerUrgent
                  ? "animate-pulse border-rose-300 bg-rose-50 text-rose-700"
                  : timerWarning
                    ? "border-amber-300 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-slate-900 text-white",
              )}
            >
              <Clock className="size-4 shrink-0" aria-hidden />
              <span>{formatDurationClock(remainingSec)}</span>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setMobileMatrixOpen(true)}
              className="border-slate-200 text-slate-700 lg:hidden"
            >
              <LayoutGrid className="size-4" aria-hidden />
              <span className="sr-only sm:not-sr-only">Nomor</span>
            </Button>

            <Button
              type="button"
              size="sm"
              onClick={() => setConfirmOpen(true)}
              className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
            >
              <Send className="size-3.5" aria-hidden />
              <span className="hidden sm:inline">Selesai &amp; Kumpulkan</span>
              <span className="sm:hidden">Selesai</span>
            </Button>
          </div>
        </div>

        {/* Subtest Jump Tabs Mobile */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-4 py-2 md:hidden">
          <div className="flex items-center gap-1.5">
            {TRYOUT_SUBTEST_ORDER.map((sub) => {
              const b = stats.bySubtest[sub];
              const isCurrent = currentItem.subtest === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onJumpToIndex(b.firstIndex)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold",
                    isCurrent
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700",
                  )}
                >
                  {sub} {b.answered}/{b.total}
                </button>
              );
            })}
          </div>
          <span className="text-xs font-semibold text-slate-600">
            {stats.answered}/{items.length} terjawab
          </span>
        </div>
      </header>

      {/* Main CAT Workspace */}
      <div className="mx-auto grid max-w-[1360px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12 lg:items-start lg:px-8">
        {/* Left: Active Question */}
        <main className="lg:col-span-8">
          <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                  Soal {currentItem.number} / {items.length}
                </span>
                <span
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-bold",
                    SUBTEST_BADGE_CLASS[currentItem.subtest],
                  )}
                >
                  {currentItem.subtest}
                </span>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {currentItem.patternLabel}
                </span>
                <span className="hidden rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 sm:inline">
                  {formatSubPatternLabel(currentQuestion.subPattern)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onToggleFlag(currentQuestion.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
                  isFlagged
                    ? "border-amber-400 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                )}
              >
                <Flag className="size-3.5" aria-hidden />
                {isFlagged ? "Ditandai Ragu" : "Ragu-ragu"}
              </button>
            </div>

            {/* Prompt */}
            <QuestionPrompt content={currentQuestion.prompt} />

            {/* Options A–E (Kunci & Skor disembunyikan penuh selama ujian) */}
            <div className="mt-6 space-y-2.5" role="radiogroup" aria-label="Pilihan jawaban">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedKey === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => onSelectAnswer(currentQuestion.id, opt.key)}
                    className={cn(
                      "flex w-full items-start gap-3.5 rounded-xl border p-3.5 text-left transition sm:p-4",
                      isSelected
                        ? "border-blue-600 bg-blue-50/80 ring-2 ring-blue-200"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/70",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition",
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700",
                      )}
                    >
                      {opt.key}
                    </span>
                    <span className="min-w-0 flex-1 pt-0.5 text-sm leading-6 text-slate-900 sm:text-[15px]">
                      <OptionContent text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  disabled={safeIndex === 0}
                  onClick={() => onJumpToIndex(safeIndex - 1)}
                  className="border-slate-200 text-slate-700"
                >
                  <ChevronLeft className="size-4" aria-hidden />
                  Sebelumnya
                </Button>

                {selectedKey && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onClearAnswer(currentQuestion.id)}
                    className="text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  >
                    <Eraser className="size-3.5" aria-hidden />
                    Kosongkan
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {safeIndex < items.length - 1 ? (
                  <Button
                    type="button"
                    onClick={() => onJumpToIndex(safeIndex + 1)}
                    className="bg-blue-600 font-semibold text-white hover:bg-blue-700"
                  >
                    Simpan &amp; Lanjut
                    <ChevronRight className="size-4" aria-hidden />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setConfirmOpen(true)}
                    className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
                  >
                    Selesai &amp; Kumpulkan
                    <Send className="size-4" aria-hidden />
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
              <span>
                Pintasan keyboard: <kbd className="rounded border bg-slate-100 px-1.5 py-0.5">A–E</kbd>{" "}
                atau <kbd className="rounded border bg-slate-100 px-1.5 py-0.5">1–5</kbd> jawab •{" "}
                <kbd className="rounded border bg-slate-100 px-1.5 py-0.5">←/→</kbd> pindah •{" "}
                <kbd className="rounded border bg-slate-100 px-1.5 py-0.5">F</kbd> ragu-ragu
              </span>
              <button
                type="button"
                onClick={onPauseToLobby}
                className="font-medium text-blue-700 hover:underline"
              >
                Kembali ke Lobi (waktu tetap berjalan)
              </button>
            </div>
          </article>
        </main>

        {/* Right: CAT Question Matrix (Desktop) */}
        <aside className="hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-xs lg:sticky lg:top-24 lg:col-span-4 lg:block">
          <MatrixPanel
            items={items}
            filteredMatrixItems={filteredMatrixItems}
            answers={answers}
            flagged={flagged}
            currentIndex={safeIndex}
            stats={stats}
            matrixFilter={matrixFilter}
            onChangeFilter={setMatrixFilter}
            onJumpToIndex={onJumpToIndex}
          />
        </aside>
      </div>

      {/* Mobile Matrix Drawer */}
      {mobileMatrixOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-slate-950/50 backdrop-blur-xs lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi nomor soal CAT"
        >
          <div className="max-h-[82vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-950">Navigasi Nomor Soal</h2>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => setMobileMatrixOpen(false)}
                aria-label="Tutup panel nomor"
              >
                <X className="size-5" aria-hidden />
              </Button>
            </div>
            <MatrixPanel
              items={items}
              filteredMatrixItems={filteredMatrixItems}
              answers={answers}
              flagged={flagged}
              currentIndex={safeIndex}
              stats={stats}
              matrixFilter={matrixFilter}
              onChangeFilter={setMatrixFilter}
              onJumpToIndex={(idx) => {
                onJumpToIndex(idx);
                setMobileMatrixOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Konfirmasi pengumpulan tryout"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <AlertTriangle className="size-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Kumpulkan Jawaban Tryout?
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Setelah dikumpulkan, waktu ujian dihentikan dan rapor skor beserta pembahasan
                  lengkap akan langsung ditampilkan.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5 text-center">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                <p className="text-[11px] font-medium text-emerald-700">Terjawab</p>
                <p className="mt-0.5 text-lg font-bold text-emerald-900">{stats.answered}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-600">Kosong</p>
                <p className="mt-0.5 text-lg font-bold text-slate-900">{stats.unanswered}</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                <p className="text-[11px] font-medium text-amber-800">Ragu-ragu</p>
                <p className="mt-0.5 text-lg font-bold text-amber-900">{stats.flaggedCount}</p>
              </div>
            </div>

            {stats.unanswered > 0 && (
              <p className="mt-3 rounded-xl bg-blue-50 px-3 py-2 text-xs text-blue-800">
                Catatan SKD: tidak ada pengurangan nilai untuk jawaban salah, dan setiap opsi TKP
                bernilai 1–5 poin. Sebaiknya isi seluruh soal yang masih kosong.
              </p>
            )}

            <div className="mt-6 flex items-center justify-end gap-2.5">
              <Button
                type="button"
                variant="outline"
                onClick={() => setConfirmOpen(false)}
                className="border-slate-200 text-slate-700"
              >
                Periksa Kembali
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setConfirmOpen(false);
                  onSubmitExam();
                }}
                className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
              >
                <CheckCircle2 className="size-4" aria-hidden />
                Ya, Kumpulkan Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MatrixPanel({
  items,
  filteredMatrixItems,
  answers,
  flagged,
  currentIndex,
  stats,
  matrixFilter,
  onChangeFilter,
  onJumpToIndex,
}: {
  items: readonly TryoutQuestionItem[];
  filteredMatrixItems: ReadonlyArray<{ item: TryoutQuestionItem; idx: number }>;
  answers: Readonly<Record<string, OptionKey>>;
  flagged: Readonly<Record<string, boolean>>;
  currentIndex: number;
  stats: {
    answered: number;
    unanswered: number;
    flaggedCount: number;
  };
  matrixFilter: MatrixFilter;
  onChangeFilter: (f: MatrixFilter) => void;
  onJumpToIndex: (index: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-950">Peta Soal CAT</h2>
        <span className="text-xs font-semibold text-blue-700">
          {stats.answered}/{items.length} terjawab
        </span>
      </div>

      {/* Filter Pills */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {(
          [
            { id: "all", label: `Semua (${items.length})` },
            { id: "unanswered", label: `Kosong (${stats.unanswered})` },
            { id: "flagged", label: `Ragu (${stats.flaggedCount})` },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChangeFilter(tab.id)}
            className={cn(
              "rounded-lg px-2.5 py-1 text-[11px] font-semibold transition",
              matrixFilter === tab.id
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Number Grid */}
      {filteredMatrixItems.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-slate-200 py-6 text-center text-xs text-slate-500">
          Tidak ada nomor pada filter ini.
        </p>
      ) : (
        <div className="mt-4 grid max-h-[420px] grid-cols-6 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-8 lg:grid-cols-6">
          {filteredMatrixItems.map(({ item, idx }) => {
            const isActive = idx === currentIndex;
            const isAnswered = answers[item.question.id] !== undefined;
            const isFlag = Boolean(flagged[item.question.id]);

            return (
              <button
                key={item.question.id}
                type="button"
                onClick={() => onJumpToIndex(idx)}
                title={`Soal ${item.number} (${item.subtest})`}
                className={cn(
                  "relative flex h-9 items-center justify-center rounded-lg border text-xs font-bold transition",
                  isFlag
                    ? "border-amber-400 bg-amber-100 text-amber-900"
                    : isAnswered
                      ? "border-emerald-500 bg-emerald-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50",
                  isActive && "ring-2 ring-blue-600 ring-offset-1",
                )}
              >
                {item.number}
              </button>
            );
          })}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded bg-emerald-600" aria-hidden />
          Dijawab
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded border border-amber-400 bg-amber-100" aria-hidden />
          Ragu-ragu
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded border border-slate-300 bg-white" aria-hidden />
          Kosong
        </span>
      </div>
    </div>
  );
}

