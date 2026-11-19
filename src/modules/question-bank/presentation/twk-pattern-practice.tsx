"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Cloud,
  Eye,
  EyeOff,
  Flag,
  HelpCircle,
  Layers3,
  LayoutGrid,
  RotateCcw,
  X,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSupabaseAuth } from "@/modules/auth/presentation/use-supabase-auth";
import {
  TWK_QUESTION_BANKS,
  getTwkPatternStats,
} from "@/modules/question-bank/data/twk";
import {
  TWK_PATTERNS,
  type Difficulty,
  type OptionKey,
  type PracticePatternId,
  type Question,
  type TiuPatternId,
  type TwkPatternId,
} from "@/modules/question-bank/domain/question";
import {
  createRandomSeed,
  hashStringWithSeed,
  seededShuffle,
  shuffleQuestionOptions,
} from "@/modules/question-bank/domain/question-shuffle";
import { createInitialAllPatternSeeds } from "@/modules/question-bank/domain/subtest-summary";
import {
  fetchCloudTiuProgress,
  isOptionKey,
  isTwkPatternId,
  mergePracticeProgress,
  readLocalSubtestPattern,
  readLocalTiuProgress,
  sanitizePracticeProgress,
  saveCloudTiuProgress,
  writeLocalSubtestPattern,
  writeLocalTiuProgress,
  type ViewMode,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { APP_ROUTES } from "@/shared/constants/app";
import {
  PracticeFilterPill,
  PracticePaginationBar,
  PracticeStatusChip,
  formatSubPatternLabel,
} from "./practice-ui-primitives";

type StatusFilter = "all" | "unanswered" | "wrong" | "flagged";
type CloudSyncState = "idle" | "syncing" | "synced" | "error";

type TwkPatternPracticeProps = {
  initialPattern?: TwkPatternId;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

const DEFAULT_TWK_PATTERN: TwkPatternId = "nasionalisme";
const PAGE_SIZE = 20;

const DIFFICULTY_META: Record<Difficulty, { label: string; badgeClass: string }> = {
  mudah: {
    label: "Mudah",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  sedang: {
    label: "Sedang",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
  },
  sulit: {
    label: "Sulit",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

function syncTwkPatternUrl(patternId: TwkPatternId) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("pattern", patternId);
  url.searchParams.delete("pola");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

export function TwkPatternPractice({
  initialPattern,
  siteHeader,
  siteFooter,
  pageIntro,
}: TwkPatternPracticeProps) {
  const [activePattern, setActivePattern] = useState<TwkPatternId>(
    initialPattern ?? DEFAULT_TWK_PATTERN,
  );
  const [selectedSubPattern, setSelectedSubPattern] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [patternSeeds, setPatternSeeds] = useState<Partial<Record<PracticePatternId, number>>>(
    {},
  );
  const [questionSeeds, setQuestionSeeds] = useState<Record<string, number>>({});
  const [lastTiuPattern, setLastTiuPattern] = useState<TiuPatternId>("sinonim-antonim-akronim");
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [retryQuestionIds, setRetryQuestionIds] = useState<readonly string[] | null>(null);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isCloudReady, setIsCloudReady] = useState<boolean>(false);
  const [cloudSyncState, setCloudSyncState] = useState<CloudSyncState>("idle");
  const [isFocusNavOpen, setIsFocusNavOpen] = useState<boolean>(false);

  const pendingScrollIdRef = useRef<string | null>(null);
  const skipNextCloudSaveRef = useRef<boolean>(false);
  const { user, isLoading: isAuthLoading, isConfigured: isAuthConfigured } = useSupabaseAuth();

  // Hydrate progres lokal & seed pengacakan saat mount di browser
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const urlRaw = params.get("pattern") ?? params.get("pola");
      const urlPattern = isTwkPatternId(urlRaw) ? urlRaw : initialPattern;
      const savedTwkPattern = readLocalSubtestPattern("TWK");
      const parsed = readLocalTiuProgress();

      if (parsed) {
        setSelectedAnswers(parsed.selectedAnswers);
        setFlaggedQuestions(parsed.flaggedQuestions);
        setViewMode(parsed.viewMode);
        setLastTiuPattern(parsed.lastPattern);
        setPatternSeeds(createInitialAllPatternSeeds(parsed.patternSeeds));
        setQuestionSeeds(parsed.questionSeeds);

        const resolvedInitial =
          urlPattern ?? (isTwkPatternId(savedTwkPattern) ? savedTwkPattern : DEFAULT_TWK_PATTERN);
        setActivePattern(resolvedInitial);
      } else {
        setPatternSeeds(createInitialAllPatternSeeds());
        if (urlPattern) {
          setActivePattern(urlPattern);
        } else if (isTwkPatternId(savedTwkPattern)) {
          setActivePattern(savedTwkPattern);
        }
      }

      setIsHydrated(true);
    });

    const handlePopState = () => {
      const nextParams = new URLSearchParams(window.location.search);
      const nextPattern = nextParams.get("pattern") ?? nextParams.get("pola");
      if (isTwkPatternId(nextPattern)) {
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

  // Gabungkan & sinkronkan progres akun ke cloud saat login
  useEffect(() => {
    if (!isHydrated || isAuthLoading) return;

    if (!user) {
      const frame = window.requestAnimationFrame(() => {
        setIsCloudReady(false);
        setCloudSyncState("idle");
      });
      return () => window.cancelAnimationFrame(frame);
    }

    let cancelled = false;
    fetchCloudTiuProgress()
      .then(({ data: remote, schemaMissing }) => {
        if (cancelled) return;
        if (schemaMissing) {
          setIsCloudReady(false);
          setCloudSyncState("error");
          return;
        }

        const local = readLocalTiuProgress() ?? sanitizePracticeProgress({});
        const merged = mergePracticeProgress(local, remote);
        const resolvedPatternSeeds = createInitialAllPatternSeeds(merged.patternSeeds);
        const mergedWithSeeds = {
          ...merged,
          patternSeeds: resolvedPatternSeeds,
        };

        skipNextCloudSaveRef.current = true;
        setSelectedAnswers(mergedWithSeeds.selectedAnswers);
        setFlaggedQuestions(mergedWithSeeds.flaggedQuestions);
        setViewMode(mergedWithSeeds.viewMode);
        setLastTiuPattern(mergedWithSeeds.lastPattern);
        setPatternSeeds(resolvedPatternSeeds);
        setQuestionSeeds(mergedWithSeeds.questionSeeds);

        writeLocalTiuProgress(mergedWithSeeds);

        setIsCloudReady(true);
        setCloudSyncState("synced");

        if (!remote) {
          void saveCloudTiuProgress(mergedWithSeeds);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setIsCloudReady(false);
          setCloudSyncState("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isHydrated, isAuthLoading, user]);

  // Persist progres otomatis ke localStorage dan cloud
  useEffect(() => {
    if (!isHydrated) return;

    writeLocalSubtestPattern("TWK", activePattern);
    const payload = sanitizePracticeProgress({
      selectedAnswers,
      flaggedQuestions,
      viewMode,
      lastPattern: lastTiuPattern,
      patternSeeds,
      questionSeeds,
    });
    writeLocalTiuProgress(payload);

    if (!user || !isCloudReady) return;
    if (skipNextCloudSaveRef.current) {
      skipNextCloudSaveRef.current = false;
      return;
    }

    const timer = window.setTimeout(() => {
      setCloudSyncState("syncing");
      void saveCloudTiuProgress(payload).then(({ ok }) => {
        setCloudSyncState(ok ? "synced" : "error");
      });
    }, 450);

    return () => window.clearTimeout(timer);
  }, [
    isHydrated,
    selectedAnswers,
    flaggedQuestions,
    viewMode,
    activePattern,
    lastTiuPattern,
    patternSeeds,
    questionSeeds,
    user,
    isCloudReady,
  ]);

  const patternStats = useMemo(() => getTwkPatternStats(), []);
  const activeMeta = TWK_PATTERNS[activePattern];
  const rawPatternQuestions = useMemo(
    () => TWK_QUESTION_BANKS[activePattern],
    [activePattern],
  );
  const activePatternSeed = patternSeeds[activePattern] ?? 0;

  const allPatternQuestions = useMemo(() => {
    if (!activePatternSeed) return rawPatternQuestions;
    const shuffledOrder = seededShuffle(rawPatternQuestions, activePatternSeed);
    return shuffledOrder.map((question) => {
      const effectiveSeed = questionSeeds[question.id] ?? activePatternSeed;
      return shuffleQuestionOptions(question, effectiveSeed);
    });
  }, [rawPatternQuestions, activePatternSeed, questionSeeds]);

  const subPatternScopedQuestions = useMemo(() => {
    if (selectedSubPattern === "all") return allPatternQuestions;
    return allPatternQuestions.filter((q) => q.subPattern === selectedSubPattern);
  }, [allPatternQuestions, selectedSubPattern]);

  const filteredQuestions = useMemo(() => {
    if (retryQuestionIds !== null) {
      const retrySet = new Set(retryQuestionIds);
      return subPatternScopedQuestions.filter((q) => retrySet.has(q.id));
    }

    return subPatternScopedQuestions.filter((question) => {
      if (statusFilter === "unanswered") return selectedAnswers[question.id] === undefined;
      if (statusFilter === "wrong") {
        const answer = selectedAnswers[question.id];
        return answer !== undefined && answer !== question.answer;
      }
      if (statusFilter === "flagged") return Boolean(flaggedQuestions[question.id]);
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
    for (const q of allPatternQuestions) {
      counts[q.subPattern] = (counts[q.subPattern] ?? 0) + 1;
    }
    return counts;
  }, [allPatternQuestions]);

  const answeredInView = useMemo(
    () => subPatternScopedQuestions.filter((q) => selectedAnswers[q.id] !== undefined),
    [subPatternScopedQuestions, selectedAnswers],
  );
  const correctInView = useMemo(
    () => answeredInView.filter((q) => selectedAnswers[q.id] === q.answer).length,
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
      document.getElementById(`soal-${targetId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [safePage, activePattern, selectedSubPattern, statusFilter, viewMode]);

  const handlePatternChange = useCallback((patternId: TwkPatternId) => {
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
    syncTwkPatternUrl(patternId);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      document.getElementById(`soal-${targetQuestion.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    [filteredQuestions, safePage, viewMode],
  );

  const handleFocusJumpToQuestion = useCallback(
    (questionIndex: number) => {
      handleJumpToQuestion(questionIndex);
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        setIsFocusNavOpen(false);
      }
    },
    [handleJumpToQuestion],
  );

  const handleSelectOption = useCallback(
    (questionId: string, optionKey: OptionKey) => {
      if (isReviewMode) return;
      setActiveQuestionId(questionId);
      setQuestionSeeds((prev) => {
        if (prev[questionId] !== undefined || !activePatternSeed) {
          return prev;
        }
        return { ...prev, [questionId]: activePatternSeed };
      });
      setSelectedAnswers((prev) => {
        if (prev[questionId] !== undefined) return prev;
        return { ...prev, [questionId]: optionKey };
      });
    },
    [activePatternSeed, isReviewMode],
  );

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
      for (const id of wrongSet) delete next[id];
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
      for (const id of wrongSet) delete next[id];
      return next;
    });
    setRetryQuestionIds(wrongIds);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(wrongIds[0] ?? null);
    pendingScrollIdRef.current = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePatternSeed, subPatternScopedQuestions, selectedAnswers]);

  const handleReset = useCallback(() => {
    const patternIds = new Set(rawPatternQuestions.map((q) => q.id));
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      for (const id of patternIds) delete next[id];
      return next;
    });
    setQuestionSeeds((prev) => {
      const next = { ...prev };
      for (const id of patternIds) delete next[id];
      return next;
    });
    setFlaggedQuestions((prev) => {
      const next = { ...prev };
      for (const id of patternIds) delete next[id];
      return next;
    });
    setRevealedHints((prev) => {
      const next = { ...prev };
      for (const id of patternIds) delete next[id];
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
      if (next[questionId]) delete next[questionId];
      else next[questionId] = true;
      return next;
    });
  }, []);

  // Pintasan keyboard untuk navigasi mode CAT & pengisian cepat
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "Escape" && viewMode === "single" && isFocusNavOpen) {
        event.preventDefault();
        setIsFocusNavOpen(false);
        return;
      }

      if (filteredQuestions.length === 0) return;

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

      if (event.key === "Enter" || event.key === " ") {
        const isInteractive = Boolean(
          target?.closest(
            'a, button:not(:disabled), select, input, textarea, [contenteditable="true"], [role="tab"], [role="button"]',
          ),
        );
        if (isInteractive) return;

        const canAdvance =
          effectiveActiveQuestion !== null &&
          (isReviewMode || selectedAnswers[effectiveActiveQuestion.id] !== undefined);
        if (canAdvance && effectiveActiveIndex < filteredQuestions.length - 1) {
          event.preventDefault();
          handleJumpToQuestion(effectiveActiveIndex + 1);
        }
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
    isFocusNavOpen,
    isReviewMode,
    selectedAnswers,
    toggleFlag,
    toggleHint,
    viewMode,
  ]);

  const hasPatternProgress = useMemo(
    () =>
      rawPatternQuestions.some(
        (q) => selectedAnswers[q.id] !== undefined || Boolean(flaggedQuestions[q.id]),
      ),
    [rawPatternQuestions, selectedAnswers, flaggedQuestions],
  );

  // Mode Fokus 1 Soal (CAT Bebas Gangguan)
  if (viewMode === "single") {
    return (
      <div className="min-h-screen bg-[#f4f7fc] text-slate-950">
        <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-2.5 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsFocusNavOpen(false);
                  setViewMode("list");
                }}
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
              >
                <ChevronLeft className="size-4" aria-hidden />
                <span>Daftar</span>
              </button>

              <select
                aria-label="Pilih pilar soal TWK"
                value={activePattern}
                onChange={(event) => {
                  handlePatternChange(event.target.value as TwkPatternId);
                  setIsFocusNavOpen(false);
                }}
                className="h-9 min-w-0 max-w-[240px] flex-1 truncate rounded-lg border border-blue-200 bg-blue-50/70 px-2.5 text-xs font-semibold text-blue-950 outline-none focus:border-blue-500 sm:max-w-[300px] sm:flex-none sm:text-sm"
              >
                {patternStats.map((pattern) => (
                  <option key={pattern.id} value={pattern.id}>
                    {pattern.order}. {pattern.label} ({pattern.total})
                  </option>
                ))}
              </select>

              {activeMeta.subPatterns.length > 0 && (
                <div className="hidden min-w-0 items-center gap-1 overflow-x-auto md:flex">
                  <PracticeFilterPill
                    active={selectedSubPattern === "all"}
                    label={`Semua (${allPatternQuestions.length})`}
                    onClick={() => handleSubPatternChange("all")}
                  />
                  {activeMeta.subPatterns.map((sub) => (
                    <PracticeFilterPill
                      key={sub}
                      active={selectedSubPattern === sub}
                      label={`${formatSubPatternLabel(sub)} (${subPatternCounts[sub] ?? 0})`}
                      onClick={() => handleSubPatternChange(sub)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {!isReviewMode && answeredInView.length > 0 && (
                <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {correctInView}/{answeredInView.length} benar
                </span>
              )}

              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold tabular-nums text-slate-800">
                {filteredQuestions.length > 0
                  ? `${effectiveActiveIndex + 1} / ${filteredQuestions.length}`
                  : "0 / 0"}
              </span>

              <Button
                type="button"
                size="sm"
                variant={isFocusNavOpen ? "default" : "outline"}
                aria-expanded={isFocusNavOpen}
                onClick={() => setIsFocusNavOpen((prev) => !prev)}
                className={cn(
                  "h-9 text-xs font-semibold",
                  isFocusNavOpen
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                )}
              >
                <LayoutGrid className="size-3.5" aria-hidden />
                <span>Peta Soal</span>
              </Button>

              <Button
                type="button"
                size="sm"
                variant={isReviewMode ? "default" : "outline"}
                onClick={() => setIsReviewMode((prev) => !prev)}
                className={cn(
                  "h-9 text-xs font-semibold",
                  isReviewMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                )}
              >
                {isReviewMode ? (
                  <>
                    <Eye className="size-3.5" aria-hidden />
                    <span className="hidden sm:inline">Kunci Tampil</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="size-3.5" aria-hidden />
                    <span className="hidden sm:inline">Kunci</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {activeMeta.subPatterns.length > 0 && (
            <div className="border-t border-slate-100 px-4 py-2 md:hidden">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                <PracticeFilterPill
                  active={selectedSubPattern === "all"}
                  label={`Semua (${allPatternQuestions.length})`}
                  onClick={() => handleSubPatternChange("all")}
                />
                {activeMeta.subPatterns.map((sub) => (
                  <PracticeFilterPill
                    key={sub}
                    active={selectedSubPattern === sub}
                    label={`${formatSubPatternLabel(sub)} (${subPatternCounts[sub] ?? 0})`}
                    onClick={() => handleSubPatternChange(sub)}
                  />
                ))}
              </div>
            </div>
          )}

          {(hasPatternProgress || retryQuestionIds !== null) && (
            <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-2 sm:px-6">
              <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <PracticeStatusChip
                    active={retryQuestionIds === null && statusFilter === "all"}
                    label={`Semua (${statusCounts.all})`}
                    onClick={() => handleStatusFilterChange("all")}
                  />
                  <PracticeStatusChip
                    active={retryQuestionIds === null && statusFilter === "unanswered"}
                    label={`Belum Diisi (${statusCounts.unanswered})`}
                    onClick={() => handleStatusFilterChange("unanswered")}
                  />
                  {statusCounts.wrong > 0 && (
                    <PracticeStatusChip
                      active={retryQuestionIds === null && statusFilter === "wrong"}
                      label={`Salah (${statusCounts.wrong})`}
                      onClick={() => handleStatusFilterChange("wrong")}
                    />
                  )}
                  {statusCounts.flagged > 0 && (
                    <PracticeStatusChip
                      active={retryQuestionIds === null && statusFilter === "flagged"}
                      label={`Ragu (${statusCounts.flagged})`}
                      onClick={() => handleStatusFilterChange("flagged")}
                    />
                  )}
                  {retryQuestionIds !== null && (
                    <span className="rounded-md bg-rose-700 px-2.5 py-1 text-xs font-semibold text-white">
                      Ulang Salah ({filteredQuestions.length})
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {retryQuestionIds !== null && (
                    <button
                      type="button"
                      onClick={() => handleStatusFilterChange("all")}
                      className="text-xs font-semibold text-blue-700 hover:underline"
                    >
                      Semua soal
                    </button>
                  )}
                  {statusCounts.wrong > 0 && !isReviewMode && (
                    <button
                      type="button"
                      onClick={handleRetryWrongInScope}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:underline"
                    >
                      <RotateCcw className="size-3" aria-hidden />
                      Ulangi {statusCounts.wrong} salah
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <RotateCcw className="size-3" aria-hidden />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="mx-auto max-w-[1160px] px-4 py-6 sm:px-6 sm:py-8">
          {filteredQuestions.length === 0 || !effectiveActiveQuestion ? (
            <section className="mx-auto max-w-2xl rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
              <p className="text-base font-semibold text-slate-800">
                Tidak ada soal pada pilihan filter ini.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setRetryQuestionIds(null);
                  setStatusFilter("all");
                  setSelectedSubPattern("all");
                }}
                className="mt-4 border-blue-200 text-blue-700"
              >
                Tampilkan Semua Soal
              </Button>
            </section>
          ) : (
            <div
              className={cn(
                "mx-auto grid gap-6",
                isFocusNavOpen
                  ? "max-w-[1100px] lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start"
                  : "max-w-[820px]",
              )}
            >
              <div className="min-w-0">
                <TwkQuestionCard
                  index={effectiveActiveIndex + 1}
                  question={effectiveActiveQuestion}
                  selectedOption={selectedAnswers[effectiveActiveQuestion.id]}
                  isReviewMode={isReviewMode}
                  isActive
                  isFlagged={Boolean(flaggedQuestions[effectiveActiveQuestion.id])}
                  isHintOpen={Boolean(revealedHints[effectiveActiveQuestion.id])}
                  onToggleFlag={() => toggleFlag(effectiveActiveQuestion.id)}
                  onToggleHint={() => toggleHint(effectiveActiveQuestion.id)}
                  onSelectOption={(key) => handleSelectOption(effectiveActiveQuestion.id, key)}
                />

                {/* Navigasi Bawah Khusus Mode 1 Soal */}
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3.5 shadow-sm shadow-blue-100/50 sm:px-5">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={effectiveActiveIndex <= 0}
                    onClick={() => handleJumpToQuestion(effectiveActiveIndex - 1)}
                    className="h-10 border-slate-200 px-4 text-xs font-semibold text-slate-700 sm:text-sm"
                  >
                    <ChevronLeft className="size-4" aria-hidden />
                    Sebelumnya
                  </Button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleFlag(effectiveActiveQuestion.id)}
                      className={cn(
                        "inline-flex h-10 items-center gap-1.5 rounded-lg border px-3 text-xs font-semibold transition-colors sm:text-sm",
                        flaggedQuestions[effectiveActiveQuestion.id]
                          ? "border-amber-300 bg-amber-50 text-amber-800"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                      )}
                    >
                      <Flag
                        className={cn(
                          "size-3.5",
                          flaggedQuestions[effectiveActiveQuestion.id] && "fill-amber-500 text-amber-500",
                        )}
                        aria-hidden
                      />
                      {flaggedQuestions[effectiveActiveQuestion.id] ? "Ditandai Ragu" : "Ragu-ragu"}
                    </button>

                    <span className="hidden text-xs font-semibold tabular-nums text-slate-500 sm:inline">
                      {effectiveActiveIndex + 1} / {filteredQuestions.length}
                    </span>
                  </div>

                  <Button
                    type="button"
                    disabled={effectiveActiveIndex >= filteredQuestions.length - 1}
                    onClick={() => handleJumpToQuestion(effectiveActiveIndex + 1)}
                    className="h-10 bg-blue-600 px-4 text-xs font-semibold text-white hover:bg-blue-700 sm:text-sm"
                  >
                    Selanjutnya
                    <ChevronRight className="size-4" aria-hidden />
                  </Button>
                </div>

                <p className="mt-3 text-center text-[11px] text-slate-400">
                  Pintasan: <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">A–E</kbd>{" "}
                  jawab • <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">←</kbd>{" "}
                  <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">→</kbd> /{" "}
                  <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">Enter</kbd> lanjut •{" "}
                  <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">R</kbd> ragu •{" "}
                  <kbd className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono">H</kbd> hint
                </p>
              </div>

              {isFocusNavOpen && (
                <div className="hidden lg:block">
                  <TwkNumberNavigator
                    questions={filteredQuestions}
                    selectedAnswers={selectedAnswers}
                    flaggedQuestions={flaggedQuestions}
                    activeQuestionId={effectiveActiveQuestionId}
                    activeQuestionIndex={effectiveActiveIndex}
                    firstUnansweredIndex={firstUnansweredIndex}
                    pageStartIndex={pageStartIndex}
                    onJumpToQuestion={handleFocusJumpToQuestion}
                  />
                </div>
              )}
            </div>
          )}
        </main>

        {isFocusNavOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Peta nomor soal TWK"
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-0 backdrop-blur-[1px] sm:items-center sm:p-4 lg:hidden"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setIsFocusNavOpen(false);
              }
            }}
          >
            <div className="w-full max-w-md overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                <p className="text-sm font-semibold text-slate-900">
                  Peta Nomor Soal ({filteredQuestions.length})
                </p>
                <button
                  type="button"
                  onClick={() => setIsFocusNavOpen(false)}
                  aria-label="Tutup peta nomor soal"
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>
              <TwkNumberNavigator
                inDrawer
                questions={filteredQuestions}
                selectedAnswers={selectedAnswers}
                flaggedQuestions={flaggedQuestions}
                activeQuestionId={effectiveActiveQuestionId}
                activeQuestionIndex={effectiveActiveIndex}
                firstUnansweredIndex={firstUnansweredIndex}
                pageStartIndex={pageStartIndex}
                onJumpToQuestion={handleFocusJumpToQuestion}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      {siteHeader}

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 py-10 sm:px-8 lg:px-10">
        {pageIntro}

        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)_248px] xl:grid-cols-[270px_minmax(0,1fr)_285px] lg:items-start">
          {/* Sidebar Kiri: 5 Pilar Soal TWK */}
          <aside className="order-1 min-w-0 overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              5 Pilar Soal TWK
            </p>
            <h2 className="mt-1.5 text-lg font-semibold text-slate-950">
              Pilih Pilar Wawasan
            </h2>

            <nav aria-label="Daftar pilar soal TWK" className="mt-4 flex flex-col gap-1.5">
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
                      {pattern.total} soal
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-xs leading-5 text-slate-600">
              <p className="font-semibold text-slate-800">Fokus Kisi-kisi TWK</p>
              <p className="mt-1">{activeMeta.description}</p>
            </div>
          </aside>

          {/* Konten Utama */}
          <div className="order-3 min-w-0 space-y-5 lg:order-2">
            <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      Pilar #{activeMeta.order}
                    </span>
                    <span className="text-xs text-slate-500">
                      {filteredQuestions.length > 0 ? (
                        <>
                          Soal {pageStartIndex + 1}–
                          {Math.min(pageStartIndex + PAGE_SIZE, filteredQuestions.length)} dari{" "}
                          {filteredQuestions.length}
                        </>
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
                    {user ? (
                      cloudSyncState === "synced" ? (
                        <Link
                          href={APP_ROUTES.account}
                          className="inline-flex items-center gap-1 rounded-md bg-blue-50/80 px-2 py-0.5 text-[11px] font-medium text-blue-700 hover:bg-blue-100"
                        >
                          <Cloud className="size-3" aria-hidden />
                          Tersinkron ke akun
                        </Link>
                      ) : cloudSyncState === "syncing" ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                          <Cloud className="size-3 animate-pulse" aria-hidden />
                          Menyimpan...
                        </span>
                      ) : null
                    ) : !isAuthLoading && isAuthConfigured ? (
                      <Link
                        href={`${APP_ROUTES.login}?next=${encodeURIComponent(
                          APP_ROUTES.twkPatternPractice(activePattern),
                        )}`}
                        className="inline-flex items-center gap-1 rounded-md border border-blue-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-blue-700 hover:bg-blue-50"
                      >
                        Masuk untuk simpan ke akun
                      </Link>
                    ) : null}
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
                        aria-pressed
                        onClick={() => setViewMode("list")}
                        className="inline-flex h-8 items-center gap-1.5 rounded-md bg-white px-2.5 text-xs font-semibold text-blue-700 shadow-xs transition-colors"
                      >
                        <Layers3 className="size-3.5" aria-hidden />
                        Daftar
                      </button>
                      <button
                        type="button"
                        aria-pressed={false}
                        onClick={() => setViewMode("single")}
                        className="inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900"
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

              {/* Filter Sub-Topik */}
              {allPatternQuestions.length > 0 && activeMeta.subPatterns.length > 0 && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <PracticeFilterPill
                      active={selectedSubPattern === "all"}
                      label={`Semua Topik (${allPatternQuestions.length})`}
                      onClick={() => handleSubPatternChange("all")}
                    />
                    {activeMeta.subPatterns.map((sub) => (
                      <PracticeFilterPill
                        key={sub}
                        active={selectedSubPattern === sub}
                        label={`${formatSubPatternLabel(sub)} (${subPatternCounts[sub] ?? 0})`}
                        onClick={() => handleSubPatternChange(sub)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Filter Status */}
              {allPatternQuestions.length > 0 &&
                (hasPatternProgress || retryQuestionIds !== null) && (
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50/90 px-3.5 py-2.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 text-xs font-medium text-slate-500">
                        Tampilkan:
                      </span>
                      <PracticeStatusChip
                        active={retryQuestionIds === null && statusFilter === "all"}
                        label={`Semua (${statusCounts.all})`}
                        onClick={() => handleStatusFilterChange("all")}
                      />
                      <PracticeStatusChip
                        active={retryQuestionIds === null && statusFilter === "unanswered"}
                        label={`Belum Diisi (${statusCounts.unanswered})`}
                        onClick={() => handleStatusFilterChange("unanswered")}
                      />
                      {statusCounts.wrong > 0 && (
                        <PracticeStatusChip
                          active={retryQuestionIds === null && statusFilter === "wrong"}
                          label={`Salah (${statusCounts.wrong})`}
                          onClick={() => handleStatusFilterChange("wrong")}
                        />
                      )}
                      {statusCounts.flagged > 0 && (
                        <PracticeStatusChip
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

            {/* Daftar Kartu Soal */}
            {filteredQuestions.length === 0 ? (
              <section className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <BookOpen className="size-6" aria-hidden />
                </span>
                <p className="mt-3 text-base font-semibold text-slate-800">
                  Tidak ada soal pada pilihan filter ini.
                </p>
                <div className="mt-4 flex justify-center">
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
            ) : (
              <>
                <div className="space-y-5">
                  {paginatedQuestions.map((question, index) => (
                    <TwkQuestionCard
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
                  <PracticePaginationBar
                    currentPage={safePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>

          {/* Sidebar Kanan: Peta Nomor Soal */}
          <TwkNumberNavigator
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
      </main>

      {siteFooter}
    </div>
  );
}

function TwkQuestionCard({
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
  const difficulty = DIFFICULTY_META[question.difficulty];
  const hasAnswered = selectedOption !== undefined;
  const shouldShowExplanation = isReviewMode || hasAnswered;

  return (
    <article
      id={`soal-${question.id}`}
      className={cn(
        "scroll-mt-24 rounded-2xl border bg-white p-5 shadow-sm transition-colors sm:p-6",
        isActive
          ? "border-blue-300 ring-1 ring-blue-100 shadow-blue-100/80"
          : "border-blue-100 shadow-blue-100/50",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
            Soal #{index}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium",
              difficulty.badgeClass,
            )}
          >
            {difficulty.label}
          </span>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            {formatSubPatternLabel(question.subPattern)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {question.tip && !shouldShowExplanation && (
            <button
              type="button"
              aria-pressed={isHintOpen}
              onClick={onToggleHint}
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
                isHintOpen
                  ? "border-sky-300 bg-sky-50 text-sky-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              <HelpCircle className="size-3.5" aria-hidden />
              {isHintOpen ? "Tutup Hint" : "Lihat Hint"}
            </button>
          )}
          <button
            type="button"
            aria-pressed={isFlagged}
            onClick={onToggleFlag}
            className={cn(
              "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
              isFlagged
                ? "border-amber-300 bg-amber-50 text-amber-800"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
            )}
          >
            <Flag
              className={cn("size-3.5", isFlagged && "fill-amber-500 text-amber-500")}
              aria-hidden
            />
            {isFlagged ? "Ditandai" : "Ragu-ragu"}
          </button>
        </div>
      </div>

      <p className="mt-4 whitespace-pre-line text-[15px] font-medium leading-7 text-slate-900 sm:text-base sm:leading-7">
        {question.prompt}
      </p>

      {isHintOpen && question.tip && !shouldShowExplanation && (
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50/75 px-4 py-3 text-xs leading-5 text-sky-900 sm:text-sm sm:leading-6">
          <span className="font-semibold text-sky-950">Petunjuk Pendekatan: </span>
          {question.tip}
        </div>
      )}

      <div className="mt-5 grid gap-2.5">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.key;
          const isCorrectOption = option.key === question.answer;
          const showCorrect = shouldShowExplanation && isCorrectOption;
          const showWrongSelected = !isReviewMode && hasAnswered && isSelected && !isCorrectOption;

          return (
            <button
              key={option.key}
              type="button"
              disabled={isReviewMode || hasAnswered}
              onClick={() => onSelectOption(option.key)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-all sm:px-4 sm:text-[15px]",
                showCorrect
                  ? "border-emerald-500 bg-emerald-50/80 text-emerald-950"
                  : showWrongSelected
                    ? "border-rose-400 bg-rose-50/80 text-rose-950"
                    : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50/40",
                (isReviewMode || hasAnswered) && "cursor-default hover:bg-inherit",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                  showCorrect
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : showWrongSelected
                      ? "border-rose-600 bg-rose-600 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700",
                )}
              >
                {option.key}
              </span>
              <span className="flex-1 leading-6">{option.text}</span>
              {showCorrect && (
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
              )}
              {showWrongSelected && (
                <XCircle className="mt-0.5 size-5 shrink-0 text-rose-600" aria-hidden />
              )}
            </button>
          );
        })}
      </div>

      {shouldShowExplanation && (
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-800">
          <p className="font-semibold text-blue-950">
            Kunci Jawaban: {question.answer}
          </p>
          <p className="mt-1 leading-6 text-slate-700">{question.explanation}</p>
        </div>
      )}
    </article>
  );
}

function TwkNumberNavigator({
  questions,
  selectedAnswers,
  flaggedQuestions,
  activeQuestionId,
  activeQuestionIndex,
  firstUnansweredIndex,
  pageStartIndex,
  inDrawer = false,
  onJumpToQuestion,
}: {
  questions: readonly Question[];
  selectedAnswers: Readonly<Record<string, OptionKey>>;
  flaggedQuestions: Readonly<Record<string, boolean>>;
  activeQuestionId: string | null;
  activeQuestionIndex: number;
  firstUnansweredIndex: number;
  pageStartIndex: number;
  inDrawer?: boolean;
  onJumpToQuestion: (index: number) => void;
}) {
  const answeredCount = useMemo(
    () => questions.filter((q) => selectedAnswers[q.id] !== undefined).length,
    [questions, selectedAnswers],
  );

  return (
    <aside
      aria-label="Peta nomor soal TWK"
      className={cn(
        inDrawer
          ? "max-h-[70svh] overflow-y-auto bg-white p-5"
          : "order-2 min-w-0 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm shadow-blue-100/60 lg:sticky lg:top-24 lg:order-3 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto xl:p-5",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          Peta Nomor Soal
        </p>
        <span className="text-xs font-semibold tabular-nums text-slate-600">
          {answeredCount}/{questions.length}
        </span>
      </div>

      {firstUnansweredIndex >= 0 && (
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => onJumpToQuestion(firstUnansweredIndex)}
          className="mt-3 h-8 w-full border-blue-200 bg-blue-50/70 text-xs font-semibold text-blue-800 hover:bg-blue-100"
        >
          Lanjut ke Nomor {firstUnansweredIndex + 1} (Belum Diisi)
        </Button>
      )}

      <div className="mt-3.5 grid grid-cols-5 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
        {questions.map((question, idx) => {
          const answer = selectedAnswers[question.id];
          const isAnswered = answer !== undefined;
          const isCorrect = isAnswered && answer === question.answer;
          const isFlagged = Boolean(flaggedQuestions[question.id]);
          const isCurrent =
            activeQuestionId === question.id ||
            (activeQuestionId === null && idx === pageStartIndex) ||
            idx === activeQuestionIndex;

          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onJumpToQuestion(idx)}
              aria-label={`Ke soal nomor ${idx + 1}`}
              aria-current={isCurrent ? "step" : undefined}
              className={cn(
                "relative flex h-9 items-center justify-center rounded-lg border text-xs font-bold tabular-nums transition-all",
                isAnswered
                  ? isCorrect
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-rose-500 bg-rose-500 text-white"
                  : isFlagged
                    ? "border-amber-400 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50",
                isCurrent && "ring-2 ring-blue-600 ring-offset-1",
              )}
            >
              {idx + 1}
              {isFlagged && isAnswered && (
                <span
                  aria-hidden
                  className="absolute -right-0.5 -top-0.5 size-2 rounded-full border border-white bg-amber-400"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1">
          <span className="size-2.5 rounded-xs bg-emerald-500" aria-hidden /> Benar
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="size-2.5 rounded-xs bg-rose-500" aria-hidden /> Salah
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="size-2.5 rounded-xs border border-amber-400 bg-amber-100" aria-hidden />{" "}
          Ragu
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="size-2.5 rounded-xs border border-slate-300 bg-slate-100" aria-hidden />{" "}
          Kosong
        </span>
      </div>
    </aside>
  );
}
