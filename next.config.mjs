/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configurações básicas
  images: {
    domains: ['seu-site.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Remover otimizações experimentais que estão causando problemas
  experimental: {
    // removido optimizeCss e scrollRestoration
  },

  // Configurações para i18n
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
  },

  // Módulos que precisam ser transpilados
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-progress',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-tabs',
    '@radix-ui/react-toast',
    'lucide-react',
  ],
};

export default nextConfig;
