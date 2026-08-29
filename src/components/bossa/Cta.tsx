"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";

export function Cta() {
  // Parallax muito forte na imagem de fundo
  const bgParallax = useParallax(0.45);

  return (
    <section className="relative h-[480px] overflow-hidden">
      <div
        ref={bgParallax.ref as RefObject<HTMLDivElement>}
        className="absolute inset-0 -top-[15%] h-[130%] will-change-transform"
        style={{ transform: `translateY(${bgParallax.offset}px)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={IMAGES.sala2}
          alt="Sala de estar sofisticada em tons terrosos"
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
          <h2 className="font-italiana text-4xl font-normal leading-tight text-linho-cru sm:text-5xl text-balance">
            Pronto para transformar
            <br />
            <span className="italic text-couro-cognac-light">
              o seu espaço?
            </span>
          </h2>
          <p className="mt-5 text-lg text-linho-cru/85">
            Solicite um orçamento sem compromisso. A primeira visita técnica é
            por nossa conta.
          </p>
          <a
            href="#contato"
            className="btn-shine btn-lift btn-arrow group mt-8 inline-flex items-center gap-2 rounded-full bg-couro-cognac px-8 py-4 text-base font-semibold text-linho-cru hover:bg-couro-cognac-light hover:shadow-xl hover:shadow-couro-cognac/40"
          >
            Fale com um especialista
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
