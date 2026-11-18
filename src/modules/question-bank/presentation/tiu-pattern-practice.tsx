"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Eye,
  EyeOff,
  Lightbulb,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getPatternStats,
  getQuestionsByPattern,
} from "@/modules/question-bank/data/tiu";
import {
  TIU_PATTERNS,
  type OptionKey,
  type Question,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";

type TiuPatternPracticeProps = {
  initialPattern?: TiuPatternId;
};

const PAGE_SIZE = 25;

export function TiuPatternPractice({
  initialPattern = "sinonim-antonim-akronim",
}: TiuPatternPracticeProps) {
  const [activePattern, setActivePattern] = useState<TiuPatternId>(initialPattern);
  const [selectedSubPattern, setSelectedSubPattern] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const pendingScrollIdRef = useRef<string | null>(null);

  const patternStats = useMemo(() => getPatternStats(), []);
  const activeMeta = TIU_PATTERNS[activePattern];
  const allPatternQuestions = useMemo(
    () => getQuestionsByPattern(activePattern),
    [activePattern],
  );

  const filteredQuestions = useMemo(
    () =>
      getQuestionsByPattern(activePattern, {
        subPattern: selectedSubPattern === "all" ? undefined : selectedSubPattern,
      }),
    [activePattern, selectedSubPattern],
  );

  const subPatternCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const question of allPatternQuestions) {
      counts[question.subPattern] = (counts[question.subPattern] ?? 0) + 1;
    }
    return counts;
  }, [allPatternQuestions]);

  const answeredInView = useMemo(
    () => filteredQuestions.filter((q) => selectedAnswers[q.id] !== undefined),
    [filteredQuestions, selectedAnswers],
  );

  const correctInView = useMemo(
    () =>
      answeredInView.filter((q) => selectedAnswers[q.id] === q.answer).length,
    [answeredInView, selectedAnswers],
  );

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStartIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedQuestions = useMemo(
    () => filteredQuestions.slice(pageStartIndex, pageStartIndex + PAGE_SIZE),
    [filteredQuestions, pageStartIndex],
  );

  const activeQuestionIndex = activeQuestionId
    ? filteredQuestions.findIndex((q) => q.id === activeQuestionId)
    : -1;
  const effectiveActiveIndex =
    activeQuestionIndex >= 0
      ? activeQuestionIndex
      : filteredQuestions.length > 0
        ? pageStartIndex
        : -1;
  const effectiveActiveQuestionId =
    effectiveActiveIndex >= 0 ? filteredQuestions[effectiveActiveIndex]?.id ?? null : null;

  const firstUnansweredIndex = useMemo(
    () => filteredQuestions.findIndex((q) => selectedAnswers[q.id] === undefined),
    [filteredQuestions, selectedAnswers],
  );

  useEffect(() => {
    const targetId = pendingScrollIdRef.current;
    if (!targetId) return;
    pendingScrollIdRef.current = null;
    const frame = window.requestAnimationFrame(() => {
      const element = document.getElementById(`soal-${targetId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [safePage, activePattern, selectedSubPattern]);

  const handlePatternChange = (patternId: TiuPatternId) => {
    setActivePattern(patternId);
    setSelectedSubPattern("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  };

  const handleSubPatternChange = (subPattern: string) => {
    setSelectedSubPattern(subPattern);
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  };

  const handlePageChange = (nextPage: number) => {
    const clampedPage = Math.max(1, Math.min(totalPages, nextPage));
    setCurrentPage(clampedPage);
    setActiveQuestionId(filteredQuestions[(clampedPage - 1) * PAGE_SIZE]?.id ?? null);
    pendingScrollIdRef.current = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleJumpToQuestion = (questionIndex: number) => {
    const targetQuestion = filteredQuestions[questionIndex];
    if (!targetQuestion) return;

    const targetPage = Math.floor(questionIndex / PAGE_SIZE) + 1;
    setActiveQuestionId(targetQuestion.id);

    if (targetPage !== safePage) {
      pendingScrollIdRef.current = targetQuestion.id;
      setCurrentPage(targetPage);
      return;
    }

    const element = document.getElementById(`soal-${targetQuestion.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSelectOption = (questionId: string, optionKey: OptionKey) => {
    if (isReviewMode) return;
    setActiveQuestionId(questionId);
    setSelectedAnswers((prev) => {
      if (prev[questionId] !== undefined) {
        return prev;
      }
      return {
        ...prev,
        [questionId]: optionKey,
      };
    });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setRevealedHints({});
    setActiveQuestionId(null);
  };

  const toggleHint = (questionId: string) => {
    setActiveQuestionId(questionId);
    setRevealedHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const showSubPatternBar =
    allPatternQuestions.length > 0 &&
    (activeMeta.subPatterns.length > 0 || (!isReviewMode && answeredInView.length > 0));

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)_248px] xl:grid-cols-[270px_minmax(0,1fr)_285px] lg:items-start">
      {/* Sidebar Kiri: Daftar 9 Pola Soal TIU */}
      <aside className="order-1 min-w-0 overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          9 Pola Soal TIU
        </p>
        <h2 className="mt-1.5 text-lg font-semibold text-slate-950">
          Pilih Fokus Latihan
        </h2>

        <nav aria-label="Daftar pola soal TIU" className="mt-4 flex flex-col gap-1.5">
          {patternStats.map((pattern) => {
            const isSelected = pattern.id === activePattern;
            const hasQuestions = pattern.total > 0;

            return (
              <button
                key={pattern.id}
                type="button"
                onClick={() => handlePatternChange(pattern.id)}
                className={cn(
                  "flex w-full min-w-0 items-center justify-between gap-2.5 rounded-xl border px-3 py-2 text-left text-xs transition-colors sm:text-sm",
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-transparent bg-slate-50/80 text-slate-700 hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-900",
                )}
              >
                <span className="flex min-w-0 flex-1 items-center gap-2.5">
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white text-slate-600 shadow-xs",
                    )}
                  >
                    {pattern.order}
                  </span>
                  <span className="line-clamp-1 font-medium">{pattern.label}</span>
                </span>

                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    isSelected
                      ? "bg-white/20 text-white"
                      : hasQuestions
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-200/80 text-slate-500",
                  )}
                >
                  {hasQuestions ? `${pattern.total} soal` : "Segera"}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="order-3 min-w-0 space-y-6 lg:order-2">
        {/* Active pattern controls & sub-pattern filter */}
        <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Pola #{activeMeta.order} • TIU
              </span>
              <h2 className="mt-2.5 text-2xl font-semibold text-slate-950">
                {activeMeta.label}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {filteredQuestions.length > 0 ? (
                  <>
                    Menampilkan soal {pageStartIndex + 1}–
                    {Math.min(pageStartIndex + PAGE_SIZE, filteredQuestions.length)} dari{" "}
                    {filteredQuestions.length} soal tersedia.
                  </>
                ) : (
                  <>Belum ada soal pada pilihan ini.</>
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                type="button"
                variant={isReviewMode ? "default" : "outline"}
                onClick={() => setIsReviewMode((prev) => !prev)}
                className={cn(
                  "h-10",
                  isReviewMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-blue-200 text-blue-700 hover:bg-blue-50",
                )}
              >
                {isReviewMode ? (
                  <>
                    <Eye className="size-4" aria-hidden />
                    Mode Review (Kunci Tampil)
                  </>
                ) : (
                  <>
                    <EyeOff className="size-4" aria-hidden />
                    Mode Latihan (Kunci Tersembunyi)
                  </>
                )}
              </Button>

              {!isReviewMode && Object.keys(selectedAnswers).length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleReset}
                  className="h-10 text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                >
                  <RotateCcw className="size-4" aria-hidden />
                  Reset Jawaban
                </Button>
              )}
            </div>
          </div>

          {showSubPatternBar && (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {activeMeta.subPatterns.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Sub-pola:
                  </span>
                  <FilterPill
                    active={selectedSubPattern === "all"}
                    label={`Semua (${allPatternQuestions.length})`}
                    onClick={() => handleSubPatternChange("all")}
                  />
                  {activeMeta.subPatterns.map((sub) => (
                    <FilterPill
                      key={sub}
                      active={selectedSubPattern === sub}
                      label={`${capitalize(sub)} (${subPatternCounts[sub] ?? 0})`}
                      onClick={() => handleSubPatternChange(sub)}
                    />
                  ))}
                </div>
              ) : (
                <div />
              )}

              {!isReviewMode && answeredInView.length > 0 && (
                <p className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
                  Skor sementara: {correctInView} / {answeredInView.length} benar
                </p>
              )}
            </div>
          )}
        </section>

        {/* Empty state or question list */}
        {allPatternQuestions.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-blue-200 bg-white px-6 py-16 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <BookOpen className="size-7" aria-hidden />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">
              Bank soal {activeMeta.label} siap diisi
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              File terpisah untuk pola ini sudah disiapkan. Saat ini soal batch pertama sedang
              tersedia pada pola{" "}
              <button
                type="button"
                onClick={() => handlePatternChange("sinonim-antonim-akronim")}
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
              >
                Sinonim, Antonim, dan Akronim ({patternStats[0]?.total ?? 0} soal)
              </button>
              .
            </p>
          </section>
        ) : filteredQuestions.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
            <p className="text-base font-semibold text-slate-800">
              Tidak ada soal yang cocok dengan filter ini.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSubPatternChange("all")}
              className="mt-4 border-blue-200 text-blue-700"
            >
              Tampilkan Semua Soal
            </Button>
          </section>
        ) : (
          <>
            {totalPages > 1 && (
              <PaginationBar
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}

            <div className="space-y-5">
              {paginatedQuestions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  index={pageStartIndex + index + 1}
                  question={question}
                  selectedOption={selectedAnswers[question.id]}
                  isReviewMode={isReviewMode}
                  isActive={activeQuestionId === question.id}
                  isHintOpen={Boolean(revealedHints[question.id])}
                  onToggleHint={() => toggleHint(question.id)}
                  onSelectOption={(key) => handleSelectOption(question.id, key)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <PaginationBar
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>

      {/* Sidebar Kanan: Navigasi Nomor Soal */}
      <QuestionNumberNavigator
        questions={filteredQuestions}
        selectedAnswers={selectedAnswers}
        activeQuestionId={effectiveActiveQuestionId}
        firstUnansweredIndex={firstUnansweredIndex}
        pageStartIndex={pageStartIndex}
        onJumpToQuestion={handleJumpToQuestion}
      />
    </div>
  );
}

function QuestionCard({
  index,
  question,
  selectedOption,
  isReviewMode,
  isActive,
  isHintOpen,
  onToggleHint,
  onSelectOption,
}: {
  index: number;
  question: Question;
  selectedOption?: OptionKey;
  isReviewMode: boolean;
  isActive: boolean;
  isHintOpen: boolean;
  onToggleHint: () => void;
  onSelectOption: (key: OptionKey) => void;
}) {
  const hasAnswered = selectedOption !== undefined;
  const showSolution = isReviewMode || hasAnswered;

  return (
    <article
      id={`soal-${question.id}`}
      className={cn(
        "scroll-mt-28 rounded-2xl border bg-white p-6 shadow-sm transition-shadow",
        isActive
          ? "border-blue-400 shadow-blue-100/80 ring-2 ring-blue-500/50"
          : "border-blue-100 shadow-blue-100/50",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
          Soal {index}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {question.tip && !showSolution ? (
            <button
              type="button"
              onClick={onToggleHint}
              aria-expanded={isHintOpen}
              className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
            >
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              {isHintOpen ? "Tutup Hint" : "Lihat Hint"}
            </button>
          ) : null}
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
            {capitalize(question.subPattern)}
          </span>
        </div>
      </div>

      <p className="mt-4 whitespace-pre-line text-base font-medium leading-7 text-slate-950">
        {question.prompt}
      </p>

      {question.tip && isHintOpen && !showSolution ? (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="leading-relaxed">
            <span className="font-semibold">Hint: </span>
            {question.tip}
          </p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-2.5">
        {question.options.map((option) => {
          const isChosen = selectedOption === option.key;
          const isAnswer = question.answer === option.key;

          let optionStyle =
            "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50";
          if (showSolution) {
            if (isAnswer) {
              optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium";
            } else if (isChosen && !isAnswer) {
              optionStyle = "border-rose-400 bg-rose-50 text-rose-950";
            } else {
              optionStyle = "border-slate-200 bg-slate-50/70 text-slate-500";
            }
          }

          return (
            <button
              key={option.key}
              type="button"
              disabled={showSolution}
              onClick={() => onSelectOption(option.key)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                optionStyle,
                showSolution && "cursor-default",
              )}
            >
              <span className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                    showSolution && isAnswer
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : showSolution && isChosen
                        ? "border-rose-500 bg-rose-500 text-white"
                        : "border-slate-300 bg-white text-slate-700",
                  )}
                >
                  {option.key}
                </span>
                <span className="leading-6">{option.text}</span>
              </span>

              {showSolution && isAnswer && (
                <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-hidden />
              )}
              {showSolution && isChosen && !isAnswer && (
                <XCircle className="size-4 shrink-0 text-rose-500" aria-hidden />
              )}
            </button>
          );
        })}
      </div>

      {showSolution && (
        <div className="mt-5 rounded-xl border border-blue-100 bg-[#f8fbff] p-4 text-sm">
          <p className="font-semibold text-slate-950">
            {isReviewMode ? (
              <>Kunci Jawaban: {question.answer}</>
            ) : selectedOption === question.answer ? (
              <span className="text-emerald-700">
                Benar! Jawaban tepat adalah {question.answer}.
              </span>
            ) : (
              <span className="text-rose-700">
                Kurang tepat — jawaban yang benar adalah {question.answer}.
              </span>
            )}
          </p>
          <p className="mt-1.5 leading-6 text-slate-700">{question.explanation}</p>
          {question.tip && (
            <p className="mt-2.5 flex items-start gap-2 rounded-lg bg-amber-50/90 px-3 py-2 text-xs font-medium text-amber-900">
              <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-amber-600" aria-hidden />
              <span>
                <strong>Tip Cepat:</strong> {question.tip}
              </span>
            </p>
          )}
        </div>
      )}
    </article>
  );
}

function FilterPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        active
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700",
      )}
    >
      {label}
    </button>
  );
}

function PaginationBar({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-3.5 shadow-sm shadow-blue-100/50">
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-9 border-blue-200 text-blue-700 hover:bg-blue-50"
      >
        <ChevronLeft className="size-4" aria-hidden />
        Sebelumnya
      </Button>

      <span className="text-xs font-semibold text-slate-600 sm:text-sm">
        Halaman {currentPage} dari {totalPages}
      </span>

      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-9 border-blue-200 text-blue-700 hover:bg-blue-50"
      >
        Berikutnya
        <ChevronRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}

function QuestionNumberNavigator({
  questions,
  selectedAnswers,
  activeQuestionId,
  firstUnansweredIndex,
  pageStartIndex,
  onJumpToQuestion,
}: {
  questions: readonly Question[];
  selectedAnswers: Record<string, OptionKey>;
  activeQuestionId: string | null;
  firstUnansweredIndex: number;
  pageStartIndex: number;
  onJumpToQuestion: (questionIndex: number) => void;
}) {
  return (
    <aside
      aria-label="Navigasi nomor soal"
      className="order-2 min-w-0 overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 lg:sticky lg:top-24 lg:order-3 lg:flex lg:max-h-[calc(100svh-7rem)] lg:flex-col"
    >
      <div className="shrink-0">
        <div className="flex items-center gap-2 text-blue-700">
          <Compass className="size-4 shrink-0" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">
            Navigasi Nomor Soal
          </p>
        </div>

        {questions.length === 0 && (
          <p className="mt-2 text-xs text-slate-500">Belum ada soal untuk pola ini.</p>
        )}

        {questions.length > 0 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={firstUnansweredIndex < 0}
            onClick={() => onJumpToQuestion(firstUnansweredIndex)}
            className="mt-3 h-8 w-full border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50 disabled:opacity-60"
          >
            {firstUnansweredIndex >= 0
              ? `Lompat ke Belum Diisi (#${firstUnansweredIndex + 1})`
              : "Semua Soal Sudah Diisi"}
          </Button>
        )}
      </div>

      {questions.length > 0 && (
        <div className="mt-3 grid max-h-[42svh] grid-cols-5 gap-1.5 overflow-y-auto p-1 lg:min-h-0 lg:flex-1">
          {questions.map((question, idx) => {
            const number = idx + 1;
            const isAnswered = selectedAnswers[question.id] !== undefined;
            const isCurrent = question.id === activeQuestionId;
            const isOnCurrentPage = idx >= pageStartIndex && idx < pageStartIndex + PAGE_SIZE;

            return (
              <button
                key={question.id}
                type="button"
                onClick={() => onJumpToQuestion(idx)}
                aria-label={`Soal ${number}, ${isAnswered ? "sudah diisi" : "belum diisi"}`}
                aria-current={isCurrent ? "true" : undefined}
                className={cn(
                  "flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition-all",
                  isAnswered
                    ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
                    : isOnCurrentPage
                      ? "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400 hover:bg-blue-100/80"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50",
                  isCurrent && "ring-2 ring-amber-400 ring-offset-1 font-bold",
                )}
              >
                {number}
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
}

function capitalize(value: string) {
  return value
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}
