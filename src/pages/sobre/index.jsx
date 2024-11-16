import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronRight, User, History } from 'lucide-react';
import Link from 'next/link';

const SobrePage = () => {
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

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] bg-contain bg-center bg-repeat opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-4xl">
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
                Sobre Mim
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
                Explore minha trajetória profissional e conheça mais sobre minha história
              </p>
            </motion.div>

            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 sm:mb-12"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                  Profissional apaixonado por tecnologia, com uma jornada única que combina
                  experiências diversas e uma busca constante por conhecimento. Aqui você encontrará
                  informações detalhadas sobre meu perfil profissional e a história que me trouxe
                  até aqui.
                </p>
              </Card>
            </motion.div>

            {/* Section Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link href={section.href} className="block">
                      <Card className="group relative overflow-hidden border-cyan-500/20 bg-[#0A0F1E]/95 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 sm:p-8">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

                        <div className="relative z-10">
                          {/* Icon and Title */}
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`rounded-lg bg-gradient-to-r ${section.gradient} p-2 text-white`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                  {section.title}
                                </h3>
                                <p className="text-sm text-cyan-400">{section.titleEn}</p>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-cyan-500 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>

                          {/* Description */}
                          <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                            {section.description}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SobrePage;
