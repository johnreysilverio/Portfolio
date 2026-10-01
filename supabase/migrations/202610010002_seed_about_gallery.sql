create unique index if not exists portfolio_about_images_source_idx
  on public.portfolio_about_images(image_source);

insert into public.portfolio_about_images
  (image_source, alt_text, sort_order, is_published)
values
  (
    'https://xuenschtaqbwgdhihyqb.supabase.co/storage/v1/object/public/portfolio-assets/about/aboutpic1.png',
    'Portrait of John Rey Silverio smiling indoors',
    0,
    true
  ),
  (
    'https://xuenschtaqbwgdhihyqb.supabase.co/storage/v1/object/public/portfolio-assets/about/aboutpic2.png',
    'John Rey Silverio standing beside an open-air corridor',
    1,
    true
  ),
  (
    'https://xuenschtaqbwgdhihyqb.supabase.co/storage/v1/object/public/portfolio-assets/about/aboutpic3.png',
    'John Rey Silverio looking across a tree-lined campus',
    2,
    true
  ),
  (
    'https://xuenschtaqbwgdhihyqb.supabase.co/storage/v1/object/public/portfolio-assets/about/aboutpic4.png',
    'John Rey Silverio viewing artwork in a gallery',
    3,
    true
  )
on conflict (image_source) do update set
  alt_text = excluded.alt_text,
  sort_order = excluded.sort_order,
  is_published = excluded.is_published;
