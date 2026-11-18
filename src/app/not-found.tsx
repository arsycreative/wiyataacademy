import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Halaman ini belum tersedia di fondasi akademi saat ini.
        </p>
        <Button asChild className="mt-6">
          <Link href={APP_ROUTES.home}>Kembali ke beranda</Link>
        </Button>
      </div>
    </main>
  );
}
