import "server-only";

import type { TiuProgressRepository } from "@/modules/question-bank/application/ports";
import { createSupabaseTiuProgressRepository } from "./tiu-progress-repository.supabase";

export function createTiuProgressRepository(): TiuProgressRepository {
  return createSupabaseTiuProgressRepository();
}

