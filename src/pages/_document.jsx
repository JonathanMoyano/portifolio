// src/pages/_document.jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Você pode adicionar mais meta tags, links de fontes, etc. aqui */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
