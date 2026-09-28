/**
 * SEO — metadados, hreflang e dados estruturados (Schema.org) por idioma.
 *
 * ⚠️ SITE_URL: trocar pelo domínio definitivo quando o site sair do GitHub Pages.
 *    Enquanto estiver em teste, estes URLs apenas aparecem nas tags de SEO.
 */
import type { Metadata } from "next";
import { LEGAL, LEGAL_PATH, type LegalKind } from "./legal";
import { DICT, type Locale } from "./content";
import { PROJECTS_INDEX, PROJECT_PATH, getProject, media } from "./projects";

export const SITE_URL = "https://studiobossa.pt"; // ← domínio definitivo

const PATHS: Record<Locale, string> = { pt: "/", en: "/en/" };

const META: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  pt: {
    title: "Remodelação e Arquitetura no Porto e Gaia | Studio Bossa",
    description:
      "Atelier de arquitetura e design de interiores no Porto. Remodelação chave na mão de apartamentos e moradias no Porto e em Vila Nova de Gaia, com projeto 3D. Peça orçamento.",
    keywords: [
      "remodelação Porto",
      "remodelação Gaia",
      "remodelação de casas",
      "remodelação de apartamentos",
      "remodelação de moradias",
      "empresa de remodelações Porto",
      "obras de remodelação",
      "remodelação de cozinhas",
      "remodelação de casas de banho",
      "atelier de arquitetura Porto",
      "arquitetura Porto",
      "design de interiores Porto",
      "projeto 3D interiores",
      "Vila Nova de Gaia",
      "Matosinhos",
      "Maia",
      "Studio Bossa",
    ],
  },
  en: {
    title: "Home Renovation & Architecture in Porto | Studio Bossa",
    description:
      "Architecture and interior design studio in Porto, Portugal. Turnkey renovation of flats and houses in Porto and Vila Nova de Gaia, with 3D design. Get a quote.",
    keywords: [
      "renovation Porto",
      "home renovation Portugal",
      "flat renovation Porto",
      "house renovation Porto",
      "renovation company Porto",
      "kitchen renovation Porto",
      "bathroom renovation Porto",
      "architect Porto",
      "architecture studio Porto",
      "interior designer Porto",
      "interior design Portugal",
      "3D interior design",
      "Vila Nova de Gaia",
      "Studio Bossa",
    ],
  },
};

export function buildMetadata(locale: Locale): Metadata {
  const m = META[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    authors: [{ name: "Studio Bossa" }],
    alternates: {
      canonical: PATHS[locale],
      languages: {
        "pt-PT": PATHS.pt,
        "en-GB": PATHS.en,
        "x-default": PATHS.pt,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      siteName: "Studio Bossa",
      type: "website",
      url: PATHS[locale],
      locale: locale === "en" ? "en_GB" : "pt_PT",
      alternateLocale: locale === "en" ? ["pt_PT"] : ["en_GB"],
      images: [{ url: "/videos/hero-1-poster.jpg", width: 1600, height: 880 }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/videos/hero-1-poster.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Dados estruturados (JSON-LD) — dizem ao Google e às IAs, em linguagem de
 * máquina, que tipo de negócio é, onde fica, que zonas serve e o que faz.
 *
 * Telefone, morada completa, horário, redes sociais e avaliações só devem ser
 * acrescentados aqui quando forem os REAIS (ver "TODO" abaixo).
 */
export function buildJsonLd(locale: Locale) {
  const t = DICT[locale];
  const url = SITE_URL + PATHS[locale];
  const inLanguage = locale === "en" ? "en-GB" : "pt-PT";

  const business = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#studio-bossa`,
    name: "Studio Bossa",
    url,
    logo: `${SITE_URL}/logo-bossa/logo-studio-bossa-dark.png`,
    image: `${SITE_URL}/videos/hero-1-poster.jpg`,
    description: META[locale].description,
    slogan: `${t.hero.taglineA} ${t.hero.taglineB}`,
    knowsLanguage: ["pt-PT", "en-GB"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Engenheiro Ferreira Dias, 161, Sala 204",
      addressLocality: "Porto",
      addressRegion: "Porto",
      addressCountry: "PT",
      // TODO: acrescentar postalCode quando confirmado
    },
    areaServed: [
      { "@type": "City", name: "Porto" },
      { "@type": "City", name: "Vila Nova de Gaia" },
      { "@type": "City", name: "Matosinhos" },
      { "@type": "City", name: "Maia" },
      { "@type": "Country", name: "Portugal" },
    ],
    // TODO: telephone, email, openingHours, sameAs (Instagram, Facebook, LinkedIn, Google)
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.services.eyebrow,
      itemListElement: t.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: t.faq.items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Studio Bossa",
    url,
    inLanguage,
    publisher: { "@id": `${SITE_URL}/#studio-bossa` },
  };

  return [business, website];
}

export { PATHS };

/* ---------------- Páginas de projeto ---------------- */

export function buildProjectMetadata(locale: Locale, slug: string): Metadata {
  const p = getProject(slug)!;
  const m = media(slug);
  const title = `${p.name[locale]} — ${p.type[locale]} | Studio Bossa`;
  const description = p.summary[locale].length > 158 ? p.summary[locale].slice(0, 155).replace(/\s+\S*$/, "") + "…" : p.summary[locale];
  const cover = `/projetos/${slug}/${m.cover}.jpg`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: PROJECT_PATH[locale](slug),
      languages: { "pt-PT": PROJECT_PATH.pt(slug), "en-GB": PROJECT_PATH.en(slug), "x-default": PROJECT_PATH.pt(slug) },
    },
    openGraph: {
      title,
      description,
      siteName: "Studio Bossa",
      type: "article",
      url: PROJECT_PATH[locale](slug),
      locale: locale === "en" ? "en_GB" : "pt_PT",
      images: [{ url: cover }],
    },
    twitter: { card: "summary_large_image", title, description, images: [cover] },
    robots: { index: true, follow: true },
  };
}

export function buildProjectJsonLd(locale: Locale, slug: string) {
  const p = getProject(slug)!;
  const m = media(slug);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name[locale],
    genre: p.type[locale],
    description: p.summary[locale],
    inLanguage: locale === "en" ? "en-GB" : "pt-PT",
    url: SITE_URL + PROJECT_PATH[locale](slug),
    image: m.gallery.map((g) => `${SITE_URL}/projetos/${slug}/${g.f}.jpg`),
    creator: { "@id": `${SITE_URL}/#studio-bossa`, "@type": "Organization", name: "Studio Bossa" },
  };
}

/* ---------------- Página com todos os projetos ---------------- */

export function buildIndexMetadata(locale: Locale): Metadata {
  const c = DICT[locale].projectsIndex;
  return {
    metadataBase: new URL(SITE_URL),
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: PROJECTS_INDEX[locale],
      languages: { "pt-PT": PROJECTS_INDEX.pt, "en-GB": PROJECTS_INDEX.en, "x-default": PROJECTS_INDEX.pt },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      siteName: "Studio Bossa",
      type: "website",
      url: PROJECTS_INDEX[locale],
      locale: locale === "en" ? "en_GB" : "pt_PT",
      images: [{ url: "/projetos/ana-e-cesar/07.jpg" }],
    },
    robots: { index: true, follow: true },
  };
}

/* ---------------- Página de perguntas frequentes ---------------- */

const FAQ_PATHS: Record<Locale, string> = { pt: "/perguntas/", en: "/en/faq/" };

export function buildFaqMetadata(locale: Locale): Metadata {
  const c = DICT[locale].faq;
  return {
    metadataBase: new URL(SITE_URL),
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: FAQ_PATHS[locale],
      languages: { "pt-PT": FAQ_PATHS.pt, "en-GB": FAQ_PATHS.en, "x-default": FAQ_PATHS.pt },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      siteName: "Studio Bossa",
      type: "website",
      url: FAQ_PATHS[locale],
      locale: locale === "en" ? "en_GB" : "pt_PT",
    },
    robots: { index: true, follow: true },
  };
}

export function buildFaqJsonLd(locale: Locale) {
  const t = DICT[locale];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "en" ? "en-GB" : "pt-PT",
    url: SITE_URL + FAQ_PATHS[locale],
    mainEntity: t.faq.items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

/* ---------------- Páginas legais ---------------- */

export function buildLegalMetadata(kind: LegalKind, locale: Locale): Metadata {
  const d = LEGAL[kind][locale];
  const paths = LEGAL_PATH[kind];
  return {
    metadataBase: new URL(SITE_URL),
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: {
      canonical: paths[locale],
      languages: { "pt-PT": paths.pt, "en-GB": paths.en, "x-default": paths.pt },
    },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      siteName: "Studio Bossa",
      type: "website",
      url: paths[locale],
      locale: locale === "en" ? "en_GB" : "pt_PT",
    },
    robots: { index: true, follow: true },
  };
}
