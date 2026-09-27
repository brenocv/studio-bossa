"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { DICT, type Dict, type Locale } from "./content";

type Alternates = { pt: string; en: string };

const HOME: Record<Locale, string> = { pt: "/", en: "/en/" };

const LocaleContext = createContext<{
  locale: Locale;
  t: Dict;
  home: string;
  alternates: Alternates;
}>({ locale: "pt", t: DICT.pt, home: "/", alternates: { pt: "/", en: "/en/" } });

/**
 * `alternates` = endereço desta mesma página na outra língua
 * (usado pelo seletor de bandeiras; por defeito, as páginas iniciais).
 */
export function LocaleProvider({
  locale,
  alternates = { pt: "/", en: "/en/" },
  children,
}: {
  locale: Locale;
  alternates?: Alternates;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en-GB" : "pt-PT";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: DICT[locale], home: HOME[locale], alternates }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
