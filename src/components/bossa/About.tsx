"use client";

import Image from "next/image";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";
import { useLocale } from "./i18n";



export function About() {
  const { t } = useLocale();
  const c = t.about;
  // Parallax discreto só na imagem principal (limite de 24px)
  const imgParallax = useParallax(0.05, 24);

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-linho-cru py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Imagens */}
          <div className="reveal relative">
            <div
              ref={imgParallax.ref as React.RefObject<HTMLDivElement>}
              className="relative overflow-hidden "
              style={{ transform: `translateY(${imgParallax.offset}px)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={IMAGES.flatlay}
                alt={c.imgAlt}
                width={800}
                height={520}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-8 -right-4 w-52 overflow-hidden border-4 border-linho-cru shadow-2xl lg:-right-8 lg:w-64"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={IMAGES.couroDetalhe}
                alt={c.detailAlt}
                width={400}
                height={224}
                className="h-44 w-full object-cover lg:h-56"
              />
            </div>
            {/* Floating badge — verde oliva */}
            <div className="absolute -left-4 top-8 border-l-2 border-verde-oliva bg-jacaranda px-6 py-4 text-linho-cru shadow-xl lg:-left-8">
              <div className="font-italiana text-3xl font-normal leading-none">
                15
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider">
                {c.badge}
              </div>
            </div>
          </div>

          {/* Texto */}
          <div
            className="reveal"
          >
            <span className="eyebrow text-couro-cognac">
              {c.eyebrow}
            </span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
              {c.titleA}
              <br />
              <span className="text-verde-oliva">{c.titleB}</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-jacaranda-soft sm:text-[1.05rem]">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
              <p>
                {c.p3a}{" "}
                <span className="font-italiana italiana-sm text-[1.3em] leading-none text-verde-oliva">{c.p3accent}</span>{" "}
                {c.p3b}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
