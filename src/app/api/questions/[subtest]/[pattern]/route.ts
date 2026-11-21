import { NextResponse, type NextRequest } from "next/server";

import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import {
  isTiuPattern,
  isTkpPattern,
  isTwkPattern,
} from "@/modules/question-bank/domain/shuffle-core";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ subtest: string; pattern: string }> },
) {
  const { subtest, pattern } = await context.params;
  const normalizedSubtest = subtest.toLowerCase();

  if (normalizedSubtest === "tiu" && isTiuPattern(pattern)) {
    return NextResponse.json(
      { subtest: "TIU", pattern, questions: TIU_QUESTION_BANKS[pattern] },
      { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } },
    );
  }

  if (normalizedSubtest === "twk" && isTwkPattern(pattern)) {
    return NextResponse.json(
      { subtest: "TWK", pattern, questions: TWK_QUESTION_BANKS[pattern] },
      { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } },
    );
  }

  if (normalizedSubtest === "tkp" && isTkpPattern(pattern)) {
    return NextResponse.json(
      { subtest: "TKP", pattern, questions: TKP_QUESTION_BANKS[pattern] },
      { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } },
    );
  }

  return NextResponse.json(
    { error: "Subtes atau pola soal tidak ditemukan." },
    { status: 404 },
  );
}

