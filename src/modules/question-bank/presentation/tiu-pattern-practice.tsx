"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  Check,
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
  DIFFICULTIES,
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  type Difficulty,
  type OptionKey,
  type Question,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";

type TiuPatternPracticeProps = {
  initialPattern?: TiuPatternId;
};

type ViewMode = "list" | "single";
type StatusFilter = "all" | "unanswered" | "wrong" | "flagged";

type DiagnosticReport = {
  correct: number;
  total: number;
  accuracy: number;
  recommendedSubPattern: string;
  recommendedDifficulty: Difficulty;
  subPatternBreakdown: readonly {
    subPattern: string;
    label: string;
    correct: number;
    total: number;
    accuracy: number;
    recommendedDifficulty: Difficulty;
  }[];
};

type ActiveDiagnosticSession = {
  patternId: TiuPatternId;
  seed: number;
  questions: readonly Question[];
  currentIndex: number;
  answers: Record<string, OptionKey>;
};

type StoredPracticeProgress = {
  selectedAnswers?: Record<string, OptionKey>;
  flaggedQuestions?: Record<string, boolean>;
  viewMode?: ViewMode;
  lastPattern?: TiuPatternId;
  diagnosticReports?: Partial<Record<TiuPatternId, DiagnosticReport>>;
  patternSeeds?: Partial<Record<TiuPatternId, number>>;
  questionSeeds?: Record<string, number>;
};

const PAGE_SIZE = 25;
const NAV_CHUNK_SIZE = 50;
const MASTERY_THRESHOLD = 80;
const STORAGE_KEY = "wiyata-tiu-practice-progress-v1";
const DEFAULT_PATTERN: TiuPatternId = "sinonim-antonim-akronim";

const DIFFICULTY_META: Record<
  Difficulty,
  {
    step: number;
    title: string;
    subtitle: string;
    badgeClass: string;
  }
> = {
  mudah: {
    step: 1,
    title: "Level 1 • Pondasi",
    subtitle: "Konsep Dasar & Pola Inti",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  sedang: {
    step: 2,
    title: "Level 2 • Standar CAT",
    subtitle: "Setara Soal SKD CPNS",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
  },
  sulit: {
    step: 3,
    title: "Level 3 • HOTS & Jebakan",
    subtitle: "Penalaran Lanjut & Pengecoh",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-200",
  },
};

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

function isDifficulty(value: unknown): value is Difficulty {
  return (
    typeof value === "string" &&
    (DIFFICULTIES as readonly string[]).includes(value)
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

function recommendDifficultyFromAccuracy(accuracy: number): Difficulty {
  if (accuracy < 50) return "mudah";
  if (accuracy < 80) return "sedang";
  return "sulit";
}

/**
 * Menyusun paket soal Tes Diagnostik Singkat secara proporsional & acak:
 * mengambil 1 soal Mudah, 1 Sedang, dan 1 Sulit secara acak dari setiap sub-pola,
 * lalu mengacak urutan soal dan urutan opsi A–E.
 */
function buildDiagnosticQuestions(
  patternId: TiuPatternId,
  rawQuestions: readonly Question[],
  seed: number,
): readonly Question[] {
  const subPatterns = TIU_PATTERNS[patternId].subPatterns;
  if (subPatterns.length === 0) {
    return seededShuffle(
      rawQuestions,
      hashStringWithSeed(`diag:${patternId}`, seed),
    )
      .slice(0, 9)
      .map((q) => shuffleQuestionOptions(q, seed));
  }

  const picked: Question[] = [];
  for (const sub of subPatterns) {
    const inSub = rawQuestions.filter((q) => q.subPattern === sub);
    for (const diff of DIFFICULTIES) {
      const candidates = inSub.filter(
        (q) => q.difficulty === diff && !picked.some((p) => p.id === q.id),
      );
      const shuffledCandidates = seededShuffle(
        candidates,
        hashStringWithSeed(`diag:${patternId}:${sub}:${diff}`, seed),
      );
      if (shuffledCandidates[0]) {
        picked.push(shuffleQuestionOptions(shuffledCandidates[0], seed));
      }
    }
  }

  return seededShuffle(
    picked,
    hashStringWithSeed(`diag-order:${patternId}`, seed),
  );
}

export function TiuPatternPractice({
  initialPattern,
}: TiuPatternPracticeProps) {
  const [activePattern, setActivePattern] = useState<TiuPatternId>(
    initialPattern ?? DEFAULT_PATTERN,
  );
  const [selectedSubPattern, setSelectedSubPattern] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | Difficulty>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [showEvaluation, setShowEvaluation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [patternSeeds, setPatternSeeds] = useState<
    Partial<Record<TiuPatternId, number>>
  >({});
  const [questionSeeds, setQuestionSeeds] = useState<Record<string, number>>({});
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [diagnosticSession, setDiagnosticSession] =
    useState<ActiveDiagnosticSession | null>(null);
  const [diagnosticReports, setDiagnosticReports] = useState<
    Partial<Record<TiuPatternId, DiagnosticReport>>
  >({});
  const [isStorageHydrated, setIsStorageHydrated] = useState<boolean>(false);

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

          if (parsed.diagnosticReports && typeof parsed.diagnosticReports === "object") {
            setDiagnosticReports(parsed.diagnosticReports);
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
      setIsStorageHydrated(true);
    });

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const nextPattern = params.get("pattern") ?? params.get("pola");
      if (isTiuPatternId(nextPattern)) {
        setActivePattern(nextPattern);
        setSelectedSubPattern("all");
        setSelectedDifficulty("all");
        setStatusFilter("all");
        setCurrentPage(1);
        setActiveQuestionId(null);
        setDiagnosticSession(null);
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
        diagnosticReports,
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
    diagnosticReports,
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

  // Questions filtered by sub-pattern + difficulty (preserving shuffled order & options)
  const difficultyScopedQuestions = useMemo(
    () =>
      selectedDifficulty === "all"
        ? subPatternScopedQuestions
        : subPatternScopedQuestions.filter((q) => q.difficulty === selectedDifficulty),
    [subPatternScopedQuestions, selectedDifficulty],
  );

  // Final filtered questions including status filter (all / unanswered / wrong / flagged)
  const filteredQuestions = useMemo(() => {
    if (statusFilter === "all") return difficultyScopedQuestions;
    return difficultyScopedQuestions.filter((q) => {
      const ans = selectedAnswers[q.id];
      if (statusFilter === "unanswered") return ans === undefined;
      if (statusFilter === "wrong") return ans !== undefined && ans !== q.answer;
      if (statusFilter === "flagged") return Boolean(flaggedQuestions[q.id]);
      return true;
    });
  }, [difficultyScopedQuestions, statusFilter, selectedAnswers, flaggedQuestions]);

  const statusCounts = useMemo(() => {
    let unanswered = 0;
    let wrong = 0;
    let flagged = 0;
    for (const q of difficultyScopedQuestions) {
      const ans = selectedAnswers[q.id];
      if (ans === undefined) unanswered += 1;
      else if (ans !== q.answer) wrong += 1;
      if (flaggedQuestions[q.id]) flagged += 1;
    }
    return {
      all: difficultyScopedQuestions.length,
      unanswered,
      wrong,
      flagged,
    };
  }, [difficultyScopedQuestions, selectedAnswers, flaggedQuestions]);

  const subPatternCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const question of allPatternQuestions) {
      counts[question.subPattern] = (counts[question.subPattern] ?? 0) + 1;
    }
    return counts;
  }, [allPatternQuestions]);

  // Step-by-step Level Mastery stats (Mudah -> Sedang -> Sulit) for current scope
  const levelMasteryStats = useMemo(() => {
    return DIFFICULTIES.map((diff) => {
      const questionsInLevel = subPatternScopedQuestions.filter(
        (q) => q.difficulty === diff,
      );
      const answered = questionsInLevel.filter(
        (q) => selectedAnswers[q.id] !== undefined,
      );
      const correct = answered.filter(
        (q) => selectedAnswers[q.id] === q.answer,
      ).length;
      const accuracy =
        answered.length > 0 ? Math.round((correct / answered.length) * 100) : null;
      const minRequiredForMastery = Math.min(5, questionsInLevel.length);
      const isMastered =
        questionsInLevel.length > 0 &&
        answered.length >= minRequiredForMastery &&
        (accuracy ?? 0) >= MASTERY_THRESHOLD;

      return {
        difficulty: diff,
        meta: DIFFICULTY_META[diff],
        total: questionsInLevel.length,
        answered: answered.length,
        correct,
        accuracy,
        minRequiredForMastery,
        isMastered,
      };
    });
  }, [subPatternScopedQuestions, selectedAnswers]);

  const currentLevelStat = useMemo(
    () =>
      selectedDifficulty === "all"
        ? null
        : levelMasteryStats.find((item) => item.difficulty === selectedDifficulty) ??
          null,
    [levelMasteryStats, selectedDifficulty],
  );

  const nextDifficultyLevel = useMemo<Difficulty | null>(() => {
    if (selectedDifficulty === "mudah") return "sedang";
    if (selectedDifficulty === "sedang") return "sulit";
    return null;
  }, [selectedDifficulty]);

  // Sub-pattern evaluation & weakness analytics
  const subPatternEvaluations = useMemo(() => {
    return activeMeta.subPatterns.map((sub) => {
      const subQuestions = allPatternQuestions.filter((q) => q.subPattern === sub);
      const answered = subQuestions.filter((q) => selectedAnswers[q.id] !== undefined);
      const correct = answered.filter((q) => selectedAnswers[q.id] === q.answer).length;
      const accuracy =
        answered.length > 0 ? Math.round((correct / answered.length) * 100) : null;
      const recommendedDifficulty: Difficulty =
        accuracy === null ? "mudah" : recommendDifficultyFromAccuracy(accuracy);

      return {
        subPattern: sub,
        label: capitalize(sub),
        total: subQuestions.length,
        answered: answered.length,
        correct,
        accuracy,
        recommendedDifficulty,
      };
    });
  }, [activeMeta.subPatterns, allPatternQuestions, selectedAnswers]);

  const weakestSubPattern = useMemo(() => {
    const evaluated = subPatternEvaluations.filter(
      (item): item is typeof item & { accuracy: number } =>
        item.answered > 0 && item.accuracy !== null,
    );
    if (evaluated.length === 0) return null;
    return evaluated.reduce((lowest, item) =>
      item.accuracy < lowest.accuracy ? item : lowest,
    );
  }, [subPatternEvaluations]);

  const answeredInView = useMemo(
    () => difficultyScopedQuestions.filter((q) => selectedAnswers[q.id] !== undefined),
    [difficultyScopedQuestions, selectedAnswers],
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
    if (viewMode === "single" || diagnosticSession !== null) {
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
  }, [
    safePage,
    activePattern,
    selectedSubPattern,
    selectedDifficulty,
    statusFilter,
    viewMode,
    diagnosticSession,
  ]);

  const handlePatternChange = useCallback((patternId: TiuPatternId) => {
    setActivePattern(patternId);
    setSelectedSubPattern("all");
    setSelectedDifficulty("all");
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
    setDiagnosticSession(null);
    setPatternSeeds((prev) =>
      prev[patternId] ? prev : { ...prev, [patternId]: createRandomSeed() },
    );
    pendingScrollIdRef.current = null;
    syncPatternUrl(patternId);
  }, []);

  const handleSubPatternChange = useCallback((subPattern: string) => {
    setSelectedSubPattern(subPattern);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const handleDifficultyChange = useCallback((difficulty: "all" | Difficulty) => {
    setSelectedDifficulty(difficulty);
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const handleStatusFilterChange = useCallback((nextStatus: StatusFilter) => {
    setStatusFilter(nextStatus);
    setCurrentPage(1);
    setActiveQuestionId(null);
    pendingScrollIdRef.current = null;
  }, []);

  const applyAdaptiveRecommendation = useCallback(
    (subPattern: string, difficulty: Difficulty) => {
      setDiagnosticSession(null);
      setSelectedSubPattern(subPattern);
      setSelectedDifficulty(difficulty);
      setStatusFilter("all");
      setCurrentPage(1);
      setActiveQuestionId(null);
      setIsReviewMode(false);
    },
    [],
  );

  // Diagnostic Flow handlers (always generates a fresh random seed to shuffle questions & options)
  const handleStartDiagnostic = useCallback(() => {
    const newSeed = createRandomSeed();
    const questions = buildDiagnosticQuestions(
      activePattern,
      rawPatternQuestions,
      newSeed,
    );
    if (questions.length === 0) return;
    setDiagnosticSession({
      patternId: activePattern,
      seed: newSeed,
      questions,
      currentIndex: 0,
      answers: {},
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePattern, rawPatternQuestions]);

  const handleSelectDiagnosticOption = useCallback((optionKey: OptionKey) => {
    setDiagnosticSession((prev) => {
      if (!prev) return null;
      const currentQ = prev.questions[prev.currentIndex];
      if (!currentQ) return prev;
      const nextAnswers = {
        ...prev.answers,
        [currentQ.id]: optionKey,
      };
      const nextIndex =
        prev.currentIndex < prev.questions.length - 1
          ? prev.currentIndex + 1
          : prev.currentIndex;
      return {
        ...prev,
        answers: nextAnswers,
        currentIndex: nextIndex,
      };
    });
  }, []);

  const handleFinishDiagnostic = useCallback(() => {
    if (!diagnosticSession) return;
    const { patternId, seed, questions, answers } = diagnosticSession;
    const subPatterns = TIU_PATTERNS[patternId].subPatterns;

    // Lock in option seeds for the diagnostic questions so their chosen option keys stay consistent
    setQuestionSeeds((prev) => {
      const next = { ...prev };
      for (const qId of Object.keys(answers)) {
        next[qId] = seed;
      }
      return next;
    });
    setSelectedAnswers((prev) => ({
      ...prev,
      ...answers,
    }));
    // Also re-shuffle the pattern's remaining questions with a fresh seed
    setPatternSeeds((prev) => ({
      ...prev,
      [patternId]: createRandomSeed(),
    }));

    const total = questions.length;
    const correct = questions.filter((q) => answers[q.id] === q.answer).length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    const breakdown = subPatterns.map((sub) => {
      const subQs = questions.filter((q) => q.subPattern === sub);
      const subCorrect = subQs.filter((q) => answers[q.id] === q.answer).length;
      const subAcc = subQs.length > 0 ? Math.round((subCorrect / subQs.length) * 100) : 0;
      return {
        subPattern: sub,
        label: capitalize(sub),
        correct: subCorrect,
        total: subQs.length,
        accuracy: subAcc,
        recommendedDifficulty: recommendDifficultyFromAccuracy(subAcc),
      };
    });

    const weakest =
      breakdown.length > 0
        ? breakdown.reduce((min, item) =>
            item.accuracy < min.accuracy ? item : min,
          )
        : null;

    const report: DiagnosticReport = {
      correct,
      total,
      accuracy,
      recommendedSubPattern: weakest?.subPattern ?? "all",
      recommendedDifficulty:
        weakest?.recommendedDifficulty ?? recommendDifficultyFromAccuracy(accuracy),
      subPatternBreakdown: breakdown,
    };

    setDiagnosticReports((prev) => ({
      ...prev,
      [patternId]: report,
    }));
    setDiagnosticSession(null);
  }, [diagnosticSession]);

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

  // Retry wrong questions: clears wrong answers and re-shuffles question order & wrong questions' options
  const handleRetryWrongInScope = useCallback(() => {
    const wrongIds = difficultyScopedQuestions
      .filter((q) => {
        const ans = selectedAnswers[q.id];
        return ans !== undefined && ans !== q.answer;
      })
      .map((q) => q.id);

    if (wrongIds.length === 0) return;

    const wrongSet = new Set(wrongIds);
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
        delete next[id];
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
    setPatternSeeds((prev) => ({
      ...prev,
      [activePattern]: createRandomSeed(),
    }));
    setStatusFilter("all");
    setCurrentPage(1);
    setActiveQuestionId(null);
  }, [activePattern, difficultyScopedQuestions, selectedAnswers]);

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
    setDiagnosticReports((prev) => {
      const next = { ...prev };
      delete next[activePattern];
      return next;
    });
    setPatternSeeds((prev) => ({
      ...prev,
      [activePattern]: createRandomSeed(),
    }));
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
    if (diagnosticSession !== null || filteredQuestions.length === 0) return;

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
    diagnosticSession,
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

  const activeDiagnosticReport = diagnosticReports[activePattern] ?? null;

  const hasPatternProgress = useMemo(
    () =>
      Boolean(activeDiagnosticReport) ||
      allPatternQuestions.some(
        (q) => selectedAnswers[q.id] !== undefined || flaggedQuestions[q.id],
      ),
    [activeDiagnosticReport, allPatternQuestions, flaggedQuestions, selectedAnswers],
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
      <div className="order-3 min-w-0 space-y-6 lg:order-2">
        {/* Mode Sesi Tes Diagnostik Singkat */}
        {diagnosticSession ? (
          <DiagnosticSessionPanel
            session={diagnosticSession}
            patternLabel={activeMeta.label}
            onSelectOption={handleSelectDiagnosticOption}
            onJumpIndex={(idx) =>
              setDiagnosticSession((prev) =>
                prev ? { ...prev, currentIndex: idx } : null,
              )
            }
            onFinish={handleFinishDiagnostic}
            onCancel={() => setDiagnosticSession(null)}
          />
        ) : (
          <>
            {/* Adaptive Mastery Banner: Tes Diagnostik -> Rekomendasi -> Level Bertahap */}
            {allPatternQuestions.length > 0 && (
              <AdaptiveMasteryHeader
                patternLabel={activeMeta.label}
                subPatternCount={activeMeta.subPatterns.length}
                diagnosticReport={activeDiagnosticReport}
                weakestSubPattern={weakestSubPattern}
                selectedSubPattern={selectedSubPattern}
                selectedDifficulty={selectedDifficulty}
                onStartDiagnostic={handleStartDiagnostic}
                onApplyRecommendation={applyAdaptiveRecommendation}
              />
            )}

            {/* Active pattern controls, sub-pattern filter, and 3-Stage Level Progression */}
            <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/60">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Pola #{activeMeta.order} • TIU
                    </span>
                    {selectedDifficulty !== "all" && isDifficulty(selectedDifficulty) && (
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                          DIFFICULTY_META[selectedDifficulty].badgeClass,
                        )}
                      >
                        {DIFFICULTY_META[selectedDifficulty].title}
                      </span>
                    )}
                    {isStorageHydrated && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                        <CheckCircle2 className="size-3" aria-hidden />
                        Soal &amp; Opsi Diacak Otomatis
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2.5 text-2xl font-semibold text-slate-950">
                    {activeMeta.label}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {filteredQuestions.length > 0 ? (
                      viewMode === "single" ? (
                        <>
                          Mode Fokus CAT • Soal {effectiveActiveIndex + 1} dari{" "}
                          {filteredQuestions.length} soal pada filter aktif.
                        </>
                      ) : (
                        <>
                          Menampilkan soal {pageStartIndex + 1}–
                          {Math.min(pageStartIndex + PAGE_SIZE, filteredQuestions.length)} dari{" "}
                          {filteredQuestions.length} soal pada filter aktif.
                        </>
                      )
                    ) : (
                      <>Belum ada soal pada pilihan filter ini.</>
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {filteredQuestions.length > 0 && (
                    <div
                      role="group"
                      aria-label="Mode tampilan soal"
                      className="inline-flex rounded-xl border border-blue-100 bg-slate-50 p-1"
                    >
                      <button
                        type="button"
                        onClick={() => setViewMode("list")}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                          viewMode === "list"
                            ? "bg-white text-blue-700 shadow-xs"
                            : "text-slate-600 hover:text-slate-900",
                        )}
                      >
                        <Layers3 className="size-3.5" aria-hidden />
                        25 / Halaman
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("single")}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                          viewMode === "single"
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900",
                        )}
                      >
                        <ClipboardList className="size-3.5" aria-hidden />
                        1 Soal (Mode CAT)
                      </button>
                    </div>
                  )}

                  <Button
                    type="button"
                    variant={isReviewMode ? "default" : "outline"}
                    onClick={() => setIsReviewMode((prev) => !prev)}
                    className={cn(
                      "h-9 text-xs sm:text-sm",
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

                  {activeMeta.subPatterns.length > 0 && allPatternQuestions.length > 0 && (
                    <Button
                      type="button"
                      variant={showEvaluation ? "default" : "outline"}
                      onClick={() => setShowEvaluation((prev) => !prev)}
                      className={cn(
                        "h-9 text-xs sm:text-sm",
                        showEvaluation
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "border-blue-200 text-blue-700 hover:bg-blue-50",
                      )}
                    >
                      <BarChart3 className="size-4" aria-hidden />
                      Peta Sub-Pola
                    </Button>
                  )}

                  {!isReviewMode && allPatternQuestions.length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleReset}
                      className="h-9 text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-950 sm:text-sm"
                    >
                      <RotateCcw className="size-4" aria-hidden />
                      {hasPatternProgress ? "Reset & Acak Ulang" : "Acak Ulang Soal"}
                    </Button>
                  )}
                </div>
              </div>

              {/* Filter Sub-Pola */}
              {allPatternQuestions.length > 0 && activeMeta.subPatterns.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    1. Fokus Sub-Pola:
                  </span>
                  <FilterPill
                    active={selectedSubPattern === "all"}
                    label={`Semua Sub-Pola (${allPatternQuestions.length})`}
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
              )}

              {/* Jalur Level Bertahap: Mudah -> Sedang -> Sulit */}
              {allPatternQuestions.length > 0 && (
                <div className="mt-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      2. Pilih Tahap Kesulitan (Target Lulus Level ≥ {MASTERY_THRESHOLD}%):
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDifficultyChange("all")}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                        selectedDifficulty === "all"
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700",
                      )}
                    >
                      Tampilkan Semua Level ({subPatternScopedQuestions.length} soal)
                    </button>
                  </div>

                  <div className="mt-2.5 grid gap-3 sm:grid-cols-3">
                    {levelMasteryStats.map((level, idx) => {
                      const isSelected = selectedDifficulty === level.difficulty;
                      const prevLevel = idx > 0 ? levelMasteryStats[idx - 1] : null;
                      const isRecommendedNext =
                        (idx === 0 && !level.isMastered) ||
                        (prevLevel?.isMastered && !level.isMastered);

                      return (
                        <button
                          key={level.difficulty}
                          type="button"
                          onClick={() =>
                            handleDifficultyChange(
                              isSelected ? "all" : level.difficulty,
                            )
                          }
                          className={cn(
                            "flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all",
                            isSelected
                              ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/20"
                              : level.isMastered
                                ? "border-emerald-200 bg-emerald-50/30 hover:border-emerald-300"
                                : "border-slate-200 bg-white hover:border-blue-300",
                          )}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-bold text-slate-950">
                                {level.meta.title}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                {level.meta.subtitle}
                              </p>
                            </div>

                            {level.isMastered ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                <Check className="size-3" aria-hidden />
                                Lulus
                              </span>
                            ) : isRecommendedNext ? (
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                                Disarankan
                              </span>
                            ) : (
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                                {level.total} soal
                              </span>
                            )}
                          </div>

                          <div className="mt-3 flex items-baseline justify-between text-xs text-slate-600">
                            <span>
                              Benar:{" "}
                              <strong className="text-slate-900">
                                {level.correct}/{level.answered}
                              </strong>{" "}
                              ({level.total} soal)
                            </span>
                            <span
                              className={cn(
                                "font-bold",
                                level.accuracy === null
                                  ? "text-slate-400"
                                  : level.accuracy >= MASTERY_THRESHOLD
                                    ? "text-emerald-700"
                                    : level.accuracy >= 60
                                      ? "text-amber-700"
                                      : "text-rose-700",
                              )}
                            >
                              {level.accuracy !== null ? `${level.accuracy}%` : "0%"}
                            </span>
                          </div>

                          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all",
                                level.accuracy === null
                                  ? "w-0"
                                  : level.accuracy >= MASTERY_THRESHOLD
                                    ? "bg-emerald-500"
                                    : level.accuracy >= 60
                                      ? "bg-amber-500"
                                      : "bg-rose-500",
                              )}
                              style={{ width: `${level.accuracy ?? 0}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Callout Naik Level saat level aktif sudah mencapai >= 80% */}
                  {currentLevelStat?.isMastered && nextDifficultyLevel && (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-xs text-emerald-950">
                      <div className="flex items-center gap-2">
                        <Award className="size-4 shrink-0 text-emerald-600" aria-hidden />
                        <span>
                          <strong>{currentLevelStat.meta.title} Terkuasai!</strong> Akurasi Anda{" "}
                          <strong>{currentLevelStat.accuracy}%</strong> (target ≥ {MASTERY_THRESHOLD}%).
                          Siap naik ke tahap berikutnya?
                        </span>
                      </div>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => handleDifficultyChange(nextDifficultyLevel)}
                        className="h-8 bg-emerald-600 px-3 text-xs font-semibold text-white hover:bg-emerald-700"
                      >
                        Lanjut ke {DIFFICULTY_META[nextDifficultyLevel].title}
                        <ChevronRight className="size-3.5" aria-hidden />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Filter Status Jawaban & Tombol Ulangi Soal yang Salah */}
              {allPatternQuestions.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      3. Filter Status:
                    </span>
                    <FilterPill
                      active={statusFilter === "all"}
                      label={`Semua (${statusCounts.all})`}
                      onClick={() => handleStatusFilterChange("all")}
                    />
                    <FilterPill
                      active={statusFilter === "unanswered"}
                      label={`Belum Diisi (${statusCounts.unanswered})`}
                      onClick={() => handleStatusFilterChange("unanswered")}
                    />
                    <FilterPill
                      active={statusFilter === "wrong"}
                      label={`Dijawab Salah (${statusCounts.wrong})`}
                      onClick={() => handleStatusFilterChange("wrong")}
                    />
                    <FilterPill
                      active={statusFilter === "flagged"}
                      label={`Ragu-ragu (${statusCounts.flagged})`}
                      onClick={() => handleStatusFilterChange("flagged")}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {statusCounts.wrong > 0 && !isReviewMode && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleRetryWrongInScope}
                        className="h-8 border-rose-200 bg-rose-50/70 text-xs font-semibold text-rose-700 hover:bg-rose-100"
                      >
                        <RotateCcw className="size-3.5" aria-hidden />
                        Ulangi &amp; Acak {statusCounts.wrong} Soal Salah
                      </Button>
                    )}

                    {!isReviewMode && answeredInView.length > 0 && (
                      <p className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
                        Skor level ini: {correctInView} / {answeredInView.length} benar (
                        {Math.round((correctInView / answeredInView.length) * 100)}%)
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Ringkasan Evaluasi Sub-Pola (Analitik Kelemahan) */}
              {(showEvaluation || weakestSubPattern !== null) &&
                activeMeta.subPatterns.length > 0 &&
                allPatternQuestions.length > 0 && (
                  <div className="mt-5 rounded-xl border border-blue-100 bg-[#f8fbff] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                          Peta Penguasaan Sub-Pola & Rekomendasi Level
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          Klik kartu sub-pola untuk langsung melatih sub-pola pada level kesulitan yang disarankan.
                        </p>
                      </div>
                      {weakestSubPattern && (
                        <button
                          type="button"
                          onClick={() =>
                            applyAdaptiveRecommendation(
                              weakestSubPattern.subPattern,
                              weakestSubPattern.recommendedDifficulty,
                            )
                          }
                          className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900 transition hover:bg-amber-100"
                        >
                          Fokus Perbaikan: {weakestSubPattern.label} ({weakestSubPattern.accuracy}% •{" "}
                          {DIFFICULTY_META[weakestSubPattern.recommendedDifficulty].title})
                        </button>
                      )}
                    </div>

                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {subPatternEvaluations.map((item) => {
                        const isSelected = selectedSubPattern === item.subPattern;
                        const statusBadge =
                          item.accuracy === null
                            ? {
                                label: "Mulai: Level 1",
                                className: "bg-slate-100 text-slate-600",
                              }
                            : item.accuracy >= 80
                              ? {
                                  label: "Kuat • Siap Level 3",
                                  className: "bg-emerald-100 text-emerald-800",
                                }
                              : item.accuracy >= 50
                                ? {
                                    label: "Cukup • Lanjut Level 2",
                                    className: "bg-amber-100 text-amber-800",
                                  }
                                : {
                                    label: "Perlu Fokus • Level 1",
                                    className: "bg-rose-100 text-rose-800",
                                  };

                        return (
                          <button
                            key={item.subPattern}
                            type="button"
                            onClick={() =>
                              applyAdaptiveRecommendation(
                                item.subPattern,
                                item.recommendedDifficulty,
                              )
                            }
                            className={cn(
                              "flex flex-col justify-between rounded-xl border bg-white p-3 text-left transition-all",
                              isSelected
                                ? "border-blue-500 ring-2 ring-blue-500/20"
                                : "border-slate-200/90 hover:border-blue-300",
                            )}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-xs font-semibold text-slate-900">
                                {item.label}
                              </span>
                              <span
                                className={cn(
                                  "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                  statusBadge.className,
                                )}
                              >
                                {statusBadge.label}
                              </span>
                            </div>

                            <div className="mt-2.5 flex items-baseline justify-between text-xs text-slate-600">
                              <span>
                                Benar:{" "}
                                <strong className="text-slate-900">
                                  {item.correct}/{item.answered}
                                </strong>{" "}
                                (dari {item.total})
                              </span>
                              <span className="font-semibold text-slate-900">
                                {item.accuracy !== null ? `${item.accuracy}%` : "—"}
                              </span>
                            </div>

                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={cn(
                                  "h-full rounded-full transition-all",
                                  item.accuracy === null
                                    ? "w-0"
                                    : item.accuracy >= 80
                                      ? "bg-emerald-500"
                                      : item.accuracy >= 50
                                        ? "bg-amber-500"
                                        : "bg-rose-500",
                                )}
                                style={{ width: `${item.accuracy ?? 0}%` }}
                              />
                            </div>
                          </button>
                        );
                      })}
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
                  Tidak ada soal pada kombinasi filter ini.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setStatusFilter("all");
                      setSelectedDifficulty("all");
                      setSelectedSubPattern("all");
                    }}
                    className="border-blue-200 text-blue-700"
                  >
                    Reset Filter Tampilan
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

function AdaptiveMasteryHeader({
  patternLabel,
  subPatternCount,
  diagnosticReport,
  weakestSubPattern,
  selectedSubPattern,
  selectedDifficulty,
  onStartDiagnostic,
  onApplyRecommendation,
}: {
  patternLabel: string;
  subPatternCount: number;
  diagnosticReport: DiagnosticReport | null;
  weakestSubPattern: {
    subPattern: string;
    label: string;
    accuracy: number;
    recommendedDifficulty: Difficulty;
  } | null;
  selectedSubPattern: string;
  selectedDifficulty: "all" | Difficulty;
  onStartDiagnostic: () => void;
  onApplyRecommendation: (subPattern: string, difficulty: Difficulty) => void;
}) {
  const diagnosticCount = Math.max(9, subPatternCount * 3);

  const recommendedTarget = diagnosticReport
    ? {
        subPattern: diagnosticReport.recommendedSubPattern,
        label: capitalize(diagnosticReport.recommendedSubPattern),
        difficulty: diagnosticReport.recommendedDifficulty,
        reason: `Hasil Diagnostik: ${diagnosticReport.correct}/${diagnosticReport.total} benar (${diagnosticReport.accuracy}%)`,
      }
    : weakestSubPattern
      ? {
          subPattern: weakestSubPattern.subPattern,
          label: weakestSubPattern.label,
          difficulty: weakestSubPattern.recommendedDifficulty,
          reason: `Akurasi terendah saat ini: ${weakestSubPattern.accuracy}%`,
        }
      : null;

  const isRecommendationActive =
    recommendedTarget !== null &&
    selectedSubPattern === recommendedTarget.subPattern &&
    selectedDifficulty === recommendedTarget.difficulty;

  return (
    <section className="overflow-hidden rounded-2xl border border-blue-200/80 bg-[linear-gradient(135deg,#0f2454_0%,#1d4ed8_58%,#4f46e5_100%)] p-6 text-white shadow-lg shadow-blue-950/10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-blue-100 backdrop-blur-xs">
            <Award className="size-3.5" aria-hidden />
            Alur Belajar Adaptif • {patternLabel}
          </span>
          <h2 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
            {diagnosticReport
              ? `Rekomendasi Fokus: ${capitalize(diagnosticReport.recommendedSubPattern)} (${DIFFICULTY_META[diagnosticReport.recommendedDifficulty].title})`
              : "Mulai dengan Tes Diagnostik Singkat sebelum masuk ke ratusan soal"}
          </h2>
          <p className="mt-1.5 text-xs leading-6 text-blue-100 sm:text-sm">
            {diagnosticReport ? (
              <>
                {recommendedTarget?.reason}. Selesaikan latihan bertahap dari{" "}
                <strong>Level 1 (Pondasi)</strong> hingga{" "}
                <strong>Level 3 (HOTS)</strong> dengan target akurasi minimal{" "}
                <strong>{MASTERY_THRESHOLD}%</strong> per level.
              </>
            ) : (
              <>
                Kerjakan <strong>{diagnosticCount} soal acak lintas sub-pola</strong>{" "}
                (3 soal per sub-pola: Mudah, Sedang, Sulit dengan urutan &amp; opsi diacak)
                untuk memetakan kelemahan dan menentukan level awal yang paling pas.
              </>
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {recommendedTarget && (
            <Button
              type="button"
              onClick={() =>
                onApplyRecommendation(
                  recommendedTarget.subPattern,
                  recommendedTarget.difficulty,
                )
              }
              disabled={isRecommendationActive}
              className="h-10 bg-white px-4 text-xs font-semibold text-blue-900 shadow-md hover:bg-blue-50 disabled:opacity-75 sm:text-sm"
            >
              {isRecommendationActive
                ? "Fokus Rekomendasi Aktif"
                : `Latih ${recommendedTarget.label} • ${DIFFICULTY_META[recommendedTarget.difficulty].title}`}
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            onClick={onStartDiagnostic}
            className="h-10 border-white/35 bg-white/10 px-4 text-xs font-semibold text-white hover:bg-white/20 hover:text-white sm:text-sm"
          >
            {diagnosticReport
              ? "Tes Diagnostik Baru (Acak)"
              : `Mulai Tes Diagnostik (${diagnosticCount} Soal)`}
          </Button>
        </div>
      </div>

      {diagnosticReport && diagnosticReport.subPatternBreakdown.length > 0 && (
        <div className="mt-5 grid gap-2 border-t border-white/15 pt-4 sm:grid-cols-3 lg:grid-cols-5">
          {diagnosticReport.subPatternBreakdown.map((item) => (
            <button
              key={item.subPattern}
              type="button"
              onClick={() =>
                onApplyRecommendation(item.subPattern, item.recommendedDifficulty)
              }
              className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/10 p-2.5 text-left transition hover:bg-white/20"
            >
              <span className="line-clamp-1 text-xs font-semibold text-white">
                {item.label}
              </span>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-blue-100">
                <span>
                  {item.correct}/{item.total} benar ({item.accuracy}%)
                </span>
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  Lv.{DIFFICULTY_META[item.recommendedDifficulty].step}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function DiagnosticSessionPanel({
  session,
  patternLabel,
  onSelectOption,
  onJumpIndex,
  onFinish,
  onCancel,
}: {
  session: ActiveDiagnosticSession;
  patternLabel: string;
  onSelectOption: (optionKey: OptionKey) => void;
  onJumpIndex: (index: number) => void;
  onFinish: () => void;
  onCancel: () => void;
}) {
  const { questions, currentIndex, answers } = session;
  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  if (!currentQuestion) return null;

  const chosenOption = answers[currentQuestion.id];

  return (
    <section className="rounded-2xl border border-blue-200 bg-white p-6 shadow-md shadow-blue-100/60">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Tes Diagnostik Adaptif (Soal &amp; Opsi Acak) • {patternLabel}
          </span>
          <h2 className="mt-1.5 text-lg font-semibold text-slate-950">
            Soal Diagnostik {currentIndex + 1} dari {questions.length}
          </h2>
          <p className="text-xs text-slate-500">
            Jawab seluruh soal sampel tanpa bantuan kunci untuk memetakan sub-pola dan level awal Anda.
          </p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onCancel}
          className="text-xs text-slate-600 hover:text-slate-950"
        >
          Batalkan Diagnostik
        </Button>
      </div>

      {/* Nomor soal diagnostik */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {questions.map((q, idx) => {
          const isFilled = answers[q.id] !== undefined;
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onJumpIndex(idx)}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg border text-xs font-semibold transition-all",
                isFilled
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300",
                isCurrent && "ring-2 ring-amber-400 ring-offset-1",
              )}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Isi soal diagnostik */}
      <div className="mt-5 rounded-xl border border-slate-200/90 bg-[#f8fbff] p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
            Sub-pola: {capitalize(currentQuestion.subPattern)}
          </span>
          <span
            className={cn(
              "rounded-md border px-2.5 py-1 text-xs font-semibold",
              DIFFICULTY_META[currentQuestion.difficulty].badgeClass,
            )}
          >
            {DIFFICULTY_META[currentQuestion.difficulty].title}
          </span>
        </div>

        <p className="mt-4 whitespace-pre-line text-base font-medium leading-7 text-slate-950">
          {currentQuestion.prompt}
        </p>

        <div className="mt-5 grid gap-2.5">
          {currentQuestion.options.map((option) => {
            const isSelected = chosenOption === option.key;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onSelectOption(option.key)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                  isSelected
                    ? "border-blue-600 bg-blue-50 font-semibold text-blue-950 ring-1 ring-blue-600"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40",
                )}
              >
                <span className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                      isSelected
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-700",
                    )}
                  >
                    {option.key}
                  </span>
                  <span className="leading-6">{option.text}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigasi bawah diagnostik */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={currentIndex <= 0}
          onClick={() => onJumpIndex(currentIndex - 1)}
          className="h-10 border-blue-200 px-4 text-blue-700"
        >
          <ChevronLeft className="size-4" aria-hidden />
          Sebelumnya
        </Button>

        <span className="text-xs font-semibold text-slate-600">
          Terjawab: {answeredCount} / {questions.length} soal
        </span>

        <div className="flex items-center gap-2">
          {currentIndex < questions.length - 1 && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onJumpIndex(currentIndex + 1)}
              className="h-10 border-blue-200 px-4 text-blue-700"
            >
              Berikutnya
              <ChevronRight className="size-4" aria-hidden />
            </Button>
          )}

          <Button
            type="button"
            size="sm"
            disabled={answeredCount === 0}
            onClick={onFinish}
            className={cn(
              "h-10 px-5 font-semibold text-white",
              allAnswered
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-blue-600 hover:bg-blue-700",
            )}
          >
            {allAnswered
              ? "Lihat Hasil Diagnosis & Rekomendasi"
              : `Selesai Diagnostik (${answeredCount}/${questions.length})`}
          </Button>
        </div>
      </div>
    </section>
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
          <span
            className={cn(
              "rounded-md border px-2.5 py-1 text-xs font-semibold",
              DIFFICULTY_META[question.difficulty].badgeClass,
            )}
          >
            {DIFFICULTY_META[question.difficulty].title}
          </span>
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

function capitalize(value: string) {
  return value
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}
