import { describe, expect, it } from "vitest";

import {
  TKP_PATTERN_IDS,
  TWK_PATTERN_IDS,
  type OptionKey,
} from "@/modules/question-bank/domain/question";
import {
  evaluateTryoutAttempt,
  formatDurationClock,
  formatDurationVerbose,
  generateTryoutQuestions,
  stripTryoutAnswersForExam,
  TRYOUT_ACTIVE_TIU_PATTERNS,
  TRYOUT_MODE_CONFIGS,
  TRYOUT_PRESETS,
  TRYOUT_TIU_BLUEPRINT_QUOTAS,
} from "./tryout-engine";

describe("tryout-engine", () => {
  it("generates an exact 110-question stratified official CAT SKD packet in TWK -> TIU -> TKP order", () => {
    const items = generateTryoutQuestions("official", 20261101);
    expect(items).toHaveLength(110);

    const twkItems = items.slice(0, 30);
    const tiuItems = items.slice(30, 65);
    const tkpItems = items.slice(65, 110);

    expect(twkItems.every((item) => item.subtest === "TWK")).toBe(true);
    expect(tiuItems.every((item) => item.subtest === "TIU")).toBe(true);
    expect(tkpItems.every((item) => item.subtest === "TKP")).toBe(true);

    // Every pillar, active FR BKN TIU pattern, and TKP aspect is represented
    expect(new Set(twkItems.map((i) => i.question.pattern)).size).toBe(TWK_PATTERN_IDS.length);
    expect(new Set(tiuItems.map((i) => i.question.pattern)).size).toBe(
      TRYOUT_ACTIVE_TIU_PATTERNS.length,
    );
    expect(
      tiuItems.filter((i) => i.question.pattern === "sinonim-antonim-akronim"),
    ).toHaveLength(0);
    expect(tiuItems.filter((i) => i.question.pattern === "silogisme")).toHaveLength(
      TRYOUT_TIU_BLUEPRINT_QUOTAS.official.silogisme,
    );
    expect(
      tiuItems.filter((i) => i.question.pattern === "perbandingan-kuantitatif"),
    ).toHaveLength(TRYOUT_TIU_BLUEPRINT_QUOTAS.official["perbandingan-kuantitatif"]);
    expect(new Set(tkpItems.map((i) => i.question.pattern)).size).toBe(TKP_PATTERN_IDS.length);

    // Every question ID is unique and numbers run 1..110
    expect(new Set(items.map((i) => i.question.id)).size).toBe(110);
    expect(items[0].number).toBe(1);
    expect(items[109].number).toBe(110);
  });

  it("is 100% deterministic for the same (mode, seed) and varies across different seeds", () => {
    const a1 = generateTryoutQuestions("official", 20261101);
    const a2 = generateTryoutQuestions("official", 20261101);
    const b1 = generateTryoutQuestions("official", 20261102);

    expect(a1.map((i) => `${i.question.id}:${i.question.answer}`)).toEqual(
      a2.map((i) => `${i.question.id}:${i.question.answer}`),
    );
    expect(a1.map((i) => i.question.id)).not.toEqual(b1.map((i) => i.question.id));
  });

  it("generates an exact 35-question stratified mini CAT packet", () => {
    const items = generateTryoutQuestions("mini", 998877);
    expect(items).toHaveLength(35);
    expect(items.filter((i) => i.subtest === "TWK")).toHaveLength(10);
    expect(items.filter((i) => i.subtest === "TIU")).toHaveLength(11);
    expect(items.filter((i) => i.subtest === "TKP")).toHaveLength(14);
    expect(new Set(items.map((i) => i.question.id)).size).toBe(35);
  });

  it("evaluates official BKN scoring and enforces ALL-subtest passing grade rule", () => {
    const items = generateTryoutQuestions("official", 20261101);
    const perfectAnswers: Record<string, OptionKey> = {};
    for (const item of items) {
      perfectAnswers[item.question.id] = item.question.answer;
    }

    const perfectEval = evaluateTryoutAttempt(items, "official", perfectAnswers, 4200);
    expect(perfectEval.totalScore).toBe(550);
    expect(perfectEval.subtests.TWK.score).toBe(150);
    expect(perfectEval.subtests.TIU.score).toBe(175);
    expect(perfectEval.subtests.TKP.score).toBe(225);
    expect(perfectEval.passed).toBe(true);
    expect(perfectEval.failedSubtests).toEqual([]);
    expect(perfectEval.subtests.TKP.tkpDistribution?.[5]).toBe(45);

    // Fail ONLY TWK (60 < 65) while acing TIU (175) & TKP (225) -> total 460 MUST still fail!
    const failTwkOnly: Record<string, OptionKey> = { ...perfectAnswers };
    const twkItems = items.filter((i) => i.subtest === "TWK");
    for (let i = 12; i < twkItems.length; i += 1) {
      delete failTwkOnly[twkItems[i].question.id];
    }

    const partialEval = evaluateTryoutAttempt(items, "official", failTwkOnly, 3000);
    expect(partialEval.subtests.TWK.score).toBe(60);
    expect(partialEval.subtests.TWK.passed).toBe(false);
    expect(partialEval.subtests.TIU.passed).toBe(true);
    expect(partialEval.subtests.TKP.passed).toBe(true);
    expect(partialEval.totalScore).toBe(460);
    expect(partialEval.passed).toBe(false);
    expect(partialEval.failedSubtests).toEqual(["TWK"]);
  });

  it("scores TKP 1..5 points per chosen option and 0 for unanswered", () => {
    const items = generateTryoutQuestions("mini", 12345);
    const tkpItems = items.filter((i) => i.subtest === "TKP");
    const answers: Record<string, OptionKey> = {};

    // Pick lowest score (1) for first 5 TKP items, 4 for next 5, leave last 4 unanswered
    tkpItems.slice(0, 5).forEach((item) => {
      const k1 = item.question.options.find((o) => item.question.optionScores?.[o.key] === 1)!.key;
      answers[item.question.id] = k1;
    });
    tkpItems.slice(5, 10).forEach((item) => {
      const k4 = item.question.options.find((o) => item.question.optionScores?.[o.key] === 4)!.key;
      answers[item.question.id] = k4;
    });

    const result = evaluateTryoutAttempt(items, "mini", answers, 600);
    expect(result.subtests.TKP.score).toBe(5 * 1 + 5 * 4);
    expect(result.subtests.TKP.answeredCount).toBe(10);
    expect(result.subtests.TKP.unansweredCount).toBe(4);
    expect(result.subtests.TKP.tkpDistribution).toEqual({ 1: 5, 2: 0, 3: 0, 4: 5, 5: 0 });
    expect(result.weakestPatterns.length).toBeGreaterThan(0);
  });

  it("formats clock and Indonesian verbose duration cleanly and keeps preset metadata valid", () => {
    expect(formatDurationClock(6000)).toBe("01:40:00");
    expect(formatDurationClock(65)).toBe("00:01:05");
    expect(formatDurationVerbose(3725)).toBe("1 jam 2 menit 5 detik");
    expect(formatDurationVerbose(0)).toBe("0 detik");

    expect(TRYOUT_MODE_CONFIGS.official.subtests.TWK.passingGrade).toBe(65);
    expect(TRYOUT_MODE_CONFIGS.official.subtests.TIU.passingGrade).toBe(80);
    expect(TRYOUT_MODE_CONFIGS.official.subtests.TKP.passingGrade).toBe(166);
    expect(TRYOUT_PRESETS.length).toBeGreaterThanOrEqual(4);
  });

  it("strips answer keys, TKP optionScores, explanations, and tips before sending active CAT items to client", () => {
    const fullItems = generateTryoutQuestions("official", 20261101);
    const examItems = stripTryoutAnswersForExam(fullItems);
    expect(examItems).toHaveLength(110);

    for (const item of examItems) {
      const serialized = JSON.parse(JSON.stringify(item.question)) as Record<string, unknown>;
      expect(serialized.answer).toBeUndefined();
      expect(serialized.optionScores).toBeUndefined();
      expect(serialized.explanation).toBeUndefined();
      expect(serialized.tip).toBeUndefined();
      expect(item.question.options).toHaveLength(5);
    }
  });
});

