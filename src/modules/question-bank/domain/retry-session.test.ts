import { describe, expect, it } from "vitest";

import type { Question } from "./question";
import {
  commitRetryAnswer,
  getRetryEffectiveAnswers,
  getRetryEffectiveSeed,
  startRetrySession,
  startSingleQuestionRetry,
  summarizeRetrySession,
} from "./retry-session";

const MOCK_QUESTIONS: Question[] = [
  {
    id: "q-1",
    subtest: "TIU",
    pattern: "sinonim-antonim-akronim",
    subPattern: "sinonim",
    prompt: "Soal 1",
    options: [
      { key: "A", text: "Benar" },
      { key: "B", text: "Salah 1" },
      { key: "C", text: "Salah 2" },
      { key: "D", text: "Salah 3" },
      { key: "E", text: "Salah 4" },
    ],
    answer: "A",
    explanation: "Pembahasan 1",
    difficulty: "mudah",
    reviewStatus: "approved",
  },
  {
    id: "q-2",
    subtest: "TIU",
    pattern: "sinonim-antonim-akronim",
    subPattern: "antonim",
    prompt: "Soal 2",
    options: [
      { key: "A", text: "Salah 1" },
      { key: "B", text: "Benar" },
      { key: "C", text: "Salah 2" },
      { key: "D", text: "Salah 3" },
      { key: "E", text: "Salah 4" },
    ],
    answer: "B",
    explanation: "Pembahasan 2",
    difficulty: "sedang",
    reviewStatus: "approved",
  },
  {
    id: "q-tkp",
    subtest: "TKP",
    pattern: "pelayanan-publik",
    subPattern: "responsif",
    prompt: "Soal TKP",
    options: [
      { key: "A", text: "Skor 5" },
      { key: "B", text: "Skor 4" },
      { key: "C", text: "Skor 3" },
      { key: "D", text: "Skor 2" },
      { key: "E", text: "Skor 1" },
    ],
    answer: "A",
    optionScores: { A: 5, B: 4, C: 3, D: 2, E: 1 },
    explanation: "Pembahasan TKP",
    difficulty: "sedang",
    reviewStatus: "approved",
  },
];

describe("retry-session", () => {
  it("starts a retry session without losing underlying wrong answers until re-answered", () => {
    const initialAnswers = { "q-1": "B" as const, "q-2": "C" as const };
    const savedSeeds = { "q-1": 1001, "q-2": 1002 };

    const session = startRetrySession(["q-1", "q-2", "q-1"], savedSeeds, 999, 5555);
    expect(session).not.toBeNull();
    expect(session!.questionIds).toEqual(["q-1", "q-2"]);
    expect(session!.pendingIds).toEqual(["q-1", "q-2"]);
    expect(session!.optionSeeds["q-1"]).not.toBe(1001);
    expect(session!.optionSeeds["q-2"]).not.toBe(1002);

    // UI sees pending retry questions as unanswered, while stored answers remain intact
    const maskedAnswers = getRetryEffectiveAnswers(session, initialAnswers);
    expect(maskedAnswers["q-1"]).toBeUndefined();
    expect(maskedAnswers["q-2"]).toBeUndefined();
    expect(initialAnswers["q-1"]).toBe("B");
    expect(initialAnswers["q-2"]).toBe("C");

    // Seed resolves to the temporary retry seed while pending
    expect(getRetryEffectiveSeed(session, "q-1", 1001, 999)).toBe(
      session!.optionSeeds["q-1"],
    );
  });

  it("commits re-answered items and summarizes improved vs still-wrong questions accurately", () => {
    const session = startRetrySession(["q-1", "q-2"], { "q-1": 111, "q-2": 222 }, 999, 7777);
    const { nextSession: afterQ1, committedSeed: seed1 } = commitRetryAnswer(session, "q-1");

    expect(seed1).toBe(session!.optionSeeds["q-1"]);
    expect(afterQ1!.questionIds).toEqual(["q-1", "q-2"]);
    expect(afterQ1!.pendingIds).toEqual(["q-2"]);
    expect(afterQ1!.optionSeeds["q-1"]).toBeUndefined();

    // q-1 is now answered right, q-2 still pending
    const answersStep1 = { "q-1": "A" as const, "q-2": "C" as const };
    const summaryStep1 = summarizeRetrySession(
      afterQ1,
      MOCK_QUESTIONS,
      answersStep1,
      (q, ans) => ans !== undefined && ans !== q.answer,
    );
    expect(summaryStep1).toEqual({
      total: 2,
      pendingCount: 1,
      completedCount: 1,
      improvedCount: 1,
      stillWrongIds: [],
      isComplete: false,
    });

    // q-2 is re-answered wrong again
    const { nextSession: afterQ2 } = commitRetryAnswer(afterQ1, "q-2");
    const answersStep2 = { "q-1": "A" as const, "q-2": "D" as const };
    const summaryStep2 = summarizeRetrySession(
      afterQ2,
      MOCK_QUESTIONS,
      answersStep2,
      (q, ans) => ans !== undefined && ans !== q.answer,
    );
    expect(summaryStep2).toEqual({
      total: 2,
      pendingCount: 0,
      completedCount: 2,
      improvedCount: 1,
      stillWrongIds: ["q-2"],
      isComplete: true,
    });
  });

  it("supports single-card retry standalone and inside an existing retry session", () => {
    const standalone = startSingleQuestionRetry(null, "q-1", 123, 4444);
    expect(standalone.questionIds).toEqual(["q-1"]);
    expect(standalone.pendingIds).toEqual(["q-1"]);
    expect(standalone.optionSeeds["q-1"]).not.toBe(123);

    const { nextSession: finishedBatch } = commitRetryAnswer(
      startRetrySession(["q-1", "q-2"], {}, 100, 2222),
      "q-1",
    );
    const { nextSession: completed } = commitRetryAnswer(finishedBatch, "q-2");
    expect(completed!.pendingIds).toEqual([]);

    const reQueuedSingle = startSingleQuestionRetry(completed, "q-2", 555, 8888);
    expect(reQueuedSingle.questionIds).toEqual(["q-1", "q-2"]);
    expect(reQueuedSingle.pendingIds).toEqual(["q-2"]);
    expect(reQueuedSingle.optionSeeds["q-2"]).not.toBe(555);
  });

  it("tracks TKP < 5 point answers in stillWrongIds until score 5 is selected", () => {
    const isTkpNeedsRetry = (q: Question, ans: "A" | "B" | "C" | "D" | "E" | undefined) => {
      if (ans === undefined) return false;
      if (q.optionScores) return (q.optionScores[ans] ?? 1) < 5;
      return ans !== q.answer;
    };

    const tkpSession = startRetrySession(["q-tkp"], {}, 333, 9999);
    const { nextSession: afterScore4 } = commitRetryAnswer(tkpSession, "q-tkp");
    const summary4 = summarizeRetrySession(
      afterScore4,
      MOCK_QUESTIONS,
      { "q-tkp": "B" },
      isTkpNeedsRetry,
    );
    expect(summary4).toMatchObject({
      total: 1,
      improvedCount: 0,
      stillWrongIds: ["q-tkp"],
      isComplete: true,
    });

    const summary5 = summarizeRetrySession(
      afterScore4,
      MOCK_QUESTIONS,
      { "q-tkp": "A" },
      isTkpNeedsRetry,
    );
    expect(summary5).toMatchObject({
      total: 1,
      improvedCount: 1,
      stillWrongIds: [],
      isComplete: true,
    });
  });
});
