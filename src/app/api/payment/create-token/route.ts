import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { snap, isMidtransConfigured } from "@/lib/midtrans";
import { getProduct } from "@/modules/payment/domain/products";
import {
  createOrder,
  hasActiveSubscription,
} from "@/modules/payment/infrastructure/order-repository";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    if (!isMidtransConfigured()) {
      return NextResponse.json(
        {
          error:
            "Integrasi Midtrans belum dikonfigurasi. Pastikan MIDTRANS_SERVER_KEY dan MIDTRANS_CLIENT_KEY telah diatur di environment variable.",
        },
        { status: 503 },
      );
    }
    // ── 1. Auth ────────────────────────────────────────────────────────────
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: (toSet) =>
            toSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            ),
        },
      },
    );

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── 2. Validasi body ───────────────────────────────────────────────────
    const body = await req.json() as { productId?: unknown };
    const productId = typeof body.productId === "string" ? body.productId : "";
    const product = getProduct(productId);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 400 });
    }

    // ── 3. Cek sudah beli belum ────────────────────────────────────────────
    const alreadyOwned = await hasActiveSubscription(user.id, productId);
    if (alreadyOwned) {
      return NextResponse.json(
        { error: "Kamu sudah memiliki akses ke produk ini." },
        { status: 409 },
      );
    }

    // ── 4. Buat order ID unik ──────────────────────────────────────────────
    const timestamp = Date.now();
    const orderId = `WA-${productId.toUpperCase()}-${user.id.slice(0, 8)}-${timestamp}`;

    // ── 5. Buat Snap Token via Midtrans ────────────────────────────────────
    const snapParams = {
      transaction_details: {
        order_id: orderId,
        gross_amount: product.price,
      },
      item_details: [
        {
          id: product.id,
          price: product.price,
          quantity: 1,
          name: product.name,
        },
      ],
      customer_details: {
        email: user.email ?? "",
        first_name:
          (user.user_metadata?.full_name as string | undefined)?.split(
            " ",
          )[0] ?? "User",
      },
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/payment/finish`,
        error: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/payment/error`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/payment/pending`,
      },
    };

    const snapResponse = await snap.createTransaction(snapParams);
    const { token, redirect_url } = snapResponse as {
      token: string;
      redirect_url: string;
    };

    // ── 6. Simpan order ke DB ──────────────────────────────────────────────
    await createOrder({
      user_id: user.id,
      order_id: orderId,
      product_id: product.id,
      product_name: product.name,
      amount: product.price,
      status: "pending",
      snap_token: token,
      snap_redirect_url: redirect_url,
      metadata: { user_email: user.email ?? "" },
    });

    return NextResponse.json({ token, redirectUrl: redirect_url, orderId });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal error";
    console.error("[/api/payment/create-token]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

