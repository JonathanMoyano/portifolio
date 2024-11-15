import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Award } from 'lucide-react';

const ProjectsPage = () => {
  const achievements = [
    { icon: Trophy, title: 'Fomos o Melhor Projeto', subtitle: '24ª Feira de Negócios UNIBR' },
    {
      icon: Award,
      title: 'Tivemos a Melhor Apresentação',
      subtitle: '24ª Feira de Negócios UNIBR',
    },
    { icon: Award, title: 'Tivemos a Melhor Execução', subtitle: '24ª Feira de Negócios UNIBR' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      {/* Wrapper para centralização correta */}
      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                Projeto em Destaque
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                Conheça o projeto que desenvolvi, combinando inovação e tecnologia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-t-xl">
                <Image
                  src="/images/trokinho.png"
                  alt="Trokinho"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0F1E]">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <h2 className="mb-3 text-6xl font-bold text-orange-500 drop-shadow-lg">
                      TROK!
                    </h2>
                    <p className="text-shadow-lg text-4xl font-bold text-white">
                      Seu Negócio na <span className="text-orange-500">Palma da Mão</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6 flex justify-center gap-3">
                  <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                    Projeto Premiado
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    Em Produção
                  </Badge>
                </div>

                <div className="mb-8 grid gap-4 md:grid-cols-3">
                  {achievements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
                    >
                      <item.icon className="h-6 w-6 text-cyan-400" />
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-cyan-100/60">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mb-8 text-center text-cyan-100/60">
                  O TROK! revoluciona a troca de serviços e mão de obra, promovendo sustentabilidade
                  e inclusão social.
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-6 transition-transform hover:scale-105"
                    onClick={() => window.open('https://www.trok-servicos.com.br', '_blank')}
                  >
                    Visite o site
                    <ExternalLink className="ml-2 h-4 w-4" />
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

export default ProjectsPage;
