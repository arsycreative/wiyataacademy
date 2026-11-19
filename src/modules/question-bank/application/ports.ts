import type { SanitizedPracticeProgress } from "@/modules/question-bank/infrastructure/tiu-progress-sync";

export type TiuProgressLoadResult = {
  data: SanitizedPracticeProgress | null;
  schemaMissing: boolean;
  error: string | null;
};

export type TiuProgressSaveResult = {
  ok: boolean;
  schemaMissing: boolean;
  error: string | null;
};

export type TiuProgressRepository = {
  findByUserId(userId: string): Promise<TiuProgressLoadResult>;
  upsert(
    userId: string,
    progress: SanitizedPracticeProgress,
  ): Promise<TiuProgressSaveResult>;
};

