import { NextResponse, type NextRequest } from "next/server";

import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import type { OptionKey } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { TRYOUT_MODE_CONFIGS } from "@/modules/tryout/domain/tryout-config";
import {
  evaluateTryoutAttempt,
  generateTryoutQuestions,
  isTryoutMode,
} from "@/modules/tryout/domain/tryout-engine";
import {
  deleteUserTryoutAttemptFromCloud,
  listUserTryoutAttemptsFromCloud,
  saveTryoutAttemptToCloud,
} from "@/modules/tryout/infrastructure/tryout-attempts-repository.server";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ authenticated: false, records: [], schemaMissing: false });
  }

  const result = await listUserTryoutAttemptsFromCloud(user.id, 30);
  return NextResponse.json({
    authenticated: true,
    records: result.records,
    schemaMissing: result.schemaMissing,
  });
}

/**
 * Menyinkronkan riwayat tryout lokal (mis. yang dikerjakan sebelum login / lintas perangkat)
 * ke cloud dengan penilaian ulang di sisi server (anti-manipulasi skor).
 */
export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Autentikasi diperlukan." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON tidak valid." }, { status: 400 });
  }

  const rawAttempts = Array.isArray((body as { attempts?: unknown })?.attempts)
    ? ((body as { attempts: unknown[] }).attempts.slice(0, 15))
    : [];

  let syncedCount = 0;
  let schemaMissing = false;

  for (const item of rawAttempts) {
    if (!item || typeof item !== "object") continue;
    const raw = item as Record<string, unknown>;
    if (!isTryoutMode(raw.mode)) continue;
    const attemptId = typeof raw.id === "string" ? raw.id.trim() : "";
    const rawSeed = typeof raw.seed === "number" ? raw.seed : Number(raw.seed);
    if (!attemptId || !Number.isFinite(rawSeed) || rawSeed <= 0) continue;

    const answers: Record<string, OptionKey> = {};
    if (raw.answers && typeof raw.answers === "object") {
      for (const [k, v] of Object.entries(raw.answers)) {
        if (isOptionKey(v)) answers[k] = v;
      }
    }

    const flagged: Record<string, boolean> = {};
    if (raw.flagged && typeof raw.flagged === "object") {
      for (const [k, v] of Object.entries(raw.flagged)) {
        if (v === true) flagged[k] = true;
      }
    }

    const cfg = TRYOUT_MODE_CONFIGS[raw.mode];
    const durationUsedSec =
      typeof raw.durationUsedSec === "number" && Number.isFinite(raw.durationUsedSec)
        ? Math.max(0, Math.min(cfg.durationSec, Math.round(raw.durationUsedSec)))
        : 0;
    const durationLimitSec =
      typeof raw.durationLimitSec === "number" && raw.durationLimitSec > 0
        ? Math.round(raw.durationLimitSec)
        : cfg.durationSec;

    const normalizedSeed = rawSeed >>> 0;
    const fullItems = generateTryoutQuestions(raw.mode, normalizedSeed);
    const evaluation = evaluateTryoutAttempt(fullItems, raw.mode, answers, durationUsedSec);

    const completedAtIso =
      typeof raw.completedAt === "string" && !Number.isNaN(Date.parse(raw.completedAt))
        ? new Date(raw.completedAt).toISOString()
        : new Date().toISOString();

    const presetId =
      typeof raw.presetId === "string" && raw.presetId.trim()
        ? raw.presetId.trim().slice(0, 64)
        : raw.mode === "mini"
          ? "mini-cat-cepat"
          : "paket-acak-resmi";

    const packageLabel =
      typeof raw.packageLabel === "string" && raw.packageLabel.trim()
        ? raw.packageLabel.trim().slice(0, 120)
        : cfg.label;

    const res = await saveTryoutAttemptToCloud({
      userId: user.id,
      clientAttemptId: attemptId.slice(0, 120),
      mode: raw.mode,
      presetId,
      packageLabel,
      seed: normalizedSeed,
      durationLimitSec,
      evaluation,
      answers,
      flagged,
      completedAtIso,
    });

    if (res.schemaMissing) {
      schemaMissing = true;
      break;
    }
    if (res.saved) {
      syncedCount += 1;
    }
  }

  const latest = await listUserTryoutAttemptsFromCloud(user.id, 30);
  return NextResponse.json({
    syncedCount,
    schemaMissing: schemaMissing || latest.schemaMissing,
    records: latest.records,
  });
}

export async function DELETE(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Autentikasi diperlukan." }, { status: 401 });
  }

  const id = request.nextUrl.searchParams.get("id")?.trim();
  if (!id) {
    return NextResponse.json({ error: "Parameter id wajib diisi." }, { status: 400 });
  }

  const res = await deleteUserTryoutAttemptFromCloud(user.id, id);
  return NextResponse.json(res);
}

