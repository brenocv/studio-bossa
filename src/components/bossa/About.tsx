"use client";

import { Shield, Award, Leaf, Users } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";
import { useLocale } from "./i18n";

const valueStyle = [
  { icon: Shield, color: "text-verde-oliva" },
  { icon: Award, color: "text-couro-cognac" },
  { icon: Leaf, color: "text-verde-oliva" },
  { icon: Users, color: "text-couro-cognac" },
];


export function About() {
  const { t } = useLocale();
  const c = t.about;
  const values = c.values.map((v, i) => ({ ...v, ...valueStyle[i] }));
  // Parallax discreto só na imagem principal (limite de 24px)
  const imgParallax = useParallax(0.05, 24);

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-linho-cru-warm py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Imagens */}
          <div className="reveal relative">
            <div
              ref={imgParallax.ref as React.RefObject<HTMLDivElement>}
              className="relative overflow-hidden rounded-xl"
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
              {/* Overlay verde-oliva sutil */}
              <div className="absolute inset-0 bg-verde-oliva/15 mix-blend-multiply" />
            </div>
            <div
              className="absolute -bottom-8 -right-4 w-52 overflow-hidden rounded-lg border-4 border-linho-cru-warm shadow-2xl lg:-right-8 lg:w-64"
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
            <div className="absolute -left-4 top-8 rounded-lg bg-verde-oliva px-6 py-4 text-linho-cru shadow-xl lg:-left-8">
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

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group flex gap-4 rounded-lg border border-linho-cru-deep/50 bg-linho-cru/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-couro-cognac/30 hover:bg-linho-cru hover:shadow-lg hover:shadow-jacaranda/5"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linho-cru-deep ${v.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <v.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-jacaranda">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-jacaranda-soft">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
