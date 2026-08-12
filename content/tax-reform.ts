/**
 * Conteúdo do hub de Reforma Tributária.
 *
 * ⚠️ REVISÃO OBRIGATÓRIA PELO TIME FISCAL DA INVENT ANTES DE PUBLICAR.
 * O cronograma abaixo segue a Emenda Constitucional 132/2023 e sua
 * regulamentação. É matéria em movimento: prazos, alíquotas e regras
 * específicas mudam com cada norma complementar. Publicar informação fiscal
 * desatualizada custa mais caro que não publicar nada.
 */

export const taxReformTimeline = [
  {
    period: "2026",
    label: "Ano-teste",
    description:
      "CBS e IBS entram em vigor com alíquotas de teste. Os valores são compensáveis, mas os documentos fiscais já precisam carregar os novos campos — é o ano em que o sistema tem de estar pronto.",
    status: "current" as const,
  },
  {
    period: "2027",
    label: "CBS em vigor",
    description:
      "A CBS substitui integralmente PIS e COFINS, que são extintos. O Imposto Seletivo passa a incidir sobre bens e serviços prejudiciais à saúde e ao meio ambiente.",
    status: "next" as const,
  },
  {
    period: "2029 a 2032",
    label: "Transição do IBS",
    description:
      "ICMS e ISS são reduzidos gradualmente enquanto o IBS sobe na mesma proporção. Durante quatro anos convivem dois sistemas tributários no mesmo documento fiscal.",
    status: "future" as const,
  },
  {
    period: "2033",
    label: "Modelo pleno",
    description:
      "ICMS e ISS deixam de existir. O modelo passa a ser exclusivamente IBS + CBS, não cumulativo e cobrado no destino.",
    status: "future" as const,
  },
];

export const taxReformChanges = [
  {
    title: "Cinco tributos viram dois",
    description:
      "PIS, COFINS, IPI, ICMS e ISS dão lugar a CBS (federal) e IBS (estadual e municipal), com o Imposto Seletivo em paralelo.",
  },
  {
    title: "Tributação no destino",
    description:
      "O imposto passa a ser devido onde o bem ou serviço é consumido, não onde é produzido. Muda o cálculo de praticamente toda operação interestadual.",
  },
  {
    title: "Não cumulatividade plena",
    description:
      "Crédito amplo sobre o que foi tributado na etapa anterior. Acaba boa parte da discussão sobre o que gera crédito e o que não gera.",
  },
  {
    title: "Split payment",
    description:
      "O recolhimento passa a ocorrer na liquidação financeira da operação. A conversa entre sistema fiscal e sistema bancário deixa de ser opcional.",
  },
  {
    title: "Documento fiscal reescrito",
    description:
      "Novos campos, novos códigos e novo cálculo em NF-e, NFC-e, NFS-e e CT-e. Todo layout precisa ser atualizado.",
  },
  {
    title: "Cadastro sob pressão",
    description:
      "Classificação de produto, natureza da operação e cadastro de parceiros passam a determinar o tratamento tributário com muito menos margem para erro.",
  },
];

export const taxReformChecklist = [
  "Mapear todas as operações que hoje dependem de ICMS-ST, crédito presumido ou benefício estadual",
  "Revisar a classificação fiscal de produtos e serviços do cadastro",
  "Levantar as integrações que consomem campos de imposto (e-commerce, WMS, faturamento)",
  "Validar se o seu add-on fiscal tem plano de atualização para IBS e CBS",
  "Preparar o financeiro para o impacto de caixa do split payment",
  "Definir quem, internamente, é dono do projeto de reforma tributária",
];
