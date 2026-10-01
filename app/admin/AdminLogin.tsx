"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    searchParams.get("error") === "unauthorized"
      ? "This account is not authorized to manage the portfolio."
      : "",
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white flex items-center justify-center px-5">
      <form onSubmit={submit} className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">Portfolio CMS</p>
        <h1 className="mt-2 text-3xl font-semibold">Admin sign in</h1>
        <p className="mt-2 text-sm text-white/60">Use an account explicitly authorized in Supabase.</p>
        <label className="mt-7 block text-sm text-white/70">Email</label>
        <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-purple-400" />
        <label className="mt-4 block text-sm text-white/70">Password</label>
        <input name="password" type="password" required autoComplete="current-password" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-purple-400" />
        {error && <p className="mt-4 rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
        <button disabled={loading} className="mt-6 w-full rounded-md bg-purple-600 px-4 py-3 font-medium transition hover:bg-purple-500 disabled:opacity-50">
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
