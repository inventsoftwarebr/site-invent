import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Cartão de compartilhamento gerado no build. Sem fontes remotas nem imagens
 * externas — só o que o runtime do Satori resolve sozinho.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 56,
              borderRadius: 999,
              background: "linear-gradient(180deg,#FFB000 0%,#F7A600 38%,#D81E2D 78%,#B81825 100%)",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Invent Software
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2.4,
              maxWidth: 940,
            }}
          >
            A complexidade fiscal brasileira, resolvida dentro do seu SAP.
          </span>
          <span
            style={{
              marginTop: 28,
              color: "#8b92a0",
              fontSize: 27,
              maxWidth: 820,
            }}
          >
            Gestão fiscal, bancária, contratual e de RH para SAP® Business One
            e S/4HANA Cloud.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: 999,
              background: "#F7A600",
            }}
          />
          <span style={{ color: "#F7A600", fontSize: 22, fontWeight: 600 }}>
            Tricampeã SAP Partner of the Year — América Latina
          </span>
        </div>
      </div>
    ),
    size,
  );
}
