"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { portfolioKinds, type PortfolioKind } from "@/lib/portfolio-types";

type Row = {
  id: string;
  kind: PortfolioKind;
  title: string;
  description: string;
  image_source: string;
  detail_image_source: string;
  show_details: boolean;
  sort_order: number;
  is_published: boolean;
};

type AboutImageRow = {
  id: string;
  image_source: string;
  alt_text: string;
  sort_order: number;
  is_published: boolean;
};

const emptyRow: Omit<Row, "id"> = {
  kind: "project",
  title: "",
  description: "",
  image_source: "",
  detail_image_source: "",
  show_details: true,
  sort_order: 0,
  is_published: true,
};

export default function AdminDashboard({
  initialRows,
  initialAboutImages,
  email,
}: {
  initialRows: Row[];
  initialAboutImages: AboutImageRow[];
  email: string;
}) {
  const router = useRouter();
  const [rows, setRows] = useState(initialRows);
  const [kind, setKind] = useState<PortfolioKind>("project");
  const [editing, setEditing] = useState<Row | null>(null);
  const [aboutImages, setAboutImages] = useState(initialAboutImages);
  const [editingAbout, setEditingAbout] = useState<AboutImageRow | null>(null);
  const [message, setMessage] = useState("");
  const visibleRows = useMemo(() => rows.filter((row) => row.kind === kind), [rows, kind]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Saving…");
    const form = new FormData(event.currentTarget);
    const supabase = createClient();
    const upload = async (field: string, folder: string, fallback: string) => {
      const file = form.get(field);
      if (!(file instanceof File) || file.size === 0) return fallback;
      if (!file.type.startsWith("image/")) throw new Error("Only image files are allowed.");
      if (file.size > 5 * 1024 * 1024) throw new Error("Images must be 5 MB or smaller.");
      const extension = file.name.split(".").pop()?.toLowerCase() || "png";
      const path = `${folder}/${crypto.randomUUID()}.${extension}`;
      const { error } = await supabase.storage.from("portfolio-assets").upload(path, file, {
        cacheControl: "3600",
        contentType: file.type,
      });
      if (error) throw error;
      return supabase.storage.from("portfolio-assets").getPublicUrl(path).data.publicUrl;
    };

    let imageSource: string;
    let detailImageSource: string;
    try {
      imageSource = await upload("image_file", "cards", String(form.get("image_source")));
      detailImageSource = await upload("detail_image_file", "details", String(form.get("detail_image_source")));
    } catch (uploadError) {
      setMessage(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
      return;
    }

    const payload = {
      kind: String(form.get("kind")) as PortfolioKind,
      title: String(form.get("title")),
      description: String(form.get("description")),
      image_source: imageSource,
      detail_image_source: detailImageSource,
      show_details: form.get("show_details") === "on",
      sort_order: Number(form.get("sort_order")),
      is_published: form.get("is_published") === "on",
    };
    const query = editing
      ? supabase.from("portfolio_items").update(payload).eq("id", editing.id).select().single()
      : supabase.from("portfolio_items").insert(payload).select().single();
    const { data, error } = await query;
    if (error) return setMessage(error.message);
    setRows((current) => editing
      ? current.map((row) => row.id === data.id ? data as Row : row)
      : [...current, data as Row]);
    setEditing(null);
    setKind(payload.kind);
    setMessage("Saved. The public site will use the change immediately.");
  }

  async function remove(row: Row) {
    if (!window.confirm(`Delete “${row.title}”?`)) return;
    const supabase = createClient();
    const { error } = await supabase.from("portfolio_items").delete().eq("id", row.id);
    if (error) return setMessage(error.message);
    setRows((current) => current.filter((item) => item.id !== row.id));
    if (editing?.id === row.id) setEditing(null);
    setMessage("Item deleted.");
  }

  async function saveAboutImage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Saving About image…");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const file = form.get("about_image_file");
    let imageSource = editingAbout?.image_source ?? "";
    const supabase = createClient();

    try {
      if (file instanceof File && file.size > 0) {
        if (!file.type.startsWith("image/")) throw new Error("Only image files are allowed.");
        if (file.size > 5 * 1024 * 1024) throw new Error("Images must be 5 MB or smaller.");
        const extension = file.name.split(".").pop()?.toLowerCase() || "png";
        const path = `about/${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await supabase.storage
          .from("portfolio-assets")
          .upload(path, file, { cacheControl: "3600", contentType: file.type });
        if (uploadError) throw uploadError;
        imageSource = supabase.storage.from("portfolio-assets").getPublicUrl(path).data.publicUrl;
      }

      if (!imageSource) throw new Error("Choose an image to upload.");

      const payload = {
        image_source: imageSource,
        alt_text: String(form.get("alt_text")).trim(),
        sort_order: Number(form.get("sort_order")),
        is_published: form.get("is_published") === "on",
      };
      const query = editingAbout
        ? supabase.from("portfolio_about_images").update(payload).eq("id", editingAbout.id).select().single()
        : supabase.from("portfolio_about_images").insert(payload).select().single();
      const { data, error } = await query;
      if (error) throw error;

      setAboutImages((current) => {
        const updated = editingAbout
          ? current.map((image) => image.id === data.id ? data as AboutImageRow : image)
          : [...current, data as AboutImageRow];
        return updated.sort((a, b) => a.sort_order - b.sort_order);
      });
      setEditingAbout(null);
      formElement.reset();
      setMessage("About image saved and stored in Supabase.");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "About image could not be saved.");
    }
  }

  async function removeAboutImage(image: AboutImageRow) {
    if (!window.confirm(`Delete “${image.alt_text}”?`)) return;
    const { error } = await createClient()
      .from("portfolio_about_images")
      .delete()
      .eq("id", image.id);
    if (error) return setMessage(error.message);
    setAboutImages((current) => current.filter((item) => item.id !== image.id));
    if (editingAbout?.id === image.id) setEditingAbout(null);
    setMessage("About image deleted.");
    router.refresh();
  }

  async function signOut() {
    await createClient().auth.signOut();
    router.refresh();
  }

  const formValue = editing ?? { ...emptyRow, kind };
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-5 py-8 text-white lg:px-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div><p className="text-sm text-purple-400">PORTFOLIO CMS</p><h1 className="text-3xl font-semibold">Content manager</h1><p className="mt-1 text-sm text-white/50">Signed in as {email}</p></div>
        <div className="flex gap-2"><Link href="/" className="rounded-md border border-white/15 px-4 py-2 text-sm">View site</Link><button onClick={signOut} className="rounded-md bg-white/10 px-4 py-2 text-sm">Sign out</button></div>
      </header>
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <nav className="mb-5 flex flex-wrap gap-2">{portfolioKinds.map((value) => <button key={value} onClick={() => { setKind(value); setEditing(null); }} className={`rounded-full px-4 py-2 text-sm capitalize ${kind === value ? "bg-purple-600" : "bg-white/10"}`}>{value}</button>)}</nav>
          <div className="space-y-3">{visibleRows.map((row) => <article key={row.id} className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4"><div><div className="flex items-center gap-2"><h2 className="font-medium">{row.title}</h2><span className={`rounded px-2 py-0.5 text-xs ${row.is_published ? "bg-green-500/15 text-green-300" : "bg-yellow-500/15 text-yellow-300"}`}>{row.is_published ? "Published" : "Draft"}</span></div><p className="mt-1 line-clamp-2 text-sm text-white/55">{row.description}</p></div><div className="flex shrink-0 gap-2"><button onClick={() => setEditing(row)} className="rounded bg-white/10 px-3 py-1.5 text-sm">Edit</button><button onClick={() => remove(row)} className="rounded bg-red-500/15 px-3 py-1.5 text-sm text-red-300">Delete</button></div></article>)}</div>
        </section>
        <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-xl font-semibold">{editing ? "Edit item" : "Add item"}</h2>
          <form key={editing?.id ?? `new-${kind}`} onSubmit={save} className="mt-5 space-y-4">
            <label className="block text-sm text-white/70">Section<select name="kind" defaultValue={formValue.kind} className="mt-1 w-full rounded-md border border-white/10 bg-[#151519] px-3 py-2">{portfolioKinds.map((value) => <option key={value}>{value}</option>)}</select></label>
            <label className="block text-sm text-white/70">Title<input name="title" required defaultValue={formValue.title} className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="block text-sm text-white/70">Description<textarea name="description" required rows={6} defaultValue={formValue.description} className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="block text-sm text-white/70">Image path or URL<input name="image_source" defaultValue={formValue.image_source} placeholder="/png/logo/example.png" className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="block text-sm text-white/70">Upload card image<input name="image_file" type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml" className="mt-1 block w-full text-sm text-white/60 file:mr-3 file:rounded file:border-0 file:bg-purple-600 file:px-3 file:py-2 file:text-white" /></label>
            <label className="block text-sm text-white/70">Detail image URL<input name="detail_image_source" defaultValue={formValue.detail_image_source} placeholder="Certificate or project screenshot URL" className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="block text-sm text-white/70">Upload detail image<input name="detail_image_file" type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="mt-1 block w-full text-sm text-white/60 file:mr-3 file:rounded file:border-0 file:bg-purple-600 file:px-3 file:py-2 file:text-white" /></label>
            <label className="flex items-center gap-2 text-sm"><input name="show_details" type="checkbox" defaultChecked={formValue.show_details} /> Enable details modal</label>
            <label className="block text-sm text-white/70">Display order<input name="sort_order" type="number" min="0" required defaultValue={formValue.sort_order} className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="flex items-center gap-2 text-sm"><input name="is_published" type="checkbox" defaultChecked={formValue.is_published} /> Published</label>
            {message && <p className="rounded-md bg-white/5 p-3 text-sm text-white/70">{message}</p>}
            <div className="flex gap-2"><button className="rounded-md bg-purple-600 px-5 py-2.5 font-medium hover:bg-purple-500">Save</button>{editing && <button type="button" onClick={() => setEditing(null)} className="rounded-md bg-white/10 px-5 py-2.5">Cancel</button>}</div>
          </form>
        </section>
      </div>
      <section className="mx-auto mt-6 max-w-7xl rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <div>
          <p className="text-sm font-medium text-purple-400">ABOUT GALLERY</p>
          <h2 className="mt-1 text-xl font-semibold">Slideshow images</h2>
          <p className="mt-1 text-sm text-white/50">Images are uploaded to the Supabase portfolio-assets bucket.</p>
        </div>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3">
            {aboutImages.length === 0 && (
              <p className="rounded-lg border border-dashed border-white/15 p-6 text-sm text-white/50">
                No Supabase images yet. The public site is currently using its local fallback images.
              </p>
            )}
            {aboutImages.map((image) => (
              <article key={image.id} className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-3">
                <Image src={image.image_source} alt="" width={96} height={64} className="h-16 w-24 rounded object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{image.alt_text}</p>
                  <p className="text-xs text-white/45">Order {image.sort_order} · {image.is_published ? "Published" : "Draft"}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button onClick={() => setEditingAbout(image)} className="rounded bg-white/10 px-3 py-1.5 text-sm">Edit</button>
                  <button onClick={() => removeAboutImage(image)} className="rounded bg-red-500/15 px-3 py-1.5 text-sm text-red-300">Delete</button>
                </div>
              </article>
            ))}
          </div>
          <form key={editingAbout?.id ?? "new-about-image"} onSubmit={saveAboutImage} className="space-y-4 rounded-lg border border-white/10 bg-black/20 p-4">
            <h3 className="font-medium">{editingAbout ? "Edit About image" : "Add About image"}</h3>
            <label className="block text-sm text-white/70">Image file<input name="about_image_file" type="file" required={!editingAbout} accept="image/png,image/jpeg,image/webp,image/gif" className="mt-1 block w-full text-sm text-white/60 file:mr-3 file:rounded file:border-0 file:bg-purple-600 file:px-3 file:py-2 file:text-white" /></label>
            <label className="block text-sm text-white/70">Accessible description<input name="alt_text" required maxLength={240} defaultValue={editingAbout?.alt_text ?? "John Rey Silverio portfolio photo"} className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="block text-sm text-white/70">Display order<input name="sort_order" type="number" min="0" required defaultValue={editingAbout?.sort_order ?? aboutImages.length} className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2" /></label>
            <label className="flex items-center gap-2 text-sm"><input name="is_published" type="checkbox" defaultChecked={editingAbout?.is_published ?? true} /> Published</label>
            <div className="flex gap-2">
              <button className="rounded-md bg-purple-600 px-5 py-2.5 font-medium hover:bg-purple-500">Save image</button>
              {editingAbout && <button type="button" onClick={() => setEditingAbout(null)} className="rounded-md bg-white/10 px-5 py-2.5">Cancel</button>}
            </div>
          </form>
        </div>
      </section>
      {message && <p className="mx-auto mt-4 max-w-7xl rounded-md bg-white/5 p-3 text-sm text-white/70">{message}</p>}
    </main>
  );
}
