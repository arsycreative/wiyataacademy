import { NextResponse, type NextRequest } from "next/server";

import { summarizeAllProgress } from "@/modules/question-bank/domain/subtest-summary";
import { sanitizePracticeProgress } from "@/modules/question-bank/infrastructure/tiu-progress-sync";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Payload JSON progres tidak valid." },
      { status: 400 },
    );
  }

  const sanitized = sanitizePracticeProgress(body);
  const summaries = summarizeAllProgress(sanitized);

  return NextResponse.json(summaries);
}

