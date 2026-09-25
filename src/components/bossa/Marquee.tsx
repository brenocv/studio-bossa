"use client";

import { STATS } from "./data";

export function Marquee() {
  const items = [
    "Design de Interiores",
    "Marcenaria Autoral",
    "Projetos 3D Fotorrealistas",
    "Arquitetura & Obras",
    "Reformas Completas",
    "Pedra Natural",
    "Couro & Linho",
    "Iluminação Cenográfica",
  ];
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-jacaranda py-5">
      {/* Track do marquee */}
      <div className="flex marquee-track gap-12 whitespace-nowrap py-1">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-italiana text-2xl text-linho-cru/85"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-couro-cognac-light" aria-hidden />
          </span>
        ))}
      </div>

      {/* Stats */}
      <div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-italiana text-5xl font-normal text-couro-cognac-light sm:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-linho-cru/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Linha fina verde-oliva na borda inferior */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-verde-oliva-light to-transparent" />
    </section>
  );
}
