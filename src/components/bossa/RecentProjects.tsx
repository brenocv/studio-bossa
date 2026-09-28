"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "./i18n";
import { PROJECTS, PROJECTS_INDEX, PROJECT_PATH, media, photo } from "./projects";

/**
 * Grelha de projetos: só imagens; o nome aparece ao passar o rato.
 *   Página inicial → 6 projetos + botão "Mais projetos"
 *   Página /projetos/ → todos os projetos + cartão de convite
 */
export function RecentProjects({ all = false }: { all?: boolean }) {
  const { t, locale, home } = useLocale();
  const c = t.recent;
  const list = all ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section id={all ? undefined : "projetos"} className="bg-linho-cru pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {!all && (
        <div className="reveal mb-10 flex flex-col items-start gap-3 sm:mb-14">
            <p className="eyebrow text-jacaranda">{c.eyebrow}</p>
            <h2 className="font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl">
              {c.title}
            </h2>
          </div>
        )}

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {list.map((p, i) => {
            const m = media(p.slug);
            return (
              <li key={p.slug} className="reveal" data-reveal-delay={`${(i % 3) * 90}`}>
                <Link
                  href={PROJECT_PATH[locale](p.slug)}
                  className="project-tile group relative block aspect-[5/4] sm:aspect-[4/5] overflow-hidden bg-linho-cru-deep"
                  aria-label={`${p.name[locale]} — ${c.view}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo(p.slug, m.cover, "sm")}
                    alt={`${p.name[locale]} — ${p.type[locale]}`}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="project-tile-veil absolute inset-0 bg-gradient-to-t from-jacaranda-deep/85 via-jacaranda-deep/25 to-transparent" />
                  <div className="project-tile-label absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">
                        {p.type[locale]}
                      </p>
                      <h3 className="mt-2 font-italiana text-[1.75rem] leading-tight text-white">
                        {p.name[locale]}
                      </h3>
                    </div>
                    <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center border border-linho-cru/40 text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}

          {/* Cartão final — convite (só na página de todos os projetos) */}
          {all && (
          <li className="reveal" data-reveal-delay="180">
            <div className="flex aspect-[5/4] sm:aspect-[4/5] flex-col justify-between bg-jacaranda p-7 text-white sm:p-8">
              <span className="block h-px w-10 bg-couro-cognac-light" aria-hidden />
              <div>
                <p className="font-italiana text-[2.1rem] leading-[1.08]">{c.tileTitle}</p>
                <Link
                  href={home + "#contato"}
                  className="btn-lift btn-arrow mt-8 inline-flex items-center gap-3 rounded-full bg-couro-cognac px-6 py-3 text-sm font-medium tracking-wide hover:bg-couro-cognac-light"
                >
                  {c.tileButton}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </li>
          )}
        </ul>

        {!all && (
          <div className="reveal mt-12 flex justify-center">
            <Link
              href={PROJECTS_INDEX[locale]}
              className="btn-lift btn-arrow group inline-flex items-center gap-3 border border-jacaranda px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-jacaranda transition-colors hover:bg-jacaranda hover:text-white"
            >
              {c.more}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
