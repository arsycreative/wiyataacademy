import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { SkdLearningPathView } from "./skd-learning-path-view";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  cleanup();
});

describe("SkdLearningPathView", () => {
  it("renders all 5 interactive SKD roadmap stages with clickable links to tryout and subtest patterns", () => {
    render(<SkdLearningPathView initialCloudProgress={null} />);

    expect(screen.getByText("Roadmap Belajar SKD CPNS (5 Tahap)")).toBeTruthy();
    expect(screen.getAllByText("Diagnostik Awal & Pengenalan CAT")).toHaveLength(2);
    expect(screen.getByText("Penguasaan TWK (5 Pilar Kebangsaan)")).toBeTruthy();
    expect(screen.getByText("Penguasaan TIU (9 Pola Verbal, Numerik & Figural)")).toBeTruthy();
    expect(screen.getByText("Penguasaan TKP (6 Aspek Strategi Skor 5)")).toBeTruthy();
    expect(screen.getByText("Simulasi Tryout CAT Resmi & Tembus Passing Grade")).toBeTruthy();

    // Stage 2 (TWK) is expanded by default and links directly to Nasionalisme pillar
    const nasionalismeLink = screen.getByRole("link", { name: /Nasionalisme/i });
    expect(nasionalismeLink.getAttribute("href")).toBe("/latihan/twk?pattern=nasionalisme");

    // Expand Stage 3 (TIU) and verify Figural pattern link appears
    const expandTiuBtn = screen.getByRole("button", { name: /Lihat 9 Modul/i });
    fireEvent.click(expandTiuBtn);
    const figuralLink = screen.getByRole("link", { name: /Figural/i });
    expect(figuralLink.getAttribute("href")).toBe("/latihan/tiu?pattern=figural");
  });
});

