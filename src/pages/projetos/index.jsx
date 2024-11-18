import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Dados dos projetos
const projects = [
  {
    title: 'TROK!',
    description: 'Plataforma de conexão entre profissionais e clientes para troca de serviços',
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
    title: 'Portfólio Profissional',
    description: 'Website pessoal com design moderno e interativo para apresentação profissional',
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
  <Link href={project.href}>
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Imagem do Projeto */}
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1E]" />
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <Badge className={project.statusColor}>{project.status}</Badge>
          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-cyan-100/60">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="border-cyan-500/20 text-cyan-100/60">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-cyan-100/60">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
              {highlight}
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-4 flex items-center justify-end text-cyan-400">
          <span className="text-sm">Ver Detalhes</span>
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

// Parte 2 - Componente Principal

const ProjetosIndexPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl">
        <PageHeader
          overline="Portfólio Profissional"
          title="Projetos"
          description="Conheça os projetos que desenvolvi, combinando tecnologia e inovação"
        />

        {/* Grid de Projetos */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjetosIndexPage;
