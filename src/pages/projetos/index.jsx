import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ProjetosIndexPage = () => {
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
      status: 'Em Desenvolvimento',
      statusColor: 'bg-cyan-500/20 text-cyan-400',
      highlights: ['Design Responsivo', 'Animações Fluidas', 'Interface Moderna'],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center sm:mb-12"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
                Projetos
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
                Conheça os projetos que desenvolvi, combinando tecnologia e inovação
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link href={project.href}>
                    <Card className="group overflow-hidden border-cyan-500/20 bg-[#0A0F1E]/95 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
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

                      <div className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <Badge className={project.statusColor}>{project.status}</Badge>
                          <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-1 text-sm text-cyan-100/60">{project.description}</p>
                        </div>

                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-cyan-500/20 text-cyan-100/60"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-cyan-100/60"
                            >
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
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjetosIndexPage;
