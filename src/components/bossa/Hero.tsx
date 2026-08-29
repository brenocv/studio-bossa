"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "./data";
import { useParallax } from "./useParallax";

export function Hero() {
  // Parallax intenso no background (mais lento que o scroll)
  const bgParallax = useParallax(0.35);
  // Parallax forte no conteúdo (efeito de profundidade contrário)
  const contentParallax = useParallax(-0.18);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background com parallax */}
      <div ref={bgParallax.ref as RefObject<HTMLDivElement>} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 -top-[10%] h-[120%]">
          <Image
            src={IMAGES.hero}
            alt="Sala de estar em verde oliva com marcenaria em jacarandá — projeto Studio Bossa"
            fill
            priority
            sizes="100vw"
            className="object-cover animate-slow-zoom"
            style={{ transform: `translateY(${bgParallax.offset}px)` }}
          />
          {/* Overlays suaves sobre a imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-jacaranda/75 via-jacaranda/40 to-jacaranda/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-jacaranda/60 via-transparent to-jacaranda/30" />
          {/* Tom verde-oliva sutil para coesão cromática */}
          <div className="absolute inset-0 bg-verde-oliva/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Conteúdo com parallax contrário */}
      <div
        ref={contentParallax.ref as RefObject<HTMLDivElement>}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 will-change-transform"
        style={{ transform: `translateY(${contentParallax.offset}px)` }}
      >
        <div className="max-w-3xl">
          <div
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-linho-cru/40 bg-verde-oliva/30 px-4 py-1.5 text-sm font-medium text-linho-cru backdrop-blur-sm"
            style={{ animationDelay: "0s", animationFillMode: "both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-couro-cognac-light" />
            Design de Interiores & Arquitetura de Alto Padrão
          </div>

          <h1
            className="animate-fade-up font-italiana text-5xl font-normal leading-[1.05] tracking-tight text-linho-cru text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            O luxo de se
            <br />
            <span className="italic text-couro-cognac-light">
              sentir em casa
            </span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-linho-cru/85"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            O Studio Bossa une arquitetura precisa e sensibilidade estética
            para criar ambientes que despertam sensações. Projetos autorais com
            marcenaria nobre, couro, pedra natural e linho — onde cada
            material conta uma história.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <a
              href="#contato"
              className="btn-shine btn-lift btn-arrow group inline-flex items-center justify-center gap-2 rounded-full bg-couro-cognac px-7 py-3.5 text-base font-semibold text-linho-cru hover:bg-couro-cognac-light hover:shadow-xl hover:shadow-couro-cognac/40"
            >
              Solicite seu orçamento
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#projetos"
              className="btn-lift inline-flex items-center justify-center rounded-full border border-linho-cru/40 px-7 py-3.5 text-base font-semibold text-linho-cru transition-all hover:border-linho-cru hover:bg-verde-oliva/30"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "0.6s", animationFillMode: "both" }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-linho-cru/50 p-1.5">
          <div className="scroll-bounce h-2 w-1 rounded-full bg-couro-cognac" />
        </div>
      </div>
    </section>
  );
}
