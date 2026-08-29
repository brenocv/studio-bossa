"use client";

import { STATS } from "./data";
import { useParallax } from "./useParallax";

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

  // Parallax mais marcante para os stats moverem ao scroll
  const statsParallax = useParallax(0.12);

  return (
    <section className="relative overflow-hidden bg-jacaranda py-5">
      {/* Track do marquee */}
      <div className="flex marquee-track gap-12 whitespace-nowrap py-1">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-lg font-light tracking-wide text-linho-cru/85"
          >
            {item}
            <span className="text-couro-cognac-light">✦</span>
          </span>
        ))}
      </div>

      {/* Stats com fundo oliva e parallax sutil */}
      <div
        ref={statsParallax.ref as RefObject<HTMLDivElement>}
        className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-8 px-6 will-change-transform md:grid-cols-4"
        style={{ transform: `translateY(${statsParallax.offset}px)` }}
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-italiana text-4xl font-normal text-couro-cognac-light sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-linho-cru/60">
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
