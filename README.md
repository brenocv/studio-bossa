# Studio Bossa — Website

Website do **Studio Bossa**, estúdio de design de interiores e arquitetura de alto padrão, sediado no Porto, Portugal.

## Stack

- **Next.js 16** (App Router) — modo **export estático** (HTML/CSS/JS, sem servidor Node)
- **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- Fontes: **Italiana** (títulos serifados) + **Inter** (corpo de texto)
- Deploy: **GitHub Pages** via **Deploy from a branch** (sem GitHub Actions)

## Identidade Visual

Aplicada fielmente ao manual de marca:

| Cor | Hex | Uso |
|-----|-----|-----|
| **Jacarandá** | `#3E2723` | Texto principal, fundos escuros |
| **Couro Cognac** | `#A65E2E` | CTAs, destaques |
| **Verde Oliva** | `#4C5F45` | Equilíbrio, badges, seções de respiro |
| **Linho Cru** | `#F5F2E8` | Fundo principal, negativo |

---

## 🚀 Deploy no GitHub Pages (Deploy from a branch)

Esta é a abordagem clássica: você builda localmente, commita a pasta `docs/`, e o Pages serve direto. Sem Actions, sem build no servidor.

### Passo a passo

#### 1. Crie o repositório no GitHub

- Nome sugerido: **`studio-bossa`** (ou outro nome da sua escolha)
- Marque como **Público** (GitHub Pages gratuito em contas free só funciona em repositórios públicos)

#### 2. ⚠️ Se o nome do repositório for diferente de `studio-bossa`

Edite `next.config.ts` e troque o valor da variável `repoName`:

```ts
const repoName = "studio-bossa"; // ← coloque o nome do seu repo aqui
```

> Exemplo: se o repo se chamar `meu-site`, mude para `const repoName = "meu-site";`

#### 3. Instale dependências e builde localmente

```bash
npm install              # ou: bun install / pnpm install
npm run build:pages      # gera a pasta /docs com o site estático
```

O script `build:pages` roda `next build` que, com `output: "export"` e `distDir: "docs"`, gera o site 100% estático em `/docs`.

#### 4. Faça commit de tudo (inclusive a pasta `/docs`)

```bash
git init
git add .
git commit -m "Studio Bossa — site inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/studio-bossa.git
git push -u origin main
```

⚠️ **Importante**: a pasta `/docs` **deve** ser commitada. Ela está liberada no `.gitignore` (não é ignorada).

#### 5. Ative o GitHub Pages

1. Vá em **Settings** → **Pages** (no menu lateral do repo)
2. Em **Build and deployment** → **Source**, selecione: **Deploy from a branch**
3. Em **Branch**, selecione:
   - Branch: **`main`**
   - Folder: **`/docs`**
4. Clique em **Save**

Pronto! Em ~1-2 minutos o site estará disponível em:

```
https://SEU_USUARIO.github.io/studio-bossa/
```

#### 6. Para futuras atualizações

Sempre que alterar algo no site, repita:

```bash
npm run build:pages      # regera o /docs
git add docs
git commit -m "deploy: atualiza site"
git push
```

Em ~1-2 minutos o site novo estará no ar automaticamente.

---

## 💻 Desenvolvimento local

```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento (rodando em http://localhost:3000)
# IMPORTANTE: em dev mode o basePath NÃO se aplica (URL limpa)
npm run dev

# Build estático para produção (gera /docs)
npm run build:pages

# Lint
npm run lint
```

### Como testar o build localmente

Como o `/docs` está com `basePath: /studio-bossa/`, você precisa servir simulando esse path:

```bash
# Método rápido: copia /docs para uma estrutura simulada
mkdir -p /tmp/pages-test/studio-bossa
cp -r docs/* /tmp/pages-test/studio-bossa/
cd /tmp/pages-test
python3 -m http.server 8889

# Abra: http://localhost:8889/studio-bossa/
```

---

## Estrutura

```
studio-bossa/
├── docs/                     # ⬅ BUILD ESTÁTICO (commitado no git)
│   ├── _next/                # JS/CSS/fontes
│   ├── logo-bossa/           # Logo recortada
│   ├── manual-images/        # Imagens do manual visual
│   ├── index.html            # Home
│   ├── 404.html              # Página 404
│   └── .nojekyll             # Impede Jekyll de processar
│
├── public/                   # Arquivos estáticos source (copiados para /docs no build)
│   ├── .nojekyll
│   ├── logo-bossa/
│   └── manual-images/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raiz (fontes, cursor customizado, metadata)
│   │   ├── page.tsx         # Composição da home (11 seções)
│   │   ├── not-found.tsx    # Página 404 customizada
│   │   └── globals.css      # Variáveis CSS, animações, microanimações
│   └── components/
│       ├── ui/              # Componentes shadcn/ui
│       └── bossa/           # Componentes do site Studio Bossa
│           ├── Logo.tsx
│           ├── Header.tsx
│           ├── Hero.tsx
│           ├── Marquee.tsx
│           ├── Services.tsx
│           ├── Process.tsx
│           ├── Projects.tsx
│           ├── About.tsx
│           ├── Testimonials.tsx
│           ├── Cta.tsx
│           ├── Faq.tsx
│           ├── Contact.tsx
│           ├── Footer.tsx
│           ├── CustomCursor.tsx
│           ├── useParallax.ts
│           ├── useReveal.ts
│           └── data.ts
│
├── next.config.ts            # Configurado para GitHub Pages
│                            # (output: export, distDir: docs, basePath: /studio-bossa)
├── package.json             # Scripts: dev, build:pages, lint
├── .gitignore               # /docs NÃO está ignorado (é commitado)
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
- ✅ Deploy simples via "Deploy from a branch"

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
   setForm(initial);
   ```
4. Rode `npm run build:pages` e faça commit + push da pasta `/docs`

## Localização

**Studio Bossa** — Rua das Flores, 100, Porto, Portugal
Telefone: +351 220 000 000
Email: hello@studiobossa.pt

## Licença

© Studio Bossa. Todos os direitos reservados.
