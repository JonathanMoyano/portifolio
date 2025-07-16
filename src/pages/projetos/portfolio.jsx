import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Brush, Cpu, Sparkles, Blocks, Terminal, Code2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Dados do projeto
const projectData = {
  title: 'Portfólio Profissional',
  badge: 'Projeto Pessoal',
  description:
    'Website moderno e interativo para apresentação profissional, desenvolvido com as mais recentes tecnologias web.',
  previewImage: '/images/portfolio.png',
  githubUrl: 'https://github.com/JonathanPolezel/portifolio',
  about: `Este portfólio foi desenvolvido com o objetivo de apresentar minha trajetória 
         profissional e projetos de forma moderna e interativa. O design foi inspirado 
         em elementos cyberpunk e tecnológicos, utilizando efeitos de glassmorphism, 
         gradientes e animações suaves para criar uma experiência única. A arquitetura 
         do projeto foi pensada para ser escalável e de fácil manutenção, utilizando as 
         melhores práticas de desenvolvimento web.`,
};

// Dados das features e stack tecnológica
const features = [
  {
    icon: Layout,
    title: 'Design Responsivo',
    description: 'Interface adaptável a qualquer dispositivo, mantendo a experiência do usuário',
  },
  {
    icon: Brush,
    title: 'UI/UX Moderno',
    description: 'Design cyberpunk com elementos glassmorphism e animações fluidas',
  },
  {
    icon: Cpu,
    title: 'Performance',
    description: 'Otimizado para carregamento rápido e interações suaves',
  },
  {
    icon: Sparkles,
    title: 'Animações',
    description: 'Transições e efeitos visuais utilizando Framer Motion',
  },
  {
    icon: Blocks,
    title: 'Componentização',
    description: 'Arquitetura modular com componentes reutilizáveis',
  },
  {
    icon: Terminal,
    title: 'Clean Code',
    description: 'Código limpo e bem documentado seguindo boas práticas',
  },
];

const techStack = [
  {
    category: 'Frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'UI Components',
    technologies: ['Shadcn/UI', 'Lucide Icons', 'Radix UI'],
  },
  {
    category: 'Desenvolvimento',
    technologies: ['Git', 'VS Code', 'ESLint', 'Prettier'],
  },
];

// Componentes Reutilizáveis
const FeatureCard = ({ feature }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="rounded-lg border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-2">
        <feature.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-cyan-100/60">{feature.description}</p>
      </div>
    </div>
  </motion.div>
);

const TechStackCard = ({ stack }) => (
  <Card>
    <CardContent className="p-4">
      <h3 className="mb-3 font-semibold text-white">{stack.category}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="border-cyan-500/20 text-cyan-100/60">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Componentes de Seção
const ProjectHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8 text-center sm:mb-12"
  >
    <Badge className="mb-4 bg-cyan-500/20 text-cyan-400">{projectData.badge}</Badge>
    <h1 className="font-display bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
      {projectData.title}
    </h1>
    <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
      {projectData.description}
    </p>
  </motion.div>
);
// Componente Principal
const PortfolioProjectPage = () => {
  return (
      <div className="mx-auto max-w-6xl">
        <ProjectHeader />

        {/* Preview e Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 shadow-xl backdrop-blur-xl sm:mb-12"
        >
          {/* Imagem Preview */}
          <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] lg:h-[400px]">
            <Image
              src={projectData.previewImage}
              alt="Portfólio Preview"
              className="h-full w-full object-cover"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
          </div>

          <div className="p-6 lg:p-8">
            {/* Seção de Features */}
            <section className="mb-8">
              <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                Recursos Principais
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </section>

            {/* Stack Tecnológica */}
            <section className="mb-8">
              <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                Stack Tecnológica
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {techStack.map((stack, index) => (
                  <TechStackCard key={index} stack={stack} />
                ))}
              </div>
            </section>

            {/* Sobre o Projeto */}
            <section className="mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Sobre o Projeto</h3>
                  <p className="text-sm leading-relaxed text-cyan-100/60">{projectData.about}</p>
                </CardContent>
              </Card>
            </section>

            {/* Links do Projeto */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Button
                className={cn(
                  'group bg-gradient-to-r from-cyan-500 to-blue-500 px-6',
                  'transition-all hover:scale-105'
                )}
                onClick={() => window.open(projectData.githubUrl, '_blank')}
              >
                Ver Código
                <Code2 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
  );
};

export default PortfolioProjectPage;
