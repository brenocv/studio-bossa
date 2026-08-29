"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { useParallax } from "./useParallax";

export function Testimonials() {
  const headerParallax = useParallax(0.12);

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-linho-cru py-24 lg:py-32"
    >
      {/* Padrão decorativo verde-oliva */}
      <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-verde-oliva/10 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-couro-cognac/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={headerParallax.ref as RefObject<HTMLDivElement>}
          className="reveal mb-16 text-center will-change-transform"
          style={{ transform: `translateY(${headerParallax.offset}px)` }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac">
            Depoimentos
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-jacaranda sm:text-5xl text-balance">
            O que dizem
            <br />
            <span className="italic text-verde-oliva">nossos clientes</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col rounded-3xl border border-linho-cru-deep bg-linho-cru-warm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-verde-oliva/40 hover:shadow-xl hover:shadow-verde-oliva/10"
              data-reveal-delay={`${idx * 100}`}
            >
              {/* Quote verde-oliva */}
              <Quote className="h-8 w-8 text-verde-oliva/40 transition-colors duration-500 group-hover:text-verde-oliva" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-couro-cognac text-couro-cognac"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-jacaranda-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-linho-cru-deep pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-verde-oliva/15 font-italiana text-lg font-normal text-verde-oliva">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-jacaranda">{t.name}</div>
                    <div className="text-sm text-jacaranda-soft/80">
                      {t.role}
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
