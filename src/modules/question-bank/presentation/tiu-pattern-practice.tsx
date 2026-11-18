"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  Eye,
  EyeOff,
  Layers3,
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
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  type OptionKey,
  type Question,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";

type TiuPatternPracticeProps = {
  initialPattern?: TiuPatternId;
};

type ViewMode = "list" | "single";
type StatusFilter = "all" | "unanswered" | "wrong" | "flagged";

type StoredPracticeProgress = {
  selectedAnswers?: Record<string, OptionKey>;
  flaggedQuestions?: Record<string, boolean>;
  viewMode?: ViewMode;
  lastPattern?: TiuPatternId;
  patternSeeds?: Partial<Record<TiuPatternId, number>>;
  questionSeeds?: Record<string, number>;
};

const PAGE_SIZE = 25;
const NAV_CHUNK_SIZE = 50;
const STORAGE_KEY = "wiyata-tiu-practice-progress-v1";
const DEFAULT_PATTERN: TiuPatternId = "sinonim-antonim-akronim";

function isTiuPatternId(value: unknown): value is TiuPatternId {
  return (
    typeof value === "string" &&
    (TIU_PATTERN_IDS as readonly string[]).includes(value)
  );
}

function isOptionKey(value: unknown): value is OptionKey {
  return (
    typeof value === "string" &&
    (OPTION_KEYS as readonly string[]).includes(value)
  );
}

function createRandomSeed(): number {
  return ((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0) || 1;
}

function createInitialPatternSeeds(
  existing?: Partial<Record<TiuPatternId, number>>,
): Record<TiuPatternId, number> {
  const result = {} as Record<TiuPatternId, number>;
  for (const id of TIU_PATTERN_IDS) {
    const saved = existing?.[id];
    result[id] =
      typeof saved === "number" && Number.isFinite(saved) && saved > 0
        ? saved >>> 0
        : createRandomSeed();
  }
  return result;
}

function hashStringWithSeed(str: string, seed: number): number {
  let h = (seed ^ 0x811c9dc5) >>> 0;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return (h >>> 0) || 1;
}

function createSeededRng(seed: number): () => number {
  let state = (seed >>> 0) || 1;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const copy = [...items];
  const rng = createSeededRng(seed);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Mengacak urutan opsi jawaban A–E untuk satu soal berdasarkan seed,
 * sekaligus memperbarui kunci `answer` ke posisi huruf yang baru.
 */
function shuffleQuestionOptions(question: Question, optionSeed: number): Question {
  if (!optionSeed) return question;
  const perQuestionSeed = hashStringWithSeed(`opt:${question.id}`, optionSeed);
  const shuffledRawOptions = seededShuffle(question.options, perQuestionSeed);

  let nextAnswer: OptionKey = question.answer;
  const remappedOptions = shuffledRawOptions.map((opt, idx) => {
    const newKey = OPTION_KEYS[idx];
    if (opt.key === question.answer) {
      nextAnswer = newKey;
    }
    return {
      key: newKey,
      text: opt.text,
    };
  });

  return {
    ...question,
    options: remappedOptions,
    answer: nextAnswer,
  };
}

function syncPatternUrl(patternId: TiuPatternId) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("pattern", patternId);
  url.searchParams.delete("pola");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

export function TiuPatternPractice({
  initialPattern,
}: TiuPatternPracticeProps) {
  const [activePattern, setActivePattern] = useState<TiuPatternId>(
    initialPattern ?? DEFAULT_PATTERN,
  );
  const [selectedSubPattern, setSelectedSubPattern] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [patternSeeds, setPatternSeeds] = useState<
    Partial<Record<TiuPatternId, number>>
  >({});
  const [questionSeeds, setQuestionSeeds] = useState<Record<string, number>>({});
  const [retryQuestionIds, setRetryQuestionIds] = useState<string[] | null>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  const pendingScrollIdRef = useRef<string | null>(null);
  const hasHydratedRef = useRef<boolean>(false);

  // Hydrate progress, random seeds, & pattern deep-link on client mount
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const urlPatternRaw = searchParams.get("pattern") ?? searchParams.get("pola");
      const urlPattern = isTiuPatternId(urlPatternRaw) ? urlPatternRaw : initialPattern;

      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as StoredPracticeProgress;

          if (parsed.selectedAnswers && typeof parsed.selectedAnswers === "object") {
            const validAnswers: Record<string, OptionKey> = {};
            for (const [qId, ans] of Object.entries(parsed.selectedAnswers)) {
              if (isOptionKey(ans)) {
                validAnswers[qId] = ans;
              }
            }
            setSelectedAnswers(validAnswers);
          }

          if (parsed.flaggedQuestions && typeof parsed.flaggedQuestions === "object") {
            const validFlags: Record<string, boolean> = {};
            for (const [qId, flagged] of Object.entries(parsed.flaggedQuestions)) {
              if (flagged === true) {
                validFlags[qId] = true;
              }
            }
            setFlaggedQuestions(validFlags);
          }

          if (parsed.viewMode === "list" || parsed.viewMode === "single") {
            setViewMode(parsed.viewMode);
          }

          setPatternSeeds(createInitialPatternSeeds(parsed.patternSeeds));

          if (parsed.questionSeeds && typeof parsed.questionSeeds === "object") {
            const validQuestionSeeds: Record<string, number> = {};
            for (const [qId, qSeed] of Object.entries(parsed.questionSeeds)) {
              if (typeof qSeed === "number" && Number.isFinite(qSeed) && qSeed > 0) {
                validQuestionSeeds[qId] = qSeed >>> 0;
              }
            }
            setQuestionSeeds(validQuestionSeeds);
          }

          if (urlPattern) {
            setActivePattern(urlPattern);
            syncPatternUrl(urlPattern);
          } else if (isTiuPatternId(parsed.lastPattern)) {
            setActivePattern(parsed.lastPattern);
            syncPatternUrl(parsed.lastPattern);
          }
        } else {
          setPatternSeeds(createInitialPatternSeeds());
          if (urlPattern) {
            setActivePattern(urlPattern);
            syncPatternUrl(urlPattern);
          }
        }
      } catch {
        setPatternSeeds(createInitialPatternSeeds());
      }

      hasHydratedRef.current = true;
    });

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const nextPattern = params.get("pattern") ?? params.get("pola");
      if (isTiuPatternId(nextPattern)) {
        setActivePattern(nextPattern);
        setSelectedSubPattern("all");
        setStatusFilter("all");
        setRetryQuestionIds(null);
        setCurrentPage(1);
        setActiveQuestionId(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [initialPattern]);

  // Auto-save progress & seeds to localStorage whenever state updates
  useEffect(() => {
    if (!hasHydratedRef.current) return;
    try {
      const payload: StoredPracticeProgress = {
        selectedAnswers,
        flaggedQuestions,
        viewMode,
        lastPattern: activePattern,
        patternSeeds,
        questionSeeds,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage write quota/privacy errors
    }
  }, [
    selectedAnswers,
    flaggedQuestions,
    viewMode,
    activePattern,
    patternSeeds,
    questionSeeds,
  ]);

  const patternStats = useMemo(() => getPatternStats(), []);
  const activeMeta = TIU_PATTERNS[activePattern];
  const rawPatternQuestions = useMemo(
    () => getQuestionsByPattern(activePattern),
    [activePattern],
  );

  const activePatternSeed = patternSeeds[activePattern] ?? 0;

  // Shuffled questions (both question order and options A-E are randomized per seed)
  const allPatternQuestions = useMemo(() => {
    if (!activePatternSeed) {
      return rawPatternQuestions;
    }
    const orderSeed = hashStringWithSeed(`order:${activePattern}`, activePatternSeed);
    const shuffledOrder = seededShuffle(rawPatternQuestions, orderSeed);
    return shuffledOrder.map((question) =>
      shuffleQuestionOptions(
        question,
        questionSeeds[question.id] ?? activePatternSeed,
      ),
    );
  }, [rawPatternQuestions, activePattern, activePatternSeed, questionSeeds]);

  // Questions filtered by sub-pattern only (preserving shuffled order & options)
  const subPatternScopedQuestions = useMemo(
    () =>
      selectedSubPattern === "all"
        ? allPatternQuestions
        : allPatternQuestions.filter((q) => q.subPattern === selectedSubPattern),
    [allPatternQuestions, selectedSubPattern],
  );

  // Final filtered questions including retry queue or status filter (all / unanswered / wrong / flagged)
  const filteredQuestions = useMemo(() => {
    if (retryQuestionIds !== null) {
      const retrySet = new Set(retryQuestionIds);
      return subPatternScopedQuestions.filter((q) => retrySet.has(q.id));
    }
    if (statusFilter === "all") return subPatternScopedQuestions;
    return subPatternScopedQuestions.filter((q) => {
      const ans = selectedAnswers[q.id];
      if (statusFilter === "unanswered") return ans === undefined;
      if (statusFilter === "wrong") return ans !== undefined && ans !== q.answer;
      if (statusFilter === "flagged") return Boolean(flaggedQuestions[q.id]);
      return true;
    });
  }, [
    retryQuestionIds,
    subPatternScopedQuestions,
    statusFilter,
    selectedAnswers,
    flaggedQuestions,
  ]);

  const statusCounts = useMemo(() => {
    let unanswered = 0;
    let wrong = 0;
    let flagged = 0;
    for (const q of subPatternScopedQuestions) {
      const ans = selectedAnswers[q.id];
      if (ans === undefined) unanswered += 1;
      else if (ans !== q.answer) wrong += 1;
      if (flaggedQuestions[q.id]) flagged += 1;
    }
    return {
      all: subPatternScopedQuestions.length,
      unanswered,
      wrong,
      flagged,
    };
  }, [subPatternScopedQuestions, selectedAnswers, flaggedQuestions]);

  const subPatternCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const question of allPatternQuestions) {
      counts[question.subPattern] = (counts[question.subPattern] ?? 0) + 1;
    }
    return counts;
  }, [allPatternQuestions]);

  const answeredInView = useMemo(
    () => subPatternScopedQuestions.filter((q) => selectedAnswers[q.id] !== undefined),
    [subPatternScopedQuestions, selectedAnswers],
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
  const effectiveActiveQuestion =
    effectiveActiveIndex >= 0 ? filteredQuestions[effectiveActiveIndex] ?? null : null;
  const effectiveActiveQuestionId = effectiveActiveQuestion?.id ?? null;

  const firstUnansweredIndex = useMemo(
    () => filteredQuestions.findIndex((q) => selectedAnswers[q.id] === undefined),
    [filteredQuestions, selectedAnswers],
  );

  useEffect(() => {
    if (viewMode === "single") {
      pendingScrollIdRef.current = null;
      return;
    }
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
  }, [safePage, activePattern, selectedSubPattern, statusFilter, viewMode]);

  const handlePatternChange = useCallback((patternId: TiuPatternId) => {
    setActivePattern(patternId);
    setSelectedSubPattern("all");
    setStatusFilter("all");
    setRetryQuestionIds(null);
    setCurrentPage(1);
    setActiveQuestionId(null);
    setPatternSeeds((prev) =>
      prev[patternId] ? prev : { ...prev, [patternId]: createRandomSeed() },
    );
    pendingScrollIdRef.current = null;
    syncPatternUrl(patternId);
  }, []);

  const handleSubPatternChange = useCallback((subPattern: string) => {
    setSelectedSubPattern(subPattern);
    setStatusFilter("all");
    setRetryQuestionIds(null);
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const handleStatusFilterChange = useCallback((nextStatus: StatusFilter) => {
    setStatusFilter(nextStatus);
    setRetryQuestionIds(null);
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const handlePageChange = useCallback(
    (nextPage: number) => {
      const clampedPage = Math.max(1, Math.min(totalPages, nextPage));
      setCurrentPage(clampedPage);
      setActiveQuestionId(filteredQuestions[(clampedPage - 1) * PAGE_SIZE]?.id ?? null);
      pendingScrollIdRef.current = null;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [filteredQuestions, totalPages],
  );

  const handleJumpToQuestion = useCallback(
    (questionIndex: number) => {
      const targetQuestion = filteredQuestions[questionIndex];
      if (!targetQuestion) return;

      const targetPage = Math.floor(questionIndex / PAGE_SIZE) + 1;
      setActiveQuestionId(targetQuestion.id);

      if (viewMode === "single") {
        if (targetPage !== safePage) {
          setCurrentPage(targetPage);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (targetPage !== safePage) {
        pendingScrollIdRef.current = targetQuestion.id;
        setCurrentPage(targetPage);
        return;
      }

      const element = document.getElementById(`soal-${targetQuestion.id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    [filteredQuestions, safePage, viewMode],
  );

  const handleSelectOption = useCallback(
    (questionId: string, optionKey: OptionKey) => {
      if (isReviewMode) return;
      setActiveQuestionId(questionId);
      setQuestionSeeds((prev) => {
        if (prev[questionId] !== undefined || !activePatternSeed) {
          return prev;
        }
        return {
          ...prev,
          [questionId]: activePatternSeed,
        };
      });
      setSelectedAnswers((prev) => {
        if (prev[questionId] !== undefined) {
          return prev;
        }
        return {
          ...prev,
          [questionId]: optionKey,
        };
      });
    },
    [activePatternSeed, isReviewMode],
  );

  // Retry wrong questions: clears wrong answers, re-shuffles ONLY those questions' options, and focuses view on them
  const handleRetryWrongInScope = useCallback(() => {
    const wrongIds = subPatternScopedQuestions
      .filter((q) => {
        const ans = selectedAnswers[q.id];
        return ans !== undefined && ans !== q.answer;
      })
      .map((q) => q.id);

    if (wrongIds.length === 0) return;

    const wrongSet = new Set(wrongIds);
    const retryBatchSeed = createRandomSeed();

    setSelectedAnswers((prev) => {
      const next = { ...prev };
      for (const id of wrongSet) {
        delete next[id];
      }
      return next;
    });
    setQuestionSeeds((prev) => {
      const next = { ...prev };
      for (const id of wrongSet) {
        const currentSeed = next[id] ?? activePatternSeed;
        let nextSeed = hashStringWithSeed(`retry:${id}`, retryBatchSeed);
        if (nextSeed === currentSeed) {
          nextSeed = ((nextSeed + 1) >>> 0) || 1;
        }
        next[id] = nextSeed;
      }
      return next;
    });
    setRevealedHints((prev) => {
      const next = { ...prev };
      for (const id of wrongSet) {
        delete next[id];
      }
      return next;
    });
    setRetryQuestionIds(wrongIds);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(wrongIds[0] ?? null);
    pendingScrollIdRef.current = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePatternSeed, subPatternScopedQuestions, selectedAnswers]);

  // Reset pattern: clears pattern progress and generates a new random seed to re-shuffle all questions & options
  const handleReset = useCallback(() => {
    const patternIds = new Set(rawPatternQuestions.map((q) => q.id));
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      for (const id of patternIds) {
        delete next[id];
      }
      return next;
    });
    setQuestionSeeds((prev) => {
      const next = { ...prev };
      for (const id of patternIds) {
        delete next[id];
      }
      return next;
    });
    setFlaggedQuestions((prev) => {
      const next = { ...prev };
      for (const id of patternIds) {
        delete next[id];
      }
      return next;
    });
    setRevealedHints((prev) => {
      const next = { ...prev };
      for (const id of patternIds) {
        delete next[id];
      }
      return next;
    });
    setPatternSeeds((prev) => ({
      ...prev,
      [activePattern]: createRandomSeed(),
    }));
    setRetryQuestionIds(null);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
  }, [activePattern, rawPatternQuestions]);

  const toggleHint = useCallback((questionId: string) => {
    setActiveQuestionId(questionId);
    setRevealedHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  const toggleFlag = useCallback((questionId: string) => {
    setActiveQuestionId(questionId);
    setFlaggedQuestions((prev) => {
      const next = { ...prev };
      if (next[questionId]) {
        delete next[questionId];
      } else {
        next[questionId] = true;
      }
      return next;
    });
  }, []);

  // Keyboard shortcuts for CAT navigation & answering
  useEffect(() => {
    if (filteredQuestions.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
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

      if (event.key === "ArrowLeft") {
        if (effectiveActiveIndex > 0) {
          event.preventDefault();
          handleJumpToQuestion(effectiveActiveIndex - 1);
        }
        return;
      }

      if (event.key === "ArrowRight") {
        if (effectiveActiveIndex < filteredQuestions.length - 1) {
          event.preventDefault();
          handleJumpToQuestion(effectiveActiveIndex + 1);
        }
        return;
      }

      if (!effectiveActiveQuestion) return;

      const upperKey = event.key.toUpperCase();
      if (isOptionKey(upperKey)) {
        if (!isReviewMode && selectedAnswers[effectiveActiveQuestion.id] === undefined) {
          event.preventDefault();
          handleSelectOption(effectiveActiveQuestion.id, upperKey);
        }
        return;
      }

      if (upperKey === "H" && effectiveActiveQuestion.tip) {
        const hasAnswered = selectedAnswers[effectiveActiveQuestion.id] !== undefined;
        if (!isReviewMode && !hasAnswered) {
          event.preventDefault();
          toggleHint(effectiveActiveQuestion.id);
        }
        return;
      }

      if (upperKey === "R") {
        event.preventDefault();
        toggleFlag(effectiveActiveQuestion.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    effectiveActiveIndex,
    effectiveActiveQuestion,
    filteredQuestions.length,
    handleJumpToQuestion,
    handleSelectOption,
    isReviewMode,
    selectedAnswers,
    toggleFlag,
    toggleHint,
  ]);

  const hasPatternProgress = useMemo(
    () =>
      allPatternQuestions.some(
        (q) => selectedAnswers[q.id] !== undefined || flaggedQuestions[q.id],
      ),
    [allPatternQuestions, flaggedQuestions, selectedAnswers],
  );

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
      <div className="order-3 min-w-0 space-y-5 lg:order-2">
        {/* Panel Kontrol & Filter yang Ringkas */}
        <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 sm:p-6">
          {/* Baris 1: Judul Pola & Toolbar Aksi */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                  Pola #{activeMeta.order}
                </span>
                <span className="text-xs text-slate-500">
                  {filteredQuestions.length > 0 ? (
                    viewMode === "single" ? (
                      <>
                        Soal {effectiveActiveIndex + 1} dari {filteredQuestions.length}
                      </>
                    ) : (
                      <>
                        Soal {pageStartIndex + 1}–
                        {Math.min(pageStartIndex + PAGE_SIZE, filteredQuestions.length)} dari{" "}
                        {filteredQuestions.length}
                      </>
                    )
                  ) : (
                    <>0 soal</>
                  )}
                </span>
                {!isReviewMode && answeredInView.length > 0 && (
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    Skor: {correctInView}/{answeredInView.length} (
                    {Math.round((correctInView / answeredInView.length) * 100)}%)
                  </span>
                )}
              </div>

              <h2 className="mt-1.5 text-xl font-semibold text-slate-950 sm:text-2xl">
                {activeMeta.label}
              </h2>
            </div>

            {allPatternQuestions.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <div
                  role="group"
                  aria-label="Mode tampilan soal"
                  className="inline-flex h-9 items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5"
                >
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold transition-colors",
                      viewMode === "list"
                        ? "bg-white text-blue-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    <Layers3 className="size-3.5" aria-hidden />
                    Daftar
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("single")}
                    className={cn(
                      "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold transition-colors",
                      viewMode === "single"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    <ClipboardList className="size-3.5" aria-hidden />
                    1 Soal
                  </button>
                </div>

                <Button
                  type="button"
                  size="sm"
                  variant={isReviewMode ? "default" : "outline"}
                  onClick={() => setIsReviewMode((prev) => !prev)}
                  className={cn(
                    "h-9 text-xs font-semibold",
                    isReviewMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50",
                  )}
                >
                  {isReviewMode ? (
                    <>
                      <Eye className="size-3.5" aria-hidden />
                      Kunci Tampil
                    </>
                  ) : (
                    <>
                      <EyeOff className="size-3.5" aria-hidden />
                      Lihat Kunci
                    </>
                  )}
                </Button>

                {!isReviewMode && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={handleReset}
                    className="h-9 border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <RotateCcw className="size-3.5" aria-hidden />
                    {hasPatternProgress ? "Reset & Acak" : "Acak Soal"}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Baris 2: Tab Sub-Pola */}
          {allPatternQuestions.length > 0 && activeMeta.subPatterns.length > 0 && (
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <FilterPill
                  active={selectedSubPattern === "all"}
                  label={`Semua Topik (${allPatternQuestions.length})`}
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
            </div>
          )}

          {/* Baris 3 (Hanya tampil jika sudah ada progres/flag atau sedang mengulang soal salah): Filter Status Jawaban */}
          {allPatternQuestions.length > 0 &&
            (hasPatternProgress || retryQuestionIds !== null) && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50/90 px-3.5 py-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs font-medium text-slate-500">
                    Tampilkan:
                  </span>
                  <StatusChip
                    active={retryQuestionIds === null && statusFilter === "all"}
                    label={`Semua (${statusCounts.all})`}
                    onClick={() => handleStatusFilterChange("all")}
                  />
                  <StatusChip
                    active={retryQuestionIds === null && statusFilter === "unanswered"}
                    label={`Belum Diisi (${statusCounts.unanswered})`}
                    onClick={() => handleStatusFilterChange("unanswered")}
                  />
                  {statusCounts.wrong > 0 && (
                    <StatusChip
                      active={retryQuestionIds === null && statusFilter === "wrong"}
                      label={`Salah (${statusCounts.wrong})`}
                      onClick={() => handleStatusFilterChange("wrong")}
                    />
                  )}
                  {statusCounts.flagged > 0 && (
                    <StatusChip
                      active={retryQuestionIds === null && statusFilter === "flagged"}
                      label={`Ragu-ragu (${statusCounts.flagged})`}
                      onClick={() => handleStatusFilterChange("flagged")}
                    />
                  )}
                  {retryQuestionIds !== null && (
                    <span className="rounded-md bg-rose-700 px-2.5 py-1 text-xs font-semibold text-white">
                      Ulang Salah ({filteredQuestions.length})
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {retryQuestionIds !== null && (
                    <button
                      type="button"
                      onClick={() => handleStatusFilterChange("all")}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
                    >
                      Kembali ke semua soal
                    </button>
                  )}
                  {statusCounts.wrong > 0 && !isReviewMode && (
                    <button
                      type="button"
                      onClick={handleRetryWrongInScope}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 hover:underline"
                    >
                      <RotateCcw className="size-3" aria-hidden />
                      Ulangi {statusCounts.wrong} soal salah
                    </button>
                  )}
                </div>
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
              File terpisah untuk pola ini sudah disiapkan. Saat ini soal sedang
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
              Tidak ada soal pada pilihan filter ini.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setRetryQuestionIds(null);
                  setStatusFilter("all");
                  setSelectedSubPattern("all");
                }}
                className="border-blue-200 text-blue-700"
              >
                Tampilkan Semua Soal
              </Button>
            </div>
          </section>
        ) : viewMode === "single" && effectiveActiveQuestion ? (
          <div className="space-y-4">
            <QuestionCard
              key={effectiveActiveQuestion.id}
              index={effectiveActiveIndex + 1}
              question={effectiveActiveQuestion}
              selectedOption={selectedAnswers[effectiveActiveQuestion.id]}
              isReviewMode={isReviewMode}
              isActive
              isFlagged={Boolean(flaggedQuestions[effectiveActiveQuestion.id])}
              isHintOpen={Boolean(revealedHints[effectiveActiveQuestion.id])}
              onToggleFlag={() => toggleFlag(effectiveActiveQuestion.id)}
              onToggleHint={() => toggleHint(effectiveActiveQuestion.id)}
              onSelectOption={(key) =>
                handleSelectOption(effectiveActiveQuestion.id, key)
              }
            />

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm shadow-blue-100/50">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={effectiveActiveIndex <= 0}
                onClick={() => handleJumpToQuestion(effectiveActiveIndex - 1)}
                className="h-10 border-blue-200 px-4 text-blue-700 hover:bg-blue-50"
              >
                <ChevronLeft className="size-4" aria-hidden />
                Soal Sebelumnya
              </Button>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleFlag(effectiveActiveQuestion.id)}
                  className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-xs font-semibold transition-colors sm:text-sm",
                    flaggedQuestions[effectiveActiveQuestion.id]
                      ? "border-amber-400 bg-amber-50 text-amber-900"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-300 hover:bg-amber-50/60",
                  )}
                >
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      flaggedQuestions[effectiveActiveQuestion.id]
                        ? "bg-amber-500"
                        : "bg-slate-300",
                    )}
                    aria-hidden
                  />
                  {flaggedQuestions[effectiveActiveQuestion.id]
                    ? "Ditandai Ragu-ragu"
                    : "Tandai Ragu-ragu"}
                </button>

                <span className="px-2 text-xs font-semibold text-slate-600 sm:text-sm">
                  {effectiveActiveIndex + 1} / {filteredQuestions.length}
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={effectiveActiveIndex >= filteredQuestions.length - 1}
                onClick={() => handleJumpToQuestion(effectiveActiveIndex + 1)}
                className="h-10 border-blue-200 px-4 text-blue-700 hover:bg-blue-50"
              >
                Soal Berikutnya
                <ChevronRight className="size-4" aria-hidden />
              </Button>
            </div>

            <p className="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2.5 text-center text-xs text-slate-500">
              Pintasan Keyboard: <strong className="text-slate-700">A–E</strong> Pilih Jawaban •{" "}
              <strong className="text-slate-700">← / →</strong> Pindah Soal •{" "}
              <strong className="text-slate-700">R</strong> Tandai Ragu-ragu •{" "}
              <strong className="text-slate-700">H</strong> Buka/Tutup Hint
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-5">
              {paginatedQuestions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  index={pageStartIndex + index + 1}
                  question={question}
                  selectedOption={selectedAnswers[question.id]}
                  isReviewMode={isReviewMode}
                  isActive={effectiveActiveQuestionId === question.id}
                  isFlagged={Boolean(flaggedQuestions[question.id])}
                  isHintOpen={Boolean(revealedHints[question.id])}
                  onToggleFlag={() => toggleFlag(question.id)}
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
        flaggedQuestions={flaggedQuestions}
        activeQuestionId={effectiveActiveQuestionId}
        activeQuestionIndex={effectiveActiveIndex}
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
  isFlagged,
  isHintOpen,
  onToggleFlag,
  onToggleHint,
  onSelectOption,
}: {
  index: number;
  question: Question;
  selectedOption?: OptionKey;
  isReviewMode: boolean;
  isActive: boolean;
  isFlagged: boolean;
  isHintOpen: boolean;
  onToggleFlag: () => void;
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
        <div className="flex items-center gap-2">
          <span className="inline-flex rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
            Soal {index}
          </span>
          <button
            type="button"
            onClick={onToggleFlag}
            aria-pressed={isFlagged}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold transition",
              isFlagged
                ? "border-amber-300 bg-amber-50 text-amber-900"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-amber-200 hover:bg-amber-50/60 hover:text-amber-900",
            )}
          >
            <span
              className={cn(
                "size-2 rounded-full",
                isFlagged ? "bg-amber-500" : "bg-slate-300",
              )}
              aria-hidden
            />
            {isFlagged ? "Ragu-ragu" : "Tandai"}
          </button>
        </div>

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

      <QuestionPrompt content={question.prompt} />

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
                <span className="leading-6">
                  <OptionContent text={option.text} />
                </span>
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
        "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-blue-600 bg-blue-600 text-white shadow-xs"
          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700",
      )}
    >
      {label}
    </button>
  );
}

function StatusChip({
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
        "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
        active
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-600 hover:bg-slate-200/70 hover:text-slate-900",
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
  flaggedQuestions,
  activeQuestionId,
  activeQuestionIndex,
  firstUnansweredIndex,
  pageStartIndex,
  onJumpToQuestion,
}: {
  questions: readonly Question[];
  selectedAnswers: Record<string, OptionKey>;
  flaggedQuestions: Record<string, boolean>;
  activeQuestionId: string | null;
  activeQuestionIndex: number;
  firstUnansweredIndex: number;
  pageStartIndex: number;
  onJumpToQuestion: (questionIndex: number) => void;
}) {
  const totalChunks = Math.max(1, Math.ceil(questions.length / NAV_CHUNK_SIZE));
  const activeChunkFromQuestion =
    activeQuestionIndex >= 0 ? Math.floor(activeQuestionIndex / NAV_CHUNK_SIZE) : 0;

  const [manualChunk, setManualChunk] = useState<{
    baseChunk: number;
    selectedChunk: number;
  }>({
    baseChunk: activeChunkFromQuestion,
    selectedChunk: activeChunkFromQuestion,
  });

  const currentChunk =
    manualChunk.baseChunk === activeChunkFromQuestion
      ? Math.min(manualChunk.selectedChunk, totalChunks - 1)
      : Math.min(activeChunkFromQuestion, totalChunks - 1);

  const chunkStart = currentChunk * NAV_CHUNK_SIZE;
  const visibleQuestions = useMemo(
    () => questions.slice(chunkStart, chunkStart + NAV_CHUNK_SIZE),
    [questions, chunkStart],
  );

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
          <p className="mt-2 text-xs text-slate-500">Belum ada soal untuk filter ini.</p>
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

        {totalChunks > 1 && (
          <div
            role="tablist"
            aria-label="Rentang nomor soal"
            className="mt-3 flex flex-wrap gap-1"
          >
            {Array.from({ length: totalChunks }, (_, chunkIdx) => {
              const rangeStart = chunkIdx * NAV_CHUNK_SIZE + 1;
              const rangeEnd = Math.min(
                (chunkIdx + 1) * NAV_CHUNK_SIZE,
                questions.length,
              );
              const isSelectedChunk = chunkIdx === currentChunk;

              return (
                <button
                  key={rangeStart}
                  type="button"
                  role="tab"
                  aria-selected={isSelectedChunk}
                  onClick={() =>
                    setManualChunk({
                      baseChunk: activeChunkFromQuestion,
                      selectedChunk: chunkIdx,
                    })
                  }
                  className={cn(
                    "rounded-md border px-2 py-1 text-[11px] font-semibold transition-colors",
                    isSelectedChunk
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:text-blue-700",
                  )}
                >
                  {rangeStart}–{rangeEnd}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {questions.length > 0 && (
        <div className="mt-3 grid max-h-[42svh] grid-cols-5 gap-1.5 overflow-y-auto p-1 lg:min-h-0 lg:flex-1">
          {visibleQuestions.map((question, localIdx) => {
            const idx = chunkStart + localIdx;
            const number = idx + 1;
            const userAnswer = selectedAnswers[question.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === question.answer;
            const isFlagged = Boolean(flaggedQuestions[question.id]);
            const isCurrent = question.id === activeQuestionId;
            const isOnCurrentPage = idx >= pageStartIndex && idx < pageStartIndex + PAGE_SIZE;

            return (
              <button
                key={question.id}
                type="button"
                onClick={() => onJumpToQuestion(idx)}
                aria-label={`Soal ${number}, ${
                  isAnswered
                    ? isCorrect
                      ? "dijawab benar"
                      : "dijawab salah"
                    : "belum diisi"
                }${isFlagged ? ", ditandai ragu-ragu" : ""}`}
                aria-current={isCurrent ? "true" : undefined}
                className={cn(
                  "relative flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition-all",
                  isAnswered
                    ? isCorrect
                      ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
                      : "border-rose-500 bg-rose-500 text-white hover:bg-rose-600"
                    : isOnCurrentPage
                      ? "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400 hover:bg-blue-100/80"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50",
                  isCurrent && "ring-2 ring-amber-400 ring-offset-1 font-bold",
                )}
              >
                {number}
                {isFlagged && (
                  <span
                    aria-hidden
                    className="absolute right-1 top-1 size-1.5 rounded-full bg-amber-400 ring-1 ring-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </aside>
  );
}

function QuestionPrompt({ content }: { content: string }) {
  const lines = content.split("\n");
  const hasFigural = content.includes("[FIG:");
  const tableLines = lines.filter((line) => line.trim().startsWith("|"));

  if (hasFigural) {
    return (
      <div className="mt-4 space-y-3 text-slate-950">
        {lines.map((line, idx) =>
          line.includes("[FIG:") ? (
            <FiguralSequenceRow key={idx} line={line} />
          ) : (
            <p key={idx} className="whitespace-pre-line text-base font-medium leading-7">
              {line}
            </p>
          ),
        )}
      </div>
    );
  }

  if (tableLines.length < 2) {
    return (
      <p className="mt-4 whitespace-pre-line text-base font-medium leading-7 text-slate-950">
        {content}
      </p>
    );
  }

  const introLines: string[] = [];
  const outroLines: string[] = [];
  let seenTable = false;

  for (const line of lines) {
    if (line.trim().startsWith("|")) {
      seenTable = true;
    } else if (!seenTable) {
      introLines.push(line);
    } else {
      outroLines.push(line);
    }
  }

  const parseRow = (row: string) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());

  const headers = parseRow(tableLines[0]);
  const bodyRows = tableLines.slice(1).map(parseRow);

  return (
    <div className="mt-4 space-y-3 text-slate-950">
      {introLines.length > 0 && (
        <p className="whitespace-pre-line text-base font-medium leading-7">
          {introLines.join("\n")}
        </p>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-800">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={`${header}-${idx}`}
                  className="border-b border-slate-200 px-3.5 py-2.5 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {bodyRows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-slate-50/80">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={cn(
                      "px-3.5 py-2 text-slate-700",
                      cellIdx === 0 && "font-medium text-slate-900",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {outroLines.length > 0 && (
        <p className="whitespace-pre-line text-base font-medium leading-7">
          {outroLines.join("\n")}
        </p>
      )}
    </div>
  );
}

type FiguralSpec = {
  shape?: string;
  rot?: number;
  fill?: string;
  inner?: string;
  corner?: string;
  dots?: number;
  label?: string;
};

function parseFiguralToken(tokenBody: string): FiguralSpec {
  const spec: FiguralSpec = {};
  for (const part of tokenBody.split("|")) {
    const [rawKey, rawVal] = part.split("=");
    if (!rawKey) continue;
    const key = rawKey.trim();
    const val = (rawVal ?? "").trim();
    if (key === "shape") spec.shape = val;
    else if (key === "rot") spec.rot = Number(val) || 0;
    else if (key === "fill") spec.fill = val;
    else if (key === "inner") spec.inner = val;
    else if (key === "corner") spec.corner = val;
    else if (key === "dots") spec.dots = Number(val) || 0;
    else if (key === "label") spec.label = val;
  }
  return spec;
}

function OptionContent({ text }: { text: string }) {
  const match = text.match(/^\[FIG:([^\]]+)\]\s*(.*)$/);
  if (!match) {
    return <>{text}</>;
  }
  const spec = parseFiguralToken(match[1]);
  const caption = match[2];
  return (
    <span className="flex flex-wrap items-center gap-3">
      <FiguralTile spec={spec} size={64} />
      {caption && <span className="text-xs text-slate-700 sm:text-sm">{caption}</span>}
    </span>
  );
}

function FiguralSequenceRow({ line }: { line: string }) {
  const parts = line.split(/(\[FIG:[^\]]+\]|::|->)/g).filter((p) => p.trim().length > 0);

  return (
    <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
      {parts.map((part, idx) => {
        const trimmed = part.trim();
        const figMatch = trimmed.match(/^\[FIG:([^\]]+)\]$/);
        if (figMatch) {
          return <FiguralTile key={idx} spec={parseFiguralToken(figMatch[1])} size={76} />;
        }
        if (trimmed === "->") {
          return (
            <span key={idx} className="px-1 text-base font-bold text-blue-600" aria-hidden>
              →
            </span>
          );
        }
        if (trimmed === "::") {
          return (
            <span
              key={idx}
              className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800"
            >
              =
            </span>
          );
        }
        return (
          <span key={idx} className="text-xs font-medium text-slate-600">
            {trimmed}
          </span>
        );
      })}
    </div>
  );
}

function FiguralTile({ spec, size = 72 }: { spec: FiguralSpec; size?: number }) {
  const uid = useId().replace(/:/g, "");
  const stripeId = `stripe-${uid}`;
  const clipLeftId = `clip-l-${uid}`;
  const clipRightId = `clip-r-${uid}`;

  if (spec.shape === "question") {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <span
          style={{ width: size, height: size }}
          className="flex items-center justify-center rounded-xl border-2 border-dashed border-blue-400 bg-blue-50/70 text-2xl font-bold text-blue-700"
        >
          ?
        </span>
        {spec.label && (
          <span className="text-[10px] font-semibold text-slate-500">{spec.label}</span>
        )}
      </span>
    );
  }

  const rot = spec.rot ?? 0;
  const fillMode = spec.fill ?? "white";
  const mainFill =
    fillMode === "black"
      ? "#0f172a"
      : fillMode === "striped"
        ? `url(#${stripeId})`
        : "#ffffff";

  const renderShapePath = (fillColor: string, clipAttr?: string) => {
    const common = {
      fill: fillColor,
      stroke: "#0f172a",
      strokeWidth: 2.2,
      strokeLinejoin: "round" as const,
      clipPath: clipAttr,
    };

    switch (spec.shape) {
      case "triangle":
        return <polygon points="36,15 55,51 17,51" {...common} />;
      case "square":
        return <rect x="19" y="19" width="34" height="34" rx="2" {...common} />;
      case "diamond":
        return <polygon points="36,15 57,36 36,57 15,36" {...common} />;
      case "pentagon":
        return <polygon points="36,15 56,30 48,53 24,53 16,30" {...common} />;
      case "hexagon":
        return <polygon points="36,15 54,25 54,47 36,57 18,47 18,25" {...common} />;
      case "circle":
        return <circle cx="36" cy="36" r="19" {...common} />;
      case "lshape":
        return (
          <polygon
            points="21,17 33,17 33,41 51,41 51,53 21,53"
            {...common}
          />
        );
      case "tshape":
        return (
          <polygon
            points="18,19 54,19 54,31 42,31 42,53 30,53 30,31 18,31"
            {...common}
          />
        );
      case "arrow":
      default:
        return (
          <polygon
            points="36,14 53,33 43,33 43,55 29,55 29,33 19,33"
            {...common}
          />
        );
    }
  };

  const cornerCoords: Record<string, [number, number]> = {
    NW: [10, 10],
    NE: [62, 10],
    SE: [62, 62],
    SW: [10, 62],
  };
  const cornerPt = spec.corner ? cornerCoords[spec.corner] : undefined;
  const innerStroke = fillMode === "black" ? "#ffffff" : "#0f172a";
  const dotCount = Math.min(6, Math.max(0, spec.dots ?? 0));

  return (
    <span className="inline-flex flex-col items-center gap-1">
      <svg
        width={size}
        height={size}
        viewBox="0 0 72 72"
        className="shrink-0 rounded-xl border border-slate-300 bg-white shadow-2xs"
        aria-hidden
      >
        <defs>
          <pattern
            id={stripeId}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="#0f172a" strokeWidth="2.2" />
          </pattern>
          <clipPath id={clipLeftId}>
            <rect x="0" y="0" width="36" height="72" />
          </clipPath>
          <clipPath id={clipRightId}>
            <rect x="36" y="0" width="36" height="72" />
          </clipPath>
        </defs>

        <g transform={`rotate(${rot} 36 36)`}>
          {fillMode === "half-l" || fillMode === "half-r" ? (
            <>
              {renderShapePath("#ffffff")}
              {renderShapePath(
                "#0f172a",
                `url(#${fillMode === "half-l" ? clipLeftId : clipRightId})`,
              )}
              {renderShapePath("none")}
            </>
          ) : (
            renderShapePath(mainFill)
          )}
        </g>

        {spec.inner === "dot" && (
          <circle cx="36" cy="37" r="4" fill={innerStroke} />
        )}
        {spec.inner === "circle" && (
          <circle
            cx="36"
            cy="37"
            r="5.5"
            fill="none"
            stroke={innerStroke}
            strokeWidth="2"
          />
        )}
        {spec.inner === "plus" && (
          <g stroke={innerStroke} strokeWidth="2.2" strokeLinecap="round">
            <line x1="36" y1="31" x2="36" y2="43" />
            <line x1="30" y1="37" x2="42" y2="37" />
          </g>
        )}
        {spec.inner === "cross" && (
          <g stroke={innerStroke} strokeWidth="2.2" strokeLinecap="round">
            <line x1="31" y1="32" x2="41" y2="42" />
            <line x1="41" y1="32" x2="31" y2="42" />
          </g>
        )}

        {cornerPt && (
          <circle cx={cornerPt[0]} cy={cornerPt[1]} r="4" fill="#2563eb" />
        )}

        {dotCount > 0 &&
          Array.from({ length: dotCount }, (_, idx) => {
            const spacing = 8;
            const startX = 36 - ((dotCount - 1) * spacing) / 2;
            return (
              <circle
                key={idx}
                cx={startX + idx * spacing}
                cy="64"
                r="2.3"
                fill="#0f172a"
              />
            );
          })}
      </svg>
      {spec.label && (
        <span className="text-[10px] font-semibold text-slate-500">{spec.label}</span>
      )}
    </span>
  );
}

function capitalize(value: string) {
  return value
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}
