import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, ExternalLink, Trophy, Award } from 'lucide-react';

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
    <div className="relative flex min-h-screen bg-[#0A0F1E] pb-16 md:pl-64">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <main className="container relative z-10 mx-auto flex h-screen items-center px-4">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
              Projeto em Destaque
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-cyan-100/60">
              Conheça o projeto que desenvolvi, combinando inovação e tecnologia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/70 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20"
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-neutral-900">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <h2 className="mb-3 text-6xl font-bold text-orange-500 drop-shadow-lg">TROK!</h2>
                  <p className="text-shadow-lg text-4xl font-bold text-white">
                    Seu Negócio na <span className="text-orange-500">Palma da Mão</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 flex justify-center gap-3">
                <Badge className="bg-cyan-500/90 px-4 py-1 text-sm font-medium hover:bg-cyan-600">
                  Projeto Premiado
                </Badge>
                <Badge
                  variant="outline"
                  className="border-cyan-500 px-4 py-1 text-sm font-medium text-cyan-400 hover:bg-cyan-500/10"
                >
                  Em Produção
                </Badge>
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/20"
                  >
                    <item.icon className="h-6 w-6 text-cyan-400" />
                    <div>
                      <h3 className="font-semibold text-cyan-100">{item.title}</h3>
                      <p className="text-sm text-cyan-100/60">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-8 text-center text-cyan-100/80">
                O TROK! revoluciona a troca de serviços e mão de obra, promovendo sustentabilidade e
                inclusão social.
              </p>

              <div className="flex justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-6 transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400"
                  onClick={() => window.open('https://www.trok-servicos.com.br', '_blank')}
                >
                  Visitar Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 px-6 text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10"
                >
                  Saiba Mais
                  <Globe className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
