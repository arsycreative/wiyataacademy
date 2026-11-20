import { beforeEach, describe, expect, it } from "vitest";

import { evaluateTryoutAttempt, generateTryoutQuestions } from "@/modules/tryout/domain/tryout-engine";
import {
  appendTryoutHistory,
  buildTryoutHistoryRecord,
  clearActiveTryoutSession,
  deleteTryoutHistoryItem,
  readActiveTryoutSession,
  readTryoutHistory,
  sanitizeActiveTryoutSession,
  TRYOUT_ACTIVE_STORAGE_KEY,
  writeActiveTryoutSession,
  type ActiveTryoutSession,
} from "./tryout-storage";

describe("tryout-storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persists, reads, sanitizes, and clears active tryout sessions", () => {
    const session: ActiveTryoutSession = {
      id: "tryout-1",
      mode: "official",
      presetId: "paket-resmi-1",
      packageLabel: "Paket Tryout Resmi 01",
      seed: 20261101,
      startedAtMs: 1_700_000_000_000,
      endsAtMs: 1_700_006_000_000,
      durationLimitSec: 6000,
      answers: { "twk-nas-001": "A" },
      flagged: { "twk-nas-001": true },
      currentIndex: 12,
    };

    writeActiveTryoutSession(session);
    expect(readActiveTryoutSession()).toEqual(session);

    clearActiveTryoutSession();
    expect(readActiveTryoutSession()).toBeNull();
  });

  it("rejects corrupted active sessions safely", () => {
    window.localStorage.setItem(TRYOUT_ACTIVE_STORAGE_KEY, "{not valid json");
    expect(readActiveTryoutSession()).toBeNull();
    expect(sanitizeActiveTryoutSession({ mode: "unknown", seed: -5 })).toBeNull();
  });

  it("stores, deduplicates, and deletes tryout history records", () => {
    const items = generateTryoutQuestions("mini", 555);
    const session: ActiveTryoutSession = {
      id: "hist-1",
      mode: "mini",
      presetId: "mini-cat-cepat",
      packageLabel: "Mini Tryout CAT Cepat",
      seed: 555,
      startedAtMs: 1_700_000_000_000,
      endsAtMs: 1_700_001_800_000,
      durationLimitSec: 1800,
      answers: { [items[0].question.id]: items[0].question.answer },
      flagged: {},
      currentIndex: 0,
    };

    const evaluation = evaluateTryoutAttempt(items, "mini", session.answers, 450);
    const record = buildTryoutHistoryRecord(session, evaluation, "2026-11-20T12:00:00.000Z");

    appendTryoutHistory(record);
    expect(readTryoutHistory()).toHaveLength(1);
    expect(readTryoutHistory()[0].totalScore).toBe(5);

    deleteTryoutHistoryItem("hist-1");
    expect(readTryoutHistory()).toHaveLength(0);
  });
});

