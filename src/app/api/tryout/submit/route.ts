import { NextResponse, type NextRequest } from "next/server";

import type { OptionKey } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  evaluateTryoutAttempt,
  generateTryoutQuestions,
  isTryoutMode,
} from "@/modules/tryout/domain/tryout-engine";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON tidak valid." }, { status: 400 });
  }

  const input = (body && typeof body === "object" ? body : {}) as {
    mode?: unknown;
    seed?: unknown;
    answers?: unknown;
    durationUsedSec?: unknown;
  };

  if (!isTryoutMode(input.mode)) {
    return NextResponse.json({ error: "Mode tryout tidak valid." }, { status: 400 });
  }

  const rawSeed = typeof input.seed === "number" ? input.seed : Number(input.seed);
  if (!Number.isFinite(rawSeed) || rawSeed <= 0) {
    return NextResponse.json({ error: "Seed paket tryout tidak valid." }, { status: 400 });
  }

  const sanitizedAnswers: Record<string, OptionKey> = {};
  if (input.answers && typeof input.answers === "object") {
    for (const [qId, val] of Object.entries(input.answers)) {
      if (isOptionKey(val)) {
        sanitizedAnswers[qId] = val;
      }
    }
  }

  const durationUsedSec =
    typeof input.durationUsedSec === "number" && Number.isFinite(input.durationUsedSec)
      ? Math.max(0, Math.round(input.durationUsedSec))
      : 0;

  const normalizedSeed = rawSeed >>> 0;
  const fullItems = generateTryoutQuestions(input.mode, normalizedSeed);
  const evaluation = evaluateTryoutAttempt(
    fullItems,
    input.mode,
    sanitizedAnswers,
    durationUsedSec,
  );

  return NextResponse.json({
    mode: input.mode,
    seed: normalizedSeed,
    evaluation,
    items: fullItems,
  });
}

