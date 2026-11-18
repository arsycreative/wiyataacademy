"use client";

import { useToastStore, type ToastItem } from "@/shared/stores/toast-store";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex w-full max-w-sm flex-col gap-3 px-4 sm:px-0 pointer-events-none"
      role="live"
      aria-live="assertive"
    >
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

function ToastCard({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const [progress, setProgress] = useState(100);
  const duration = toast.duration ?? 4000;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [duration]);

  const icons = {
    success: <CheckCircle2 className="size-5 text-emerald-500 shrink-0" aria-hidden="true" />,
    error: <AlertCircle className="size-5 text-rose-500 shrink-0" aria-hidden="true" />,
    info: <Info className="size-5 text-blue-500 shrink-0" aria-hidden="true" />,
  };

  const borders = {
    success: "border-emerald-500/20 bg-emerald-50/90 dark:bg-emerald-950/20",
    error: "border-rose-500/20 bg-rose-50/90 dark:bg-rose-950/20",
    info: "border-blue-500/20 bg-blue-50/90 dark:bg-blue-950/20",
  };

  const progressColors = {
    success: "bg-emerald-500",
    error: "bg-rose-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border p-4 shadow-lg backdrop-blur-md transition-all duration-300",
        "animate-in slide-in-from-right-5 fade-in duration-300",
        borders[toast.type]
      )}
    >
      {icons[toast.type]}
      <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-200 pr-4 break-words">
        {toast.message}
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-0.5 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800/50 shrink-0"
        aria-label="Tutup notifikasi"
      >
        <X className="size-4" />
      </button>

      {/* Progress Bar indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/30">
        <div
          className={cn("h-full transition-all duration-[30ms] ease-linear", progressColors[toast.type])}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
