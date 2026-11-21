import { describe, expect, it } from "vitest";

import { ALL_PATTERN_IDS } from "./question";
import { getPatternCheatSheet, PATTERN_CHEAT_SHEETS } from "./pattern-cheat-sheets";

describe("PATTERN_CHEAT_SHEETS", () => {
  it("provides complete cheat sheet content for all 20 SKD patterns (TWK, TIU, TKP)", () => {
    expect(Object.keys(PATTERN_CHEAT_SHEETS).sort()).toEqual([...ALL_PATTERN_IDS].sort());

    for (const patternId of ALL_PATTERN_IDS) {
      const sheet = getPatternCheatSheet(patternId);
      expect(sheet.patternId).toBe(patternId);
      expect(sheet.targetSecondsPerQuestion).toBeGreaterThanOrEqual(20);
      expect(sheet.targetSecondsPerQuestion).toBeLessThanOrEqual(90);
      expect(sheet.headline.trim().length).toBeGreaterThan(15);
      expect(sheet.coreConcept.trim().length).toBeGreaterThan(40);
      expect(sheet.fastTricks.length).toBeGreaterThanOrEqual(3);
      expect(sheet.commonTraps.length).toBeGreaterThanOrEqual(2);
    }
  });
});

