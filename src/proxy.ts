import type { NextRequest } from "next/server";

import { updateSupabaseSession } from "@/shared/supabase/middleware";

export async function proxy(request: NextRequest) {
  return updateSupabaseSession(request);
}

export const config = {
  matcher: [
    /*
     * Jalankan proxy pada semua rute halaman kecuali aset statis Next.js & file gambar.
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

