/**
 * Catálogo de soluções — fonte única de verdade para o hub `/solucoes`,
 * as páginas de produto, o menu do header e o rodapé.
 *
 * Descrições construídas a partir da documentação pública da Invent
 * (docs.inventsoftware.info e atendimento.inventsoftware.info).
 * ⚠️ Revisar funcionalidades com os times de produto antes de publicar.
 */

export type SolutionSlug =
  | "taxplus"
  | "bankplus"
  | "contractplus"
  | "intercompany"
  | "payroll";

export type Solution = {
  slug: SolutionSlug;
  name: string;
  category: string;
  /** Cor do produto conforme manual de marca. */
  color: string;
  /** Classe Tailwind equivalente, para evitar estilo inline. */
  colorClass: string;
  /** Logo oficial em `public/brand/`, quando existe. */
  logo: string | null;
  /** Uma frase — o que o produto resolve. */
  pitch: string;
  /** Parágrafo de abertura da página do produto. */
  intro: string;
  /** A dor que justifica o produto. */
  problem: string;
  features: { title: string; description: string }[];
  /** Resultados esperados — evitar números que não podemos comprovar. */
  outcomes: string[];
  /** Onde roda. */
  platforms: string[];
  faq: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "taxplus",
    name: "TaxPlus",
    category: "Gestão Fiscal",
    color: "#4527A0",
    colorClass: "bg-product-tax",
    logo: "/brand/taxplus-branca.png",
    pitch:
      "Apuração, obrigações acessórias e documentos fiscais eletrônicos, dentro do SAP.",
    intro:
      "O TaxPlus cumpre, consolida e transmite as obrigações fiscais de âmbito nacional de forma automatizada e segura, integrado nativamente ao SAP® Business One. É a espinha dorsal fiscal de milhares de empresas brasileiras que operam sobre SAP.",
    problem:
      "O Brasil tem uma das legislações tributárias mais complexas do mundo, e ela muda toda semana. Manter apuração, SPED e documentos eletrônicos em dia exige uma equipe inteira — ou um sistema que acompanhe a legislação por você.",
    features: [
      {
        title: "Apuração de impostos",
        description:
          "Cálculo automático de ICMS, IPI, PIS, COFINS, ISS e retenções na fonte, com regras por UF e por regime tributário.",
      },
      {
        title: "SPED e obrigações acessórias",
        description:
          "Geração dos arquivos magnéticos federais e estaduais, com validação prévia e trilha de auditoria.",
      },
      {
        title: "DF-e — documentos fiscais eletrônicos",
        description:
          "Importa e administra XMLs de NF-e, NFC-e e CT-e, faz o download direto dos órgãos competentes e gera automaticamente os documentos e cadastros de parceiro de negócios no SAP Business One.",
      },
      {
        title: "NF-e, NFC-e e CT-e",
        description:
          "Emissão, contingência, cancelamento e carta de correção sem sair do SAP, com monitoramento do status de autorização.",
      },
      {
        title: "NFS-e",
        description:
          "Emissão de nota fiscal de serviço com cobertura dos layouts municipais, incluindo a versão Cloud para S/4HANA Public Cloud.",
      },
      {
        title: "Regularidade fiscal de parceiros",
        description:
          "Consulta automática da situação cadastral e fiscal dos parceiros de negócios, evitando operações com fornecedores irregulares.",
      },
    ],
    outcomes: [
      "Fim da digitação manual de notas de entrada",
      "Obrigações acessórias entregues no prazo, sem retrabalho",
      "Redução do risco de autuação por erro de cálculo",
      "Legislação acompanhada e atualizada pela Invent",
    ],
    platforms: ["SAP Business One", "SAP S/4HANA Cloud Public Edition"],
    faq: [
      {
        question: "O TaxPlus substitui o módulo fiscal padrão do SAP?",
        answer:
          "O TaxPlus complementa o SAP Business One com a camada de localização brasileira que o padrão não cobre: apuração, SPED, documentos fiscais eletrônicos e obrigações acessórias.",
      },
      {
        question: "Quem mantém o produto atualizado quando a legislação muda?",
        answer:
          "A Invent. O acompanhamento legislativo e a entrega das atualizações fazem parte do contrato — é exatamente o trabalho que você deixa de fazer internamente.",
      },
      {
        question: "Funciona no S/4HANA Cloud?",
        answer:
          "Sim. Desde 2024 o portfólio foi estendido para o SAP S/4HANA Public Cloud, começando pelo TaxPlus NFS-e Cloud.",
      },
    ],
  },
  {
    slug: "bankplus",
    name: "BankPlus",
    category: "Gestão Bancária",
    color: "#F7A600",
    colorClass: "bg-product-bank",
    logo: "/brand/bankplus-branca.png",
    pitch:
      "Conciliação, cobrança e pagamentos automatizados, com o banco falando direto com o SAP.",
    intro:
      "O BankPlus centraliza e automatiza as operações bancárias da sua empresa dentro do SAP® Business One: conciliação, remessa e retorno, cobrança e pagamentos em um só lugar, sem planilha intermediária.",
    problem:
      "Times financeiros ainda exportam extrato, abrem planilha, conferem linha a linha e digitam de volta no ERP. É lento, é caro e é onde nascem os erros que ninguém encontra até o fechamento.",
    features: [
      {
        title: "Conciliação bancária automática",
        description:
          "Cruzamento automático entre extrato e lançamentos do SAP, com tratamento das exceções em fila de revisão.",
      },
      {
        title: "Cobrança e boletos",
        description:
          "Geração de remessa, leitura de retorno e baixa automática de títulos, com controle de instruções e ocorrências.",
      },
      {
        title: "Pagamentos e CNAB",
        description:
          "Envio de lotes de pagamento em layout CNAB, com aprovação e trilha de auditoria por operação.",
      },
      {
        title: "Comunicação com as instituições",
        description:
          "Transmissão e troca de arquivos com os bancos, eliminando o upload manual em cada portal.",
      },
      {
        title: "Controle e visibilidade",
        description:
          "Posição financeira consolidada, com rastreabilidade de cada movimento até o documento de origem.",
      },
    ],
    outcomes: [
      "Conciliação que leva minutos, não dias",
      "Menos erro humano em operação bancária",
      "Fechamento financeiro mais previsível",
      "Uma única fonte de verdade entre banco e ERP",
    ],
    platforms: ["SAP Business One"],
    faq: [
      {
        question: "Quais bancos são suportados?",
        answer:
          "O BankPlus trabalha com os layouts CNAB do mercado brasileiro. A lista de instituições homologadas é validada no diagnóstico inicial.",
      },
      {
        question: "Preciso trocar meu processo de cobrança?",
        answer:
          "Não. O BankPlus automatiza o processo que já existe — remessa, retorno e baixa — dentro do SAP.",
      },
    ],
  },
  {
    slug: "contractplus",
    name: "ContractPlus",
    category: "Gestão Contratual",
    color: "#D81E2D",
    colorClass: "bg-product-contract",
    logo: "/brand/contractplus-branca.png",
    pitch:
      "O ciclo de vida inteiro dos seus contratos, do aceite ao reajuste, dentro do ERP.",
    intro:
      "O ContractPlus dá gestão ao ciclo de vida completo dos contratos, com ferramentas que aceleram assinatura digital, histórico de movimentações e reajuste por índice — tudo conectado ao faturamento no SAP® Business One.",
    problem:
      "Contrato vive em pasta compartilhada, o reajuste é lembrado tarde demais, e o faturamento recorrente é montado na mão todo mês. O prejuízo é silencioso: receita que não sobe quando deveria.",
    features: [
      {
        title: "Ciclo de vida do contrato",
        description:
          "Da minuta à renovação, com status, responsáveis e histórico completo de movimentações.",
      },
      {
        title: "Assinatura digital",
        description:
          "Rotinas aceleradas de assinatura eletrônica, com o documento assinado anexado ao contrato no SAP.",
      },
      {
        title: "Reajuste por índice",
        description:
          "Aplicação automática de IGP-M, IPCA e demais índices na data-base, sem depender de alguém lembrar.",
      },
      {
        title: "Faturamento recorrente",
        description:
          "Geração automática das faturas do período a partir das condições contratuais vigentes.",
      },
      {
        title: "Alertas e vencimentos",
        description:
          "Avisos de renovação, reajuste e término para que nenhuma data-chave passe despercebida.",
      },
    ],
    outcomes: [
      "Nenhum reajuste perdido por esquecimento",
      "Faturamento recorrente gerado sozinho",
      "Contratos auditáveis, com histórico rastreável",
      "Menos tempo do jurídico em tarefa operacional",
    ],
    platforms: ["SAP Business One"],
    faq: [
      {
        question: "Serve para contratos de receita e de despesa?",
        answer:
          "Sim. O ciclo de vida e os alertas valem para os dois lados; o faturamento recorrente se aplica aos contratos de receita.",
      },
    ],
  },
  {
    slug: "intercompany",
    name: "Intercompany",
    category: "Consolidação",
    color: "#F39200",
    colorClass: "bg-product-intercompany",
    logo: null,
    pitch:
      "Operações entre empresas do grupo sem lançamento manual dos dois lados.",
    intro:
      "O Intercompany replica automaticamente as transações entre as empresas do seu grupo dentro do SAP® Business One. O que uma empresa vende, a outra compra — com o documento espelho gerado na hora.",
    problem:
      "Em grupos com várias empresas, cada operação interna é lançada duas vezes, por duas pessoas, em dois bancos de dados. Quando divergem — e divergem — a conciliação vira arqueologia.",
    features: [
      {
        title: "Replicação automática de documentos",
        description:
          "Pedido, nota e lançamento contábil espelhados na empresa contraparte, sem digitação dupla.",
      },
      {
        title: "Plano de contas por empresa",
        description:
          "De-para entre planos de contas distintos, respeitando a estrutura contábil de cada CNPJ.",
      },
      {
        title: "Conciliação intercompany",
        description:
          "Confronto automático dos saldos entre as empresas do grupo, com destaque para as divergências.",
      },
      {
        title: "Consolidação para fechamento",
        description:
          "Visão consolidada do grupo, com as operações internas devidamente eliminadas.",
      },
    ],
    outcomes: [
      "Fim do lançamento em duplicidade",
      "Saldos intercompany que fecham no primeiro fechamento",
      "Consolidação do grupo sem planilha paralela",
    ],
    platforms: ["SAP Business One"],
    faq: [
      {
        question: "Funciona com empresas em bases de dados separadas?",
        answer:
          "Sim. A replicação atravessa bases distintas do SAP Business One dentro do mesmo grupo.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Invent Payroll",
    category: "RH e Folha",
    color: "#00A88F",
    colorClass: "bg-product-payroll",
    logo: null,
    pitch:
      "Folha de pagamento calculada automaticamente, integrada ao seu ERP.",
    intro:
      "O Invent Payroll automatiza os processos de departamento pessoal e reduz o tempo gasto com burocracia, calculando a folha automaticamente e conversando com o seu ERP por integrações inteligentes.",
    problem:
      "Folha é o processo com maior custo de erro da empresa: erra e você tem passivo trabalhista, atraso e gente insatisfeita. Ainda assim, é dos processos mais manuais que existem.",
    features: [
      {
        title: "Cálculo automático da folha",
        description:
          "Proventos, descontos, encargos e provisões calculados conforme a convenção coletiva aplicável.",
      },
      {
        title: "Integração contábil",
        description:
          "Lançamentos da folha refletidos automaticamente na contabilidade do ERP.",
      },
      {
        title: "Obrigações trabalhistas",
        description:
          "Suporte às rotinas periódicas do departamento pessoal, com geração dos arquivos exigidos.",
      },
      {
        title: "Autoatendimento",
        description:
          "Colaborador acessa holerite e informes sem abrir chamado no RH.",
      },
    ],
    outcomes: [
      "Menos horas de DP em conferência manual",
      "Folha e contabilidade sempre reconciliadas",
      "Redução do risco de passivo trabalhista",
    ],
    platforms: ["SAP Business One", "Integração com ERPs de mercado"],
    faq: [
      {
        question: "O Invent Payroll é um módulo do SAP?",
        answer:
          "É uma plataforma dedicada de folha que se integra ao seu ERP — não depende de estar dentro dele para funcionar.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
