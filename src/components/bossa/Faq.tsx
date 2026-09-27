"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "./i18n";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { t, home } = useLocale();
  const c = t.faq;

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-linho-cru pb-24 pt-16 lg:pb-28 lg:pt-20"
    >

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="eyebrow text-couro-cognac">
            {c.eyebrow}
          </span>
          <h1 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
            {c.titleA}{" "}
            <span className="text-couro-cognac">{c.titleB}</span>
          </h1>
        </div>

        <div className="reveal flex flex-col border-t border-jacaranda/15">
          {c.items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden border-b border-jacaranda/15"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span
                    className={`font-italiana italiana-sm text-xl sm:text-[1.4rem] leading-snug font-normal transition-colors ${
                      isOpen
                        ? "text-couro-cognac"
                        : "text-jacaranda group-hover:text-couro-cognac"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all ${
                      isOpen
                        ? "border border-couro-cognac text-couro-cognac rotate-180"
                        : "border border-jacaranda/25 text-jacaranda"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-base leading-relaxed text-jacaranda-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-16 text-center">
          <p className="font-italiana text-3xl text-jacaranda">{c.moreTitle}</p>
          <p className="mt-3 text-base text-jacaranda-soft">{c.moreText}</p>
          <Link
            href={home + "#contato"}
            className="btn-lift btn-arrow mt-7 inline-flex items-center gap-3 bg-jacaranda px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-linho-cru transition-colors hover:bg-couro-cognac"
          >
            {c.moreButton}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
