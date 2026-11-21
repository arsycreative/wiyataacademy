import type {
  PracticePatternId,
  TiuPatternId,
} from "./question";

export type PatternStatItem<TId extends string = PracticePatternId> = {
  id: TId;
  order: number;
  label: string;
  description?: string;
  subPatterns: readonly string[];
  total: number;
};

export type PatternProgressSummary = {
  patternId: TiuPatternId;
  order: number;
  label: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  flaggedCount: number;
};

export type TiuProgressSummary = {
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  patterns: PatternProgressSummary[];
};

export type SubtestPatternProgressSummary = {
  patternId: PracticePatternId;
  label: string;
  order: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  flaggedCount: number;
  earnedPoints: number;
  maxAnsweredPoints: number;
};

export type SubtestProgressSummary = {
  patterns: SubtestPatternProgressSummary[];
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  totalFlagged: number;
  totalEarnedPoints: number;
  totalMaxAnsweredPoints: number;
};

export type AllProgressSummaries = {
  tiu: TiuProgressSummary;
  twk: SubtestProgressSummary;
  tkp: SubtestProgressSummary;
};
