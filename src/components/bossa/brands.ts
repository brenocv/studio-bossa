/**
 * Marcas com que o Studio Bossa trabalha (faixa depois dos testemunhos).
 *
 * LOGÓTIPOS: coloque o ficheiro de cada marca em public/marcas/ com o nome
 * indicado em `logo` (SVG ou PNG com fundo transparente) e ele aparece
 * automaticamente no lugar do nome. Enquanto não houver ficheiro
 * (logo: null), mostra-se o nome da marca em texto.
 */
export type Brand = { name: string; logo: string | null; tall?: boolean }; // tall: logótipo mais alto que largo

export const BRANDS: Brand[] = [
  { name: "Pedroso & Osório", logo: "pedroso-osorio.svg" },
  { name: "Tapetes Cut Cut", logo: "cutcut.png" },
  { name: "Damasceno & Antunes", logo: "damaceno-antunes.png" },
  { name: "Porcelanosa", logo: "porcelanosa.png" },
  { name: "Elastron", logo: "elastron.png" },
  { name: "GoHome", logo: "gohome.png" },
  { name: "Aromas del Campo", logo: "aromas-del-campo.svg" },
  { name: "Fenabel", logo: "fenabel.svg" },
  { name: "Duarte & Silva Construções", logo: "duarte-silva.png", tall: true },
];
