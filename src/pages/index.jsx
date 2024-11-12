import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@shadcn/ui";
import {
  Code,
  Shield,
  Globe2,
  ArrowRight,
  ChevronRight,
  Star,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/components/layout/Layout";
import { translations } from "@/utils/constants";

const IndexPage = () => {
  const { currentLanguage } = useAccessibility();
  const t = translations[currentLanguage];
  const [activeCard, setActiveCard] = useState(null);

  const areas = [
    {
      id: "tech",
      title: t.nav.tech,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      stats: ["5+ anos", "50+ projetos", "10+ tecnologias"],
      description:
        "Desenvolvimento Full Stack com foco em soluções inovadoras e escaláveis.",
      link: "/tecnologia",
      highlights: [
        "React & Node.js",
        "Cloud & DevOps",
        "Arquitetura de Software",
      ],
    },
    {
      id: "fireman",
      title: t.nav.fireman,
      icon: Shield,
      color: "from-red-500 to-orange-500",
      stats: ["8+ anos", "100+ operações", "15+ certificações"],
      description:
        "Experiência em prevenção e combate a incêndio, salvamento e gestão de emergências.",
      link: "/bombeiro",
      highlights: [
        "Gestão de Emergências",
        "Treinamento de Equipes",
        "Prevenção de Acidentes",
      ],
    },
    {
      id: "commerce",
      title: t.nav.commerce,
      icon: Globe2,
      color: "from-purple-500 to-pink-500",
      stats: ["6+ anos", "20+ países", "$10M+ operados"],
      description:
        "Expertise em operações internacionais e negociações multiculturais.",
      link: "/comercio",
      highlights: [
        "Importação & Exportação",
        "Logística Internacional",
        "Negociações Globais",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Multidisciplinar
            </span>
            <br />
            <span className="text-gray-100">& Inovador</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Combinando expertise em Tecnologia, Segurança e Negócios
            Internacionais para criar soluções únicas e impactantes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() => (window.location.href = "/historia")}
            >
              Conheça minha história
              <ScrollText className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/contato")}
            >
              Vamos conversar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Areas Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-400">
              Explore minhas diferentes áreas de expertise e descubra como posso
              agregar valor ao seu projeto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card
                  className={`relative h-full bg-neutral-800 border-neutral-700 overflow-hidden group 
                    ${activeCard === area.id ? "ring-2 ring-purple-500" : ""}
                    hover:border-purple-500 transition-all duration-300`}
                  onMouseEnter={() => setActiveCard(area.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => (window.location.href = area.link)}
                >
                  <CardContent className="p-6">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mb-4`}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">
                      {area.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{area.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {area.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <Star className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                          <span className="text-sm text-gray-300">{stat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <ChevronRight className="w-4 h-4 mr-2 text-purple-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Call to Action */}
                    <div className="absolute bottom-6 right-6">
                      <Button
                        variant="ghost"
                        className="group-hover:text-purple-400 transition-colors"
                      >
                        Explorar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vamos trabalhar juntos para transformar suas ideias em realidade
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => (window.location.href = "/contato")}
            >
              Iniciar Conversa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
