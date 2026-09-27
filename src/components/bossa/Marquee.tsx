"use client";

import { useLocale } from "./i18n";


export function Marquee() {
  const { t } = useLocale();
  const items = t.marquee;
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-linho-claro py-5">
      {/* Track do marquee */}
      <div className="flex marquee-track gap-12 whitespace-nowrap py-1">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-italiana text-[1.7rem] text-jacaranda/80"
          >
            {item}
            <span className="h-1 w-1 bg-couro-cognac-light" aria-hidden />
          </span>
        ))}
      </div>

      {/* Stats */}
      <div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {t.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-italiana text-5xl font-normal text-couro-cognac sm:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-jacaranda/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12" />
    </section>
  );
}
