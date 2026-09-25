"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Hook de parallax suave baseado em scroll.
 * Retorna um ref tipado para <HTMLElement> e o offset Y atual (em px).
 *
 * Uso (apenas em FUNDOS / imagens decorativas — nunca em blocos de texto,
 * para não sobrepor conteúdo):
 *   const { ref, offset } = useParallax(0.1);
 *   <div ref={ref as RefObject<HTMLDivElement>} style={{ transform: `translateY(${offset}px)` }}>...</div>
 *
 * @param speed    fração do scroll aplicada ao elemento (0.1 = 10%). Negativo inverte.
 * @param maxShift deslocamento máximo em px (limite de segurança contra sobreposição).
 *
 * Respeita `prefers-reduced-motion`: nesse caso o offset fica sempre 0.
 */
export function useParallax(speed = 0.1, maxShift = 60) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const delta = rect.top + rect.height / 2 - viewportH / 2;
      const next = -delta * speed;
      setOffset(Math.max(-maxShift, Math.min(maxShift, next)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, maxShift]);

  return { ref: ref as RefObject<HTMLElement>, offset };
}
