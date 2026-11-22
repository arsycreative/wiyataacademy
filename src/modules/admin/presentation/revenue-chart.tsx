"use client";

import { useState } from "react";
import { BarChart3 } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatIdr, type DailyRevenuePoint } from "@/modules/admin/domain/types";

interface RevenueChartProps {
  series: readonly DailyRevenuePoint[];
}

export function RevenueChart({ series }: RevenueChartProps) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const maxRevenue = Math.max(
    1,
    ...series.map((point) => point.revenue),
  );
  const total14Days = series.reduce((sum, p) => sum + p.revenue, 0);
  const totalPaid14Days = series.reduce((sum, p) => sum + p.paidCount, 0);

  const activePoint =
    series.find((p) => p.dateKey === hoveredKey) ?? series[series.length - 1];

  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-xs">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="size-4 text-blue-600" aria-hidden />
            <h2 className="text-sm font-bold text-slate-900">
              Tren Pendapatan Harian (14 Hari Terakhir)
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            Total 14 hari:{" "}
            <strong className="text-slate-800">{formatIdr(total14Days)}</strong>{" "}
            ({totalPaid14Days} transaksi lunas)
          </p>
        </div>

        {activePoint && (
          <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs">
            <span className="font-semibold text-blue-900">{activePoint.label}:</span>{" "}
            <span className="font-bold text-blue-700">
              {formatIdr(activePoint.revenue)}
            </span>{" "}
            <span className="text-slate-500">
              ({activePoint.paidCount} lunas)
            </span>
          </div>
        )}
      </div>

      {/* Bar chart area */}
      <div className="mt-5 flex h-44 items-end gap-1.5 sm:gap-2.5">
        {series.map((point) => {
          const pct = Math.round((point.revenue / maxRevenue) * 100);
          const barHeight = point.revenue > 0 ? Math.max(8, pct) : 4;
          const isHovered = hoveredKey === point.dateKey;

          return (
            <button
              key={point.dateKey}
              type="button"
              onMouseEnter={() => setHoveredKey(point.dateKey)}
              onFocus={() => setHoveredKey(point.dateKey)}
              aria-label={`${point.label}: ${formatIdr(point.revenue)} (${point.paidCount} transaksi)`}
              className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5 focus:outline-none"
            >
              <div className="flex w-full flex-1 items-end">
                <div
                  style={{ height: `${barHeight}%` }}
                  className={cn(
                    "w-full rounded-t-md transition-all duration-200",
                    point.revenue === 0
                      ? "bg-slate-100 group-hover:bg-slate-200"
                      : isHovered
                        ? "bg-blue-700 shadow-sm shadow-blue-500/30"
                        : "bg-blue-500/85 group-hover:bg-blue-600",
                  )}
                />
              </div>
              <span className="hidden text-[10px] font-medium text-slate-400 sm:block">
                {point.label.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

