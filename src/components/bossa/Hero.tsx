"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { img } from "./imagePath";
import { useLocale } from "./i18n";

/**
 * Hero: vídeo emoldurado + slogan por baixo.
 *
 * Os vídeos passam em sequência (1 → 2 → 3 → 4 → 1 …). Perto do fim de cada um,
 * o seguinte começa num segundo leitor por baixo e os dois cruzam-se (esmaecer).
 * Os vídeos já estão codificados em câmara lenta (metade da velocidade,
 * com frames interpolados). Para abrandar ainda mais, reduza PLAYBACK_RATE.
 */
const VIDEOS = [1, 2, 3, 4].map((n) => ({
  src: img(`/videos/hero-${n}.mp4`),
  poster: img(`/videos/hero-${n}-poster.jpg`),
}));
const FADE_S = 1.8; // duração do esmaecer entre vídeos (segundos)
const PLAYBACK_RATE = 1; // 1 = velocidade do ficheiro (já em câmara lenta)

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;

  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);
  const els = [a, b];
  const front = useRef(0); // leitor visível (0 ou 1)
  const loaded = useRef([0, 1]); // índice do vídeo carregado em cada leitor
  const switching = useRef(false);
  const [frontState, setFrontState] = useState(0);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const [va, vb] = [a.current!, b.current!];
    for (const v of [va, vb]) {
      v.muted = true;
      v.playbackRate = PLAYBACK_RATE;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      return;
    }
    va.play().catch(() => setPlaying(false));
  }, []);

  const crossfade = useCallback(() => {
    if (switching.current) return;
    switching.current = true;
    const from = front.current;
    const to = 1 - from;
    const incoming = els[to].current!;
    incoming.currentTime = 0;
    incoming.playbackRate = PLAYBACK_RATE;
    incoming.play().catch(() => {});
    front.current = to;
    setFrontState(to);
    setCurrent(loaded.current[to]);

    window.setTimeout(() => {
      // o leitor que saiu fica a preparar o vídeo seguinte
      const outgoing = els[from].current!;
      outgoing.pause();
      const next = (loaded.current[to] + 1) % VIDEOS.length;
      loaded.current[from] = next;
      outgoing.src = VIDEOS[next].src;
      outgoing.poster = VIDEOS[next].poster;
      outgoing.load();
      switching.current = false;
    }, FADE_S * 1000 + 150);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTime = (i: number) => {
    if (i !== front.current) return;
    const v = els[i].current!;
    if (v.duration && v.duration - v.currentTime <= FADE_S) crossfade();
  };

  const toggle = () => {
    const v = els[front.current].current!;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="topo" className="bg-jacaranda pt-[76px] lg:pt-[84px]">
      <div className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-5 lg:pt-5">
        {/* Vídeo panorâmico, quase de ponta a ponta */}
          <div
            className="relative mx-auto aspect-[4/3] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-linho-cru/60 bg-jacaranda-deep sm:aspect-[16/9] lg:aspect-[16/7] lg:w-3/4"
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
            {[0, 1].map((i) => (
              <video
                key={i}
                ref={els[i]}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${
                  frontState === i ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDuration: `${FADE_S}s` }}
                src={VIDEOS[i].src}
                poster={VIDEOS[i].poster}
                muted
                playsInline
                preload={i === 0 ? "auto" : "metadata"}
                onTimeUpdate={() => onTime(i)}
                onEnded={() => i === front.current && crossfade()}
                aria-hidden
              />
            ))}

            {/* Vinheta suave só para os controlos */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-jacaranda-deep/55 to-transparent" />

            {/* Indicador do vídeo atual */}
            <div className="absolute bottom-4 left-4 flex gap-1.5 sm:bottom-5 sm:left-5" aria-hidden>
              {VIDEOS.map((_, i) => (
                <span
                  key={i}
                  className={`h-[2px] transition-all duration-700 ${
                    i === current ? "w-8 bg-linho-cru" : "w-4 bg-linho-cru/40"
                  }`}
                />
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
