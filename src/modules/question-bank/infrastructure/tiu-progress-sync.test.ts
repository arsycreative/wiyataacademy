import { describe, expect, it } from "vitest";

import {
  mergePracticeProgress,
  sanitizePracticeProgress,
} from "./tiu-progress-sync";

describe("tiu-progress-sync", () => {
  it("sanitizes malformed progress payloads safely", () => {
    const sanitized = sanitizePracticeProgress({
      selectedAnswers: {
        "tiu-sin-001": "B",
        "tiu-sin-002": "Z",
      },
      flaggedQuestions: {
        "tiu-sin-001": true,
        "tiu-sin-003": "yes",
      },
      viewMode: "single",
      lastPattern: "silogisme",
      patternSeeds: {
        silogisme: 123456,
        unknown: 999,
      },
      questionSeeds: {
        "tiu-sin-001": 456,
        bad: -10,
      },
    });

    expect(sanitized.selectedAnswers).toEqual({ "tiu-sin-001": "B" });
    expect(sanitized.flaggedQuestions).toEqual({ "tiu-sin-001": true });
    expect(sanitized.viewMode).toBe("single");
    expect(sanitized.lastPattern).toBe("silogisme");
    expect(sanitized.patternSeeds).toEqual({ silogisme: 123456 });
    expect(sanitized.questionSeeds).toEqual({ "tiu-sin-001": 456 });
  });

  it("merges local guest progress with cloud progress while preserving paired questionSeeds", () => {
    const local = sanitizePracticeProgress({
      selectedAnswers: {
        "tiu-sin-001": "A",
        "tiu-ana-001": "C",
      },
      flaggedQuestions: { "tiu-ana-001": true },
      patternSeeds: {
        "sinonim-antonim-akronim": 111,
        "analogi-kata": 222,
      },
      questionSeeds: {
        "tiu-sin-001": 111,
        "tiu-ana-001": 222,
      },
    });

    const remote = sanitizePracticeProgress({
      selectedAnswers: {
        "tiu-sin-001": "D",
        "tiu-sil-001": "E",
      },
      flaggedQuestions: { "tiu-sil-001": true },
      viewMode: "single",
      lastPattern: "silogisme",
      patternSeeds: {
        "sinonim-antonim-akronim": 999,
        silogisme: 333,
      },
      questionSeeds: {
        "tiu-sin-001": 999,
        "tiu-sil-001": 333,
      },
    });

    const merged = mergePracticeProgress(local, remote);

    // Remote answer & seed win when both exist
    expect(merged.selectedAnswers["tiu-sin-001"]).toBe("D");
    expect(merged.questionSeeds["tiu-sin-001"]).toBe(999);
    // Remote-only and local-only answers are both retained with their own option seeds
    expect(merged.selectedAnswers["tiu-sil-001"]).toBe("E");
    expect(merged.questionSeeds["tiu-sil-001"]).toBe(333);
    expect(merged.selectedAnswers["tiu-ana-001"]).toBe("C");
    expect(merged.questionSeeds["tiu-ana-001"]).toBe(222);
    expect(merged.flaggedQuestions).toEqual({
      "tiu-ana-001": true,
      "tiu-sil-001": true,
    });
    expect(merged.viewMode).toBe("single");
    expect(merged.lastPattern).toBe("silogisme");
  });
});

