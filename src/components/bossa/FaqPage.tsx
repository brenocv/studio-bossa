"use client";

import { LocaleProvider } from "./i18n";
import type { Locale } from "./content";
import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Faq } from "./Faq";
import { useReveal } from "./useReveal";

export const FAQ_PATH: Record<Locale, string> = { pt: "/perguntas/", en: "/en/faq/" };

/** Página de perguntas frequentes (/perguntas/ e /en/faq/). */
export function FaqPage({ locale, jsonLd }: { locale: Locale; jsonLd: object }) {
  return (
    <LocaleProvider locale={locale} alternates={FAQ_PATH}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Preloader />
      <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
        <Header />
        <Body />
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}

function Body() {
  useReveal();
  return (
    <main className="flex-1 pt-[76px] lg:pt-[84px]">
      <Faq />
    </main>
  );
}
