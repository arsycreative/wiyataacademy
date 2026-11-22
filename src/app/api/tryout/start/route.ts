import { NextResponse, type NextRequest } from "next/server";

import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import {
  generateTryoutQuestions,
  isTryoutMode,
  stripTryoutAnswersForExam,
} from "@/modules/tryout/domain/tryout-engine";

export const dynamic = "force-dynamic";

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
  };

  if (!isTryoutMode(input.mode)) {
    return NextResponse.json({ error: "Mode tryout tidak valid." }, { status: 400 });
  }

  if (input.mode === "official") {
    const entitlements = await getCurrentUserEntitlements();
    if (!entitlements.hasOfficialTryout) {
      return NextResponse.json(
        {
          error:
            "Simulasi Tryout CAT Resmi 110 Soal khusus pemilik Paket Belajar atau Bundle Try Out.",
          locked: true,
        },
        { status: 403 },
      );
    }
  }

  const rawSeed = typeof input.seed === "number" ? input.seed : Number(input.seed);
  if (!Number.isFinite(rawSeed) || rawSeed <= 0) {
    return NextResponse.json({ error: "Seed paket tryout tidak valid." }, { status: 400 });
  }

  const normalizedSeed = rawSeed >>> 0;
  const fullItems = generateTryoutQuestions(input.mode, normalizedSeed);
  const examItems = stripTryoutAnswersForExam(fullItems);

  return NextResponse.json({
    mode: input.mode,
    seed: normalizedSeed,
    items: examItems,
  });
}

