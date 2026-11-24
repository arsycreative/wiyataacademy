import { NextResponse, type NextRequest } from "next/server";

import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import type { OptionKey } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  resolveLeaderboardScopeForPreset,
  type TryoutAttemptRankSummary,
} from "@/modules/tryout/domain/leaderboard";
import { TRYOUT_MODE_CONFIGS } from "@/modules/tryout/domain/tryout-config";
import {
  evaluateTryoutAttempt,
  generateTryoutQuestions,
  isTryoutMode,
} from "@/modules/tryout/domain/tryout-engine";
import {
  getAttemptRankSummary,
  saveTryoutAttemptToCloud,
} from "@/modules/tryout/infrastructure/tryout-attempts-repository.server";

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
    flagged?: unknown;
    durationUsedSec?: unknown;
    durationLimitSec?: unknown;
    attemptId?: unknown;
    presetId?: unknown;
    packageLabel?: unknown;
    saveToCloud?: unknown;
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

  const sanitizedFlagged: Record<string, boolean> = {};
  if (input.flagged && typeof input.flagged === "object") {
    for (const [qId, val] of Object.entries(input.flagged)) {
      if (val === true) {
        sanitizedFlagged[qId] = true;
      }
    }
  }

  const durationUsedSec =
    typeof input.durationUsedSec === "number" && Number.isFinite(input.durationUsedSec)
      ? Math.max(0, Math.round(input.durationUsedSec))
      : 0;

  const modeConfig = TRYOUT_MODE_CONFIGS[input.mode];
  const durationLimitSec =
    typeof input.durationLimitSec === "number" && input.durationLimitSec > 0
      ? Math.round(input.durationLimitSec)
      : modeConfig.durationSec;

  const normalizedSeed = rawSeed >>> 0;
  const fullItems = generateTryoutQuestions(input.mode, normalizedSeed);
  const evaluation = evaluateTryoutAttempt(
    fullItems,
    input.mode,
    sanitizedAnswers,
    durationUsedSec,
  );

  const shouldSave = input.saveToCloud === true && typeof input.attemptId === "string" && input.attemptId.trim().length > 0;
  const presetId =
    typeof input.presetId === "string" && input.presetId.trim()
      ? input.presetId.trim().slice(0, 64)
      : input.mode === "mini"
        ? "mini-cat-cepat"
        : "paket-acak-resmi";
  const packageLabel =
    typeof input.packageLabel === "string" && input.packageLabel.trim()
      ? input.packageLabel.trim().slice(0, 120)
      : modeConfig.label;

  let cloudSynced = false;
  let rankSummary: TryoutAttemptRankSummary | null = null;

  if (shouldSave) {
    const user = await getAuthenticatedUser();
    if (user) {
      const saveRes = await saveTryoutAttemptToCloud({
        userId: user.id,
        clientAttemptId: (input.attemptId as string).trim().slice(0, 120),
        mode: input.mode,
        presetId,
        packageLabel,
        seed: normalizedSeed,
        durationLimitSec,
        evaluation,
        answers: sanitizedAnswers,
        flagged: sanitizedFlagged,
      });
      cloudSynced = saveRes.saved;
      if (saveRes.saved) {
        const scope = resolveLeaderboardScopeForPreset(presetId, input.mode);
        rankSummary = await getAttemptRankSummary(scope);
      }
    }
  } else {
    // Saat membuka ulang riwayat untuk review, ambil posisi ranking terkini bila login
    const user = await getAuthenticatedUser();
    if (user) {
      const scope = resolveLeaderboardScopeForPreset(presetId, input.mode);
      rankSummary = await getAttemptRankSummary(scope);
    }
  }

  return NextResponse.json({
    mode: input.mode,
    seed: normalizedSeed,
    evaluation,
    items: fullItems,
    cloudSynced,
    rankSummary,
  });
}
