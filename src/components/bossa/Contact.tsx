"use client";

import { useState } from "react";
import type { RefObject } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { useParallax } from "./useParallax";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Design de Interiores",
  "Arquitetura & Obras",
  "Reforma",
  "Projeto 3D",
  "Outro",
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const headerParallax = useParallax(0.12);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      setForm(initial);
    } catch {
      setError("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  const update = (key: keyof FormState, value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-linho-cru py-24 lg:py-32"
    >
      {/* Forma decorativa verde-oliva */}
      <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-verde-oliva/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — info */}
          <div
            ref={headerParallax.ref as RefObject<HTMLDivElement>}
            className="reveal lg:col-span-2 will-change-transform"
            style={{ transform: `translateY(${headerParallax.offset}px)` }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-couro-cognac">
              Vamos conversar
            </span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-tight text-jacaranda sm:text-5xl text-balance">
              Solicite seu
              <br />
              <span className="italic text-verde-oliva">orçamento</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-jacaranda-soft">
              Conte-nos sobre o seu projeto. Respondemos em até 24 horas com
              uma proposta inicial personalizada — e agendamos a primeira visita
              técnica, sem compromisso.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+351220000000"
                className="group flex items-center gap-4 text-jacaranda-soft transition-colors hover:text-couro-cognac"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verde-oliva/15 text-verde-oliva transition-colors group-hover:bg-couro-cognac group-hover:text-linho-cru">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-jacaranda-soft/70">Telefone</div>
                  <div className="font-medium text-jacaranda">
                    +351 220 000 000
                  </div>
                </div>
              </a>
              <a
                href="mailto:hello@studiobossa.pt"
                className="group flex items-center gap-4 text-jacaranda-soft transition-colors hover:text-couro-cognac"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verde-oliva/15 text-verde-oliva transition-colors group-hover:bg-couro-cognac group-hover:text-linho-cru">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-jacaranda-soft/70">E-mail</div>
                  <div className="font-medium text-jacaranda">
                    hello@studiobossa.pt
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-jacaranda-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verde-oliva/15 text-verde-oliva">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-jacaranda-soft/70">Endereço</div>
                  <div className="font-medium text-jacaranda">
                    Rua das Flores, 100 — Porto, Portugal
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-jacaranda-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verde-oliva/15 text-verde-oliva">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-jacaranda-soft/70">
                    Atendimento
                  </div>
                  <div className="font-medium text-jacaranda">
                    Seg–Sex 9h às 18h · Sáb 9h às 13h
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru-deep text-jacaranda transition-colors hover:bg-verde-oliva hover:text-linho-cru"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru-deep text-jacaranda transition-colors hover:bg-verde-oliva hover:text-linho-cru"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru-deep text-jacaranda transition-colors hover:bg-verde-oliva hover:text-linho-cru"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal lg:col-span-3">
            <div className="rounded-3xl border border-linho-cru-deep bg-linho-cru-warm p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle
                    className="h-16 w-16 text-verde-oliva"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 font-italiana text-2xl font-normal text-jacaranda">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-3 max-w-sm text-jacaranda-soft">
                    Recebemos sua solicitação. Nossa equipe entrará em contato
                    em breve para agendar uma visita técnica.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-linho-cru-deep px-6 py-2.5 text-sm font-semibold text-jacaranda transition-colors hover:border-verde-oliva hover:text-verde-oliva"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Nome completo"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Seu nome"
                      required
                    />
                    <Field
                      label="E-mail"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Telefone / WhatsApp"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+351 912 345 678"
                      required
                    />
                    <div>
                      <label className="mb-2 block text-sm font-medium text-jacaranda">
                        Tipo de serviço
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        required
                        className="w-full rounded-xl border border-linho-cru-deep bg-linho-cru px-4 py-3 text-jacaranda outline-none transition-colors focus:border-verde-oliva"
                      >
                        <option value="">Selecione…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-jacaranda">
                      Mensagem
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Conte-nos sobre seu projeto: metragem, prazo desejado, estilo…"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-linho-cru-deep bg-linho-cru px-4 py-3 text-jacaranda outline-none transition-colors focus:border-verde-oliva"
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shine btn-lift group inline-flex w-full items-center justify-center gap-2 rounded-full bg-couro-cognac px-7 py-4 text-base font-semibold text-linho-cru hover:bg-couro-cognac-light hover:shadow-xl hover:shadow-couro-cognac/30 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-1">
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                      </span>
                    ) : (
                      <>
                        Enviar solicitação
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-jacaranda">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-linho-cru-deep bg-linho-cru px-4 py-3 text-jacaranda outline-none transition-colors focus:border-verde-oliva"
      />
    </div>
  );
}
