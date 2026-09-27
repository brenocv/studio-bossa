/**
 * Studio Bossa — PROJETOS (grelha "Projetos recentes" + página de cada projeto).
 *
 * A ordem da lista é a ordem na grelha. As fotos vêm de projects-media.ts
 * (gerado a partir das pastas em "imagens projetos") e estão em public/projetos/<slug>/.
 * Os textos descrevem o que as imagens mostram — o estúdio deve revê-los.
 */
import { img } from "./imagePath";
import type { Locale } from "./content";
import { MEDIA, type Img } from "./projects-media";

type L = Record<Locale, string>;

export type Project = {
  slug: string;
  name: L;
  type: L;
  summary: L;
};

export const PROJECTS: Project[] = [
  {
    slug: "ana-e-cesar",
    name: { pt: "Projeto Ana e César", en: "Ana & César Project" },
    type: { pt: "Apartamento · Projeto 3D", en: "Flat · 3D design" },
    summary: {
      pt: "Projeto integral de um apartamento, divisão a divisão: sala e zona de refeições em open space, cozinha e lavandaria em verde-oliva, suite com closet iluminado, escritório, quartos e casas de banho com bancadas em pedra verde. Madeira quente, iluminação LED embutida e uma paleta serena ligam todos os espaços.",
      en: "A full flat, designed room by room: an open-plan living and dining area, an olive-green kitchen and laundry, a master suite with a lit walk-in wardrobe, a home office, bedrooms and bathrooms with green stone vanities. Warm timber, concealed LED lighting and a calm palette tie every space together.",
    },
  },
  {
    slug: "escritorio-adv",
    name: { pt: "Escritório ADV", en: "ADV Law Office" },
    type: { pt: "Escritório de advocacia · Projeto 3D", en: "Law office · 3D design" },
    summary: {
      pt: "Transformação de um apartamento vazio num escritório de advocacia: receção com painel ripado em madeira e a marca do escritório, gabinetes separados por divisórias em vidro, sala de reuniões, copa e instalações sanitárias. Uma imagem sóbria e acolhedora, em madeira clara e tons neutros.",
      en: "An empty flat transformed into a law office: a reception with a slatted timber wall and the firm's name, private offices behind glass partitions, a meeting room, a kitchenette and WC. A sober yet welcoming image in light timber and neutral tones.",
    },
  },
  {
    slug: "miguel",
    name: { pt: "Projeto Miguel", en: "Miguel Project" },
    type: { pt: "Apartamento · Projeto 3D", en: "Flat · 3D design" },
    summary: {
      pt: "Projeto de interiores para um apartamento: entrada com painel ripado, sala com móvel de TV suspenso e estante-aparador por trás do sofá, quarto com cabeceira em madeira e tapete redondo, e um escritório que também recebe hóspedes. Tons de areia, luz natural filtrada e muita arrumação por medida.",
      en: "Interior design for a flat: an entrance with a slatted panel, a living room with a floating TV unit and a console shelf behind the sofa, a bedroom with a timber headboard and round rug, and a home office that doubles as a guest room. Sand tones, filtered daylight and plenty of bespoke storage.",
    },
  },
  {
    slug: "diana",
    name: { pt: "Projeto Diana", en: "Diana Project" },
    type: { pt: "Quarto de bebé e sala · Projeto 3D", en: "Nursery & living room · 3D design" },
    summary: {
      pt: "Dois espaços de uma mesma casa. O quarto do bebé, em rosa suave, com papel de parede ilustrado, berço em madeira, espelho em arco e um canto confortável para amamentar. E a sala, com divisória ripada em madeira que separa a entrada da zona de estar e de refeições.",
      en: "Two spaces in one home. A nursery in soft pink, with illustrated wallpaper, a timber cot, an arched mirror and a comfortable nursing corner. And the living room, where a slatted timber screen separates the entrance from the living and dining areas.",
    },
  },
  {
    slug: "sala",
    name: { pt: "Sala", en: "Living Room" },
    type: { pt: "Sala e zona de trabalho · Projeto 3D", en: "Living room & workspace · 3D design" },
    summary: {
      pt: "Uma sala ampla pensada para receber e para trabalhar: sofá modular, mesa de refeições com espelho orgânico, zona de escritório com estantes por medida e uma paleta clara de linho, madeira e cinzas quentes.",
      en: "A generous living room designed for entertaining and working: a modular sofa, a dining table under an organic mirror, a workspace with bespoke shelving and a light palette of linen, timber and warm greys.",
    },
  },
  {
    slug: "atelier",
    name: { pt: "Projeto Atelier", en: "Atelier Project" },
    type: { pt: "Espaço de trabalho · Projeto 3D", en: "Workspace · 3D design" },
    summary: {
      pt: "Projeto para um atelier: postos de trabalho junto às janelas, zona de estar para reuniões informais, mesa redonda de trabalho e uma estante-biblioteca, com divisórias ripadas em madeira que organizam o espaço sem o fechar.",
      en: "A studio workspace: desks along the windows, a lounge for informal meetings, a round worktable and a library wall, with slatted timber screens that organise the space without closing it off.",
    },
  },
  {
    slug: "quarto-casal",
    name: { pt: "Quarto Casal", en: "Master Bedroom" },
    type: { pt: "Quarto · Projeto 3D", en: "Bedroom · 3D design" },
    summary: {
      pt: "Um quarto de casal calmo e envolvente: cama estofada, obra de arte em relevo sobre a cabeceira, cortinas em linho e luz indireta. Tons de areia e texturas suaves pensados para o descanso.",
      en: "A calm, enveloping master bedroom: an upholstered bed, relief artwork above the headboard, linen curtains and indirect light. Sand tones and soft textures designed for rest.",
    },
  },
  {
    slug: "quarto-filhas",
    name: { pt: "Quarto Filhas", en: "Girls' Bedroom" },
    type: { pt: "Quarto · Projeto 3D", en: "Bedroom · 3D design" },
    summary: {
      pt: "Um quarto que cresce com as filhas: secretária e estante em rosa-terracota, papel de parede aos quadrados, cama com cabeceira estofada e tapete redondo. Alegre, organizado e acolhedor.",
      en: "A bedroom that grows with the girls: a terracotta-pink desk and shelving, checked wallpaper, an upholstered bed and a round rug. Cheerful, organised and cosy.",
    },
  },
  {
    slug: "quarto-jovem-nazare",
    name: { pt: "Quarto Jovem Nazaré", en: "Teen Bedroom, Nazaré" },
    type: { pt: "Quarto · Projeto 3D", en: "Bedroom · 3D design" },
    summary: {
      pt: "Quarto jovem na Nazaré com cabeceira iluminada, secretária e cómoda por medida e uma paleta neutra que deixa espaço à personalidade de quem lá vive.",
      en: "A teenager's bedroom in Nazaré with a lit headboard, a bespoke desk and chest of drawers, and a neutral palette that leaves room for personality.",
    },
  },
  {
    slug: "quarto-senhora",
    name: { pt: "Quarto Senhora", en: "Lady's Bedroom" },
    type: { pt: "Quarto · Projeto 3D", en: "Bedroom · 3D design" },
    summary: {
      pt: "Um quarto elegante e intemporal: cabeceira estofada, sanca com luz indireta, móvel de apoio com TV e plantas que trazem vida a uma paleta de beges e brancos.",
      en: "An elegant, timeless bedroom: an upholstered headboard, a lit cornice, a media unit and plants that bring life to a palette of beiges and whites.",
    },
  },
  {
    slug: "lavandaria",
    name: { pt: "Lavandaria", en: "Laundry Room" },
    type: { pt: "Lavandaria · Projeto 3D", en: "Laundry room · 3D design" },
    summary: {
      pt: "Uma lavandaria funcional, com máquinas em coluna, armários altos e bancada para dobrar a roupa. Apresentámos duas propostas: uma com prateleiras abertas e outra com portas em azul-acinzentado.",
      en: "A practical laundry room with stacked machines, tall cabinets and a folding counter. We presented two options: one with open shelving and one with grey-blue doors.",
    },
  },
];

export const PROJECT_PATH: Record<Locale, (slug: string) => string> = {
  pt: (s) => `/projetos/${s}/`,
  en: (s) => `/en/projects/${s}/`,
};

export const PROJECTS_INDEX: Record<Locale, string> = { pt: "/projetos/", en: "/en/projects/" };

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Caminhos das imagens de um projeto (versão grande e versão pequena) */
export function photo(slug: string, i: Img | string, size: "lg" | "sm" = "lg") {
  const f = typeof i === "string" ? i : i.f;
  return img(`/projetos/${slug}/${f}${size === "sm" ? "-sm" : ""}.jpg`);
}

export function media(slug: string) {
  return MEDIA[slug];
}
