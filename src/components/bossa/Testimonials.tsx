"use client";

import { Star, Quote } from "lucide-react";
import { useLocale } from "./i18n";

export function Testimonials() {
  const { t } = useLocale();
  const c = t.testimonials;

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-linho-cru py-24 lg:py-32"
    >

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="reveal mb-16 text-center"
        >
          <span className="eyebrow text-couro-cognac">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
            {c.titleA}
            <br />
            <span className="text-verde-oliva">{c.titleB}</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {c.items.map((t, idx) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col rounded-xl border border-linho-cru-deep bg-linho-cru-warm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-verde-oliva/40 hover:shadow-xl hover:shadow-verde-oliva/10"
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-verde-oliva/15 font-italiana italiana-sm text-xl font-normal text-verde-oliva">
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
