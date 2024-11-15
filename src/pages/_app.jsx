// src/pages/_app.jsx
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ToastProvider } from '@/components/ui/toast';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}

export default MyApp;
