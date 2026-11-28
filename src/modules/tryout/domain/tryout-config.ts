import type {
  Difficulty,
  OptionKey,
  PracticePatternId,
  Question,
  QuestionOption,
  QuestionSubtest,
} from "@/modules/question-bank/domain/question";
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

/**
 * Representasi soal CAT aman untuk sisi client selama ujian berlangsung:
 * sengaja TIDAK membawa `answer`, `optionScores`, `explanation`, maupun `tip`.
 */
export type PublicTryoutQuestion = {
  id: string;
  subtest: QuestionSubtest;
  pattern: PracticePatternId;
  subPattern: string;
  difficulty: Difficulty;
  prompt: string;
  options: readonly QuestionOption[];
};

export type TryoutExamQuestion = {
  number: number;
  subtest: QuestionSubtest;
  patternLabel: string;
  question: PublicTryoutQuestion;
};

/**
 * Representasi soal CAT lengkap (termasuk kunci, bobot TKP, dan pembahasan)
 * yang hanya dikirim server setelah peserta mengumpulkan tryout.
 */
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
    subtitle: "Menarik 110 soal acak baru dari 2.920 bank soal setiap kali memulai • 100 menit",
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

export function isTryoutMode(value: unknown): value is TryoutMode {
  return value === "official" || value === "mini";
}

export function buildPatternPracticeHref(
  subtest: QuestionSubtest,
  patternId: string,
): string {
  if (subtest === "TWK") return APP_ROUTES.twkPatternPractice(patternId);
  if (subtest === "TKP") return APP_ROUTES.tkpPatternPractice(patternId);
  return APP_ROUTES.tiuPatternPractice(patternId);
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

