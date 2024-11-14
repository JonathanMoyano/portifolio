import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Globe, Smartphone, Users, Award, Star, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projectStats = [
    {
      icon: Trophy,
      title: 'Fomos o Melhor Projeto',
      subtitle: '24ª Feira de Negócios UNIBR',
    },
    {
      icon: Star,
      title: 'Tivemos a Melhor Apresentação',
      subtitle: '24ª Feira de Negócios UNIBR',
    },
    {
      icon: Award,
      title: 'Tivemos a Melhor Execução',
      subtitle: '24ª Feira de Negócios UNIBR',
    },
  ];

  const teamMembers = [
    {
      name: 'Jonathan Souza Moyano',
      role: 'Desenvolvedor',
    },
    {
      name: 'Bruna Lino Moyano',
      role: 'UX/UI Designer',
    },
    {
      name: 'Flavio Augusto Dos Santos',
      role: 'QA',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projetos em Destaque
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Conheça alguns dos projetos que desenvolvi, combinando inovação, tecnologia e soluções
            práticas para desafios reais.
          </p>
        </motion.div>

        {/* TROK Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-neutral-700 bg-neutral-800">
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl font-bold text-orange-600">TROK!</CardTitle>
                  <p className="mt-2 text-lg font-bold text-orange-600">
                    Seu Negócio na Palma da Mão
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-blue-500">Projeto Premiado</Badge>
                  <Badge variant="outline">Em Produção</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Project Stats */}
              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {projectStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-neutral-700/20 p-4"
                  >
                    <stat.icon className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-100">{stat.title}</h3>
                      <p className="text-sm text-gray-400">{stat.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-100">Sobre o Projeto</h3>
                <p className="text-gray-400">
                  Em um mundo cada vez mais conectado, a economia colaborativa surge como solução
                  para otimizar recursos e fortalecer comunidades. O TROK! é um aplicativo inovador
                  que revoluciona a forma como as pessoas trocam serviços e mão de obra, promovendo
                  sustentabilidade e inclusão social.
                </p>
              </div>

              {/* Educational Banner */}
              <div className="mb-8">
                <div className="mx-auto max-w-[582px] overflow-hidden rounded-lg bg-neutral-700/20 p-4">
                  <Image
                    src="/images/trok-banner.jpg"
                    alt="Banner Educacional TROK!"
                    width={582}
                    height={770}
                    className="w-full object-contain"
                    priority
                    quality={100}
                  />
                </div>
              </div>

              {/* Team Section */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-100">Nosso Time</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg bg-neutral-700/20 p-4"
                    >
                      <Users className="h-5 w-5 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-gray-100">{member.name}</h4>
                        <p className="text-sm text-gray-400">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-gray-100">
                  Principais Funcionalidades
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-neutral-700/20 p-4">
                    <Smartphone className="mb-2 h-6 w-6 text-blue-400" />
                    <h4 className="mb-2 font-semibold text-gray-100">Gestão Mobile</h4>
                    <p className="text-sm text-gray-400">
                      Gerencie seu negócio de qualquer lugar, a qualquer momento
                    </p>
                  </div>
                  <div className="rounded-lg bg-neutral-700/20 p-4">
                    <Users className="mb-2 h-6 w-6 text-blue-400" />
                    <h4 className="mb-2 font-semibold text-gray-100">Gestão de Clientes</h4>
                    <p className="text-sm text-gray-400">
                      Cadastro e acompanhamento completo de clientes
                    </p>
                  </div>
                  <div className="rounded-lg bg-neutral-700/20 p-4">
                    <Globe className="mb-2 h-6 w-6 text-blue-400" />
                    <h4 className="mb-2 font-semibold text-gray-100">Pagamentos Integrados</h4>
                    <p className="text-sm text-gray-400">
                      Receba pagamentos de forma segura e simplificada
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => window.open('https://www.trok-servicos.com.br', '_blank')}
                >
                  Visitar Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Saiba Mais
                  <Globe className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
