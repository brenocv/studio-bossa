# Studio Bossa — Website

Website do **Studio Bossa**, estúdio de design de interiores e arquitetura de alto padrão, sediado no Porto, Portugal.

## Stack

- **Next.js 16** (App Router) — modo **export estático** (HTML/CSS/JS, sem servidor Node)
- **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- Fontes: **Italiana** (títulos serifados) + **Inter** (corpo de texto)
- Deploy: **GitHub Pages** (com GitHub Actions automático)

## Identidade Visual

Aplicada fielmente ao manual de marca:

| Cor | Hex | Uso |
|-----|-----|-----|
| **Jacarandá** | `#3E2723` | Texto principal, fundos escuros |
| **Couro Cognac** | `#A65E2E` | CTAs, destaques |
| **Verde Oliva** | `#4C5F45` | Equilíbrio, badges, seções de respiro |
| **Linho Cru** | `#F5F2E8` | Fundo principal, negativo |

## Deploy no GitHub Pages (passo a passo)

### 1. Crie um repositório no GitHub

- Nome sugerido: **`studio-bossa`** (ou outro nome da sua escolha)
- Marque como **Público** (GitHub Pages gratuito só funciona em repositórios públicos em contas gratuitas)

### 2. ⚠️ Se o nome do repositório for diferente de `studio-bossa`

Edite `next.config.ts` e troque o valor da variável `repoName`:

```ts
const repoName = "studio-bossa"; // ← coloque o nome do seu repo aqui
```

> Exemplo: se o repo se chamar `meu-site-bossa`, mude para `const repoName = "meu-site-bossa";`

### 3. Faça push do código para o GitHub

```bash
git init
git add .
git commit -m "Studio Bossa — site inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/studio-bossa.git
git push -u origin main
```

### 4. Ative o GitHub Pages

1. Vá em **Settings** → **Pages** (no menu lateral do repo)
2. Em **Build and deployment** → **Source**, selecione: **GitHub Actions**
3. Pronto! O workflow em `.github/workflows/deploy.yml` vai rodar automaticamente a cada push.

### 5. Acompanhe o deploy

- Vá na aba **Actions** do repo
- Veja o workflow **"Deploy to GitHub Pages"** rodando
- Quando terminar (≈ 1-2 min), o site estará disponível em:
  ```
  https://SEU_USUARIO.github.io/studio-bossa/
  ```

### 6. Configuração final

Volte em **Settings** → **Pages** e copie a URL pública. Pronto para divulgar! 🎉

---

## Desenvolvimento local

```bash
# Instalar dependências
npm install        # ou: bun install / pnpm install

# Ambiente de desenvolvimento (rodando em http://localhost:3000)
npm run dev

# Build estático (gera a pasta /out — mesma coisa que o GitHub Actions faz)
GITHUB_ACTIONS=true npm run build:pages

# Lint
npm run lint
```

> ⚠️ **Importante sobre desenvolvimento local**: ao rodar `npm run dev`, o site abre em `http://localhost:3000` **sem basePath** (porque `GITHUB_ACTIONS` não está definido). Ao rodar `npm run build:pages`, é gerada a pasta `/out` com o basePath `/studio-bossa/` — para testá-la localmente, sirva a pasta com o path completo:
>
> ```bash
> cd out
> # Cria a estrutura de pastas simulando o GitHub Pages
> mkdir -p ../gh-pages-test/studio-bossa
> cp -r ./* ../gh-pages-test/studio-bossa/
> cd ../gh-pages-test
> python3 -m http.server 8888
> # Acesse: http://localhost:8888/studio-bossa/
> ```

---

## Estrutura

```
studio-bossa/
├── .github/workflows/
│   └── deploy.yml            # Workflow que builda e publica no Pages
├── public/
│   ├── .nojekyll             # Impede Jekyll de processar o /out
│   ├── logo-bossa/           # Logo recortada (white + dark, transparente)
│   └── manual-images/       # 18 imagens extraídas do manual visual
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raiz (fontes, cursor customizado, metadata)
│   │   ├── page.tsx         # Composição da home (11 seções)
│   │   ├── not-found.tsx    # Página 404 customizada
│   │   └── globals.css      # Variáveis CSS, animações, microanimações
│   └── components/
│       ├── ui/              # Componentes shadcn/ui
│       └── bossa/
│           ├── Logo.tsx            # Logo recortada do manual
│           ├── Header.tsx          # Header fixo com nav + underline animado
│           ├── Hero.tsx             # Hero com parallax duplo
│           ├── Marquee.tsx         # Marquee + stats com parallax
│           ├── Services.tsx        # Cards de serviços com hover lift
│           ├── Process.tsx        # Timeline (fundo Verde Oliva)
│           ├── Projects.tsx       # Portfólio interativo com thumbnails
│           ├── About.tsx          # Sobre (parallax triplo)
│           ├── Testimonials.tsx   # Depoimentos
│           ├── Cta.tsx            # Call-to-action com parallax forte
│           ├── Faq.tsx            # FAQ acordeão (fundo Verde Oliva)
│           ├── Contact.tsx        # Formulário + info de contato
│           ├── Footer.tsx          # Rodapé
│           ├── CustomCursor.tsx    # Cursor customizado (ponto + anel)
│           ├── useParallax.ts     # Hook de parallax baseado em scroll
│           ├── useReveal.ts       # Hook de reveal on scroll
│           └── data.ts            # Dados centralizados
├── next.config.ts            # Configurado para GitHub Pages (output: export)
├── package.json             # Scripts: dev, build:pages, lint
└── README.md
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
- ✅ Página 404 customizada
- ✅ Responsivo (mobile-first)
- ✅ SEO metadata em pt-PT
- ✅ **Deploy automático no GitHub Pages via Actions**

## Limitações do GitHub Pages

O GitHub Pages é **100% estático** (sem servidor Node). Por isso:

- ❌ Não há backend/banco de dados (o formulário de contato faz apenas simulação de envio — para receber de verdade, integre com serviço como Formspree, Getform, ou Netlify Forms)
- ❌ Sem API routes dinâmicas
- ✅ Todo o resto (parallax, cursor customizado, animações, FAQ, portfólio) funciona perfeitamente

### Para receber emails do formulário de contato

Recomendo o **Formspree** (gratuito até 50 envios/mês):

1. Crie conta em [formspree.io](https://formspree.io)
2. Crie um formulário e copie o endpoint (ex: `https://formspree.io/f/xxxxxxxx`)
3. Edite `src/components/bossa/Contact.tsx`, na função `handleSubmit`, substitua a simulação por:
   ```ts
   const res = await fetch("https://formspree.io/f/xxxxxxxx", {
     method: "POST",
     headers: { "Content-Type": "application/json", Accept: "application/json" },
     body: JSON.stringify(form),
   });
   if (!res.ok) throw new Error("Falha ao enviar");
   setSubmitted(true);
   ```

## Localização

**Studio Bossa** — Rua das Flores, 100, Porto, Portugal
Telefone: +351 220 000 000
Email: hello@studiobossa.pt

## Licença

© Studio Bossa. Todos os direitos reservados.
