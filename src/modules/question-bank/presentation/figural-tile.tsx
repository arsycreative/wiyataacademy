"use client";

import { useId } from "react";

export type FiguralSpec = {
  shape?: string;
  rot?: number;
  fill?: string;
  inner?: string;
  corner?: string;
  dots?: number;
  label?: string;
};

export type FiguralDotPoint = {
  cx: number;
  cy: number;
  r: number;
};

export type FiguralDotLayout = {
  points: FiguralDotPoint[];
  shapeScale: number;
};

/**
 * Parses a `[FIG:key=val|...]` attribute block into a typed figural specification.
 */
export function parseFiguralToken(tokenBody: string): FiguralSpec {
  const spec: FiguralSpec = {};
  for (const part of tokenBody.split("|")) {
    const [rawKey, rawVal] = part.split("=");
    if (!rawKey) continue;
    const key = rawKey.trim();
    const val = (rawVal ?? "").trim();
    if (key === "shape") spec.shape = val;
    else if (key === "rot") spec.rot = Number(val) || 0;
    else if (key === "fill") spec.fill = val;
    else if (key === "inner") spec.inner = val;
    else if (key === "corner") spec.corner = val;
    else if (key === "dots") spec.dots = Number(val) || 0;
    else if (key === "label") spec.label = val;
  }
  return spec;
}

/**
 * Computes non-overlapping bottom-strip dot positions and shape scale factor
 * so 1..5 dots render in a single row and >=6 dots wrap cleanly into multi-row groups.
 */
export function computeFiguralDotLayout(rawDots: number = 0): FiguralDotLayout {
  const count = Number.isFinite(rawDots) ? Math.max(0, Math.floor(rawDots)) : 0;
  if (count === 0) {
    return { points: [], shapeScale: 1 };
  }

  if (count <= 5) {
    const spacing = 8;
    const startX = 36 - ((count - 1) * spacing) / 2;
    const points = Array.from({ length: count }, (_, idx) => ({
      cx: startX + idx * spacing,
      cy: 64,
      r: 2.3,
    }));
    return { points, shapeScale: 1 };
  }

  if (count <= 12) {
    const rowCounts = [Math.ceil(count / 2), Math.floor(count / 2)];
    const rowYs = [59.5, 65.5];
    const spacing = 6.5;
    const points: FiguralDotPoint[] = [];

    rowCounts.forEach((rowLen, rowIdx) => {
      const startX = 36 - ((rowLen - 1) * spacing) / 2;
      for (let i = 0; i < rowLen; i++) {
        points.push({ cx: startX + i * spacing, cy: rowYs[rowIdx], r: 1.9 });
      }
    });

    return { points, shapeScale: 0.88 };
  }

  // Dynamic compact grid fallback so counts > 12 never drop dots
  const rows = Math.ceil(count / 6);
  const cols = Math.ceil(count / rows);
  const spacing = Math.min(5.5, 34 / Math.max(1, cols - 1));
  const rowStep = Math.min(4.8, 12 / Math.max(1, rows - 1));
  const r = Math.min(1.6, spacing * 0.28, rowStep * 0.34);
  const topY = 67 - (rows - 1) * rowStep;
  const points: FiguralDotPoint[] = [];

  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    const remaining = count - points.length;
    const rowLen = Math.min(cols, remaining);
    const startX = 36 - ((rowLen - 1) * spacing) / 2;
    const cy = topY + rowIdx * rowStep;
    for (let i = 0; i < rowLen; i++) {
      points.push({ cx: startX + i * spacing, cy, r });
    }
  }

  return { points, shapeScale: 0.82 };
}

const CORNER_COORDS: Record<string, [number, number]> = {
  NW: [10, 10],
  NE: [62, 10],
  SE: [62, 62],
  SW: [10, 62],
};

/**
 * Renders a 72x72 SVG tile representing a Figural TIU item or placeholder question mark.
 */
export function FiguralTile({ spec, size = 72 }: { spec: FiguralSpec; size?: number }) {
  const uid = useId().replace(/:/g, "");
  const stripeId = `stripe-${uid}`;
  const clipLeftId = `clip-l-${uid}`;
  const clipRightId = `clip-r-${uid}`;

  if (spec.shape === "question") {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <span
          style={{ width: size, height: size }}
          className="flex items-center justify-center rounded-xl border-2 border-dashed border-blue-400 bg-blue-50/70 text-2xl font-bold text-blue-700"
        >
          ?
        </span>
        {spec.label && (
          <span className="text-[10px] font-semibold text-slate-500">{spec.label}</span>
        )}
      </span>
    );
  }

  const rot = spec.rot ?? 0;
  const fillMode = spec.fill ?? "white";
  const mainFill =
    fillMode === "black"
      ? "#0f172a"
      : fillMode === "striped"
        ? `url(#${stripeId})`
        : "#ffffff";

  const renderShapePath = (fillColor: string, clipAttr?: string) => {
    const common = {
      fill: fillColor,
      stroke: "#0f172a",
      strokeWidth: 2.2,
      strokeLinejoin: "round" as const,
      clipPath: clipAttr,
    };

    switch (spec.shape) {
      case "triangle":
        return <polygon points="36,15 55,51 17,51" {...common} />;
      case "square":
        return <rect x="19" y="19" width="34" height="34" rx="2" {...common} />;
      case "diamond":
        return <polygon points="36,15 57,36 36,57 15,36" {...common} />;
      case "pentagon":
        return <polygon points="36,15 56,30 48,53 24,53 16,30" {...common} />;
      case "hexagon":
        return <polygon points="36,15 54,25 54,47 36,57 18,47 18,25" {...common} />;
      case "circle":
        return <circle cx="36" cy="36" r="19" {...common} />;
      case "lshape":
        return (
          <polygon points="21,17 33,17 33,41 51,41 51,53 21,53" {...common} />
        );
      case "tshape":
        return (
          <polygon
            points="18,19 54,19 54,31 42,31 42,53 30,53 30,31 18,31"
            {...common}
          />
        );
      case "arrow":
      default:
        return (
          <polygon
            points="36,14 53,33 43,33 43,55 29,55 29,33 19,33"
            {...common}
          />
        );
    }
  };

  const cornerPt = spec.corner ? CORNER_COORDS[spec.corner] : undefined;
  const innerStroke = fillMode === "black" ? "#ffffff" : "#0f172a";
  const { points: dotPoints, shapeScale } = computeFiguralDotLayout(spec.dots ?? 0);
  const shapeGroupTransform =
    shapeScale < 1
      ? `translate(36 14) scale(${shapeScale}) translate(-36 -14)`
      : undefined;

  return (
    <span className="inline-flex flex-col items-center gap-1">
      <svg
        width={size}
        height={size}
        viewBox="0 0 72 72"
        className="shrink-0 rounded-xl border border-slate-300 bg-white shadow-2xs"
        data-dots={dotPoints.length}
        aria-hidden
      >
        <defs>
          <pattern
            id={stripeId}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="#0f172a" strokeWidth="2.2" />
          </pattern>
          <clipPath id={clipLeftId}>
            <rect x="0" y="0" width="36" height="72" />
          </clipPath>
          <clipPath id={clipRightId}>
            <rect x="36" y="0" width="36" height="72" />
          </clipPath>
        </defs>

        <g transform={shapeGroupTransform}>
          <g transform={`rotate(${rot} 36 36)`}>
            {fillMode === "half-l" || fillMode === "half-r" ? (
              <>
                {renderShapePath("#ffffff")}
                {renderShapePath(
                  "#0f172a",
                  `url(#${fillMode === "half-l" ? clipLeftId : clipRightId})`,
                )}
                {renderShapePath("none")}
              </>
            ) : (
              renderShapePath(mainFill)
            )}
          </g>

          {spec.inner === "dot" && (
            <circle cx="36" cy="37" r="4" fill={innerStroke} />
          )}
          {spec.inner === "circle" && (
            <circle
              cx="36"
              cy="37"
              r="5.5"
              fill="none"
              stroke={innerStroke}
              strokeWidth="2"
            />
          )}
          {spec.inner === "plus" && (
            <g stroke={innerStroke} strokeWidth="2.2" strokeLinecap="round">
              <line x1="36" y1="31" x2="36" y2="43" />
              <line x1="30" y1="37" x2="42" y2="37" />
            </g>
          )}
          {spec.inner === "cross" && (
            <g stroke={innerStroke} strokeWidth="2.2" strokeLinecap="round">
              <line x1="31" y1="32" x2="41" y2="42" />
              <line x1="41" y1="32" x2="31" y2="42" />
            </g>
          )}
        </g>

        {cornerPt && (
          <circle
            cx={cornerPt[0]}
            cy={cornerPt[1]}
            r="4"
            fill="#2563eb"
            data-figural-corner={spec.corner}
          />
        )}

        {dotPoints.map((pt, idx) => (
          <circle
            key={idx}
            cx={pt.cx}
            cy={pt.cy}
            r={pt.r}
            fill="#0f172a"
            data-figural-dot="true"
          />
        ))}
      </svg>
      {spec.label && (
        <span className="text-[10px] font-semibold text-slate-500">{spec.label}</span>
      )}
    </span>
  );
}

