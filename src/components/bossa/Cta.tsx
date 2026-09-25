"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";
import { useLocale } from "./i18n";

export function Cta() {
  const { t } = useLocale();
  const c = t.cta;
  // Parallax suave no fundo (máx. 50px)
  const bgParallax = useParallax(0.12, 50);

  return (
    <section className="relative h-[520px] overflow-hidden bg-jacaranda">
      <div
        ref={bgParallax.ref as RefObject<HTMLDivElement>}
        className="absolute inset-x-0 -top-[10%] h-[120%]"
        style={{ transform: `translateY(${bgParallax.offset}px)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={IMAGES.sala2}
          alt={c.imgAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay jacaranda + tom verde-oliva */}
        <div className="absolute inset-0 bg-jacaranda/75" />
        <div className="absolute inset-0 bg-verde-oliva/15 mix-blend-multiply" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="reveal max-w-2xl text-center">
          <h2 className="font-italiana text-4xl font-normal leading-[1.04] text-linho-cru sm:text-5xl lg:text-6xl text-balance">
            {c.titleA}
            <br />
            <span className="text-couro-cognac-light">{c.titleB}</span>
          </h2>
          <p className="mt-5 text-lg text-linho-cru/85">
            {c.text}
          </p>
          <a
            href="#contato"
            className="btn-lift btn-arrow group mt-8 inline-flex items-center gap-2 rounded-full bg-couro-cognac px-8 py-4 text-base font-medium tracking-wide text-linho-cru hover:bg-couro-cognac-light"
          >
            {c.button}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
