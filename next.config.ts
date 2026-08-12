import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    // Logos de cliente ainda são servidos pelo WordPress legado. O objetivo é
    // self-hostar tudo (`pnpm fetch:logos`) e remover este remotePattern —
    // enquanto o WP for a fonte, o site depende de um host que não controlamos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inventsoftware.com.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
