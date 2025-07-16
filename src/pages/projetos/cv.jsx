// src/pages/projetos/cv.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Brush, Cpu, Sparkles, Blocks, GitBranch, Code2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projectData = {
  title: 'Currículo Interativo',
  badge: 'Projeto Destaque',
  description: 'Uma single-page application (SPA) que apresenta meu perfil profissional de forma moderna, tecnológica e interativa, substituindo o formato tradicional de currículo.',
  previewImage: '/images/cv-interativo.png', 
  githubUrl: 'https://github.com/JonathanPolezel/Curriculo',
  liveUrl: 'https://curriculo-three-iota.vercel.app/',
  about: `Este projeto foi concebido para ser mais do que um currículo: uma declaração de minhas habilidades em design e desenvolvimento. O objetivo era criar uma experiência de usuário única e memorável, utilizando um layout de "Bento Grid" para organizar as informações de forma dinâmica. A página foi construída com foco em animações fluidas, um fundo generativo "Aurora" e componentes reutilizáveis, demonstrando na prática as tecnologias que domino.`,
};

// Features e diferenciais do projeto
const features = [
  { icon: Layout, title: 'Layout "Bento Grid"', description: 'Design moderno que organiza a informação em um mosaico visualmente dinâmico e responsivo.' },
  { icon: Sparkles, title: 'Animações Fluidas', description: 'Micro-interações e animações de entrada com Framer Motion que guiam o olhar do usuário.' },
  { icon: Brush, title: 'Fundo Generativo "Aurora"', description: 'Um fundo animado e sutil que cria uma atmosfera tecnológica e imersiva, sem distrair do conteúdo.' },
  { icon: Blocks, title: 'Componentização', description: 'Arquitetura modular com componentes React e Shadcn/UI para máxima reutilização e manutenibilidade.' },
  { icon: Cpu, title: 'Performance Otimizada', description: 'Construído com Next.js para um carregamento rápido e uma experiência de navegação suave.' },
  { icon: GitBranch, title: 'Versionamento Profissional', description: 'Todo o processo de desenvolvimento foi versionado com Git e hospedado no GitHub.' },
];

// Tecnologias utilizadas
const techStack = [
  { category: 'Frontend', technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'UI & Ferramentas', technologies: ['Shadcn/UI', 'Lucide Icons', 'Radix UI', 'ESLint'] },
  { category: 'Deployment', technologies: ['Git', 'GitHub', 'Vercel'] },
];


// --- COMPONENTES REUTILIZÁVEIS DA PÁGINA ---
const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="rounded-lg border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-2">
        <feature.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-slate-400">{feature.description}</p>
      </div>
    </div>
  </motion.div>
);

const TechStackCard = ({ stack }) => (
  <Card className="h-full">
    <CardContent className="p-4">
      <h3 className="mb-3 font-semibold text-white">{stack.category}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="border-slate-700 text-slate-400">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProjectHeader = () => (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center sm:mb-12">
      <Badge className="mb-4 bg-green-500/20 text-green-400">{projectData.badge}</Badge>
      <h1 className="font-display bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
        {projectData.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base lg:text-lg">
        {projectData.description}
      </p>
    </motion.div>
);


// --- COMPONENTE PRINCIPAL DA PÁGINA ---
const CVProjectPage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <ProjectHeader />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 shadow-xl backdrop-blur-xl sm:mb-12"
      >
        <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] lg:h-[400px]">
          <Image
            src={projectData.previewImage}
            alt="Preview do Currículo Interativo"
            fill
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
        </div>

        <div className="p-6 lg:p-8">
          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">Recursos Principais</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">Stack Tecnológica</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {techStack.map((stack, index) => (
                <TechStackCard key={index} stack={stack} />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Sobre o Projeto</h3>
                <p className="text-sm leading-relaxed text-slate-400">{projectData.about}</p>
              </CardContent>
            </Card>
          </section>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 transition-all hover:scale-105">
                Ver Projeto ao Vivo
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full group border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                Ver Código no GitHub
                <Code2 className="ml-2 h-4 w-4 transition-transform group-hover:rotate-6" />
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CVProjectPage;