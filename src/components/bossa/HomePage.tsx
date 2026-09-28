"use client";

import { useReveal } from "./useReveal";
import { LocaleProvider } from "./i18n";
import type { Locale } from "./content";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Services } from "./Services";
import { Process } from "./Process";
import { ProjectCarousel } from "./ProjectCarousel";
import { Preloader } from "./Preloader";
import { About } from "./About";
import { Testimonials } from "./Testimonials";
import { Brands } from "./Brands";
import { Cta } from "./Cta";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function HomePage({ locale, jsonLd }: { locale: Locale; jsonLd: object[] }) {
  useReveal();

  return (
    <LocaleProvider locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
        <Header />
        <main className="flex-1">
          <Hero />
          <ProjectCarousel />
          <Marquee />
          <Services />
          <Cta />
          <Process />
          <About />
          <Testimonials />
          <Contact />
          <Brands />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}
