import React from 'react';
import DownloadCV from '@/components/shared/DownloadCV';
import { Code, Github, Star, BookOpen, Clock, Users, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TechPage = () => {
  const skills = {
    cloud: [
      { name: 'AWS Amazon Cloud Computing', level: 80 },
      { name: 'Google Cloud Associate Engineer (GCP)', level: 75 },
      { name: 'Microsoft Azure Data Fundamentals (DP-900)', level: 70 },
      { name: 'Google Cloud Fundamentals: Core Infrastructure', level: 85 },
    ],
    development: [
      { name: 'Programação em C e JavaScript', level: 75 },
      { name: 'Oracle SQL', level: 80 },
      { name: 'HTML5 e CSS3', level: 90 },
      { name: 'Sistemas Operacionais e Redes', level: 85 },
      { name: 'Supabase', level: 70 },
    ],
    ai: [
      { name: 'Ciência de Dados 3.0 - Data Science Academy', level: 75 },
      { name: 'Engenharia de Prompts na AWS com Claude', level: 80 },
      { name: 'CC50 - Introdução à Ciência da Computação', level: 85 },
    ],
    management: [
      { name: 'IT Service Management (ITSM/GSTI)', level: 90 },
      { name: 'Gestão de Projetos em TI', level: 85 },
    ],
  };

  const projects = [
    {
      title: 'Modernização do Sistema de CFTV',
      description:
        'Modernização do sistema de CFTV no Colégio Jean Piaget, aumentando a cobertura em 40%.',
      tech: ['CFTV', 'Segurança', 'Infraestrutura'],
      status: 'Concluído',
      metrics: [
        { icon: <Clock />, value: '40%', label: 'Aumento de Cobertura' },
        { icon: <Users />, value: '1000+', label: 'Alunos Beneficiados' },
        { icon: <Coffee />, value: '24/7', label: 'Monitoramento' },
      ],
    },
    {
      title: 'Sistema de Controle de Inventário de TI',
      description:
        'Implementação de sistema de controle de inventário de TI no Colégio Jean Piaget.',
      tech: ['Inventário', 'Gestão de Ativos', 'Automação'],
      status: 'Em Produção',
      metrics: [
        { icon: <Users />, value: '50+', label: 'Dispositivos Gerenciados' },
        { icon: <Coffee />, value: '30%', label: 'Redução de Tempo' },
        { icon: <Clock />, value: '99%', label: 'Precisão do Inventário' },
      ],
    },
  ];

  const experience = [
    {
      title: 'Analista de TI',
      company: 'Colégio Jean Piaget - Santos',
      period: 'Janeiro 2024 - Presente',
      description:
        'Liderança e gestão da equipe de TI, implementação e manutenção de sistemas de rede e segurança, desenvolvimento de processos para otimização do suporte técnico, gestão do parque tecnológico e gerenciamento dos chamados técnicos.',
    },
    {
      title: 'Assistente de TI',
      company: 'Colégio Jean Piaget - Santos',
      period: 'Outubro 2023 - Janeiro 2024',
      description:
        'Modernização do sistema de CFTV, implementação de sistema de controle de inventário de TI e redução do tempo de resposta para chamados técnicos.',
    },
    {
      title: 'Analista de Suporte Júnior (Estágio)',
      company: 'Cruz Azul',
      period: 'Outubro 2022 - Outubro 2023',
      description:
        'Suporte técnico ao ERP TOTVS, administração de Active Directory e sistema RM, manutenção preventiva da infraestrutura de TI.',
    },
    {
      title: 'Especialista em Reparo de Placas Eletrônicas',
      company: 'Device Now - Soluções e Tecnologia',
      period: 'Autônomo',
      description:
        'Especialista em reparo de placas eletrônicas, implementação de sistemas operacionais e soluções de software.',
    },
  ];

  const education = [
    {
      type: 'Graduação',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UNIBR - Faculdade de São Vicente',
      period: 'Em andamento - 5º Semestre',
      description:
        'Curso focado no desenvolvimento de sistemas e aplicações, abrangendo disciplinas como programação, banco de dados, engenharia de software e gerenciamento de projetos.',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 text-gray-100">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Experiência em Tecnologia
        </h1>
        <p className="text-xl text-gray-300">
          Analista de TI | Infraestrutura com foco em soluções inovadoras e eficientes
        </p>
      </div>
      <div className="ml-4">
        <DownloadCV area="tecnologia" />
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Habilidades Técnicas</h2>
        <Tabs defaultValue="cloud" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="cloud">Cloud & Infraestrutura</TabsTrigger>
            <TabsTrigger value="development">Desenvolvimento & Banco de Dados</TabsTrigger>
            <TabsTrigger value="ai">Inteligência Artificial & Data Science</TabsTrigger>
            <TabsTrigger value="management">Gestão de TI</TabsTrigger>
          </TabsList>
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-4">
                {items.map((skill, index) => (
                  <div key={index} className="rounded-lg bg-neutral-800 p-4">
                    <div className="mb-2 flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Projetos em Destaque</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="border-neutral-700 bg-neutral-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="secondary">{project.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mb-4 grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="mb-1 text-blue-400">{metric.icon}</div>
                      <div className="font-bold">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Experiência Profissional</h2>
        <div className="grid gap-6">
          {experience.map((item, index) => (
            <Card key={index} className="border-neutral-700 bg-neutral-800">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="mb-2 text-gray-400">{item.company}</p>
                <p className="mb-4 text-gray-500">{item.period}</p>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Formação Acadêmica</h2>
        <div className="grid gap-6">
          {education.map((item, index) => (
            <Card key={index} className="border-neutral-700 bg-neutral-800">
              <CardContent className="p-6">
                <Badge className="mb-4">{item.type}</Badge>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="mb-2 text-gray-400">{item.institution}</p>
                <p className="mb-4 text-gray-500">{item.period}</p>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <Card className="border-neutral-700 bg-neutral-800">
        <CardContent className="p-6">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
            <Github className="h-6 w-6" />
            GitHub Stats
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: <Star />, value: '50+', label: 'Stars' },
              { icon: <Code />, value: '1k+', label: 'Commits' },
              { icon: <BookOpen />, value: '10+', label: 'Repositórios' },
              { icon: <Users />, value: '20+', label: 'Contribuições' },
            ].map((stat, index) => (
              <Card key={index} className="border-none bg-neutral-700">
                <CardContent className="p-4 text-center">
                  <div className="mb-2 text-blue-400">{stat.icon}</div>
                  <div className="mb-1 text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechPage;
