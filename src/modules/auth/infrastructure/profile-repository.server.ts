import "server-only";

import type { ProfileRepository } from "@/modules/auth/application/ports";
import {
  createSupabaseProfileRepository,
  getSupabaseAuthenticatedUser,
  updateSupabaseAuthDisplayName,
} from "./supabase-auth.server";

export function createProfileRepository(): ProfileRepository {
  return createSupabaseProfileRepository();
}

export async function getAuthenticatedUser() {
  return getSupabaseAuthenticatedUser();
}

export async function updateAuthenticatedDisplayName(fullName: string) {
  return updateSupabaseAuthDisplayName(fullName);
}

