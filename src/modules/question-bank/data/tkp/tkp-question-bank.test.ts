import { describe, expect, it } from "vitest";

import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { ALL_TWK_QUESTIONS } from "@/modules/question-bank/data/twk";
import {
  DIFFICULTIES,
  OPTION_KEYS,
  questionSchema,
  TIU_PATTERN_IDS,
  TKP_PATTERN_IDS,
  TKP_PATTERNS,
} from "@/modules/question-bank/domain/question";
import {
  ALL_TKP_QUESTIONS,
  antiRadikalismeQuestions,
  getTkpPatternStats,
  getTkpQuestionsByPattern,
  jejaringKerjaQuestions,
  pelayananPublikQuestions,
  profesionalismeQuestions,
  sosialBudayaQuestions,
  tikQuestions,
  TKP_QUESTION_BANKS,
} from "./index";

describe("TKP question bank", () => {
  it("validates every TKP question against questionSchema including 1–5 optionScores", () => {
    for (const patternId of TKP_PATTERN_IDS) {
      const bank = TKP_QUESTION_BANKS[patternId];
      for (const question of bank) {
        const parsed = questionSchema.parse(question);
        expect(parsed.subtest).toBe("TKP");
        expect(parsed.pattern).toBe(patternId);
        expect(parsed.optionScores).toBeDefined();
        expect(parsed.optionScores![parsed.answer]).toBe(5);
      }
    }
  });

  it("ensures every TKP ID and prompt is unique and never collides with TIU or TWK IDs", () => {
    const tkpIds = ALL_TKP_QUESTIONS.map((q) => q.id);
    const tkpPrompts = ALL_TKP_QUESTIONS.map((q) => q.prompt.trim().toLowerCase());
    const otherIds = new Set([
      ...TIU_PATTERN_IDS.flatMap((id) => TIU_QUESTION_BANKS[id]).map((q) => q.id),
      ...ALL_TWK_QUESTIONS.map((q) => q.id),
    ]);

    expect(ALL_TKP_QUESTIONS).toHaveLength(480);
    expect(new Set(tkpIds).size).toBe(tkpIds.length);
    expect(new Set(tkpPrompts).size).toBe(tkpPrompts.length);

    for (const id of tkpIds) {
      expect(otherIds.has(id)).toBe(false);
    }
  });

  it("contains 80 questions per TKP aspect (16 per sub-aspect) with balanced difficulty & 5-point positions", () => {
    expect(pelayananPublikQuestions).toHaveLength(80);
    expect(jejaringKerjaQuestions).toHaveLength(80);
    expect(sosialBudayaQuestions).toHaveLength(80);
    expect(tikQuestions).toHaveLength(80);
    expect(profesionalismeQuestions).toHaveLength(80);
    expect(antiRadikalismeQuestions).toHaveLength(80);

    for (const patternId of TKP_PATTERN_IDS) {
      const expectedSubPatterns = TKP_PATTERNS[patternId].subPatterns;
      expect(expectedSubPatterns).toHaveLength(5);

      for (const subPattern of expectedSubPatterns) {
        const scoped = getTkpQuestionsByPattern(patternId, { subPattern });
        expect(scoped).toHaveLength(16);
        expect(scoped.filter((q) => q.difficulty === "mudah")).toHaveLength(4);
        expect(scoped.filter((q) => q.difficulty === "sedang")).toHaveLength(8);
        expect(scoped.filter((q) => q.difficulty === "sulit")).toHaveLength(4);
      }

      for (const difficulty of DIFFICULTIES) {
        expect(getTkpQuestionsByPattern(patternId, { difficulty }).length).toBeGreaterThan(0);
      }

      const bank = TKP_QUESTION_BANKS[patternId];
      for (const key of OPTION_KEYS) {
        expect(bank.filter((q) => q.answer === key)).toHaveLength(16);
      }
    }
  });

  it("provides non-empty non-spoiler tips and avoids letter references in explanations across TKP", () => {
    for (const question of ALL_TKP_QUESTIONS) {
      expect(question.tip?.trim().length).toBeGreaterThan(0);
      expect(question.explanation).not.toMatch(/\b(?:opsi|pilihan|jawaban)\s+[A-E]\b/i);
    }
  });

  it("reports stats for all 6 separated TKP aspects", () => {
    const stats = getTkpPatternStats();
    expect(stats).toHaveLength(6);
    expect(stats.map((s) => ({ id: s.id, order: s.order, total: s.total }))).toEqual([
      { id: "pelayanan-publik", order: 1, total: 80 },
      { id: "jejaring-kerja", order: 2, total: 80 },
      { id: "sosial-budaya", order: 3, total: 80 },
      { id: "tik", order: 4, total: 80 },
      { id: "profesionalisme", order: 5, total: 80 },
      { id: "anti-radikalisme", order: 6, total: 80 },
    ]);
  });
});
