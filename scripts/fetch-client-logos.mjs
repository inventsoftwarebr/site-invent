/**
 * Baixa os logos de cliente do WordPress legado para `public/clients/`.
 *
 * Por que existe: hoje `content/clients.ts` aponta para
 * `inventsoftware.com.br/wp-content/`. O site depende de um host que não
 * controlamos — se o WordPress sair do ar, a home quebra.
 *
 * Uso:
 *   node scripts/fetch-client-logos.mjs
 *
 * Depois de rodar com sucesso:
 *   1. troque os `src` em `content/clients.ts` para `/clients/<arquivo>`;
 *   2. remova o bloco `images.remotePatterns` do `next.config.ts`.
 *
 * Este script não pôde ser executado no ambiente de desenvolvimento remoto
 * porque o proxy de rede bloqueia o domínio de origem. Rode localmente.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "clients");

const BASE = "https://inventsoftware.com.br/wp-content/uploads/2024/02";

const files = [
  "Ambev-Invent-Software.webp",
  "Deloitte-Invent-Software.webp",
  "McDonalds-Invent-Software.webp",
  "Hotmart-Invent-Software.webp",
  "Granado-Invent-Software.webp",
  "HStern-Invent-Software.webp",
  "KFC-Invent-Software.webp",
  "Gerdau-Graphene-Invent-Software.webp",
  "Fogo-de-Chao-Invent-Software.webp",
  "Botafogo-Invent-Software.webp",
  "Palmeiras-Invent-Software.webp",
  "Quinto-Andar-Invent-Software.webp",
  "Caixa-Seguradora-Invent-Software.webp",
  "Syngenta-Invent-Software.webp",
  "Movile-Invent-Software.webp",
  "BeFly-Invent-Software.webp",
  "Digio-Invent-Software.webp",
  "ConectCar-Invent-Software.webp",
  "Ze-delivery-Invent-Software.webp",
];

await mkdir(outDir, { recursive: true });

let ok = 0;
const failed = [];

for (const file of files) {
  const url = `${BASE}/${file}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      failed.push(`${file} (HTTP ${response.status})`);
      continue;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(join(outDir, file), buffer);
    ok += 1;
    console.warn(`✓ ${file}`);
  } catch (error) {
    failed.push(`${file} (${error instanceof Error ? error.message : "erro"})`);
  }
}

console.warn(`\n${ok}/${files.length} logos salvos em public/clients/`);

if (failed.length > 0) {
  console.error(`\nFalharam:\n${failed.map((f) => `  - ${f}`).join("\n")}`);
  process.exitCode = 1;
}
