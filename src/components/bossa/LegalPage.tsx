"use client";

import { Fragment } from "react";
import { LocaleProvider } from "./i18n";
import type { Locale } from "./content";
import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { useReveal } from "./useReveal";
import { LEGAL, LEGAL_PATH, LEGAL_UPDATED, type Block, type LegalKind } from "./legal";

/** Páginas legais: Política de Privacidade e Termos de Utilização (PT e EN). */
export function LegalPage({ kind, locale }: { kind: LegalKind; locale: Locale }) {
  return (
    <LocaleProvider locale={locale} alternates={LEGAL_PATH[kind]}>
      <Preloader />
      <div className="flex min-h-screen flex-col bg-linho-cru text-jacaranda">
        <Header />
        <Body kind={kind} locale={locale} />
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}

/** Transforma e-mails e endereços www. em ligações clicáveis. */
function linkify(text: string) {
  const parts = text.split(/(www\.[a-z0-9.-]+\.[a-z]{2,}|[\w.+-]+@[\w-]+\.[\w.]+)/gi);
  return parts.map((part, i) => {
    if (/^www\./i.test(part))
      return (
        <a key={i} href={`https://${part}`} target="_blank" rel="noopener noreferrer" className="text-couro-cognac underline-offset-4 hover:underline">
          {part}
        </a>
      );
    if (/@/.test(part))
      return (
        <a key={i} href={`mailto:${part}`} className="text-couro-cognac underline-offset-4 hover:underline">
          {part}
        </a>
      );
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function BlockView({ b }: { b: Block }) {
  if (typeof b === "string") return <p>{linkify(b)}</p>;
  return (
    <ul className="space-y-2 pl-5 [&>li]:relative [&>li]:before:absolute [&>li]:before:-left-4 [&>li]:before:top-[0.7em] [&>li]:before:h-px [&>li]:before:w-2 [&>li]:before:bg-couro-cognac">
      {b.list.map((item, i) => (
        <li key={i}>{linkify(item)}</li>
      ))}
    </ul>
  );
}

function Body({ kind, locale }: { kind: LegalKind; locale: Locale }) {
  useReveal();
  const doc = LEGAL[kind][locale];
  return (
    <main className="flex-1 pt-[76px] lg:pt-[84px]">
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <header className="reveal mb-12 border-b border-jacaranda/15 pb-10">
          <p className="eyebrow text-jacaranda">{doc.eyebrow}</p>
          <h1 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-jacaranda-soft/70">
            {doc.updatedLabel}: {LEGAL_UPDATED[locale]}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-jacaranda-soft">{doc.intro}</p>
        </header>

        <div className="space-y-10">
          {doc.sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-italiana italiana-sm text-2xl font-normal text-jacaranda">{s.title}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-jacaranda-soft">
                {s.body.map((b, i) => (
                  <BlockView key={i} b={b} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
