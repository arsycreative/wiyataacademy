import { NextResponse, type NextRequest } from "next/server";

import { createRandomSeed } from "@/modules/question-bank/domain/shuffle-core";
import type { PracticePatternId } from "@/modules/question-bank/domain/question";
import type { SprintStartRequest } from "@/modules/tryout/domain/sprint-config";
import { generateSprintPacket } from "@/modules/tryout/domain/sprint-engine";
import { stripTryoutAnswersForExam } from "@/modules/tryout/domain/tryout-engine";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON tidak valid." }, { status: 400 });
  }

  const input = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const rawSeed =
    typeof input.seed === "number" && Number.isFinite(input.seed) && input.seed > 0
      ? input.seed >>> 0
      : createRandomSeed();

  const startReq: Partial<SprintStartRequest> = {
    subtest: input.subtest as SprintStartRequest["subtest"],
    patternId: (input.patternId as PracticePatternId | null | undefined) ?? null,
    durationMinutes:
      input.durationMinutes === 10 || input.durationMinutes === 12 || input.durationMinutes === 15
        ? input.durationMinutes
        : 10,
    difficultyFilter: input.difficultyFilter === "HOTS" ? "HOTS" : "ALL",
  };

  const packet = generateSprintPacket(startReq, rawSeed);
  const examItems = stripTryoutAnswersForExam(packet.items);

  return NextResponse.json({
    seed: rawSeed,
    packageLabel: packet.packageLabel,
    config: packet.config,
    durationSec: packet.durationSec,
    targetSecondsPerQuestion: packet.targetSecondsPerQuestion,
    items: examItems,
  });
}

