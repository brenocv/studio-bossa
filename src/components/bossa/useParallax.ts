"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Hook de parallax simples baseado em scroll.
 * Retorna um ref tipado para <HTMLElement> e o offset Y atual (em px).
 *
 * Uso:
 *   const { ref, offset } = useParallax(0.15);
 *   <div ref={ref as RefObject<HTMLDivElement>} style={{ transform: `translateY(${offset}px)` }}>...</div>
 *
 * @param speed - velocidade do parallax. 0 = sem efeito, 0.5 = metade da velocidade do scroll,
 *               negativo move para cima. Ex: -0.3 = elemento sobe 0.3px por 1px de scroll.
 * @param disabled - desativa o parallax
 */
export function useParallax(speed = 0.3, disabled = false) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const delta = rect.top + rect.height / 2 - viewportH / 2;
      setOffset(-delta * speed);
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
  }, [speed, disabled]);

  return { ref: ref as RefObject<HTMLElement>, offset };
}
