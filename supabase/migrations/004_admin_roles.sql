-- Migration 004: Role-Based Access Control (RBAC) untuk Dashboard Admin Internal
-- Jalankan di Supabase SQL Editor setelah 001, 002, dan 003

-- 1. Tambahkan kolom role pada public.profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'student';

ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_role_check;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_role_check
  CHECK (role IN ('student', 'admin', 'superadmin'));

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles (role);

-- 2. Helper function SECURITY DEFINER untuk cek role admin tanpa memicu RLS infinite recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid()
      AND role IN ('admin', 'superadmin')
  );
$$;

-- 3. RLS Policies tambahan agar admin dapat mengelola data operasional dari Dashboard Admin
-- (Jika backend memakai SUPABASE_SERVICE_ROLE_KEY, service_role tetap membypass RLS secara otomatis)

-- Admin dapat membaca dan memperbarui profil siswa
DROP POLICY IF EXISTS "admin_read_all_profiles" ON public.profiles;
CREATE POLICY "admin_read_all_profiles"
  ON public.profiles FOR SELECT
  USING (public.is_admin());

DROP POLICY IF EXISTS "admin_update_profiles" ON public.profiles;
CREATE POLICY "admin_update_profiles"
  ON public.profiles FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Admin dapat membaca & mengelola seluruh order
DROP POLICY IF EXISTS "admin_all_orders" ON public.orders;
CREATE POLICY "admin_all_orders"
  ON public.orders FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Admin dapat membaca & mengelola seluruh subscriptions
DROP POLICY IF EXISTS "admin_all_subscriptions" ON public.subscriptions;
CREATE POLICY "admin_all_subscriptions"
  ON public.subscriptions FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Admin dapat melihat progres latihan TIU siswa
DROP POLICY IF EXISTS "admin_read_all_tiu_progress" ON public.tiu_practice_progress;
CREATE POLICY "admin_read_all_tiu_progress"
  ON public.tiu_practice_progress FOR SELECT
  USING (public.is_admin());

-- =========================================================================
-- LANGKAH PENTING (Bootstrap Admin Pertama):
-- Ganti email di bawah dengan email akun Anda, lalu jalankan di SQL Editor:
--
-- UPDATE public.profiles
-- SET role = 'superadmin'
-- WHERE email = 'email-anda@gmail.com';
-- =========================================================================

