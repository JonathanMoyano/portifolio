import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, ArrowRight, Briefcase, GraduationCap, Code2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
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

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto h-full max-w-screen-2xl px-3 sm:px-6 lg:px-8">
        <main className="relative z-10 mx-auto flex min-h-screen items-start justify-center pt-12 sm:pt-16 md:pt-20">
          <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Profile Image Section - mantido como está */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto"
              >
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full sm:h-28 sm:w-28 md:h-32 md:w-32">
                  <Image
                    src="/jonathan.jpg"
                    alt="Jonathan Souza Moyano"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Title and Subtitle - mantido como está */}
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
                  <span className="block">JONATHAN SOUZA</span>
                  <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    MOYANO
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mx-auto max-w-xl text-xs text-cyan-100/60 sm:text-sm md:text-base"
                >
                  Analista de TI especializado em infraestrutura, segurança e otimização de
                  sistemas.
                  <br className="hidden sm:block" />
                  Estudante de Análise e Desenvolvimento de Sistemas.
                </motion.p>
              </div>

              {/* Highlights Section - NOVO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="border-cyan-500/20 bg-[#0A0F1E]/95 p-3 backdrop-blur-xl"
                  >
                    <div className="flex flex-col items-center gap-2">
                      {item.icon}
                      <div className="text-center">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="text-xs text-cyan-100/60">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>

              {/* Action Buttons - mantido como está */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4"
              >
                <Link href="/sobre/historia" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-4 transition-all hover:scale-[1.02] sm:w-auto sm:px-6 md:px-8"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span>Conheça minha história</span>
                      <ScrollText className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contato" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-cyan-500/20 px-4 text-cyan-400 transition-all hover:scale-[1.02] hover:bg-cyan-500/10 sm:w-auto sm:px-6 md:px-8"
                  >
                    <span className="flex items-center justify-center">
                      <span>Vamos conversar</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
