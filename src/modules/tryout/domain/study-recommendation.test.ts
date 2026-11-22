import { describe, expect, it } from "vitest";
import { APP_ROUTES } from "@/shared/constants/app";
import { buildStudyRecommendationPlan } from "./study-recommendation";
import type { TryoutEvaluation } from "./tryout-config";

function createBaseEvaluation(
  overrides: Partial<TryoutEvaluation> = {},
): TryoutEvaluation {
  return {
    mode: "official",
    totalQuestions: 110,
    answeredCount: 108,
    unansweredCount: 2,
    totalScore: 360,
    maxScore: 550,
    passed: false,
    failedSubtests: ["TWK"],
    durationUsedSec: 5400,
    avgSecondsPerAnswered: 51,
    subtests: {
      TWK: {
        subtest: "TWK",
        label: "Tes Wawasan Kebangsaan",
        questionCount: 30,
        answeredCount: 28,
        unansweredCount: 2,
        correctCount: 11,
        wrongCount: 17,
        score: 55,
        maxScore: 150,
        passingGrade: 65,
        passed: false,
        gapToPassing: -10,
      },
      TIU: {
        subtest: "TIU",
        label: "Tes Intelegensia Umum",
        questionCount: 35,
        answeredCount: 35,
        unansweredCount: 0,
        correctCount: 25,
        wrongCount: 10,
        score: 125,
        maxScore: 175,
        passingGrade: 80,
        passed: true,
        gapToPassing: 45,
      },
      TKP: {
        subtest: "TKP",
        label: "Tes Karakteristik Pribadi",
        questionCount: 45,
        answeredCount: 45,
        unansweredCount: 0,
        correctCount: 20,
        wrongCount: 25,
        score: 180,
        maxScore: 225,
        passingGrade: 166,
        passed: true,
        gapToPassing: 14,
      },
    },
    patternBreakdown: [],
    weakestPatterns: [
      {
        subtest: "TWK",
        patternId: "pilar-negara",
        patternLabel: "Pilar Negara",
        total: 6,
        answered: 6,
        correct: 2,
        earnedPoints: 10,
        maxPoints: 30,
        accuracyPct: 33,
        practiceHref: APP_ROUTES.twkPatternPractice("pilar-negara"),
      },
    ],
    questionResults: [],
    ...overrides,
  };
}

describe("study recommendation engine", () => {
  it("prioritizes failed passing-grade subtests and links directly to practice & sprint", () => {
    const plan = buildStudyRecommendationPlan(createBaseEvaluation());

    expect(plan.readinessLevel).toBe("needs_focus");
    expect(plan.actionSteps[0].id).toBe("pg-TWK");
    expect(plan.actionSteps[0].detail).toContain("2 jawaban benar");
    expect(plan.actionSteps[1].sprintHref).toContain("subtest=TWK");
    expect(plan.timeAudit.status).toBe("optimal");
  });

  it("flags incomplete exams and marks competitive scores properly", () => {
    const base = createBaseEvaluation({
      totalScore: 420,
      passed: true,
      failedSubtests: [],
    });
    base.subtests.TWK = {
      ...base.subtests.TWK,
      score: 110,
      passed: true,
      gapToPassing: 45,
      unansweredCount: 6,
    };

    const plan = buildStudyRecommendationPlan(base);
    expect(plan.readinessLevel).toBe("competitive");
    expect(plan.timeAudit.status).toBe("incomplete");
    expect(plan.timeAudit.label).toContain("6 Soal Terlewat Kosong");
  });
});
