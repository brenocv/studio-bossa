import type { Locale } from "./content";

/**
 * ⚠️ DADOS DA EMPRESA — preencher antes de publicar.
 * Aparecem na Política de Privacidade e nos Termos de Utilização.
 */
export const COMPANY = {
  legalName: "Studio Bossa", // ⚠️ trocar pela denominação social, ex.: "Studio Bossa, Lda."
  nif: "", // ⚠️ preencher com o NIF (enquanto vazio, não aparece no site)
  address: "Rua Engenheiro Ferreira Dias, 161, Sala 204, Porto — Portugal",
  email: "hello@studiobossa.pt",
  phone: "+351 220 000 000",
};

export const LEGAL_UPDATED = { pt: "28 de setembro de 2026", en: "28 September 2026" };

export const PRIVACY_PATH: Record<Locale, string> = { pt: "/privacidade/", en: "/en/privacy/" };
export const TERMS_PATH: Record<Locale, string> = { pt: "/termos/", en: "/en/terms/" };

/** Um bloco de texto: parágrafo simples ou lista de pontos. */
export type Block = string | { list: string[] };
export type LegalSection = { title: string; body: Block[] };
export type LegalDoc = {
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
};

const C = COMPANY;
const nifPt = C.nif ? `, com o NIF ${C.nif}` : "";
const nifEn = C.nif ? `, tax number (NIF) ${C.nif}` : "";

/* ============================================================
   POLÍTICA DE PRIVACIDADE
   ============================================================ */
const privacyPt: LegalDoc = {
  eyebrow: "Informação legal",
  title: "Política de Privacidade",
  metaTitle: "Política de Privacidade | Studio Bossa",
  metaDescription:
    "Como a Studio Bossa recolhe, usa e protege os seus dados pessoais, em conformidade com o RGPD.",
  updatedLabel: "Última atualização",
  intro:
    "A Studio Bossa respeita a sua privacidade. Esta política explica que dados pessoais recolhemos quando visita o nosso site ou nos pede um orçamento, para que os usamos, durante quanto tempo os guardamos e quais são os seus direitos, nos termos do Regulamento Geral sobre a Proteção de Dados (Regulamento (UE) 2016/679 — RGPD) e da Lei n.º 58/2019.",
  sections: [
    {
      title: "1. Responsável pelo tratamento",
      body: [
        `O responsável pelo tratamento dos seus dados é a ${C.legalName}${nifPt}, com sede na ${C.address}.`,
        `Para qualquer questão sobre os seus dados pessoais, contacte-nos através de ${C.email} ou pelo telefone ${C.phone}.`,
      ],
    },
    {
      title: "2. Que dados recolhemos",
      body: [
        "Recolhemos apenas os dados de que precisamos para responder ao seu pedido e prestar os nossos serviços:",
        {
          list: [
            "Dados de contacto que nos envia pelo formulário, e-mail, telefone ou WhatsApp: nome, e-mail, telefone, tipo de serviço pretendido e a mensagem que escrever.",
            "Dados relativos ao imóvel e ao projeto: morada da obra, plantas, medidas, fotografias do espaço e preferências de estilo que partilhe connosco.",
            "Dados necessários à contratação e faturação: nome ou denominação, NIF e morada de faturação.",
            "Dados técnicos de navegação estritamente necessários ao funcionamento do site (por exemplo, o idioma escolhido).",
          ],
        },
        "Não recolhemos categorias especiais de dados (como dados de saúde) e pedimos-lhe que não as inclua nas suas mensagens.",
      ],
    },
    {
      title: "3. Para que usamos os dados e com que fundamento",
      body: [
        {
          list: [
            "Responder a pedidos de contacto e de orçamento, e agendar visitas técnicas — diligências pré-contratuais a seu pedido (art. 6.º, n.º 1, alínea b) do RGPD).",
            "Elaborar e executar o projeto, a obra ou o serviço contratado, incluindo a coordenação com fornecedores e equipas de obra — execução do contrato (art. 6.º, n.º 1, alínea b)).",
            "Emitir faturas e cumprir obrigações fiscais e contabilísticas — obrigação legal (art. 6.º, n.º 1, alínea c)).",
            "Enviar novidades, portefólio ou comunicações de marketing — apenas com o seu consentimento, que pode retirar a qualquer momento (art. 6.º, n.º 1, alínea a)).",
            "Defender direitos em caso de reclamação ou litígio — interesse legítimo (art. 6.º, n.º 1, alínea f)).",
          ],
        },
      ],
    },
    {
      title: "4. Durante quanto tempo guardamos os dados",
      body: [
        {
          list: [
            "Pedidos de orçamento que não resultem em contrato: até 12 meses após o último contacto.",
            "Dados de clientes e documentação do projeto: durante a vigência do contrato e do período de garantia, e depois pelo prazo necessário à defesa de direitos.",
            "Documentos de faturação: 10 anos, conforme exigido pela legislação fiscal.",
            "Dados usados para marketing: até retirar o seu consentimento.",
          ],
        },
        "Terminados estes prazos, os dados são apagados ou anonimizados.",
      ],
    },
    {
      title: "5. Com quem partilhamos os dados",
      body: [
        "Não vendemos nem cedemos os seus dados a terceiros para fins comerciais. Podemos partilhá-los apenas na medida do necessário com:",
        {
          list: [
            "Parceiros que executam partes do projeto ou da obra (empreiteiros, marceneiros, técnicos de especialidades, fornecedores de materiais e mobiliário).",
            "Prestadores de serviços que nos apoiam (alojamento do site, e-mail, contabilidade), vinculados por contrato ao dever de confidencialidade e ao cumprimento do RGPD.",
            "Entidades públicas, como a Câmara Municipal em processos de licenciamento ou a Autoridade Tributária, quando a lei o exija.",
          ],
        },
        "Se nos contactar pelo WhatsApp, a conversa é também tratada pela Meta Platforms, de acordo com a política de privacidade desse serviço, podendo envolver transferências de dados para fora do Espaço Económico Europeu com as garantias previstas no RGPD.",
      ],
    },
    {
      title: "6. Fotografias e imagens dos projetos",
      body: [
        "Os projetos apresentados no site e nas nossas redes sociais são publicados com autorização dos clientes e sem informação que os identifique (como nomes completos ou moradas). Se reconhecer o seu espaço e preferir que a imagem seja retirada, basta pedir-nos e fá-lo-emos com a maior brevidade.",
      ],
    },
    {
      title: "7. Os seus direitos",
      body: [
        "Nos termos do RGPD, tem o direito de:",
        {
          list: [
            "aceder aos seus dados e obter uma cópia;",
            "pedir a retificação de dados incorretos ou incompletos;",
            "pedir o apagamento dos dados, quando não houver obrigação legal de os conservar;",
            "limitar ou opor-se a determinado tratamento;",
            "receber os dados num formato estruturado (portabilidade);",
            "retirar o consentimento a qualquer momento, sem afetar o tratamento feito até então.",
          ],
        },
        `Para exercer estes direitos, escreva-nos para ${C.email}. Respondemos no prazo máximo de um mês.`,
        "Tem também o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.",
      ],
    },
    {
      title: "8. Cookies",
      body: [
        "O nosso site usa apenas os cookies e o armazenamento local estritamente necessários ao seu funcionamento. Não usamos cookies de publicidade nem de perfis. Se no futuro passarmos a usar ferramentas de estatística ou marketing, pediremos o seu consentimento e atualizaremos esta política.",
        "Os vídeos e ligações externas (WhatsApp, Instagram, Facebook, LinkedIn) só enviam dados a esses serviços quando clica neles.",
      ],
    },
    {
      title: "9. Segurança",
      body: [
        "Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda, acesso não autorizado ou divulgação indevida, e limitamos o acesso às pessoas que precisam deles para trabalhar no seu projeto.",
      ],
    },
    {
      title: "10. Alterações a esta política",
      body: [
        "Podemos atualizar esta política para refletir alterações legais ou nos nossos serviços. A data da última atualização aparece no topo da página.",
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  eyebrow: "Legal information",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | Studio Bossa",
  metaDescription: "How Studio Bossa collects, uses and protects your personal data, in line with the GDPR.",
  updatedLabel: "Last updated",
  intro:
    "Studio Bossa respects your privacy. This policy explains what personal data we collect when you visit our website or ask us for a quote, what we use it for, how long we keep it and what your rights are, under the General Data Protection Regulation (Regulation (EU) 2016/679 — GDPR) and Portuguese Law no. 58/2019.",
  sections: [
    {
      title: "1. Data controller",
      body: [
        `The controller of your data is ${C.legalName}${nifEn}, registered at ${C.address}.`,
        `For any question about your personal data, contact us at ${C.email} or on ${C.phone}.`,
      ],
    },
    {
      title: "2. What data we collect",
      body: [
        "We only collect the data we need to answer your request and provide our services:",
        {
          list: [
            "Contact details you send us via the form, email, phone or WhatsApp: name, email, phone number, type of service and your message.",
            "Information about the property and the project: site address, floor plans, measurements, photos of the space and style preferences you share with us.",
            "Details needed for contracting and invoicing: name or company name, tax number and billing address.",
            "Technical browsing data strictly necessary for the website to work (for example, your chosen language).",
          ],
        },
        "We do not collect special categories of data (such as health data) and ask you not to include them in your messages.",
      ],
    },
    {
      title: "3. Why we use your data and on what legal basis",
      body: [
        {
          list: [
            "To answer contact and quote requests and schedule site visits — pre-contractual steps at your request (Art. 6(1)(b) GDPR).",
            "To design and carry out the project, works or service you hire us for, including coordination with suppliers and site teams — performance of a contract (Art. 6(1)(b)).",
            "To issue invoices and meet tax and accounting obligations — legal obligation (Art. 6(1)(c)).",
            "To send news, portfolio updates or marketing — only with your consent, which you can withdraw at any time (Art. 6(1)(a)).",
            "To defend our rights in case of a complaint or dispute — legitimate interest (Art. 6(1)(f)).",
          ],
        },
      ],
    },
    {
      title: "4. How long we keep your data",
      body: [
        {
          list: [
            "Quote requests that do not lead to a contract: up to 12 months after the last contact.",
            "Client data and project documentation: for the duration of the contract and the guarantee period, and then for as long as needed to defend legal claims.",
            "Invoicing records: 10 years, as required by tax law.",
            "Data used for marketing: until you withdraw your consent.",
          ],
        },
        "After these periods, the data is deleted or anonymised.",
      ],
    },
    {
      title: "5. Who we share your data with",
      body: [
        "We never sell or hand over your data to third parties for commercial purposes. We may share it only as far as necessary with:",
        {
          list: [
            "Partners who carry out parts of the project or works (contractors, joiners, specialist engineers, material and furniture suppliers).",
            "Service providers who support us (website hosting, email, accounting), contractually bound to confidentiality and GDPR compliance.",
            "Public bodies, such as the City Council for planning permission or the Tax Authority, when required by law.",
          ],
        },
        "If you contact us via WhatsApp, the conversation is also processed by Meta Platforms under that service's privacy policy, which may involve transfers outside the European Economic Area with the safeguards provided for in the GDPR.",
      ],
    },
    {
      title: "6. Project photos and images",
      body: [
        "Projects shown on our website and social media are published with our clients' permission and without identifying information (such as full names or addresses). If you recognise your home and would like an image removed, just ask and we will do so promptly.",
      ],
    },
    {
      title: "7. Your rights",
      body: [
        "Under the GDPR, you have the right to:",
        {
          list: [
            "access your data and obtain a copy;",
            "have inaccurate or incomplete data corrected;",
            "have your data erased where there is no legal duty to keep it;",
            "restrict or object to certain processing;",
            "receive your data in a structured format (portability);",
            "withdraw consent at any time, without affecting processing carried out before.",
          ],
        },
        `To exercise these rights, email us at ${C.email}. We will reply within one month.`,
        "You also have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD) — www.cnpd.pt.",
      ],
    },
    {
      title: "8. Cookies",
      body: [
        "Our website only uses the cookies and local storage strictly necessary for it to work. We do not use advertising or profiling cookies. If we start using analytics or marketing tools in the future, we will ask for your consent and update this policy.",
        "Videos and external links (WhatsApp, Instagram, Facebook, LinkedIn) only send data to those services when you click them.",
      ],
    },
    {
      title: "9. Security",
      body: [
        "We take appropriate technical and organisational measures to protect your data against loss, unauthorised access or disclosure, and limit access to the people who need it to work on your project.",
      ],
    },
    {
      title: "10. Changes to this policy",
      body: [
        "We may update this policy to reflect legal changes or changes to our services. The date of the latest update is shown at the top of the page.",
      ],
    },
  ],
};

/* ============================================================
   TERMOS DE UTILIZAÇÃO
   ============================================================ */
const termsPt: LegalDoc = {
  eyebrow: "Informação legal",
  title: "Termos de Utilização",
  metaTitle: "Termos de Utilização | Studio Bossa",
  metaDescription:
    "Condições de utilização do site da Studio Bossa, direitos de autor dos projetos, orçamentos, garantias e resolução de litígios.",
  updatedLabel: "Última atualização",
  intro:
    "Estes termos regulam a utilização do site da Studio Bossa e resumem as condições gerais em que prestamos os nossos serviços de arquitetura, design de interiores, projeto 3D e remodelação. Ao usar o site, aceita estas condições.",
  sections: [
    {
      title: "1. Identificação",
      body: [
        `Este site pertence à ${C.legalName}${nifPt}, com sede na ${C.address}. Contacto: ${C.email} · ${C.phone}.`,
      ],
    },
    {
      title: "2. Informação no site",
      body: [
        "Os conteúdos do site têm caráter informativo e de apresentação do nosso trabalho. Não constituem uma proposta contratual.",
        "As imagens em projeto 3D (renders) e as fotografias são ilustrativas. O resultado final pode apresentar diferenças de cor, textura ou iluminação, e depende dos materiais, do espaço existente e das opções aprovadas pelo cliente.",
      ],
    },
    {
      title: "3. Orçamentos e contratação",
      body: [
        "Os pedidos feitos pelo site, e-mail ou WhatsApp são pedidos de informação e não criam qualquer obrigação para nenhuma das partes.",
        "Cada trabalho é objeto de uma proposta escrita, que define o âmbito dos serviços, o preço, os prazos, as fases e as condições de pagamento. O contrato só se considera celebrado após a aceitação expressa dessa proposta pelo cliente.",
        {
          list: [
            "Os valores das propostas são válidos pelo prazo nelas indicado e, salvo indicação em contrário, acrescem de IVA à taxa legal em vigor.",
            "Alterações ao projeto ou à obra pedidas depois da aprovação, trabalhos a mais e imprevistos detetados em obra (por exemplo, em estruturas ou canalizações existentes) são orçamentados à parte e só avançam após o seu acordo.",
            "Os prazos de execução contam a partir da aprovação do projeto e do pagamento da fase inicial, e podem ser ajustados por motivos alheios à Studio Bossa, como atrasos de fornecedores ou de licenciamento camarário.",
            "Quando a obra exigir licenciamento ou comunicação prévia à Câmara Municipal, a proposta indica quem trata do processo e dos respetivos custos.",
          ],
        },
      ],
    },
    {
      title: "4. Fases e pagamentos",
      body: [
        "Salvo acordo diferente na proposta, os serviços são pagos por fases, à medida que o trabalho avança:",
        {
          list: [
            "Adjudicação — pagamento inicial na aceitação da proposta, que dá início ao levantamento e ao estudo prévio.",
            "Projeto — pagamento na aprovação do projeto de interiores ou de arquitetura (plantas, projeto 3D e mapa de acabamentos).",
            "Obra — pagamentos faseados conforme o plano de trabalhos definido na proposta, normalmente ligados à encomenda de materiais e ao avanço da obra.",
            "Conclusão — pagamento final na entrega da obra, após vistoria conjunta com o cliente.",
          ],
        },
        "Os materiais, o mobiliário e os equipamentos encomendados por medida só são encomendados depois de aprovados e pagos na fase correspondente. Em caso de atraso no pagamento, a Studio Bossa pode suspender os trabalhos até à regularização, sendo os prazos ajustados em conformidade.",
      ],
    },
    {
      title: "5. Cancelamento e livre resolução",
      body: [
        "Se o contrato for celebrado à distância ou fora das nossas instalações, o cliente consumidor tem o direito de o resolver no prazo de 14 dias, sem necessidade de indicar motivo, nos termos do Decreto-Lei n.º 24/2014. Se pedir que os trabalhos comecem antes do fim desse prazo, pagará o valor proporcional ao que já tiver sido realizado.",
        "Depois desse prazo, qualquer das partes pode cancelar o contrato por escrito. Nesse caso, o cliente paga os serviços já prestados e os materiais já encomendados ou fabricados por medida, e a Studio Bossa entrega os elementos do projeto correspondentes às fases pagas.",
      ],
    },
    {
      title: "6. Direitos de autor e propriedade intelectual",
      body: [
        "Os projetos de arquitetura e de interiores, desenhos, renders 3D, fotografias, textos, logótipos e a marca Studio Bossa são protegidos pelo Código do Direito de Autor e dos Direitos Conexos e pertencem à Studio Bossa ou aos respetivos autores.",
        "Não é permitido copiar, reproduzir, alterar ou usar estes conteúdos para fins comerciais sem autorização escrita. Pode partilhar ligações para as páginas do site.",
        "O cliente pode usar o projeto que lhe é entregue para executar a obra no imóvel a que se destina. A reutilização do projeto noutros imóveis ou a sua divulgação pública depende de acordo prévio.",
      ],
    },
    {
      title: "7. Garantia",
      body: [
        "Os trabalhos executados pela Studio Bossa têm uma garantia de execução de 2 anos, além da garantia de fábrica dos materiais e equipamentos instalados. Esta garantia comercial acresce aos direitos que a lei confere aos consumidores e não os limita.",
        "A garantia não cobre danos resultantes de uso indevido, falta de manutenção, intervenções de terceiros ou desgaste normal dos materiais.",
      ],
    },
    {
      title: "8. Responsabilidade",
      body: [
        "Esforçamo-nos por manter o site atualizado e disponível, mas não garantimos que esteja isento de erros ou interrupções. A Studio Bossa não se responsabiliza por danos resultantes do uso do site nem pelo conteúdo de sites de terceiros para os quais existam ligações (como WhatsApp, Instagram, Facebook ou LinkedIn).",
      ],
    },
    {
      title: "9. Livro de Reclamações",
      body: [
        "Dispomos de Livro de Reclamações, em formato físico nas nossas instalações e em formato eletrónico em www.livroreclamacoes.pt.",
      ],
    },
    {
      title: "10. Resolução alternativa de litígios",
      body: [
        "Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de litígios. Para a área do Porto, a entidade competente é o CICAP — Centro de Informação de Consumo e Arbitragem do Porto (www.cicap.pt).",
        "Mais informações no Portal do Consumidor: www.consumidor.gov.pt.",
      ],
    },
    {
      title: "11. Lei aplicável e foro",
      body: [
        "Estes termos regem-se pela lei portuguesa. Para qualquer litígio é competente o foro da comarca do Porto, sem prejuízo das regras imperativas que protegem os consumidores.",
      ],
    },
    {
      title: "12. Alterações",
      body: [
        "Podemos atualizar estes termos a qualquer momento. As alterações aplicam-se a partir da sua publicação nesta página e não afetam contratos já celebrados.",
      ],
    },
  ],
};

const termsEn: LegalDoc = {
  eyebrow: "Legal information",
  title: "Terms of Use",
  metaTitle: "Terms of Use | Studio Bossa",
  metaDescription:
    "Terms of use of the Studio Bossa website, copyright in our projects, quotes, guarantees and dispute resolution.",
  updatedLabel: "Last updated",
  intro:
    "These terms govern the use of the Studio Bossa website and summarise the general conditions under which we provide our architecture, interior design, 3D design and renovation services. By using the website, you accept these terms.",
  sections: [
    {
      title: "1. Who we are",
      body: [
        `This website belongs to ${C.legalName}${nifEn}, registered at ${C.address}. Contact: ${C.email} · ${C.phone}.`,
      ],
    },
    {
      title: "2. Information on the website",
      body: [
        "The content of this website is for information and to showcase our work. It is not a contractual offer.",
        "3D images (renders) and photographs are illustrative. The finished result may differ in colour, texture or lighting, and depends on the materials, the existing space and the options approved by the client.",
      ],
    },
    {
      title: "3. Quotes and contracts",
      body: [
        "Requests made through the website, email or WhatsApp are requests for information and create no obligation for either party.",
        "Each job is covered by a written proposal setting out the scope of services, price, timeline, stages and payment terms. A contract is only formed once the client expressly accepts that proposal.",
        {
          list: [
            "Prices in proposals are valid for the period stated and, unless otherwise indicated, are subject to VAT at the applicable rate.",
            "Changes to the design or works requested after approval, additional works and unforeseen issues found on site (for example in existing structures or plumbing) are quoted separately and only go ahead with your agreement.",
            "Timelines start from design approval and payment of the first stage, and may be adjusted for reasons beyond Studio Bossa's control, such as supplier or planning-permission delays.",
            "Where the works require planning permission or prior notice to the City Council, the proposal states who handles the process and its costs.",
          ],
        },
      ],
    },
    {
      title: "4. Stages and payments",
      body: [
        "Unless otherwise agreed in the proposal, services are paid in stages as the work progresses:",
        {
          list: [
            "Award — an initial payment when the proposal is accepted, which starts the survey and preliminary study.",
            "Design — a payment when the interior or architectural design is approved (plans, 3D design and finishes schedule).",
            "Works — staged payments following the work plan set out in the proposal, usually linked to ordering materials and the progress of the works.",
            "Completion — a final payment on handover, after a joint inspection with the client.",
          ],
        },
        "Made-to-measure materials, furniture and equipment are only ordered once approved and paid for at the relevant stage. If a payment is late, Studio Bossa may suspend the works until it is settled, with timelines adjusted accordingly.",
      ],
    },
    {
      title: "5. Cancellation and right of withdrawal",
      body: [
        "If the contract is concluded at a distance or off our premises, a consumer client may withdraw from it within 14 days without giving any reason, under Portuguese Decree-Law no. 24/2014. If you ask for work to start before that period ends, you will pay a proportionate amount for what has already been done.",
        "After that period, either party may cancel the contract in writing. In that case, the client pays for services already provided and for materials already ordered or made to measure, and Studio Bossa hands over the design elements for the stages paid for.",
      ],
    },
    {
      title: "6. Copyright and intellectual property",
      body: [
        "Architecture and interior designs, drawings, 3D renders, photographs, texts, logos and the Studio Bossa brand are protected by Portuguese copyright law and belong to Studio Bossa or their respective authors.",
        "You may not copy, reproduce, alter or use this content for commercial purposes without written permission. You are welcome to share links to our pages.",
        "Clients may use the design delivered to them to carry out the works at the property it was made for. Reusing the design at other properties or publishing it requires prior agreement.",
      ],
    },
    {
      title: "7. Guarantee",
      body: [
        "Work carried out by Studio Bossa comes with a 2-year workmanship guarantee, in addition to the manufacturer's guarantee on installed materials and equipment. This commercial guarantee is in addition to, and does not limit, consumers' statutory rights.",
        "The guarantee does not cover damage resulting from misuse, lack of maintenance, work by third parties or normal wear of materials.",
      ],
    },
    {
      title: "8. Liability",
      body: [
        "We do our best to keep the website up to date and available, but cannot guarantee it is free of errors or interruptions. Studio Bossa is not liable for damage resulting from use of the website or for the content of third-party websites we link to (such as WhatsApp, Instagram, Facebook or LinkedIn).",
      ],
    },
    {
      title: "9. Complaints book",
      body: [
        "We keep a Complaints Book (Livro de Reclamações), in paper form at our premises and online at www.livroreclamacoes.pt.",
      ],
    },
    {
      title: "10. Alternative dispute resolution",
      body: [
        "In the event of a consumer dispute, consumers may turn to an alternative dispute resolution body. For the Porto area, this is CICAP — Centro de Informação de Consumo e Arbitragem do Porto (www.cicap.pt).",
        "More information on the Portuguese Consumer Portal: www.consumidor.gov.pt.",
      ],
    },
    {
      title: "11. Governing law and jurisdiction",
      body: [
        "These terms are governed by Portuguese law. The courts of the district of Porto have jurisdiction over any dispute, without prejudice to mandatory consumer-protection rules.",
      ],
    },
    {
      title: "12. Changes",
      body: [
        "We may update these terms at any time. Changes apply from the moment they are published on this page and do not affect contracts already in place.",
      ],
    },
  ],
};

export const LEGAL = {
  privacy: { pt: privacyPt, en: privacyEn },
  terms: { pt: termsPt, en: termsEn },
} as const;

export type LegalKind = keyof typeof LEGAL;
export const LEGAL_PATH: Record<LegalKind, Record<Locale, string>> = {
  privacy: PRIVACY_PATH,
  terms: TERMS_PATH,
};
