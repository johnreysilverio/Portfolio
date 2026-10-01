alter table public.portfolio_items
  add column if not exists show_details boolean not null default true;

update public.portfolio_items
set show_details = (component_source <> '');

alter table public.portfolio_items
  drop column if exists component_source;
