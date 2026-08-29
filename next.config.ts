import type { NextConfig } from "next";

/**
 * Configuração do Next.js para deploy no GitHub Pages.
 *
 * - `output: "export"`: gera HTML/CSS/JS estático em /out (sem servidor Node).
 * - `basePath`: prefixo para o nome do repo no GitHub Pages
 *   (ex: https://usuario.github.io/studio-bossa/ -> basePath: "/studio-bossa").
 *   IMPORTANTE: substitua "studio-bossa" pelo nome exato do seu repositório.
 * - `assetPrefix`: mesmo basePath, para carregar assets (_next/static, imagens).
 * - `images.unoptimized`: o GitHub Pages não tem otimização server-side,
 *   então servimos as imagens originais.
 * - `trailingSlash`: garante que /contato/ funcione no Pages (caso acessem direto).
 */
const repoName = "studio-bossa"; // ← TROQUE PELO NOME DO SEU REPOSITÓRIO

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
