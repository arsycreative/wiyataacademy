import { describe, expect, it } from "vitest";

import {
  DIFFICULTIES,
  OPTION_KEYS,
  questionSchema,
  TIU_PATTERN_IDS,
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
} from "@/modules/question-bank/domain/question";
import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import {
  ALL_TWK_QUESTIONS,
  bahasaIndonesiaQuestions,
  belaNegaraQuestions,
  getTwkPatternStats,
  getTwkQuestionsByPattern,
  integritasQuestions,
  nasionalismeQuestions,
  pilarNegaraQuestions,
  TWK_QUESTION_BANKS,
} from "./index";

describe("TWK question bank", () => {
  it("validates every question across all 5 TWK pillar banks against questionSchema", () => {
    for (const patternId of TWK_PATTERN_IDS) {
      const bank = TWK_QUESTION_BANKS[patternId];
      for (const question of bank) {
        const parsed = questionSchema.parse(question);
        expect(parsed.subtest).toBe("TWK");
        expect(parsed.pattern).toBe(patternId);
      }
    }
  });

  it("ensures every TWK ID and prompt is unique and never collides with TIU question IDs", () => {
    const twkIds = ALL_TWK_QUESTIONS.map((q) => q.id);
    const twkPrompts = ALL_TWK_QUESTIONS.map((q) => q.prompt.trim().toLowerCase());
    const tiuIds = new Set(
      TIU_PATTERN_IDS.flatMap((id) => TIU_QUESTION_BANKS[id]).map((q) => q.id),
    );

    expect(ALL_TWK_QUESTIONS).toHaveLength(500);
    expect(new Set(twkIds).size).toBe(twkIds.length);
    expect(new Set(twkPrompts).size).toBe(twkPrompts.length);

    for (const id of twkIds) {
      expect(tiuIds.has(id)).toBe(false);
    }
  });

  it("contains 100 questions per TWK pillar (16 per base sub-pattern + 20 FR HOTS) with balanced difficulty & answer keys", () => {
    expect(nasionalismeQuestions).toHaveLength(100);
    expect(integritasQuestions).toHaveLength(100);
    expect(belaNegaraQuestions).toHaveLength(100);
    expect(pilarNegaraQuestions).toHaveLength(100);
    expect(bahasaIndonesiaQuestions).toHaveLength(100);

    for (const patternId of TWK_PATTERN_IDS) {
      const expectedSubPatterns = TWK_PATTERNS[patternId].subPatterns;
      expect(expectedSubPatterns).toHaveLength(6);

      expectedSubPatterns.forEach((subPattern, index) => {
        const scoped = getTwkQuestionsByPattern(patternId, { subPattern });
        if (index < 5) {
          expect(scoped).toHaveLength(16);
          expect(scoped.filter((q) => q.difficulty === "mudah")).toHaveLength(4);
          expect(scoped.filter((q) => q.difficulty === "sedang")).toHaveLength(8);
          expect(scoped.filter((q) => q.difficulty === "sulit")).toHaveLength(4);
        } else {
          expect(scoped).toHaveLength(20);
          expect(scoped.filter((q) => q.difficulty === "sedang")).toHaveLength(10);
          expect(scoped.filter((q) => q.difficulty === "sulit")).toHaveLength(10);
        }
      });

      for (const difficulty of DIFFICULTIES) {
        expect(
          getTwkQuestionsByPattern(patternId, { difficulty }).length,
        ).toBeGreaterThan(0);
      }

      const bank = TWK_QUESTION_BANKS[patternId];
      for (const key of OPTION_KEYS) {
        expect(bank.filter((q) => q.answer === key)).toHaveLength(20);
      }
    }
  });

  it("provides non-empty non-spoiler tips and avoids letter references in explanations across TWK", () => {
    for (const question of ALL_TWK_QUESTIONS) {
      expect(question.tip?.trim().length).toBeGreaterThan(0);
      expect(question.explanation).not.toMatch(/\b(?:opsi|pilihan|jawaban)\s+[A-E]\b/i);
    }
  });

  it("reports stats for all 5 separated TWK pillars", () => {
    const stats = getTwkPatternStats();
    expect(stats).toHaveLength(5);
    expect(stats.map((s) => ({ id: s.id, order: s.order, total: s.total }))).toEqual([
      { id: "nasionalisme", order: 1, total: 100 },
      { id: "integritas", order: 2, total: 100 },
      { id: "bela-negara", order: 3, total: 100 },
      { id: "pilar-negara", order: 4, total: 100 },
      { id: "bahasa-indonesia", order: 5, total: 100 },
    ]);
  });
});
