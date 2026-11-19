import { NextResponse, type NextRequest } from "next/server";

import { profileSchema } from "@/modules/auth/domain/auth-schema";
import {
  createProfileRepository,
  getAuthenticatedUser,
  updateAuthenticatedDisplayName,
} from "@/modules/auth/infrastructure/profile-repository.server";

export async function PATCH(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload JSON tidak valid." },
      { status: 400 },
    );
  }

  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message ?? "Data profil tidak valid.",
      },
      { status: 400 },
    );
  }

  const authUpdate = await updateAuthenticatedDisplayName(parsed.data.fullName);
  if (authUpdate.error) {
    return NextResponse.json(
      { ok: false, error: authUpdate.error },
      { status: 500 },
    );
  }

  const profileRepo = createProfileRepository();
  const profileSave = await profileRepo.upsert({
    id: user.id,
    email: user.email,
    fullName: parsed.data.fullName,
    avatarUrl: user.avatarUrl,
  });

  return NextResponse.json({
    ok: profileSave.ok || profileSave.schemaMissing,
    schemaMissing: profileSave.schemaMissing,
    fullName: parsed.data.fullName,
    error: profileSave.schemaMissing ? null : profileSave.error,
  });
}

