"use client";

import { useState } from "react";
import { useLocale } from "./i18n";
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


export function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const f = c.form;
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
      setForm(initial);
    } catch {
      setError(f.error);
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

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — info */}
          <div
            className="reveal lg:col-span-2"
          >
            <span className="eyebrow text-couro-cognac">
              {c.eyebrow}
            </span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-jacaranda sm:text-5xl lg:text-6xl text-balance">
              {c.titleA}
              <br />
              <span className="text-verde-oliva">{c.titleB}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-jacaranda-soft">
              {c.intro}
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
                  <div className="text-sm text-jacaranda-soft/70">{c.phoneLabel}</div>
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
                  <div className="text-sm text-jacaranda-soft/70">{c.emailLabel}</div>
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
                  <div className="text-sm text-jacaranda-soft/70">{c.addressLabel}</div>
                  <div className="font-medium text-jacaranda">
                    {c.address}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-jacaranda-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verde-oliva/15 text-verde-oliva">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-jacaranda-soft/70">{c.hoursLabel}</div>
                  <div className="font-medium text-jacaranda">
                    {c.hours}
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
            <div className="rounded-xl border border-linho-cru-deep bg-linho-cru-warm p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle
                    className="h-16 w-16 text-verde-oliva"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 font-italiana text-2xl font-normal text-jacaranda">
                    {f.sentTitle}
                  </h3>
                  <p className="mt-3 max-w-sm text-jacaranda-soft">
                    {f.sentText}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-linho-cru-deep px-6 py-2.5 text-sm font-semibold text-jacaranda transition-colors hover:border-verde-oliva hover:text-verde-oliva"
                  >
                    {f.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label={f.name}
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder={f.namePh}
                      required
                    />
                    <Field
                      label={f.email}
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      placeholder={f.emailPh}
                      required
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label={f.phone}
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder={f.phonePh}
                      required
                    />
                    <div>
                      <label className="mb-2 block text-sm font-medium text-jacaranda">
                        {f.service}
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        required
                        className="w-full rounded-xl border border-linho-cru-deep bg-linho-cru px-4 py-3 text-jacaranda outline-none transition-colors focus:border-verde-oliva"
                      >
                        <option value="">{f.select}</option>
                        {f.services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-jacaranda">
                      {f.message}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={f.messagePh}
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
                    className="btn-lift group inline-flex w-full items-center justify-center gap-2 rounded-full bg-couro-cognac px-7 py-4 text-base font-semibold text-linho-cru hover:bg-couro-cognac-light hover:shadow-xl hover:shadow-couro-cognac/30 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-1">
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                        <span className="loading-dot h-2 w-2 rounded-full bg-linho-cru" />
                      </span>
                    ) : (
                      <>
                        {f.submit}
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
