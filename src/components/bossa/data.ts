/**
 * Studio Bossa — dados centralizados do site.
 * Textos e imagens alinhados ao manual de identidade visual.
 */

import { img } from "./imagePath";

// Caminho base para imagens do manual extraídas do PDF (prefixado com basePath)
const MI = img("/manual-images");

export const IMAGES = {
  // Ambientes / hero — combinação de imagens do manual + Pexels de estilo similar (tons terrosos, madeira, couro)
  hero: `${MI}/sala-verde-oliva.jpg`,
  heroAlt: `${MI}/showroom-madeira.jpg`,
  flatlay: `${MI}/flatlay-materiais.jpg`,
  folderLogo: `${MI}/folder-logo.jpg`,

  // Texturas e materiais (todas do manual)
  couroCognac: `${MI}/textura-couro-cognac.jpg`,
  couroDetalhe: `${MI}/textura-couro-detalhe.jpg`,
  linho: `${MI}/textura-linho.jpg`,
  linhoDobra: `${MI}/textura-linho-dobra.jpg`,
  madeiraAmostras: `${MI}/madeira-amostras.jpg`,
  madeiraVeios: `${MI}/madeira-veios.jpg`,
  oliveira: `${MI}/oliveira.jpg`,
  oliveira2: `${MI}/oliveira-2.jpg`,
  padraoCalcada: `${MI}/padrao-calcada.jpg`,
  padraoCalcada2: `${MI}/padrao-calcada-2.jpg`,

  // Objetos e ambientes
  salaVerdeOliva: `${MI}/sala-verde-oliva.jpg`,
  showroomMadeira: `${MI}/showroom-madeira.jpg`,
  cadeiraMadeiraCouro: `${MI}/cadeira-madeira-couro.jpg`,
  mulherPoltrona: `${MI}/mulher-poltrona.jpg`,
  sacolaPapelaria: `${MI}/sacola-papelaria.jpg`,
  logoStudioBossa: `${MI}/logo-studio-bossa.jpg`,

  // Imagens Pexels complementares (estilo equivalente — quiet luxury, tons terrosos)
  cozinha: "https://images.pexels.com/photos/6707631/pexels-photo-6707631.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cozinha2: "https://images.pexels.com/photos/6193943/pexels-photo-6193943.jpeg?auto=compress&cs=tinysrgb&w=1600",
  banheiro: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1600",
  banheiro2: "https://images.pexels.com/photos/6679736/pexels-photo-6679736.jpeg?auto=compress&cs=tinysrgb&w=1600",
  quarto: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1600",
  quarto2: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1600",
  sala2: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1600",
  escada: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1600",
  vazio: "https://images.pexels.com/photos/5724777/pexels-photo-5724777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  jantar: "https://images.pexels.com/photos/7437483/pexels-photo-7437483.jpeg?auto=compress&cs=tinysrgb&w=1600",
  closet: "https://images.pexels.com/photos/6438600/pexels-photo-6438600.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const SERVICES = [
  {
    id: "interiores",
    title: "Design de Interiores",
    tagline: "Ambientes que traduzem seu estilo",
    description:
      "Combinamos estética e funcionalidade para criar ambientes sob medida. Do mobiliário à paleta de cores, cada projeto reflete sua personalidade e a essência da vida que se quer viver no espaço.",
    image: IMAGES.salaVerdeOliva,
    features: [
      "Consultoria de estilo",
      "Mobiliário sob medida",
      "Iluminação cenográfica",
      "Curadoria de materiais nobres",
    ],
  },
  {
    id: "arquitetura",
    title: "Arquitetura & Obras",
    tagline: "Construção e ampliação responsável",
    description:
      "Executamos obras novas e ampliações com engenharia precisa, materiais certificados e controle rigoroso de qualidade em cada etapa. Marcenaria nobre, pedra natural e acabamento impecável.",
    image: IMAGES.showroomMadeira,
    features: [
      "Fundação e estrutura",
      "Marcenaria autorais",
      "Instalações completas",
      "Gestão completa da obra",
    ],
  },
  {
    id: "reformas",
    title: "Reformas Completas",
    tagline: "Renovação de ambientes",
    description:
      "Transformamos cozinhas, banheiros, quartos e áreas comuns com acabamento de alto padrão e prazos cumpridos. Demolição cuidada, hidráulica e elétrica, entrega das chaves impecável.",
    image: IMAGES.cozinha,
    features: [
      "Demolição e preparação",
      "Hidráulica e elétrica",
      "Acabamento premium",
      "Gestão transparente",
    ],
  },
  {
    id: "projetos-3d",
    title: "Projetos 3D",
    tagline: "Visualize antes de construir",
    description:
      "Criamos renderizações fotorrealistas em 3D para que você veja cada detalhe do resultado final antes do início da obra. Ajustes sem custos surpresa, decisões com segurança total.",
    image: IMAGES.banheiro,
    features: [
      "Modelagem volumétrica",
      "Render fotorrealista",
      "Tour virtual interativo",
      "Materiais e iluminação reais",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Briefing & Visita",
    description:
      "Entendemos suas necessidades, estilo e orçamento em uma visita técnica ao local. Conversamos sobre o modo como você vive e o que sonha para o espaço.",
  },
  {
    step: "02",
    title: "Projeto & Proposta",
    description:
      "Desenvolvemos o projeto 3D, cronograma e orçamento detalhado, transparente e sem surpresas. Cada material é escolhido a dedo — couro, madeira, pedra, linho.",
  },
  {
    step: "03",
    title: "Execução",
    description:
      "Nossa equipe executa cada etapa com materiais certificados e supervisão diária de qualidade. Marcenaria própria, parceiros selecionados, obra limpa e organizada.",
  },
  {
    step: "04",
    title: "Entrega & Pós-obra",
    description:
      "Entregamos o ambiente pronto para morar, com garantia e suporte pós-obra. O luxo de se sentir em casa — verdadeiramente.",
  },
];

export const PROJECTS = [
  {
    title: "Residência Jardins",
    type: "Design de Interiores",
    area: "180 m²",
    duration: "5 meses",
    image: IMAGES.salaVerdeOliva,
    description:
      "Reforma completa de apartamento de alto padrão com integração de salas e cozinha gourmet. Paleta terrosa, marcenaria em jacarandá e couro cognac.",
  },
  {
    title: "Cobertura Oceânica",
    type: "Design de Interiores",
    area: "320 m²",
    duration: "4 meses",
    image: IMAGES.showroomMadeira,
    description:
      "Projeto de design de interiores para cobertura com áreas integradas e vista panorâmica. Tecidos naturais, linho cru e iluminação cenográfica.",
  },
  {
    title: "Casa Pinheiros",
    type: "Arquitetura & Interiores",
    area: "350 m²",
    duration: "9 meses",
    image: IMAGES.cadeiraMadeiraCouro,
    description:
      "Construção de residência contemporânea com projeto 3D aprovado antes do início da obra. Pedra natural, madeira maciça e couro trançado.",
  },
  {
    title: "Cozinha Gourmet",
    type: "Reforma de Cozinha",
    area: "42 m²",
    duration: "8 semanas",
    image: IMAGES.cozinha,
    description:
      "Cozinha gourmet com ilha em mármore, cuba integrada e iluminação cenográfica. Acabamentos em metal escovado e madeira natural.",
  },
  {
    title: "Spa Privativo",
    type: "Reforma de Banheiro",
    area: "22 m²",
    duration: "6 semanas",
    image: IMAGES.banheiro,
    description:
      "Banheiro de luxo em mármore travertino com chuveiro futurista e acabamentos em metais escovados. Aconchego e tecnologia em equilíbrio.",
  },
  {
    title: "Loft Industrial",
    type: "Reforma & Design",
    area: "110 m²",
    duration: "4 meses",
    image: IMAGES.mulherPoltrona,
    description:
      "Conversão de galpão em loft industrial com mezanino e pé-direito duplo. Concreto aparente, couro envelhecido e madeira de demolição.",
  },
];

export const STATS = [
  { value: "180+", label: "Projetos entregues" },
  { value: "15", label: "Anos de experiência" },
  { value: "97%", label: "Clientes satisfeitos" },
  { value: "12", label: "Prêmios de design" },
];

export const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    role: "Apartamento — Vila Mariana",
    quote:
      "O Studio Bossa transformou meu apartamento além do que eu imaginava. O projeto 3D me deu segurança total e a obra foi entregue no prazo. Cada material escolhido tem história.",
    rating: 5,
  },
  {
    name: "Roberto e Helena Martins",
    role: "Casa — Alphaville",
    quote:
      "Profissionalismo do início ao fim. A equipe foi organizada, limpa e atenta a cada detalhe. Recomendamos de olhos fechados — voltamos a contratar para a casa de praia.",
    rating: 5,
  },
  {
    name: "Fernanda Lobo",
    role: "Cobertura — Jardins",
    quote:
      "O design de interiores superou todas as expectativas. Cada ambiente reflete exatamente o estilo que eu queria. A paleta terrosa criou uma atmosfera única. Sensacional.",
    rating: 5,
  },
];

export const FAQ = [
  {
    question: "Quanto tempo dura um projeto de design de interiores?",
    answer:
      "Depende do escopo: uma cozinha leva de 6 a 10 semanas, enquanto uma reforma completa de apartamento varia de 4 a 7 meses. Apresentamos um cronograma detalhado na proposta.",
  },
  {
    question: "Vocês oferecem garantia?",
    answer:
      "Sim. Todos os nossos serviços têm garantia de execução de 2 anos, além da garantia de fábrica dos materiais e equipamentos instalados.",
  },
  {
    question: "Como funciona o projeto 3D?",
    answer:
      "Após o briefing, criamos um modelo tridimensional fotorrealista do seu ambiente. Você pode navegar pelo espaço, ajustar materiais e aprovar tudo antes da obra começar.",
  },
  {
    question: "É possível reformar morando no local?",
    answer:
      "Na maioria dos casos sim, especialmente em reformas parciais. Organizamos o cronograma por etapas e isolamos as áreas de obra para minimizar o impacto no seu dia a dia.",
  },
  {
    question: "Vocês trabalham com marcenaria própria?",
    answer:
      "Sim. Contamos com parceiros selecionados de marcenaria fina, especializados em madeira maciça — jacarandá, freijó, carvalho — e acabamentos autorais sob medida.",
  },
];

export const PALETTE = [
  {
    name: "Jacarandá",
    hex: "#3E2723",
    rgb: "62, 39, 35",
    description:
      "Uma cor intensa e marcante que traz elegância, profundidade e o contraste necessário à nossa comunicação.",
    texture: IMAGES.madeiraAmostras,
  },
  {
    name: "Couro Cognac",
    hex: "#A65E2E",
    rgb: "166, 94, 46",
    description:
      "Um tom quente que traz acolhimento, aconchego e uma sofisticação natural para a nossa marca.",
    texture: IMAGES.couroCognac,
  },
  {
    name: "Verde Oliva",
    hex: "#4C5F45",
    rgb: "76, 95, 69",
    description:
      "Traz a elegância e a presença da natureza, funcionando como ponto de equilíbrio entre os nossos tons.",
    texture: IMAGES.oliveira,
  },
  {
    name: "Linho Cru",
    hex: "#F5F2E8",
    rgb: "245, 242, 232",
    description:
      "Um tom neutro e suave que transmite simplicidade e serve de base para que todas as outras cores conversem entre si em harmonia.",
    texture: IMAGES.linho,
  },
];
