import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Layout, Brush, Cpu, Sparkles, Blocks, Terminal, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const PortfolioProjectPage = () => {
  // Características principais do projeto
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

  // Stack tecnológica
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

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center sm:mb-12"
            >
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-400">Projeto Pessoal</Badge>
              <h1 className="font-display bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                Portfólio Profissional
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
                Website moderno e interativo para apresentação profissional, desenvolvido com as
                mais recentes tecnologias web.
              </p>
            </motion.div>

            {/* Preview do Projeto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 shadow-xl backdrop-blur-xl sm:mb-12"
            >
              <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] lg:h-[400px]">
                <Image
                  src="/images/portfolio.png"
                  alt="Portfólio Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
              </div>

              <div className="p-6 lg:p-8">
                {/* Seção de Features */}
                <div className="mb-8">
                  <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                    Recursos Principais
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
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
                    ))}
                  </div>
                </div>

                {/* Stack Tecnológica */}
                <div className="mb-8">
                  <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                    Stack Tecnológica
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {techStack.map((stack, index) => (
                      <Card key={index} className="border-cyan-500/20 bg-[#0A0F1E]/95">
                        <CardContent className="p-4">
                          <h3 className="mb-3 font-semibold text-white">{stack.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {stack.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-cyan-500/20 text-cyan-100/60"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Descrição do Projeto */}
                <Card className="mb-8 border-cyan-500/20 bg-[#0A0F1E]/95">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Sobre o Projeto</h3>
                    <p className="text-sm leading-relaxed text-cyan-100/60">
                      Este portfólio foi desenvolvido com o objetivo de apresentar minha trajetória
                      profissional e projetos de forma moderna e interativa. O design foi inspirado
                      em elementos cyberpunk e tecnológicos, utilizando efeitos de glassmorphism,
                      gradientes e animações suaves para criar uma experiência única. A arquitetura
                      do projeto foi pensada para ser escalável e de fácil manutenção, utilizando as
                      melhores práticas de desenvolvimento web.
                    </p>
                  </CardContent>
                </Card>

                {/* Links do Projeto */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <Button
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 transition-all hover:scale-105"
                    onClick={() =>
                      window.open('https://github.com/JonathanPolezel/portifolio', '_blank')
                    }
                  >
                    Ver Código
                    <Code2 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortfolioProjectPage;
