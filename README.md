# Site institucional — Invent Software

Site da [Invent Software](https://inventsoftware.com.br), ISV parceira SAP que
desenvolve soluções fiscais, bancárias, contratuais e de RH para SAP® Business
One e SAP S/4HANA Cloud.

**Next.js 16** (App Router) · **TypeScript** strict · **Tailwind 4** · **framer-motion**

## Começando

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Verificação (o CI roda os três):

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Como o site é organizado

Todo o conteúdo vive em `content/*.ts`, tipado — nenhum texto institucional é
declarado dentro de componente. Para mudar copy, número, produto ou item de
menu, edite o arquivo de conteúdo, não o JSX.

| Arquivo | O que contém |
|---|---|
| `content/company.ts` | Dados institucionais, números e prêmios |
| `content/solutions.ts` | Catálogo de produtos — gera as páginas `/solucoes/[slug]` |
| `content/segments.ts` | Segmentos atendidos e a dor de cada setor |
| `content/clients.ts` | Logos de cliente |
| `content/cases.ts` | Cases (vazio — ver abaixo) |
| `content/tax-reform.ts` | Conteúdo do hub de Reforma Tributária |
| `content/nav.ts` | Navegação do header e do rodapé |

Adicionar uma solução nova em `content/solutions.ts` cria automaticamente a
página, a entrada no menu, o card na home, o comparativo e a linha do sitemap.

## Variáveis de ambiente

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL canônica usada em metadata, sitemap e Open Graph. Sem ela, cai no domínio de `content/company.ts` |

O formulário de contato ainda não tem integração — quando for conectado ao
HubSpot ou a um provedor de e-mail, as credenciais entram aqui como variáveis
de ambiente **server-side** (sem prefixo `NEXT_PUBLIC_`).

## Pendências antes de ir para produção

Três bloqueadores conhecidos:

1. **O formulário de contato não entrega o lead a ninguém.**
   `app/api/contato/route.ts` valida o payload e responde 200, mas não
   encaminha para lugar nenhum. Precisa da integração com o CRM.

2. **Logos de cliente vêm do WordPress legado.**
   `content/clients.ts` aponta para `inventsoftware.com.br/wp-content/`. Rode
   `pnpm fetch:logos`, troque os caminhos para `/clients/...` e remova o bloco
   `images.remotePatterns` do `next.config.ts`.

3. **Dados institucionais não confirmados.**
   Endereço, telefone, números e nomenclatura de produtos vieram do repositório
   anterior e de fontes públicas. Ver **[`docs/dados-a-verificar.md`](docs/dados-a-verificar.md)**.

`content/cases.ts` está vazio de propósito: case de cliente exige número real e
autorização de uso de marca. Enquanto vazio, `/cases` mostra um estado
alternativo em vez de cards fictícios.

## Deploy

Otimizado para Vercel. Todas as páginas são estáticas exceto
`/api/contato`. Qualquer rota que deixe de aparecer como `○ Static` no output
do `pnpm build` é regressão de performance.

## Convenções

Ver [`CLAUDE.md`](CLAUDE.md) — regras de marca, acessibilidade, SEO e estrutura.
