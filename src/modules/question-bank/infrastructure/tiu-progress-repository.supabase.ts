import "server-only";

import type {
  TiuProgressLoadResult,
  TiuProgressRepository,
  TiuProgressSaveResult,
} from "@/modules/question-bank/application/ports";
import {
  sanitizePracticeProgress,
  type SanitizedPracticeProgress,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { createSupabaseServerClient } from "@/shared/supabase/server";

type CloudProgressRow = {
  selected_answers: unknown;
  flagged_questions: unknown;
  pattern_seeds: unknown;
  question_seeds: unknown;
  view_mode: unknown;
  last_pattern: unknown;
};

function isMissingProgressTableError(
  error: { code?: string; message?: string } | null,
): boolean {
  if (!error) return false;
  return (
    error.code === "42P01" ||
    error.code === "42703" ||
    error.code === "PGRST204" ||
    error.code === "PGRST205" ||
    Boolean(error.message?.toLowerCase().includes("tiu_practice_progress"))
  );
}

export function createSupabaseTiuProgressRepository(): TiuProgressRepository {
  return {
    async findByUserId(userId: string): Promise<TiuProgressLoadResult> {
      const supabase = await createSupabaseServerClient();
      if (!supabase) {
        return {
          data: null,
          schemaMissing: false,
          error: "Konfigurasi Supabase belum tersedia.",
        };
      }

      const { data, error } = await supabase
        .from("tiu_practice_progress")
        .select(
          "selected_answers, flagged_questions, pattern_seeds, question_seeds, view_mode, last_pattern",
        )
        .eq("user_id", userId)
        .maybeSingle<CloudProgressRow>();

      if (error) {
        return {
          data: null,
          schemaMissing: isMissingProgressTableError(error),
          error: error.message,
        };
      }

      if (!data) {
        return { data: null, schemaMissing: false, error: null };
      }

      return {
        data: sanitizePracticeProgress({
          selectedAnswers: data.selected_answers,
          flaggedQuestions: data.flagged_questions,
          patternSeeds: data.pattern_seeds,
          questionSeeds: data.question_seeds,
          viewMode: data.view_mode,
          lastPattern: data.last_pattern,
        }),
        schemaMissing: false,
        error: null,
      };
    },

    async upsert(
      userId: string,
      progress: SanitizedPracticeProgress,
    ): Promise<TiuProgressSaveResult> {
      const supabase = await createSupabaseServerClient();
      if (!supabase) {
        return {
          ok: false,
          schemaMissing: false,
          error: "Konfigurasi Supabase belum tersedia.",
        };
      }

      const { error } = await supabase.from("tiu_practice_progress").upsert(
        {
          user_id: userId,
          selected_answers: progress.selectedAnswers,
          flagged_questions: progress.flaggedQuestions,
          pattern_seeds: progress.patternSeeds,
          question_seeds: progress.questionSeeds,
          view_mode: progress.viewMode,
          last_pattern: progress.lastPattern,
        },
        { onConflict: "user_id" },
      );

      if (error) {
        return {
          ok: false,
          schemaMissing: isMissingProgressTableError(error),
          error: error.message,
        };
      }

      return { ok: true, schemaMissing: false, error: null };
    },
  };
}

