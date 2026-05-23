create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('frontend', 'backend', 'database', 'tools')),
  name text not null,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists skills_category_sort_idx on public.skills (category, sort_order);

alter table public.profile enable row level security;
alter table public.experiences enable row level security;
alter table public.educations enable row level security;
alter table public.projects enable row level security;
alter table public.site_settings enable row level security;
alter table public.skills enable row level security;

drop policy if exists "public read profile" on public.profile;
create policy "public read profile"
on public.profile
for select
using (true);

drop policy if exists "public read experiences" on public.experiences;
create policy "public read experiences"
on public.experiences
for select
using (is_published = true);

drop policy if exists "public read educations" on public.educations;
create policy "public read educations"
on public.educations
for select
using (is_published = true);

drop policy if exists "public read projects" on public.projects;
create policy "public read projects"
on public.projects
for select
using (is_published = true);

drop policy if exists "public read site_settings" on public.site_settings;
create policy "public read site_settings"
on public.site_settings
for select
using (true);

drop policy if exists "public read skills" on public.skills;
create policy "public read skills"
on public.skills
for select
using (is_published = true);

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select auth.email() = 'lauretchacha@gmail.com';
$$;

drop policy if exists "admin manage profile" on public.profile;
create policy "admin manage profile"
on public.profile
for all
using (public.is_admin())
with check (public.is_admin());

-- Admin manage experiences
drop policy if exists "admin manage experiences" on public.experiences;
create policy "admin manage experiences"
on public.experiences
for all
using (public.is_admin())
with check (public.is_admin());

-- Admin manage educations
drop policy if exists "admin manage educations" on public.educations;
create policy "admin manage educations"
on public.educations
for all
using (public.is_admin())
with check (public.is_admin());

-- Admin manage projects
drop policy if exists "admin manage projects" on public.projects;
create policy "admin manage projects"
on public.projects
for all
using (public.is_admin())
with check (public.is_admin());

-- Admin manage site_settings
drop policy if exists "admin manage site_settings" on public.site_settings;
create policy "admin manage site_settings"
on public.site_settings
for all
using (public.is_admin())
with check (public.is_admin());

-- Correction finale de la politique INSERT pour les projets
drop policy if exists "admin insert projects" on public.projects;
create policy "admin insert projects"
on public.projects
for insert
with check (public.is_admin());

-- Correction de la politique UPDATE pour permettre la mise à jour de sort_order
drop policy if exists "admin update projects" on public.projects;
create policy "admin update projects"
on public.projects
for update
using (public.is_admin())
with check (public.is_admin());

-- Autoriser les administrateurs à supprimer des projets
drop policy if exists "admin delete projects" on public.projects;
create policy "admin delete projects"
on public.projects
for delete
using (public.is_admin());

-- Admin manage skills
drop policy if exists "admin manage skills" on public.skills;
create policy "admin manage skills"
on public.skills
for all
using (public.is_admin())
with check (public.is_admin());

-- =============================================================
-- Storage buckets et policies
-- =============================================================
-- Buckets utilisés par l'application (création idempotente)
insert into storage.buckets (id, name, public)
values ('projects-images', 'projects-images', true)
on conflict (id) do update set public = excluded.public;

insert into storage.buckets (id, name, public)
values ('cv', 'cv', true)
on conflict (id) do update set public = excluded.public;

-- Lecture publique des fichiers (pour afficher avatars, covers, PDFs)
drop policy if exists "public read projects-images" on storage.objects;
create policy "public read projects-images"
on storage.objects
for select
using (bucket_id = 'projects-images');

drop policy if exists "public read cv" on storage.objects;
create policy "public read cv"
on storage.objects
for select
using (bucket_id = 'cv');

-- Écriture réservée à l'admin (insert / update / delete)
drop policy if exists "admin insert projects-images" on storage.objects;
create policy "admin insert projects-images"
on storage.objects
for insert
with check (bucket_id = 'projects-images' and public.is_admin());

drop policy if exists "admin update projects-images" on storage.objects;
create policy "admin update projects-images"
on storage.objects
for update
using (bucket_id = 'projects-images' and public.is_admin())
with check (bucket_id = 'projects-images' and public.is_admin());

drop policy if exists "admin delete projects-images" on storage.objects;
create policy "admin delete projects-images"
on storage.objects
for delete
using (bucket_id = 'projects-images' and public.is_admin());

drop policy if exists "admin insert cv" on storage.objects;
create policy "admin insert cv"
on storage.objects
for insert
with check (bucket_id = 'cv' and public.is_admin());

drop policy if exists "admin update cv" on storage.objects;
create policy "admin update cv"
on storage.objects
for update
using (bucket_id = 'cv' and public.is_admin())
with check (bucket_id = 'cv' and public.is_admin());

drop policy if exists "admin delete cv" on storage.objects;
create policy "admin delete cv"
on storage.objects
for delete
using (bucket_id = 'cv' and public.is_admin());