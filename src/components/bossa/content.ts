/**
 * Studio Bossa — TODOS os textos do site, em duas línguas.
 *
 *   pt → Português de Portugal (versão principal, em /)
 *   en → Inglês britânico (em /en/)
 *
 * Para editar um texto, altere-o aqui nas duas línguas.
 * Os textos foram escritos a pensar nas pesquisas no Google e nas IAs:
 * remodelação, Porto, Vila Nova de Gaia, atelier de arquitetura, design de interiores.
 *
 * ⚠️ Depoimentos e projetos abaixo ainda são PROVISÓRIOS — substituir pelos reais
 *    antes de o site ir para o domínio definitivo.
 */

import { IMAGES } from "./data";

export type Locale = "pt" | "en";

const pt = {
  langName: "Português",
  nav: {
    links: [
      { href: "#servicos", label: "Serviços" },
      { href: "#processo", label: "Processo" },
      { href: "#projetos", label: "Projetos" },
      { href: "#sobre", label: "Sobre" },
      { href: "#depoimentos", label: "Testemunhos" },
      { href: "#faq", label: "Perguntas" },
    ],
    cta: "Pedir orçamento",
    menu: "Abrir menu",
    switchTo: "Mudar idioma",
  },

  hero: {
    // H1 da página (texto principal para o Google)
    h1: "Remodelação, arquitetura e design de interiores no Porto e Gaia",
    taglineA: "O luxo de se",
    taglineB: "sentir em casa",
    intro:
      "Atelier de arquitetura e design de interiores no Porto. Projetamos e executamos remodelações de apartamentos e moradias — do projeto 3D à entrega das chaves — com marcenaria nobre, couro, pedra natural e linho.",
    ctaPrimary: "Pedir orçamento",
    ctaSecondary: "Ver projetos",
    scroll: "Deslize",
    pause: "Pausar",
    play: "Reproduzir",
    pauseLabel: "Pausar vídeo de fundo",
    playLabel: "Reproduzir vídeo de fundo",
  },

  marquee: [
    "Remodelação de apartamentos",
    "Remodelação de moradias",
    "Design de interiores",
    "Atelier de arquitetura",
    "Projetos 3D fotorrealistas",
    "Cozinhas e casas de banho",
    "Marcenaria por medida",
    "Porto · Vila Nova de Gaia",
  ],

  stats: [
    { value: "180+", label: "Projetos entregues" },
    { value: "15", label: "Anos de experiência" },
    { value: "97%", label: "Clientes satisfeitos" },
    { value: "12", label: "Prémios de design" },
  ],

  services: {
    eyebrow: "Serviços",
    titleA: "Tudo para transformar",
    titleB: "a sua casa",
    intro:
      "Do primeiro esboço ao último acabamento, o nosso atelier acompanha cada etapa da remodelação da sua casa no Porto e em Vila Nova de Gaia. Marcenaria própria, parceiros selecionados e materiais nobres — couro, madeira, linho e pedra natural — traduzem o conceito de luxo discreto em cada detalhe.",
    items: [
      {
        id: "interiores",
        title: "Design de Interiores",
        tagline: "Espaços que traduzem o seu estilo",
        description:
          "Combinamos estética e funcionalidade para criar interiores por medida. Do mobiliário à paleta de cores, cada projeto reflete a sua personalidade e a forma como quer viver o espaço.",
        image: IMAGES.salaVerdeOliva,
        alt: "Sala de estar em verde-oliva com marcenaria em madeira — design de interiores no Porto",
        features: [
          "Consultoria de estilo",
          "Mobiliário por medida",
          "Iluminação cenográfica",
          "Curadoria de materiais nobres",
        ],
      },
      {
        id: "arquitetura",
        title: "Arquitetura e Obras",
        tagline: "Construção e ampliação com rigor",
        description:
          "Executamos construção nova e ampliações com engenharia precisa, materiais certificados e controlo rigoroso de qualidade em cada fase. Marcenaria nobre, pedra natural e acabamentos impecáveis.",
        image: IMAGES.showroomMadeira,
        alt: "Atelier com amostras de madeira e materiais — arquitetura e obras no Porto",
        features: [
          "Fundações e estrutura",
          "Marcenaria de autor",
          "Instalações completas",
          "Gestão integral da obra",
        ],
      },
      {
        id: "remodelacao",
        title: "Remodelação Chave na Mão",
        tagline: "Apartamentos e moradias renovados",
        description:
          "Remodelamos cozinhas, casas de banho, quartos e zonas comuns com acabamentos de alto padrão e prazos cumpridos. Demolição cuidada, canalização e eletricidade, e entrega das chaves impecável.",
        image: IMAGES.cozinha,
        alt: "Cozinha remodelada com acabamentos em madeira e pedra — remodelação de apartamentos no Porto e Gaia",
        features: [
          "Demolição e preparação",
          "Canalização e eletricidade",
          "Acabamentos premium",
          "Gestão transparente",
        ],
      },
      {
        id: "projetos-3d",
        title: "Projetos 3D",
        tagline: "Veja antes de construir",
        description:
          "Criamos imagens 3D fotorrealistas para que veja cada detalhe do resultado final antes de a obra começar. Ajustes sem custos surpresa e decisões com total segurança.",
        image: IMAGES.banheiro,
        alt: "Render 3D fotorrealista de casa de banho — projeto 3D de interiores",
        features: [
          "Modelação volumétrica",
          "Render fotorrealista",
          "Visita virtual interativa",
          "Materiais e iluminação reais",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Como trabalhamos",
    titleA: "Um processo",
    titleAccent: "transparente",
    titleB: "do início ao fim",
    intro:
      "Acreditamos em relações de confiança. Por isso, em cada etapa da remodelação acompanha decisões, prazos e investimento com total clareza — sem surpresas nem imprevistos.",
    steps: [
      {
        step: "01",
        title: "Briefing e Visita",
        description:
          "Numa visita técnica ao local, percebemos as suas necessidades, o seu estilo e o seu orçamento. Conversamos sobre a forma como vive e o que imagina para o espaço.",
      },
      {
        step: "02",
        title: "Projeto e Proposta",
        description:
          "Desenvolvemos o projeto 3D, o cronograma e um orçamento detalhado, transparente e sem surpresas. Cada material é escolhido a dedo — couro, madeira, pedra, linho.",
      },
      {
        step: "03",
        title: "Execução da Obra",
        description:
          "A nossa equipa executa cada etapa com materiais certificados e supervisão diária da qualidade. Marcenaria própria, parceiros selecionados, obra limpa e organizada.",
      },
      {
        step: "04",
        title: "Entrega e Pós-obra",
        description:
          "Entregamos a casa pronta a habitar, com garantia e acompanhamento pós-obra. O luxo de se sentir em casa — verdadeiramente.",
      },
    ],
  },

  projects: {
    eyebrow: "Portefólio",
    titleA: "Projetos que",
    titleB: "inspiram",
    intro:
      "Uma seleção de remodelações e projetos de interiores que entregámos aos nossos clientes. Cada projeto é único, tal como a história de quem o habita.",
    items: [
      {
        title: "Residência Jardins",
        type: "Design de Interiores",
        area: "180 m²",
        duration: "5 meses",
        image: IMAGES.salaVerdeOliva,
        description:
          "Remodelação integral de apartamento de alto padrão, com sala e cozinha em open space. Paleta terrosa, marcenaria em jacarandá e couro cognac.",
      },
      {
        title: "Penthouse Oceânica",
        type: "Design de Interiores",
        area: "320 m²",
        duration: "4 meses",
        image: IMAGES.showroomMadeira,
        description:
          "Projeto de interiores para penthouse com zonas integradas e vista panorâmica. Tecidos naturais, linho cru e iluminação cenográfica.",
      },
      {
        title: "Moradia Pinheiros",
        type: "Arquitetura e Interiores",
        area: "350 m²",
        duration: "9 meses",
        image: IMAGES.cadeiraMadeiraCouro,
        description:
          "Construção de moradia contemporânea com projeto 3D aprovado antes do início da obra. Pedra natural, madeira maciça e couro entrançado.",
      },
      {
        title: "Cozinha de Autor",
        type: "Remodelação de Cozinha",
        area: "42 m²",
        duration: "8 semanas",
        image: IMAGES.cozinha,
        description:
          "Cozinha com ilha em mármore, lava-loiça integrado e iluminação cenográfica. Acabamentos em metal escovado e madeira natural.",
      },
      {
        title: "Spa Privado",
        type: "Remodelação de Casa de Banho",
        area: "22 m²",
        duration: "6 semanas",
        image: IMAGES.banheiro,
        description:
          "Casa de banho em mármore travertino com duche de chuva e torneiras em metal escovado. Conforto e tecnologia em equilíbrio.",
      },
      {
        title: "Loft Industrial",
        type: "Remodelação e Design",
        area: "110 m²",
        duration: "4 meses",
        image: IMAGES.mulherPoltrona,
        description:
          "Conversão de armazém em loft com mezanino e pé-direito duplo. Betão aparente, couro envelhecido e madeira recuperada.",
      },
    ],
  },

  about: {
    eyebrow: "Sobre o atelier",
    titleA: "Equilíbrio entre",
    titleB: "solidez e leveza",
    imgAlt: "Materiais nobres do Studio Bossa: couro, madeira, linho e pedra",
    detailAlt: "Detalhe de couro cognac",
    badge: "anos de experiência",
    p1: "O Studio Bossa é um atelier de arquitetura e design de interiores no Porto que nasce do desejo de criar interiores que equilibrem a solidez da arquitetura com a leveza da vida quotidiana. O nosso posicionamento marca a transição de 15 anos de uma estética tradicional e de uma visão do clássico contemporâneo para as vivências reais de cada espaço e a fluidez de estilos.",
    p2: "Mais do que criar espaços visualmente marcantes, projetamos experiências para serem vividas: casas que traduzem a identidade de quem as habita, ambientes que despertam sensações e permanecem relevantes ao longo dos anos.",
    p3a: "Esta é a essência da Bossa:",
    p3accent: "naturalidade, sofisticação e singularidade",
    p3b: "no habitar. O nosso objetivo é dar vida a casas resilientes, que atravessam o tempo com graça e evoluem com as histórias e as fases de quem lá vive.",
    values: [
      {
        title: "Garantia de 2 anos",
        description:
          "Todas as obras com garantia de execução e acompanhamento atento após a entrega.",
      },
      {
        title: "Acabamentos premium",
        description:
          "Materiais nobres — couro, madeira maciça, pedra natural e linho — escolhidos a dedo.",
      },
      {
        title: "Sustentabilidade",
        description:
          "Práticas construtivas conscientes, com gestão de resíduos e materiais eficientes.",
      },
      {
        title: "Equipa especializada",
        description:
          "Arquitetos, engenheiros e encarregados de obra com mais de 15 anos de experiência.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testemunhos",
    titleA: "O que dizem",
    titleB: "os nossos clientes",
    items: [
      {
        name: "Mariana Costa",
        role: "Apartamento — Vila Mariana",
        quote:
          "O Studio Bossa transformou o meu apartamento para lá do que eu imaginava. O projeto 3D deu-me total segurança e a obra foi entregue dentro do prazo. Cada material escolhido tem uma história.",
        rating: 5,
      },
      {
        name: "Roberto e Helena Martins",
        role: "Moradia — Alphaville",
        quote:
          "Profissionalismo do início ao fim. A equipa foi organizada, limpa e atenta a cada pormenor. Recomendamos de olhos fechados — voltámos a contratá-los para a casa de praia.",
        rating: 5,
      },
      {
        name: "Fernanda Lobo",
        role: "Penthouse — Jardins",
        quote:
          "O design de interiores superou todas as expetativas. Cada divisão reflete exatamente o estilo que eu queria. A paleta terrosa criou uma atmosfera única.",
        rating: 5,
      },
    ],
  },

  cta: {
    titleA: "Pronto para remodelar",
    titleB: "a sua casa?",
    text: "Peça um orçamento sem compromisso. A primeira visita técnica é por nossa conta.",
    button: "Falar com um especialista",
    imgAlt: "Sala de estar sofisticada em tons terrosos",
  },

  faq: {
    eyebrow: "Perguntas frequentes",
    titleA: "Tire as suas",
    titleB: "dúvidas",
    items: [
      {
        question: "Em que zonas fazem remodelações?",
        answer:
          "O nosso atelier está sediado no Porto e fazemos remodelações e obras no Porto, em Vila Nova de Gaia e nos concelhos vizinhos do Grande Porto. Projetos de arquitetura, design de interiores e 3D podem ser desenvolvidos para qualquer zona de Portugal.",
      },
      {
        question: "Quanto tempo demora uma remodelação?",
        answer:
          "Depende do âmbito: uma cozinha demora entre 6 e 10 semanas, enquanto a remodelação integral de um apartamento varia entre 4 e 7 meses. Apresentamos um cronograma detalhado na proposta.",
      },
      {
        question: "As obras têm garantia?",
        answer:
          "Sim. Todos os nossos serviços têm 2 anos de garantia de execução, além da garantia de fábrica dos materiais e equipamentos instalados.",
      },
      {
        question: "Como funciona o projeto 3D?",
        answer:
          "Depois do briefing, criamos um modelo tridimensional fotorrealista da sua casa. Pode percorrer o espaço, ajustar materiais e aprovar tudo antes de a obra começar.",
      },
      {
        question: "É possível remodelar a casa enquanto vivo lá?",
        answer:
          "Na maioria dos casos, sim — sobretudo em remodelações parciais. Organizamos a obra por fases e isolamos as zonas de trabalho para reduzir o impacto no seu dia a dia.",
      },
      {
        question: "Trabalham com marcenaria própria?",
        answer:
          "Sim. Contamos com parceiros selecionados de marcenaria fina, especializados em madeira maciça — jacarandá, freijó, carvalho — e acabamentos de autor por medida.",
      },
    ],
  },

  contact: {
    eyebrow: "Vamos conversar",
    titleA: "Peça o seu",
    titleB: "orçamento",
    intro:
      "Fale-nos do seu projeto de remodelação, arquitetura ou interiores. Respondemos no prazo de 24 horas com uma proposta inicial personalizada — e agendamos a primeira visita técnica, sem compromisso.",
    phoneLabel: "Telefone",
    emailLabel: "E-mail",
    addressLabel: "Morada",
    address: "Rua das Flores, 100 — Porto, Portugal",
    hoursLabel: "Horário",
    hours: "Seg–Sex 9h–18h · Sáb 9h–13h",
    form: {
      name: "Nome completo",
      namePh: "O seu nome",
      email: "E-mail",
      emailPh: "o.seu@email.com",
      phone: "Telefone / WhatsApp",
      phonePh: "+351 912 345 678",
      service: "Tipo de serviço",
      select: "Selecione…",
      services: [
        "Remodelação de apartamento",
        "Remodelação de moradia",
        "Cozinha ou casa de banho",
        "Arquitetura e obras",
        "Design de interiores",
        "Projeto 3D",
        "Outro",
      ],
      message: "Mensagem",
      messagePh: "Fale-nos do seu projeto: localização, área, prazo pretendido, estilo…",
      submit: "Enviar pedido",
      error: "Não foi possível enviar agora. Tente novamente dentro de instantes.",
      sentTitle: "Pedido enviado!",
      sentText:
        "Recebemos o seu pedido. A nossa equipa entrará em contacto brevemente para agendar uma visita técnica.",
      again: "Enviar outra mensagem",
    },
  },

  footer: {
    about:
      "Studio Bossa — atelier de arquitetura, design de interiores e remodelação de casas no Porto e em Vila Nova de Gaia. Há 15 anos a transformar casas em experiências.",
    navTitle: "Navegação",
    nav: [
      { href: "#servicos", label: "Serviços" },
      { href: "#projetos", label: "Projetos" },
      { href: "#sobre", label: "Sobre" },
      { href: "#faq", label: "Perguntas" },
      { href: "#contato", label: "Contacto" },
    ],
    contactTitle: "Contacto",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Utilização",
  },

  whatsapp: {
    label: "Fale connosco no WhatsApp",
    aria: "Falar com o Studio Bossa pelo WhatsApp",
    message: "Olá, Studio Bossa! Vim pelo site e gostaria de saber mais sobre um projeto.",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  langName: "English",
  nav: {
    links: [
      { href: "#servicos", label: "Services" },
      { href: "#processo", label: "Process" },
      { href: "#projetos", label: "Projects" },
      { href: "#sobre", label: "About" },
      { href: "#depoimentos", label: "Testimonials" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Get a quote",
    menu: "Open menu",
    switchTo: "Change language",
  },

  hero: {
    h1: "Home renovation, architecture and interior design in Porto and Gaia",
    taglineA: "The luxury of",
    taglineB: "feeling at home",
    intro:
      "An architecture and interior design studio in Porto. We design and deliver renovations of flats and houses — from 3D visualisation to handing over the keys — with fine joinery, leather, natural stone and linen.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View projects",
    scroll: "Scroll",
    pause: "Pause",
    play: "Play",
    pauseLabel: "Pause background video",
    playLabel: "Play background video",
  },

  marquee: [
    "Flat renovation",
    "House renovation",
    "Interior design",
    "Architecture studio",
    "Photorealistic 3D design",
    "Kitchens and bathrooms",
    "Bespoke joinery",
    "Porto · Vila Nova de Gaia",
  ],

  stats: [
    { value: "180+", label: "Projects delivered" },
    { value: "15", label: "Years of experience" },
    { value: "97%", label: "Satisfied clients" },
    { value: "12", label: "Design awards" },
  ],

  services: {
    eyebrow: "Services",
    titleA: "Everything to transform",
    titleB: "your home",
    intro:
      "From the first sketch to the final finish, our studio guides every stage of your home renovation in Porto and Vila Nova de Gaia. In-house joinery, trusted partners and noble materials — leather, wood, linen and natural stone — bring quiet luxury to every detail.",
    items: [
      {
        id: "interiores",
        title: "Interior Design",
        tagline: "Spaces that reflect your style",
        description:
          "We combine aesthetics and function to create bespoke interiors. From furniture to colour palette, every project reflects your personality and the way you want to live.",
        image: IMAGES.salaVerdeOliva,
        alt: "Olive-green living room with timber joinery — interior design in Porto",
        features: [
          "Style consultancy",
          "Bespoke furniture",
          "Scenic lighting",
          "Curated noble materials",
        ],
      },
      {
        id: "arquitetura",
        title: "Architecture and Construction",
        tagline: "New builds and extensions, done right",
        description:
          "We deliver new builds and extensions with precise engineering, certified materials and rigorous quality control at every stage. Fine joinery, natural stone and impeccable finishes.",
        image: IMAGES.showroomMadeira,
        alt: "Studio with timber and material samples — architecture and construction in Porto",
        features: [
          "Foundations & structure",
          "Signature joinery",
          "Full installations",
          "End-to-end site management",
        ],
      },
      {
        id: "remodelacao",
        title: "Turnkey Renovation",
        tagline: "Flats and houses, renewed",
        description:
          "We renovate kitchens, bathrooms, bedrooms and living areas with high-end finishes, on schedule. Careful strip-out, plumbing and electrics, and a flawless handover.",
        image: IMAGES.cozinha,
        alt: "Renovated kitchen with timber and stone finishes — flat renovation in Porto and Gaia",
        features: [
          "Strip-out & preparation",
          "Plumbing & electrics",
          "Premium finishes",
          "Transparent management",
        ],
      },
      {
        id: "projetos-3d",
        title: "3D Design",
        tagline: "See it before it's built",
        description:
          "We create photorealistic 3D visuals so you can see every detail of the finished space before work begins. Changes without surprise costs, decisions with complete confidence.",
        image: IMAGES.banheiro,
        alt: "Photorealistic 3D render of a bathroom — 3D interior design",
        features: [
          "Massing models",
          "Photorealistic renders",
          "Interactive virtual tour",
          "True-to-life materials & light",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    titleA: "A process that's",
    titleAccent: "transparent",
    titleB: "from start to finish",
    intro:
      "We believe in relationships built on trust. At every stage of your renovation you follow decisions, timings and budget with complete clarity — no surprises.",
    steps: [
      {
        step: "01",
        title: "Brief and Site Visit",
        description:
          "On a site visit we get to know your needs, your style and your budget. We talk about how you live and what you imagine for the space.",
      },
      {
        step: "02",
        title: "Design and Proposal",
        description:
          "We produce the 3D design, a schedule and a detailed, transparent quote. Every material is hand-picked — leather, wood, stone, linen.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Our team delivers every stage with certified materials and daily quality supervision. In-house joinery, trusted partners, a clean and tidy site.",
      },
      {
        step: "04",
        title: "Handover and Aftercare",
        description:
          "We hand over a home ready to live in, with a guarantee and aftercare. The luxury of feeling at home — truly.",
      },
    ],
  },

  projects: {
    eyebrow: "Portfolio",
    titleA: "Projects that",
    titleB: "inspire",
    intro:
      "A selection of renovations and interior projects we have delivered for our clients. Every project is unique, just like the story of those who live there.",
    items: [
      {
        title: "Jardins Residence",
        type: "Interior Design",
        area: "180 m²",
        duration: "5 months",
        image: IMAGES.salaVerdeOliva,
        description:
          "Full renovation of a high-end flat with an open-plan living room and kitchen. Earthy palette, rosewood joinery and cognac leather.",
      },
      {
        title: "Ocean Penthouse",
        type: "Interior Design",
        area: "320 m²",
        duration: "4 months",
        image: IMAGES.showroomMadeira,
        description:
          "Interior design for a penthouse with open living spaces and panoramic views. Natural fabrics, raw linen and scenic lighting.",
      },
      {
        title: "Pinheiros House",
        type: "Architecture & Interiors",
        area: "350 m²",
        duration: "9 months",
        image: IMAGES.cadeiraMadeiraCouro,
        description:
          "A contemporary new-build house with the 3D design signed off before work began. Natural stone, solid timber and woven leather.",
      },
      {
        title: "Signature Kitchen",
        type: "Kitchen Renovation",
        area: "42 m²",
        duration: "8 weeks",
        image: IMAGES.cozinha,
        description:
          "A kitchen with a marble island, integrated sink and scenic lighting. Brushed-metal details and natural timber.",
      },
      {
        title: "Private Spa",
        type: "Bathroom Renovation",
        area: "22 m²",
        duration: "6 weeks",
        image: IMAGES.banheiro,
        description:
          "A travertine marble bathroom with a rainfall shower and brushed-metal fittings. Comfort and technology in balance.",
      },
      {
        title: "Industrial Loft",
        type: "Renovation & Design",
        area: "110 m²",
        duration: "4 months",
        image: IMAGES.mulherPoltrona,
        description:
          "A warehouse converted into a double-height loft with a mezzanine. Exposed concrete, aged leather and reclaimed timber.",
      },
    ],
  },

  about: {
    eyebrow: "About the studio",
    titleA: "A balance of",
    titleB: "solidity and lightness",
    imgAlt: "Studio Bossa's noble materials: leather, wood, linen and stone",
    detailAlt: "Cognac leather detail",
    badge: "years of experience",
    p1: "Studio Bossa is an architecture and interior design studio in Porto, born from the wish to create interiors that balance the solidity of architecture with the lightness of everyday life. It marks the shift from 15 years of traditional aesthetics and a classic-contemporary outlook towards the real life of each space and a fluid approach to style.",
    p2: "Beyond creating striking spaces, we design experiences to be lived in: homes that reflect the people who live there, rooms that awaken the senses and stay relevant for years to come.",
    p3a: "This is the essence of Bossa:",
    p3accent: "naturalness, sophistication and singularity",
    p3b: "in the way we live. Our aim is to create resilient homes that move gracefully through time and grow with the stories and stages of the people in them.",
    values: [
      {
        title: "2-year guarantee",
        description:
          "Every project is covered by a workmanship guarantee and attentive aftercare.",
      },
      {
        title: "Premium finishes",
        description:
          "Noble materials — leather, solid timber, natural stone and linen — hand-picked.",
      },
      {
        title: "Sustainability",
        description:
          "Responsible building practices, with waste management and efficient materials.",
      },
      {
        title: "Specialist team",
        description:
          "Architects, engineers and site managers with over 15 years of experience.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    titleA: "What our",
    titleB: "clients say",
    items: [
      {
        name: "Mariana Costa",
        role: "Flat — Vila Mariana",
        quote:
          "Studio Bossa transformed my flat beyond anything I had imagined. The 3D design gave me complete confidence and the work was finished on time. Every material has a story.",
        rating: 5,
      },
      {
        name: "Roberto & Helena Martins",
        role: "House — Alphaville",
        quote:
          "Professional from start to finish. The team was organised, tidy and attentive to every detail. We recommend them without hesitation — we hired them again for our beach house.",
        rating: 5,
      },
      {
        name: "Fernanda Lobo",
        role: "Penthouse — Jardins",
        quote:
          "The interior design exceeded every expectation. Each room reflects exactly the style I wanted. The earthy palette created a truly unique atmosphere.",
        rating: 5,
      },
    ],
  },

  cta: {
    titleA: "Ready to renovate",
    titleB: "your home?",
    text: "Request a no-obligation quote. Your first site visit is on us.",
    button: "Talk to a specialist",
    imgAlt: "Sophisticated living room in earthy tones",
  },

  faq: {
    eyebrow: "Frequently asked questions",
    titleA: "Questions,",
    titleB: "answered",
    items: [
      {
        question: "Which areas do you cover for renovations?",
        answer:
          "Our studio is based in Porto and we carry out renovations and building work in Porto, Vila Nova de Gaia and the neighbouring municipalities of Greater Porto. Architecture, interior design and 3D projects can be developed for anywhere in Portugal.",
      },
      {
        question: "How long does a renovation take?",
        answer:
          "It depends on the scope: a kitchen takes 6 to 10 weeks, while a full flat renovation takes between 4 and 7 months. We include a detailed schedule in our proposal.",
      },
      {
        question: "Is your work guaranteed?",
        answer:
          "Yes. All our work carries a 2-year workmanship guarantee, in addition to the manufacturer's warranty on installed materials and equipment.",
      },
      {
        question: "How does the 3D design work?",
        answer:
          "After the brief, we build a photorealistic 3D model of your home. You can walk through the space, adjust materials and sign everything off before work starts.",
      },
      {
        question: "Can I stay in my home during the renovation?",
        answer:
          "In most cases, yes — especially for partial renovations. We phase the work and seal off work areas to minimise the impact on your daily life.",
      },
      {
        question: "Do you have your own joinery?",
        answer:
          "Yes. We work with selected fine-joinery partners specialising in solid timber — rosewood, freijó, oak — and bespoke signature finishes.",
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    titleA: "Request your",
    titleB: "quote",
    intro:
      "Tell us about your renovation, architecture or interior design project. We reply within 24 hours with a tailored initial proposal — and arrange your first site visit, with no obligation.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    address: "Rua das Flores, 100 — Porto, Portugal",
    hoursLabel: "Opening hours",
    hours: "Mon–Fri 9am–6pm · Sat 9am–1pm",
    form: {
      name: "Full name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      phone: "Phone / WhatsApp",
      phonePh: "+44 7700 900123",
      service: "Type of service",
      select: "Select…",
      services: [
        "Flat renovation",
        "House renovation",
        "Kitchen or bathroom",
        "Architecture & construction",
        "Interior design",
        "3D design",
        "Other",
      ],
      message: "Message",
      messagePh: "Tell us about your project: location, size, timeline, style…",
      submit: "Send enquiry",
      error: "We couldn't send your message just now. Please try again shortly.",
      sentTitle: "Enquiry sent!",
      sentText:
        "We've received your enquiry. Our team will be in touch shortly to arrange a site visit.",
      again: "Send another message",
    },
  },

  footer: {
    about:
      "Studio Bossa — architecture, interior design and home renovation studio in Porto and Vila Nova de Gaia. Transforming homes into experiences for 15 years.",
    navTitle: "Navigation",
    nav: [
      { href: "#servicos", label: "Services" },
      { href: "#projetos", label: "Projects" },
      { href: "#sobre", label: "About" },
      { href: "#faq", label: "FAQ" },
      { href: "#contato", label: "Contact" },
    ],
    contactTitle: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },

  whatsapp: {
    label: "Chat with us on WhatsApp",
    aria: "Chat with Studio Bossa on WhatsApp",
    message: "Hello Studio Bossa! I found you through your website and would like to know more about a project.",
  },
};

export const DICT: Record<Locale, Dict> = { pt, en };
