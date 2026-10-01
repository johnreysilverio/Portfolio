alter table public.portfolio_items
  add column if not exists detail_image_source text not null default '';

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-assets',
  'portfolio-assets',
  true,
  5242880,
  array['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "portfolio admins upload assets" on storage.objects;
create policy "portfolio admins upload assets"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'portfolio-assets'
  and private.is_portfolio_admin()
);

drop policy if exists "portfolio admins update assets" on storage.objects;
create policy "portfolio admins update assets"
on storage.objects for update to authenticated
using (
  bucket_id = 'portfolio-assets'
  and private.is_portfolio_admin()
)
with check (
  bucket_id = 'portfolio-assets'
  and private.is_portfolio_admin()
);

drop policy if exists "portfolio admins delete assets" on storage.objects;
create policy "portfolio admins delete assets"
on storage.objects for delete to authenticated
using (
  bucket_id = 'portfolio-assets'
  and private.is_portfolio_admin()
);
