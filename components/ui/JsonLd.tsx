/**
 * Injeta um bloco JSON-LD. O objeto é serializado no servidor e os caracteres
 * `<` são escapados para que uma string de conteúdo não consiga fechar a tag
 * script e injetar markup.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
