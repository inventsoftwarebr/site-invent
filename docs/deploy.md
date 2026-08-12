# Deploy na Vercel

O site é 100% estático exceto `/api/contato`. Não precisa de banco, cache
externo nem serviço adicional — o build já passa e o projeto está pronto para
ser conectado.

Estratégia escolhida: **subdomínio de preview primeiro**
(ex.: `novo.inventsoftware.com.br`), validar, e só depois decidir sobre o
domínio principal.

---

## 1. Criar o projeto

Na conta Vercel da Invent:

1. **Add New → Project**
2. Importar `inventsoftwarebr/site-invent`
3. A Vercel detecta Next.js sozinha. **Não altere** Build Command, Output
   Directory nem Install Command.
4. Production Branch: `master`

## 2. Variáveis de ambiente

Esta é a parte que não pode ser pulada.

| Variável | Ambiente | Valor |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | `https://novo.inventsoftware.com.br` |
| `NEXT_PUBLIC_SITE_ENV` | Production | *(deixar em branco enquanto for preview)* |

### Por que `NEXT_PUBLIC_SITE_ENV` fica vazia

Enquanto essa variável **não** for exatamente `production`, o site sai com
`noindex` em todas as páginas e o `robots.txt` bloqueia todos os robôs.

Isso é proposital. Um subdomínio de homologação indexado pelo Google vira
conteúdo duplicado competindo com `inventsoftware.com.br` — e remover do índice
depois dá muito mais trabalho do que impedir a entrada.

**No dia da virada para o domínio oficial**, e só nesse dia:

1. Trocar `NEXT_PUBLIC_SITE_URL` para `https://inventsoftware.com.br`
2. Criar `NEXT_PUBLIC_SITE_ENV = production`
3. Redeploy

Antes disso, conferir em `https://<dominio>/robots.txt` que o bloqueio saiu e
que o `sitemap.xml` aponta para o domínio certo.

## 3. Domínio

Em **Settings → Domains**, adicionar `novo.inventsoftware.com.br` e criar no DNS
da Invent o registro que a Vercel indicar (normalmente um `CNAME` apontando
para `cname.vercel-dns.com`).

O certificado TLS é emitido automaticamente.

## 4. Conferir depois do primeiro deploy

- [ ] Home carrega e as animações de entrada disparam ao rolar
- [ ] Logos de cliente aparecem (hoje vêm do WordPress — ver pendência abaixo)
- [ ] `/robots.txt` retorna `Disallow: /` enquanto for preview
- [ ] `/sitemap.xml` lista as 16 rotas com o domínio correto
- [ ] `/opengraph-image` renderiza o cartão de compartilhamento
- [ ] Menu mobile abre, fecha e trava o scroll do fundo
- [ ] Formulário de contato envia e mostra a confirmação
      (**atenção: ele ainda não entrega o lead a ninguém**)

---

## Bloqueadores antes do domínio principal

Estes três itens não impedem o preview, mas **impedem a virada**:

1. **Formulário de contato não encaminha o lead.**
   `app/api/contato/route.ts` valida e responde 200 sem enviar para lugar
   nenhum. Precisa da integração com HubSpot ou provedor transacional. Publicar
   assim no domínio oficial significa perder contatos silenciosamente.

2. **Dados institucionais não confirmados.**
   Endereço, telefone e números. Ver [`dados-a-verificar.md`](./dados-a-verificar.md).

3. **Logos de cliente hotlinkados** do WordPress legado.
   Rodar `pnpm fetch:logos` localmente, apontar `content/clients.ts` para
   `/clients/...` e remover `images.remotePatterns` do `next.config.ts`.

## Se um dia substituir o WordPress no domínio principal

Vai ser preciso um mapa de redirects 301 das URLs antigas para as novas. O
WordPress detém hoje toda a autoridade de domínio acumulada — trocar sem
redirecionar joga fora anos de SEO. Peça esse mapeamento antes da virada.
