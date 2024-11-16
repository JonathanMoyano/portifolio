import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.jpeg" />
        {/* Outras meta tags e links */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
