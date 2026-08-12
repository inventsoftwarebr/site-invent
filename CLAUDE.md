# CLAUDE.md — site institucional da Invent Software

Regras e convenções deste repositório. Leia antes de editar.

## O que é

Site institucional da **Invent Software** — ISV parceira SAP, fundada em 2010,
que desenvolve soluções fiscais, bancárias, contratuais e de RH integradas ao
SAP® Business One e ao SAP S/4HANA Cloud.

Stack: **Next.js 16 App Router + TypeScript strict + Tailwind 4 (CSS-first) +
framer-motion**. Sem banco de dados, sem CMS: todo o conteúdo é estático.

> Não confundir com `inventsoftwarebr/universidade-invent`, que é a plataforma
> de cursos (Next 15 + Supabase + Drizzle). Os dois projetos compartilham a
> marca, mas não o stack nem as regras.

## Regras invioláveis

### 1. Conteúdo mora em `content/`, nunca no componente

Todo texto institucional, produto, número, segmento e link de navegação vive em
`content/*.ts`, tipado. Componente lê, não declara.

Motivo: quem edita a copy é o marketing, não quem edita JSX. Se um número
aparece em dois componentes, ele tem que vir do mesmo lugar.

### 2. Nunca inventar dado institucional

Número de cliente, resultado de case, depoimento, prêmio, endereço e telefone
só entram no site se vierem da Invent. Dado não confirmado vai para
`docs/dados-a-verificar.md` com marcação no código.

`content/cases.ts` está vazio de propósito — a página tem um estado alternativo
honesto. **Não preencher com exemplos plausíveis.**

### 3. Marca segue o manual, não o gosto do dia

Cores, tipografia e gradiente vêm do manual de marca 2021, espelhados em
`app/globals.css`:

- Dourado primário `#F7A600` — a cor dominante
- Vermelho accent `#D81E2D`
- Produtos: TaxPlus `#4527A0`, BankPlus `#F7A600`, ContractPlus `#D81E2D`,
  Intercompany `#F39200`, Payroll `#00A88F`
- Display **Barlow**, corpo **Inter**, mono **JetBrains Mono**

O logo usa os PNGs oficiais em `public/brand/` via `components/brand/InventLogo.tsx`.
**Nunca** remontar o wordmark com texto e um "V" desenhado — foi o que a base
anterior fazia.

Fonte canônica compartilhada: `universidade-invent/docs/design-system.md`. Se um
token mudar lá, muda aqui.

### 4. Tudo estático por padrão

Nenhuma página deve virar dinâmica sem motivo. Hoje só `app/api/contato/route.ts`
é server-side. Se uma página sair de `○ Static` no output do build, é regressão.

Não setar `export const runtime = "edge"` sem justificativa documentada no topo
do arquivo.

### 5. Animação nunca esconde conteúdo

`components/ui/Reveal.tsx` aplica `opacity: 0` inline. Duas proteções são
obrigatórias e já existem — não remover:

- `useReducedMotion` desliga o deslocamento para quem pediu menos movimento
- O bloco `<noscript>` em `app/layout.tsx` força `.reveal` visível sem JS

Qualquer animação nova segue a mesma regra: sem JS, o conteúdo aparece.

### 6. Links internos são internos

Link de solução, case ou página institucional aponta para rota deste site.
`target="_blank"` só para sistemas externos legítimos: `docs.inventsoftware.info`,
`atendimento.inventsoftware.info` e redes sociais.

A base anterior mandava o visitante para o WordPress antigo a cada clique.

### 7. Toda página nova precisa de SEO

Exportar `metadata` via `pageMeta()` de `lib/seo.ts` e adicionar a rota em
`app/sitemap.ts`. Páginas de produto levam `softwareJsonLd` + `faqJsonLd`;
todas levam `breadcrumbJsonLd`.

### 8. Acessibilidade não é fase 2

- Contraste mínimo AA. O gradiente de texto usa `--v-gradient-text`, não
  `--v-gradient`, exatamente por isso.
- Todo controle interativo alcançável por teclado, com `:focus-visible` visível.
- Imagem decorativa leva `alt=""` + `aria-hidden`; imagem informativa leva alt real.
- Hierarquia de heading sem pular nível.

### 9. Sem `any`, sem `console.log`

TypeScript strict com `noUncheckedIndexedAccess`. Use `unknown` + narrowing.
`console.warn` e `console.error` são permitidos; `console.log` não.

## Convenções

- Código em **inglês** (variável, função, tipo). Conteúdo de UI em **pt-BR**.
- Slugs de URL em pt-BR: `/solucoes/`, `/segmentos/`, `/reforma-tributaria`.
- Componentes: PascalCase. Utilitários: kebab-case.
- Server Component por padrão. `"use client"` só quando há estado, efeito ou
  evento — hoje: `SiteHeader`, `Hero`, `Stats`, `Reveal`, `ContactForm`.
- Comentário só onde o "porquê" não é óbvio no código.

## Estrutura

```
app/                 rotas (App Router)
  api/contato/       recebimento do formulário
  solucoes/[slug]/   páginas de produto geradas de content/solutions.ts
  sitemap.ts robots.ts opengraph-image.tsx
components/
  brand/             logo oficial e V-mark
  layout/            header e footer
  home/              seções da home
  shared/            blocos reaproveitados entre páginas internas
  ui/                primitivos (Button, Section, Container, Icon, Reveal)
  forms/             formulário de contato
content/             TODO o conteúdo, tipado
lib/                 seo.ts, utils.ts
docs/                dados-a-verificar.md
scripts/             fetch-client-logos.mjs
```

## Verificação antes de commitar

```bash
pnpm lint
pnpm typecheck
pnpm build
```

CI roda os três em todo push e PR. Não fazer merge com red.

## Pendências conhecidas

- **Formulário de contato não entrega o lead a ninguém.** `app/api/contato/route.ts`
  valida e responde 200, mas não encaminha. Conectar ao HubSpot ou a um
  provedor transacional antes de ir para produção.
- **Logos de cliente hotlinkados** do WordPress legado. Rodar `pnpm fetch:logos`,
  apontar para local e remover `remotePatterns` do `next.config.ts`.
- **Dados institucionais não confirmados.** Ver `docs/dados-a-verificar.md`.
- **Sem i18n.** A arquitetura permite, mas EN/ES ainda não existem.
- **Sem blog.** É o motor de SEO que falta; hoje toda a autoridade de conteúdo
  está no WordPress antigo.
