import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { readTryoutHistory } from "@/modules/tryout/infrastructure/tryout-storage";
import { TryoutCatExperience } from "./tryout-cat-experience";

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

describe("TryoutCatExperience", () => {
  it("runs a full CAT tryout flow from lobby to exam (without revealing keys) to graded result & history", () => {
    render(<TryoutCatExperience />);

    // Lobby displays official BKN passing grades and package options
    expect(screen.getByText("Tryout CAT SKD Resmi")).toBeTruthy();
    expect(screen.getByText("Paket Tryout Resmi 01")).toBeTruthy();
    expect(screen.getByText("Mini Tryout CAT Cepat (35 Soal)")).toBeTruthy();

    // Launch Mini Tryout (5th preset card button)
    const startButtons = screen.getAllByRole("button", { name: /Mulai Simulasi/i });
    expect(startButtons).toHaveLength(5);
    fireEvent.click(startButtons[4]);

    // Active CAT Exam view: shows question 1 / 35, hides Pembahasan during exam
    expect(screen.getByText("Soal 1 / 35")).toBeTruthy();
    expect(screen.queryByText("Pembahasan")).toBeNull();

    // Select option A and move to question 2
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(5);
    fireEvent.click(radios[0]);
    expect(radios[0].getAttribute("aria-checked")).toBe("true");

    fireEvent.click(screen.getByRole("button", { name: /Simpan & Lanjut/i }));
    expect(screen.getByText("Soal 2 / 35")).toBeTruthy();

    // Open confirmation modal and submit
    fireEvent.click(screen.getAllByRole("button", { name: /Selesai/i })[0]);
    expect(screen.getByText("Kumpulkan Jawaban Tryout?")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Ya, Kumpulkan Sekarang/i }));

    // Result screen renders passing-grade evaluation + Pembahasan + persists history
    expect(screen.getByText(/Rapor Mini Tryout CAT Cepat/i)).toBeTruthy();
    expect(screen.getByText(/Pembahasan Lengkap/i)).toBeTruthy();

    const history = readTryoutHistory();
    expect(history).toHaveLength(1);
    expect(history[0].mode).toBe("mini");
    expect(history[0].subtests.TWK.answeredCount).toBe(1);
  });
});

