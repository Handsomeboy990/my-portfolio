alter table public.profile enable row level security;
alter table public.experiences enable row level security;
alter table public.educations enable row level security;
alter table public.projects enable row level security;
alter table public.site_settings enable row level security;

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

drop policy if exists "admin manage experiences" on public.experiences;
create policy "admin manage experiences"
on public.experiences
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admin manage educations" on public.educations;
create policy "admin manage educations"
on public.educations
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admin manage projects" on public.projects;
create policy "admin manage projects"
on public.projects
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admin manage site_settings" on public.site_settings;
create policy "admin manage site_settings"
on public.site_settings
for all
using (public.is_admin())
with check (public.is_admin());