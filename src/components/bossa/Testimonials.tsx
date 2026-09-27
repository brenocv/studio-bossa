"use client";

import { useLocale } from "./i18n";

/** Testemunhos — versão compacta e minimalista. */
export function Testimonials() {
  const { t } = useLocale();
  const c = t.testimonials;

  return (
    <section id="depoimentos" className="bg-linho-claro py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal flex flex-col items-start gap-3">
          <span className="eyebrow text-couro-cognac">{c.eyebrow}</span>
          <h2 className="font-italiana text-3xl font-normal leading-tight text-jacaranda sm:text-4xl">
            {c.titleA} {c.titleB}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {c.items.map((item, idx) => (
            <figure key={item.name} className="reveal border-t border-jacaranda/15 pt-6" data-reveal-delay={`${idx * 90}`}>
              <span className="block font-italiana text-4xl leading-none text-couro-cognac" aria-hidden>
                “
              </span>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-jacaranda-soft">{item.quote}</blockquote>
              <figcaption className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-jacaranda/55">
                {item.name}
                <span className="mx-2 text-verde-oliva">·</span>
                {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
