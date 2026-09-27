"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLocale } from "./i18n";

/** Visualizador de fotografias em ecrã inteiro (setas, Esc, clique fora para fechar). */
export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
  title,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
  title: string;
}) {
  const { t } = useLocale();
  const p = t.projectPage;
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = images.length;
  const go = (d: number) => onIndex((index + d + n) % n);

  useEffect(() => {
    closeRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Toque: deslizar para os lados
  const touchX = useRef<number | null>(null);

  const cur = images[index];
  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-jacaranda-deep/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-linho-cru/80" onClick={(e) => e.stopPropagation()}>
        <span className="text-[11px] uppercase tracking-[0.24em]">
          {title} · {index + 1} / {n}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-linho-cru/25 text-linho-cru transition-colors hover:bg-linho-cru/10"
          aria-label={p.close}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={cur.src}
          src={cur.src}
          alt={cur.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[82vh] max-w-full rounded-md object-contain shadow-2xl animate-fade-in"
        />
        {n > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-linho-cru/25 text-linho-cru transition-colors hover:bg-linho-cru/10 sm:flex"
              aria-label={p.prevPhoto}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-linho-cru/25 text-linho-cru transition-colors hover:bg-linho-cru/10 sm:flex"
              aria-label={p.nextPhoto}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
