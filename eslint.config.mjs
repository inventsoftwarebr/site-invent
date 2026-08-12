import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Flat config nativo do eslint-config-next 16. Não usar FlatCompat aqui: o
 * shim do eslintrc entra em recursão ao serializar os plugins deste preset.
 */
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
