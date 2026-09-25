"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { DICT, type Dict, type Locale } from "./content";

const LocaleContext = createContext<{ locale: Locale; t: Dict }>({
  locale: "pt",
  t: DICT.pt,
});

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  // Mantém o atributo lang do <html> correto em cada versão
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en-GB" : "pt-PT";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t: DICT[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
