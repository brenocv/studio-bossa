"use client";

import { useLocale } from "./i18n";

/** Processo — quatro etapas com linhas finas. */
export function Process() {
  const { t } = useLocale();
  const c = t.process;

  return (
    <section id="processo" className="bg-linho-cru py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-14 max-w-3xl lg:mb-16">
          <span className="eyebrow text-jacaranda">{c.eyebrow}</span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
            {c.titleA} {c.titleAccent}
            <br />
            {c.titleB}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-jacaranda-soft">{c.intro}</p>
        </div>

        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {c.steps.map((p, idx) => (
            <li
              key={p.step}
              className="reveal group pt-6"
              data-reveal-delay={`${idx * 100}`}
            >
              <span className="font-italiana text-5xl leading-none text-couro-cognac">{p.step}</span>
              <h3 className="mt-5 font-italiana italiana-sm text-2xl font-normal text-jacaranda">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-jacaranda-soft">{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
