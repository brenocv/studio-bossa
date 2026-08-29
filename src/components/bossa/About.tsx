"use client";

import { Shield, Award, Leaf, Users } from "lucide-react";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";

const values = [
  {
    icon: Shield,
    title: "Garantia de 2 anos",
    description:
      "Todas as obras cobertas por garantia de execução e acompanhamento pós-entrega atencioso.",
    color: "text-verde-oliva",
  },
  {
    icon: Award,
    title: "Acabamento premium",
    description:
      "Materiais nobres — couro, madeira maciça, pedra natural e linho — selecionados a dedo.",
    color: "text-couro-cognac",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Práticas construtivas conscientes com gestão de resíduos e materiais ecoeficientes.",
    color: "text-verde-oliva",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description:
      "Arquitetos, engenheiros e mestres de obra com mais de 15 anos de experiência.",
    color: "text-couro-cognac",
  },
];

export function About() {
  // Parallax mais intenso em ambas as imagens
  const imgParallax = useParallax(0.22);
  const badgeParallax = useParallax(-0.32);
  const textParallax = useParallax(0.08);

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-linho-cru-warm py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Images com parallax intenso */}
          <div className="reveal relative">
            <div
              ref={imgParallax.ref as React.RefObject<HTMLDivElement>}
              className="relative overflow-hidden rounded-3xl will-change-transform"
              style={{ transform: `translateY(${imgParallax.offset}px)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.flatlay}
                alt="Materiais nobres do Studio Bossa: couro, madeira, linho e pedra"
                className="h-[520px] w-full object-cover"
              />
              {/* Overlay verde-oliva sutil */}
              <div className="absolute inset-0 bg-verde-oliva/15 mix-blend-multiply" />
            </div>
            <div
              ref={badgeParallax.ref as React.RefObject<HTMLDivElement>}
              className="absolute -bottom-8 -right-4 w-52 overflow-hidden rounded-2xl border-4 border-linho-cru-warm shadow-2xl will-change-transform lg:-right-8 lg:w-64"
              style={{ transform: `translateY(${badgeParallax.offset}px)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.couroDetalhe}
                alt="Detalhe de couro cognac"
                className="h-44 w-full object-cover lg:h-56"
              />
            </div>
            {/* Floating badge — verde oliva */}
            <div className="absolute -left-4 top-8 rounded-2xl bg-verde-oliva px-6 py-4 text-linho-cru shadow-xl lg:-left-8">
              <div className="font-italiana text-3xl font-normal leading-none">
                15
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider">
                anos de mercado
              </div>
            </div>
          </div>

          {/* Content com parallax sutil contrário */}
          <div
            ref={textParallax.ref as React.RefObject<HTMLDivElement>}
            className="reveal will-change-transform"
            style={{ transform: `translateY(${textParallax.offset}px)` }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac">
              Sobre
            </span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-jacaranda sm:text-5xl text-balance">
              Equilíbrio entre
              <br />
              <span className="italic text-verde-oliva">
                solidez e leveza
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-jacaranda-soft sm:text-[1.05rem]">
              <p>
                O Studio Bossa nasce do desejo de criar interiores que equilibrem
                a solidez da arquitetura com a necessidade de leveza da vida
                cotidiana. O seu posicionamento marca a transição de um conceito
                de 15 anos baseado em uma estética tradicional e visão do
                clássico contemporâneo, para ir de encontro às vivências reais
                de cada espaço e à fluidez de estilos.
              </p>
              <p>
                Para além de criar espaços visualmente marcantes, projetamos
                experiências para serem vividas: lugares que traduzem a
                identidade dos seus habitantes, ambientes que despertam
                sensações e permanecem relevantes ao longo dos anos.
              </p>
              <p>
                Essa é a essência da Bossa:{" "}
                <span className="font-italiana italic text-verde-oliva">
                  naturalidade, sofisticação e singularidade
                </span>{" "}
                de habitar. Nosso objetivo é dar vida a casas resilientes, que
                se movimentam graciosamente no tempo e evoluem organicamente
                junto com as histórias e fases dos seus moradores.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group flex gap-4 rounded-2xl border border-linho-cru-deep/50 bg-linho-cru/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-couro-cognac/30 hover:bg-linho-cru hover:shadow-lg hover:shadow-jacaranda/5"
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
