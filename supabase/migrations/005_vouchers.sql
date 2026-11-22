-- Migration 005: Sistem Kode Promo / Voucher Diskon & Tracking Diskon Order
-- Jalankan di Supabase SQL Editor setelah 001–004

-- 1. Tabel vouchers
CREATE TABLE IF NOT EXISTS public.vouchers (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  code                text        UNIQUE NOT NULL,
  description         text,
  discount_type       text        NOT NULL CHECK (discount_type IN ('percent', 'fixed')),
  discount_value      integer     NOT NULL CHECK (discount_value > 0),
  max_discount        integer,
  min_purchase        integer     NOT NULL DEFAULT 0,
  applicable_products text[],
  max_uses            integer,
  used_count          integer     NOT NULL DEFAULT 0,
  is_active           boolean     NOT NULL DEFAULT true,
  valid_from          timestamptz NOT NULL DEFAULT now(),
  expires_at          timestamptz,
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_vouchers_code ON public.vouchers (code);
CREATE INDEX IF NOT EXISTS idx_vouchers_active ON public.vouchers (is_active);

-- 2. Tambahkan kolom voucher & diskon di public.orders
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS voucher_code text,
  ADD COLUMN IF NOT EXISTS discount_amount integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS original_amount integer;

-- 3. RLS Policies untuk vouchers
ALTER TABLE public.vouchers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_all_vouchers" ON public.vouchers;
CREATE POLICY "admin_all_vouchers"
  ON public.vouchers FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- 4. Helper function atomic increment usage saat order lunas
CREATE OR REPLACE FUNCTION public.increment_voucher_usage(p_code text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.vouchers
  SET used_count = used_count + 1,
      updated_at = now()
  WHERE code = upper(trim(p_code));
END;
$$;
