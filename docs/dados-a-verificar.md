# Dados que precisam de validação antes do site ir ao ar

Este site foi construído a partir do repositório anterior e de fontes públicas.
Os itens abaixo **não foram confirmados pela Invent** e estão marcados no código.
Nenhum deles deve chegar a produção sem revisão do marketing.

## 1. Endereço e telefone — `content/company.ts`

| Campo | Valor atual | Origem | Problema |
|---|---|---|---|
| Sede | Goiânia, GO | Registro do CNPJ 12.945.116/0001-82 | O repositório anterior exibia apenas "Belo Horizonte, MG" |
| Escritório | Belo Horizonte, MG | Repositório anterior | Não sabemos se é escritório, sede ou dado desatualizado |
| Telefone | +55 (31) 3656-2100 | Repositório anterior | DDD de Belo Horizonte; não confirmado |
| E-mail | contato@inventsoftware.com.br | Repositório anterior | Não confirmado |

**Ação:** confirmar quais endereços são oficiais, qual é a sede e quais
telefones publicar. Endereço completo (rua, número, CEP) deve ser preenchido —
hoje o campo `address` está vazio e o JSON-LD sai sem `PostalAddress`.

## 2. Números institucionais — `content/company.ts`

| Número | Valor no site | Observação |
|---|---|---|
| Anos de mercado | 15+ | Fundação em 09/11/2010; correto para 2026, mas precisa ser atualizado anualmente |
| Colaboradores | 200+ | Herdado do repositório anterior |
| Empresas atendidas | 27 mil+ | Imprensa cita 27.000 empresas e ~3.500 clientes SAP B1. O repositório anterior dizia "24k CNPJs". São métricas diferentes — decidir qual publicar |
| Parceiros SAP | 26+ | Herdado, não confirmado |
| Canais de revenda | 140+ | Herdado, não confirmado |

**Ação:** validar cada número. Publicar métrica errada em página institucional
é risco de credibilidade e, dependendo do caso, de publicidade enganosa.

Considerar transformar "anos de mercado" em cálculo automático a partir de
`foundedYear` para não envelhecer sozinho.

## 3. Cases de clientes — `content/cases.ts`

A lista está **vazia de propósito**. Case é prova, e prova não se inventa:
números de resultado, depoimentos e nomes precisam vir da Invent com
autorização de uso de marca do cliente.

Enquanto vazia, `/cases` renderiza um estado alternativo honesto (oferta de
referência sob demanda) em vez de cards fictícios.

**Ação:** fornecer 3 a 5 cases com resultado numérico verificável e
autorização formal do cliente.

## 4. Logos de clientes — `content/clients.ts`

Duas pendências:

1. **Hospedagem.** As 19 imagens vêm de `inventsoftware.com.br/wp-content/`.
   Rodar `pnpm fetch:logos`, apontar para os arquivos locais e remover o
   `remotePatterns` do `next.config.ts`.
2. **Autorização.** Confirmar com o jurídico quais marcas têm autorização de
   uso. Exibir logo de cliente sem permissão é exposição desnecessária.

## 5. Nomenclatura de produtos — `content/solutions.ts`

A documentação pública da Invent tem **TaxOne** e **TaxPlus** convivendo
(`docs.inventsoftware.info` documenta TaxOne, TaxOne NFe, TaxOne NFS-e;
`atendimento.inventsoftware.info` documenta TaxPlus, TaxPlus DF-e).

O site usa **TaxPlus** por ser o nome das páginas comerciais atuais.

**Ação:** confirmar qual é a marca vigente e se TaxOne é legado, produto
distinto ou nome interno.

Confirmar também:
- **Intercompany** — nome comercial exato e se há logo oficial
- **Invent Payroll / Rhello** — o repositório anterior linkava para
  `rhello.com.br`, um domínio separado. Decidir se entra no site ou permanece
  como marca independente

## 6. Funcionalidades descritas — `content/solutions.ts`

As descrições de funcionalidade foram construídas a partir da documentação
pública. São plausíveis e conservadoras, mas **precisam da revisão dos times de
produto** — descrever um recurso que não existe cria expectativa que a
implantação vai frustrar.

## 7. Conteúdo de Reforma Tributária — `content/tax-reform.ts`

Cronograma baseado na EC 132/2023 e sua regulamentação. É matéria em evolução:
prazos, alíquotas e regras mudam a cada norma complementar.

**Ação:** revisão obrigatória pelo time fiscal antes de publicar, e definição de
quem fica responsável por manter a página atualizada. Uma página de autoridade
fiscal desatualizada faz mais mal do que não existir.

## 8. Domínios e destino do WordPress

Hoje existem `taxplus.inventsoftware.com.br` e `bankplus.inventsoftware.com.br`
como sites satélite, além do WordPress em `inventsoftware.com.br`.

**Ação:** definir se os satélites são consolidados neste site (com redirects
301 preservando o SEO acumulado) ou mantidos. Definir também o que acontece com
o WordPress e seu blog — hoje ele detém toda a autoridade de domínio.
