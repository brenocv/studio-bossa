/**
 * Studio Bossa — PROJETOS (grelha "Projetos recentes" + página de cada projeto).
 *
 * A ordem da lista é a ordem na grelha. As fotos vêm de projects-media.ts
 * (gerado a partir das pastas em "imagens projetos") e estão em public/projetos/<slug>/.
 */
import { img } from "./imagePath";
import type { Locale } from "./content";
import { MEDIA, type Img } from "./projects-media";

type L = Record<Locale, string>;

export type Project = {
  slug: string;
  name: L;
  type: L;
  /** 1.º parágrafo: aparece ao lado do título e nas descrições para o Google */
  summary: L;
  /** restantes parágrafos (separados por linha em branco): secção "Sobre o projeto" */
  body: L;
};

export const PROJECTS: Project[] = [
  {
    slug: "escritorio-adv",
    name: { pt: "Projeto Advogados", en: "Law Office Project" },
    type: { pt: "Escritório de advocacia · Projeto 3D", en: "Law office · 3D design" },
    summary: {
      pt: "Transformação de um pequeno espaço comercial, originalmente composto por duas salas e uma instalação sanitária, num escritório de advocacia com dois gabinetes, uma receção, uma copa e uma casa de banho.",
      en: "A small commercial unit, originally two rooms and a WC, transformed into a law office with two private offices, a reception, a kitchenette and a bathroom.",
    },
    body: {
      pt: `O principal desafio consistiu em otimizar a área disponível, criando ambientes funcionais e harmoniosos, com uma circulação fluida. A utilização de divisórias envidraçadas permitiu delimitar os gabinetes, preservando a entrada e a distribuição da luz natural.

A escolha de madeira clara e tons neutros conferiu ao espaço uma identidade sóbria e contemporânea, aliando funcionalidade, conforto e uma atmosfera acolhedora.`,
      en: `The main challenge was to make the most of the available area, creating functional, harmonious spaces with an easy flow. Glazed partitions define the offices while keeping natural light coming in and spreading through the space.

Light timber and neutral tones give the office a sober, contemporary identity, combining function and comfort with a welcoming atmosphere.`,
    },
  },
  {
    slug: "doce-partilha",
    name: { pt: "Doce Partilha | Quarto de Avó e Neta", en: "Doce Partilha | A Grandmother and Granddaughter's Bedroom" },
    type: { pt: "Quarto · Projeto 3D", en: "Bedroom · 3D design" },
    summary: {
      pt: "Um quarto pensado para acolher duas gerações: uma criança em crescimento e uma avó que representa uma importante rede de apoio.",
      en: "A bedroom designed for two generations: a growing child and a grandmother who is an important source of support.",
    },
    body: {
      pt: `O principal desafio foi conciliar o universo lúdico da infância com a sobriedade de um espaço adulto, criando um ambiente harmonioso, funcional e capaz de se adaptar ao longo do tempo.

Elementos como o papel de parede, o tapete e os objetos decorativos permitem acompanhar as diferentes fases da criança, enquanto o mobiliário feito à medida constitui a base permanente do projeto. A secretária e a cama de inspiração Montessori foram concebidas para acompanhar o seu crescimento.

A combinação de tons de rosa antigo, madeira clara e bege cria uma atmosfera luminosa e delicada, com uma paleta cromática suave que evita a monotonia e o excesso de estímulos visuais.

À entrada, um amplo roupeiro em L, partilhado por ambas, assegura a organização e o aproveitamento do espaço.`,
      en: `The main challenge was to bring together the playful world of childhood and the calm of an adult space, creating a room that is harmonious, functional and able to adapt over time.

The wallpaper, rug and decorative objects can change with each stage of the child's life, while the bespoke furniture forms the permanent base of the project. The desk and the Montessori-inspired bed were designed to grow with her.

Dusty pink, light timber and beige create a bright, delicate atmosphere, with a soft palette that avoids both monotony and visual overload.

At the entrance, a large L-shaped wardrobe shared by both keeps everything organised and makes the most of the space.`,
    },
  },
  {
    slug: "atelier",
    name: { pt: "Projeto Bossa", en: "Bossa Project" },
    type: { pt: "Atelier · Projeto 3D", en: "Design studio · 3D design" },
    summary: {
      pt: "O projeto do nosso atelier foi pensado para optimizar o espaço e valorizar a marcenaria por medida, criando duas áreas distintas: uma zona de trabalho e copa, e outra destinada a amostras, lounge e receção de clientes.",
      en: "Our own studio, designed to make the most of the space and showcase bespoke joinery, with two distinct areas: a workspace and kitchenette, and a space for samples, a lounge and client reception.",
    },
    body: {
      pt: `Destaca-se a divisória ripada, que permite a passagem de luz e, ao mesmo tempo, separa os ambientes com leveza e fluidez. Merece igualmente relevo a mesa desenhada por medida em nogueira, com forma inspirada em asa-delta, que reforça a identidade singular do espaço.

A combinação de diferentes tons de madeira e apontamentos de cor cria uma atmosfera acolhedora, onde os clientes podem experienciar texturas e materiais de forma harmoniosa. A iluminação indireta em LED, conjugada com candeeiros de teto, parede e mesa, contribui para o conforto do ambiente e valoriza o conjunto do projeto.`,
      en: `A highlight is the slatted partition, which lets light through while separating the areas with lightness and flow. Equally notable is the bespoke walnut table, its shape inspired by a hang glider, which reinforces the space's distinctive identity.

Different timber tones and touches of colour create a welcoming atmosphere where clients can experience textures and materials in harmony. Indirect LED lighting, combined with ceiling, wall and table lamps, adds comfort and brings the whole project together.`,
    },
  },
  {
    slug: "casa-entre-serras",
    name: { pt: "Casa Entre Serras", en: "Casa Entre Serras" },
    type: { pt: "Sala de estar e jantar · Projeto 3D", en: "Living & dining room · 3D design" },
    summary: {
      pt: "O projeto de uma sala de estar e jantar pensado para valorizar a relação entre o espaço interior e a paisagem serrana do Alentejo.",
      en: "A living and dining room designed to celebrate the relationship between the interior and the Alentejo hills around it.",
    },
    body: {
      pt: `A proposta privilegia a entrada de luz natural, a amplitude dos espaços e uma organização fluida, permitindo que a paisagem se torne parte integrante do ambiente.

A combinação de materiais naturais, texturas suaves e tonalidades claras cria uma atmosfera serena e acolhedora, onde o conforto e a simplicidade se encontram. O resultado é um espaço contemporâneo que respeita a envolvente natural e convida à contemplação e ao convívio.`,
      en: `The design favours natural light, a sense of space and a fluid layout, so that the landscape becomes part of the room.

Natural materials, soft textures and light tones create a calm, welcoming atmosphere where comfort meets simplicity. The result is a contemporary space that respects its natural surroundings and invites both contemplation and time together.`,
    },
  },
  {
    slug: "loft-instinto",
    name: { pt: "Loft Instinto | Fontinha, Porto", en: "Loft Instinto | Fontinha, Porto" },
    type: { pt: "Remodelação de T0 · Projeto 3D", en: "Studio flat renovation · 3D design" },
    summary: {
      pt: "A remodelação deste T0, localizado na Baixa do Porto, foi pensada para um jovem casal e os seus gatos, procurando transformar uma área reduzida num espaço funcional, integrado e cheio de personalidade.",
      en: "This studio flat in downtown Porto was renovated for a young couple and their cats, turning a small area into a functional, open space full of personality.",
    },
    body: {
      pt: `A proposta privilegiou a demolição de paredes e a reorganização dos ambientes, permitindo incorporar na área útil um corredor anteriormente sobredimensionado e pouco aproveitado. Esta intervenção possibilitou a criação de uma zona de refeições, uma nova cozinha com mobiliário contemporâneo e uma área de trabalho partilhada pelo casal.

O projeto integra ainda soluções de mobiliário adaptadas aos gatos, conciliando as necessidades dos animais com a estética do espaço.

A combinação de cores, materiais e mobiliário desenhado à medida conferiu identidade ao apartamento, demonstrando como um espaço compacto pode acomodar diferentes funções sem comprometer o conforto e a fluidez.`,
      en: `The design removed walls and reorganised the spaces, bringing an oversized, underused corridor into the living area. This made room for a dining area, a new kitchen with contemporary units and a workspace shared by the couple.

The project also includes furniture designed for the cats, balancing their needs with the look of the home.

Colour, materials and bespoke furniture give the flat its identity, showing how a compact space can take on several functions without losing comfort or flow.`,
    },
  },
  {
    slug: "casa-dos-arcos",
    name: { pt: "Casa dos Arcos | Paranhos", en: "Casa dos Arcos | Paranhos" },
    type: { pt: "Remodelação de moradia · Projeto 3D", en: "House renovation · 3D design" },
    summary: {
      pt: "A remodelação desta moradia centenária, em Paranhos, teve como principal foco a reorganização e valorização da zona social, integrando a cozinha, a sala de estar e jantar e a casa de banho.",
      en: "The renovation of this century-old house in Paranhos focused on reorganising and enhancing the living areas: the kitchen, the living and dining room, and the bathroom.",
    },
    body: {
      pt: `A abertura da cozinha através de um arco estabelece uma ligação entre os ambientes, respeitando a linguagem arquitetónica original da moradia, reforçada pela introdução de rosetas decorativas no teto. A criação de uma nova janela amplia a entrada de luz natural, enquanto a reorganização do espaço permite integrar uma zona de refeições junto ao balcão da cozinha.

A paleta de beges e azuis foi escolhida para criar uma atmosfera serena e acolhedora, estabelecendo uma relação cromática com a fachada original da moradia.

A casa de banho, integralmente remodelada, apresenta uma linguagem mais contemporânea, combinando materiais, texturas e soluções funcionais que privilegiam o conforto.

O resultado é uma intervenção que concilia a identidade histórica da moradia com as necessidades da vida contemporânea, preservando o seu carácter e valorizando os espaços do quotidiano.`,
      en: `Opening the kitchen through an arch connects the spaces while respecting the house's original architecture, further enhanced by decorative ceiling roses. A new window brings in more natural light, and the reorganised layout makes room for a dining area by the kitchen counter.

A palette of beiges and blues creates a calm, welcoming atmosphere and echoes the colours of the original façade.

The bathroom, fully renovated, takes a more contemporary approach, combining materials, textures and practical solutions designed for comfort.

The result brings together the house's historic identity and the needs of modern life, preserving its character and enhancing everyday spaces.`,
    },
  },
  {
    slug: "projeto-trindade",
    name: { pt: "Projeto Trindade | Ramalde", en: "Trindade Project | Ramalde" },
    type: { pt: "Quartos e estúdio · Projeto 3D", en: "Bedrooms & studio · 3D design" },
    summary: {
      pt: "A remodelação da zona privada desta moradia teve como objetivo valorizar três espaços com funções distintas: o quarto de casal, o quarto de hóspedes com área de estudo e o estúdio doméstico.",
      en: "The renovation of this house's private area set out to enhance three spaces with different roles: the master bedroom, a guest room with a study area, and a home studio.",
    },
    body: {
      pt: `Cada ambiente foi pensado de acordo com as suas necessidades específicas, mantendo uma linguagem estética harmoniosa em toda a intervenção.

No quarto de casal, a combinação de nogueira, bege e azul cria uma atmosfera serena e relaxante, privilegiando o conforto e o descanso.

No quarto de hóspedes, o mobiliário desenhado à medida permite tirar partido da configuração alongada do espaço, criando duas zonas distintas e bem organizadas: uma destinada ao descanso e outra ao estudo e trabalho.

Já no estúdio, a intervenção procurou otimizar a área disponível, proporcionando maior conforto, organização e funcionalidade.

O resultado é uma zona privada onde cada divisão assume a sua própria identidade, sem comprometer a coerência do conjunto.`,
      en: `Each room was designed around its own needs, while keeping a consistent look throughout.

In the master bedroom, walnut, beige and blue create a calm, relaxing atmosphere focused on comfort and rest.

In the guest room, bespoke furniture makes the most of the long, narrow layout, creating two distinct, well-organised zones: one for sleeping and one for study and work.

In the studio, the aim was to make the most of the available area, adding comfort, organisation and function.

The result is a private area where each room has its own identity without losing the coherence of the whole.`,
    },
  },
  {
    slug: "projeto-oliva",
    name: { pt: "Projeto Oliva | Remodelação Bistrot", en: "Oliva Project | Bistro Renovation" },
    type: { pt: "Café · Remodelação e decoração", en: "Café · Renovation & interiors" },
    summary: {
      pt: "O projeto de remodelação e decoração deste café teve como foco a valorização da zona de atendimento e da sala de refeições, criando um ambiente contemporâneo, acolhedor e com uma identidade própria.",
      en: "The renovation and interior design of this café focused on the counter and the dining room, creating a contemporary, welcoming space with its own identity.",
    },
    body: {
      pt: `A combinação de tons terrosos e verdes estabelece uma ligação com os materiais naturais, destacando-se a utilização da palhinha, que introduz textura e leveza ao espaço. O teto em cimento queimado e o pavimento em granilite acrescentam um carácter contemporâneo, equilibrando a rusticidade dos materiais com uma linguagem mais sofisticada.

O resultado é um espaço harmonioso e convidativo, onde a diversidade de texturas e materiais contribui para uma atmosfera descontraída, sem perder a elegância.`,
      en: `Earthy tones and greens connect the space to natural materials, with rattan cane adding texture and lightness. A polished concrete ceiling and terrazzo floor bring a contemporary edge, balancing the rustic materials with a more refined feel.

The result is a harmonious, inviting space where a variety of textures and materials creates a relaxed atmosphere without losing elegance.`,
    },
  },
  {
    slug: "ninho-de-vovo",
    name: { pt: "Ninho de Vovó | Maya & Maite", en: "Ninho de Vovó | Maya & Maite" },
    type: { pt: "Quarto infantil · Projeto 3D", en: "Children's bedroom · 3D design" },
    summary: {
      pt: "Pensado como um presente de uma avó para as suas duas netas, este quarto foi concebido para acolher as meninas durante as suas estadias em casa da avó, criando um espaço de descanso, estudo e brincadeira.",
      en: "A gift from a grandmother to her two granddaughters, this bedroom was designed for the girls' stays at her home: a place to rest, study and play.",
    },
    body: {
      pt: `O principal desafio foi otimizar a área disponível através de soluções de mobiliário desenhado à medida. A disposição das camas em L permitiu libertar a zona central do quarto, criando uma área de brincar que não seria possível com uma organização convencional.

As camas integram espaços de arrumação em baú para os brinquedos e uma cabeceira envolvente em U, que proporciona maior conforto e uma sensação de aconchego.

O projeto contempla ainda um roupeiro partilhado e uma zona de estudo para os trabalhos de casa, conciliando as diferentes atividades das crianças num espaço funcional e organizado.

O resultado é um quarto pensado à medida das duas irmãs, onde cada elemento procura equilibrar conforto, funcionalidade e espaço para brincar.`,
      en: `The main challenge was to make the most of the space with bespoke furniture. Placing the beds in an L shape frees up the centre of the room, creating a play area that a conventional layout would not allow.

The beds include chest-style storage for toys and a wraparound U-shaped headboard for extra comfort and a cosy feel.

The project also includes a shared wardrobe and a study corner for homework, bringing the children's different activities together in a practical, organised space.

The result is a bedroom made to measure for the two sisters, where every element balances comfort, function and room to play.`,
    },
  },
  {
    slug: "lavandaria",
    name: { pt: "Lavandaria Céu | Gulpilhares", en: "Lavandaria Céu | Gulpilhares" },
    type: { pt: "Lavandaria · Projeto 3D", en: "Laundry room · 3D design" },
    summary: {
      pt: "Integrado num conjunto de intervenções previstas para uma moradia em Gulpilhares, este projeto de interiores teve como ponto de partida a remodelação da lavandaria, com o objetivo de otimizar o espaço e melhorar a sua funcionalidade.",
      en: "Part of a wider set of works planned for a house in Gulpilhares, this interior project began with the laundry room, with the aim of making better use of the space and improving how it works.",
    },
    body: {
      pt: `A pedido dos clientes, optou-se por fugir aos tradicionais armários em tons claros, escolhendo o azul como elemento principal. A combinação com os detalhes em nogueira e o pavimento em ardósia cria um contraste equilibrado, conferindo personalidade e uma linguagem contemporânea a um espaço habitualmente associado apenas à funcionalidade.

O desenho do mobiliário e a organização interior dos armários foram desenvolvidos em conjunto com os clientes, considerando as suas rotinas, necessidades de arrumação e equipamentos existentes.

O resultado é uma lavandaria funcional e cuidadosamente planeada, onde a escolha dos materiais e das cores transforma um espaço de serviço num ambiente com identidade própria.`,
      en: `At the clients' request, we moved away from the usual light-coloured cabinets and chose blue as the main element. Walnut details and a slate floor create a balanced contrast, giving personality and a contemporary feel to a space usually seen as purely practical.

The furniture design and the internal layout of the cabinets were developed together with the clients, around their routines, storage needs and existing appliances.

The result is a practical, carefully planned laundry room, where the choice of materials and colours turns a service area into a space with its own identity.`,
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
