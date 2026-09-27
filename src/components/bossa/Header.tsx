"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "./i18n";

/** Menu fixo e sempre sólido (fundo castanho jacarandá, texto claro). Fica mais compacto ao rolar. */
export function Header() {
  const { t, home } = useLocale();
  const links = t.nav.links;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-linho-cru/10 bg-jacaranda/95 backdrop-blur-xl transition-[padding,box-shadow] duration-500 ${
        scrolled ? "py-3 shadow-[0_8px_30px_-18px_rgb(0_0_0/0.6)]" : "py-4 lg:py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href={home} className="flex items-center" aria-label="Studio Bossa">
          <Logo variant="white" height={32} />
        </Link>

        <ul className="hidden items-center gap-8 text-linho-cru/85 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={home + l.href}
                className="nav-underline text-[13px] font-medium tracking-[0.06em] transition-colors hover:text-couro-cognac-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher tone="light" />
          <Link
            href={home + "#contato"}
            className="btn-lift inline-flex items-center bg-linho-cru px-5 py-2.5 text-sm font-medium tracking-wide text-jacaranda hover:bg-couro-cognac hover:text-linho-cru"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher tone="light" />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center text-linho-cru"
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 border border-linho-cru/10 bg-jacaranda-deep p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={home + l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-linho-cru/85 transition-colors hover:bg-linho-cru/10 hover:text-couro-cognac-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={home + "#contato"}
            onClick={() => setOpen(false)}
            className="mt-3 block bg-linho-cru px-5 py-3 text-center text-sm font-semibold text-jacaranda"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
