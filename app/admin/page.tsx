import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio Administration",
  robots: { index: false, follow: false, nocache: true },
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <AdminLogin />;

  const { data: admin } = await supabase
    .from("portfolio_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) {
    await supabase.auth.signOut();
    redirect("/admin?error=unauthorized");
  }

  const [{ data: rows }, { data: aboutImages }] = await Promise.all([
    supabase
      .from("portfolio_items")
      .select("id,kind,title,description,image_source,detail_image_source,show_details,sort_order,is_published")
      .order("kind")
      .order("sort_order"),
    supabase
      .from("portfolio_about_images")
      .select("id,image_source,alt_text,sort_order,is_published")
      .order("sort_order"),
  ]);

  return <AdminDashboard initialRows={rows ?? []} initialAboutImages={aboutImages ?? []} email={user.email ?? "Admin"} />;
}
