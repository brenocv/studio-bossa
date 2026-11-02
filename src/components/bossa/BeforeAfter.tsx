"use client";

import { useRef, useState } from "react";

/**
 * Antes e depois: a foto do levantamento por cima da render correspondente.
 * Arrastar a barra (ou usar as setas do teclado) revela mais de uma ou de outra.
 */
export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
  alt,
  ratio = "4 / 5",
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  ratio?: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const fromEvent = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={box}
      style={{ aspectRatio: ratio }}
      className="group relative cursor-ew-resize touch-pan-y select-none overflow-hidden bg-linho-cru-deep"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        fromEvent(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && fromEvent(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* depois (render) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={`${alt} — ${afterLabel}`} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      {/* antes (levantamento), recortado até à barra */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={`${alt} — ${beforeLabel}`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 bg-jacaranda/85 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.2em] text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-linho-cru/90 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.2em] text-jacaranda">
        {afterLabel}
      </span>

      {/* barra + pega */}
      <div className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]" style={{ left: `${pos}%` }}>
        <span
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-jacaranda shadow-lg"
          style={{ borderRadius: 999 }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* controlo acessível (teclado e leitores de ecrã) */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${beforeLabel} / ${afterLabel}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        style={{ pointerEvents: "none" }}
        tabIndex={0}
      />
    </div>
  );
}
