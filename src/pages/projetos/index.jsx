// src/pages/projetos/index.jsx
// CÓDIGO COMPLETO E CORRIGIDO

import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Dados dos projetos (ATUALIZADO com o projeto Proxy)
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

// Componente do Card de Projeto
const ProjectCard = ({ project }) => (
  <Link href={project.href} legacyBehavior>
    <a className="block h-full">
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0A0F1E]" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-4">
          <div className="mb-4">
            <Badge className={project.statusColor}>{project.status}</Badge>
            <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{project.description}</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="border-slate-700 text-slate-400">
                {tag}
              </Badge>
            ))}
          </div>

          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-end text-cyan-400">
            <span className="text-sm font-semibold">Ver Detalhes</span>
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </a>
  </Link>
);

// Componente Principal
const ProjetosIndexPage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        overline="Portfólio Profissional"
        title="Projetos"
        description="Conheça os projetos que desenvolvi, combinando tecnologia e inovação"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjetosIndexPage;
