"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor customizado para o Studio Bossa.
 * - Ponto central que segue o mouse instantaneamente
 * - Anel externo que segue com leve delay (suavizado)
 * - Cresce e muda de cor ao hover sobre elementos interativos (a, button, [data-cursor])
 * - Somente em dispositivos com pointer fino (desktop) - esconde em touch
 *
 * O componente é renderizado uma única vez, no layout raiz.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Só ativa em dispositivos com mouse (não touch)
    const hasFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Atualiza o ponto imediatamente
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Detecta se está sobre um elemento interativo
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, input, textarea, select, [data-cursor="pointer"], [role="button"]'
      );
      setHovering(!!interactive);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    // Loop de animação para suavizar o anel externo
    const loop = () => {
      // Lerp: ring segue com 18% da velocidade (suave)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Esconde o cursor nativo */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Ponto central (instantâneo) */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-couro-cognac transition-[width,height,opacity] duration-200"
        style={{
          opacity: hovering ? 0 : 1,
          willChange: "transform",
        }}
      />

      {/* Anel externo (suavizado) */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border transition-[width,height,border-color,background-color] duration-200 ${
          hovering
            ? "h-12 w-12 border-verde-oliva bg-verde-oliva/15"
            : clicked
            ? "h-6 w-6 border-couro-cognac bg-couro-cognac/30"
            : "h-8 w-8 border-jacaranda/60"
        }`}
        style={{
          willChange: "transform",
        }}
      />
    </>
  );
}
