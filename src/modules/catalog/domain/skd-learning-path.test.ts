import { describe, expect, it } from "vitest";

import { ALL_TWK_QUESTIONS } from "@/modules/question-bank/data/twk";
import { sanitizePracticeProgress } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import type { TryoutHistoryRecord } from "@/modules/tryout/infrastructure/tryout-storage";
import { APP_ROUTES } from "@/shared/constants/app";
import { computeSkdLearningPath } from "./skd-learning-path";

function makeHistoryRecord(
  overrides: Partial<TryoutHistoryRecord> = {},
): TryoutHistoryRecord {
  return {
    id: "tryout-test-1",
    completedAt: "2026-11-20T12:00:00.000Z",
    mode: "mini",
    presetId: "mini-cat-cepat",
    packageLabel: "Mini Tryout CAT Cepat",
    seed: 123,
    durationUsedSec: 900,
    durationLimitSec: 1800,
    totalScore: 140,
    maxScore: 175,
    passed: true,
    subtests: {
      TWK: {
        score: 40,
        maxScore: 50,
        passingGrade: 25,
        passed: true,
        correctCount: 8,
        answeredCount: 10,
        questionCount: 10,
      },
      TIU: {
        score: 45,
        maxScore: 55,
        passingGrade: 25,
        passed: true,
        correctCount: 9,
        answeredCount: 11,
        questionCount: 11,
      },
      TKP: {
        score: 55,
        maxScore: 70,
        passingGrade: 52,
        passed: true,
        correctCount: 7,
        answeredCount: 14,
        questionCount: 14,
      },
    },
    answers: {},
    flagged: {},
    ...overrides,
  };
}

describe("computeSkdLearningPath", () => {
  it("builds 5 structured stages totaling 2,100 practice questions and starts at diagnostic for new users", () => {
    const state = computeSkdLearningPath(sanitizePracticeProgress({}), []);

    expect(state.stages).toHaveLength(5);
    expect(state.totalQuestions).toBe(2100);
    expect(state.totalAnswered).toBe(0);
    expect(state.completedStagesCount).toBe(0);
    expect(state.nextAction.stageId).toBe("diagnostik");
    expect(state.nextAction.href).toBe(APP_ROUTES.tryout);

    // Check module counts match real bank structure (5 TWK pillars, 9 TIU patterns, 6 TKP aspects)
    expect(state.stages[1].modules).toHaveLength(5);
    expect(state.stages[2].modules).toHaveLength(9);
    expect(state.stages[3].modules).toHaveLength(6);
  });

  it("advances nextAction to first incomplete TWK pillar after diagnostic tryout is completed", () => {
    const progress = sanitizePracticeProgress({
      selectedAnswers: {
        [ALL_TWK_QUESTIONS[0].id]: ALL_TWK_QUESTIONS[0].answer,
      },
    });
    const state = computeSkdLearningPath(progress, [makeHistoryRecord()]);

    expect(state.stages[0].status).toBe("completed");
    expect(state.stages[1].status).toBe("in_progress");
    expect(state.stages[1].modules[0].answered).toBe(1);
    expect(state.nextAction.stageId).toBe("twk");
    expect(state.nextAction.href).toBe(APP_ROUTES.twkPatternPractice("nasionalisme"));
  });

  it("marks stage 5 completed once an official 110-question tryout passes passing grade", () => {
    const passedOfficial = makeHistoryRecord({
      id: "official-pass",
      mode: "official",
      presetId: "paket-resmi-1",
      totalScore: 420,
      maxScore: 550,
      passed: true,
    });
    const state = computeSkdLearningPath(sanitizePracticeProgress({}), [passedOfficial]);

    expect(state.stages[0].status).toBe("completed");
    expect(state.stages[4].status).toBe("completed");
    expect(state.passedOfficialCount).toBe(1);
    expect(state.bestOfficialScore).toBe(420);
  });
});

