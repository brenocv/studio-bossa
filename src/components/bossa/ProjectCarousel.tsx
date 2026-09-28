"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "./i18n";
import { PROJECTS, PROJECTS_INDEX, PROJECT_PATH, media, photo } from "./projects";

const AUTOPLAY_MS = 4200; // tempo entre passagens automáticas
const N = PROJECTS.length;

/** Posição de cada imagem conforme a distância ao centro (−2 … +2) e o tamanho do ecrã */
type Layout = { w: number; x: number[]; s: number[]; o: number[] };
const LAYOUTS: Record<"lg" | "sm" | "xs", Layout> = {
  //            centro, ±1,   ±2,   fora
  lg: { w: 32, x: [0, 28, 45, 60], s: [1, 0.78, 0.6, 0.5], o: [1, 0.9, 0.5, 0] },
  sm: { w: 46, x: [0, 42, 70, 90], s: [1, 0.8, 0.6, 0.5], o: [1, 0.8, 0.2, 0] },
  xs: { w: 74, x: [0, 66, 100, 120], s: [1, 0.84, 0.6, 0.5], o: [1, 0.6, 0.1, 0] },
};

export function ProjectCarousel() {
  const { t, locale } = useLocale();
  const c = t.recent;
  const [active, setActive] = useState(0);
  const [bp, setBp] = useState<"lg" | "sm" | "xs">("lg");
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const timer = useRef<number | null>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setBp(window.innerWidth >= 1024 ? "lg" : window.innerWidth >= 640 ? "sm" : "xs");
    onResize();
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = useCallback((d: number) => setActive((a) => (a + d + N) % N), []);

  // Passagem automática (reinicia sempre que o visitante mexe)
  useEffect(() => {
    if (paused || reduce) return;
    timer.current = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused, reduce, go]);

  const L = LAYOUTS[bp];
  const cur = PROJECTS[active];

  return (
    <section id="projetos" className="overflow-hidden bg-linho-cru pb-24 pt-20 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-10 flex flex-col items-start gap-3 sm:mb-14">
          <p className="eyebrow text-couro-cognac">{c.eyebrow}</p>
          <h2 className="font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl">
            {c.title}
          </h2>
        </div>

        {/* Carrossel */}
        <div
          className="reveal relative"
          role="region"
          aria-roledescription="carousel"
          aria-label={c.title}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          {/* Espaçador: dá a altura ao carrossel (mesmo tamanho da imagem central) */}
          <div className="mx-auto aspect-[4/5]" style={{ width: `${L.w}%` }} aria-hidden />

          {PROJECTS.map((p, i) => {
            let d = i - active;
            if (d > N / 2) d -= N;
            if (d < -N / 2) d += N;
            const a = Math.min(Math.abs(d), 3);
            const sign = Math.sign(d);
            const isCenter = d === 0;
            const m = media(p.slug);
            const shadow = isCenter
              ? "0 32px 64px -18px rgba(62,39,35,0.4), 0 12px 24px -10px rgba(62,39,35,0.22)"
              : `0 ${18 - a * 4}px ${34 - a * 6}px -12px rgba(62,39,35,${0.28 - a * 0.06})`;
            // O cartão é sempre o mesmo elemento (só muda a camada clicável por cima),
            // para que o navegador anime o percurso em vez de o recriar na nova posição.
            return (
              <div
                key={p.slug}
                className="group absolute left-1/2 top-0 aspect-[4/5] overflow-hidden bg-linho-cru-deep transition-[transform,opacity,filter,box-shadow] duration-[1000ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform"
                style={{
                  width: `${L.w}%`,
                  transform: `translateX(calc(-50% + ${sign * L.x[a]}%*${100 / L.w})) scale(${L.s[a]})`,
                  opacity: L.o[a],
                  zIndex: 10 - a,
                  filter: isCenter ? "none" : "saturate(0.75) brightness(0.92)",
                  boxShadow: shadow,
                  pointerEvents: a <= 2 ? "auto" : "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo(p.slug, m.cover, "sm")}
                  srcSet={`${photo(p.slug, m.cover, "sm")} 900w, ${photo(p.slug, m.cover)} 1800w`}
                  sizes="(min-width: 1024px) 440px, 74vw"
                  alt={`${p.name[locale]} — ${p.type[locale]}`}
                  loading={a <= 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {isCenter ? (
                  <Link
                    href={PROJECT_PATH[locale](p.slug)}
                    className="absolute inset-0"
                    aria-label={`${p.name[locale]} — ${c.view}`}
                  >
                    <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-jacaranda/85 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-linho-cru transition-transform duration-500 group-hover:translate-y-0">
                      {c.view}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => go(d)}
                    tabIndex={a <= 2 ? 0 : -1}
                    aria-label={p.name[locale]}
                  />
                )}
              </div>
            );
          })}

          {/* Setas */}
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-jacaranda/20 bg-linho-cru/90 text-jacaranda backdrop-blur-sm transition-colors hover:bg-jacaranda hover:text-linho-cru sm:h-14 sm:w-14"
            aria-label={c.prev}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-jacaranda/20 bg-linho-cru/90 text-jacaranda backdrop-blur-sm transition-colors hover:bg-jacaranda hover:text-linho-cru sm:h-14 sm:w-14"
            aria-label={c.next}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Legenda do projeto central */}
        <div className="mt-8 text-center" aria-live="polite">
          <p key={`t-${active}`} className="animate-fade-in text-[11px] font-medium uppercase tracking-[0.24em] text-jacaranda-soft/70">
            {cur.type[locale]}
          </p>
          <Link
            key={`n-${active}`}
            href={PROJECT_PATH[locale](cur.slug)}
            className="animate-fade-in mt-2 inline-block font-italiana text-3xl text-jacaranda transition-colors hover:text-couro-cognac sm:text-4xl"
          >
            {cur.name[locale]}
          </Link>
          {/* Progresso */}
          <div className="mx-auto mt-6 flex max-w-xs justify-center gap-1.5" aria-hidden>
            {PROJECTS.map((p, i) => (
              <span
                key={p.slug}
                className={`h-px flex-1 transition-colors duration-500 ${i === active ? "bg-couro-cognac" : "bg-jacaranda/15"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={PROJECTS_INDEX[locale]}
            className="btn-lift btn-arrow group inline-flex items-center gap-3 border border-jacaranda px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-jacaranda transition-colors hover:bg-jacaranda hover:text-linho-cru"
          >
            {c.more}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
