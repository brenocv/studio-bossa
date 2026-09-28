"use client";

import { LocaleProvider, useLocale } from "./i18n";
import type { Locale } from "./content";
import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { RecentProjects } from "./RecentProjects";
import { useReveal } from "./useReveal";
import { PROJECTS_INDEX } from "./projects";

/** Página com todos os projetos (/projetos/ e /en/projects/). */
export function ProjectsIndexPage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale} alternates={PROJECTS_INDEX}>
      <Preloader />
      <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
        <Header />
        <IndexBody />
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}

function IndexBody() {
  useReveal();
  const { t } = useLocale();
  const c = t.projectsIndex;
  return (
    <main className="flex-1 pt-[84px] lg:pt-[96px]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:pb-16 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-jacaranda">{c.eyebrow}</p>
            <h1 className="mt-5 font-italiana text-[clamp(2.8rem,6vw,5.25rem)] font-normal leading-none text-jacaranda">
              {c.title}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-jacaranda-soft sm:text-lg">{c.intro}</p>
        </div>
      </section>
      <RecentProjects all />
    </main>
  );
}
