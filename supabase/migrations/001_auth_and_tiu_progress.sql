-- Skema PostgreSQL Portabel (100% SQL Standar Native PostgreSQL)
-- Tidak bergantung pada skema `auth.users`, trigger internal Supabase, atau RLS khusus vendor.
-- Jalankan file ini pada SQL Editor Supabase (atau langsung di PostgreSQL native saat migrasi).

create table if not exists public.profiles (
  id uuid primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists email text;

-- Lepaskan ketergantungan FK ke `auth.users` jika sebelumnya pernah memakai skema lama
alter table public.profiles
  drop constraint if exists profiles_id_fkey;

-- Hapus trigger & function legacy Supabase `auth.users` bila ada (aman di native PostgreSQL)
do $$
begin
  if to_regclass('auth.users') is not null then
    execute 'drop trigger if exists on_auth_user_created on auth.users';
  end if;
end
$$;
drop function if exists public.handle_new_user();

create table if not exists public.tiu_practice_progress (
  user_id uuid primary key,
  selected_answers jsonb not null default '{}'::jsonb,
  flagged_questions jsonb not null default '{}'::jsonb,
  pattern_seeds jsonb not null default '{}'::jsonb,
  question_seeds jsonb not null default '{}'::jsonb,
  view_mode text not null default 'list' check (view_mode in ('list', 'single')),
  last_pattern text not null default 'sinonim-antonim-akronim',
  updated_at timestamptz not null default now()
);

-- Arahkan FK `tiu_practice_progress.user_id` ke `public.profiles(id)` agar skema `public` berdiri sendiri
alter table public.tiu_practice_progress
  drop constraint if exists tiu_practice_progress_user_id_fkey;

alter table public.tiu_practice_progress
  add constraint tiu_practice_progress_user_id_fkey
  foreign key (user_id) references public.profiles (id) on delete cascade;

create index if not exists idx_profiles_email on public.profiles (email);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists set_tiu_progress_updated_at on public.tiu_practice_progress;
create trigger set_tiu_progress_updated_at
  before update on public.tiu_practice_progress
  for each row execute function public.set_updated_at();
