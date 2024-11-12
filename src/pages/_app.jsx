// src/pages/_app.jsx
import React from "react";
import { AccessibilityProvider } from "@/components/layout/Layout";
import Layout from "@/components/layout/Layout";
import { ToastProvider } from "@/components/ui/toast";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AccessibilityProvider>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </AccessibilityProvider>
  );
}

export default MyApp;
