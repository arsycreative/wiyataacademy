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
} from "@/modules/question-bank/domain/question-shuffle";
import { shuffleQuestionWithScores } from "@/modules/question-bank/domain/subtest-summary";
import { APP_ROUTES } from "@/shared/constants/app";

export type TryoutMode = "official" | "mini";

export type TryoutSubtestConfig = {
  subtest: QuestionSubtest;
  label: string;
  questionCount: number;
  maxScore: number;
  passingGrade: number;
};

export type TryoutModeConfig = {
  mode: TryoutMode;
  label: string;
  shortLabel: string;
  description: string;
  totalQuestions: number;
  durationSec: number;
  maxScore: number;
  subtests: Record<QuestionSubtest, TryoutSubtestConfig>;
};

export type TryoutPreset = {
  id: string;
  mode: TryoutMode;
  title: string;
  subtitle: string;
  badge: string;
  fixedSeed?: number;
};

export type TryoutQuestionItem = {
  number: number;
  subtest: QuestionSubtest;
  patternLabel: string;
  question: Question;
};

export type SubtestEvaluation = {
  subtest: QuestionSubtest;
  label: string;
  questionCount: number;
  answeredCount: number;
  unansweredCount: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  maxScore: number;
  passingGrade: number;
  passed: boolean;
  gapToPassing: number;
  tkpDistribution?: Record<1 | 2 | 3 | 4 | 5, number>;
};

export type TryoutPatternAnalysis = {
  subtest: QuestionSubtest;
  patternId: PracticePatternId;
  patternLabel: string;
  total: number;
  answered: number;
  correct: number;
  earnedPoints: number;
  maxPoints: number;
  accuracyPct: number;
  practiceHref: string;
};

export type TryoutQuestionResult = {
  number: number;
  questionId: string;
  subtest: QuestionSubtest;
  selectedAnswer: OptionKey | undefined;
  correctAnswer: OptionKey;
  earnedPoints: number;
  maxPoints: number;
  isOptimal: boolean;
  isUnanswered: boolean;
};

export type TryoutEvaluation = {
  mode: TryoutMode;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  totalScore: number;
  maxScore: number;
  passed: boolean;
  failedSubtests: QuestionSubtest[];
  durationUsedSec: number;
  avgSecondsPerAnswered: number;
  subtests: Record<QuestionSubtest, SubtestEvaluation>;
  patternBreakdown: TryoutPatternAnalysis[];
  weakestPatterns: TryoutPatternAnalysis[];
  questionResults: TryoutQuestionResult[];
};

export const TRYOUT_SUBTEST_ORDER: readonly QuestionSubtest[] = ["TWK", "TIU", "TKP"];

/**
 * Konfigurasi standar CAT SKD CPNS resmi (KepmenPANRB Formasi Umum: 110 soal, 100 menit,
 * passing grade TWK 65 / TIU 80 / TKP 166) serta mode Mini Tryout 35 soal / 30 menit.
 */
export const TRYOUT_MODE_CONFIGS: Record<TryoutMode, TryoutModeConfig> = {
  official: {
    mode: "official",
    label: "Simulasi Resmi CAT SKD (110 Soal)",
    shortLabel: "CAT Resmi 110 Soal",
    description:
      "Standar ujian SKD CPNS BKN: 30 TWK, 35 TIU, dan 45 TKP dalam 100 menit dengan ambang batas resmi Formasi Umum.",
    totalQuestions: 110,
    durationSec: 100 * 60,
    maxScore: 550,
    subtests: {
      TWK: {
        subtest: "TWK",
        label: "Tes Wawasan Kebangsaan",
        questionCount: 30,
        maxScore: 150,
        passingGrade: 65,
      },
      TIU: {
        subtest: "TIU",
        label: "Tes Intelegensia Umum",
        questionCount: 35,
        maxScore: 175,
        passingGrade: 80,
      },
      TKP: {
        subtest: "TKP",
        label: "Tes Karakteristik Pribadi",
        questionCount: 45,
        maxScore: 225,
        passingGrade: 166,
      },
    },
  },
  mini: {
    mode: "mini",
    label: "Mini Tryout CAT Cepat (35 Soal)",
    shortLabel: "Mini CAT 35 Soal",
    description:
      "Simulasi ringkas 10 TWK, 11 TIU, dan 14 TKP dalam 30 menit untuk menguji ritme CAT tanpa duduk penuh 100 menit.",
    totalQuestions: 35,
    durationSec: 30 * 60,
    maxScore: 175,
    subtests: {
      TWK: {
        subtest: "TWK",
        label: "Tes Wawasan Kebangsaan",
        questionCount: 10,
        maxScore: 50,
        passingGrade: 25,
      },
      TIU: {
        subtest: "TIU",
        label: "Tes Intelegensia Umum",
        questionCount: 11,
        maxScore: 55,
        passingGrade: 25,
      },
      TKP: {
        subtest: "TKP",
        label: "Tes Karakteristik Pribadi",
        questionCount: 14,
        maxScore: 70,
        passingGrade: 52,
      },
    },
  },
};

export const TRYOUT_PRESETS: readonly TryoutPreset[] = [
  {
    id: "paket-resmi-1",
    mode: "official",
    title: "Paket Tryout Resmi 01",
    subtitle: "110 soal terstratifikasi seluruh pilar TWK, pola TIU & aspek TKP • 100 menit",
    badge: "Standar BKN",
    fixedSeed: 20261101,
  },
  {
    id: "paket-resmi-2",
    mode: "official",
    title: "Paket Tryout Resmi 02",
    subtitle: "110 soal variasi paket kedua dengan distribusi penuh • 100 menit",
    badge: "Standar BKN",
    fixedSeed: 20261102,
  },
  {
    id: "paket-resmi-3",
    mode: "official",
    title: "Paket Tryout Resmi 03",
    subtitle: "110 soal variasi paket ketiga untuk tolok ukur peningkatan • 100 menit",
    badge: "Standar BKN",
    fixedSeed: 20261103,
  },
  {
    id: "paket-acak-resmi",
    mode: "official",
    title: "Paket Acak Dinamis (110 Soal)",
    subtitle: "Menarik 110 soal acak baru dari 2.100 bank soal setiap kali memulai • 100 menit",
    badge: "Acak Baru",
  },
  {
    id: "mini-cat-cepat",
    mode: "mini",
    title: "Mini Tryout CAT Cepat (35 Soal)",
    subtitle: "10 TWK + 11 TIU + 14 TKP dengan timer 30 menit & passing grade proporsional",
    badge: "Uji Cepat",
  },
];

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

  // Acak urutan soal di dalam subtes agar pola/pilar tercampur seperti CAT BKN
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

export function buildPatternPracticeHref(
  subtest: QuestionSubtest,
  patternId: string,
): string {
  if (subtest === "TWK") return APP_ROUTES.twkPatternPractice(patternId);
  if (subtest === "TKP") return APP_ROUTES.tkpPatternPractice(patternId);
  return APP_ROUTES.tiuPatternPractice(patternId);
}

/**
 * Menghasilkan paket soal CAT SKD terstratifikasi secara deterministik dari `(mode, seed)`.
 * Urutan mengikuti standar CAT BKN: TWK → TIU → TKP, dengan opsi A–E diacak konsisten.
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

export function formatDurationClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  return [hours, minutes, seconds].map((n) => String(n).padStart(2, "0")).join(":");
}

export function formatDurationVerbose(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours} jam`);
  if (minutes > 0) parts.push(`${minutes} menit`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds} detik`);
  return parts.join(" ");
}
