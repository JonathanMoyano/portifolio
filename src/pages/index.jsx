import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollText, ArrowRight, Briefcase, GraduationCap, Code2, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Dados do perfil
const profileData = {
  name: {
    first: 'JONATHAN SOUZA',
    last: 'MOYANO',
  },
  role: 'Analista de TI especializado em infraestrutura, segurança e otimização de sistemas.',
  education: 'Estudante de Análise e Desenvolvimento de Sistemas.',
  image: '/jonathan.jpg',
};

// Dados dos destaques
const highlights = [
  {
    icon: <Briefcase className="h-5 w-5 text-cyan-400" />,
    title: 'Analista de TI',
    description: 'Colégio Jean Piaget',
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-cyan-400" />,
    title: 'ADS',
    description: '5º Semestre',
  },
  {
    icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    title: 'Desenvolvimento',
    description: 'Full Stack',
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-400" />,
    title: 'Infraestrutura',
    description: 'Cloud & Security',
  },
];

// Componente da Imagem de Perfil
const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mx-auto"
  >
    <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full sm:h-28 sm:w-28 md:h-32 md:w-32">
      <Image
        src={profileData.image}
        alt="Jonathan Souza Moyano"
        fill
        className="object-cover"
        priority
      />
    </div>
  </motion.div>
);

// Componente do Cartão de Destaque
const HighlightCard = ({ highlight }) => (
  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-3 backdrop-blur-xl">
    <div className="flex flex-col items-center gap-2">
      {highlight.icon}
      <div className="text-center">
        <p className="text-sm font-medium text-white">{highlight.title}</p>
        <p className="text-xs text-cyan-100/60">{highlight.description}</p>
      </div>
    </div>
  </Card>
);

// Componente de Botão de Ação
const ActionButton = ({ href, variant = 'default', children }) => (
  <Link href={href} className="w-full sm:w-auto">
    <Button
      size="lg"
      variant={variant}
      className={cn(
        'w-full px-4 transition-all hover:scale-[1.02] sm:w-auto sm:px-6 md:px-8',
        variant === 'default'
          ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500'
          : 'border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10'
      )}
    >
      {children}
    </Button>
  </Link>
);

// Componente do Header
const Header = () => (
  <div className="space-y-2 sm:space-y-3">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm"
    >
      PORTFÓLIO PROFISSIONAL
    </motion.h2>

    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
    >
      <span className="block">{profileData.name.first}</span>
      <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        {profileData.name.last}
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mx-auto max-w-xl text-xs text-cyan-100/60 sm:text-sm md:text-base"
    >
      {profileData.role}
      <br className="hidden sm:block" />
      {profileData.education}
    </motion.p>
  </div>
);

// Componente dos Destaques
const Highlights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="grid grid-cols-2 gap-3 sm:grid-cols-4"
  >
    {highlights.map((highlight, index) => (
      <HighlightCard key={index} highlight={highlight} />
    ))}
  </motion.div>
);

// Componente dos Botões de Ação
const ActionButtons = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4"
  >
    <ActionButton href="/sobre/historia">
      <span className="relative z-10 flex items-center justify-center">
        <span>Conheça minha história</span>
        <ScrollText className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
      </span>
    </ActionButton>

    <ActionButton href="/contato" variant="outline">
      <span className="flex items-center justify-center">
        <span>Vamos conversar</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
      </span>
    </ActionButton>
  </motion.div>
);

// Componente do Conteúdo Principal
const MainContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-5 sm:space-y-6"
  >
    <ProfileImage />
    <Header />
    <Highlights />
    <ActionButtons />
  </motion.div>
);

// Componente Principal
const HomePage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        <main className="flex min-h-[80vh] flex-col items-center justify-center py-8 sm:py-12">
          <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
            <MainContent />
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default HomePage;
