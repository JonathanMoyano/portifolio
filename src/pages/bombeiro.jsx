import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadCV from '@/components/shared/DownloadCV';
import {
  Shield,
  Award,
  Flame,
  Users,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAccessibility } from '@/components/layout/Layout';
import { translations } from '@/utils/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BombeiroPage = () => {
  const { currentLanguage } = useAccessibility();
  const t = translations[currentLanguage];
  const [activeTab, setActiveTab] = useState('certifications');

  const stats = [
    {
      icon: <Shield />,
      value: '8+',
      label: 'Anos de Experiência',
      color: 'text-red-500',
    },
    {
      icon: <Users />,
      value: '1000+',
      label: 'Pessoas Treinadas',
      color: 'text-orange-500',
    },
    {
      icon: <Flame />,
      value: '150+',
      label: 'Operações',
      color: 'text-yellow-500',
    },
    {
      icon: <Award />,
      value: '15+',
      label: 'Certificações',
      color: 'text-blue-500',
    },
  ];

  const certifications = [
    {
      title: 'Bombeiro Civil Profissional',
      institution: 'Corpo de Bombeiros Militar',
      date: '2014',
      validUntil: '2024',
      description:
        'Formação completa em prevenção e combate a incêndio, primeiros socorros e salvamento.',
      skills: ['Combate a Incêndio', 'Primeiros Socorros', 'Salvamento em Altura', 'APH'],
    },
    {
      title: 'Especialização em Emergências Químicas',
      institution: 'CETESB',
      date: '2015',
      validUntil: '2025',
      description: 'Especialização no atendimento a emergências com produtos perigosos.',
      skills: ['Produtos Perigosos', 'Contenção', 'Descontaminação', 'Análise de Riscos'],
    },
    // Adicione mais certificações conforme necessário
  ];

  const operations = [
    {
      title: 'Resgate em Altura',
      date: '2022',
      type: 'Emergência',
      description: 'Resgate bem-sucedido de funcionário em trabalho em altura a 30 metros.',
      outcome: 'Funcionário resgatado sem ferimentos graves',
      learnings: [
        'Importância do planejamento prévio',
        'Comunicação efetiva entre equipes',
        'Uso correto de equipamentos específicos',
      ],
    },
    {
      title: 'Contenção de Vazamento Químico',
      date: '2021',
      type: 'Emergência Química',
      description: 'Contenção de vazamento de produto químico em área industrial.',
      outcome: 'Situação controlada sem danos ambientais',
      learnings: [
        'Protocolo de isolamento de área',
        'Técnicas de contenção específicas',
        'Coordenação com órgãos ambientais',
      ],
    },
    // Adicione mais operações conforme necessário
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-6xl text-center"
      >
        <div className="mb-6 flex items-start justify-between">
          <div className="flex-1 text-center">
            <h1 className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Bombeiro Civil Profissional
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Dedicação à proteção da vida, do patrimônio e do meio ambiente
            </p>
          </div>
          <div className="ml-4">
            <DownloadCV area="bombeiro" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-neutral-700 bg-neutral-800">
                <CardContent className="p-4 text-center">
                  <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                  <div className="mb-1 text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="certifications">Certificações</TabsTrigger>
            <TabsTrigger value="operations">Operações</TabsTrigger>
            <TabsTrigger value="training">Treinamentos</TabsTrigger>
          </TabsList>

          {/* Certificações */}
          <TabsContent value="certifications">
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-neutral-700 bg-neutral-800">
                    <CardHeader>
                      <Badge className="mb-2 w-fit">
                        {cert.date} - {cert.validUntil}
                      </Badge>
                      <CardTitle className="mb-2 text-xl">{cert.title}</CardTitle>
                      <p className="text-sm text-gray-400">{cert.institution}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-300">{cert.description}</p>
                      <div className="space-y-2">
                        {cert.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-gray-300">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Operações */}
          <TabsContent value="operations">
            <div className="space-y-6">
              {operations.map((op, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-neutral-700 bg-neutral-800">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <Badge className="mb-2">{op.type}</Badge>
                          <h3 className="mb-1 text-xl font-semibold">{op.title}</h3>
                          <p className="flex items-center text-sm text-gray-400">
                            <Clock className="mr-1 h-4 w-4" />
                            {op.date}
                          </p>
                        </div>
                        <AlertTriangle className="text-yellow-500" />
                      </div>
                      <p className="mb-4 text-gray-300">{op.description}</p>
                      <div className="mb-4 rounded-lg bg-neutral-700/50 p-4">
                        <p className="flex items-center gap-2 text-green-400">
                          <CheckCircle2 className="h-4 w-4" />
                          {op.outcome}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                          <BookOpen className="h-4 w-4" />
                          Aprendizados
                        </h4>
                        <ul className="space-y-2">
                          {op.learnings.map((learning, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <div className="h-1 w-1 rounded-full bg-gray-500" />
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Treinamentos */}
          <TabsContent value="training">
            {/* Adicione o conteúdo de treinamentos aqui */}
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mt-12 max-w-2xl text-center"
      >
        <Card className="border-none bg-gradient-to-r from-red-900 to-orange-900">
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold">Precisa de Treinamento?</h3>
            <p className="mb-4 text-gray-300">
              Ofereço treinamentos personalizados em prevenção e combate a incêndio, primeiros
              socorros e brigada de emergência.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100">
              Solicitar Proposta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BombeiroPage;
