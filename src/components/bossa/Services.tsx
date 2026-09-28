"use client";

import { useLocale } from "./i18n";

/** Serviços: quatro imagens lado a lado, cada uma com título e uma frase. */
export function Services() {
  const { t } = useLocale();
  const c = t.services;

  return (
    <section id="servicos" className="relative bg-linho-cru py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow text-jacaranda">{c.eyebrow}</span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
              {c.titleA} <span className="text-couro-cognac">{c.titleAccent}</span>
              <br />
              {c.titleB}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-jacaranda-soft sm:text-lg lg:justify-self-end">
            {c.intro}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
          {c.items.map((s, i) => (
            <li key={s.id} id={s.id} className="reveal group" data-reveal-delay={`${i * 90}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-linho-cru-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="mt-5 font-italiana italiana-sm text-2xl text-jacaranda lg:text-[1.6rem]">
                {s.title}
              </h3>
              <span className="mt-3 block h-px w-8 bg-couro-cognac transition-all duration-500 group-hover:w-16" aria-hidden />
              <p className="mt-3 text-[15px] leading-relaxed text-jacaranda-soft">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
