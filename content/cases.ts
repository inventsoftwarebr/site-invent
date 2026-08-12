/**
 * Cases de sucesso.
 *
 * ⚠️ ESTA LISTA ESTÁ VAZIA DE PROPÓSITO.
 *
 * Case de cliente é prova, e prova não se inventa: números de resultado, nomes
 * e depoimentos precisam vir da Invent, com autorização de uso da marca do
 * cliente. Preencher com dados plausíveis mas fictícios transformaria a página
 * mais importante do site numa peça de ficção.
 *
 * Enquanto estiver vazia, `/cases` renderiza um estado alternativo honesto
 * (referências sob demanda) em vez de cards falsos.
 *
 * Para publicar um case, adicione um objeto seguindo o tipo abaixo:
 *
 * {
 *   slug: "nome-do-cliente",
 *   client: "Nome do Cliente",
 *   segment: "Varejo",
 *   solutions: ["taxplus"],
 *   headline: "Frase de resultado, com número",
 *   challenge: "Qual era o problema antes.",
 *   solution: "O que foi implantado e como.",
 *   results: [{ metric: "72%", label: "menos tempo em apuração" }],
 *   quote: { text: "...", author: "Nome", role: "Cargo" },
 *   logo: "/clients/nome-do-cliente.webp",
 * }
 */

export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  solutions: string[];
  headline: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  quote?: { text: string; author: string; role: string };
  logo?: string;
};

export const cases: CaseStudy[] = [];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
