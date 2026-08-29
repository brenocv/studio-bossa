import Image from "next/image";
import { img } from "./imagePath";

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
 * Usamos o helper img() para adicionar o basePath automaticamente,
 * já que as imagens estão na pasta public/ (não são imports).
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
  const src =
    variant === "white"
      ? img("/logo-bossa/logo-studio-bossa-white.png")
      : img("/logo-bossa/logo-studio-bossa-dark.png");

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
