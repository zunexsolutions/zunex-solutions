create table if not exists public.contact_submissions(
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(name) between 1 and 120),
 email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email)<=200),
 phone text, company text, service text, budget text,
 project_details text not null check (char_length(project_details) between 10 and 5000),
 status text not null default 'new' check (status in ('new','contacted','in_progress','completed','archived')),
 created_at timestamptz not null default now());
create index on public.contact_submissions(created_at desc);
create index on public.contact_submissions(status);
alter table public.contact_submissions enable row level security;
create policy "public can submit" on public.contact_submissions for insert to anon with check (status='new');
create policy "admins read" on public.contact_submissions for select to authenticated using (true);
create policy "admins update" on public.contact_submissions for update to authenticated using (true);
create policy "admins delete" on public.contact_submissions for delete to authenticated using (true);
-- Create admin users yourself in Supabase Auth and disable public sign-ups.
