import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import {
  TIU_PATTERNS,
  TKP_PATTERNS,
  TWK_PATTERNS,
  type OptionKey,
  type PracticePatternId,
  type Question,
  type QuestionSubtest,
  type TiuPatternId,
  type TkpPatternId,
  type TwkPatternId,
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

/**
 * Blueprint berbobot FR SKD CPNS BKN terbaru untuk subtes TIU:
 * memprioritaskan Silogisme & Penalaran Induktif, Analitis (Urutan/Duduk/Tabel),
 * Hitung Cepat (Pecahan & Perkalian/Pembagian Setara), Perbandingan Kuantitatif
 * (Kecukupan Data & Optimasi Biaya), Deret Angka (Suku ke-N & Matriks), dan Figural.
 * Pola Sinonim/Antonim tetap tersedia di Bank Soal sebagai latihan kosakata (kuota 0 di CAT resmi).
 */
export const TRYOUT_TIU_BLUEPRINT_QUOTAS: Readonly<
  Record<TryoutMode, Readonly<Record<TiuPatternId, number>>>
> = {
  official: {
    "sinonim-antonim-akronim": 0,
    "analogi-kata": 3,
    silogisme: 6,
    "hitung-cepat": 5,
    "perbandingan-kuantitatif": 6,
    "penalaran-analitis-melingkar": 5,
    "deret-angka": 4,
    "analisis-tabel": 2,
    figural: 4,
  },
  mini: {
    "sinonim-antonim-akronim": 0,
    "analogi-kata": 1,
    silogisme: 2,
    "hitung-cepat": 1,
    "perbandingan-kuantitatif": 2,
    "penalaran-analitis-melingkar": 2,
    "deret-angka": 1,
    "analisis-tabel": 1,
    figural: 1,
  },
};

export const TRYOUT_ACTIVE_TIU_PATTERNS: readonly TiuPatternId[] = (
  Object.keys(TRYOUT_TIU_BLUEPRINT_QUOTAS.official) as TiuPatternId[]
).filter((patternId) => TRYOUT_TIU_BLUEPRINT_QUOTAS.official[patternId] > 0);

/**
 * Memilih `quota` soal dari satu bank pola dengan stratifikasi sub-pola secara deterministik,
 * agar sub-pola FR terbaru (Penalaran Induktif, Kecukupan Data, Optimasi Biaya, Urutan/Tabel,
 * Suku ke-N, Deret Matriks) terwakili seimbang dan tidak tenggelam oleh jumlah soal sub-pola lama.
 */
function pickSubPatternStratified(
  bank: readonly Question[],
  quota: number,
  seed: number,
  prioritySubPatterns: readonly string[] = [],
): Question[] {
  if (quota <= 0 || bank.length === 0) return [];

  const grouped = new Map<string, Question[]>();
  for (const question of bank) {
    const bucket = grouped.get(question.subPattern);
    if (bucket) {
      bucket.push(question);
    } else {
      grouped.set(question.subPattern, [question]);
    }
  }

  const allSubPatterns = Array.from(grouped.keys());
  const prioritySet = new Set(prioritySubPatterns);
  const prioritized = seededShuffle(
    allSubPatterns.filter((sp) => prioritySet.has(sp)),
    hashStringWithSeed("sub-priority", seed),
  );
  const remaining = seededShuffle(
    allSubPatterns.filter((sp) => !prioritySet.has(sp)),
    hashStringWithSeed("sub-rest", seed),
  );
  const orderedSubPatterns = [...prioritized, ...remaining];

  const shuffledBuckets = new Map<string, Question[]>();
  for (const sp of orderedSubPatterns) {
    shuffledBuckets.set(
      sp,
      seededShuffle(grouped.get(sp) ?? [], hashStringWithSeed(`sp:${sp}`, seed)),
    );
  }

  const picked: Question[] = [];
  let round = 0;
  while (picked.length < quota) {
    let addedInRound = false;
    for (const sp of orderedSubPatterns) {
      if (picked.length >= quota) break;
      const bucket = shuffledBuckets.get(sp);
      if (bucket && round < bucket.length) {
        picked.push(bucket[round]);
        addedInRound = true;
      }
    }
    if (!addedInRound) break;
    round += 1;
  }

  return picked;
}

const TIU_FR_PRIORITY_SUBPATTERNS: Partial<Record<TiuPatternId, readonly string[]>> = {
  silogisme: ["penalaran-induktif"],
  "hitung-cepat": ["operasi-pecahan", "perkalian-dan-pembagian-setara"],
  "perbandingan-kuantitatif": ["kecukupan-data", "optimasi-biaya"],
  "penalaran-analitis-melingkar": [
    "urutan-dan-jadwal",
    "duduk-berderet",
    "analitis-tabel-logika",
  ],
  "deret-angka": ["deret-suku-ke-n", "deret-matriks-tabel"],
};

/**
 * Blueprint berbobot FR SKD CPNS BKN terbaru untuk subtes TWK (30 soal resmi / 10 mini):
 * memprioritaskan penalaran studi kasus Nasionalisme, Pilar Negara, Integritas, dan Bela Negara
 * serta penalaran wacana Bahasa Indonesia.
 */
export const TRYOUT_TWK_BLUEPRINT_QUOTAS: Readonly<
  Record<TryoutMode, Readonly<Record<TwkPatternId, number>>>
> = {
  official: {
    nasionalisme: 7,
    integritas: 6,
    "bela-negara": 6,
    "pilar-negara": 7,
    "bahasa-indonesia": 4,
  },
  mini: {
    nasionalisme: 2,
    integritas: 2,
    "bela-negara": 2,
    "pilar-negara": 2,
    "bahasa-indonesia": 2,
  },
};

/**
 * Blueprint berbobot FR SKD CPNS BKN terbaru untuk subtes TKP (45 soal resmi / 14 mini)
 * dengan stratifikasi sub-aspek dilema Skor 5 vs 4 di seluruh 6 aspek.
 */
export const TRYOUT_TKP_BLUEPRINT_QUOTAS: Readonly<
  Record<TryoutMode, Readonly<Record<TkpPatternId, number>>>
> = {
  official: {
    "pelayanan-publik": 8,
    "jejaring-kerja": 8,
    "sosial-budaya": 7,
    tik: 7,
    profesionalisme: 8,
    "anti-radikalisme": 7,
  },
  mini: {
    "pelayanan-publik": 3,
    "jejaring-kerja": 2,
    "sosial-budaya": 2,
    tik: 2,
    profesionalisme: 3,
    "anti-radikalisme": 2,
  },
};

const TWK_FR_PRIORITY_SUBPATTERNS: Partial<Record<TwkPatternId, readonly string[]>> = {
  nasionalisme: ["penalaran-kasus-nasionalisme-aktual"],
  integritas: ["penalaran-dilema-integritas-digital"],
  "bela-negara": ["penalaran-bela-negara-kontemporer"],
  "pilar-negara": ["penalaran-konstitusi-dan-lintas-pilar"],
  "bahasa-indonesia": [
    "penalaran-wacana-dan-kalimat-sumbang",
    "ide-pokok-paragraf-dan-penalaran-wacana",
  ],
};

const TKP_FR_PRIORITY_SUBPATTERNS: Partial<Record<TkpPatternId, readonly string[]>> = {
  "pelayanan-publik": ["dilema-layanan-krisis-dan-viral"],
  "jejaring-kerja": ["dilema-kolaborasi-hybrid-dan-lintas-generasi"],
  "sosial-budaya": ["dilema-inklusi-dan-sensitivitas-budaya"],
  tik: ["dilema-etika-ai-dan-data-sensitif"],
  profesionalisme: ["dilema-integritas-kinerja-dan-tekanan-atasan"],
  "anti-radikalisme": ["dilema-moderasi-ruang-digital-dan-komunitas"],
};

function selectWeightedSubtestQuestions<TId extends PracticePatternId>(
  quotas: Readonly<Record<TId, number>>,
  banks: Readonly<Record<TId, readonly Question[]>>,
  prioritySubPatterns: Partial<Record<TId, readonly string[]>>,
  seed: number,
  salt: string,
): Question[] {
  const subtestSeed = hashStringWithSeed(`tryout:${salt}`, seed);
  const picked: Question[] = [];

  for (const patternId of Object.keys(quotas) as TId[]) {
    const quota = quotas[patternId];
    if (quota <= 0) continue;
    const bank = banks[patternId];
    const patternSeed = hashStringWithSeed(`pick:${salt}:${patternId}`, subtestSeed);
    picked.push(
      ...pickSubPatternStratified(
        bank,
        quota,
        patternSeed,
        prioritySubPatterns[patternId] ?? [],
      ),
    );
  }

  return seededShuffle(picked, hashStringWithSeed(`order:${salt}`, subtestSeed));
}

function selectWeightedTiuQuestions(mode: TryoutMode, seed: number): Question[] {
  return selectWeightedSubtestQuestions(
    TRYOUT_TIU_BLUEPRINT_QUOTAS[mode],
    TIU_QUESTION_BANKS,
    TIU_FR_PRIORITY_SUBPATTERNS,
    seed,
    "TIU",
  );
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

  const twkRaw = selectWeightedSubtestQuestions(
    TRYOUT_TWK_BLUEPRINT_QUOTAS[mode],
    TWK_QUESTION_BANKS,
    TWK_FR_PRIORITY_SUBPATTERNS,
    normalizedSeed,
    "TWK",
  );
  const tiuRaw = selectWeightedTiuQuestions(mode, normalizedSeed);
  const tkpRaw = selectWeightedSubtestQuestions(
    TRYOUT_TKP_BLUEPRINT_QUOTAS[mode],
    TKP_QUESTION_BANKS,
    TKP_FR_PRIORITY_SUBPATTERNS,
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
