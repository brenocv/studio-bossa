"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { img } from "./imagePath";
import { useParallax } from "./useParallax";
import { useLocale } from "./i18n";

const HERO_VIDEO_MP4 = img("/videos/hero-1.mp4");
const HERO_VIDEO_WEBM = img("/videos/hero-1.webm");
const HERO_POSTER = img("/videos/hero-1-poster.jpg");

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;
  // Parallax discreto no vídeo de fundo (máx. 70px). O texto NÃO tem parallax.
  const bgParallax = useParallax(0.12, 70);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      setPlaying(false);
      return;
    }
    v.play().catch(() => setPlaying(false));
  }, []);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-jacaranda-deep"
    >
      {/* Vídeo de fundo */}
      <div
        ref={bgParallax.ref as RefObject<HTMLDivElement>}
        className="absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-x-0 -top-[8%] h-[116%]"
          style={{ transform: `translate3d(0, ${bgParallax.offset}px, 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_POSTER}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            poster={HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setReady(true)}
          >
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
            <source src={HERO_VIDEO_WEBM} type="video/webm" />
          </video>
          {/* Véus para legibilidade — mais densos à esquerda e em baixo */}
          <div className="absolute inset-0 bg-gradient-to-r from-jacaranda-deep/80 via-jacaranda/30 to-transparent" />
          <div className="absolute inset-0 bg-jacaranda-deep/35 md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-jacaranda-deep/85 via-transparent to-jacaranda-deep/35" />
          <div className="absolute inset-0 bg-verde-oliva/5 mix-blend-multiply" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pt-36 pb-10 lg:pb-12">
        <div className="max-w-4xl">
          <h1
            className="animate-fade-up eyebrow max-w-xl !items-start leading-[1.9] text-linho-cru/80 before:mt-[0.95em] before:shrink-0"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            {h.h1}
          </h1>

          <p
            className="animate-fade-up mt-6 font-italiana text-[clamp(3.1rem,8.2vw,7.75rem)] font-normal leading-[0.94] tracking-[-0.01em] text-linho-cru"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            {h.taglineA}
            <br />
            <span className="text-couro-cognac-light">{h.taglineB}</span>
          </p>

          <div
            className="animate-fade-up mt-10 grid gap-8 md:grid-cols-[minmax(0,30rem)_auto] md:items-end md:gap-16"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <p className="text-base leading-relaxed text-linho-cru/80 sm:text-lg">
              {h.intro}
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contato"
                className="btn-lift btn-arrow group inline-flex items-center justify-center gap-3 rounded-full bg-couro-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide text-linho-cru hover:bg-couro-cognac-light"
              >
                {h.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projetos"
                className="link-line text-[15px] font-medium tracking-wide text-linho-cru"
              >
                {h.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé do hero */}
        <div
          className="animate-fade-in mt-14 flex items-center justify-between border-t border-linho-cru/20 pt-5 pr-20 lg:pr-24 text-[11px] uppercase tracking-[0.28em] text-linho-cru/60"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <span className="hidden sm:inline">41°09′N · 8°37′W</span>
          <a href="#servicos" className="flex items-center gap-3 transition-colors hover:text-linho-cru">
            <span className="scroll-line" aria-hidden />
            {h.scroll}
          </a>
          <button
            type="button"
            onClick={toggleVideo}
            className="flex items-center gap-2 uppercase transition-colors hover:text-linho-cru"
            aria-label={playing ? h.pauseLabel : h.playLabel}
          >
            {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {playing ? h.pause : h.play}
          </button>
        </div>
      </div>
    </section>
  );
}
