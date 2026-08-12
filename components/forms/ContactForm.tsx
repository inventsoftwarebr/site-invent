"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { solutions } from "@/content/solutions";

const interests = [
  { value: "", label: "Selecione o assunto" },
  ...solutions.map((s) => ({ value: s.slug, label: s.name })),
  { value: "s4hana-cloud", label: "SAP S/4HANA Cloud" },
  { value: "reforma-tributaria", label: "Reforma Tributária" },
  { value: "parceria", label: "Quero ser um canal de revenda" },
  { value: "outro", label: "Outro assunto" },
];

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-gold-500 focus:outline-none";

const labelClass = "mb-2 block text-xs font-semibold tracking-wide text-white/60";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Não foi possível enviar agora. Tente novamente.";
        setError(message);
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError(
        "Não foi possível enviar agora. Tente novamente ou escreva para contato@inventsoftware.com.br.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-gold-500/30 bg-gold-500/[0.07] p-8"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-carbon">
          <Icon name="check" size={20} strokeWidth={2.6} />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-white">
            Recebemos a sua mensagem.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            Um especialista da Invent entra em contato em breve. Se for urgente,
            fale direto pelo telefone no rodapé desta página.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — escondido de humanos, visível para bots. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            className={fieldClass}
            placeholder="Como podemos te chamar"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail corporativo <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={160}
            className={fieldClass}
            placeholder="voce@empresa.com.br"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa <span className="text-red-400">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            maxLength={160}
            className={fieldClass}
            placeholder="Razão social ou nome fantasia"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className={fieldClass}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>
          Assunto
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          {interests.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.value === ""}
              className="bg-[#101014]"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Como podemos ajudar? <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className={`${fieldClass} resize-y`}
          placeholder="Conte qual processo está consumindo o tempo do seu time e qual ERP você usa hoje."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar mensagem"}
          {status !== "sending" && <Icon name="arrow-right" size={17} />}
        </Button>
        <p className="text-xs leading-relaxed text-white/40">
          Ao enviar, você concorda com o tratamento dos seus dados para que
          possamos responder ao seu contato.
        </p>
      </div>
    </form>
  );
}
