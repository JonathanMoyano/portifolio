import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Shield, ArrowRight, ScrollText } from 'lucide-react';
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
      color: 'from-blue-500 to-blue-600',
      stats: ['2+ anos', '50+ projetos', '10+ certificações'],
      description:
        'Analista de TI especializado em infraestrutura, segurança e otimização de sistemas.',
      link: '/tecnologia',
      highlights: ['Cloud & Infraestrutura', 'Desenvolvimento Web', 'Gestão de Projetos em TI'],
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
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
        {/* Photo */}
        <div className="absolute left-1/2 top-8 z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[url('/jonathan.jpg')] bg-cover bg-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <div className="mb-16 space-y-6">
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold uppercase tracking-wider text-blue-400"
              >
                Portfólio Profissional
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              >
                <span className="block text-white">JONATHAN SOUZA MOYANO</span>
                <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Transformando em Soluções
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl"
            >
              Analista de TI especializado em infraestrutura, segurança e otimização de sistemas.
              Estudante de Análise e Desenvolvimento de Sistemas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800"
                onClick={() => (window.location.href = '/historia')}
              >
                Conheça minha história
                <ScrollText className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = '/contato')}
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                Vamos conversar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default IndexPage;
