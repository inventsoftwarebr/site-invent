/**
 * Segmentos atendidos. Cada um carrega a dor específica do setor — é o que
 * transforma uma lista de ícones em conteúdo que converte.
 *
 * ⚠️ Revisar as dores setoriais com o time comercial.
 */

import type { IconName } from "@/components/ui/Icon";

export type Segment = {
  slug: string;
  name: string;
  icon: IconName;
  pain: string;
};

export const segments: Segment[] = [
  {
    slug: "ti-telecom",
    name: "TI e Telecom",
    icon: "monitor",
    pain: "Faturamento recorrente e contratos de longo prazo com reajuste por índice.",
  },
  {
    slug: "hospitalar",
    name: "Hospitalar",
    icon: "heart",
    pain: "Regras fiscais específicas de medicamentos e materiais, com rastreabilidade por lote.",
  },
  {
    slug: "construcao",
    name: "Construção",
    icon: "hard-hat",
    pain: "Medições, retenções na fonte e apropriação de custo por obra.",
  },
  {
    slug: "incorporacao",
    name: "Incorporação",
    icon: "building",
    pain: "Contratos longos, correção monetária e reconhecimento de receita por evolução.",
  },
  {
    slug: "alimentos",
    name: "Alimentos e Bebidas",
    icon: "coffee",
    pain: "Substituição tributária, alto volume de notas e margem apertada.",
  },
  {
    slug: "imobiliario",
    name: "Imobiliário",
    icon: "home",
    pain: "Carteira de contratos de locação com reajuste anual e repasse.",
  },
  {
    slug: "servicos",
    name: "Serviços",
    icon: "settings",
    pain: "NFS-e em dezenas de layouts municipais diferentes e ISS retido.",
  },
  {
    slug: "varejo",
    name: "Varejo",
    icon: "shopping-cart",
    pain: "NFC-e em volume, contingência e conciliação de meios de pagamento.",
  },
  {
    slug: "logistica",
    name: "Logística",
    icon: "truck",
    pain: "CT-e, MDF-e e apuração de ICMS interestadual em múltiplas UFs.",
  },
  {
    slug: "agro",
    name: "Agronegócio",
    icon: "sprout",
    pain: "Regimes especiais, crédito presumido e sazonalidade de safra.",
  },
  {
    slug: "esporte",
    name: "Esporte",
    icon: "activity",
    pain: "Receitas de patrocínio, direitos e contratos com múltiplas contrapartidas.",
  },
  {
    slug: "entretenimento",
    name: "Entretenimento",
    icon: "film",
    pain: "Projetos com incentivo fiscal e prestação de contas detalhada.",
  },
];
