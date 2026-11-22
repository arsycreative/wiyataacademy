import type { PracticePatternId, QuestionSubtest } from "@/modules/question-bank/domain/question";
import type { ProductId } from "./products";

/**
 * Pola soal gratis (Trial) yang dapat diakses tanpa langganan aktif.
 */
export const FREE_QUESTION_PATTERNS: Record<QuestionSubtest, readonly PracticePatternId[]> = {
  TIU: ["sinonim-antonim-akronim"],
  TWK: ["nasionalisme"],
  TKP: ["pelayanan-publik"],
};

export interface UserEntitlements {
  isAuthenticated: boolean;
  isAdmin: boolean;
  activeProductIds: ProductId[];
  hasFullQuestionBank: boolean;
  hasOfficialTryout: boolean;
}

export function isQuestionPatternFree(
  subtest: QuestionSubtest,
  pattern: string,
): boolean {
  const freeList = FREE_QUESTION_PATTERNS[subtest];
  return (freeList as readonly string[]).includes(pattern);
}

/**
 * Menentukan hak akses fitur pengguna berdasarkan produk aktif dan role admin.
 */
export function resolveUserEntitlements(options: {
  isAuthenticated: boolean;
  isAdmin: boolean;
  activeProductIds: readonly string[];
}): UserEntitlements {
  const normalizedIds = options.activeProductIds.filter(
    (id): id is ProductId =>
      id === "skd-intensif" || id === "skd-premium" || id === "tryout-bundle",
  );

  const hasIntensifOrPremium =
    normalizedIds.includes("skd-intensif") ||
    normalizedIds.includes("skd-premium");
  const hasTryoutBundle = normalizedIds.includes("tryout-bundle");

  return {
    isAuthenticated: options.isAuthenticated,
    isAdmin: options.isAdmin,
    activeProductIds: normalizedIds,
    hasFullQuestionBank: options.isAdmin || hasIntensifOrPremium,
    hasOfficialTryout:
      options.isAdmin || hasIntensifOrPremium || hasTryoutBundle,
  };
}

