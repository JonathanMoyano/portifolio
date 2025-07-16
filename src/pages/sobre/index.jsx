import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, User, History } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Dados das seções
const sections = [
  {
    title: 'Meu Perfil',
    description: 'Conheça mais sobre minha formação, experiências e competências profissionais.',
    icon: User,
    href: '/sobre/perfil',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Minha História',
    description:
      'Uma jornada de descobertas, desafios e realizações que moldaram minha trajetória.',
    icon: History,
    href: '/sobre/historia',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

// Dados da introdução
const introText = `Profissional apaixonado por tecnologia, com uma jornada única que combina 
                  experiências diversas e uma busca constante por conhecimento. Aqui você encontrará 
                  informações detalhadas sobre meu perfil profissional e a história que me trouxe 
                  até aqui.`;

// Componente da Introdução
const IntroductionCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-8 sm:mb-12"
  >
    <Card>
      <CardContent className="p-4 sm:p-6">
        <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">{introText}</p>
      </CardContent>
    </Card>
  </motion.div>
);

// Componente do Card de Seção
const SectionCard = ({ section }) => {
  const Icon = section.icon;

  return (
    <Link href={section.href} className="block">
      <Card
        className={cn(
          'group relative overflow-hidden p-6 sm:p-8',
          'transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10'
        )}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn('rounded-lg bg-gradient-to-r p-2 text-white', section.gradient)}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{section.title}</h3>
              </div>
            </div>
            <ChevronRight
              className={cn(
                'h-5 w-5 text-cyan-500',
                'transition-transform duration-300 group-hover:translate-x-1'
              )}
            />
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
            {section.description}
          </p>
        </div>
      </Card>
    </Link>
  );
};
// Componente Principal
const SobrePage = () => {
  return (
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <PageHeader
          overline="Portfólio Profissional"
          title="Sobre Mim"
          description="Explore minha trajetória profissional e conheça mais sobre minha história"
        />

        {/* Introdução */}
        <IntroductionCard />

        {/* Grid de Seções */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <SectionCard section={section} />
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
};

export default SobrePage;
