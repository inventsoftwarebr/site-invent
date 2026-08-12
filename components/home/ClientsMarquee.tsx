import Image from "next/image";
import { clients } from "@/content/clients";

export function ClientsMarquee() {
  // A faixa é duplicada e o keyframe translada -50%: quando a primeira cópia
  // sai, a segunda está exatamente na posição inicial e o loop não tem costura.
  const track = [...clients, ...clients];

  return (
    <section
      className="border-y border-white/8 bg-[#0d0d10] py-10"
      aria-label="Clientes atendidos pela Invent Software"
    >
      <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-white/35 uppercase">
        Empresas que operam com soluções Invent
      </p>

      <div className="marquee-wrapper relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-14 px-7">
          {track.map((client, i) => (
            <Image
              key={`${client.name}-${i}`}
              src={client.src}
              alt={i < clients.length ? client.name : ""}
              aria-hidden={i >= clients.length}
              width={132}
              height={44}
              sizes="132px"
              className="h-9 w-auto object-contain opacity-45 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
