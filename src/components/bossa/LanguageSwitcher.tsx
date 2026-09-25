"use client";

import Link from "next/link";
import { useId } from "react";
import { useLocale } from "./i18n";

/** Bandeira de Portugal (simplificada para tamanho de ícone) */
function FlagPT() {
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" aria-hidden>
      <rect width="30" height="20" fill="#DA291C" />
      <rect width="12" height="20" fill="#046A38" />
      <circle cx="12" cy="10" r="4.3" fill="none" stroke="#FFE000" strokeWidth="1.3" />
      <path d="M10.2 7.9h3.6v2.9c0 1.2-.8 2-1.8 2.2-1-.2-1.8-1-1.8-2.2z" fill="#fff" stroke="#DA291C" strokeWidth=".6" />
      <circle cx="12" cy="10" r=".7" fill="#003399" />
    </svg>
  );
}

/** Bandeira do Reino Unido (Union Jack) */
function FlagUK() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <clipPath id={`s${id}`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`t${id}`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#s${id})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#t${id})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const OPTIONS = [
  { locale: "pt" as const, href: "/", code: "PT", name: "Português (Portugal)", Flag: FlagPT },
  { locale: "en" as const, href: "/en/", code: "EN", name: "English (UK)", Flag: FlagUK },
];

/**
 * Seletor de idioma com bandeiras. `tone` adapta as cores ao fundo do header
 * (claro quando está sobre o vídeo, escuro quando o header fica cor de linho).
 */
export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale, t } = useLocale();

  return (
    <nav aria-label={t.nav.switchTo} className="flex items-center gap-1">
      {OPTIONS.map(({ locale: l, href, code, name, Flag }) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l === "en" ? "en-GB" : "pt-PT"}
            lang={l === "en" ? "en-GB" : "pt-PT"}
            aria-current={active ? "true" : undefined}
            aria-label={name}
            title={name}
            className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[11px] font-medium tracking-[0.14em] transition-all duration-300 ${
              active
                ? tone === "light"
                  ? "bg-linho-cru/15 text-linho-cru"
                  : "bg-jacaranda/8 text-jacaranda"
                : tone === "light"
                ? "text-linho-cru/60 opacity-75 hover:text-linho-cru hover:opacity-100"
                : "text-jacaranda/55 opacity-75 hover:text-jacaranda hover:opacity-100"
            }`}
          >
            <span
              className={`block h-[13px] w-[19px] overflow-hidden rounded-[2px] ring-1 ${
                tone === "light" ? "ring-linho-cru/40" : "ring-jacaranda/15"
              } ${active ? "" : "saturate-[.6]"}`}
            >
              <Flag />
            </span>
            {code}
          </Link>
        );
      })}
    </nav>
  );
}
