"use client";

import { useReveal } from "@/components/bossa/useReveal";
import { Header } from "@/components/bossa/Header";
import { Hero } from "@/components/bossa/Hero";
import { Marquee } from "@/components/bossa/Marquee";
import { Services } from "@/components/bossa/Services";
import { Process } from "@/components/bossa/Process";
import { Projects } from "@/components/bossa/Projects";
import { About } from "@/components/bossa/About";
import { Testimonials } from "@/components/bossa/Testimonials";
import { Cta } from "@/components/bossa/Cta";
import { Faq } from "@/components/bossa/Faq";
import { Contact } from "@/components/bossa/Contact";
import { Footer } from "@/components/bossa/Footer";

export default function Home() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <Cta />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
