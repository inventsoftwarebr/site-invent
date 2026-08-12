import { solutions } from "./solutions";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  {
    label: "Soluções",
    href: "/solucoes",
    children: [
      ...solutions.map((s) => ({
        label: s.name,
        href: `/solucoes/${s.slug}`,
        description: s.pitch,
      })),
      {
        label: "SAP S/4HANA Cloud",
        href: "/solucoes/s4hana-cloud",
        description: "Nosso portfólio na nuvem pública da SAP.",
      },
    ],
  },
  {
    label: "Segmentos",
    href: "/segmentos",
  },
  {
    label: "Cases",
    href: "/cases",
  },
  {
    label: "Reforma Tributária",
    href: "/reforma-tributaria",
  },
  {
    label: "A Invent",
    href: "/sobre",
    children: [
      {
        label: "Sobre nós",
        href: "/sobre",
        description: "História, reconhecimentos e como trabalhamos.",
      },
      {
        label: "Parceiros",
        href: "/parceiros",
        description: "Programa de canais para integradores SAP.",
      },
      {
        label: "Carreiras",
        href: "/carreiras",
        description: "Trabalhe com quem resolve o fiscal brasileiro.",
      },
      {
        label: "Universidade Invent",
        href: "/universidade",
        description: "Formação oficial nas soluções Invent.",
      },
    ],
  },
];

export const footerNav = {
  solucoes: solutions.map((s) => ({
    label: s.name,
    href: `/solucoes/${s.slug}`,
  })),
  empresa: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Cases", href: "/cases" },
    { label: "Parceiros", href: "/parceiros" },
    { label: "Carreiras", href: "/carreiras" },
    { label: "Contato", href: "/contato" },
  ],
  recursos: [
    { label: "Reforma Tributária", href: "/reforma-tributaria" },
    { label: "Universidade Invent", href: "/universidade" },
    {
      label: "Documentação",
      href: "https://docs.inventsoftware.info/",
      external: true,
    },
    {
      label: "Central de atendimento",
      href: "https://atendimento.inventsoftware.info/",
      external: true,
    },
  ],
} as const;
