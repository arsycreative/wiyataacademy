"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Error aplikasi
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Terjadi kesalahan
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {error.digest
            ? `Referensi error: ${error.digest}`
            : "Permintaan tidak dapat diselesaikan."}
        </p>
        <Button type="button" className="mt-6" onClick={reset}>
          Coba lagi
        </Button>
      </div>
    </main>
  );
}
