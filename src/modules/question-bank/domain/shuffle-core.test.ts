import { describe, expect, it } from "vitest";

import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import { getPatternIdFromQuestionId } from "./shuffle-core";

describe("shuffle-core", () => {
  it("maps every single one of the 2,700 question IDs to its exact PracticePatternId without loading data files", () => {
    let checked = 0;
    for (const banks of [TIU_QUESTION_BANKS, TWK_QUESTION_BANKS, TKP_QUESTION_BANKS]) {
      for (const [patternId, questions] of Object.entries(banks)) {
        for (const q of questions) {
          expect(getPatternIdFromQuestionId(q.id)).toBe(patternId);
          checked += 1;
        }
      }
    }
    expect(checked).toBe(2700);
    expect(getPatternIdFromQuestionId("tiu-sin-001")).toBe("sinonim-antonim-akronim");
    expect(getPatternIdFromQuestionId("invalid-id")).toBeUndefined();
  });
});

