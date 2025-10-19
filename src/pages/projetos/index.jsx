// Adicione este objeto no array 'projects' do seu index.jsx
// Sugestão: coloque como primeiro item do array para destacar

{
  title: 'Sistema de Proxy Corporativo',
  description: 'Solução completa de proxy com controle granular de acesso à internet integrado ao Active Directory.',
  image: '/images/squid-proxy.png', // IMPORTANTE: Adicione a imagem do projeto
  tags: ['Squid 7.1', 'SquidGuard', 'Active Directory', 'Ubuntu Server', 'Kerberos'],
  href: '/projetos/proxy',
  status: 'Em Produção',
  statusColor: 'bg-green-500/20 text-green-400',
  highlights: [
    'Interceptação SSL/TLS',
    'Integração com AD via Kerberos',
    'Filtragem por Grupos de Usuários',
  ],
},

// ===== EXEMPLO COMPLETO DO ARRAY 'projects' ATUALIZADO =====

const projects = [
  {
    title: 'Sistema de Proxy Corporativo',
    description: 'Solução completa de proxy com controle granular de acesso à internet integrado ao Active Directory.',
    image: '/images/squid-proxy.png',
    tags: ['Squid 7.1', 'SquidGuard', 'Active Directory', 'Ubuntu Server', 'Kerberos'],
    href: '/projetos/proxy',
    status: 'Em Produção',
    statusColor: 'bg-green-500/20 text-green-400',
    highlights: [
      'Interceptação SSL/TLS',
      'Integração com AD via Kerberos',
      'Filtragem por Grupos de Usuários',
    ],
  },
  {
    title: 'Currículo Interativo',
    description: 'Single-page application com um design moderno e tecnológico para apresentar meu currículo de forma dinâmica.',
    image: '/images/cv-interativo.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    href: '/projetos/cv',
    status: 'Versão Atual',
    statusColor: 'bg-green-500/20 text-green-400',
    highlights: [
      'Layout "Bento Grid"',
      'Animações com Framer Motion',
      'Design Responsivo',
    ],
  },
  {
    title: 'TROK!',
    description: 'Plataforma de conexão entre profissionais e clientes para troca de serviços.',
    image: '/images/trokinho.png',
    tags: ['React Native', 'Next.js', 'Capacitor.js', 'Supabase'],
    href: '/projetos/trok',
    status: 'Premiado',
    statusColor: 'bg-orange-500/20 text-orange-400',
    highlights: [
      'Melhor Projeto - 24ª Feira de Negócios UNIBR',
      'App Mobile First',
      'Sistema de Avaliações',
    ],
  },
  {
    title: 'Portfólio Profissional (v1)',
    description: 'Versão anterior do website pessoal com design moderno e interativo.',
    image: '/images/portfolio.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    href: '/projetos/portfolio',
    status: 'Concluido',
    statusColor: 'bg-cyan-500/20 text-cyan-400',
    highlights: ['Design Responsivo', 'Animações Fluidas', 'Interface Moderna'],
  },
];
