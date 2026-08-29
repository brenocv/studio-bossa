# Studio Bossa — Website

Website do **Studio Bossa**, estúdio de design de interiores e arquitetura de alto padrão, sediado no Porto, Portugal.

## Stack

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- Fontes: **Italiana** (títulos serifados) + **Inter** (corpo de texto)

## Identidade Visual

Aplicada fielmente ao manual de marca:

| Cor | Hex | Uso |
|-----|-----|-----|
| **Jacarandá** | `#3E2723` | Texto principal, fundos escuros |
| **Couro Cognac** | `#A65E2E` | CTAs, destaques |
| **Verde Oliva** | `#4C5F45` | Equilíbrio, badges, seções de respiro |
| **Linho Cru** | `#F5F2E8` | Fundo principal, negativo |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (fontes, cursor customizado, metadata)
│   ├── page.tsx            # Composição da home (11 seções)
│   └── globals.css         # Variáveis CSS, animações, microanimações
└── components/
    ├── ui/                 # Componentes shadcn/ui
    └── bossa/
        ├── Logo.tsx            # Logo recortada do manual (PNG transparente)
        ├── Header.tsx          # Header fixo com nav + underline animado
        ├── Hero.tsx            # Hero com parallax duplo
        ├── Marquee.tsx         # Marquee + stats com parallax
        ├── Services.tsx        # Cards de serviços com hover lift
        ├── Process.tsx        # Timeline (fundo Verde Oliva)
        ├── Projects.tsx       # Portfólio interativo com thumbnails
        ├── About.tsx           # Sobre (parallax triplo)
        ├── Testimonials.tsx   # Depoimentos
        ├── Cta.tsx             # Call-to-action com parallax forte
        ├── Faq.tsx             # FAQ acordeão (fundo Verde Oliva)
        ├── Contact.tsx        # Formulário + info de contato
        ├── Footer.tsx          # Rodapé
        ├── CustomCursor.tsx    # Cursor customizado (ponto + anel)
        ├── useParallax.ts      # Hook de parallax baseado em scroll
        ├── useReveal.ts        # Hook de reveal on scroll
        └── data.ts            # Dados centralizados
public/
├── logo-bossa/             # Logo recortada (white + dark, transparente)
└── manual-images/          # 18 imagens extraídas do manual visual
```

## Funcionalidades

- ✅ Identidade visual fiel ao manual de marca (4 cores + tipografia + logo)
- ✅ Parallax intensificado em todas as seções
- ✅ Cursor customizado (ponto + anel que cresce sobre elementos interativos)
- ✅ Microanimações: shimmer em botões, lift, magnetic em sociais, underline animado em nav
- ✅ Scroll reveal (fade-up cinematográfico)
- ✅ FAQ acordeão animado
- ✅ Portfólio com troca interativa de projetos
- ✅ Formulário com loading dots animados e tela de sucesso
- ✅ Menu mobile hamburger
- ✅ Responsivo (mobile-first)
- ✅ SEO metadata em pt-PT

## Como rodar

```bash
# Instalar dependências
bun install   # ou npm install / pnpm install

# Ambiente de desenvolvimento
bun run dev   # ou npm run dev

# Build de produção
bun run build

# Lint
bun run lint
```

Acesse em `http://localhost:3000`.

## Localização

**Studio Bossa** — Rua das Flores, 100, Porto, Portugal
Telefone: +351 220 000 000
Email: hello@studiobossa.pt

## Licença

© Studio Bossa. Todos os direitos reservados.
