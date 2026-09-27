"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useLocale } from "./i18n";

export function Footer() {
  const { t, home } = useLocale();
  const c = t.footer;
  return (
    <footer className="relative overflow-hidden bg-jacaranda py-14">
      {/* Linha superior verde-oliva */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linho-cru/10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href={home} className="flex items-center" aria-label="Studio Bossa">
              <Logo variant="white" height={32} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-linho-cru/60">
              {c.about}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-couro-cognac hover:text-linho-cru"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-couro-cognac hover:text-linho-cru"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-couro-cognac hover:text-linho-cru"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-linho-cru/85">
              {c.navTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {c.nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={home + l.href}
                    className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-linho-cru/85">
              {c.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-linho-cru/60">
              <li>+351 220 000 000</li>
              <li>hello@studiobossa.pt</li>
              <li>
                Rua das Flores, 100
                <br />
                Porto — Portugal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-linho-cru/15 pt-8 text-sm text-linho-cru/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Studio Bossa. {c.rights}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-linho-cru/85"
            >
              {c.privacy}
            </a>
            <a
              href="#"
              className="transition-colors hover:text-linho-cru/85"
            >
              {c.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
