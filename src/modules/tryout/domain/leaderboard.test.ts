import { describe, expect, it } from "vitest";

import type { TryoutHistoryRecord } from "@/modules/tryout/infrastructure/tryout-storage";
import {
  compareLeaderboardAttempts,
  computeTopPercent,
  findUnsyncedLocalAttempts,
  maskParticipantName,
  mergeTryoutHistoryRecords,
  resolveLeaderboardScopeForPreset,
} from "./leaderboard";

function makeRecord(overrides: Partial<TryoutHistoryRecord>): TryoutHistoryRecord {
  return {
    id: "tryout-1",
    completedAt: "2026-11-24T08:00:00.000Z",
    mode: "official",
    presetId: "paket-resmi-1",
    packageLabel: "Paket Tryout Resmi 01",
    seed: 20261101,
    durationUsedSec: 4200,
    durationLimitSec: 6000,
    totalScore: 410,
    maxScore: 550,
    passed: true,
    subtests: {
      TWK: {
        score: 100,
        maxScore: 150,
        passingGrade: 65,
        passed: true,
        correctCount: 20,
        answeredCount: 30,
        questionCount: 30,
      },
      TIU: {
        score: 120,
        maxScore: 175,
        passingGrade: 80,
        passed: true,
        correctCount: 24,
        answeredCount: 35,
        questionCount: 35,
      },
      TKP: {
        score: 190,
        maxScore: 225,
        passingGrade: 166,
        passed: true,
        correctCount: 25,
        answeredCount: 45,
        questionCount: 45,
      },
    },
    answers: {},
    flagged: {},
    ...overrides,
  };
}

describe("tryout leaderboard & cloud sync domain", () => {
  it("masks participant names and emails consistently for national leaderboard privacy", () => {
    expect(maskParticipantName("Budi Santoso", "budi@example.com")).toBe("Budi S.");
    expect(maskParticipantName("Muhammad Rizky Pratama", null)).toBe("Muhammad R.");
    expect(maskParticipantName("Andi", null)).toBe("Andi***");
    expect(maskParticipantName("Ari", null)).toBe("Ari***");
    expect(maskParticipantName("", "nurul.huda@gmail.com")).toBe("Nuru***");
    expect(maskParticipantName(null, null)).toBe("Peserta CPNS");
  });

  it("computes Top % cleanly across edge cases", () => {
    expect(computeTopPercent(1, 100)).toBe(1);
    expect(computeTopPercent(12, 100)).toBe(12);
    expect(computeTopPercent(1, 1)).toBe(100);
    expect(computeTopPercent(3, 20)).toBe(15);
    expect(computeTopPercent(50, 50)).toBe(100);
  });

  it("ranks attempts using official BKN tie-break order (PG -> Total -> TKP -> TIU -> TWK -> Duration)", () => {
    const passedLowerTotal = {
      passed: true,
      totalScore: 390,
      tkpScore: 180,
      tiuScore: 110,
      twkScore: 100,
      durationUsedSec: 5000,
      completedAt: "2026-11-24T09:00:00Z",
    };
    const failedHigherTotal = {
      passed: false,
      totalScore: 440,
      tkpScore: 210,
      tiuScore: 170,
      twkScore: 60,
      durationUsedSec: 3000,
      completedAt: "2026-11-24T08:00:00Z",
    };
    const passedSameTotalHigherTkp = {
      passed: true,
      totalScore: 390,
      tkpScore: 195,
      tiuScore: 105,
      twkScore: 90,
      durationUsedSec: 5500,
      completedAt: "2026-11-24T10:00:00Z",
    };
    const passedSameScoresFaster = {
      ...passedSameTotalHigherTkp,
      durationUsedSec: 4100,
    };

    const sorted = [
      failedHigherTotal,
      passedLowerTotal,
      passedSameTotalHigherTkp,
      passedSameScoresFaster,
    ].sort(compareLeaderboardAttempts);

    expect(sorted[0]).toBe(passedSameScoresFaster);
    expect(sorted[1]).toBe(passedSameTotalHigherTkp);
    expect(sorted[2]).toBe(passedLowerTotal);
    expect(sorted[3]).toBe(failedHigherTotal);
  });

  it("merges local and cloud history without duplicates, newest first, and identifies unsynced local attempts", () => {
    const local1 = makeRecord({ id: "a1", completedAt: "2026-11-24T08:00:00.000Z", totalScore: 350 });
    const local2 = makeRecord({ id: "a2", completedAt: "2026-11-24T10:00:00.000Z", totalScore: 420 });
    const cloud1 = makeRecord({ id: "a1", completedAt: "2026-11-24T08:00:00.000Z", totalScore: 360 });
    const cloud3 = makeRecord({ id: "a3", completedAt: "2026-11-24T09:00:00.000Z", totalScore: 390 });

    const merged = mergeTryoutHistoryRecords([local1, local2], [cloud1, cloud3]);
    expect(merged.map((r) => r.id)).toEqual(["a2", "a3", "a1"]);
    // Cloud wins for duplicate id "a1"
    expect(merged.find((r) => r.id === "a1")?.totalScore).toBe(360);

    const unsynced = findUnsyncedLocalAttempts([local1, local2], [cloud1, cloud3]);
    expect(unsynced.map((r) => r.id)).toEqual(["a2"]);
  });

  it("resolves leaderboard scope cleanly for fixed presets and dynamic modes", () => {
    expect(resolveLeaderboardScopeForPreset("paket-resmi-2", "official")).toBe("paket-resmi-2");
    expect(resolveLeaderboardScopeForPreset("paket-acak-resmi", "official")).toBe("all-official");
    expect(resolveLeaderboardScopeForPreset("mini-cat-cepat", "mini")).toBe("mini-cat-cepat");
    expect(resolveLeaderboardScopeForPreset("custom", "mini")).toBe("mini-cat-cepat");
  });
});

