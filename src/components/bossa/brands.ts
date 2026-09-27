/**
 * Marcas com que o Studio Bossa trabalha (faixa depois dos testemunhos).
 *
 * LOGÓTIPOS: coloque o ficheiro de cada marca em public/marcas/ com o nome
 * indicado em `logo` (SVG ou PNG com fundo transparente) e ele aparece
 * automaticamente no lugar do nome. Enquanto não houver ficheiro
 * (logo: null), mostra-se o nome da marca em texto.
 */
export type Brand = { name: string; logo: string | null };

export const BRANDS: Brand[] = [
  { name: "Pedroso & Osório", logo: null }, // ex.: "pedroso-osorio.svg"
  { name: "Tapetes Cut Cut", logo: null }, // ex.: "tapetes-cut-cut.svg"
  { name: "Damasceno & Antunes", logo: null }, // ex.: "damasceno-antunes.svg"
  { name: "Porcelanosa", logo: null }, // ex.: "porcelanosa.svg"
  { name: "Elastron", logo: null }, // ex.: "elastron.svg"
  { name: "GoHome", logo: null }, // ex.: "gohome.svg"
  { name: "Aromas del Campo", logo: null }, // ex.: "aromas-del-campo.svg"
  { name: "Fenabel", logo: null }, // ex.: "fenabel.svg"
];
