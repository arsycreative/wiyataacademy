"use client";

import { useCallback, useEffect, useState } from "react";

import type {
  PracticePatternId,
  Question,
  QuestionSubtest,
} from "@/modules/question-bank/domain/question";

type UsePatternQuestionsParams = {
  subtest: QuestionSubtest;
  activePattern: PracticePatternId;
  initialLoadedPattern: PracticePatternId;
  initialQuestions: readonly Question[];
};

/**
 * Menyediakan bank soal per pola secara on-demand:
 * pola awal langsung tersedia dari props SSR tanpa waterfall, sedangkan perpindahan pola
 * mengambil JSON pola terkait dari `/api/questions/[subtest]/[pattern]` lalu menyimpannya di cache memori.
 */
export function usePatternQuestions({
  subtest,
  activePattern,
  initialLoadedPattern,
  initialQuestions,
}: UsePatternQuestionsParams) {
  const [cache, setCache] = useState<Partial<Record<PracticePatternId, readonly Question[]>>>(() => ({
    [initialLoadedPattern]: initialQuestions,
  }));
  const [loadingPattern, setLoadingPattern] = useState<PracticePatternId | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [reloadNonce, setReloadNonce] = useState(0);

  const cachedQuestions = cache[activePattern];

  useEffect(() => {
    if (cachedQuestions !== undefined) {
      return;
    }

    const controller = new AbortController();
    const frame = window.requestAnimationFrame(() => {
      setLoadingPattern(activePattern);
      setErrorMessage(null);
    });

    fetch(`/api/questions/${subtest.toLowerCase()}/${encodeURIComponent(activePattern)}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = (await res.json()) as { questions?: Question[] };
        if (!Array.isArray(json.questions)) {
          throw new Error("Format soal tidak valid.");
        }
        setCache((prev) => ({
          ...prev,
          [activePattern]: json.questions!,
        }));
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
        setErrorMessage("Gagal memuat bank soal pola ini. Silakan coba lagi.");
      })
      .finally(() => {
        setLoadingPattern((curr) => (curr === activePattern ? null : curr));
      });

    return () => {
      window.cancelAnimationFrame(frame);
      controller.abort();
    };
  }, [subtest, activePattern, cachedQuestions, reloadNonce]);

  const retryLoad = useCallback(() => {
    setErrorMessage(null);
    setReloadNonce((n) => n + 1);
  }, []);

  const isLoading = cachedQuestions === undefined && (loadingPattern === activePattern || !errorMessage);

  return {
    questions: cachedQuestions ?? [],
    isLoading,
    errorMessage,
    retryLoad,
  };
}

