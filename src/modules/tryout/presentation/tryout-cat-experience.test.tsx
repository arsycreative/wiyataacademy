import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { OptionKey } from "@/modules/question-bank/domain/question";
import {
  evaluateTryoutAttempt,
  generateTryoutQuestions,
  stripTryoutAnswersForExam,
  type TryoutMode,
} from "@/modules/tryout/domain/tryout-engine";
import { readTryoutHistory } from "@/modules/tryout/infrastructure/tryout-storage";
import { TryoutCatExperience } from "./tryout-cat-experience";

const originalFetch = globalThis.fetch;

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = vi.fn();

  globalThis.fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input.toString();
    const body = init?.body ? (JSON.parse(String(init.body)) as Record<string, unknown>) : {};

    if (url.endsWith("/api/tryout/start")) {
      const mode = body.mode as TryoutMode;
      const seed = Number(body.seed);
      const items = stripTryoutAnswersForExam(generateTryoutQuestions(mode, seed));
      return new Response(JSON.stringify({ mode, seed, items }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.endsWith("/api/tryout/submit")) {
      const mode = body.mode as TryoutMode;
      const seed = Number(body.seed);
      const answers = (body.answers ?? {}) as Record<string, OptionKey>;
      const durationUsedSec = Number(body.durationUsedSec ?? 0);
      const items = generateTryoutQuestions(mode, seed);
      const evaluation = evaluateTryoutAttempt(items, mode, answers, durationUsedSec);
      return new Response(JSON.stringify({ mode, seed, evaluation, items }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  }) as typeof fetch;
});

afterEach(() => {
  cleanup();
  globalThis.fetch = originalFetch;
});

describe("TryoutCatExperience", () => {
  it("runs a full server-backed CAT tryout flow (stripped exam payload -> server grading & history)", async () => {
    render(<TryoutCatExperience />);

    expect(screen.getByText("Tryout CAT SKD Resmi")).toBeTruthy();
    expect(screen.getByText("Paket Tryout Resmi 01")).toBeTruthy();
    expect(screen.getByText("Mini Tryout CAT Cepat (35 Soal)")).toBeTruthy();

    const startButtons = screen.getAllByRole("button", { name: /Mulai Simulasi/i });
    expect(startButtons).toHaveLength(5);
    fireEvent.click(startButtons[4]);

    // Wait for /api/tryout/start response to render active exam screen
    await waitFor(() => {
      expect(screen.getByText("Soal 1 / 35")).toBeTruthy();
    });
    expect(screen.queryByText("Pembahasan")).toBeNull();

    // Select option A and move to question 2
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(5);
    fireEvent.click(radios[0]);
    expect(radios[0].getAttribute("aria-checked")).toBe("true");

    fireEvent.click(screen.getByRole("button", { name: /Simpan & Lanjut/i }));
    expect(screen.getByText("Soal 2 / 35")).toBeTruthy();

    // Open confirmation modal and submit to /api/tryout/submit
    fireEvent.click(screen.getAllByRole("button", { name: /Selesai/i })[0]);
    expect(screen.getByText("Kumpulkan Jawaban Tryout?")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Ya, Kumpulkan Sekarang/i }));

    await waitFor(() => {
      expect(screen.getByText(/Rapor Mini Tryout CAT Cepat/i)).toBeTruthy();
    });
    expect(screen.getByText(/Pembahasan Lengkap/i)).toBeTruthy();

    const history = readTryoutHistory();
    expect(history).toHaveLength(1);
    expect(history[0].mode).toBe("mini");
    expect(history[0].subtests.TWK.answeredCount).toBe(1);
  });

  it("locks official 110-question presets when hasOfficialAccess is false while keeping mini tryout free", () => {
    render(<TryoutCatExperience hasOfficialAccess={false} />);

    // Only the 1 mini tryout has "Mulai Simulasi" button; 4 official presets show "Buka Akses Paket" link
    expect(screen.getAllByRole("button", { name: /Mulai Simulasi/i })).toHaveLength(1);
    expect(screen.getAllByRole("link", { name: /Buka Akses Paket/i })).toHaveLength(4);
  });
});
