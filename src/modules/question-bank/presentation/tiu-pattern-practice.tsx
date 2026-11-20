"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Cloud,
  Compass,
  Eye,
  EyeOff,
  Layers3,
  LayoutGrid,
  Lightbulb,
  RotateCcw,
  X,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSupabaseAuth } from "@/modules/auth/presentation/use-supabase-auth";
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
import {
  createInitialPatternSeeds,
  createRandomSeed,
  hashStringWithSeed,
  seededShuffle,
  shuffleQuestionOptions,
} from "@/modules/question-bank/domain/question-shuffle";
import {
  commitRetryAnswer,
  getRetryEffectiveAnswers,
  getRetryEffectiveSeed,
  startRetrySession,
  startSingleQuestionRetry,
  summarizeRetrySession,
  type RetrySession,
} from "@/modules/question-bank/domain/retry-session";
import {
  fetchCloudTiuProgress,
  isOptionKey,
  isTiuPatternId,
  mergePracticeProgress,
  readLocalTiuProgress,
  sanitizePracticeProgress,
  saveCloudTiuProgress,
  writeLocalTiuProgress,
  type ViewMode,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { APP_ROUTES } from "@/shared/constants/app";
import { OptionContent, QuestionPrompt } from "./question-content";
import {
  PracticeRetryBanner,
  PracticeWrongFilterBanner,
} from "./practice-ui-primitives";

type TiuPatternPracticeProps = {
  initialPattern?: TiuPatternId;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

type StatusFilter = "all" | "unanswered" | "wrong" | "flagged";
type CloudSyncState = "idle" | "syncing" | "synced" | "schema-missing" | "error";

const PAGE_SIZE = 25;
const NAV_CHUNK_SIZE = 50;
const DEFAULT_PATTERN: TiuPatternId = "sinonim-antonim-akronim";

function syncPatternUrl(patternId: TiuPatternId) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("pattern", patternId);
  url.searchParams.delete("pola");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

export function TiuPatternPractice({
  initialPattern,
  siteHeader,
  siteFooter,
  pageIntro,
}: TiuPatternPracticeProps) {
  const [activePattern, setActivePattern] = useState<TiuPatternId>(
    initialPattern ?? DEFAULT_PATTERN,
  );
  const [selectedSubPattern, setSelectedSubPattern] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isFocusNavOpen, setIsFocusNavOpen] = useState<boolean>(false);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [patternSeeds, setPatternSeeds] = useState<
    Partial<Record<TiuPatternId, number>>
  >({});
  const [questionSeeds, setQuestionSeeds] = useState<Record<string, number>>({});
  const [retrySession, setRetrySession] = useState<RetrySession | null>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [isLocalHydrated, setIsLocalHydrated] = useState<boolean>(false);
  const [cloudSyncState, setCloudSyncState] = useState<CloudSyncState>("idle");

  const { user, isLoading: isAuthLoading, isConfigured: isAuthConfigured } =
    useSupabaseAuth();

  const pendingScrollIdRef = useRef<string | null>(null);
  const hasHydratedRef = useRef<boolean>(false);
  const cloudSyncedUserIdRef = useRef<string | null>(null);
  const cloudSchemaMissingRef = useRef<boolean>(false);
  const pendingCloudPayloadRef = useRef<ReturnType<typeof sanitizePracticeProgress> | null>(
    null,
  );

  // Hydrate progress, random seeds, & pattern deep-link on client mount
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const urlPatternRaw = searchParams.get("pattern") ?? searchParams.get("pola");
      const urlPattern = isTiuPatternId(urlPatternRaw) ? urlPatternRaw : initialPattern;

      const parsed = readLocalTiuProgress();
      if (parsed) {
        setSelectedAnswers(parsed.selectedAnswers);
        setFlaggedQuestions(parsed.flaggedQuestions);
        setViewMode(parsed.viewMode);
        setPatternSeeds(createInitialPatternSeeds(parsed.patternSeeds));
        setQuestionSeeds(parsed.questionSeeds);

        if (urlPattern) {
          setActivePattern(urlPattern);
          syncPatternUrl(urlPattern);
        } else {
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

      hasHydratedRef.current = true;
      setIsLocalHydrated(true);
    });

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const nextPattern = params.get("pattern") ?? params.get("pola");
      if (isTiuPatternId(nextPattern)) {
        setActivePattern(nextPattern);
        setSelectedSubPattern("all");
        setStatusFilter("all");
        setRetrySession(null);
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

  // Sinkronisasi awal dengan backend API ketika user sudah login
  useEffect(() => {
    if (!isLocalHydrated || !user?.id) {
      cloudSyncedUserIdRef.current = null;
      cloudSchemaMissingRef.current = false;
      return;
    }

    let isCancelled = false;
    const userId = user.id;

    fetchCloudTiuProgress()
      .then((result) => {
        if (isCancelled) return;
        if (result.schemaMissing) {
          cloudSyncedUserIdRef.current = userId;
          cloudSchemaMissingRef.current = true;
          setCloudSyncState("schema-missing");
          return;
        }
        cloudSchemaMissingRef.current = false;
        if (result.error) {
          cloudSyncedUserIdRef.current = userId;
          setCloudSyncState("error");
          return;
        }

        const currentLocal =
          readLocalTiuProgress() ?? sanitizePracticeProgress({});

        const merged = mergePracticeProgress(currentLocal, result.data);
        const resolvedPatternSeeds = createInitialPatternSeeds(merged.patternSeeds);
        const mergedWithSeeds = {
          ...merged,
          patternSeeds: resolvedPatternSeeds,
        };

        setSelectedAnswers(mergedWithSeeds.selectedAnswers);
        setFlaggedQuestions(mergedWithSeeds.flaggedQuestions);
        setQuestionSeeds(mergedWithSeeds.questionSeeds);
        setPatternSeeds(resolvedPatternSeeds);
        setViewMode(mergedWithSeeds.viewMode);

        const searchParams = new URLSearchParams(window.location.search);
        const hasUrlPattern =
          isTiuPatternId(searchParams.get("pattern") ?? searchParams.get("pola")) ||
          Boolean(initialPattern);
        if (!hasUrlPattern && result.data?.lastPattern) {
          setActivePattern(result.data.lastPattern);
          syncPatternUrl(result.data.lastPattern);
        }

        writeLocalTiuProgress(mergedWithSeeds);
        cloudSyncedUserIdRef.current = userId;

        const remoteEmpty = !result.data;
        const localHasData =
          Object.keys(currentLocal.selectedAnswers).length > 0 ||
          Object.keys(currentLocal.flaggedQuestions).length > 0;

        if (remoteEmpty || localHasData) {
          saveCloudTiuProgress(mergedWithSeeds)
            .then((saveRes) => {
              if (isCancelled) return;
              if (saveRes.schemaMissing) {
                cloudSchemaMissingRef.current = true;
                setCloudSyncState("schema-missing");
                return;
              }
              setCloudSyncState(saveRes.ok ? "synced" : "error");
            })
            .catch(() => {
              if (!isCancelled) setCloudSyncState("error");
            });
        } else {
          setCloudSyncState("synced");
        }
      })
      .catch(() => {
        if (!isCancelled) {
          cloudSyncedUserIdRef.current = userId;
          setCloudSyncState("error");
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [isLocalHydrated, user?.id, initialPattern]);

  // Auto-save progress & seeds ke localStorage + debounced save ke /api/tiu/progress saat login
  useEffect(() => {
    if (!hasHydratedRef.current) return;
    const payload = sanitizePracticeProgress({
      selectedAnswers,
      flaggedQuestions,
      viewMode,
      lastPattern: activePattern,
      patternSeeds,
      questionSeeds,
    });
    writeLocalTiuProgress(payload);

    if (
      !user?.id ||
      cloudSyncedUserIdRef.current !== user.id ||
      cloudSchemaMissingRef.current
    ) {
      return;
    }

    pendingCloudPayloadRef.current = payload;
    const timer = window.setTimeout(() => {
      pendingCloudPayloadRef.current = null;
      setCloudSyncState("syncing");
      saveCloudTiuProgress(payload)
        .then((res) => {
          if (res.schemaMissing) {
            cloudSchemaMissingRef.current = true;
            setCloudSyncState("schema-missing");
            return;
          }
          setCloudSyncState(res.ok ? "synced" : "error");
        })
        .catch(() => {
          setCloudSyncState("error");
        });
    }, 800);

    return () => window.clearTimeout(timer);
  }, [
    selectedAnswers,
    flaggedQuestions,
    viewMode,
    activePattern,
    patternSeeds,
    questionSeeds,
    user?.id,
  ]);

  // Pastikan perubahan yang tertunda tetap tersimpan ke server saat berpindah halaman
  useEffect(() => {
    return () => {
      const pendingPayload = pendingCloudPayloadRef.current;
      if (
        pendingPayload &&
        cloudSyncedUserIdRef.current &&
        !cloudSchemaMissingRef.current
      ) {
        pendingCloudPayloadRef.current = null;
        void saveCloudTiuProgress(pendingPayload, { keepalive: true });
      }
    };
  }, []);

  const patternStats = useMemo(() => getPatternStats(), []);
  const activeMeta = TIU_PATTERNS[activePattern];
  const rawPatternQuestions = useMemo(
    () => getQuestionsByPattern(activePattern),
    [activePattern],
  );
  const rawQuestionById = useMemo(
    () => new Map(rawPatternQuestions.map((question) => [question.id, question])),
    [rawPatternQuestions],
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

  const effectiveSelectedAnswers = useMemo(
    () => getRetryEffectiveAnswers(retrySession, selectedAnswers),
    [retrySession, selectedAnswers],
  );

  // Final filtered questions including retry queue or status filter (all / unanswered / wrong / flagged)
  const filteredQuestions = useMemo(() => {
    if (retrySession !== null) {
      const retrySet = new Set(retrySession.questionIds);
      const pendingSet = new Set(retrySession.pendingIds);
      return subPatternScopedQuestions
        .filter((q) => retrySet.has(q.id))
        .map((q) => {
          if (!pendingSet.has(q.id)) return q;
          const rawQ = rawQuestionById.get(q.id) ?? q;
          const tempSeed = getRetryEffectiveSeed(
            retrySession,
            q.id,
            questionSeeds[q.id],
            activePatternSeed,
          );
          return tempSeed ? shuffleQuestionOptions(rawQ, tempSeed) : rawQ;
        });
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
    retrySession,
    subPatternScopedQuestions,
    rawQuestionById,
    questionSeeds,
    activePatternSeed,
    statusFilter,
    selectedAnswers,
    flaggedQuestions,
  ]);

  const retrySummary = useMemo(
    () =>
      summarizeRetrySession(
        retrySession,
        subPatternScopedQuestions,
        selectedAnswers,
        (q, ans) => ans !== undefined && ans !== q.answer,
      ),
    [retrySession, subPatternScopedQuestions, selectedAnswers],
  );

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
    () => filteredQuestions.findIndex((q) => effectiveSelectedAnswers[q.id] === undefined),
    [filteredQuestions, effectiveSelectedAnswers],
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
    setRetrySession(null);
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
    setRetrySession(null);
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const handleStatusFilterChange = useCallback((nextStatus: StatusFilter) => {
    setStatusFilter(nextStatus);
    setRetrySession(null);
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
      const isPendingRetry = Boolean(retrySession?.pendingIds.includes(questionId));
      const committedSeed = getRetryEffectiveSeed(
        retrySession,
        questionId,
        questionSeeds[questionId],
        activePatternSeed,
      );

      setActiveQuestionId(questionId);
      setQuestionSeeds((prev) => {
        if (!isPendingRetry && (prev[questionId] !== undefined || !activePatternSeed)) {
          return prev;
        }
        if (!committedSeed) {
          return prev;
        }
        return {
          ...prev,
          [questionId]: committedSeed,
        };
      });
      setSelectedAnswers((prev) => {
        if (!isPendingRetry && prev[questionId] !== undefined) {
          return prev;
        }
        return {
          ...prev,
          [questionId]: optionKey,
        };
      });
      if (isPendingRetry) {
        setRetrySession((prev) => commitRetryAnswer(prev, questionId).nextSession);
      }
    },
    [activePatternSeed, isReviewMode, questionSeeds, retrySession],
  );

  const startRetryForIds = useCallback(
    (targetIds: readonly string[]) => {
      const nextSession = startRetrySession(
        targetIds,
        questionSeeds,
        activePatternSeed,
      );
      if (!nextSession) return;

      const targetSet = new Set(nextSession.questionIds);
      setRevealedHints((prev) => {
        const next = { ...prev };
        for (const id of targetSet) {
          delete next[id];
        }
        return next;
      });
      setIsReviewMode(false);
      setRetrySession(nextSession);
      setStatusFilter("all");
      setCurrentPage(1);
      setActiveQuestionId(nextSession.questionIds[0] ?? null);
      pendingScrollIdRef.current = null;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [activePatternSeed, questionSeeds],
  );

  // Retry wrong questions: opens focused retry mode with freshly shuffled options while keeping old answers intact until re-answered
  const handleRetryWrongInScope = useCallback(() => {
    const wrongIds = subPatternScopedQuestions
      .filter((q) => {
        const ans = selectedAnswers[q.id];
        return ans !== undefined && ans !== q.answer;
      })
      .map((q) => q.id);

    startRetryForIds(wrongIds);
  }, [subPatternScopedQuestions, selectedAnswers, startRetryForIds]);

  const handleRetrySingleQuestion = useCallback(
    (questionId: string) => {
      setIsReviewMode(false);
      setRevealedHints((prev) => {
        if (!prev[questionId]) return prev;
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
      setRetrySession((prev) =>
        startSingleQuestionRetry(
          prev,
          questionId,
          questionSeeds[questionId] ?? activePatternSeed,
        ),
      );
      setStatusFilter("all");
      setCurrentPage(1);
      setActiveQuestionId(questionId);
      pendingScrollIdRef.current = null;
    },
    [activePatternSeed, questionSeeds],
  );

  // Reset pattern: clears pattern progress and generates a new random seed to re-shuffle all questions & options
  const handleReset = useCallback(() => {
    const patternIds = new Set(rawPatternQuestions.map((q) => q.id));
    const nextSelectedAnswers = { ...selectedAnswers };
    for (const id of patternIds) {
      delete nextSelectedAnswers[id];
    }
    const nextQuestionSeeds = { ...questionSeeds };
    for (const id of patternIds) {
      delete nextQuestionSeeds[id];
    }
    const nextFlaggedQuestions = { ...flaggedQuestions };
    for (const id of patternIds) {
      delete nextFlaggedQuestions[id];
    }
    const nextPatternSeeds = {
      ...patternSeeds,
      [activePattern]: createRandomSeed(),
    };

    setSelectedAnswers(nextSelectedAnswers);
    setQuestionSeeds(nextQuestionSeeds);
    setFlaggedQuestions(nextFlaggedQuestions);
    setRevealedHints((prev) => {
      const next = { ...prev };
      for (const id of patternIds) {
        delete next[id];
      }
      return next;
    });
    setPatternSeeds(nextPatternSeeds);
    setRetrySession(null);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);

    if (cloudSyncedUserIdRef.current && !cloudSchemaMissingRef.current) {
      const resetPayload = sanitizePracticeProgress({
        selectedAnswers: nextSelectedAnswers,
        flaggedQuestions: nextFlaggedQuestions,
        viewMode,
        lastPattern: activePattern,
        patternSeeds: nextPatternSeeds,
        questionSeeds: nextQuestionSeeds,
      });
      pendingCloudPayloadRef.current = null;
      void saveCloudTiuProgress(resetPayload, { keepalive: true }).then((res) => {
        setCloudSyncState(res.ok ? "synced" : "error");
      });
    }
  }, [
    activePattern,
    flaggedQuestions,
    patternSeeds,
    questionSeeds,
    rawPatternQuestions,
    selectedAnswers,
    viewMode,
  ]);

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
        const isInteractiveControl = Boolean(
          target?.closest(
            'a, button:not(:disabled), select, input, textarea, [contenteditable="true"], [role="tab"], [role="button"]',
          ),
        );
        if (isInteractiveControl) return;

        const canAdvance =
          effectiveActiveQuestion !== null &&
          (isReviewMode ||
            effectiveSelectedAnswers[effectiveActiveQuestion.id] !== undefined);

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
        if (
          !isReviewMode &&
          effectiveSelectedAnswers[effectiveActiveQuestion.id] === undefined
        ) {
          event.preventDefault();
          handleSelectOption(effectiveActiveQuestion.id, upperKey);
        }
        return;
      }

      if (upperKey === "H" && effectiveActiveQuestion.tip) {
        const hasAnswered =
          effectiveSelectedAnswers[effectiveActiveQuestion.id] !== undefined;
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
    effectiveSelectedAnswers,
    filteredQuestions.length,
    handleJumpToQuestion,
    handleSelectOption,
    isFocusNavOpen,
    isReviewMode,
    toggleFlag,
    toggleHint,
    viewMode,
  ]);

  const hasPatternProgress = useMemo(
    () =>
      allPatternQuestions.some(
        (q) => selectedAnswers[q.id] !== undefined || flaggedQuestions[q.id],
      ),
    [allPatternQuestions, flaggedQuestions, selectedAnswers],
  );

  if (viewMode === "single") {
    const scopeTotal = subPatternScopedQuestions.length;
    const scopeProgressPct =
      scopeTotal > 0 ? Math.round((answeredInView.length / scopeTotal) * 100) : 0;

    return (
      <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
        {/* Focus Top Bar Bebas Distraksi */}
        <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-2.5 px-4 py-2.5 sm:px-6">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 border-slate-200 px-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                Mode Daftar
              </Button>

              <select
                aria-label="Pilih pola soal TIU"
                value={activePattern}
                onChange={(event) =>
                  handlePatternChange(event.target.value as TiuPatternId)
                }
                className="h-8 max-w-[190px] truncate rounded-lg border border-blue-200 bg-blue-50/70 px-2.5 text-xs font-semibold text-blue-900 outline-none transition focus:border-blue-500 sm:max-w-[230px]"
              >
                {patternStats.map((pattern) => (
                  <option key={pattern.id} value={pattern.id}>
                    {pattern.order}. {pattern.label} ({pattern.total})
                  </option>
                ))}
              </select>

              {activeMeta.subPatterns.length > 0 && (
                <select
                  aria-label="Pilih sub-pola soal"
                  value={selectedSubPattern}
                  onChange={(event) => handleSubPatternChange(event.target.value)}
                  className="hidden h-8 max-w-[175px] truncate rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700 outline-none transition focus:border-blue-500 md:block"
                >
                  <option value="all">
                    Semua Topik ({allPatternQuestions.length})
                  </option>
                  {activeMeta.subPatterns.map((sub) => (
                    <option key={sub} value={sub}>
                      {capitalize(sub)} ({subPatternCounts[sub] ?? 0})
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {filteredQuestions.length > 0 && (
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {effectiveActiveIndex + 1} / {filteredQuestions.length}
                </span>
              )}

              {!isReviewMode && answeredInView.length > 0 && (
                <span className="hidden rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 sm:inline-flex">
                  {correctInView}/{answeredInView.length} benar (
                  {Math.round((correctInView / answeredInView.length) * 100)}%)
                </span>
              )}

              {user ? (
                cloudSyncState === "synced" ? (
                  <Link
                    href={APP_ROUTES.account}
                    title="Tersinkron ke akun"
                    className="hidden items-center gap-1 rounded-md bg-blue-50/80 px-2 py-1 text-[11px] font-medium text-blue-700 hover:bg-blue-100 lg:inline-flex"
                  >
                    <Cloud className="size-3" aria-hidden />
                    Tersinkron
                  </Link>
                ) : cloudSyncState === "syncing" ? (
                  <span className="hidden items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 lg:inline-flex">
                    <Cloud className="size-3 animate-pulse" aria-hidden />
                    Menyimpan...
                  </span>
                ) : null
              ) : null}

              <Button
                type="button"
                size="sm"
                variant={isReviewMode ? "default" : "outline"}
                onClick={() => setIsReviewMode((prev) => !prev)}
                className={cn(
                  "h-8 px-2.5 text-xs font-semibold",
                  isReviewMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50",
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
                    <span className="hidden sm:inline">Lihat Kunci</span>
                  </>
                )}
              </Button>

              {!isReviewMode && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleReset}
                  title={hasPatternProgress ? "Reset & Acak" : "Acak Soal"}
                  className="h-8 border-slate-200 px-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="size-3.5" aria-hidden />
                  <span className="hidden md:inline">
                    {hasPatternProgress ? "Reset & Acak" : "Acak"}
                  </span>
                </Button>
              )}

              <Button
                type="button"
                size="sm"
                variant={isFocusNavOpen ? "default" : "outline"}
                aria-expanded={isFocusNavOpen}
                onClick={() => setIsFocusNavOpen((prev) => !prev)}
                className={cn(
                  "h-8 px-2.5 text-xs font-semibold",
                  isFocusNavOpen
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-blue-200 text-blue-700 hover:bg-blue-50",
                )}
              >
                <LayoutGrid className="size-3.5" aria-hidden />
                Peta Soal
              </Button>
            </div>
          </div>

          {activeMeta.subPatterns.length > 0 && (
            <div className="border-t border-slate-100 px-4 py-1.5 md:hidden">
              <select
                aria-label="Pilih sub-pola soal"
                value={selectedSubPattern}
                onChange={(event) => handleSubPatternChange(event.target.value)}
                className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-xs font-medium text-slate-700 outline-none focus:border-blue-500"
              >
                <option value="all">
                  Semua Topik ({allPatternQuestions.length})
                </option>
                {activeMeta.subPatterns.map((sub) => (
                  <option key={sub} value={sub}>
                    {capitalize(sub)} ({subPatternCounts[sub] ?? 0})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="h-1 w-full bg-slate-100" aria-hidden>
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${scopeProgressPct}%` }}
            />
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1140px] flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div
            className={cn(
              "mx-auto",
              isFocusNavOpen
                ? "grid max-w-[1080px] gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start"
                : "max-w-[760px]",
            )}
          >
            <div className="min-w-0 space-y-4">
              {allPatternQuestions.length > 0 &&
                (hasPatternProgress || retrySession !== null) && (
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-blue-100 bg-white px-3.5 py-2 shadow-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <StatusChip
                        active={retrySession === null && statusFilter === "all"}
                        label={`Semua (${statusCounts.all})`}
                        onClick={() => handleStatusFilterChange("all")}
                      />
                      <StatusChip
                        active={
                          retrySession === null && statusFilter === "unanswered"
                        }
                        label={`Belum (${statusCounts.unanswered})`}
                        onClick={() => handleStatusFilterChange("unanswered")}
                      />
                      {statusCounts.wrong > 0 && (
                        <StatusChip
                          active={retrySession === null && statusFilter === "wrong"}
                          label={`Salah (${statusCounts.wrong})`}
                          onClick={() => handleStatusFilterChange("wrong")}
                        />
                      )}
                      {statusCounts.flagged > 0 && (
                        <StatusChip
                          active={
                            retrySession === null && statusFilter === "flagged"
                          }
                          label={`Ragu (${statusCounts.flagged})`}
                          onClick={() => handleStatusFilterChange("flagged")}
                        />
                      )}
                      {retrySession !== null && (
                        <span className="rounded-md bg-rose-700 px-2.5 py-1 text-xs font-semibold text-white">
                          Ulang Salah ({retrySummary?.completedCount ?? 0}/
                          {filteredQuestions.length})
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {retrySession !== null && (
                        <button
                          type="button"
                          onClick={() => handleStatusFilterChange("all")}
                          className="text-xs font-semibold text-blue-700 hover:underline"
                        >
                          Kembali ke semua
                        </button>
                      )}
                      {statusCounts.wrong > 0 &&
                        !(retrySession && retrySession.pendingIds.length > 0) && (
                          <button
                            type="button"
                            onClick={handleRetryWrongInScope}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:underline"
                          >
                            <RotateCcw className="size-3" aria-hidden />
                            Ulangi {statusCounts.wrong} salah
                          </button>
                        )}
                    </div>
                  </div>
                )}

              {retrySummary ? (
                <PracticeRetryBanner
                  summary={retrySummary}
                  wrongUnitLabel="soal salah"
                  perfectLabel="terjawab benar"
                  onRetryRemaining={startRetryForIds}
                  onExitRetry={() => handleStatusFilterChange("all")}
                />
              ) : (
                retrySession === null &&
                statusFilter === "wrong" && (
                  <PracticeWrongFilterBanner
                    wrongCount={statusCounts.wrong}
                    wrongUnitLabel="soal salah"
                    onStartRetryAll={handleRetryWrongInScope}
                  />
                )
              )}

              {allPatternQuestions.length === 0 ? (
                <section className="rounded-2xl border border-dashed border-blue-200 bg-white px-6 py-16 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <BookOpen className="size-7" aria-hidden />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950">
                    Bank soal {activeMeta.label} siap diisi
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Silakan pilih pola lain melalui pemilih pola di bagian atas.
                  </p>
                </section>
              ) : filteredQuestions.length === 0 || !effectiveActiveQuestion ? (
                <section className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
                  <p className="text-base font-semibold text-slate-800">
                    Tidak ada soal pada pilihan filter ini.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setRetrySession(null);
                      setStatusFilter("all");
                      setSelectedSubPattern("all");
                    }}
                    className="mt-4 border-blue-200 text-blue-700"
                  >
                    Tampilkan Semua Soal
                  </Button>
                </section>
              ) : (
                <>
                  {(() => {
                    const activeAns = effectiveSelectedAnswers[effectiveActiveQuestion.id];
                    const canRetryActive =
                      !isReviewMode &&
                      activeAns !== undefined &&
                      activeAns !== effectiveActiveQuestion.answer;
                    return (
                      <QuestionCard
                        key={effectiveActiveQuestion.id}
                        index={effectiveActiveIndex + 1}
                        question={effectiveActiveQuestion}
                        selectedOption={activeAns}
                        isReviewMode={isReviewMode}
                        isActive={false}
                        isFlagged={Boolean(flaggedQuestions[effectiveActiveQuestion.id])}
                        isHintOpen={Boolean(revealedHints[effectiveActiveQuestion.id])}
                        onToggleFlag={() => toggleFlag(effectiveActiveQuestion.id)}
                        onToggleHint={() => toggleHint(effectiveActiveQuestion.id)}
                        onSelectOption={(key) =>
                          handleSelectOption(effectiveActiveQuestion.id, key)
                        }
                        onRetryQuestion={
                          canRetryActive
                            ? () => handleRetrySingleQuestion(effectiveActiveQuestion.id)
                            : undefined
                        }
                      />
                    );
                  })()}

                  <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-blue-100 bg-white px-4 py-3.5 shadow-sm shadow-blue-100/50 sm:px-5">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={effectiveActiveIndex <= 0}
                      onClick={(event) => {
                        if (event.detail > 0) event.currentTarget.blur();
                        handleJumpToQuestion(effectiveActiveIndex - 1);
                      }}
                      className="h-10 border-blue-200 px-3.5 text-blue-700 hover:bg-blue-50 sm:px-4"
                    >
                      <ChevronLeft className="size-4" aria-hidden />
                      <span className="hidden sm:inline">Soal Sebelumnya</span>
                      <span className="sm:hidden">Sebelumnya</span>
                    </Button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(event) => {
                          if (event.detail > 0) event.currentTarget.blur();
                          toggleFlag(effectiveActiveQuestion.id);
                        }}
                        className={cn(
                          "inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-colors sm:px-4 sm:text-sm",
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

                      <span className="px-1.5 text-xs font-semibold text-slate-600 sm:text-sm">
                        {effectiveActiveIndex + 1} / {filteredQuestions.length}
                      </span>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={effectiveActiveIndex >= filteredQuestions.length - 1}
                      onClick={(event) => {
                        if (event.detail > 0) event.currentTarget.blur();
                        handleJumpToQuestion(effectiveActiveIndex + 1);
                      }}
                      className="h-10 border-blue-200 px-3.5 text-blue-700 hover:bg-blue-50 sm:px-4"
                    >
                      <span className="hidden sm:inline">Soal Berikutnya</span>
                      <span className="sm:hidden">Berikutnya</span>
                      <ChevronRight className="size-4" aria-hidden />
                    </Button>
                  </div>

                  <p className="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2.5 text-center text-xs text-slate-500">
                    Pintasan Keyboard: <strong className="text-slate-700">A–E</strong> Pilih •{" "}
                    <strong className="text-slate-700">Enter / Spasi</strong> Lanjut (setelah jawab/pembahasan) •{" "}
                    <strong className="text-slate-700">← / →</strong> Pindah •{" "}
                    <strong className="text-slate-700">R</strong> Ragu-ragu •{" "}
                    <strong className="text-slate-700">H</strong> Hint
                  </p>
                </>
              )}
            </div>

            {isFocusNavOpen && (
              <div className="hidden lg:block">
                <QuestionNumberNavigator
                  questions={filteredQuestions}
                  selectedAnswers={effectiveSelectedAnswers}
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
        </main>

        {isFocusNavOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Peta nomor soal"
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
              <QuestionNumberNavigator
                inDrawer
                questions={filteredQuestions}
                selectedAnswers={effectiveSelectedAnswers}
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
                      APP_ROUTES.tiuPatternPractice(activePattern),
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
            (hasPatternProgress || retrySession !== null) && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50/90 px-3.5 py-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs font-medium text-slate-500">
                    Tampilkan:
                  </span>
                  <StatusChip
                    active={retrySession === null && statusFilter === "all"}
                    label={`Semua (${statusCounts.all})`}
                    onClick={() => handleStatusFilterChange("all")}
                  />
                  <StatusChip
                    active={retrySession === null && statusFilter === "unanswered"}
                    label={`Belum Diisi (${statusCounts.unanswered})`}
                    onClick={() => handleStatusFilterChange("unanswered")}
                  />
                  {statusCounts.wrong > 0 && (
                    <StatusChip
                      active={retrySession === null && statusFilter === "wrong"}
                      label={`Salah (${statusCounts.wrong})`}
                      onClick={() => handleStatusFilterChange("wrong")}
                    />
                  )}
                  {statusCounts.flagged > 0 && (
                    <StatusChip
                      active={retrySession === null && statusFilter === "flagged"}
                      label={`Ragu-ragu (${statusCounts.flagged})`}
                      onClick={() => handleStatusFilterChange("flagged")}
                    />
                  )}
                  {retrySession !== null && (
                    <span className="rounded-md bg-rose-700 px-2.5 py-1 text-xs font-semibold text-white">
                      Ulang Salah ({retrySummary?.completedCount ?? 0}/
                      {filteredQuestions.length})
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {retrySession !== null && (
                    <button
                      type="button"
                      onClick={() => handleStatusFilterChange("all")}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
                    >
                      Kembali ke semua soal
                    </button>
                  )}
                  {statusCounts.wrong > 0 &&
                    !(retrySession && retrySession.pendingIds.length > 0) && (
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

        {retrySummary ? (
          <PracticeRetryBanner
            summary={retrySummary}
            wrongUnitLabel="soal salah"
            perfectLabel="terjawab benar"
            onRetryRemaining={startRetryForIds}
            onExitRetry={() => handleStatusFilterChange("all")}
          />
        ) : (
          retrySession === null &&
          statusFilter === "wrong" && (
            <PracticeWrongFilterBanner
              wrongCount={statusCounts.wrong}
              wrongUnitLabel="soal salah"
              onStartRetryAll={handleRetryWrongInScope}
            />
          )
        )}

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
                  setRetrySession(null);
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
              {paginatedQuestions.map((question, index) => {
                const questionAns = effectiveSelectedAnswers[question.id];
                const canRetryQuestion =
                  !isReviewMode &&
                  questionAns !== undefined &&
                  questionAns !== question.answer;
                return (
                  <QuestionCard
                    key={question.id}
                    index={pageStartIndex + index + 1}
                    question={question}
                    selectedOption={questionAns}
                    isReviewMode={isReviewMode}
                    isActive={effectiveActiveQuestionId === question.id}
                    isFlagged={Boolean(flaggedQuestions[question.id])}
                    isHintOpen={Boolean(revealedHints[question.id])}
                    onToggleFlag={() => toggleFlag(question.id)}
                    onToggleHint={() => toggleHint(question.id)}
                    onSelectOption={(key) => handleSelectOption(question.id, key)}
                    onRetryQuestion={
                      canRetryQuestion
                        ? () => handleRetrySingleQuestion(question.id)
                        : undefined
                    }
                  />
                );
              })}
            </div>

            {retrySummary?.isComplete && (
              <PracticeRetryBanner
                summary={retrySummary}
                wrongUnitLabel="soal salah"
                perfectLabel="terjawab benar"
                onRetryRemaining={startRetryForIds}
                onExitRetry={() => handleStatusFilterChange("all")}
              />
            )}

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
        selectedAnswers={effectiveSelectedAnswers}
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
  onRetryQuestion,
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
  onRetryQuestion?: () => void;
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
            onClick={(event) => {
              if (event.detail > 0) {
                event.currentTarget.blur();
              }
              onToggleFlag();
            }}
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
              onClick={(event) => {
                if (event.detail > 0) {
                  event.currentTarget.blur();
                }
                onToggleHint();
              }}
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
              onClick={(event) => {
                if (event.detail > 0) {
                  event.currentTarget.blur();
                }
                onSelectOption(option.key);
              }}
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
          <div className="flex flex-wrap items-center justify-between gap-2">
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
            {onRetryQuestion && (
              <button
                type="button"
                onClick={(event) => {
                  if (event.detail > 0) {
                    event.currentTarget.blur();
                  }
                  onRetryQuestion();
                }}
                className="inline-flex items-center gap-1.5 rounded-md border border-rose-200 bg-white px-2.5 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-50"
              >
                <RotateCcw className="size-3" aria-hidden />
                Ulangi soal ini
              </button>
            )}
          </div>
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
  inDrawer = false,
}: {
  questions: readonly Question[];
  selectedAnswers: Record<string, OptionKey>;
  flaggedQuestions: Record<string, boolean>;
  activeQuestionId: string | null;
  activeQuestionIndex: number;
  firstUnansweredIndex: number;
  pageStartIndex: number;
  onJumpToQuestion: (questionIndex: number) => void;
  inDrawer?: boolean;
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
      className={
        inDrawer
          ? "min-w-0 bg-white p-5"
          : "order-2 min-w-0 overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-100/60 lg:sticky lg:top-24 lg:order-3 lg:flex lg:max-h-[calc(100svh-7rem)] lg:flex-col"
      }
    >
      <div className="shrink-0">
        {!inDrawer && (
          <div className="flex items-center gap-2 text-blue-700">
            <Compass className="size-4 shrink-0" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">
              Navigasi Nomor Soal
            </p>
          </div>
        )}

        {questions.length === 0 && (
          <p className={inDrawer ? "text-xs text-slate-500" : "mt-2 text-xs text-slate-500"}>
            Belum ada soal untuk filter ini.
          </p>
        )}

        {questions.length > 0 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={firstUnansweredIndex < 0}
            onClick={() => onJumpToQuestion(firstUnansweredIndex)}
            className={`${inDrawer ? "" : "mt-3 "}h-8 w-full border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50 disabled:opacity-60`}
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

function capitalize(value: string) {
  return value
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}
