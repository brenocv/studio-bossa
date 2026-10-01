"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Lock } from "lucide-react";
import { AppLoginModal } from "./AppLoginModal";
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
    restricted: "Área restrita a clientes.",
    restrictedText: "Instale a app, com o utilizador e a palavra-passe que lhes enviamos.",
    installNote: "Funciona no telemóvel e no computador, sem lojas de aplicações. Depois de instalar, entre com os mesmos dados.",
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
    restricted: "Clients only.",
    restrictedText: "Install the app with the username and password we sent you.",
    installNote: "Works on your phone and computer, no app store needed. Once installed, sign in with the same details.",
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
  const [loginOpen, setLoginOpen] = useState(false);
  const closeLogin = useCallback(() => setLoginOpen(false), []);
  // cor da barra de estado = cor do topo do ecrã do app naquele momento
  const [bar, setBar] = useState({ bg: "#3E2723", dark: false });
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const sampleTop = (v: HTMLVideoElement) => {
    if (!v.videoWidth) return;
    const cv = canvas.current ?? (canvas.current = document.createElement("canvas"));
    cv.width = 1; cv.height = 1;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    try {
      ctx.drawImage(v, Math.floor(v.videoWidth * 0.08), 2, 4, 4, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      const bg = `rgb(${r},${g},${b})`;
      const dark = r * 0.299 + g * 0.587 + b * 0.114 > 150;
      setBar((o) => (o.bg === bg ? o : { bg, dark }));
    } catch { /* sem acesso ao fotograma: mantém a cor */ }
  };

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

  /* Pairar 1 s sobre o telemóvel: vai para o centro do ecrã e aumenta */
  const frame = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const [zoom, setZoom] = useState<{ x: number; y: number; s: number } | null>(null);
  const openZoom = () => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const s = Math.min((window.innerHeight * 0.97) / r.height, (window.innerWidth * 0.9) / r.width, 2.2);
    if (s < 1.03) return; // já está grande o suficiente
    setZoom({ x: window.innerWidth / 2 - (r.left + r.width / 2), y: window.innerHeight / 2 - (r.top + r.height / 2), s });
  };
  const onEnter = () => {
    if (!window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(openZoom, 1000);
  };
  // Ampliado: fecha quando o rato sai do telemóvel (depois de lá ter entrado), com clique fora, Esc ou ao rolar
  const insideZoom = useRef(false);
  const onLeave = () => {
    window.clearTimeout(hoverTimer.current);
    if (!zoom || insideZoom.current) { insideZoom.current = false; setZoom(null); }
  };
  const onMoveInside = () => { if (zoom) insideZoom.current = true; };
  useEffect(() => {
    if (!zoom) return;
    const close = () => { insideZoom.current = false; setZoom(null); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("scroll", close); window.removeEventListener("resize", close); window.removeEventListener("keydown", key); };
  }, [zoom]);
  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="app" className={`relative scroll-mt-20 bg-jacaranda py-14 lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center lg:py-3 ${zoom ? "overflow-visible" : "overflow-hidden"}`}>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-14">
        {/* fundo escuro enquanto o telemóvel está ampliado */}
        <div
          aria-hidden
          style={{ zIndex: 65 }}
          onClick={() => { insideZoom.current = false; setZoom(null); }}
          className={`fixed inset-0 bg-[#1b110f]/80 backdrop-blur-sm transition-opacity duration-500 ${zoom ? "opacity-100" : "pointer-events-none opacity-0"}`}
        />
        {/* Texto + funções */}
        <div className="reveal lg:flex lg:flex-col lg:justify-between lg:py-[6px]">
          <div>
          <span className="eyebrow text-white">{c.eyebrow}</span>
          <h2 className="mt-3 font-italiana text-3xl font-normal leading-[1.05] text-white sm:text-4xl lg:text-[3.25rem] lg:[@media(max-height:760px)]:text-[2.4rem] text-balance">
            {c.titleA}
            <br />
            <span className="text-couro-cognac-light">{c.titleB}</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white lg:text-[17px]">{c.intro}</p>
          </div>

          <ol className="mt-6 max-w-lg border-t lg:my-5 lg:[@media(max-height:760px)]:my-3 border-white/15">
            {c.features.map(([title, text], i) => {
              const on = i === active;
              return (
                <li key={title} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => jump(i)}
                    aria-current={on ? "step" : undefined}
                    className="group relative flex w-full items-baseline gap-4 py-2 text-left lg:py-2 lg:[@media(max-height:760px)]:py-[3px]"
                  >
                    {/* barra de progresso da parte que está a passar */}
                    <span
                      aria-hidden
                      className={`absolute -bottom-px left-0 h-px bg-couro-cognac-light transition-[width] duration-700 ease-out ${on ? "w-full" : "w-0"}`}
                    />
                    <span className={`w-7 shrink-0 font-italiana text-base lg:text-lg transition-colors duration-500 ${on ? "text-couro-cognac-light" : "text-white/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className={`block font-italiana text-lg lg:text-2xl transition-colors duration-500 ${on ? "text-white" : "text-white/55 group-hover:text-white/85"}`}>
                        {title}
                      </span>
                      <span
                        className={`grid text-[13.5px] leading-relaxed lg:text-[15px] text-white/80 transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <span className="overflow-hidden">{text}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div>
          <p className="mt-6 flex max-w-md items-start gap-2.5 text-[13.5px] leading-snug text-white/85 lg:[@media(max-height:760px)]:mt-2">
            <Lock className="mt-[2px] h-4 w-4 shrink-0 text-couro-cognac-light" strokeWidth={1.8} aria-hidden />
            <span><strong className="font-medium text-white">{c.restricted}</strong> {c.restrictedText}</span>
          </p>
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            aria-haspopup="dialog"
            className="btn-lift mt-4 lg:[@media(max-height:760px)]:mt-3 inline-flex items-center gap-3 whitespace-nowrap bg-white px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-jacaranda transition-colors hover:bg-couro-cognac hover:text-white "
          >
            <Download className="h-4 w-4" strokeWidth={2} />
            {c.install}
          </button>
          <p className="mt-3 max-w-md text-[12.5px] lg:hidden leading-relaxed text-white/75">{c.installNote}</p>
          </div>
        </div>

        {/* Telemóvel com o vídeo */}
        <div ref={box} className={`reveal relative mx-auto w-full max-w-[290px] lg:max-w-[min(380px,calc((100svh-6.5rem)*0.46))] lg:self-center`} style={zoom ? { zIndex: 70 } : undefined} data-reveal-delay="120">
          {/* blocos de cor da paleta, por trás */}
          <span aria-hidden className={`absolute -right-8 top-12 h-[62%] w-[70%] bg-couro-cognac transition-opacity duration-500 sm:-right-12 ${zoom ? "opacity-0" : ""}`} />
          <span aria-hidden className={`absolute -left-6 bottom-8 h-[38%] w-[55%] bg-verde-oliva transition-opacity duration-500 sm:-left-10 ${zoom ? "opacity-0" : ""}`} />

          <div
            ref={frame}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onMouseMove={onMoveInside}
            className="relative rounded-[15%/7%] bg-[#1b110f] p-[2.6%] shadow-[0_50px_90px_-35px_rgba(0,0,0,0.75)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
            style={zoom ? { transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.s})` } : undefined}
          >
            <div
              className="relative flex cursor-pointer flex-col overflow-hidden rounded-[13%/6%] outline-offset-4 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-white [container-type:inline-size]"
              style={{ aspectRatio: "1179 / 2556", backgroundColor: bar.bg }}
              role="button"
              tabIndex={0}
              aria-label={playing ? c.pause : c.play}
              onClick={toggle}
              onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
            >
              {/* barra de estado do iPhone (hora, rede, bateria) — o app fica por baixo */}
              <div
                aria-hidden
                className="relative flex shrink-0 items-center justify-between px-[8%] font-semibold transition-colors duration-300"
                style={{ height: "6.4%", color: bar.dark ? "#1b110f" : "#fff", fontSize: "4.6cqw" }}
              >
                <span className="tabular-nums">9:41</span>
                <span className="absolute left-1/2 top-[22%] h-[56%] w-[31%] -translate-x-1/2 rounded-full bg-[#1b110f]" />
                <span className="flex items-center gap-[1.5cqw]">
                  <svg viewBox="0 0 18 12" style={{ width: "5.2cqw" }} fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
                  <svg viewBox="0 0 16 12" style={{ width: "4.8cqw" }} fill="currentColor"><path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .7 3.2L2 4.6a8.6 8.6 0 0 1 6-2.4Zm0 3.8c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.9 6.9 0 0 0 8 4.1a6.9 6.9 0 0 0-4.7 1.8l1.3 1.4A5 5 0 0 1 8 6Zm0 3.7 2-2.1a2.9 2.9 0 0 0-4 0Z"/></svg>
                  <svg viewBox="0 0 27 12" style={{ width: "7.4cqw" }} fill="none"><rect x=".5" y=".5" width="22" height="11" rx="3.2" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor"/><path d="M24.5 4v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2Z" fill="currentColor" opacity=".5"/></svg>
                </span>
              </div>
              <div className="relative grow">
                <video
                  ref={video}
                  className="absolute inset-0 h-full w-full object-cover object-bottom"
                  poster={img("/app/app-demo-poster.jpg")}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={c.video}
                  onTimeUpdate={(e) => { setActive(chapterAt(e.currentTarget.currentTime)); sampleTop(e.currentTarget); }}
                >
                  <source src={img("/app/app-demo.webm")} type="video/webm" />
                  <source src={img("/app/app-demo.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppLoginModal open={loginOpen} onClose={closeLogin} appUrl={APP_URL} locale={locale} />
    </section>
  );
}
