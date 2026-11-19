import { NextResponse, type NextRequest } from "next/server";

import {
  createProfileRepository,
  getAuthenticatedUser,
} from "@/modules/auth/infrastructure/profile-repository.server";
import { createTiuProgressRepository } from "@/modules/question-bank/infrastructure/tiu-progress-repository.server";
import { sanitizePracticeProgress } from "@/modules/question-bank/infrastructure/tiu-progress-sync";

export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const repo = createTiuProgressRepository();
  const result = await repo.findByUserId(user.id);

  return NextResponse.json({
    data: result.data,
    schemaMissing: result.schemaMissing,
    error: result.error,
  });
}

export async function PUT(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, schemaMissing: false, error: "Payload JSON tidak valid." },
      { status: 400 },
    );
  }

  const sanitized = sanitizePracticeProgress(body);

  // Pastikan baris profil portabel tersedia sebelum upsert progres (karena FK ke public.profiles)
  const profileRepo = createProfileRepository();
  const profileEnsure = await profileRepo.upsert({
    id: user.id,
    email: user.email,
    fullName: user.fullName || null,
    avatarUrl: user.avatarUrl,
  });

  if (profileEnsure.schemaMissing) {
    return NextResponse.json({
      ok: false,
      schemaMissing: true,
      error: profileEnsure.error,
    });
  }

  const progressRepo = createTiuProgressRepository();
  const result = await progressRepo.upsert(user.id, sanitized);

  return NextResponse.json(result, { status: result.error && !result.schemaMissing ? 500 : 200 });
}

