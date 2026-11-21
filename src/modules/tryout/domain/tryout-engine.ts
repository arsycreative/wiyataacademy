import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
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
  hashStringWithSeed,
  seededShuffle,
  shuffleQuestionWithScores,
} from "@/modules/question-bank/domain/shuffle-core";
import {
  buildPatternPracticeHref,
  formatDurationClock,
  formatDurationVerbose,
  isTryoutMode,
  TRYOUT_MODE_CONFIGS,
  TRYOUT_PRESETS,
  TRYOUT_SUBTEST_ORDER,
  type PublicTryoutQuestion,
  type SubtestEvaluation,
  type TryoutEvaluation,
  type TryoutExamQuestion,
  type TryoutMode,
  type TryoutModeConfig,
  type TryoutPatternAnalysis,
  type TryoutPreset,
  type TryoutQuestionItem,
  type TryoutQuestionResult,
  type TryoutSubtestConfig,
} from "./tryout-config";

export {
  buildPatternPracticeHref,
  formatDurationClock,
  formatDurationVerbose,
  isTryoutMode,
  TRYOUT_MODE_CONFIGS,
  TRYOUT_PRESETS,
  TRYOUT_SUBTEST_ORDER,
};
export type {
  PublicTryoutQuestion,
  SubtestEvaluation,
  TryoutEvaluation,
  TryoutExamQuestion,
  TryoutMode,
  TryoutModeConfig,
  TryoutPatternAnalysis,
  TryoutPreset,
  TryoutQuestionItem,
  TryoutQuestionResult,
  TryoutSubtestConfig,
};

function computeStratifiedQuotas(
  bucketCount: number,
  totalNeeded: number,
  seed: number,
): number[] {
  const base = Math.floor(totalNeeded / bucketCount);
  const remainder = totalNeeded % bucketCount;
  const quotas = Array.from({ length: bucketCount }, () => base);
  if (remainder > 0) {
    const indices = seededShuffle(
      Array.from({ length: bucketCount }, (_, i) => i),
      hashStringWithSeed("quota", seed),
    );
    for (let i = 0; i < remainder; i += 1) {
      quotas[indices[i]] += 1;
    }
  }
  return quotas;
}

function selectStratifiedQuestions<TId extends PracticePatternId>(
  patternIds: readonly TId[],
  banks: Record<TId, readonly Question[]>,
  totalNeeded: number,
  seed: number,
  salt: string,
): Question[] {
  const subtestSeed = hashStringWithSeed(`tryout:${salt}`, seed);
  const quotas = computeStratifiedQuotas(patternIds.length, totalNeeded, subtestSeed);
  const picked: Question[] = [];

  patternIds.forEach((patternId, idx) => {
    const quota = quotas[idx];
    const bank = banks[patternId];
    const shuffled = seededShuffle(
      bank,
      hashStringWithSeed(`pick:${salt}:${patternId}`, subtestSeed),
    );
    picked.push(...shuffled.slice(0, quota));
  });

  return seededShuffle(picked, hashStringWithSeed(`order:${salt}`, subtestSeed));
}

export function getPatternLabel(subtest: QuestionSubtest, patternId: string): string {
  if (subtest === "TWK") {
    return TWK_PATTERNS[patternId as keyof typeof TWK_PATTERNS]?.label ?? patternId;
  }
  if (subtest === "TKP") {
    return TKP_PATTERNS[patternId as keyof typeof TKP_PATTERNS]?.label ?? patternId;
  }
  return TIU_PATTERNS[patternId as keyof typeof TIU_PATTERNS]?.label ?? patternId;
}

/**
 * Menghasilkan paket soal CAT SKD terstratifikasi secara deterministik dari `(mode, seed)`.
 * Dipanggil di server agar kunci jawaban & bank soal penuh tidak bocor ke client bundle.
 */
export function generateTryoutQuestions(
  mode: TryoutMode,
  seed: number,
): TryoutQuestionItem[] {
  const normalizedSeed = (Number.isFinite(seed) && seed > 0 ? seed >>> 0 : 1) || 1;
  const config = TRYOUT_MODE_CONFIGS[mode];

  const twkRaw = selectStratifiedQuestions(
    TWK_PATTERN_IDS,
    TWK_QUESTION_BANKS,
    config.subtests.TWK.questionCount,
    normalizedSeed,
    "TWK",
  );
  const tiuRaw = selectStratifiedQuestions(
    TIU_PATTERN_IDS,
    TIU_QUESTION_BANKS,
    config.subtests.TIU.questionCount,
    normalizedSeed,
    "TIU",
  );
  const tkpRaw = selectStratifiedQuestions(
    TKP_PATTERN_IDS,
    TKP_QUESTION_BANKS,
    config.subtests.TKP.questionCount,
    normalizedSeed,
    "TKP",
  );

  const combined: Question[] = [...twkRaw, ...tiuRaw, ...tkpRaw];

  return combined.map((rawQuestion, idx) => {
    const optSeed = hashStringWithSeed(`tryout-opt:${rawQuestion.id}`, normalizedSeed);
    const shuffledQuestion = shuffleQuestionWithScores(rawQuestion, optSeed);
    return {
      number: idx + 1,
      subtest: shuffledQuestion.subtest,
      patternLabel: getPatternLabel(shuffledQuestion.subtest, shuffledQuestion.pattern),
      question: shuffledQuestion,
    };
  });
}

/**
 * Membuang `answer`, `optionScores`, `explanation`, dan `tip` sebelum mengirim soal
 * ke browser saat sesi CAT aktif berlangsung.
 */
export function stripTryoutAnswersForExam(
  items: readonly TryoutQuestionItem[],
): TryoutExamQuestion[] {
  return items.map((item) => ({
    number: item.number,
    subtest: item.subtest,
    patternLabel: item.patternLabel,
    question: {
      id: item.question.id,
      subtest: item.question.subtest,
      pattern: item.question.pattern,
      subPattern: item.question.subPattern,
      difficulty: item.question.difficulty,
      prompt: item.question.prompt,
      options: item.question.options,
    },
  }));
}

/**
 * Menghitung skor resmi SKD BKN (TWK +5/0, TIU +5/0, TKP 1–5/0), status ambang batas per subtes,
 * serta analisis kelemahan per pola/pilar/aspek.
 */
export function evaluateTryoutAttempt(
  items: readonly TryoutQuestionItem[],
  mode: TryoutMode,
  answers: Readonly<Record<string, OptionKey>>,
  durationUsedSec: number,
): TryoutEvaluation {
  const config = TRYOUT_MODE_CONFIGS[mode];

  const subtestAcc: Record<
    QuestionSubtest,
    {
      answered: number;
      correct: number;
      wrong: number;
      score: number;
      tkpDist: Record<1 | 2 | 3 | 4 | 5, number>;
    }
  > = {
    TWK: { answered: 0, correct: 0, wrong: 0, score: 0, tkpDist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } },
    TIU: { answered: 0, correct: 0, wrong: 0, score: 0, tkpDist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } },
    TKP: { answered: 0, correct: 0, wrong: 0, score: 0, tkpDist: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } },
  };

  const patternAcc = new Map<
    string,
    {
      subtest: QuestionSubtest;
      patternId: PracticePatternId;
      patternLabel: string;
      total: number;
      answered: number;
      correct: number;
      earnedPoints: number;
      maxPoints: number;
    }
  >();

  const questionResults: TryoutQuestionResult[] = [];

  for (const item of items) {
    const q = item.question;
    const selected = answers[q.id];
    const isUnanswered = selected === undefined;
    let earnedPoints = 0;
    let isOptimal = false;

    if (!isUnanswered) {
      subtestAcc[item.subtest].answered += 1;
      if (item.subtest === "TKP" && q.optionScores) {
        const rawPts = q.optionScores[selected] ?? 1;
        const pts = Math.max(1, Math.min(5, Math.round(rawPts))) as 1 | 2 | 3 | 4 | 5;
        earnedPoints = pts;
        subtestAcc.TKP.tkpDist[pts] += 1;
        if (pts === 5) {
          isOptimal = true;
          subtestAcc.TKP.correct += 1;
        } else {
          subtestAcc.TKP.wrong += 1;
        }
      } else if (selected === q.answer) {
        earnedPoints = 5;
        isOptimal = true;
        subtestAcc[item.subtest].correct += 1;
      } else {
        earnedPoints = 0;
        subtestAcc[item.subtest].wrong += 1;
      }
      subtestAcc[item.subtest].score += earnedPoints;
    }

    const pKey = `${item.subtest}:${q.pattern}`;
    const existingPattern = patternAcc.get(pKey) ?? {
      subtest: item.subtest,
      patternId: q.pattern,
      patternLabel: item.patternLabel,
      total: 0,
      answered: 0,
      correct: 0,
      earnedPoints: 0,
      maxPoints: 0,
    };
    existingPattern.total += 1;
    existingPattern.maxPoints += 5;
    if (!isUnanswered) existingPattern.answered += 1;
    if (isOptimal) existingPattern.correct += 1;
    existingPattern.earnedPoints += earnedPoints;
    patternAcc.set(pKey, existingPattern);

    questionResults.push({
      number: item.number,
      questionId: q.id,
      subtest: item.subtest,
      selectedAnswer: selected,
      correctAnswer: q.answer,
      earnedPoints,
      maxPoints: 5,
      isOptimal,
      isUnanswered,
    });
  }

  const subtests = {} as Record<QuestionSubtest, SubtestEvaluation>;
  const failedSubtests: QuestionSubtest[] = [];
  let totalScore = 0;
  let answeredCount = 0;

  for (const subtest of TRYOUT_SUBTEST_ORDER) {
    const cfg = config.subtests[subtest];
    const acc = subtestAcc[subtest];
    const passed = acc.score >= cfg.passingGrade;
    if (!passed) failedSubtests.push(subtest);

    totalScore += acc.score;
    answeredCount += acc.answered;

    subtests[subtest] = {
      subtest,
      label: cfg.label,
      questionCount: cfg.questionCount,
      answeredCount: acc.answered,
      unansweredCount: cfg.questionCount - acc.answered,
      correctCount: acc.correct,
      wrongCount: acc.wrong,
      score: acc.score,
      maxScore: cfg.maxScore,
      passingGrade: cfg.passingGrade,
      passed,
      gapToPassing: acc.score - cfg.passingGrade,
      ...(subtest === "TKP" ? { tkpDistribution: acc.tkpDist } : {}),
    };
  }

  const patternBreakdown: TryoutPatternAnalysis[] = Array.from(patternAcc.values())
    .map((entry) => ({
      ...entry,
      accuracyPct:
        entry.maxPoints > 0 ? Math.round((entry.earnedPoints / entry.maxPoints) * 100) : 0,
      practiceHref: buildPatternPracticeHref(entry.subtest, entry.patternId),
    }))
    .sort((a, b) => {
      const subOrder =
        TRYOUT_SUBTEST_ORDER.indexOf(a.subtest) - TRYOUT_SUBTEST_ORDER.indexOf(b.subtest);
      if (subOrder !== 0) return subOrder;
      return a.patternLabel.localeCompare(b.patternLabel, "id");
    });

  const weakestPatterns = [...patternBreakdown]
    .sort((a, b) => a.accuracyPct - b.accuracyPct || a.earnedPoints - b.earnedPoints)
    .slice(0, 4);

  const safeUsedSec = Math.max(0, Math.min(config.durationSec, Math.round(durationUsedSec)));

  return {
    mode,
    totalQuestions: items.length,
    answeredCount,
    unansweredCount: items.length - answeredCount,
    totalScore,
    maxScore: config.maxScore,
    passed: failedSubtests.length === 0,
    failedSubtests,
    durationUsedSec: safeUsedSec,
    avgSecondsPerAnswered: answeredCount > 0 ? Math.round(safeUsedSec / answeredCount) : 0,
    subtests,
    patternBreakdown,
    weakestPatterns,
    questionResults,
  };
}
