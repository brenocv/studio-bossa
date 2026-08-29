"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "./data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-verde-oliva py-24 lg:py-32"
    >
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_30%,#F5F2E8_0,transparent_50%)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac-light">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-linho-cru sm:text-5xl text-balance">
            Tire suas{" "}
            <span className="italic text-couro-cognac-light">dúvidas</span>
          </h2>
        </div>

        <div className="reveal flex flex-col gap-3">
          {FAQ.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-couro-cognac/40 bg-linho-cru"
                    : "border-linho-cru/15 bg-jacaranda/30 hover:border-couro-cognac-light/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-italiana text-lg font-normal transition-colors ${
                      isOpen
                        ? "text-couro-cognac"
                        : "text-linho-cru group-hover:text-linho-cru"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-couro-cognac text-linho-cru rotate-180"
                        : "bg-linho-cru/15 text-linho-cru"
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
                    <p className="px-6 pb-5 text-base leading-relaxed text-jacaranda-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
