create table if not exists public.portfolio_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('skill', 'project', 'experience', 'certificate')),
  title text not null check (char_length(title) between 1 and 160),
  description text not null default '',
  image_source text not null default '',
  component_source text not null default '',
  sort_order integer not null default 0 check (sort_order >= 0),
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists portfolio_items_kind_order_idx
  on public.portfolio_items(kind, sort_order);

create schema if not exists private;

create or replace function private.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.portfolio_admins where user_id = auth.uid()
  );
$$;

create or replace function public.set_portfolio_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_portfolio_items_updated_at on public.portfolio_items;
create trigger set_portfolio_items_updated_at
before update on public.portfolio_items
for each row execute function public.set_portfolio_updated_at();

alter table public.portfolio_admins enable row level security;
alter table public.portfolio_items enable row level security;

drop policy if exists "portfolio admins can read own membership" on public.portfolio_admins;
create policy "portfolio admins can read own membership"
on public.portfolio_admins for select to authenticated
using (user_id = auth.uid());

drop policy if exists "public can read published portfolio items" on public.portfolio_items;
create policy "public can read published portfolio items"
on public.portfolio_items for select to anon, authenticated
using (is_published);

drop policy if exists "portfolio admins can read all items" on public.portfolio_items;
create policy "portfolio admins can read all items"
on public.portfolio_items for select to authenticated
using (private.is_portfolio_admin());

drop policy if exists "portfolio admins can insert items" on public.portfolio_items;
create policy "portfolio admins can insert items"
on public.portfolio_items for insert to authenticated
with check (private.is_portfolio_admin());

drop policy if exists "portfolio admins can update items" on public.portfolio_items;
create policy "portfolio admins can update items"
on public.portfolio_items for update to authenticated
using (private.is_portfolio_admin())
with check (private.is_portfolio_admin());

drop policy if exists "portfolio admins can delete items" on public.portfolio_items;
create policy "portfolio admins can delete items"
on public.portfolio_items for delete to authenticated
using (private.is_portfolio_admin());

revoke all on public.portfolio_admins from anon, authenticated;
grant select on public.portfolio_admins to authenticated;
grant select on public.portfolio_items to anon, authenticated;
grant insert, update, delete on public.portfolio_items to authenticated;
revoke all on function private.is_portfolio_admin() from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.is_portfolio_admin() to authenticated;

insert into public.portfolio_items
  (kind, title, description, image_source, component_source, sort_order)
values
  ('skill', 'HTML', 'Proficient in HTML5, with strong understanding of semantic markup and accessibility.', '/png/logo/html.png', 'card/skills/Html', 0),
  ('skill', 'CSS', 'Skilled in CSS3, Flexbox, Grid, and responsive design principles.', '/png/logo/css.png', 'card/skills/Css', 1),
  ('skill', 'JavaScript', 'Proficient in JavaScript, including ES6+ features like arrow functions, async/await, and modules.', '/png/logo/javascript.png', 'card/skills/Javascript', 2),
  ('skill', 'Git', 'Experienced in version control using Git and GitHub, including branching and pull requests.', '/png/logo/git.png', 'card/skills/Git', 3),
  ('skill', 'Node.js', 'Experience building RESTful APIs and backend services using Node.js and Express.', '/png/logo/nodejs.png', 'card/skills/Nodejs', 4),
  ('skill', 'SQL', 'Able to write complex SQL queries and work with relational databases like MySQL or PostgreSQL.', '/png/logo/sql.png', 'card/skills/Sql', 5),
  ('skill', 'Postman', 'Proficient in testing and debugging REST APIs using Postman.', '/png/logo/postman.png', 'card/skills/Postman', 6),
  ('skill', 'Vercel', 'Deploy frontend applications seamlessly using Vercel, including custom domains and CI/CD workflows.', '/png/logo/vercel.png', 'card/skills/Vercel', 7),
  ('project', 'DresScan', 'A Capstone Project focused on detecting school dress code violations using real-time object detection powered by YOLOv8 and computer vision.', '/png/logo/dresscan.png', 'card/projects/Dresscan', 0),
  ('project', 'Payroll System', 'A desktop-based payroll management system for tracking employee attendance, salary computation, and automated payslip generation. Developed for the IM101 course.', '/png/logo/pslogo.png', 'card/projects/Payrollsystem', 1),
  ('project', 'ColinaHealth', 'A web-based internal project developed during my internship at Jairosoft, Inc. I contributed to interface design and frontend development tasks as part of a collaborative team. This experience helped enhance my skills in web technologies and professional development workflows.', '/png/logo/colinahealth.png', 'card/projects/Colinahealth', 2),
  ('experience', 'Frontend Intern (Feb – June 2025)', 'Completed a frontend development internship at Jairosoft, Inc., collaborating with senior developers to build responsive and user-friendly web applications using Next.js and Tailwind CSS. Gained hands-on experience in creating reusable components, applying responsive design principles, and using Git for version control. Participated in code reviews, daily stand-ups, and sprint planning within an agile development environment.', '/png/logo/jairosoft.png', 'card/experience/Frontendintern', 0),
  ('experience', 'BSIT Student (2021–2025)', 'Pursuing a Bachelor of Science in Information Technology Batch 2025 at Holy Cross of Davao College. Coursework includes software development, database systems, web technologies, and project management. Engaged in hands-on projects and academic research focused on real-world IT applications.', '/png/logo/hcdc.png', 'card/experience/Bsitstudent', 1),
  ('experience', 'Store Manager (2020–2024)', 'Served as the store manager from 2020 to 2024, overseeing day-to-day operations of the minimart. Responsibilities included inventory control, supplier coordination, staff supervision, and customer service. Managed and maintained the Point of Sale (POS) system, tracked daily sales, and ensured efficient and smooth business transactions.', '/png/logo/martsmart.png', 'card/experience/Martsminimart', 2),
  ('certificate', 'Jairosoft Inc. Certificate of Completion', 'A certificate awarded by Jairosoft Inc. recognizing the successful completion of 486 hours of On-the-Job Training (OJT) as a Frontend Developer Intern from February 24, 2025 to June 5, 2025. The training involved hands-on experience with frontend technologies, collaborative agile practices, and participation in professional software development.', '/png/logo/jairosoft.png', 'card/certificate/OjtJairosoft', 0),
  ('certificate', 'Legacy JavaScript Algorithms and Data Structures', 'A certificate from freeCodeCamp covering core JavaScript fundamentals, algorithmic problem-solving, and essential data structures such as arrays, objects, and linked lists.', '/png/logo/freecodecamp.png', 'card/certificate/Algorithms', 1),
  ('certificate', 'Responsive Web Design', 'A certificate from freeCodeCamp focused on building accessible, mobile-friendly web pages using HTML5, CSS3, Flexbox, and CSS Grid.', '/png/logo/freecodecamp.png', 'card/certificate/ResponsiveWebDesign', 2),
  ('certificate', 'Introduction to Cybersecurity', 'A foundational certificate from Cisco Networking Academy introducing key cybersecurity concepts, cyber threats, and best practices for online safety.', '/png/logo/cisconetworkacademy.png', 'card/certificate/IntroductionToCybersecurity', 3),
  ('certificate', 'JavaScript Tutorial: Learn JavaScript Just in 1 Hour', 'A BitDegree certificate for completing a fast-paced introduction to JavaScript fundamentals, ideal for beginners exploring web development.', '/png/logo/bitdegree.png', 'card/certificate/LearnJs1hr', 4)
on conflict do nothing;
