"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff, Lock, X } from "lucide-react";

/**
 * Área restrita de clientes: antes de instalar a app, o cliente entra com o
 * mesmo utilizador e palavra-passe que a Studio Bossa lhe criou no painel de
 * administração da app. Só com login certo é que segue para a instalação.
 *
 * ⚠️ Ligar ao Supabase quando a app for publicada: preencher as duas linhas
 * abaixo com o "Project URL" e a "anon public key" (Supabase → Project
 * Settings → API). A anon key é pública por natureza; a chave "service_role"
 * NUNCA pode ser posta aqui.
 * Enquanto estiverem vazias, o formulário funciona em modo de demonstração.
 */
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";
const CLIENT_DOMAIN = "clientes.studiobossa.pt"; // igual ao da app

const T = {
  pt: {
    title: "Área restrita de clientes",
    text: "Entre com o utilizador e a palavra-passe que a Studio Bossa lhe enviou. São os mesmos que vai usar dentro da app.",
    user: "Utilizador",
    pass: "Palavra-passe",
    show: "Mostrar palavra-passe",
    hide: "Esconder palavra-passe",
    submit: "Entrar e instalar",
    wait: "A verificar…",
    close: "Fechar",
    wrong: "Utilizador ou palavra-passe incorretos.",
    empty: "Preencha o utilizador e a palavra-passe.",
    offline: "Não foi possível ligar. Verifique a internet e tente de novo.",
    help: "Ainda não tem acesso? Fale com a sua arquiteta na Studio Bossa.",
    okTitle: "Acesso confirmado",
    okText: "A abrir a app. Depois de instalada, entre com o mesmo utilizador e palavra-passe.",
    demo: "Modo de demonstração: a app ainda não está publicada.",
  },
  en: {
    title: "Clients-only area",
    text: "Sign in with the username and password Studio Bossa sent you. They are the same ones you will use inside the app.",
    user: "Username",
    pass: "Password",
    show: "Show password",
    hide: "Hide password",
    submit: "Sign in and install",
    wait: "Checking…",
    close: "Close",
    wrong: "Wrong username or password.",
    empty: "Please enter your username and password.",
    offline: "Could not connect. Check your internet and try again.",
    help: "No access yet? Talk to your architect at Studio Bossa.",
    okTitle: "Access confirmed",
    okText: "Opening the app. Once installed, sign in with the same username and password.",
    demo: "Demo mode: the app is not published yet.",
  },
};

async function checkLogin(username: string, password: string): Promise<"ok" | "wrong" | "offline" | "demo"> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    await new Promise((r) => setTimeout(r, 700));
    return "demo";
  }
  const email = username.includes("@") ? username : `${username.toLowerCase()}@${CLIENT_DOMAIN}`;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.ok ? "ok" : "wrong";
  } catch {
    return "offline";
  }
}

export function AppLoginModal({
  open,
  onClose,
  appUrl,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  appUrl: string;
  locale: "pt" | "en";
}) {
  const c = T[locale];
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<"" | "ok" | "demo">("");
  const first = useRef<HTMLInputElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    back.current = document.activeElement as HTMLElement;
    setError(""); setDone(""); setPass(""); setBusy(false);
    const t = setTimeout(() => first.current?.focus(), 60);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>("button, input, a[href]");
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", key);
      back.current?.focus();
    };
  }, [open, onClose]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.trim() || !pass) { setError(c.empty); return; }
    setBusy(true); setError("");
    const r = await checkLogin(user.trim(), pass);
    setBusy(false);
    if (r === "wrong") { setError(c.wrong); return; }
    if (r === "offline") { setError(c.offline); return; }
    setDone(r);
    if (r === "ok") setTimeout(() => { window.location.href = appUrl; }, 1400);
  };

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center p-0 transition-opacity duration-300 sm:items-center sm:p-6 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      style={{ zIndex: 90 }}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-[#1b110f]/75 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-login-title"
        className={`relative w-full max-w-md bg-linho-cru px-6 pb-8 pt-7 text-jacaranda shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] sm:px-9 sm:pb-9 ${open ? "translate-y-0" : "translate-y-8"}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={c.close}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-jacaranda/60 transition-colors hover:text-couro-cognac"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="flex h-11 w-11 items-center justify-center bg-jacaranda text-linho-cru">
          <Lock className="h-[18px] w-[18px]" strokeWidth={1.8} />
        </span>
        <h3 id="app-login-title" className="mt-5 font-italiana text-[1.9rem] leading-tight">{c.title}</h3>

        {done ? (
          <div className="mt-3" role="status">
            <p className="font-medium text-verde-oliva">{c.okTitle}</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-jacaranda/80">{done === "demo" ? c.demo : c.okText}</p>
          </div>
        ) : (
          <>
            <p className="mt-2 text-[14.5px] leading-relaxed text-jacaranda/75">{c.text}</p>
            <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
              <label className="block">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-jacaranda/70">{c.user}</span>
                <input
                  ref={first}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  className="mt-1.5 block w-full border border-jacaranda/20 bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-couro-cognac"
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-jacaranda/70">{c.pass}</span>
                <span className="relative mt-1.5 block">
                  <input
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete="current-password"
                    className="block w-full border border-jacaranda/20 bg-white py-3 pl-4 pr-12 text-[15px] outline-none transition-colors focus:border-couro-cognac"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? c.hide : c.show}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-jacaranda/50 hover:text-couro-cognac"
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </span>
              </label>
              {error && <p className="text-[13.5px] text-[#a3341f]" role="alert">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="w-full bg-jacaranda px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-couro-cognac disabled:opacity-60"
              >
                {busy ? c.wait : c.submit}
              </button>
            </form>
            <p className="mt-5 text-[13px] leading-relaxed text-jacaranda/60">{c.help}</p>
          </>
        )}
      </div>
    </div>
  );
}
