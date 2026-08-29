"use client";

import { useState } from "react";
import type { RefObject } from "react";
import { Maximize, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "./data";
import { useParallax } from "./useParallax";

export function Projects() {
  const [active, setActive] = useState(0);
  const headerParallax = useParallax(0.15);

  return (
    <section id="projetos" className="relative bg-linho-cru py-24 lg:py-32">
      {/* Acentos decorativos verde-oliva */}
      <div className="absolute left-0 top-0 h-24 w-24 bg-verde-oliva/10 rounded-br-[3rem]" />
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-couro-cognac/10 rounded-tl-[3rem]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={headerParallax.ref as RefObject<HTMLDivElement>}
          className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end will-change-transform"
          style={{ transform: `translateY(${headerParallax.offset}px)` }}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac">
              Portfólio
            </span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-jacaranda sm:text-5xl text-balance">
              Projetos que{" "}
              <span className="italic text-verde-oliva">inspiram</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-jacaranda-soft">
            Uma seleção de transformações reais que entregamos aos nossos
            clientes. Cada projeto é único, assim como a história de quem o
            habita.
          </p>
        </div>

        {/* Featured layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large featured image */}
          <div className="reveal relative col-span-2 overflow-hidden rounded-3xl">
            <div className="group relative h-[400px] overflow-hidden rounded-3xl lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={PROJECTS[active].image}
                alt={PROJECTS[active].title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-all duration-700"
                key={active}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jacaranda via-jacaranda/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block rounded-full bg-couro-cognac/95 px-4 py-1.5 text-sm font-medium text-linho-cru">
                  {PROJECTS[active].type}
                </span>
                <h3 className="mt-4 font-italiana text-3xl font-normal text-linho-cru">
                  {PROJECTS[active].title}
                </h3>
                <p className="mt-2 max-w-lg text-base text-linho-cru/85">
                  {PROJECTS[active].description}
                </p>
                <div className="mt-5 flex items-center gap-6 text-sm text-linho-cru/85">
                  <span className="flex items-center gap-2">
                    <Maximize className="h-4 w-4 text-couro-cognac-light" />
                    {PROJECTS[active].area}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-couro-cognac-light" />
                    {PROJECTS[active].duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail list */}
          <div className="reveal flex flex-col gap-3">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.title}
                onClick={() => setActive(idx)}
                className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-2 text-left transition-all duration-300 ${
                  active === idx
                    ? "border-verde-oliva bg-verde-oliva/10"
                    : "border-linho-cru-deep bg-linho-cru-warm/40 hover:border-couro-cognac/30 hover:bg-linho-cru-warm"
                }`}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <h4 className="truncate text-sm font-semibold text-jacaranda">
                    {project.title}
                  </h4>
                  <p className="truncate text-xs text-jacaranda-soft/80">
                    {project.type}
                  </p>
                </div>
                <ArrowUpRight
                  className={`h-4 w-4 shrink-0 transition-all ${
                    active === idx
                      ? "text-verde-oliva"
                      : "text-jacaranda/30 group-hover:text-jacaranda/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
