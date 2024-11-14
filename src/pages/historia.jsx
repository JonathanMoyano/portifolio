import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/shared/audioPlayer';

const HistoriaPage = () => {
  const [activePhase, setActivePhase] = useState('adolescencia');

  // Fases da vida com suas respectivas cores e ícones
  const phases = {
    adolescencia: {
      id: 'adolescencia',
      title: 'Adolescência',
      icon: Heart,
      color: 'from-blue-400 to-blue-600',
      years: '1990 - 2000',
    },
    vidaAdulta: {
      id: 'vidaAdulta',
      title: 'Início da Vida Adulta',
      icon: Compass,
      color: 'from-blue-500 to-blue-600',
      years: '2000 - 2010',
    },
    carreira: {
      id: 'carreira',
      title: 'Jornada Profissional',
      icon: Award,
      color: 'from-blue-600 to-blue-700',
      years: '2010 - Presente',
    },
  };

  return (
    <div className="min-h-screen bg-neutral-900 px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-4xl text-center"
      >
        <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Minha História
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Uma jornada de descobertas, desafios e realizações
        </p>

        {/* Audio Option */}
        <div className="mb-12">
          <AudioPlayer title="Escute minha história" audioUrl="/path-to-audio.mp3" />
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="mx-auto mb-12 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.values(phases).map((phase) => (
            <Button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              variant={activePhase === phase.id ? 'default' : 'outline'}
              className={`
                flex items-center gap-2 px-6 py-3 text-lg
                ${activePhase === phase.id ? `bg-gradient-to-r ${phase.color}` : 'border-blue-500 text-blue-400 hover:bg-blue-500/10'}
              `}
            >
              <phase.icon className="h-5 w-5" />
              {phase.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-6xl">
        {/* Adolescência */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === 'adolescencia' ? 1 : 0 }}
          className={`space-y-8 ${activePhase !== 'adolescencia' ? 'hidden' : ''}`}
        >
          <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="mb-6 flex items-center gap-4">
                  <Heart className="h-8 w-8 text-blue-500" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100">Adolescência</h2>
                    <p className="text-gray-400">Anos de descobertas e sonhos</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed text-gray-300">
                    [Seu texto sobre a adolescência virá aqui]
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {/* Cards de momentos importantes virão aqui */}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Início da Vida Adulta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === 'vidaAdulta' ? 1 : 0 }}
          className={`space-y-8 ${activePhase !== 'vidaAdulta' ? 'hidden' : ''}`}
        >
          <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="mb-6 flex items-center gap-4">
                  <Compass className="h-8 w-8 text-blue-500" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100">Início da Vida Adulta</h2>
                    <p className="text-gray-400">Período de escolhas e crescimento</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed text-gray-300">
                    [Seu texto sobre o início da vida adulta virá aqui]
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {/* Cards de decisões importantes virão aqui */}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Jornada Profissional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === 'carreira' ? 1 : 0 }}
          className={`space-y-8 ${activePhase !== 'carreira' ? 'hidden' : ''}`}
        >
          <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="mb-6 flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-500" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100">Jornada Profissional</h2>
                    <p className="text-gray-400">Experiências e conquistas</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed text-gray-300">
                    [Seu texto sobre a jornada profissional virá aqui]
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  {/* Timeline de eventos da carreira virá aqui */}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Inspiration Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-12 max-w-4xl text-center"
      >
        <Card className="border-neutral-700 bg-gradient-to-r from-blue-900 to-blue-800 transition-all duration-300 hover:border-blue-500">
          <CardContent className="p-8">
            <p className="mb-4 text-xl italic text-gray-100">
              Da manutenção de dispositivos à Analista em TI, cada desafio foi um degrau na
              construção do profissional que quero me tornar, em busca de soluções inovadoras que
              transformam a tecnologia em resultados reais.
            </p>
            <p className="text-gray-400">— Jonathan Souza Moyano</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HistoriaPage;
