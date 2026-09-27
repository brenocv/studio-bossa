"use client";

import { useEffect, useState } from "react";
import { img } from "./imagePath";
import { useLocale } from "./i18n";

declare global {
  interface Window {
    __bossaLoaded?: boolean;
  }
}

const MIN_MS = 1900; // tempo mínimo da animação
const MAX_MS = 4000; // nunca fica mais do que isto, mesmo com rede lenta

/**
 * Ecrã de carregamento com o logótipo Studio Bossa.
 * Aparece no primeiro carregamento do site; ao navegar entre páginas já não volta a aparecer.
 */
export function Preloader() {
  const { t } = useLocale();
  const [phase, setPhase] = useState<"in" | "out" | "done">(() =>
    typeof window !== "undefined" && window.__bossaLoaded ? "done" : "in"
  );

  useEffect(() => {
    if (phase === "done") return;
    const start = performance.now();
    let finished = false;
    document.documentElement.classList.add("is-loading");

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      setTimeout(() => {
        setPhase("out");
        document.documentElement.classList.remove("is-loading");
        window.__bossaLoaded = true;
        setTimeout(() => setPhase("done"), 1000);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const cap = setTimeout(finish, MAX_MS);
    return () => {
      clearTimeout(cap);
      window.removeEventListener("load", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "out" ? "is-out" : ""}`} role="status" aria-live="polite">
      <span className="sr-only">{t.loader}</span>
      <div className="preloader-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("/logo-bossa/logo-studio-bossa-dark.png")}
          alt="Studio Bossa"
          width={214}
          height={80}
          className="preloader-logo"
        />
        <span className="preloader-line" aria-hidden />
      </div>
    </div>
  );
}
