"use client";

import { cn } from "@/lib/utils";
import { FiguralTile, parseFiguralToken } from "./figural-tile";

/**
 * Renders question prompts supporting plain text, markdown pipe tables, and `[FIG:...]` rows.
 */
export function QuestionPrompt({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const lines = content.split("\n");
  const hasFigural = content.includes("[FIG:");
  const tableLines = lines.filter((line) => line.trim().startsWith("|"));

  if (hasFigural) {
    return (
      <div className={cn("mt-4 space-y-3 text-slate-950", className)}>
        {lines.map((line, idx) =>
          line.includes("[FIG:") ? (
            <FiguralSequenceRow key={idx} line={line} />
          ) : (
            <p key={idx} className="whitespace-pre-line text-base font-medium leading-7">
              {line}
            </p>
          ),
        )}
      </div>
    );
  }

  if (tableLines.length < 2) {
    return (
      <p
        className={cn(
          "mt-4 whitespace-pre-line text-base font-medium leading-7 text-slate-950",
          className,
        )}
      >
        {content}
      </p>
    );
  }

  const introLines: string[] = [];
  const outroLines: string[] = [];
  let seenTable = false;

  for (const line of lines) {
    if (line.trim().startsWith("|")) {
      seenTable = true;
    } else if (!seenTable) {
      introLines.push(line);
    } else {
      outroLines.push(line);
    }
  }

  const parseRow = (row: string) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());

  const headers = parseRow(tableLines[0]);
  const bodyRows = tableLines.slice(1).map(parseRow);

  return (
    <div className={cn("mt-4 space-y-3 text-slate-950", className)}>
      {introLines.length > 0 && (
        <p className="whitespace-pre-line text-base font-medium leading-7">
          {introLines.join("\n")}
        </p>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-800">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={`${header}-${idx}`}
                  className="border-b border-slate-200 px-3.5 py-2.5 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {bodyRows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-slate-50/80">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={cn(
                      "px-3.5 py-2 text-slate-700",
                      cellIdx === 0 && "font-medium text-slate-900",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {outroLines.length > 0 && (
        <p className="whitespace-pre-line text-base font-medium leading-7">
          {outroLines.join("\n")}
        </p>
      )}
    </div>
  );
}

/**
 * Renders option text or a figural SVG tile alongside its Indonesian caption.
 */
export function OptionContent({ text }: { text: string }) {
  const match = text.match(/^\[FIG:([^\]]+)\]\s*(.*)$/);
  if (!match) {
    return <>{text}</>;
  }
  const spec = parseFiguralToken(match[1]);
  const caption = match[2];
  return (
    <span className="flex flex-wrap items-center gap-3">
      <FiguralTile spec={spec} size={64} />
      {caption && <span className="text-xs text-slate-700 sm:text-sm">{caption}</span>}
    </span>
  );
}

export function FiguralSequenceRow({ line }: { line: string }) {
  const parts = line.split(/(\[FIG:[^\]]+\]|::|->)/g).filter((p) => p.trim().length > 0);

  return (
    <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
      {parts.map((part, idx) => {
        const trimmed = part.trim();
        const figMatch = trimmed.match(/^\[FIG:([^\]]+)\]$/);
        if (figMatch) {
          return <FiguralTile key={idx} spec={parseFiguralToken(figMatch[1])} size={76} />;
        }
        if (trimmed === "->") {
          return (
            <span key={idx} className="px-1 text-base font-bold text-blue-600" aria-hidden>
              →
            </span>
          );
        }
        if (trimmed === "::") {
          return (
            <span
              key={idx}
              className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800"
            >
              =
            </span>
          );
        }
        return (
          <span key={idx} className="text-xs font-medium text-slate-600">
            {trimmed}
          </span>
        );
      })}
    </div>
  );
}

