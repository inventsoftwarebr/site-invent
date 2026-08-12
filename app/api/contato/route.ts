import { NextResponse } from "next/server";

/**
 * Recebe o formulário de contato.
 *
 * Runtime Node (default) — não usar Edge aqui: o encaminhamento para o CRM
 * pode exigir bibliotecas que não rodam no Edge.
 *
 * ⚠️ INTEGRAÇÃO PENDENTE. Hoje a rota apenas valida o payload e responde. Para
 * os leads chegarem a algum lugar, conectar ao HubSpot (a Invent já usa) ou a
 * um provedor de e-mail transacional, lendo as credenciais de variáveis de
 * ambiente — nunca hardcoded. Ver README.
 */

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  interest: string;
  message: string;
  /** Campo isca: humanos não preenchem, bots sim. */
  website?: string;
};

const MAX_LENGTHS: Record<keyof Omit<ContactPayload, "website">, number> = {
  name: 120,
  email: 160,
  company: 160,
  phone: 40,
  interest: 60,
  message: 4000,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(source: Record<string, unknown>, key: string): string {
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  // Honeypot: se veio preenchido é bot. Responde 200 para não sinalizar.
  if (readString(body, "website")) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: readString(body, "name"),
    email: readString(body, "email"),
    company: readString(body, "company"),
    phone: readString(body, "phone"),
    interest: readString(body, "interest"),
    message: readString(body, "message"),
  };

  const errors: string[] = [];

  if (payload.name.length < 2) errors.push("Informe o seu nome.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
    errors.push("Informe um e-mail válido.");
  }
  if (payload.company.length < 2) errors.push("Informe a sua empresa.");
  if (payload.message.length < 10) {
    errors.push("Conte um pouco mais sobre a sua necessidade.");
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = payload[field as keyof typeof payload];
    if (value && value.length > max) {
      errors.push(`O campo ${field} excede o tamanho permitido.`);
    }
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  // TODO: encaminhar para o HubSpot / e-mail transacional.
  // Enquanto isso, a rota confirma o recebimento sem persistir nada — o que
  // significa que o lead NÃO chega a ninguém. Não colocar em produção assim.

  return NextResponse.json({ ok: true });
}
