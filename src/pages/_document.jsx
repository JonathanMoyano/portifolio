// src/pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className="dark"> {/* <-- MUDANÇA IMPORTANTE AQUI */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}