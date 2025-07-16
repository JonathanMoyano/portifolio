// src/pages/_app.js

import Layout from '../components/layout/Layout'; // 1. Importa o seu layout principal e unificado
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Aqui, o <Layout> "abraça" TODOS os componentes de página
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;