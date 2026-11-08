"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { img } from "./imagePath";
import { useLocale } from "./i18n";

/**
 * Hero: vídeos e imagens dos projetos em sequência + slogan por baixo.
 *
 * Os vídeos passam do princípio ao fim; as imagens ficam IMAGE_S segundos
 * com um zoom lento e um ligeiro movimento (efeito "Ken Burns").
 * Entre cada um, esmaecer cruzado. Clicar pausa/retoma; os traços no canto
 * inferior esquerdo saltam para qualquer um.
 */
type Slide =
  | { kind: "video"; src: string; poster: string }
  | { kind: "image"; src: string; alt: string };

const v = (n: string): Slide => ({ kind: "video", src: img(`/videos/${n}.mp4`), poster: img(`/videos/${n}-poster.jpg`) });
const p = (path: string, alt: string): Slide => ({ kind: "image", src: img(`/projetos/${path}.jpg`), alt });

const SLIDES: Slide[] = [
  v("hero"),
  p("loft-instinto/01", "Loft Instinto, Fontinha, Porto"),
  p("projeto-oliva/01", "Projeto Oliva, bistrot"),
  p("escritorio-adv/20", "Projeto Advogados"),
  v("hero-2"), // "1102", em câmara lenta (2×)
  p("casa-entre-serras/05", "Casa Entre Serras"),
  p("doce-partilha/05", "Doce Partilha, quarto de avó e neta"),
  p("projeto-trindade/07", "Projeto Trindade, Ramalde"),
  p("loft-instinto/11", "Loft Instinto, sala"),
];
const FADE_S = 1.6; // esmaecer entre slides (segundos)
const IMAGE_S = 6; // tempo de cada imagem (segundos)

// Movimentos do zoom das imagens (vão alternando)
const MOVES = ["kb-a", "kb-b", "kb-c", "kb-d"];

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;

  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [round, setRound] = useState(0); // reinicia a animação da imagem
  const [playing, setPlaying] = useState(true);
  const cur = useRef(0);
  const timer = useRef<number | undefined>(undefined);
  const advancing = useRef(false);
  const act = useRef<number[]>(SLIDES.map(() => 0)); // quantas vezes cada slide já entrou

  const go = useCallback((i: number) => {
    const n = (i + SLIDES.length) % SLIDES.length;
    advancing.current = true;
    const prev = cur.current;
    cur.current = n;
    act.current[n] += 1;
    setCurrent(n);
    setRound((r) => r + 1);
    const nv = vids.current[n];
    if (nv) {
      nv.currentTime = 0;
      nv.play().catch(() => {});
    }
    // o vídeo que saiu pára depois do esmaecer
    window.setTimeout(() => {
      const pv = vids.current[prev];
      if (pv && prev !== cur.current) pv.pause();
      advancing.current = false;
    }, FADE_S * 1000 + 100);
  }, []);

  // arranque
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      return;
    }
    vids.current[0]?.play().catch(() => setPlaying(false));
  }, []);

  // imagens: avançar depois de IMAGE_S (só enquanto está a tocar)
  useEffect(() => {
    window.clearTimeout(timer.current);
    if (!playing || SLIDES[current].kind !== "image") return;
    timer.current = window.setTimeout(() => go(current + 1), (IMAGE_S - FADE_S / 2) * 1000);
    return () => window.clearTimeout(timer.current);
  }, [current, playing, round, go]);

  const onTime = (i: number) => {
    if (i !== cur.current || advancing.current) return;
    const el = vids.current[i]!;
    if (el.duration && el.duration - el.currentTime <= FADE_S) go(i + 1);
  };

  const toggle = () => {
    const el = vids.current[cur.current];
    if (playing) {
      el?.pause();
      setPlaying(false);
    } else {
      el?.play().catch(() => {});
      setPlaying(true);
    }
  };

  const goTo = (i: number) => {
    if (i === cur.current) return;
    setPlaying(true);
    go(i);
  };

  return (
    <section id="topo" className="bg-jacaranda pt-[76px] lg:pt-[84px]">
      <div className="px-6 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
        {/* Vídeos e imagens, com uma margem castanha à volta */}
          <div
            className="relative mx-auto aspect-[4/3] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-linho-cru/60 bg-jacaranda-deep sm:aspect-[16/9] lg:aspect-auto lg:h-[calc(100svh-84px-2.5rem)] lg:min-h-[520px] w-full"
            aria-label={`${h.videoLabel} — ${playing ? h.pauseLabel : h.playLabel}`}
            role="button"
            tabIndex={0}
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }}
          >
            {SLIDES.map((sl, i) => {
              const on = i === current;
              const common = `absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${on ? "opacity-100" : "opacity-0"}`;
              if (sl.kind === "video")
                return (
                  <video
                    key={i}
                    ref={(el) => { vids.current[i] = el; }}
                    className={common}
                    style={{ transitionDuration: `${FADE_S}s` }}
                    src={sl.src}
                    poster={sl.poster}
                    muted
                    playsInline
                    preload={i === 0 ? "auto" : "metadata"}
                    onTimeUpdate={() => onTime(i)}
                    onEnded={() => i === cur.current && go(i + 1)}
                    aria-hidden
                  />
                );
              const near = Math.abs(i - current) <= 1 || (current === SLIDES.length - 1 && i === 0);
              return (
                <div key={i} className={common} style={{ transitionDuration: `${FADE_S}s` }} aria-hidden>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={`a${act.current[i]}`}
                    src={sl.src}
                    alt=""
                    loading={near ? "eager" : "lazy"}
                    decoding="async"
                    className={`h-full w-full object-cover ${MOVES[i % MOVES.length]}`}
                    style={{ animationDuration: `${IMAGE_S + FADE_S}s`, animationPlayState: playing || !on ? "running" : "paused" }}
                  />
                </div>
              );
            })}

            {/* Vinheta suave só para os controlos */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-jacaranda-deep/55 to-transparent" />

            {/* Indicador do vídeo atual — clicar num traço passa para esse vídeo */}
            <div
              className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex`}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`${h.videoLabel} ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  className="group flex h-8 items-center px-1"
                >
                  <span
                    className={`block h-[2px] transition-all duration-700 group-hover:bg-linho-cru ${
                      i === current ? "w-7 bg-linho-cru" : "w-3.5 bg-linho-cru/45"
                    }`}
                  />
                </button>
              ))}
            </div>

          </div>

        {/* Slogan — uma só linha */}
        <div className="px-4 py-8 text-center sm:py-10 lg:py-12">
          <h1 className="animate-fade-up whitespace-nowrap font-italiana text-[clamp(1.25rem,6vw,2.6rem)] font-normal leading-none text-white">
            {h.taglineA} {h.taglineB}
          </h1>
        </div>
      </div>
    </section>
  );
}
