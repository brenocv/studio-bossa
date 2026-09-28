"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LocaleProvider, useLocale } from "./i18n";
import type { Locale } from "./content";
import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Lightbox } from "./Lightbox";
import { useReveal } from "./useReveal";
import { PROJECTS, PROJECTS_INDEX, PROJECT_PATH, getProject, media, photo } from "./projects";
import type { Img } from "./projects-media";

export function ProjectPage({
  slug,
  locale,
  jsonLd,
}: {
  slug: string;
  locale: Locale;
  jsonLd: object;
}) {
  return (
    <LocaleProvider
      locale={locale}
      alternates={{ pt: PROJECT_PATH.pt(slug), en: PROJECT_PATH.en(slug) }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
        <Header />
        <ProjectBody slug={slug} />
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}

type Box = { list: { src: string; alt: string }[]; index: number; title: string } | null;

function ProjectBody({ slug }: { slug: string }) {
  useReveal();
  const { t, locale, home } = useLocale();
  const p = t.projectPage;
  const project = getProject(slug)!;
  const m = media(slug);
  const name = project.name[locale];
  const [box, setBox] = useState<Box>(null);

  const toList = (imgs: Img[], label: string) =>
    imgs.map((im, i) => ({ src: photo(slug, im), alt: `${name} — ${label} ${i + 1}` }));
  const gallery = toList(m.gallery, p.photo);

  const idx = PROJECTS.findIndex((x) => x.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextMedia = media(next.slug);
  const coverImg = m.gallery.find((g) => g.f === m.cover)!;

  return (
    <main className="flex-1 pt-[84px] lg:pt-[96px]">
      {/* Cabeçalho do projeto */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:pt-14">
        <Link
          href={PROJECTS_INDEX[locale]}
          className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-jacaranda-soft transition-colors hover:text-couro-cognac"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {p.back}
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-jacaranda">{project.type[locale]}</p>
            <h1 className="mt-5 font-italiana text-[clamp(2.6rem,6vw,5.25rem)] font-normal leading-[1] text-jacaranda">
              {name}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-jacaranda-soft sm:text-lg">
            {project.summary[locale]}
          </p>
        </div>

        {/* Capa emoldurada */}
        <button
          type="button"
          onClick={() => setBox({ list: gallery, index: m.gallery.indexOf(coverImg), title: name })}
          className="mt-10 block w-full"
          aria-label={`${name} — ${p.photo}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo(slug, coverImg)}
            alt={`${name} — ${project.type[locale]}`}
            width={coverImg.w}
            height={coverImg.h}
            className="max-h-[78vh] w-full object-cover"
          />
        </button>
      </section>

      {/* Galeria */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="reveal mb-10 flex items-end justify-between gap-6">
          <h2 className="font-italiana text-4xl font-normal leading-none text-jacaranda sm:text-5xl">
            {p.gallery}
          </h2>
          <span className="text-[11px] uppercase tracking-[0.24em] text-jacaranda-soft/70">
            {m.gallery.length} {p.photos}
          </span>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {m.gallery.map((im, i) => (
            <button
              key={im.f}
              type="button"
              onClick={() => setBox({ list: gallery, index: i, title: name })}
              className="group mb-4 block w-full overflow-hidden bg-linho-cru-deep sm:mb-5"
              aria-label={`${p.photo} ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo(slug, im, "sm")}
                alt={gallery[i].alt}
                width={im.w}
                height={im.h}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Convite */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="reveal grid gap-8 bg-jacaranda px-7 py-12 text-white sm:px-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-italiana text-4xl font-normal leading-[1.05] sm:text-5xl">{p.ctaTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{p.ctaText}</p>
          </div>
          <div className="lg:text-right">
            <Link
              href={home + "#contato"}
              className="btn-lift btn-arrow inline-flex items-center gap-3 rounded-full bg-couro-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide hover:bg-couro-cognac-light"
            >
              {p.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Próximo projeto */}
        <Link
          href={PROJECT_PATH[locale](next.slug)}
          className="group mt-6 flex items-center gap-5 border border-linho-cru-deep p-3 pr-6 transition-colors hover:border-couro-cognac/40"
        >
          <span className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo(next.slug, nextMedia.cover, "sm")} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </span>
          <span className="flex-1">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-jacaranda-soft/70">{p.next}</span>
            <span className="mt-1 block font-italiana text-2xl text-jacaranda sm:text-3xl">{next.name[locale]}</span>
          </span>
          <ArrowRight className="h-5 w-5 text-jacaranda/50 transition-all group-hover:translate-x-1 group-hover:text-couro-cognac" />
        </Link>
      </section>

      {box && (
        <Lightbox
          images={box.list}
          index={box.index}
          title={box.title}
          onClose={() => setBox(null)}
          onIndex={(i) => setBox({ ...box, index: i })}
        />
      )}
    </main>
  );
}
