import "server-only";

import { createClient } from "@supabase/supabase-js";
import {
  certificates as fallbackCertificates,
  experience as fallbackExperience,
  projects as fallbackProjects,
  skills as fallbackSkills,
} from "@/lib/cardData";
import type { PortfolioContent, PortfolioItem, PortfolioKind } from "@/lib/portfolio-types";

type PortfolioRow = {
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

const normalizeFallback = (
  items: Array<{ title: string; description: string; imageSource: string; showDetails: boolean }>,
  kind: PortfolioKind,
): PortfolioItem[] =>
  items.map((item, index) => ({
    ...item,
    detailImageSource: "",
    showDetails: item.showDetails,
    kind,
    sortOrder: index,
    isPublished: true,
  }));

export const fallbackContent: PortfolioContent = {
  skills: normalizeFallback(fallbackSkills, "skill"),
  projects: normalizeFallback(fallbackProjects, "project"),
  experience: normalizeFallback(fallbackExperience, "experience"),
  certificates: normalizeFallback(fallbackCertificates, "certificate"),
};

const mapRow = (row: PortfolioRow): PortfolioItem => ({
  id: row.id,
  kind: row.kind,
  title: row.title,
  description: row.description,
  imageSource: row.image_source,
  detailImageSource: row.detail_image_source,
  showDetails: row.show_details,
  sortOrder: row.sort_order,
  isPublished: row.is_published,
});

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return fallbackContent;

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("id,kind,title,description,image_source,detail_image_source,show_details,sort_order,is_published")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) return fallbackContent;

  const items = (data as PortfolioRow[]).map(mapRow);
  return {
    skills: items.filter((item) => item.kind === "skill"),
    projects: items.filter((item) => item.kind === "project"),
    experience: items.filter((item) => item.kind === "experience"),
    certificates: items.filter((item) => item.kind === "certificate"),
  };
}
