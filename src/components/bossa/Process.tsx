"use client";

import { useLocale } from "./i18n";

export function Process() {
  const { t } = useLocale();
  const c = t.process;

  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-verde-oliva py-24 lg:py-32"
    >
      {/* Textura sutil de fundo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#F5F2E8_0,transparent_45%),radial-gradient(circle_at_80%_80%,#A65E2E_0,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="reveal mb-16 max-w-3xl"
        >
          <span className="eyebrow text-linho-cru/70">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-linho-cru sm:text-5xl lg:text-6xl text-balance">
            {c.titleA}{" "}
            <span className="text-couro-cognac-light">{c.titleAccent}</span>
            <br />
            {c.titleB}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-linho-cru/80">
            {c.intro}
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-linho-cru/30 to-transparent lg:block" />

          {c.steps.map((p, idx) => (
            <div
              key={p.step}
              className="reveal group relative transition-transform duration-500 hover:-translate-y-2"
              data-reveal-delay={`${idx * 100}`}
            >
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-lg border border-linho-cru/20 bg-jacaranda/40 backdrop-blur-sm transition-colors duration-500 group-hover:bg-couro-cognac">
                <span className="font-italiana text-3xl font-normal text-couro-cognac-light transition-colors duration-500 group-hover:text-linho-cru">
                  {p.step}
                </span>
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-linho-cru ring-4 ring-verde-oliva" />
              </div>
              <h3 className="font-italiana italiana-sm text-2xl font-normal text-linho-cru">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-linho-cru/75">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
