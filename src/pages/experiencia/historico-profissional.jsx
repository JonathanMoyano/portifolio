import React from 'react';
import {
  Code,
  Shield,
  Award,
  Clock,
  Users,
  Coffee,
  ChevronRight,
  Briefcase,
  Brain,
  Network,
  Lock,
  Terminal,
  Server,
  Settings,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperiencePage = () => {
  // Pontos fortes - principais características profissionais
  const strengths = [
    {
      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Resolução de Problemas',
      description:
        'Capacidade analítica e pensamento estruturado para solucionar desafios complexos',
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Liderança de Equipe',
      description: 'Experiência em gestão de equipes técnicas e coordenação de projetos',
    },
    {
      icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Gestão de Infraestrutura',
      description: 'Expertise em manutenção e otimização de ambientes tecnológicos',
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Gestão de Crises',
      description: 'Background em situações de emergência como bombeiro civil',
    },
  ];

  // Habilidades técnicas organizadas por categoria
  const skills = [
    {
      category: 'Infraestrutura',
      icon: <Server className="h-5 w-5" />,
      items: ['Redes', 'Servidores Windows', 'Active Directory', 'Sistemas de CFTV'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Network className="h-5 w-5" />,
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    },
    {
      category: 'Desenvolvimento',
      icon: <Terminal className="h-5 w-5" />,
      items: ['JavaScript', 'Next.js', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Segurança',
      icon: <Lock className="h-5 w-5" />,
      items: ['Backup', 'Controle de Acesso', 'Políticas de Segurança'],
    },
  ];

  // Estatísticas gerais
  const stats = [
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '3+',
      label: 'Anos em TI',
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '15+',
      label: 'Certificações',
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '500+',
      label: 'Usuários Atendidos',
    },
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '50+',
      label: 'Projetos Entregues',
    },
  ];
  // Experiência profissional
  const experience = {
    // Histórico como Bombeiro Civil
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
      {
        title: 'Bombeiro Civil',
        company: 'Grupo Boticário',
        period: '2018 - 2019',
        type: 'Bombeiro',
        description:
          'Implantação e supervisão dos serviços de bombeiro civil na unidade de Registro.',
        achievements: [
          'Implantação do serviço de bombeiros civis na unidade',
          'Gestão de equipamentos de combate a incêndio',
          'Treinamento de funcionários em brigadas',
          'Elaboração de procedimentos de emergência',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '50+', label: 'Procedimentos' },
          { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Pessoas Treinadas' },
          { icon: <Clock className="h-5 w-5" />, value: '99%', label: 'Uptime' },
        ],
      },
    ],
    // Histórico em TI
    ti: [
      {
        title: 'Analista de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Janeiro 2024 - Presente',
        type: 'TI',
        description: 'Liderança da equipe de TI e gestão da infraestrutura tecnológica.',
        achievements: [
          'Liderança e gestão da equipe de TI',
          'Implementação de sistemas de rede e segurança',
          'Desenvolvimento de processos para otimização do suporte',
          'Gestão do parque tecnológico',
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
        description: 'Modernização e implementação de sistemas de segurança e infraestrutura.',
        achievements: [
          'Modernização do sistema CFTV (+40% cobertura)',
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
          'Administração de Active Directory e sistema RM',
          'Manutenção preventiva da infraestrutura de TI',
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

  // Componente para card de experiência
  const ExperienceCard = ({ exp }) => (
    <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
      <CardContent className="p-4 sm:p-6">
        {/* Cabeçalho do card */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-cyan-500/20 text-cyan-400">{exp.type}</Badge>
              <Badge variant="outline" className="border-cyan-500/20 text-cyan-400">
                {exp.period}
              </Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-cyan-400">{exp.company}</p>
          </div>
          <Briefcase className="h-5 w-5 text-cyan-400" />
        </div>

        {/* Descrição */}
        <p className="mb-4 text-sm text-cyan-100/60">{exp.description}</p>

        {/* Métricas */}
        <div className="mb-4 grid grid-cols-3 gap-4 border-y border-cyan-500/20 py-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-cyan-400">{metric.icon}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.value}</div>
              <div className="text-xs text-cyan-100/60">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Realizações */}
        <div className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-100/60">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      {/* Background com efeito matrix */}
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-6xl">
            {/* Cabeçalho da página */}
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Portfólio Profissional
              </h2>
              <h1 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                Experiência Profissional
              </h1>
              <p className="mt-2 text-sm text-cyan-100/60 sm:text-base lg:text-lg">
                Analista de TI & Infraestrutura
              </p>
            </div>

            {/* Sistema de tabs */}
            <Tabs defaultValue="overview" className="w-full">
              {/* Navegação das tabs */}
              <TabsList className="mb-6 flex w-full justify-start gap-2 overflow-x-auto bg-transparent sm:justify-center">
                <TabsTrigger
                  value="overview"
                  className="border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all duration-300 data-[state=active]:bg-cyan-500/20"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all duration-300 data-[state=active]:bg-cyan-500/20"
                >
                  Habilidades
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all duration-300 data-[state=active]:bg-cyan-500/20"
                >
                  Todas Experiências
                </TabsTrigger>
                <TabsTrigger
                  value="ti"
                  className="border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all duration-300 data-[state=active]:bg-cyan-500/20"
                >
                  TI
                </TabsTrigger>
                <TabsTrigger
                  value="bombeiro"
                  className="border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all duration-300 data-[state=active]:bg-cyan-500/20"
                >
                  Bombeiro Civil
                </TabsTrigger>
              </TabsList>

              {/* Conteúdo das tabs */}
              {/* Visão Geral */}
              <TabsContent value="overview">
                <div className="space-y-6">
                  {/* Grid de pontos fortes */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {strengths.map((strength, index) => (
                      <Card key={index} className="border-cyan-500/20 bg-[#0A0F1E]/95">
                        <CardContent className="p-4">
                          <div className="mb-3 text-cyan-400">{strength.icon}</div>
                          <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
                            {strength.title}
                          </h3>
                          <p className="text-xs text-cyan-100/60 sm:text-sm">
                            {strength.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Estatísticas gerais */}
                  <div className="grid gap-4 sm:grid-cols-4">
                    {stats.map((stat, index) => (
                      <Card key={index} className="border-cyan-500/20 bg-[#0A0F1E]/95">
                        <CardContent className="p-4 text-center">
                          <div className="text-cyan-400">{stat.icon}</div>
                          <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-cyan-100/60">{stat.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Habilidades */}
              <TabsContent value="skills">
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skillGroup, index) => (
                    <Card key={index} className="border-cyan-500/20 bg-[#0A0F1E]/95">
                      <CardContent className="p-4">
                        <div className="mb-4 flex items-center gap-2">
                          <div className="text-cyan-400">{skillGroup.icon}</div>
                          <h3 className="text-lg font-semibold text-white">
                            {skillGroup.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge key={skillIndex} className="bg-cyan-500/20 text-cyan-400">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Todas as Experiências */}
              <TabsContent value="all">
                <div className="space-y-8">
                  {/* Experiências em TI */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Experiência em TI</h3>
                    {experience.ti.map((exp, index) => (
                      <ExperienceCard key={index} exp={exp} />
                    ))}
                  </div>

                  {/* Experiências como Bombeiro */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                      Experiência como Bombeiro Civil
                    </h3>
                    {experience.bombeiro.map((exp, index) => (
                      <ExperienceCard key={index} exp={exp} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Apenas TI */}
              <TabsContent value="ti">
                <div className="space-y-4">
                  {experience.ti.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                  ))}
                </div>
              </TabsContent>

              {/* Apenas Bombeiro */}
              <TabsContent value="bombeiro">
                <div className="space-y-4">
                  {experience.bombeiro.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExperiencePage;
