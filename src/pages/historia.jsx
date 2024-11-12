import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Heart,
  Compass,
  Award,
  Star,
  ChevronRight,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/shared/AudioPlayer";

const HistoriaPage = () => {
  const [activePhase, setActivePhase] = useState("adolescencia");

  // Fases da vida com suas respectivas cores e ícones
  const phases = {
    adolescencia: {
      id: "adolescencia",
      title: "Adolescência",
      icon: Heart,
      color: "from-pink-500 to-purple-500",
      years: "1990 - 2000",
    },
    vidaAdulta: {
      id: "vidaAdulta",
      title: "Início da Vida Adulta",
      icon: Compass,
      color: "from-blue-500 to-cyan-500",
      years: "2000 - 2010",
    },
    carreira: {
      id: "carreira",
      title: "Jornada Profissional",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      years: "2010 - Presente",
    },
  };

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Minha História
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Uma jornada de descobertas, desafios e realizações
        </p>

        {/* Audio Option */}
        <div className="mb-12">
          <AudioPlayer
            title="Escute minha história"
            audioUrl="/path-to-audio.mp3"
          />
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.values(phases).map((phase) => (
            <Button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              variant={activePhase === phase.id ? "default" : "outline"}
              className={`
                flex items-center gap-2 text-lg px-6 py-3
                ${
                  activePhase === phase.id
                    ? `bg-gradient-to-r ${phase.color}`
                    : ""
                }
              `}
            >
              <phase.icon className="w-5 h-5" />
              {phase.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto">
        {/* Adolescência */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === "adolescencia" ? 1 : 0 }}
          className={`space-y-8 ${
            activePhase !== "adolescencia" ? "hidden" : ""
          }`}
        >
          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Heart className="w-8 h-8 text-pink-500" />
                  <div>
                    <h2 className="text-2xl font-bold">Adolescência</h2>
                    <p className="text-gray-400">
                      Anos de descobertas e sonhos
                    </p>
                  </div>
                </div>

                {/* Aqui virá seu conteúdo sobre a adolescência */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    [Seu texto sobre a adolescência virá aqui]
                  </p>
                </div>

                {/* Momentos Importantes */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {/* Cards de momentos importantes virão aqui */}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Início da Vida Adulta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === "vidaAdulta" ? 1 : 0 }}
          className={`space-y-8 ${
            activePhase !== "vidaAdulta" ? "hidden" : ""
          }`}
        >
          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Compass className="w-8 h-8 text-blue-500" />
                  <div>
                    <h2 className="text-2xl font-bold">
                      Início da Vida Adulta
                    </h2>
                    <p className="text-gray-400">
                      Período de escolhas e crescimento
                    </p>
                  </div>
                </div>

                {/* Aqui virá seu conteúdo sobre o início da vida adulta */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    [Seu texto sobre o início da vida adulta virá aqui]
                  </p>
                </div>

                {/* Decisões Importantes */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {/* Cards de decisões importantes virão aqui */}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Jornada Profissional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activePhase === "carreira" ? 1 : 0 }}
          className={`space-y-8 ${activePhase !== "carreira" ? "hidden" : ""}`}
        >
          <Card className="bg-neutral-800 border-neutral-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-8 h-8 text-green-500" />
                  <div>
                    <h2 className="text-2xl font-bold">Jornada Profissional</h2>
                    <p className="text-gray-400">Experiências e conquistas</p>
                  </div>
                </div>

                {/* Aqui virá seu conteúdo sobre a carreira */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    [Seu texto sobre a jornada profissional virá aqui]
                  </p>
                </div>

                {/* Timeline de Carreira */}
                <div className="space-y-6 mt-8">
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
        className="max-w-4xl mx-auto mt-12 text-center"
      >
        <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-none">
          <CardContent className="p-8">
            <p className="text-xl italic text-gray-100 mb-4">
              "Uma frase inspiradora que resume sua jornada virá aqui"
            </p>
            <p className="text-gray-400">— Seu Nome</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HistoriaPage;
