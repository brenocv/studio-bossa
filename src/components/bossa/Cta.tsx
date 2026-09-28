"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "./i18n";
import { photo } from "./projects";

/** Convite ao contacto — texto à esquerda, foto de projeto à direita. */
export function Cta() {
  const { t } = useLocale();
  const c = t.cta;

  return (
    <section className="bg-verde-oliva py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <h2 className="font-italiana text-4xl font-normal leading-[1.04] text-linho-cru sm:text-5xl text-balance">
            {c.titleA}
            <br />
            <span className="text-linho-cru-deep/80">{c.titleB}</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-linho-cru/85">{c.text}</p>
          <a
            href="#contato"
            className="btn-lift btn-arrow group mt-8 inline-flex items-center gap-2.5 whitespace-nowrap bg-linho-cru px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-3 sm:px-8 sm:text-sm sm:tracking-[0.2em] text-jacaranda transition-colors hover:bg-jacaranda hover:text-linho-cru"
          >
            {c.button}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="reveal relative aspect-[4/3] overflow-hidden bg-verde-oliva-deep" data-reveal-delay="120">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo("ana-e-cesar", "03")}
            alt={c.imgAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
