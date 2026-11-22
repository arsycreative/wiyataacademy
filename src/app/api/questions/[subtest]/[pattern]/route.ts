import { NextResponse, type NextRequest } from "next/server";

import { isQuestionPatternFree } from "@/modules/payment/domain/entitlements";
import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import type { QuestionSubtest } from "@/modules/question-bank/domain/question";
import {
  isTiuPattern,
  isTkpPattern,
  isTwkPattern,
} from "@/modules/question-bank/domain/shuffle-core";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ subtest: string; pattern: string }> },
) {
  const { subtest, pattern } = await context.params;
  const normalizedSubtest = subtest.toLowerCase();

  let upperSubtest: QuestionSubtest | null = null;
  let questions: unknown = null;

  if (normalizedSubtest === "tiu" && isTiuPattern(pattern)) {
    upperSubtest = "TIU";
    questions = TIU_QUESTION_BANKS[pattern];
  } else if (normalizedSubtest === "twk" && isTwkPattern(pattern)) {
    upperSubtest = "TWK";
    questions = TWK_QUESTION_BANKS[pattern];
  } else if (normalizedSubtest === "tkp" && isTkpPattern(pattern)) {
    upperSubtest = "TKP";
    questions = TKP_QUESTION_BANKS[pattern];
  }

  if (!upperSubtest || !questions) {
    return NextResponse.json(
      { error: "Subtes atau pola soal tidak ditemukan." },
      { status: 404 },
    );
  }

  const isFree = isQuestionPatternFree(upperSubtest, pattern);
  if (!isFree) {
    const entitlements = await getCurrentUserEntitlements();
    if (!entitlements.hasFullQuestionBank) {
      return NextResponse.json(
        {
          error:
            "Pola soal ini khusus untuk peserta Paket Intensif atau Premium SKD CPNS.",
          locked: true,
        },
        { status: 403, headers: { "Cache-Control": "private, no-store" } },
      );
    }
  }

  return NextResponse.json(
    { subtest: upperSubtest, pattern, questions },
    {
      headers: {
        "Cache-Control": isFree
          ? "public, max-age=3600, stale-while-revalidate=86400"
          : "private, no-store",
      },
    },
  );
}
