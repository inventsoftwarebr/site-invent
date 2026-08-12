/**
 * Logos de clientes.
 *
 * ⚠️ DÍVIDA TÉCNICA CONHECIDA: as imagens ainda são servidas pelo WordPress
 * legado (`inventsoftware.com.br/wp-content/`). O site depende de um host que
 * não controlamos — no dia em que o WP sair do ar, a home quebra.
 *
 * Correção: rodar `pnpm fetch:logos` (baixa tudo para `public/clients/`),
 * trocar `src` para os caminhos locais e remover o `remotePatterns` do
 * `next.config.ts`. O script não pôde ser executado no ambiente de
 * desenvolvimento remoto porque o proxy de rede bloqueia o domínio.
 *
 * ⚠️ Confirmar com o jurídico/marketing quais marcas têm autorização de uso.
 */

export type Client = {
  name: string;
  src: string;
};

const WP = "https://inventsoftware.com.br/wp-content/uploads/2024/02";

export const clients: Client[] = [
  { name: "Ambev", src: `${WP}/Ambev-Invent-Software.webp` },
  { name: "Deloitte", src: `${WP}/Deloitte-Invent-Software.webp` },
  { name: "McDonald's", src: `${WP}/McDonalds-Invent-Software.webp` },
  { name: "Hotmart", src: `${WP}/Hotmart-Invent-Software.webp` },
  { name: "Granado", src: `${WP}/Granado-Invent-Software.webp` },
  { name: "H.Stern", src: `${WP}/HStern-Invent-Software.webp` },
  { name: "KFC", src: `${WP}/KFC-Invent-Software.webp` },
  { name: "Gerdau Graphene", src: `${WP}/Gerdau-Graphene-Invent-Software.webp` },
  { name: "Fogo de Chão", src: `${WP}/Fogo-de-Chao-Invent-Software.webp` },
  { name: "Botafogo", src: `${WP}/Botafogo-Invent-Software.webp` },
  { name: "Palmeiras", src: `${WP}/Palmeiras-Invent-Software.webp` },
  { name: "QuintoAndar", src: `${WP}/Quinto-Andar-Invent-Software.webp` },
  { name: "Caixa Seguradora", src: `${WP}/Caixa-Seguradora-Invent-Software.webp` },
  { name: "Syngenta", src: `${WP}/Syngenta-Invent-Software.webp` },
  { name: "Movile", src: `${WP}/Movile-Invent-Software.webp` },
  { name: "BeFly", src: `${WP}/BeFly-Invent-Software.webp` },
  { name: "Digio", src: `${WP}/Digio-Invent-Software.webp` },
  { name: "ConectCar", src: `${WP}/ConectCar-Invent-Software.webp` },
  { name: "Zé Delivery", src: `${WP}/Ze-delivery-Invent-Software.webp` },
];
