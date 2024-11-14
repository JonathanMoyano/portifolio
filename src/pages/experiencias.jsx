import React from 'react';
import { Code, Shield, Award, Clock, Users, Coffee, ChevronRight, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperiencePage = () => {
  const stats = [
    {
      icon: <Shield className="h-6 w-6" />,
      value: '3+',
      label: 'Anos como Bombeiro',
      colorClass: 'text-red-500',
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: '3+',
      label: 'Anos em TI',
      colorClass: 'text-blue-500',
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: '500+',
      label: 'Pessoas Impactadas',
      colorClass: 'text-orange-500',
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: '6+',
      label: 'Certificações',
      colorClass: 'text-green-500',
    },
  ];

  const experience = {
    bombeiro: [
      {
        title: 'Bombeiro Civil',
        company: 'Bracell',
        period: '2022 - 2022',
        type: 'Bombeiro',
        badgeColor: 'bg-red-500',
        iconColor: 'text-red-500',
        description: 'Atuação em emergências industriais e gestão de riscos em ambiente fabril.',
        achievements: [
          'Resposta a emergências químicas e industriais',
          'Treinamento de brigadas industriais',
          'Inspeções de segurança e prevenção',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '100+', label: 'Inspeções' },
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Funcionários Treinados' },
          { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Cobertura' },
        ],
      },
      {
        title: 'Bombeiro Civil',
        company: 'Grupo Boticário',
        period: '2018 - 2019',
        type: 'Bombeiro',
        badgeColor: 'bg-red-500',
        iconColor: 'text-red-500',
        description: 'Supervisão de segurança e prevenção de incêndios em ambiente industrial.',
        achievements: [
          'Gestão de equipamentos de combate a incêndio',
          'Treinamento de funcionários',
          'Elaboração de procedimentos de emergência',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '50+', label: 'Procedimentos' },
          { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Pessoas Treinadas' },
          { icon: <Clock className="h-5 w-5" />, value: '99%', label: 'Uptime' },
        ],
      },
      {
        title: 'Bombeiro Civil',
        company: 'Shopping Brisamar',
        period: '2019 - 2022',
        type: 'Bombeiro',
        badgeColor: 'bg-red-500',
        iconColor: 'text-red-500',
        description: 'Atendimento a emergências e prevenção em ambiente de shopping center.',
        achievements: [
          'Atendimento pré-hospitalar ao público',
          'Prevenção e combate a incêndios',
          'Treinamento de lojistas',
        ],
        metrics: [
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Atendimentos' },
          { icon: <Shield className="h-5 w-5" />, value: '150+', label: 'Inspeções' },
          { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Disponibilidade' },
        ],
      },
    ],
    ti: [
      {
        title: 'Analista de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Janeiro 2024 - Presente',
        type: 'TI',
        badgeColor: 'bg-blue-500',
        iconColor: 'text-blue-500',
        description: 'Analista da equipe de TI, Suporte N2 e infraestrutura.',
        achievements: [
          'Suporte N2 na equipe de TI',
          'Apoio na Implementação de sistemas de rede e segurança',
          'Gerenciamento e direcionamento dos Chamados para os Auxiliares e Assistentes de T.I',
        ],
        metrics: [
          { icon: <Clock className="h-5 w-5" />, value: '30%', label: 'Redução de Tempo' },
          { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Usuários' },
          { icon: <Coffee className="h-5 w-5" />, value: '24/7', label: 'Suporte' },
        ],
      },
      {
        title: 'Assistente de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Outubro 2023 - Janeiro 2024',
        type: 'TI',
        badgeColor: 'bg-blue-500',
        iconColor: 'text-blue-500',
        description:
          'Apoio na Modernização e implementação de sistemas de segurança e infraestrutura.',
        achievements: [
          'Apoio na Modernização do sistema CFTV (+40% cobertura)',
          'Implementação de controle de inventário',
          'Redução de 30% no tempo de resposta',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '40%', label: 'Aumento CFTV' },
          { icon: <Clock className="h-5 w-5" />, value: '30%', label: 'Redução Tempo' },
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Usuários' },
        ],
      },
      {
        title: 'Analista de Suporte Júnior',
        company: 'Cruz Azul',
        period: 'Outubro 2022 - Outubro 2023',
        type: 'TI',
        badgeColor: 'bg-blue-500',
        iconColor: 'text-blue-500',
        description: 'Suporte técnico ao ERP TOTVS e administração de sistemas.',
        achievements: [
          'Suporte técnico ao ERP TOTVS',
          'Administração de Active Directory',
          'Manutenção preventiva de infraestrutura',
        ],
        metrics: [
          { icon: <Users className="h-5 w-5" />, value: '100+', label: 'Usuários' },
          { icon: <Clock className="h-5 w-5" />, value: '95%', label: 'SLA' },
          { icon: <Coffee className="h-5 w-5" />, value: '8/5', label: 'Suporte' },
        ],
      },
      {
        title: 'Especialista em Reparo',
        company: 'Device Now - Soluções e Tecnologia',
        period: '2013 - 2023',
        type: 'TI',
        badgeColor: 'bg-blue-500',
        iconColor: 'text-blue-500',
        description: 'Especialista autônomo em reparos eletrônicos e soluções de software.',
        achievements: [
          'Reparo de placas eletrônicas',
          'Implementação de sistemas operacionais',
          'Desenvolvimento de soluções personalizadas',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '100+', label: 'Reparos' },
          { icon: <Users className="h-5 w-5" />, value: '50+', label: 'Clientes' },
          { icon: <Clock className="h-5 w-5" />, value: 'Flex', label: 'Horário' },
        ],
      },
    ],
  };

  const ExperienceCard = ({ exp }) => (
    <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-neutral-600">
      <CardContent className="p-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge className={`${exp.badgeColor} text-white`}>{exp.type}</Badge>
              <Badge variant="outline" className="border-neutral-600">
                {exp.period}
              </Badge>
            </div>
            <h3 className="mb-1 text-xl font-semibold text-gray-100">{exp.title}</h3>
            <p className={exp.iconColor}>{exp.company}</p>
          </div>
          <Briefcase className={`h-6 w-6 ${exp.iconColor}`} />
        </div>

        <p className="mb-6 text-gray-300">{exp.description}</p>

        <div className="mb-6 grid grid-cols-3 gap-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className={exp.iconColor}>{metric.icon}</div>
              <div className="font-bold text-gray-100">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300">
              <ChevronRight className={`h-4 w-4 ${exp.iconColor}`} />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Experiência Profissional
          </h1>
          <p className="text-xl text-gray-300">Bombeiro Civil Profissional & Analista de TI</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-neutral-600"
              >
                <CardContent className="p-4 text-center">
                  <div className={`mb-2 ${stat.colorClass}`}>{stat.icon}</div>
                  <div className="mb-1 text-2xl font-bold text-gray-100">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">Todas Experiências</TabsTrigger>
            <TabsTrigger value="bombeiro">Bombeiro Civil</TabsTrigger>
            <TabsTrigger value="ti">Tecnologia</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              {[...experience.bombeiro, ...experience.ti]
                .sort(
                  (a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                )
                .map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="bombeiro">
            <div className="space-y-6">
              {experience.bombeiro.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ti">
            <div className="space-y-6">
              {experience.ti.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExperiencePage;
