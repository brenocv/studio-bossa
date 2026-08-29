"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { SERVICES } from "./data";
import { useParallax } from "./useParallax";

export function Services() {
  // Parallax mais intenso no título
  const headerParallax = useParallax(0.18);

  return (
    <section id="servicos" className="relative bg-linho-cru py-24 lg:py-32">
      {/* Borda lateral verde-oliva decorativa */}
      <div className="absolute left-0 top-1/4 h-32 w-1 bg-verde-oliva/40" />
      <div className="absolute right-0 top-2/3 h-40 w-1 bg-couro-cognac/30" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          ref={headerParallax.ref as RefObject<HTMLDivElement>}
          className="reveal mb-16 max-w-3xl will-change-transform"
          style={{ transform: `translateY(${headerParallax.offset}px)` }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac">
            Nossos serviços
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-jacaranda sm:text-5xl text-balance">
            Tudo para transformar
            <br />
            <span className="italic text-verde-oliva">o seu espaço</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-jacaranda-soft">
            Do primeiro esboço ao último acabamento, cobrimos cada etapa do
            processo com excelência técnica e sensibilidade estética. Marcenaria
            própria, parceiros selecionados e materiais nobres — couro, madeira,
            linho e pedra natural — traduzem o conceito de luxo discreto em cada
            detalhe do projeto.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              className={`reveal group relative overflow-hidden rounded-3xl border border-linho-cru-deep bg-linho-cru-warm transition-all duration-500 hover:border-couro-cognac/40 ${
                idx % 2 === 0 ? "md:mt-0" : "md:mt-12"
              }`}
              data-reveal-delay={`${idx * 80}`}
            >
              {/* Image com zoom no hover */}
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jacaranda via-jacaranda/30 to-transparent" />
                {/* Tag com fundo verde-oliva alternando com couro */}
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${
                    idx % 2 === 0
                      ? "bg-verde-oliva/90 text-linho-cru"
                      : "bg-linho-cru/90 text-jacaranda"
                  }`}
                >
                  {service.tagline}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <h3 className="font-italiana text-2xl font-normal text-jacaranda">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-jacaranda/40 transition-all group-hover:text-couro-cognac group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 text-base leading-relaxed text-jacaranda-soft">
                  {service.description}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-jacaranda-soft"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-verde-oliva"
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barra inferior oliva no hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-verde-oliva transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
