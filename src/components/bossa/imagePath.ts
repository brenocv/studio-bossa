/**
 * Helper para construir URLs de imagens estáticas considerando o basePath.
 *
 * O Next.js adiciona automaticamente o basePath apenas em imports de imagens
 * e assets do _next/static/. Para imagens servidas da pasta public/ via
 * <Image src="/manual-images/foo.jpg">, o basePath NÃO é aplicado —
 * precisamos fazer isso manualmente.
 *
 * Uso:
 *   import { img } from "./imagePath";
 *   <Image src={img("/manual-images/sala.jpg")} ... />
 */

const repoName = "studio-bossa"; // ⚠️ Deve bater com next.config.ts

/**
 * Retorna o caminho absoluto de uma imagem, prefixado com o basePath
 * configurado no next.config.ts.
 *
 * Exemplos:
 *   img("/manual-images/sala.jpg")
 *     → "/studio-bossa/manual-images/sala.jpg"  (em produção no Pages)
 *     → "/manual-images/sala.jpg"               (em dev local)
 *
 *   img("https://images.pexels.com/...")  → retorna inalterado (URL externa)
 */
export function img(path: string): string {
  // URLs externas (http://, https://) — retornar inalteradas
  if (/^https?:\/\//.test(path)) return path;

  // Caminhos que já têm o basePath — retornar inalterados
  if (path.startsWith(`/${repoName}/`)) return path;

  // Caminhos relativos — normalizar para absoluto com basePath
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${repoName}${cleanPath}`;
}
