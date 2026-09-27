import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/bossa/seo";
import { PROJECTS, PROJECT_PATH } from "@/components/bossa/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = { "pt-PT": `${SITE_URL}/`, "en-GB": `${SITE_URL}/en/` };
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1, alternates: { languages: home } },
    { url: `${SITE_URL}/en/`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: home } },
  ];
  for (const p of PROJECTS) {
    const languages = { "pt-PT": SITE_URL + PROJECT_PATH.pt(p.slug), "en-GB": SITE_URL + PROJECT_PATH.en(p.slug) };
    pages.push({ url: languages["pt-PT"], changeFrequency: "yearly", priority: 0.7, alternates: { languages } });
    pages.push({ url: languages["en-GB"], changeFrequency: "yearly", priority: 0.5, alternates: { languages } });
  }
  return pages;
}
