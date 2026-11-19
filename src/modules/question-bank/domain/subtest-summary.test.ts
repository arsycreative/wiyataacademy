import { describe, expect, it } from "vitest";

import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import { shuffleQuestionOptions } from "./question-shuffle";
import {
  createInitialAllPatternSeeds,
  getSubtestCatalog,
  isTiuPattern,
  isTwkPattern,
  summarizeTwkProgress,
} from "./subtest-summary";

describe("subtest-summary", () => {
  it("initializes deterministic positive seeds for all 9 TIU and 5 TWK patterns", () => {
    const seeds = createInitialAllPatternSeeds({
      nasionalisme: 4242,
      silogisme: 1313,
    });

    expect(seeds.nasionalisme).toBe(4242);
    expect(seeds.silogisme).toBe(1313);
    expect(seeds.integritas).toBeGreaterThan(0);
    expect(seeds["bela-negara"]).toBeGreaterThan(0);
    expect(seeds["pilar-negara"]).toBeGreaterThan(0);
    expect(seeds["bahasa-indonesia"]).toBeGreaterThan(0);
  });

  it("evaluates TWK answers accurately against per-question shuffled option seeds", () => {
    const q1 = TWK_QUESTION_BANKS.nasionalisme[0];
    const q2 = TWK_QUESTION_BANKS.integritas[0];
    const q1Shuffled = shuffleQuestionOptions(q1, 7777);
    const wrongKey = q1Shuffled.options.find((opt) => opt.key !== q1Shuffled.answer)?.key ?? "A";

    const q2Shuffled = shuffleQuestionOptions(q2, 8888);

    const summary = summarizeTwkProgress(
      {
        [q1.id]: wrongKey,
        [q2.id]: q2Shuffled.answer,
      },
      { [q1.id]: true },
      { nasionalisme: 7777, integritas: 9999 },
      { [q2.id]: 8888 },
    );

    expect(summary.totalQuestions).toBe(200);
    expect(summary.totalAnswered).toBe(2);
    expect(summary.totalCorrect).toBe(1);
    expect(summary.totalFlagged).toBe(1);

    const nasSummary = summary.patterns.find((p) => p.patternId === "nasionalisme");
    const intSummary = summary.patterns.find((p) => p.patternId === "integritas");
    expect(nasSummary).toMatchObject({ answeredCount: 1, correctCount: 0, flaggedCount: 1 });
    expect(intSummary).toMatchObject({ answeredCount: 1, correctCount: 1, flaggedCount: 0 });
  });

  it("distinguishes TIU vs TWK pattern IDs and builds catalogs", () => {
    expect(isTwkPattern("bela-negara")).toBe(true);
    expect(isTwkPattern("silogisme")).toBe(false);
    expect(isTiuPattern("silogisme")).toBe(true);
    expect(isTiuPattern("nasionalisme")).toBe(false);

    expect(getSubtestCatalog("TWK").patternIds).toHaveLength(5);
    expect(getSubtestCatalog("TIU").patternIds).toHaveLength(9);
  });
});
