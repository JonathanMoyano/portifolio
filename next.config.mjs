/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configurações básicas de imagens
  images: {
    domains: [], // Adicione apenas os domínios que você realmente usa
    formats: ['image/avif', 'image/webp'],
  },

  // Módulos essenciais para transpilação
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-tabs',
    'lucide-react',
  ],
};

export default nextConfig;
