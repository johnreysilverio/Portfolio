create table if not exists public.portfolio_about_images (
  id uuid primary key default gen_random_uuid(),
  image_source text not null check (char_length(image_source) > 0),
  alt_text text not null default 'John Rey Silverio portfolio photo'
    check (char_length(alt_text) between 1 and 240),
  sort_order integer not null default 0 check (sort_order >= 0),
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists portfolio_about_images_order_idx
  on public.portfolio_about_images(sort_order);

drop trigger if exists set_portfolio_about_images_updated_at
  on public.portfolio_about_images;
create trigger set_portfolio_about_images_updated_at
before update on public.portfolio_about_images
for each row execute function public.set_portfolio_updated_at();

alter table public.portfolio_about_images enable row level security;

drop policy if exists "public can read published about images"
  on public.portfolio_about_images;
create policy "public can read published about images"
on public.portfolio_about_images for select to anon, authenticated
using (is_published);

drop policy if exists "portfolio admins can read all about images"
  on public.portfolio_about_images;
create policy "portfolio admins can read all about images"
on public.portfolio_about_images for select to authenticated
using (private.is_portfolio_admin());

drop policy if exists "portfolio admins can insert about images"
  on public.portfolio_about_images;
create policy "portfolio admins can insert about images"
on public.portfolio_about_images for insert to authenticated
with check (private.is_portfolio_admin());

drop policy if exists "portfolio admins can update about images"
  on public.portfolio_about_images;
create policy "portfolio admins can update about images"
on public.portfolio_about_images for update to authenticated
using (private.is_portfolio_admin())
with check (private.is_portfolio_admin());

drop policy if exists "portfolio admins can delete about images"
  on public.portfolio_about_images;
create policy "portfolio admins can delete about images"
on public.portfolio_about_images for delete to authenticated
using (private.is_portfolio_admin());

grant select on public.portfolio_about_images to anon, authenticated;
grant insert, update, delete on public.portfolio_about_images to authenticated;
