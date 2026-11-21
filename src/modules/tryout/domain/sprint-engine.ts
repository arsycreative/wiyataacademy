import { getPatternCheatSheet } from "@/modules/question-bank/domain/pattern-cheat-sheets";
import {
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  TKP_PATTERN_IDS,
  TKP_PATTERNS,
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
  type OptionKey,
  type PracticePatternId,
  type Question,
  type QuestionSubtest,
} from "@/modules/question-bank/domain/question";
import {
  isTiuPattern,
  isTkpPattern,
  isTwkPattern,
  seededShuffle,
  shuffleQuestionWithScores,
} from "@/modules/question-bank/domain/shuffle-core";
import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import {
  SPRINT_DEFAULT_QUESTION_COUNT,
  type SprintDifficultyFilter,
  type SprintDurationMinutes,
  type SprintEvaluation,
  type SprintPaceStatus,
  type SprintQuestionResult,
  type SprintStartRequest,
  type SprintSubPatternStat,
  type SprintSubtestScope,
} from "@/modules/tryout/domain/sprint-config";
import type { TryoutQuestionItem } from "@/modules/tryout/domain/tryout-config";

function filterByDifficulty(
  questions: readonly Question[],
  filter: SprintDifficultyFilter,
): readonly Question[] {
  if (filter === "ALL") return questions;
  const hots = questions.filter((q) => q.difficulty !== "mudah");
  return hots.length >= SPRINT_DEFAULT_QUESTION_COUNT ? hots : questions;
}

function resolvePatternTargetSec(patternId: PracticePatternId): number {
  return getPatternCheatSheet(patternId).targetSecondsPerQuestion;
}

function getPatternLabelById(patternId: PracticePatternId): string {
  if (isTwkPattern(patternId)) return TWK_PATTERNS[patternId].label;
  if (isTkpPattern(patternId)) return TKP_PATTERNS[patternId].label;
  return TIU_PATTERNS[patternId].label;
}

function getSubtestLabelAndPools(subtest: QuestionSubtest) {
  if (subtest === "TWK") {
    return {
      patternIds: TWK_PATTERN_IDS,
      banks: TWK_QUESTION_BANKS as Record<string, readonly Question[]>,
      patterns: TWK_PATTERNS as Record<string, { label: string }>,
    };
  }
  if (subtest === "TKP") {
    return {
      patternIds: TKP_PATTERN_IDS,
      banks: TKP_QUESTION_BANKS as Record<string, readonly Question[]>,
      patterns: TKP_PATTERNS as Record<string, { label: string }>,
    };
  }
  return {
    patternIds: TIU_PATTERN_IDS,
    banks: TIU_QUESTION_BANKS as Record<string, readonly Question[]>,
    patterns: TIU_PATTERNS as Record<string, { label: string }>,
  };
}

function pickFromSubtest(
  subtest: QuestionSubtest,
  needed: number,
  difficultyFilter: SprintDifficultyFilter,
  seed: number,
): Question[] {
  const { patternIds, banks } = getSubtestLabelAndPools(subtest);
  const perBucketBase = Math.floor(needed / patternIds.length);
  const remainder = needed % patternIds.length;
  const bucketOrder = seededShuffle(patternIds, seed ^ 0x9e3779b9);
  const picked: Question[] = [];
  const usedIds = new Set<string>();

  bucketOrder.forEach((pid, idx) => {
    const quota = perBucketBase + (idx < remainder ? 1 : 0);
    if (quota <= 0) return;
    const pool = seededShuffle(filterByDifficulty(banks[pid], difficultyFilter), seed + idx * 97);
    for (const q of pool) {
      if (picked.filter((p) => p.pattern === pid).length >= quota) break;
      if (!usedIds.has(q.id)) {
        usedIds.add(q.id);
        picked.push(q);
      }
    }
  });

  if (picked.length < needed) {
    const fallbackPool = seededShuffle(
      filterByDifficulty(
        patternIds.flatMap((pid) => banks[pid]),
        difficultyFilter,
      ),
      seed ^ 0x517cc1b7,
    );
    for (const q of fallbackPool) {
      if (picked.length >= needed) break;
      if (!usedIds.has(q.id)) {
        usedIds.add(q.id);
        picked.push(q);
      }
    }
  }

  return picked;
}

export function normalizeSprintRequest(raw: Partial<SprintStartRequest>): {
  subtest: SprintSubtestScope;
  patternId: PracticePatternId | null;
  durationMinutes: SprintDurationMinutes;
  difficultyFilter: SprintDifficultyFilter;
  questionCount: number;
} {
  const durationMinutes: SprintDurationMinutes =
    raw.durationMinutes === 10 || raw.durationMinutes === 12 || raw.durationMinutes === 15
      ? raw.durationMinutes
      : 10;
  const difficultyFilter: SprintDifficultyFilter =
    raw.difficultyFilter === "HOTS" ? "HOTS" : "ALL";
  const questionCount = SPRINT_DEFAULT_QUESTION_COUNT;

  const candidatePattern = raw.patternId ?? null;
  if (candidatePattern) {
    if (isTwkPattern(candidatePattern)) {
      return {
        subtest: "TWK",
        patternId: candidatePattern,
        durationMinutes,
        difficultyFilter,
        questionCount,
      };
    }
    if (isTiuPattern(candidatePattern)) {
      return {
        subtest: "TIU",
        patternId: candidatePattern,
        durationMinutes,
        difficultyFilter,
        questionCount,
      };
    }
    if (isTkpPattern(candidatePattern)) {
      return {
        subtest: "TKP",
        patternId: candidatePattern,
        durationMinutes,
        difficultyFilter,
        questionCount,
      };
    }
  }

  const subtest: SprintSubtestScope =
    raw.subtest === "TWK" || raw.subtest === "TIU" || raw.subtest === "TKP"
      ? raw.subtest
      : "SKD";

  return {
    subtest,
    patternId: null,
    durationMinutes,
    difficultyFilter,
    questionCount,
  };
}

export function buildSprintPackageLabel(
  subtest: SprintSubtestScope,
  patternId: PracticePatternId | null,
  durationMinutes: SprintDurationMinutes,
  difficultyFilter: SprintDifficultyFilter,
): string {
  const hotsTag = difficultyFilter === "HOTS" ? " HOTS" : "";
  if (patternId) {
    return `Sprint ${getPatternLabelById(patternId)}${hotsTag} (${durationMinutes} Menit)`;
  }
  if (subtest === "SKD") {
    return `Sprint Campuran SKD${hotsTag} (${durationMinutes} Menit)`;
  }
  return `Sprint ${subtest}${hotsTag} (${durationMinutes} Menit)`;
}

export function generateSprintPacket(
  rawRequest: Partial<SprintStartRequest>,
  seed: number,
): {
  config: ReturnType<typeof normalizeSprintRequest>;
  packageLabel: string;
  durationSec: number;
  targetSecondsPerQuestion: number;
  items: TryoutQuestionItem[];
} {
  const config = normalizeSprintRequest(rawRequest);
  const { subtest, patternId, durationMinutes, difficultyFilter, questionCount } = config;

  let chosen: Question[] = [];
  if (patternId) {
    const { banks } = getSubtestLabelAndPools(
      isTwkPattern(patternId) ? "TWK" : isTkpPattern(patternId) ? "TKP" : "TIU",
    );
    const pool = filterByDifficulty(banks[patternId], difficultyFilter);
    chosen = seededShuffle(pool, seed).slice(0, questionCount);
  } else if (subtest === "SKD") {
    // 4 TWK + 5 TIU + 6 TKP = 15 soal proporsional terhadap komposisi CAT SKD (30/35/45)
    chosen = [
      ...pickFromSubtest("TWK", 4, difficultyFilter, seed + 11),
      ...pickFromSubtest("TIU", 5, difficultyFilter, seed + 23),
      ...pickFromSubtest("TKP", 6, difficultyFilter, seed + 37),
    ];
  } else {
    chosen = seededShuffle(pickFromSubtest(subtest, questionCount, difficultyFilter, seed), seed);
  }

  const items: TryoutQuestionItem[] = chosen.map((q, index) => {
    const shuffled = shuffleQuestionWithScores(q, seed + index * 131 + 17);
    return {
      number: index + 1,
      subtest: q.subtest,
      patternLabel: getPatternLabelById(q.pattern),
      question: shuffled,
    };
  });

  const durationSec = durationMinutes * 60;
  const targetSecondsPerQuestion = patternId
    ? resolvePatternTargetSec(patternId)
    : Math.round(durationSec / Math.max(1, items.length));

  return {
    config,
    packageLabel: buildSprintPackageLabel(subtest, patternId, durationMinutes, difficultyFilter),
    durationSec,
    targetSecondsPerQuestion,
    items,
  };
}

export function evaluateSprintAttempt(params: {
  packageLabel: string;
  subtest: SprintSubtestScope;
  patternId: PracticePatternId | null;
  difficultyFilter: SprintDifficultyFilter;
  items: readonly TryoutQuestionItem[];
  answers: Readonly<Record<string, OptionKey>>;
  durationUsedSec: number;
  durationLimitSec: number;
  targetSecondsPerQuestion: number;
  questionTimesSec?: Readonly<Record<string, number>>;
}): SprintEvaluation {
  const {
    packageLabel,
    subtest,
    patternId,
    difficultyFilter,
    items,
    answers,
    durationUsedSec,
    durationLimitSec,
    targetSecondsPerQuestion,
    questionTimesSec = {},
  } = params;

  let answeredCount = 0;
  let correctCount = 0;
  let totalScore = 0;
  const maxScore = items.length * 5;
  const questionResults: SprintQuestionResult[] = [];
  const subPatternMap = new Map<
    string,
    {
      total: number;
      answered: number;
      correctCount: number;
      earnedPoints: number;
      maxPoints: number;
      totalSpentSec: number;
    }
  >();

  for (const item of items) {
    const q = item.question;
    const selected = answers[q.id];
    const isUnanswered = selected === undefined;
    const rawSpent = questionTimesSec[q.id];
    const spentSec =
      typeof rawSpent === "number" && Number.isFinite(rawSpent) && rawSpent >= 0
        ? Math.round(rawSpent)
        : 0;
    const questionTarget = resolvePatternTargetSec(q.pattern);

    let earnedPoints = 0;
    let isOptimal = false;
    if (!isUnanswered) {
      answeredCount += 1;
      if (q.subtest === "TKP" && q.optionScores) {
        earnedPoints = q.optionScores[selected] ?? 0;
        isOptimal = earnedPoints === 5;
      } else {
        isOptimal = selected === q.answer;
        earnedPoints = isOptimal ? 5 : 0;
      }
      if (isOptimal) {
        correctCount += 1;
      }
      totalScore += earnedPoints;
    }

    const isSlow = spentSec > Math.round(questionTarget * 1.25);

    questionResults.push({
      number: item.number,
      questionId: q.id,
      subtest: q.subtest,
      pattern: q.pattern,
      subPattern: q.subPattern,
      difficulty: q.difficulty,
      selectedAnswer: selected,
      correctAnswer: q.answer,
      earnedPoints,
      maxPoints: 5,
      isOptimal,
      isUnanswered,
      spentSec,
      targetSec: questionTarget,
      isSlow,
    });

    const bucket = subPatternMap.get(q.subPattern) ?? {
      total: 0,
      answered: 0,
      correctCount: 0,
      earnedPoints: 0,
      maxPoints: 0,
      totalSpentSec: 0,
    };
    bucket.total += 1;
    if (!isUnanswered) bucket.answered += 1;
    if (isOptimal) bucket.correctCount += 1;
    bucket.earnedPoints += earnedPoints;
    bucket.maxPoints += 5;
    bucket.totalSpentSec += spentSec;
    subPatternMap.set(q.subPattern, bucket);
  }

  const clampedUsed = Math.max(0, Math.min(durationLimitSec, Math.round(durationUsedSec)));
  const avgSecondsPerAnswered =
    answeredCount > 0 ? Math.round(clampedUsed / answeredCount) : 0;

  let paceStatus: SprintPaceStatus = "on_track";
  if (answeredCount === 0 || avgSecondsPerAnswered > targetSecondsPerQuestion * 1.15) {
    paceStatus = "slow";
  } else if (avgSecondsPerAnswered <= targetSecondsPerQuestion * 0.85) {
    paceStatus = "fast";
  }

  const slowestQuestions = [...questionResults]
    .filter((r) => r.spentSec > 0 || !r.isUnanswered)
    .sort((a, b) => b.spentSec - a.spentSec)
    .slice(0, 3)
    .map((r) => {
      const item = items.find((i) => i.question.id === r.questionId);
      return {
        number: r.number,
        questionId: r.questionId,
        subtest: r.subtest,
        patternLabel: item?.patternLabel ?? r.pattern,
        spentSec: r.spentSec,
        targetSec: r.targetSec,
        isOptimal: r.isOptimal,
      };
    });

  const subPatternBreakdown: SprintSubPatternStat[] = Array.from(subPatternMap.entries())
    .map(([subPattern, stats]) => ({
      subPattern,
      total: stats.total,
      answered: stats.answered,
      correctCount: stats.correctCount,
      earnedPoints: stats.earnedPoints,
      maxPoints: stats.maxPoints,
      avgSpentSec: stats.total > 0 ? Math.round(stats.totalSpentSec / stats.total) : 0,
    }))
    .sort((a, b) => {
      const pctA = a.maxPoints > 0 ? a.earnedPoints / a.maxPoints : 0;
      const pctB = b.maxPoints > 0 ? b.earnedPoints / b.maxPoints : 0;
      return pctA - pctB;
    });

  return {
    packageLabel,
    subtest,
    patternId,
    difficultyFilter,
    totalQuestions: items.length,
    answeredCount,
    unansweredCount: Math.max(0, items.length - answeredCount),
    correctCount,
    totalScore,
    maxScore,
    accuracyPct: items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0,
    durationUsedSec: clampedUsed,
    durationLimitSec,
    avgSecondsPerAnswered,
    targetSecondsPerQuestion,
    paceStatus,
    slowestQuestions,
    subPatternBreakdown,
    questionResults,
  };
}
