import type {
  Difficulty,
  OptionKey,
  PracticePatternId,
  QuestionSubtest,
} from "@/modules/question-bank/domain/question";
import type {
  TryoutExamQuestion,
  TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-config";

export type SprintDurationMinutes = 10 | 12 | 15;
export type SprintDifficultyFilter = "ALL" | "HOTS";
export type SprintSubtestScope = QuestionSubtest | "SKD";

export type SprintStartRequest = {
  subtest: SprintSubtestScope;
  patternId?: PracticePatternId | null;
  durationMinutes: SprintDurationMinutes;
  difficultyFilter: SprintDifficultyFilter;
  questionCount?: number;
};

export type SprintPreset = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  config: SprintStartRequest & { questionCount: number };
};

export type SprintStartResponse = {
  seed: number;
  packageLabel: string;
  config: SprintStartRequest & { questionCount: number };
  durationSec: number;
  targetSecondsPerQuestion: number;
  items: readonly TryoutExamQuestion[];
};

export type SprintPaceStatus = "fast" | "on_track" | "slow";

export type SprintQuestionResult = {
  number: number;
  questionId: string;
  subtest: QuestionSubtest;
  pattern: PracticePatternId;
  subPattern: string;
  difficulty: Difficulty;
  selectedAnswer: OptionKey | undefined;
  correctAnswer: OptionKey;
  earnedPoints: number;
  maxPoints: number;
  isOptimal: boolean;
  isUnanswered: boolean;
  spentSec: number;
  targetSec: number;
  isSlow: boolean;
};

export type SprintSlowQuestionSummary = {
  number: number;
  questionId: string;
  subtest: QuestionSubtest;
  patternLabel: string;
  spentSec: number;
  targetSec: number;
  isOptimal: boolean;
};

export type SprintSubPatternStat = {
  subPattern: string;
  total: number;
  answered: number;
  correctCount: number;
  earnedPoints: number;
  maxPoints: number;
  avgSpentSec: number;
};

export type SprintEvaluation = {
  packageLabel: string;
  subtest: SprintSubtestScope;
  patternId?: PracticePatternId | null;
  difficultyFilter: SprintDifficultyFilter;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  correctCount: number;
  totalScore: number;
  maxScore: number;
  accuracyPct: number;
  durationUsedSec: number;
  durationLimitSec: number;
  avgSecondsPerAnswered: number;
  targetSecondsPerQuestion: number;
  paceStatus: SprintPaceStatus;
  slowestQuestions: SprintSlowQuestionSummary[];
  subPatternBreakdown: SprintSubPatternStat[];
  questionResults: SprintQuestionResult[];
};

export type SprintSubmitResponse = {
  seed: number;
  evaluation: SprintEvaluation;
  items: readonly TryoutQuestionItem[];
};

export const SPRINT_DEFAULT_QUESTION_COUNT = 15;
export const SPRINT_DURATIONS: readonly SprintDurationMinutes[] = [10, 12, 15];

export const SPRINT_PRESETS: readonly SprintPreset[] = [
  {
    id: "sprint-twk-hots-10",
    title: "Sprint TWK Penalaran HOTS",
    subtitle: "15 soal studi kasus 5 Pilar Kebangsaan • 10 menit (target 40 dtk/soal)",
    badge: "10 Menit • HOTS",
    config: {
      subtest: "TWK",
      patternId: null,
      durationMinutes: 10,
      difficultyFilter: "HOTS",
      questionCount: 15,
    },
  },
  {
    id: "sprint-tiu-cepat-12",
    title: "Sprint TIU Campuran Cepat",
    subtitle: "15 soal acak 9 pola TIU (Verbal, Numerik, Figural) • 12 menit (target 48 dtk/soal)",
    badge: "12 Menit • 9 Pola",
    config: {
      subtest: "TIU",
      patternId: null,
      durationMinutes: 12,
      difficultyFilter: "ALL",
      questionCount: 15,
    },
  },
  {
    id: "sprint-tkp-skor5-10",
    title: "Sprint TKP Pemburu Skor 5",
    subtitle: "15 soal dilema ASN BerAKHLAK tingkat sedang–sulit • 10 menit",
    badge: "10 Menit • HOTS",
    config: {
      subtest: "TKP",
      patternId: null,
      durationMinutes: 10,
      difficultyFilter: "HOTS",
      questionCount: 15,
    },
  },
  {
    id: "sprint-skd-campuran-15",
    title: "Sprint SKD Mini Berimbang",
    subtitle: "15 soal terpadu (4 TWK + 5 TIU + 6 TKP) simulasi ritme ujian • 15 menit",
    badge: "15 Menit • SKD",
    config: {
      subtest: "SKD",
      patternId: null,
      durationMinutes: 15,
      difficultyFilter: "ALL",
      questionCount: 15,
    },
  },
];

export function isSprintDuration(value: unknown): value is SprintDurationMinutes {
  return value === 10 || value === 12 || value === 15;
}

export function isSprintDifficultyFilter(value: unknown): value is SprintDifficultyFilter {
  return value === "ALL" || value === "HOTS";
}

export function isSprintSubtestScope(value: unknown): value is SprintSubtestScope {
  return value === "SKD" || value === "TWK" || value === "TIU" || value === "TKP";
}

