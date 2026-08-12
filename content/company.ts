/**
 * Dados institucionais da Invent Software — fonte única de verdade.
 *
 * ⚠️ CAMPOS MARCADOS COM `verificar: true` NÃO FORAM CONFIRMADOS PELA INVENT.
 * Vieram do repositório anterior ou de fontes públicas (Receita Federal,
 * imprensa, LinkedIn) e precisam de validação do marketing antes de ir ao ar.
 * Ver `docs/dados-a-verificar.md`.
 */

export const company = {
  name: "Invent Software",
  legalName: "Invent Software Ltda",
  cnpj: "12.945.116/0001-82",
  foundedYear: 2010,

  tagline: "Soluções complementares ao seu ERP",
  shortDescription:
    "A Invent Software desenvolve soluções fiscais, bancárias, contratuais e de RH integradas nativamente ao SAP® Business One e ao SAP S/4HANA Cloud.",

  /** Domínio de produção — usado em canonical, sitemap e Open Graph. */
  url: "https://inventsoftware.com.br",

  contact: {
    email: "contato@inventsoftware.com.br",
    commercialEmail: "comercial@inventsoftware.com.br",
    // ⚠️ verificar — herdado do repositório anterior, não confirmado
    phone: "+55 (31) 3656-2100",
    phoneHref: "+553136562100",
    whatsapp: "",
  },

  /**
   * ⚠️ verificar — o CNPJ está registrado em Goiânia/GO; o repositório
   * anterior exibia "Belo Horizonte, MG" no rodapé. Confirmar quais
   * endereços são oficiais e qual é a sede antes de publicar.
   */
  locations: [
    {
      label: "Goiânia, GO",
      role: "Sede",
      address: "",
      verificar: true,
    },
    {
      label: "Belo Horizonte, MG",
      role: "Escritório",
      address: "",
      verificar: true,
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/inventsoftware/",
    instagram: "https://www.instagram.com/inventsoftware/",
    youtube: "https://www.youtube.com/@inventsoftware",
  },

  /** Sistemas externos legítimos — não são "site velho", são produtos. */
  externalSystems: {
    docs: "https://docs.inventsoftware.info/",
    support: "https://atendimento.inventsoftware.info/",
    university: "https://universidade.inventsoftware.com.br",
  },

  institutionalVideoId: "JJ5FJxUsR48",
} as const;

/**
 * Números institucionais.
 * ⚠️ Todos herdados do repositório anterior e não confirmados. Fontes públicas
 * divergem: a imprensa fala em 27.000 empresas atendidas e ~3.500 clientes
 * SAP Business One. Alinhar com o marketing antes de publicar.
 */
export const stats = [
  {
    value: 15,
    suffix: "",
    plus: true,
    label: "Anos de mercado",
    detail: "Desde 2010 no ecossistema SAP",
  },
  {
    value: 200,
    suffix: "",
    plus: true,
    label: "Colaboradores",
    detail: "Times de produto, fiscal e suporte",
  },
  {
    value: 27,
    suffix: " mil",
    plus: true,
    label: "Empresas atendidas",
    detail: "CNPJs operando com soluções Invent",
  },
  {
    value: 26,
    suffix: "",
    plus: true,
    label: "Parceiros SAP®",
    detail: "Integradores que revendem nossas soluções",
  },
  {
    value: 140,
    suffix: "",
    plus: true,
    label: "Canais de revenda",
    detail: "Cobertura em toda a América Latina",
  },
] as const;

/** Reconhecimentos SAP — três anos consecutivos como melhor ISV da LATAM. */
export const awards = [
  {
    year: "2021",
    title: "Software Solution Partner of the Year",
    scope: "América Latina",
    detail: "SMB Innovation Summit — Orlando, Estados Unidos",
  },
  {
    year: "2022",
    title: "Partner of the Year",
    scope: "América Latina",
    detail: "SAP Summit for SME — Cidade do Panamá",
  },
  {
    year: "2023",
    title: "Best ISV of the Year",
    scope: "América Latina",
    detail: "Terceiro ano consecutivo de reconhecimento SAP",
  },
] as const;
