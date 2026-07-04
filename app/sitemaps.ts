import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://johnreysilverio.com",
      lastModified: new Date(),
    },
  ];
}