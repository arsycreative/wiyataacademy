-- Migration 003: Payment Orders for Midtrans integration
-- Jalankan di Supabase SQL Editor atau via supabase db push

CREATE TABLE IF NOT EXISTS public.orders (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         uuid        NOT NULL,
  order_id        text        UNIQUE NOT NULL,
  product_id      text        NOT NULL,
  product_name    text        NOT NULL,
  amount          integer     NOT NULL,
  status          text        NOT NULL DEFAULT 'pending'
                              CHECK (status IN ('pending', 'paid', 'failed', 'expired', 'cancelled', 'refunded')),
  payment_method  text,
  midtrans_transaction_id text,
  midtrans_status text,
  snap_token      text,
  snap_redirect_url text,
  paid_at         timestamptz,
  expired_at      timestamptz,
  metadata        jsonb       NOT NULL DEFAULT '{}'::jsonb,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Index untuk query user orders
CREATE INDEX IF NOT EXISTS orders_user_id_idx ON public.orders (user_id);
CREATE INDEX IF NOT EXISTS orders_order_id_idx ON public.orders (order_id);
CREATE INDEX IF NOT EXISTS orders_status_idx   ON public.orders (status);

-- Tabel subscriptions: track akses user setelah pembayaran berhasil
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid        NOT NULL,
  order_id     text        NOT NULL REFERENCES public.orders (order_id),
  product_id   text        NOT NULL,
  plan         text        NOT NULL DEFAULT 'lifetime',
  status       text        NOT NULL DEFAULT 'active'
                           CHECK (status IN ('active', 'expired', 'cancelled')),
  starts_at    timestamptz NOT NULL DEFAULT now(),
  expires_at   timestamptz,                    -- NULL = lifetime
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS subscriptions_user_product_idx
  ON public.subscriptions (user_id, product_id);

CREATE INDEX IF NOT EXISTS subscriptions_user_id_idx ON public.subscriptions (user_id);

-- RLS (Row Level Security)
ALTER TABLE public.orders        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: user hanya bisa baca order & subscription miliknya sendiri
DROP POLICY IF EXISTS "users_read_own_orders" ON public.orders;
CREATE POLICY "users_read_own_orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_read_own_subscriptions" ON public.subscriptions;
CREATE POLICY "users_read_own_subscriptions"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- Service role bypass (untuk webhook server-side)
DROP POLICY IF EXISTS "service_role_all_orders" ON public.orders;
CREATE POLICY "service_role_all_orders"
  ON public.orders FOR ALL
  USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "service_role_all_subscriptions" ON public.subscriptions;
CREATE POLICY "service_role_all_subscriptions"
  ON public.subscriptions FOR ALL
  USING (auth.role() = 'service_role');
