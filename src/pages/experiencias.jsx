import React from 'react';
import { Code, Shield, Award, Clock, Users, Coffee, ChevronRight, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperiencePage = () => {
  const stats = [
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '3+',
      label: 'Anos como Bombeiro',
    },
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '3+',
      label: 'Anos em TI',
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '500+',
      label: 'Pessoas Impactadas',
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '15+',
      label: 'Cursos e Certificados',
    },
  ];

  const experience = {
    bombeiro: [
      {
        title: 'Bombeiro Civil',
        company: 'Bracell',
        period: '2022 - 2022',
        type: 'Bombeiro',
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
    <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Badge className="bg-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/30 sm:text-sm">
                {exp.type}
              </Badge>
              <Badge
                variant="outline"
                className="border-cyan-500/20 text-xs text-cyan-400 sm:text-sm"
              >
                {exp.period}
              </Badge>
            </div>
            <h3 className="text-base font-semibold text-white sm:text-lg">{exp.title}</h3>
            <p className="text-sm text-cyan-400 sm:text-base">{exp.company}</p>
          </div>
          <Briefcase className="hidden h-4 w-4 text-cyan-400 sm:block sm:h-5 sm:w-5" />
        </div>

        <p className="mb-3 text-xs text-cyan-100/60 sm:mb-4 sm:text-sm">{exp.description}</p>

        <div className="mb-3 grid grid-cols-3 gap-2 border-y border-cyan-500/20 py-3 sm:mb-4 sm:py-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-1 text-center">
              <div className="text-cyan-400">{metric.icon}</div>
              <div className="text-xs font-semibold text-white sm:text-sm">{metric.value}</div>
              <div className="text-[10px] text-cyan-100/60 sm:text-xs">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-1.5 sm:gap-2">
              <ChevronRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-cyan-400 sm:h-4 sm:w-4" />
              <span className="text-xs text-cyan-100/60 sm:text-sm">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <div className="text-center">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                  Portfólio Profissional
                </h2>
                <h1 className="font-display mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent sm:mt-3 sm:text-3xl lg:mt-4 lg:text-4xl xl:text-5xl">
                  Experiência Profissional
                </h1>
                <p className="mx-auto mt-2 max-w-2xl text-sm text-cyan-100/60 sm:mt-3 sm:text-base lg:mt-4 lg:text-lg">
                  Bombeiro Civil Profissional & Analista de TI
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3 lg:mt-12 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
                  >
                    <CardContent className="flex flex-col items-center gap-1.5 p-2 text-center sm:gap-2 sm:p-3 lg:p-4">
                      <div className="text-cyan-400">{stat.icon}</div>
                      <div className="text-base font-bold text-white sm:text-lg lg:text-xl xl:text-2xl">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-cyan-100/60 sm:text-xs lg:text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Experience Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0">
                <TabsList className="mb-6 flex w-full justify-start gap-2 bg-transparent p-0 sm:mb-8 sm:justify-center">
                  <TabsTrigger
                    value="all"
                    className="min-w-[100px] whitespace-nowrap border border-cyan-500/20 bg-[#0A0F1E]/95 px-3 py-1.5 text-xs backdrop-blur-xl transition-all duration-300 data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm lg:min-w-[150px]"
                  >
                    Todas Experiências
                  </TabsTrigger>
                  <TabsTrigger
                    value="bombeiro"
                    className="min-w-[100px] whitespace-nowrap border border-cyan-500/20 bg-[#0A0F1E]/95 px-3 py-1.5 text-xs backdrop-blur-xl transition-all duration-300 data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm lg:min-w-[150px]"
                  >
                    Bombeiro Civil
                  </TabsTrigger>
                  <TabsTrigger
                    value="ti"
                    className="min-w-[100px] whitespace-nowrap border border-cyan-500/20 bg-[#0A0F1E]/95 px-3 py-1.5 text-xs backdrop-blur-xl transition-all duration-300 data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 sm:min-w-[120px] sm:px-4 sm:py-2 sm:text-sm lg:min-w-[150px]"
                  >
                    Tecnologia
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="mt-4 sm:mt-6">
                <TabsContent value="all">
                  <div className="space-y-3 sm:space-y-4">
                    {[...experience.bombeiro, ...experience.ti]
                      .sort(
                        (a, b) =>
                          new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                      )
                      .map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="bombeiro">
                  <div className="space-y-3 sm:space-y-4">
                    {experience.bombeiro.map((exp, index) => (
                      <ExperienceCard key={index} exp={exp} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ti">
                  <div className="space-y-3 sm:space-y-4">
                    {experience.ti.map((exp, index) => (
                      <ExperienceCard key={index} exp={exp} />
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExperiencePage;
