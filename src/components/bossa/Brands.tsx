"use client";

import { img } from "./imagePath";
import { useLocale } from "./i18n";
import { BRANDS } from "./brands";

/** Faixa com as marcas parceiras — passa devagar em loop e pára ao passar o rato. */
export function Brands() {
  const { t } = useLocale();
  const c = t.brands;
  const row = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-linho-cru py-14 lg:py-16" aria-labelledby="marcas-title">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p id="marcas-title" className="eyebrow justify-center text-couro-cognac">{c.eyebrow}</p>
      </div>

      <div className="brands-marquee group relative mt-10 overflow-hidden">
        {/* esbatimento nas pontas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-linho-cru to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-linho-cru to-transparent sm:w-32" />

        <ul className="brands-track flex w-max items-stretch">
          {row.map((b, i) => (
            <li
              key={i}
              aria-hidden={i >= BRANDS.length}
              className="flex h-24 w-52 shrink-0 items-center justify-center border-l border-jacaranda/10 px-6 sm:w-60"
            >
              {b.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img(`/marcas/${b.logo}`)}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-12 max-w-[150px] object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="text-center text-[13px] font-medium uppercase leading-snug tracking-[0.22em] text-jacaranda/60 transition-colors duration-500 hover:text-jacaranda">
                  {b.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
