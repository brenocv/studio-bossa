import type { NextConfig } from "next";

/**
 * Configuração do Next.js para deploy no GitHub Pages
 * (abordagem "Deploy from a branch", sem GitHub Actions).
 *
 * Como funciona:
 * 1. Você roda `npm run build:pages` localmente
 * 2. O Next.js gera os arquivos estáticos em /docs
 * 3. Você faz commit da pasta /docs junto com o código-fonte
 * 4. No GitHub: Settings → Pages → Source: "Deploy from a branch"
 *    → Branch: main / Folder: /docs
 *
 * - `output: "export"`: gera HTML/CSS/JS estático (sem servidor Node).
 * - `distDir: "docs"`: pasta de saída do build (Pages aceita /docs automaticamente).
 * - `basePath`: prefixo para o nome do repo no GitHub Pages
 *   (ex: https://usuario.github.io/studio-bossa/ -> basePath: "/studio-bossa").
 *   ⚠️ IMPORTANTE: substitua "studio-bossa" pelo nome exato do seu repositório.
 * - `images.unoptimized`: o GitHub Pages não tem otimização server-side,
 *   então servimos as imagens originais. AINDA ASSIM usamos next/image
 *   em todos os <img> porque ele adiciona o basePath automaticamente.
 * - `images.remotePatterns`: permite carregar imagens do Pexels.
 * - `trailingSlash`: garante que /contato/ funcione no Pages.
 */
const repoName = "studio-bossa"; // ← TROQUE PELO NOME DO SEU REPOSITÓRIO

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
