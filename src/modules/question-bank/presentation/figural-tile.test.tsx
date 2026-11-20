import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { figuralQuestions } from "@/modules/question-bank/data/tiu";
import {
  computeFiguralDotLayout,
  FiguralTile,
  parseFiguralToken,
} from "./figural-tile";

afterEach(() => {
  cleanup();
});

describe("figural-tile", () => {
  it("parses figural token attributes including dot counts above 6", () => {
    const spec = parseFiguralToken(
      "shape=hexagon|rot=270|fill=half-l|inner=cross|corner=SW|dots=8|label=Asal",
    );
    expect(spec).toEqual({
      shape: "hexagon",
      rot: 270,
      fill: "half-l",
      inner: "cross",
      corner: "SW",
      dots: 8,
      label: "Asal",
    });
  });

  it("computes non-overlapping dot coordinates inside viewBox and clear of SW/SE corner dots for 1..15 dots", () => {
    const bottomCorners: ReadonlyArray<[number, number]> = [
      [10, 62],
      [62, 62],
    ];

    for (let count = 0; count <= 15; count++) {
      const { points, shapeScale } = computeFiguralDotLayout(count);
      expect(points).toHaveLength(count);

      // Maximum possible bottom extent of rotated main shapes (rotated square corner at 60.04 + 1.1 stroke)
      const maxShapeBottomY = 14 + shapeScale * (60.04 - 14) + shapeScale * 1.1;

      for (const pt of points) {
        expect(pt.cx - pt.r).toBeGreaterThanOrEqual(2);
        expect(pt.cx + pt.r).toBeLessThanOrEqual(70);
        expect(pt.cy + pt.r).toBeLessThanOrEqual(70);

        if (count >= 6) {
          expect(pt.cy - pt.r).toBeGreaterThan(maxShapeBottomY);
        }

        for (const [cornerX, cornerY] of bottomCorners) {
          const dist = Math.hypot(pt.cx - cornerX, pt.cy - cornerY);
          expect(dist).toBeGreaterThanOrEqual(pt.r + 4 + 1.2);
        }
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dist = Math.hypot(
            points[i].cx - points[j].cx,
            points[i].cy - points[j].cy,
          );
          expect(dist).toBeGreaterThanOrEqual(points[i].r + points[j].r + 1);
        }
      }
    }
  });

  it("renders exact SVG dot circles for counts 1..10 without clamping at 6", () => {
    for (const dots of [1, 4, 5, 6, 7, 8, 9, 10]) {
      const { container, unmount } = render(
        <FiguralTile
          spec={{
            shape: "pentagon",
            rot: 180,
            fill: "half-l",
            inner: "plus",
            corner: "SE",
            dots,
          }}
          size={64}
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("data-dots")).toBe(String(dots));
      expect(container.querySelectorAll('[data-figural-dot="true"]')).toHaveLength(dots);
      expect(container.querySelector('[data-figural-corner="SE"]')).not.toBeNull();

      unmount();
    }
  });

  it("renders every tiu-fig-147..150 prompt and option tile with matching 7..10 dots", () => {
    const targetQuestions = figuralQuestions.filter((q) =>
      ["tiu-fig-147", "tiu-fig-148", "tiu-fig-149", "tiu-fig-150"].includes(q.id),
    );
    expect(targetQuestions).toHaveLength(4);

    for (const q of targetQuestions) {
      const tokenMatches = [q.prompt, ...q.options.map((o) => o.text)].flatMap((text) =>
        Array.from(text.matchAll(/\[FIG:([^\]]+)\]/g), (m) => parseFiguralToken(m[1])),
      );

      for (const spec of tokenMatches) {
        if (spec.shape === "question") continue;
        const expectedDots = spec.dots ?? 0;
        expect(expectedDots).toBeGreaterThanOrEqual(7);

        const { container, unmount } = render(<FiguralTile spec={spec} size={64} />);
        expect(container.querySelectorAll('[data-figural-dot="true"]')).toHaveLength(
          expectedDots,
        );
        unmount();
      }
    }
  });

  it("renders question-mark placeholder tiles cleanly", () => {
    const { getByText } = render(
      <FiguralTile spec={{ shape: "question", label: "Target" }} />,
    );
    expect(getByText("?")).toBeTruthy();
    expect(getByText("Target")).toBeTruthy();
  });
});

