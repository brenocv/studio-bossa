"use client";

import { useEffect, useState } from "react";
import { useLocale } from "./i18n";

/**
 * Botão flutuante de WhatsApp — sempre visível no canto inferior direito.
 * Ao clicar abre a conversa com a empresa já com uma mensagem escrita.
 *
 * ⚠️ TROCAR O NÚMERO AQUI (formato internacional, só dígitos, sem + nem espaços)
 *    Ex.: +351 912 345 678  →  "351912345678"
 */
export const WHATSAPP_NUMBER = "351000000000";

export function WhatsAppButton() {
  const { t } = useLocale();
  const w = t.whatsapp;
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 900);
    // A etiqueta aparece uma vez, depois de o visitante sair do hero, e recolhe
    let shown = false;
    let t2: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (shown || window.scrollY < window.innerHeight * 0.8) return;
      shown = true;
      setShowLabel(true);
      t2 = setTimeout(() => setShowLabel(false), 5000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(w.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={w.aria}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      onFocus={() => setShowLabel(true)}
      onBlur={() => setShowLabel(false)}
      className={`wa-float group fixed z-40 flex items-center gap-3 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Etiqueta */}
      <span
        className={`hidden origin-right whitespace-nowrap rounded-full border border-linho-cru-deep bg-linho-cru/95 px-4 py-2 text-[13px] font-medium tracking-wide text-jacaranda shadow-lg shadow-jacaranda/10 backdrop-blur-md transition-all duration-500 sm:block ${
          showLabel ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        {w.label}
      </span>

      {/* Botão */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-verde-oliva text-linho-cru shadow-xl shadow-jacaranda/30 ring-2 ring-linho-cru transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-verde-oliva-deep">
        <span className="wa-ping absolute inset-0 rounded-full bg-verde-oliva" aria-hidden />
        {/* Balão de conversa com telefone */}
        <svg
          viewBox="0 0 24 24"
          className="relative h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
          <path d="M9.2 8.6c.2-.4.5-.5.8-.5h.4c.2 0 .3.1.4.3l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .4.6 1 1.4 1.8 2.4 2.4.1.1.3.1.4 0l.6-.5c.2-.1.4-.2.6-.1l1.4.6c.2.1.3.2.3.4v.4c0 .3-.1.6-.5.8-.6.4-1.4.5-2.1.3-2.2-.7-3.9-2.4-4.6-4.6-.2-.7-.1-1.5.3-2.1z" />
        </svg>
      </span>
    </a>
  );
}
