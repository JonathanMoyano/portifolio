import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Shield, Globe2, ArrowRight, ChevronRight, Star, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/components/layout/Layout';
import { translations } from '@/utils/constants';

const IndexPage = () => {
  const { currentLanguage } = useAccessibility();
  const t = translations[currentLanguage];
  const [activeCard, setActiveCard] = useState(null);

  const areas = [
    {
      id: 'tech',
      title: t.nav.tech,
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      stats: ['5+ anos', '50+ projetos', '10+ tecnologias'],
      description: 'Desenvolvimento Full Stack com foco em soluções inovadoras e escaláveis.',
      link: '/tecnologia',
      highlights: ['React & Node.js', 'Cloud & DevOps', 'Arquitetura de Software'],
    },
    {
      id: 'fireman',
      title: t.nav.fireman,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      stats: ['8+ anos', '100+ operações', '15+ certificações'],
      description:
        'Experiência em prevenção e combate a incêndio, salvamento e gestão de emergências.',
      link: '/bombeiro',
      highlights: ['Gestão de Emergências', 'Treinamento de Equipes', 'Prevenção de Acidentes'],
    },
    {
      id: 'commerce',
      title: t.nav.commerce,
      icon: Globe2,
      color: 'from-purple-500 to-pink-500',
      stats: ['6+ anos', '20+ países', '$10M+ operados'],
      description: 'Expertise em operações internacionais e negociações multiculturais.',
      link: '/comercio',
      highlights: ['Importação & Exportação', 'Logística Internacional', 'Negociações Globais'],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <div className="mb-16 space-y-6">
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold uppercase tracking-wider text-purple-400"
              >
                Portfólio Profissional
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              >
                <span className="block text-white">Transformando</span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Desafios em Soluções
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl"
            >
              Especialista em Análise de TI com foco em infraestrutura, segurança e otimização de
              sistemas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600"
                onClick={() => (window.location.href = '/historia')}
              >
                Conheça minha história
                <ScrollText className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = '/contato')}
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                Vamos conversar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Areas Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">Áreas de Atuação</h2>
            <p className="text-xl text-gray-400">
              Explore minhas diferentes áreas de expertise e descubra como posso agregar valor ao
              seu projeto
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card
                  className={`group relative h-full overflow-hidden border-neutral-700 bg-neutral-800 
                    ${activeCard === area.id ? 'ring-2 ring-purple-500' : ''}
                    transition-all duration-300 hover:border-purple-500`}
                  onMouseEnter={() => setActiveCard(area.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => (window.location.href = area.link)}
                >
                  <CardContent className="p-6">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                    />

                    {/* Icon */}
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-r ${area.color} mb-4 flex items-center justify-center`}
                    >
                      <area.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-2xl font-bold text-gray-100">{area.title}</h3>
                    <p className="mb-6 text-gray-400">{area.description}</p>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-3 gap-2">
                      {area.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <Star className="mx-auto mb-1 h-4 w-4 text-purple-400" />
                          <span className="text-sm text-gray-300">{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="mb-6 space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <ChevronRight className="mr-2 h-4 w-4 text-purple-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Call to Action */}
                    <div className="absolute bottom-6 right-6">
                      <Button
                        variant="ghost"
                        className="transition-colors group-hover:text-purple-400"
                      >
                        Explorar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-100 md:text-4xl">
              Pronto para Começar?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Vamos trabalhar juntos para transformar suas ideias em realidade
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => (window.location.href = '/contato')}
            >
              Iniciar Conversa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
