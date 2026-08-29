import Image from "next/image";
import logoWhite from "../../../public/logo-bossa/logo-studio-bossa-white.png";
import logoDark from "../../../public/logo-bossa/logo-studio-bossa-dark.png";

/**
 * Logo Studio Bossa
 *
 * Usamos a versao recortada do manual de marca (PNG transparente)
 * para fidelidade total as proporcoes:
 *   - "studio" verticalizado a esquerda, com altura ~= 60-70% da altura de "bossa"
 *   - "bossa" em serif italico a direita
 *
 * Variants:
 *   - "white"  -> texto branco (para fundos escuros: jacaranda, oliva)
 *   - "dark"   -> texto jacaranda (para fundos claros: linho)
 *
 * Importando as imagens como módulos garante que o Next.js inclua o
 * basePath automaticamente (importante para GitHub Pages).
 */

type LogoProps = {
  variant?: "white" | "dark";
  className?: string;
  /** altura em pixels — largura escala proporcionalmente (~2.67x a altura) */
  height?: number;
};

export function Logo({
  variant = "dark",
  className = "",
  height = 36,
}: LogoProps) {
  const src = variant === "white" ? logoWhite : logoDark;
  // Dimensoes naturais: 1283x480 -> ratio ~2.673
  const width = Math.round(height * 2.673);

  return (
    <Image
      src={src}
      alt="Studio Bossa"
      width={width}
      height={height}
      priority
      className={`object-contain ${className}`}
    />
  );
}
