import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/bossa/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "pt-PT": `${SITE_URL}/`, "en-GB": `${SITE_URL}/en/` };
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE_URL}/en/`, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
