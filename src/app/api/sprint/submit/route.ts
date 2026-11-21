import { NextResponse, type NextRequest } from "next/server";

import type { OptionKey, PracticePatternId } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import type { SprintStartRequest } from "@/modules/tryout/domain/sprint-config";
import {
  evaluateSprintAttempt,
  generateSprintPacket,
} from "@/modules/tryout/domain/sprint-engine";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON tidak valid." }, { status: 400 });
  }

  const input = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const rawSeed = typeof input.seed === "number" ? input.seed : Number(input.seed);
  if (!Number.isFinite(rawSeed) || rawSeed <= 0) {
    return NextResponse.json({ error: "Seed sesi sprint tidak valid." }, { status: 400 });
  }
  const normalizedSeed = rawSeed >>> 0;

  const startReq: Partial<SprintStartRequest> = {
    subtest: input.subtest as SprintStartRequest["subtest"],
    patternId: (input.patternId as PracticePatternId | null | undefined) ?? null,
    durationMinutes:
      input.durationMinutes === 10 || input.durationMinutes === 12 || input.durationMinutes === 15
        ? input.durationMinutes
        : 10,
    difficultyFilter: input.difficultyFilter === "HOTS" ? "HOTS" : "ALL",
  };

  const sanitizedAnswers: Record<string, OptionKey> = {};
  if (input.answers && typeof input.answers === "object") {
    for (const [qId, val] of Object.entries(input.answers)) {
      if (isOptionKey(val)) {
        sanitizedAnswers[qId] = val;
      }
    }
  }

  const sanitizedTimes: Record<string, number> = {};
  if (input.questionTimesSec && typeof input.questionTimesSec === "object") {
    for (const [qId, val] of Object.entries(input.questionTimesSec)) {
      if (typeof val === "number" && Number.isFinite(val) && val >= 0) {
        sanitizedTimes[qId] = Math.round(val);
      }
    }
  }

  const durationUsedSec =
    typeof input.durationUsedSec === "number" && Number.isFinite(input.durationUsedSec)
      ? Math.max(0, Math.round(input.durationUsedSec))
      : 0;

  const packet = generateSprintPacket(startReq, normalizedSeed);
  const evaluation = evaluateSprintAttempt({
    packageLabel: packet.packageLabel,
    subtest: packet.config.subtest,
    patternId: packet.config.patternId,
    difficultyFilter: packet.config.difficultyFilter,
    items: packet.items,
    answers: sanitizedAnswers,
    durationUsedSec,
    durationLimitSec: packet.durationSec,
    targetSecondsPerQuestion: packet.targetSecondsPerQuestion,
    questionTimesSec: sanitizedTimes,
  });

  return NextResponse.json({
    seed: normalizedSeed,
    evaluation,
    items: packet.items,
  });
}

