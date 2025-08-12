

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Briefcase, Award, Users, HeartPulse, 
  Cloud, Server, Bot, Code2, Cpu 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- DADOS ---
const profileData = {
  name: {
    first: 'JONATHAN SOUZA',
    last: 'MOYANO',
  },
  summary: 'Profissional de TI com mais de 10 anos de experiência, combinando sólida base técnica em infraestrutura, suporte N1/N2 e hardware com formação em Análise e Desenvolvimento de Sistemas.',
  image: '/jonathan.jpg',
};

const stats = [
  { icon: <Briefcase className="h-6 w-6" />, value: '10+', label: 'Anos em TI' },
  { icon: <Award className="h-6 w-6" />, value: '10+', label: 'Cursos e Formação' },
  { icon: <Users className="h-6 w-6" />, value: '4+', label: 'Anos em Liderança' },
  { icon: <HeartPulse className="h-6 w-6" />, value: '4', label: 'Anos como Bombeiro' },
];

const technologies = [
  { name: 'Cloud Computing', icon: <Cloud /> },
  { name: 'Infraestrutura', icon: <Server /> },
  { name: 'DevOps', icon: <Cpu /> },
  { name: 'Desenvolvimento', icon: <Code2 /> },
  { name: 'Inteligência Artificial', icon: <Bot /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};


const ProfileImage = () => (
  <motion.div variants={itemVariants} className="relative mx-auto h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 blur-md" />
    <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-slate-800">
      <Image src={profileData.image} alt="Jonathan Souza Moyano" fill className="object-cover" priority />
    </div>
  </motion.div>
);

const Header = () => (
  <div className="space-y-4">
    <motion.h2 variants={itemVariants} className="text-base font-semibold uppercase tracking-widest text-cyan-400">
      PORTFÓLIO PROFISSIONAL
    </motion.h2>
    <motion.h1 variants={itemVariants} className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
      {profileData.name.first}
      <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {profileData.name.last}
      </span>
    </motion.h1>
    <motion.p variants={itemVariants} className="max-w-2xl text-base text-cyan-100/70 md:text-lg">
      {profileData.summary}
    </motion.p>
  </div>
);

const StatCard = ({ stat }) => (
  <div className="rounded-xl border border-cyan-500/10 bg-slate-800/50 p-4">
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-3 text-cyan-300">
        {stat.icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{stat.value}</p>
        <p className="text-sm text-cyan-100/60">{stat.label}</p>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
    {stats.map((stat) => (
      <StatCard key={stat.label} stat={stat} />
    ))}
  </motion.div>
);

const TechSection = () => (
  <motion.div variants={itemVariants}>
    <p className="mb-4 text-center text-sm text-cyan-100/60 lg:text-left">Áreas de Foco:</p>
    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/80 text-cyan-300"
          whileHover={{ scale: 1.1, y: -5 }}
          title={tech.name}
        >
          {React.cloneElement(tech.icon, { className: 'h-6 w-6' })}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ActionButtons = () => (
  <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row">
    <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/10 transition-transform hover:scale-105">
      <Link href="/experiencias/historico-profissional">
        <span className="flex items-center justify-center">Minha Trajetória</span>
      </Link>
    </Button>
    <Button asChild size="lg" variant="outline" className="border-cyan-500/30 bg-transparent text-cyan-300 transition-transform hover:scale-105 hover:bg-cyan-500/10 hover:text-white">
      <Link href="/contato">
        <span className="flex items-center justify-center">
          Vamos Conversar <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </Link>
    </Button>
  </motion.div>
);

// O componente HomePage agora retorna apenas o grid, pois o <main> já está no Layout
const HomePage = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 text-center lg:text-left"
      >
        <Header />
        <div className="hidden lg:block">
          <TechSection />
        </div>
        <div className="flex justify-center lg:justify-start">
          <ActionButtons />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <ProfileImage />
        <StatsSection />
        <div className="lg:hidden">
          <TechSection />
        </div>
      </motion.div>

    </div>
  );
};

export default HomePage;
