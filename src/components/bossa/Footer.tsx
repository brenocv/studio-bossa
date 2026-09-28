"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useLocale } from "./i18n";
import { PRIVACY_PATH, TERMS_PATH } from "./legal";

export function Footer() {
  const { t, home, locale } = useLocale();
  const c = t.footer;
  return (
    <footer className="relative overflow-hidden bg-jacaranda pb-28 pt-14 lg:pb-32">
      {/* Linha superior verde-oliva */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linho-cru/10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href={home} className="flex items-center" aria-label="Studio Bossa">
              <Logo variant="white" height={60} className="h-14 w-auto lg:h-[60px]" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              {c.about}
            </p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white">
              {t.contact.followLabel}
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-couro-cognac hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-couro-cognac hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-couro-cognac hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {c.navTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {c.nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href.startsWith("/") ? l.href : home + l.href}
                    className="text-white/80 transition-colors hover:text-couro-cognac-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {c.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>+351 220 000 000</li>
              <li>hello@studiobossa.pt</li>
              <li>
                Rua Engenheiro Ferreira Dias, 161
                <br />
                Sala 204 · Porto — Portugal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-linho-cru/15 pt-8 text-sm text-white/85 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Studio Bossa. {c.rights}
          </p>
          <div className="flex gap-6">
            <Link href={PRIVACY_PATH[locale]} className="transition-colors hover:text-white">
              {c.privacy}
            </Link>
            <Link href={TERMS_PATH[locale]} className="transition-colors hover:text-white">
              {c.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
