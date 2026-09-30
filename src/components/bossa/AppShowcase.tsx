"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useLocale } from "./i18n";
import { img } from "./imagePath";

/**
 * Banner "A app Studio Bossa": vídeo do app a ser usado, dentro de um telemóvel,
 * com a lista das funções ao lado. A função que está a passar no vídeo fica
 * destacada; ao clicar numa função, o vídeo salta para essa parte.
 *
 * O app é um PWA: o botão leva ao endereço do app, onde o navegador oferece
 * a instalação. ⚠️ Trocar APP_URL pelo endereço real quando estiver publicado.
 */
const APP_URL = "#";

/** Início (em segundos) de cada parte do vídeo public/app/app-demo.mp4 */
const CHAPTERS = [0, 6.6, 11.1, 15.35, 19.0, 22.45];
const LOOP_HOME = 30.2; // no fim o vídeo volta ao Início

const T = {
  pt: {
    eyebrow: "A app Studio Bossa",
    titleA: "A sua obra,",
    titleB: "na palma da mão",
    intro: "Acompanhe cada fase da remodelação no telemóvel, do primeiro esboço à entrega das chaves.",
    features: [
      ["Acesso privado", "Cada cliente entra com o seu utilizador e palavra-passe."],
      ["Acompanhe a obra", "Fase, progresso e o próximo passo, sempre atualizados."],
      ["Aprove materiais", "Veja a amostra e aprove com um toque, ou peça alternativa."],
      ["Agenda", "Visitas, entregas e reuniões num só calendário."],
      ["Documentos", "Plantas, renders, orçamentos e faturas guardados em segurança."],
      ["Fale com a Bossa", "Escreva à sua arquiteta sempre que precisar."],
    ],
    install: "Instalar a app",
    installNote: "Funciona no telemóvel e no computador, sem passar por lojas de aplicações. No iPhone: abra no Safari e toque em Partilhar → Adicionar ao ecrã principal.",
    video: "Vídeo: o app da Studio Bossa a ser usado",
    pause: "Pausar vídeo",
    play: "Reproduzir vídeo",
  },
  en: {
    eyebrow: "The Studio Bossa app",
    titleA: "Your renovation,",
    titleB: "in the palm of your hand",
    intro: "Follow every stage of your renovation on your phone, from the first sketch to handing over the keys.",
    features: [
      ["Private access", "Each client signs in with their own username and password."],
      ["Follow the works", "Stage, progress and next step, always up to date."],
      ["Approve materials", "See the sample and approve with a tap, or ask for an alternative."],
      ["Calendar", "Visits, deliveries and meetings in one calendar."],
      ["Documents", "Plans, renders, quotes and invoices, stored securely."],
      ["Talk to Bossa", "Write to your architect whenever you need."],
    ],
    install: "Install the app",
    installNote: "Works on your phone and computer, no app store needed. On iPhone: open it in Safari and tap Share → Add to Home Screen.",
    video: "Video: the Studio Bossa app in use",
    pause: "Pause video",
    play: "Play video",
  },
};

function chapterAt(t: number) {
  if (t >= LOOP_HOME) return 1;
  let c = 0;
  CHAPTERS.forEach((start, i) => { if (t >= start) c = i; });
  return c;
}

export function AppShowcase() {
  const { locale } = useLocale();
  const c = T[locale];
  const video = useRef<HTMLVideoElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Só toca quando o banner está visível (poupa bateria e dados)
  useEffect(() => {
    const v = video.current, el = box.current;
    if (!v || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => {});
      else { v.pause(); setPlaying(false); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const jump = (i: number) => {
    const v = video.current;
    if (!v) return;
    v.currentTime = CHAPTERS[i] + 0.05;
    setActive(i);
    v.play().then(() => setPlaying(true)).catch(() => {});
  };

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="app" className="scroll-mt-20 overflow-hidden bg-jacaranda py-14 lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center lg:py-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Texto + funções */}
        <div className="reveal">
          <span className="eyebrow text-white">{c.eyebrow}</span>
          <h2 className="mt-3 font-italiana text-3xl font-normal leading-[1.05] text-white sm:text-4xl lg:text-[2.5rem] lg:[@media(max-height:760px)]:text-[2rem] text-balance">
            {c.titleA}
            <br />
            <span className="text-couro-cognac-light">{c.titleB}</span>
          </h2>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white">{c.intro}</p>

          <ol className="mt-5 max-w-md border-t border-white/15">
            {c.features.map(([title, text], i) => {
              const on = i === active;
              return (
                <li key={title} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => jump(i)}
                    aria-current={on ? "step" : undefined}
                    className="group relative flex w-full items-baseline gap-4 py-2 text-left lg:[@media(max-height:760px)]:py-1.5"
                  >
                    {/* barra de progresso da parte que está a passar */}
                    <span
                      aria-hidden
                      className={`absolute -bottom-px left-0 h-px bg-couro-cognac-light transition-[width] duration-700 ease-out ${on ? "w-full" : "w-0"}`}
                    />
                    <span className={`w-6 shrink-0 font-italiana text-base transition-colors duration-500 ${on ? "text-couro-cognac-light" : "text-white/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className={`block font-italiana text-lg lg:text-xl transition-colors duration-500 ${on ? "text-white" : "text-white/55 group-hover:text-white/85"}`}>
                        {title}
                      </span>
                      <span
                        className={`grid text-[13.5px] leading-relaxed text-white/80 transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <span className="overflow-hidden">{text}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <a
            href={APP_URL}
            className="btn-lift mt-6 lg:[@media(max-height:760px)]:mt-4 inline-flex items-center gap-3 whitespace-nowrap bg-white px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-jacaranda transition-colors hover:bg-couro-cognac hover:text-white "
          >
            <Download className="h-4 w-4" strokeWidth={2} />
            {c.install}
          </a>
          <p className="mt-3 max-w-md text-[12.5px] lg:[@media(max-height:820px)]:hidden leading-relaxed text-white/75">{c.installNote}</p>
        </div>

        {/* Telemóvel com o vídeo */}
        <div ref={box} className="reveal relative mx-auto w-full max-w-[250px] lg:max-w-[min(270px,calc((100svh-9rem)*0.43))]" data-reveal-delay="120">
          {/* blocos de cor da paleta, por trás */}
          <span aria-hidden className="absolute -right-8 top-12 h-[62%] w-[70%] bg-couro-cognac sm:-right-12" />
          <span aria-hidden className="absolute -left-6 bottom-8 h-[38%] w-[55%] bg-verde-oliva sm:-left-10" />

          <div className="relative rounded-[36px] bg-[#1b110f] p-[8px] shadow-[0_50px_90px_-35px_rgba(0,0,0,0.75)]">
            <div
              className="relative cursor-pointer overflow-hidden rounded-[29px] bg-linho-cru outline-offset-4 focus-visible:outline-2 focus-visible:outline-white"
              style={{ aspectRatio: "780 / 1688" }}
              role="button"
              tabIndex={0}
              aria-label={playing ? c.pause : c.play}
              onClick={toggle}
              onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
            >
              <video
                ref={video}
                className="absolute inset-0 h-full w-full object-cover"
                poster={img("/app/app-demo-poster.jpg")}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={c.video}
                onTimeUpdate={(e) => setActive(chapterAt(e.currentTarget.currentTime))}
              >
                <source src={img("/app/app-demo.webm")} type="video/webm" />
                <source src={img("/app/app-demo.mp4")} type="video/mp4" />
              </video>
              <span aria-hidden className="absolute left-1/2 top-[8px] h-[20px] w-[70px] -translate-x-1/2 rounded-full bg-[#1b110f]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
