import { describe, expect, it } from "vitest";

import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import { shuffleQuestionOptions } from "./question-shuffle";
import {
  createInitialAllPatternSeeds,
  getSubtestCatalog,
  isTiuPattern,
  isTkpPattern,
  isTwkPattern,
  shuffleQuestionWithScores,
  summarizeTkpProgress,
  summarizeTwkProgress,
} from "./subtest-summary";

describe("subtest-summary", () => {
  it("initializes deterministic positive seeds for all 9 TIU, 5 TWK, and 6 TKP patterns", () => {
    const seeds = createInitialAllPatternSeeds({
      nasionalisme: 4242,
      silogisme: 1313,
      "pelayanan-publik": 9090,
    });

    expect(seeds.nasionalisme).toBe(4242);
    expect(seeds.silogisme).toBe(1313);
    expect(seeds["pelayanan-publik"]).toBe(9090);
    expect(seeds.integritas).toBeGreaterThan(0);
    expect(seeds["anti-radikalisme"]).toBeGreaterThan(0);
    expect(seeds.tik).toBeGreaterThan(0);
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

    expect(summary.totalQuestions).toBe(500);
    expect(summary.totalAnswered).toBe(2);
    expect(summary.totalCorrect).toBe(1);
    expect(summary.totalFlagged).toBe(1);

    const nasSummary = summary.patterns.find((p) => p.patternId === "nasionalisme");
    const intSummary = summary.patterns.find((p) => p.patternId === "integritas");
    expect(nasSummary).toMatchObject({ answeredCount: 1, correctCount: 0, flaggedCount: 1 });
    expect(intSummary).toMatchObject({ answeredCount: 1, correctCount: 1, flaggedCount: 0 });
  });

  it("distinguishes TIU, TWK, and TKP pattern IDs and builds catalogs", () => {
    expect(isTwkPattern("bela-negara")).toBe(true);
    expect(isTwkPattern("silogisme")).toBe(false);
    expect(isTiuPattern("silogisme")).toBe(true);
    expect(isTiuPattern("pelayanan-publik")).toBe(false);
    expect(isTkpPattern("pelayanan-publik")).toBe(true);
    expect(isTkpPattern("nasionalisme")).toBe(false);

    expect(getSubtestCatalog("TWK").patternIds).toHaveLength(5);
    expect(getSubtestCatalog("TIU").patternIds).toHaveLength(9);
    expect(getSubtestCatalog("TKP").patternIds).toHaveLength(6);
  });

  it("remaps TKP 1–5 optionScores accurately alongside shuffled options and summarizes TKP points", () => {
    const q1 = TKP_QUESTION_BANKS["pelayanan-publik"][0];
    const q2 = TKP_QUESTION_BANKS["anti-radikalisme"][0];
    const q1Shuffled = shuffleQuestionWithScores(q1, 5151);
    const q2Shuffled = shuffleQuestionWithScores(q2, 6262);

    // Setiap teks opsi setelah diacak harus tetap mempertahankan bobot 1–5 aslinya
    for (const origOpt of q1.options) {
      const movedOpt = q1Shuffled.options.find((opt) => opt.text === origOpt.text);
      expect(movedOpt).toBeDefined();
      expect(q1Shuffled.optionScores![movedOpt!.key]).toBe(q1.optionScores![origOpt.key]);
    }
    expect(q1Shuffled.optionScores![q1Shuffled.answer]).toBe(5);

    const score4Key =
      q1Shuffled.options.find((opt) => q1Shuffled.optionScores![opt.key] === 4)?.key ?? "B";
    const summary = summarizeTkpProgress(
      {
        [q1.id]: score4Key,
        [q2.id]: q2Shuffled.answer,
      },
      { [q1.id]: true },
      { "pelayanan-publik": 5151 },
      { [q2.id]: 6262 },
    );

    expect(summary.totalQuestions).toBe(570);
    expect(summary.totalAnswered).toBe(2);
    expect(summary.totalEarnedPoints).toBe(9);
    expect(summary.totalMaxAnsweredPoints).toBe(10);
    expect(summary.totalFlagged).toBe(1);
  });
});
