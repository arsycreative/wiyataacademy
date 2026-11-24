-- Migration 006: Cloud Sync Riwayat Tryout CAT & Ranking Nasional
-- Jalankan di Supabase SQL Editor setelah 001–005

-- 1. Tabel riwayat percobaan Tryout CAT siswa
CREATE TABLE IF NOT EXISTS public.tryout_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_attempt_id text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mode text NOT NULL CHECK (mode IN ('official', 'mini')),
  preset_id text NOT NULL,
  package_label text NOT NULL,
  seed bigint NOT NULL,
  twk_score integer NOT NULL DEFAULT 0,
  tiu_score integer NOT NULL DEFAULT 0,
  tkp_score integer NOT NULL DEFAULT 0,
  total_score integer NOT NULL DEFAULT 0,
  max_score integer NOT NULL DEFAULT 550,
  passed boolean NOT NULL DEFAULT false,
  duration_used_sec integer NOT NULL DEFAULT 0,
  duration_limit_sec integer NOT NULL DEFAULT 6000,
  subtests_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  answers_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  flagged_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tryout_attempts_user_client_unique UNIQUE (user_id, client_attempt_id)
);

CREATE INDEX IF NOT EXISTS idx_tryout_attempts_user_completed
  ON public.tryout_attempts (user_id, completed_at DESC);

CREATE INDEX IF NOT EXISTS idx_tryout_attempts_leaderboard
  ON public.tryout_attempts (
    preset_id,
    passed DESC,
    total_score DESC,
    tkp_score DESC,
    tiu_score DESC,
    twk_score DESC,
    duration_used_sec ASC
  );

CREATE INDEX IF NOT EXISTS idx_tryout_attempts_mode_leaderboard
  ON public.tryout_attempts (
    mode,
    passed DESC,
    total_score DESC,
    tkp_score DESC,
    tiu_score DESC,
    twk_score DESC,
    duration_used_sec ASC
  );

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.tryout_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_read_own_tryout_attempts" ON public.tryout_attempts;
CREATE POLICY "users_read_own_tryout_attempts"
  ON public.tryout_attempts FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_insert_own_tryout_attempts" ON public.tryout_attempts;
CREATE POLICY "users_insert_own_tryout_attempts"
  ON public.tryout_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_update_own_tryout_attempts" ON public.tryout_attempts;
CREATE POLICY "users_update_own_tryout_attempts"
  ON public.tryout_attempts FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "users_delete_own_tryout_attempts" ON public.tryout_attempts;
CREATE POLICY "users_delete_own_tryout_attempts"
  ON public.tryout_attempts FOR DELETE
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "admin_read_all_tryout_attempts" ON public.tryout_attempts;
CREATE POLICY "admin_read_all_tryout_attempts"
  ON public.tryout_attempts FOR SELECT
  USING (public.is_admin());

-- 3. Helper penyamaran nama peserta untuk privasi Ranking Nasional
CREATE OR REPLACE FUNCTION public.mask_leaderboard_name(
  p_full_name text,
  p_email text
)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  v_clean text;
  v_parts text[];
  v_local text;
BEGIN
  v_clean := btrim(coalesce(p_full_name, ''));
  IF v_clean <> '' THEN
    v_parts := regexp_split_to_array(v_clean, '\s+');
    IF array_length(v_parts, 1) >= 2 THEN
      RETURN v_parts[1] || ' ' || upper(left(v_parts[2], 1)) || '.';
    END IF;
    IF char_length(v_clean) <= 3 THEN
      RETURN v_clean || '***';
    END IF;
    RETURN left(v_clean, 4) || '***';
  END IF;

  v_local := split_part(btrim(coalesce(p_email, '')), '@', 1);
  IF v_local <> '' THEN
    RETURN initcap(left(v_local, LEAST(4, char_length(v_local)))) || '***';
  END IF;

  RETURN 'Peserta CPNS';
END;
$$;

-- 4. RPC SECURITY DEFINER untuk Ranking Nasional (aman privasi & tanpa butuh service_role key)
-- Mengambil percobaan TERBAIK setiap peserta berdasarkan aturan tie-break resmi BKN:
-- Lulus PG -> Total Skor -> TKP -> TIU -> TWK -> Durasi tercepat -> Waktu selesai lebih awal.
CREATE OR REPLACE FUNCTION public.get_tryout_leaderboard(
  p_scope text DEFAULT 'all-official',
  p_limit integer DEFAULT 20
)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_limit integer := GREATEST(1, LEAST(coalesce(p_limit, 20), 50));
  v_uid uuid := auth.uid();
  v_result jsonb;
BEGIN
  WITH scoped_attempts AS (
    SELECT
      ta.user_id,
      ta.preset_id,
      ta.package_label,
      ta.twk_score,
      ta.tiu_score,
      ta.tkp_score,
      ta.total_score,
      ta.max_score,
      ta.passed,
      ta.duration_used_sec,
      ta.completed_at
    FROM public.tryout_attempts ta
    WHERE
      CASE
        WHEN p_scope = 'all-official' THEN ta.mode = 'official'
        ELSE ta.preset_id = p_scope
      END
  ),
  best_per_user AS (
    SELECT DISTINCT ON (sa.user_id)
      sa.user_id,
      sa.preset_id,
      sa.package_label,
      sa.twk_score,
      sa.tiu_score,
      sa.tkp_score,
      sa.total_score,
      sa.max_score,
      sa.passed,
      sa.duration_used_sec,
      sa.completed_at
    FROM scoped_attempts sa
    ORDER BY
      sa.user_id,
      sa.passed DESC,
      sa.total_score DESC,
      sa.tkp_score DESC,
      sa.tiu_score DESC,
      sa.twk_score DESC,
      sa.duration_used_sec ASC,
      sa.completed_at ASC
  ),
  ranked AS (
    SELECT
      ROW_NUMBER() OVER (
        ORDER BY
          b.passed DESC,
          b.total_score DESC,
          b.tkp_score DESC,
          b.tiu_score DESC,
          b.twk_score DESC,
          b.duration_used_sec ASC,
          b.completed_at ASC
      )::integer AS rank,
      b.user_id,
      public.mask_leaderboard_name(p.full_name, p.email) AS display_name,
      b.preset_id,
      b.package_label,
      b.twk_score,
      b.tiu_score,
      b.tkp_score,
      b.total_score,
      b.max_score,
      b.passed,
      b.duration_used_sec,
      b.completed_at,
      (v_uid IS NOT NULL AND b.user_id = v_uid) AS is_current_user
    FROM best_per_user b
    LEFT JOIN public.profiles p ON p.id = b.user_id
  ),
  stats AS (
    SELECT
      COUNT(*)::integer AS total_participants,
      COUNT(*) FILTER (WHERE passed)::integer AS passed_participants,
      COALESCE(ROUND(AVG(total_score))::integer, 0) AS average_score
    FROM ranked
  ),
  me AS (
    SELECT
      rank,
      display_name,
      preset_id,
      package_label,
      twk_score,
      tiu_score,
      tkp_score,
      total_score,
      max_score,
      passed,
      duration_used_sec,
      completed_at,
      is_current_user
    FROM ranked
    WHERE is_current_user = true
    LIMIT 1
  ),
  top_rows AS (
    SELECT
      rank,
      display_name,
      preset_id,
      package_label,
      twk_score,
      tiu_score,
      tkp_score,
      total_score,
      max_score,
      passed,
      duration_used_sec,
      completed_at,
      is_current_user
    FROM ranked
    ORDER BY rank ASC
    LIMIT v_limit
  )
  SELECT jsonb_build_object(
    'scope', p_scope,
    'totalParticipants', (SELECT total_participants FROM stats),
    'passedParticipants', (SELECT passed_participants FROM stats),
    'averageScore', (SELECT average_score FROM stats),
    'entries', COALESCE(
      (
        SELECT jsonb_agg(
          jsonb_build_object(
            'rank', tr.rank,
            'displayName', tr.display_name,
            'presetId', tr.preset_id,
            'packageLabel', tr.package_label,
            'twkScore', tr.twk_score,
            'tiuScore', tr.tiu_score,
            'tkpScore', tr.tkp_score,
            'totalScore', tr.total_score,
            'maxScore', tr.max_score,
            'passed', tr.passed,
            'durationUsedSec', tr.duration_used_sec,
            'completedAt', tr.completed_at,
            'isCurrentUser', tr.is_current_user
          )
          ORDER BY tr.rank ASC
        )
        FROM top_rows tr
      ),
      '[]'::jsonb
    ),
    'currentUserEntry', (
      SELECT jsonb_build_object(
        'rank', m.rank,
        'displayName', m.display_name,
        'presetId', m.preset_id,
        'packageLabel', m.package_label,
        'twkScore', m.twk_score,
        'tiuScore', m.tiu_score,
        'tkpScore', m.tkp_score,
        'totalScore', m.total_score,
        'maxScore', m.max_score,
        'passed', m.passed,
        'durationUsedSec', m.duration_used_sec,
        'completedAt', m.completed_at,
        'isCurrentUser', true
      )
      FROM me m
    )
  ) INTO v_result;

  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_tryout_leaderboard(text, integer) TO anon, authenticated;

