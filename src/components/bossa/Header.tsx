"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detecta se a hero (fundo escuro) ainda esta visivel para mudar a cor da logo
  const [heroVisible, setHeroVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      // Hero tem ~100vh, entao apos 80vh do scroll, ela some
      setHeroVisible(window.scrollY < window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Quando transparente sobre hero escura: logo branca
  // Quando scrollado com fundo linho: logo escura
  const logoVariant = scrolled ? "dark" : "white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linho-cru/90 backdrop-blur-xl border-b border-linho-cru-deep/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#topo" className="flex items-center">
          <Logo variant={logoVariant} height={32} />
        </a>

        <ul
          className={`hidden items-center gap-8 lg:flex transition-colors duration-500 ${
            scrolled ? "text-jacaranda-soft" : "text-linho-cru/90"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-underline text-sm font-medium transition-colors hover:text-couro-cognac"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contato"
            className={`btn-shine btn-lift inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-couro-cognac/30 ${
              scrolled
                ? "bg-jacaranda text-linho-cru hover:bg-couro-cognac"
                : "bg-linho-cru/15 text-linho-cru backdrop-blur-sm border border-linho-cru/30 hover:bg-couro-cognac hover:text-linho-cru"
            }`}
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled ? "text-jacaranda" : "text-linho-cru"
          }`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-linho-cru-deep bg-linho-cru-warm/95 p-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-jacaranda-soft transition-colors hover:bg-linho-cru hover:text-couro-cognac"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-jacaranda px-5 py-3 text-center text-sm font-semibold text-linho-cru"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
