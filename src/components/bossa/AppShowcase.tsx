"use client";

import type { ReactNode } from "react";
import {
  Home,
  CalendarDays,
  MessageCircle,
  FolderOpen,
  User,
  Bell,
  Check,
  ChevronLeft,
  MapPin,
  Video,
  Send,
  FileText,
  Clock,
  Download,
} from "lucide-react";
import { useLocale } from "./i18n";
import { photo } from "./projects";

/**
 * Banner "A app Studio Bossa" — ecrãs do app mostrados como na App Store:
 * cartões coloridos da paleta, cada um com uma legenda e um telemóvel.
 *
 * Os ecrãs são desenhados ao tamanho real de um iPhone (390 × 844) e
 * reduzidos a metade dentro da moldura, para as proporções ficarem fiéis.
 * O app é um PWA: o botão leva ao endereço do app, onde o navegador oferece
 * a instalação (no computador e no Android). No iPhone instala-se pelo
 * menu Partilhar → "Adicionar ao ecrã principal".
 * ⚠️ Trocar APP_URL pelo endereço real do app quando estiver publicado.
 */

const APP_URL = "#";

/* ------------------------------------------------------------------ */
/* Textos                                                              */
/* ------------------------------------------------------------------ */
const T = {
  pt: {
    eyebrow: "A app Studio Bossa",
    titleA: "A sua obra,",
    titleB: "na palma da mão",
    intro:
      "Acompanhe cada fase da remodelação no telemóvel: veja fotografias da obra, marque visitas, fale com a sua arquiteta e aprove materiais sem sair do sofá.",
    install: "Instalar a app",
    installNote: "Funciona no telemóvel e no computador, sem passar por lojas de aplicações. No iPhone: abra no Safari e toque em Partilhar → Adicionar ao ecrã principal.",
    alt: "Ecrã do app Studio Bossa",
    captions: [
      "Acompanhe a obra, dia a dia",
      "Todas as visitas numa só agenda",
      "Fale diretamente com a sua arquiteta",
      "Aprove materiais com um toque",
      "Plantas, 3D e documentos sempre à mão",
    ],
    tabs: ["Obra", "Agenda", "Mensagens", "Projeto", "Perfil"],
    s: {
      hello: "Bom dia,",
      name: "Mariana",
      home: "Apartamento Cedofeita",
      phase: "Fase 3 de 4 · Execução da obra",
      progress: "Progresso",
      due: "Entrega prevista a 14 de novembro",
      stages: ["Briefing", "Projeto", "Obra", "Entrega"],
      today: "Hoje na obra",
      updated: "Atualizado às 16:20",
      todayNote: "Paredes preparadas para o soalho em carvalho na sala e no corredor.",
      agenda: "Agenda",
      month: "Outubro 2026",
      days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      wed: "Quarta, 14 de outubro",
      thu: "Quinta, 15 de outubro",
      ev1: "Visita à obra",
      ev1d: "Com a arquiteta Joana Reis",
      ev1p: "Rua de Cedofeita",
      ev2: "Entrega de materiais",
      ev2d: "Azulejos e loiças da casa de banho",
      ev3: "Aprovação da iluminação",
      ev3d: "Videochamada · 30 min",
      suggest: "Sugerir outra data",
      arch: "Joana Reis",
      role: "Arquiteta · online",
      dayLabel: "Hoje",
      m1: "Bom dia, Mariana! Chegaram as amostras de couro para o sofá da sala.",
      m2: "Que tom lindo. É mesmo este que queremos.",
      m3: "Perfeito. Deixei-o em Aprovações para confirmar com um toque.",
      write: "Escreva uma mensagem",
      approvals: "Aprovações",
      pending: "2 pendentes",
      matTitle: "Couro cognac",
      matWhere: "Sofá da sala",
      matSupplier: "Fornecedor",
      matCost: "Custo adicional",
      matCostV: "Nenhum",
      approve: "Aprovar",
      alt2: "Pedir alternativa",
      oak: "Carvalho natural",
      oakWhere: "Soalho",
      linen: "Linho cru",
      linenWhere: "Cortinados",
      approved: "Aprovado",
      waiting: "Pendente",
      project: "Projeto",
      segs: ["3D", "Plantas", "Documentos"],
      docs: "Documentos",
      d1: "Planta final — versão 3",
      d2: "Mapa de acabamentos",
      d3: "Orçamento aprovado",
      d4: "Fatura 2026/118",
      paid: "Paga",
      signed: "Assinado",
    },
  },
  en: {
    eyebrow: "The Studio Bossa app",
    titleA: "Your renovation,",
    titleB: "in the palm of your hand",
    intro:
      "Follow every stage of your renovation on your phone: see photos from site, book visits, talk to your architect and approve materials from the comfort of your sofa.",
    install: "Install the app",
    installNote: "Works on your phone and computer, no app store needed. On iPhone: open it in Safari and tap Share → Add to Home Screen.",
    alt: "Studio Bossa app screen",
    captions: [
      "Follow the works, day by day",
      "Every visit in one calendar",
      "Talk directly to your architect",
      "Approve materials with a tap",
      "Plans, 3D and documents at hand",
    ],
    tabs: ["Works", "Calendar", "Messages", "Project", "Profile"],
    s: {
      hello: "Good morning,",
      name: "Mariana",
      home: "Cedofeita Flat",
      phase: "Stage 3 of 4 · Construction",
      progress: "Progress",
      due: "Handover due on 14 November",
      stages: ["Briefing", "Design", "Works", "Handover"],
      today: "Today on site",
      updated: "Updated at 16:20",
      todayNote: "Walls prepared for the oak flooring in the living room and hallway.",
      agenda: "Calendar",
      month: "October 2026",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      wed: "Wednesday, 14 October",
      thu: "Thursday, 15 October",
      ev1: "Site visit",
      ev1d: "With architect Joana Reis",
      ev1p: "Rua de Cedofeita",
      ev2: "Materials delivery",
      ev2d: "Bathroom tiles and fittings",
      ev3: "Lighting approval",
      ev3d: "Video call · 30 min",
      suggest: "Suggest another date",
      arch: "Joana Reis",
      role: "Architect · online",
      dayLabel: "Today",
      m1: "Good morning, Mariana! The leather samples for the living-room sofa have arrived.",
      m2: "What a beautiful tone. That's exactly the one we want.",
      m3: "Perfect. I've put it in Approvals so you can confirm with a tap.",
      write: "Write a message",
      approvals: "Approvals",
      pending: "2 pending",
      matTitle: "Cognac leather",
      matWhere: "Living-room sofa",
      matSupplier: "Supplier",
      matCost: "Extra cost",
      matCostV: "None",
      approve: "Approve",
      alt2: "Ask for an alternative",
      oak: "Natural oak",
      oakWhere: "Flooring",
      linen: "Raw linen",
      linenWhere: "Curtains",
      approved: "Approved",
      waiting: "Pending",
      project: "Project",
      segs: ["3D", "Plans", "Documents"],
      docs: "Documents",
      d1: "Final plan — version 3",
      d2: "Finishes schedule",
      d3: "Approved quote",
      d4: "Invoice 2026/118",
      paid: "Paid",
      signed: "Signed",
    },
  },
};
type S = (typeof T)["pt"]["s"];

/* ------------------------------------------------------------------ */
/* Texturas dos materiais (só CSS)                                     */
/* ------------------------------------------------------------------ */
const LEATHER =
  "radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,.22), transparent 55%), radial-gradient(90% 70% at 80% 90%, rgba(62,39,35,.45), transparent 60%), #A65E2E";
const OAK =
  "repeating-linear-gradient(92deg, rgba(120,80,40,.18) 0 2px, transparent 2px 9px, rgba(120,80,40,.1) 9px 10px, transparent 10px 17px), linear-gradient(180deg, #d4b089, #c39a6c)";
const LINEN =
  "repeating-linear-gradient(0deg, rgba(62,39,35,.06) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(62,39,35,.06) 0 1px, transparent 1px 3px), #ece5d4";

/** Foto com cantos arredondados (o site tira o arredondamento às <img>). */
function Pic({ src, className }: { src: string; className: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Moldura do telemóvel + barra de estado + barra de separadores        */
/* ------------------------------------------------------------------ */
function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[211px] rounded-[34px] bg-[#1b110f] p-[8px] shadow-[0_30px_60px_-20px_rgba(20,10,8,0.55)]">
      <div className="relative h-[422px] w-[195px] overflow-hidden rounded-[27px] bg-linho-cru">
        <div className="absolute left-0 top-0 h-[844px] w-[390px] origin-top-left scale-50 text-jacaranda">
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`relative flex h-[54px] items-center justify-between px-8 text-[16px] font-semibold ${dark ? "text-white" : "text-jacaranda"}`}>
      <span>9:41</span>
      <span className="absolute left-1/2 top-[11px] h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-[#1b110f]" />
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[6, 9, 12, 15].map((h) => (
            <span key={h} className={`w-[3px] rounded-sm ${dark ? "bg-white" : "bg-jacaranda"}`} style={{ height: h }} />
          ))}
        </span>
        <span className={`ml-1 h-[13px] w-[25px] rounded-[4px] border-2 p-[1px] ${dark ? "border-white/80" : "border-jacaranda/70"}`}>
          <span className={`block h-full w-[70%] rounded-[2px] ${dark ? "bg-white" : "bg-jacaranda"}`} />
        </span>
      </span>
    </div>
  );
}

const TAB_ICONS = [Home, CalendarDays, MessageCircle, FolderOpen, User];

function TabBar({ active, labels }: { active: number; labels: string[] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-jacaranda/10 bg-white/95 pb-[30px] pt-2.5">
      <div className="grid grid-cols-5">
        {labels.map((l, i) => {
          const Icon = TAB_ICONS[i];
          const on = i === active;
          return (
            <div key={l} className={`flex flex-col items-center gap-1 ${on ? "text-couro-cognac" : "text-jacaranda/45"}`}>
              <Icon className="h-[25px] w-[25px]" strokeWidth={on ? 2 : 1.6} />
              <span className={`text-[11px] ${on ? "font-semibold" : "font-medium"}`}>{l}</span>
            </div>
          );
        })}
      </div>
      <span className="absolute bottom-[9px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-jacaranda" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ecrãs                                                               */
/* ------------------------------------------------------------------ */
function ScreenHome({ s, tabs }: { s: S; tabs: string[] }) {
  const pct = 68;
  return (
    <>
      <StatusBar />
      <div className="px-6">
        <div className="mt-2 flex items-start justify-between">
          <div>
            <p className="text-[15px] text-jacaranda-soft">{s.hello}</p>
            <p className="font-italiana text-[36px] leading-tight">{s.name}</p>
          </div>
          <span className="relative mt-2 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-sm">
            <Bell className="h-[22px] w-[22px]" strokeWidth={1.7} />
            <span className="absolute -right-0.5 -top-0.5 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-couro-cognac text-[11px] font-semibold text-white">
              2
            </span>
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-[22px] bg-white shadow-[0_10px_30px_-18px_rgba(62,39,35,.5)]">
          <div className="relative h-[176px]">
            <Pic src={photo("ana-e-cesar", "01", "sm")} className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-jacaranda/85 via-jacaranda/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-4 text-white">
              <p className="font-italiana text-[26px] leading-tight">{s.home}</p>
              <p className="mt-0.5 text-[13px] text-white/85">{s.phase}</p>
            </div>
          </div>
          <div className="px-5 pb-5 pt-4">
            <div className="flex items-baseline justify-between text-[13px]">
              <span className="font-medium text-jacaranda-soft">{s.progress}</span>
              <span className="font-italiana text-[24px] text-couro-cognac">{pct}%</span>
            </div>
            <div className="mt-1.5 h-[6px] rounded-full bg-linho-cru-deep">
              <div className="h-full rounded-full bg-couro-cognac" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1">
              {s.stages.map((st, i) => (
                <div key={st} className="flex flex-col items-center gap-1.5">
                  <span
                    className={`flex h-[22px] w-[22px] items-center justify-center rounded-full ${
                      i < 2 ? "bg-verde-oliva text-white" : i === 2 ? "border-2 border-couro-cognac bg-white" : "border border-jacaranda/20 bg-white"
                    }`}
                  >
                    {i < 2 && <Check className="h-3 w-3" strokeWidth={3} />}
                    {i === 2 && <span className="h-2 w-2 rounded-full bg-couro-cognac" />}
                  </span>
                  <span className={`text-[11px] ${i === 2 ? "font-semibold text-jacaranda" : "text-jacaranda/55"}`}>{st}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-[12px] text-jacaranda-soft">
              <Clock className="h-3.5 w-3.5" /> {s.due}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-baseline justify-between">
          <p className="font-italiana text-[24px]">{s.today}</p>
          <p className="text-[12px] text-jacaranda/50">{s.updated}</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {["levantamento-01", "levantamento-03"].map((f) => (
            <Pic key={f} src={photo("escritorio-adv", f, "sm")} className="h-[120px] w-full rounded-[14px]" />
          ))}
        </div>
        <p className="mt-3 text-[14px] leading-snug text-jacaranda-soft">{s.todayNote}</p>
      </div>
      <TabBar active={0} labels={tabs} />
    </>
  );
}

function ScreenAgenda({ s, tabs }: { s: S; tabs: string[] }) {
  const Event = ({ time, end, title, desc, extra, bar, Icon }: { time: string; end?: string; title: string; desc: string; extra?: string; bar: string; Icon?: typeof MapPin }) => (
    <div className="flex gap-4 rounded-[18px] bg-white p-4 shadow-[0_8px_24px_-18px_rgba(62,39,35,.6)]">
      <div className="w-[54px] shrink-0">
        <p className="text-[15px] font-semibold">{time}</p>
        {end && <p className="text-[12px] text-jacaranda/45">{end}</p>}
      </div>
      <span className={`w-[3px] shrink-0 rounded-full ${bar}`} />
      <div>
        <p className="text-[16px] font-semibold leading-tight">{title}</p>
        <p className="mt-1 text-[13px] text-jacaranda-soft">{desc}</p>
        {extra && Icon && (
          <p className="mt-1.5 flex items-center gap-1 text-[12px] text-jacaranda/55">
            <Icon className="h-3.5 w-3.5" /> {extra}
          </p>
        )}
      </div>
    </div>
  );
  return (
    <>
      <StatusBar />
      <div className="px-6">
        <p className="mt-2 font-italiana text-[36px] leading-tight">{s.agenda}</p>
        <p className="text-[14px] text-jacaranda-soft">{s.month}</p>
        <div className="mt-5 grid grid-cols-7 gap-1.5">
          {s.days.map((d, i) => {
            const on = i === 2;
            const dot = i === 2 || i === 3;
            return (
              <div key={d} className={`flex flex-col items-center gap-1 rounded-[14px] py-2.5 ${on ? "bg-jacaranda text-white" : ""}`}>
                <span className={`text-[11px] ${on ? "text-white/75" : "text-jacaranda/50"}`}>{d}</span>
                <span className="text-[18px] font-semibold">{12 + i}</span>
                <span className={`h-[5px] w-[5px] rounded-full ${dot ? (on ? "bg-couro-cognac-light" : "bg-couro-cognac") : "bg-transparent"}`} />
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-jacaranda/55">{s.wed}</p>
        <div className="mt-3 space-y-3">
          <Event time="09:30" end="10:30" title={s.ev1} desc={s.ev1d} extra={s.ev1p} bar="bg-verde-oliva" Icon={MapPin} />
          <Event time="14:00" title={s.ev2} desc={s.ev2d} bar="bg-couro-cognac" />
        </div>
        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-jacaranda/55">{s.thu}</p>
        <div className="mt-3">
          <Event time="11:00" end="11:30" title={s.ev3} desc={s.ev3d} extra="Google Meet" bar="bg-jacaranda" Icon={Video} />
        </div>
        <div className="mt-5 rounded-full border border-jacaranda/25 py-3 text-center text-[14px] font-semibold">{s.suggest}</div>
      </div>
      <TabBar active={1} labels={tabs} />
    </>
  );
}

function ScreenChat({ s, tabs }: { s: S; tabs: string[] }) {
  return (
    <>
      <StatusBar />
      <div className="flex items-center gap-3 border-b border-jacaranda/10 px-4 pb-3">
        <ChevronLeft className="h-7 w-7 text-couro-cognac" />
        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-verde-oliva font-italiana text-[18px] text-white">JR</span>
        <div>
          <p className="text-[16px] font-semibold leading-tight">{s.arch}</p>
          <p className="flex items-center gap-1.5 text-[12px] text-jacaranda/55">
            <span className="h-2 w-2 rounded-full bg-verde-oliva" /> {s.role}
          </p>
        </div>
      </div>
      <div className="space-y-3 px-4 pt-4">
        <p className="text-center text-[12px] font-medium text-jacaranda/45">{s.dayLabel} · 10:12</p>
        <div className="max-w-[78%] rounded-[20px] rounded-bl-[6px] bg-white px-4 py-3 text-[15px] leading-snug shadow-sm">{s.m1}</div>
        <div className="w-[62%] overflow-hidden rounded-[20px] rounded-bl-[6px] bg-white p-1.5 shadow-sm">
          <div className="h-[150px] rounded-[15px]" style={{ background: LEATHER }} />
        </div>
        <div className="ml-auto max-w-[78%] rounded-[20px] rounded-br-[6px] bg-couro-cognac px-4 py-3 text-[15px] leading-snug text-white">{s.m2}</div>
        <div className="max-w-[80%] rounded-[20px] rounded-bl-[6px] bg-white px-4 py-3 text-[15px] leading-snug shadow-sm">{s.m3}</div>
      </div>
      <div className="absolute inset-x-0 bottom-[86px] flex items-center gap-2 px-4">
        <div className="flex-1 rounded-full border border-jacaranda/15 bg-white px-4 py-3 text-[14px] text-jacaranda/40">{s.write}</div>
        <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-jacaranda text-white">
          <Send className="h-5 w-5" />
        </span>
      </div>
      <TabBar active={2} labels={tabs} />
    </>
  );
}

function ScreenApprove({ s, tabs }: { s: S; tabs: string[] }) {
  return (
    <>
      <StatusBar />
      <div className="px-6">
        <div className="mt-2 flex items-end justify-between">
          <p className="font-italiana text-[36px] leading-tight">{s.approvals}</p>
          <span className="mb-2 rounded-full bg-couro-cognac/12 px-3 py-1 text-[12px] font-semibold text-couro-cognac">{s.pending}</span>
        </div>
        <div className="mt-4 overflow-hidden rounded-[24px] bg-white shadow-[0_14px_36px_-20px_rgba(62,39,35,.6)]">
          <div className="relative h-[190px]" style={{ background: LEATHER }}>
            <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
              {s.matWhere}
            </span>
          </div>
          <div className="p-5">
            <p className="font-italiana text-[28px] leading-tight">{s.matTitle}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[13px]">
              <div>
                <p className="text-jacaranda/50">{s.matSupplier}</p>
                <p className="font-semibold">Pedroso &amp; Osório</p>
              </div>
              <div>
                <p className="text-jacaranda/50">{s.matCost}</p>
                <p className="font-semibold">{s.matCostV}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-jacaranda py-3.5 text-[15px] font-semibold text-white">
              <Check className="h-4 w-4" strokeWidth={2.6} /> {s.approve}
            </div>
            <div className="mt-2.5 rounded-full border border-jacaranda/20 py-3 text-center text-[14px] font-semibold">{s.alt2}</div>
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            { bg: OAK, t: s.oak, w: s.oakWhere, ok: true },
            { bg: LINEN, t: s.linen, w: s.linenWhere, ok: false },
          ].map((m) => (
            <div key={m.t} className="flex items-center gap-3 rounded-[18px] bg-white p-3 shadow-sm">
              <span className="h-[48px] w-[48px] shrink-0 rounded-[12px]" style={{ background: m.bg }} />
              <div className="flex-1">
                <p className="text-[15px] font-semibold leading-tight">{m.t}</p>
                <p className="text-[12px] text-jacaranda/55">{m.w}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${m.ok ? "bg-verde-oliva/12 text-verde-oliva" : "bg-couro-cognac/12 text-couro-cognac"}`}>
                {m.ok ? s.approved : s.waiting}
              </span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={3} labels={tabs} />
    </>
  );
}

function ScreenProject({ s, tabs }: { s: S; tabs: string[] }) {
  const docs = [
    { t: s.d1, m: "PDF · 2,4 MB" },
    { t: s.d2, m: "PDF · 1,1 MB" },
    { t: s.d3, m: s.signed, ok: true },
    { t: s.d4, m: s.paid, ok: true },
  ];
  return (
    <>
      <StatusBar />
      <div className="px-6">
        <p className="mt-2 font-italiana text-[36px] leading-tight">{s.project}</p>
        <div className="mt-4 grid grid-cols-3 rounded-full bg-linho-cru-deep p-1 text-center text-[13px] font-semibold">
          {s.segs.map((g, i) => (
            <span key={g} className={`rounded-full py-2 ${i === 0 ? "bg-white shadow-sm" : "text-jacaranda/55"}`}>{g}</span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Pic src={photo("ana-e-cesar", "05", "sm")} className="col-span-2 h-[160px] w-full rounded-[18px]" />
          {["03", "04"].map((f) => (
            <Pic key={f} src={photo("ana-e-cesar", f, "sm")} className="h-[104px] w-full rounded-[16px]" />
          ))}
        </div>
        <p className="mt-6 font-italiana text-[24px]">{s.docs}</p>
        <div className="mt-2 divide-y divide-jacaranda/10 rounded-[18px] bg-white px-4 shadow-sm">
          {docs.map((d) => (
            <div key={d.t} className="flex items-center gap-3 py-3">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-linho-cru">
                <FileText className="h-[18px] w-[18px] text-couro-cognac" strokeWidth={1.8} />
              </span>
              <p className="flex-1 text-[14px] font-semibold leading-tight">{d.t}</p>
              <span className={`text-[12px] ${d.ok ? "font-semibold text-verde-oliva" : "text-jacaranda/50"}`}>{d.m}</span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={3} labels={tabs} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Secção                                                              */
/* ------------------------------------------------------------------ */
const TILES = [
  { bg: "bg-couro-cognac", text: "text-white", Screen: ScreenHome },
  { bg: "bg-verde-oliva", text: "text-white", Screen: ScreenAgenda },
  { bg: "bg-linho-cru-deep", text: "text-jacaranda", Screen: ScreenChat },
  { bg: "bg-couro-cognac", text: "text-white", Screen: ScreenApprove },
  { bg: "bg-verde-oliva", text: "text-white", Screen: ScreenProject },
];

export function AppShowcase() {
  const { locale } = useLocale();
  const c = T[locale];

  return (
    <section id="app" className="overflow-hidden bg-jacaranda py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow text-white">{c.eyebrow}</span>
            <h2 className="mt-4 font-italiana text-4xl font-normal leading-[1.04] text-white sm:text-5xl lg:text-6xl text-balance">
              {c.titleA}
              <br />
              <span className="text-couro-cognac-light">{c.titleB}</span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-base leading-relaxed text-white sm:text-lg">{c.intro}</p>
            <a
              href={APP_URL}
              className="btn-lift mt-7 inline-flex items-center gap-3 whitespace-nowrap bg-white px-7 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-jacaranda transition-colors hover:bg-couro-cognac hover:text-white sm:text-sm"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              {c.install}
            </a>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/75">{c.installNote}</p>
          </div>
        </div>
      </div>

      {/* Ecrãs, como na App Store — desliza na horizontal em ecrãs pequenos */}
      <div className="app-strip mt-14 overflow-x-auto pb-4 lg:mt-16">
        <ul className="mx-auto flex w-max snap-x snap-mandatory gap-4 px-4 sm:px-6 xl:w-auto xl:max-w-7xl xl:justify-between">
          {TILES.map(({ bg, text, Screen }, i) => (
            <li
              key={i}
              className={`reveal flex w-[232px] shrink-0 snap-center flex-col items-center px-3 pb-8 pt-7 ${bg}`}
              data-reveal-delay={`${i * 90}`}
            >
              <p className={`mb-6 min-h-[64px] text-center font-italiana text-[22px] leading-[1.15] ${text}`}>{c.captions[i]}</p>
              <div role="img" aria-label={`${c.alt} — ${c.captions[i]}`} className="mt-auto">
                <div aria-hidden>
                  <Phone>
                    <Screen s={c.s} tabs={c.tabs} />
                  </Phone>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
