-- Opsional khusus saat di-host di Supabase:
-- Kebijakan Row Level Security (RLS) berbasis `auth.uid()`.
-- File ini TIDAK diperlukan dan boleh dilewati saat bermigrasi ke native PostgreSQL.

alter table public.profiles enable row level security;

drop policy if exists "Pengguna dapat melihat profil sendiri" on public.profiles;
create policy "Pengguna dapat melihat profil sendiri"
  on public.profiles
  for select
  using (auth.uid() = id);

drop policy if exists "Pengguna dapat membuat profil sendiri" on public.profiles;
create policy "Pengguna dapat membuat profil sendiri"
  on public.profiles
  for insert
  with check (auth.uid() = id);

drop policy if exists "Pengguna dapat memperbarui profil sendiri" on public.profiles;
create policy "Pengguna dapat memperbarui profil sendiri"
  on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

alter table public.tiu_practice_progress enable row level security;

drop policy if exists "Pengguna dapat melihat progres TIU sendiri" on public.tiu_practice_progress;
create policy "Pengguna dapat melihat progres TIU sendiri"
  on public.tiu_practice_progress
  for select
  using (auth.uid() = user_id);

drop policy if exists "Pengguna dapat membuat progres TIU sendiri" on public.tiu_practice_progress;
create policy "Pengguna dapat membuat progres TIU sendiri"
  on public.tiu_practice_progress
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Pengguna dapat memperbarui progres TIU sendiri" on public.tiu_practice_progress;
create policy "Pengguna dapat memperbarui progres TIU sendiri"
  on public.tiu_practice_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Pengguna dapat menghapus progres TIU sendiri" on public.tiu_practice_progress;
create policy "Pengguna dapat menghapus progres TIU sendiri"
  on public.tiu_practice_progress
  for delete
  using (auth.uid() = user_id);

