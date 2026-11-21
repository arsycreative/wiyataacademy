// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  evaluateSprintAttempt,
  generateSprintPacket,
} from "@/modules/tryout/domain/sprint-engine";
import { stripTryoutAnswersForExam } from "@/modules/tryout/domain/tryout-engine";
import { clearSprintHistory } from "@/modules/tryout/infrastructure/sprint-storage";
import { SprintDrillExperience } from "./sprint-drill-experience";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("SprintDrillExperience", () => {
  beforeEach(() => {
    window.localStorage.clear();
    clearSprintHistory();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("launches a 10-minute Sprint via server APIs and displays speed audit & pembahasan after submit", async () => {
    const packet = generateSprintPacket(
      {
        subtest: "TWK",
        patternId: null,
        durationMinutes: 10,
        difficultyFilter: "HOTS",
      },
      20261199,
    );
    const examItems = stripTryoutAnswersForExam(packet.items);

    const fetchMock = vi.spyOn(globalThis, "fetch").mockImplementation(async (url, init) => {
      const endpoint = typeof url === "string" ? url : url.toString();
      const body = init?.body ? JSON.parse(init.body as string) : {};

      if (endpoint === "/api/sprint/start") {
        return new Response(
          JSON.stringify({
            seed: 20261199,
            packageLabel: packet.packageLabel,
            config: packet.config,
            durationSec: packet.durationSec,
            targetSecondsPerQuestion: packet.targetSecondsPerQuestion,
            items: examItems,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }

      if (endpoint === "/api/sprint/submit") {
        const evaluation = evaluateSprintAttempt({
          packageLabel: packet.packageLabel,
          subtest: packet.config.subtest,
          patternId: packet.config.patternId,
          difficultyFilter: packet.config.difficultyFilter,
          items: packet.items,
          answers: body.answers ?? {},
          durationUsedSec: body.durationUsedSec ?? 60,
          durationLimitSec: packet.durationSec,
          targetSecondsPerQuestion: packet.targetSecondsPerQuestion,
          questionTimesSec: body.questionTimesSec ?? {},
        });
        return new Response(
          JSON.stringify({
            seed: 20261199,
            evaluation,
            items: packet.items,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }

      return new Response("Not Found", { status: 404 });
    });

    render(<SprintDrillExperience />);

    expect(
      screen.getByRole("heading", { name: /Sprint Drill SKD Berbatas Waktu/i }),
    ).toBeTruthy();

    const startButtons = screen.getAllByRole("button", {
      name: /Mulai Sprint \(10 Menit\)/i,
    });
    fireEvent.click(startButtons[0]);

    await waitFor(() => {
      expect(screen.getByText(/Soal 1 \/ 15/i)).toBeTruthy();
    });

    const firstOptionBtn = screen
      .getAllByRole("button")
      .find((btn) => btn.textContent?.trim().startsWith("A"));
    expect(firstOptionBtn).toBeTruthy();
    fireEvent.click(firstOptionBtn!);

    fireEvent.click(screen.getByRole("button", { name: /^Selesai$/i }));
    fireEvent.click(screen.getByRole("button", { name: /Ya, Nilai Sekarang/i }));

    await waitFor(() => {
      expect(screen.getByText(/3 Soal Paling Menyita Waktu/i)).toBeTruthy();
      expect(screen.getByText(/Pembahasan Lengkap/i)).toBeTruthy();
    });

    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});

