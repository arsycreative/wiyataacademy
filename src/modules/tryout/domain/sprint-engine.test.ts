import { describe, expect, it } from "vitest";

import {
  evaluateSprintAttempt,
  generateSprintPacket,
} from "./sprint-engine";
import { stripTryoutAnswersForExam } from "./tryout-engine";

describe("sprint-engine", () => {
  it("generates a 15-question deterministic SKD mixed sprint (4 TWK + 5 TIU + 6 TKP) and strips keys for exam", () => {
    const packetA = generateSprintPacket(
      { subtest: "SKD", durationMinutes: 15, difficultyFilter: "ALL" },
      20261121,
    );
    const packetB = generateSprintPacket(
      { subtest: "SKD", durationMinutes: 15, difficultyFilter: "ALL" },
      20261121,
    );

    expect(packetA.items).toHaveLength(15);
    expect(packetA.durationSec).toBe(15 * 60);
    expect(packetA.items.map((i) => i.question.id)).toEqual(
      packetB.items.map((i) => i.question.id),
    );
    expect(packetA.items.filter((i) => i.subtest === "TWK")).toHaveLength(4);
    expect(packetA.items.filter((i) => i.subtest === "TIU")).toHaveLength(5);
    expect(packetA.items.filter((i) => i.subtest === "TKP")).toHaveLength(6);

    const stripped = stripTryoutAnswersForExam(packetA.items);
    for (const item of stripped) {
      expect("answer" in item.question).toBe(false);
      expect("optionScores" in item.question).toBe(false);
      expect("explanation" in item.question).toBe(false);
      expect("tip" in item.question).toBe(false);
    }
  });

  it("generates a focused single-pattern HOTS sprint and audits slowest questions on submit", () => {
    const packet = generateSprintPacket(
      {
        subtest: "TIU",
        patternId: "silogisme",
        durationMinutes: 10,
        difficultyFilter: "HOTS",
      },
      771122,
    );

    expect(packet.items).toHaveLength(15);
    expect(packet.durationSec).toBe(600);
    expect(packet.targetSecondsPerQuestion).toBe(45);
    for (const item of packet.items) {
      expect(item.question.pattern).toBe("silogisme");
      expect(item.question.difficulty).not.toBe("mudah");
    }

    const q1 = packet.items[0].question;
    const q2 = packet.items[1].question;
    const answers = {
      [q1.id]: q1.answer,
      [q2.id]: q2.answer,
    };
    const questionTimesSec = {
      [q1.id]: 22,
      [q2.id]: 95,
    };

    const evaluation = evaluateSprintAttempt({
      packageLabel: packet.packageLabel,
      subtest: packet.config.subtest,
      patternId: packet.config.patternId,
      difficultyFilter: packet.config.difficultyFilter,
      items: packet.items,
      answers,
      durationUsedSec: 320,
      durationLimitSec: packet.durationSec,
      targetSecondsPerQuestion: packet.targetSecondsPerQuestion,
      questionTimesSec,
    });

    expect(evaluation.answeredCount).toBe(2);
    expect(evaluation.correctCount).toBe(2);
    expect(evaluation.totalScore).toBe(10);
    expect(evaluation.maxScore).toBe(75);
    expect(evaluation.slowestQuestions[0].questionId).toBe(q2.id);
    expect(evaluation.slowestQuestions[0].spentSec).toBe(95);
  });
});

