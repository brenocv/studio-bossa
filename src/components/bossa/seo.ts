/**
 * SEO — metadados, hreflang e dados estruturados (Schema.org) por idioma.
 *
 * ⚠️ SITE_URL: trocar pelo domínio definitivo quando o site sair do GitHub Pages.
 *    Enquanto estiver em teste, estes URLs apenas aparecem nas tags de SEO.
 */
import type { Metadata } from "next";
import { DICT, type Locale } from "./content";

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
      images: [{ url: "/videos/hero-1-poster.jpg", width: 1920, height: 1066 }],
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
      addressLocality: "Porto",
      addressRegion: "Porto",
      addressCountry: "PT",
      // TODO: streetAddress e postalCode reais
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

  return [business, website, faq];
}

export { PATHS };
