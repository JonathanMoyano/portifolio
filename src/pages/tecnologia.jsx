import React from 'react';
import DownloadCV from '@/components/shared/DownloadCV';
import {
  Code,
  Github,
  Star,
  BookOpen,
  Clock,
  Users,
  Coffee,
  ExternalLink,
  Building,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TechPage = () => {
  const projects = [
    {
      title: 'TROK! App',
      description:
        'Aplicativo para gestão de serviços e profissionais autônomos. Projeto premiado na 24ª Feira de Negócios UNIBR.',
      tech: ['React', 'Node.js', 'Supabase'],
      status: 'Em Desenvolvimento',
      metrics: [
        { icon: <Star />, value: '1º', label: 'Melhor Projeto' },
        { icon: <Users />, value: '100+', label: 'Usuários Beta' },
        { icon: <Coffee />, value: '24/7', label: 'Disponibilidade' },
      ],
      link: 'https://www.trok-servicos.com.br',
    },
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
      achievements: [
        'Redução de 30% no tempo de resposta dos chamados',
        'Implementação de sistema de monitoramento 24/7',
        'Modernização da infraestrutura de rede',
      ],
    },
    {
      title: 'Assistente de TI',
      company: 'Colégio Jean Piaget - Santos',
      period: 'Outubro 2023 - Janeiro 2024',
      description:
        'Modernização do sistema de CFTV, implementação de sistema de controle de inventário de TI e redução do tempo de resposta para chamados técnicos.',
      achievements: [
        'Aumento de 40% na cobertura do CFTV',
        'Implementação do sistema de inventário',
        'Otimização dos processos de suporte',
      ],
    },
    {
      title: 'Analista de Suporte Júnior (Estágio)',
      company: 'Cruz Azul',
      period: 'Outubro 2022 - Outubro 2023',
      description:
        'Suporte técnico ao ERP TOTVS, administração de Active Directory e sistema RM, manutenção preventiva da infraestrutura de TI.',
      achievements: [
        'Gestão do Active Directory',
        'Suporte ao ERP TOTVS',
        'Manutenção preventiva de TI',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Experiência em Tecnologia
          </h1>
          <p className="text-xl text-gray-300">
            Analista de TI | Infraestrutura e Desenvolvimento com foco em soluções inovadoras
          </p>
        </div>
        <div className="mb-12 text-center">
          <DownloadCV area="tecnologia" />
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center justify-center gap-2 text-center text-3xl font-bold text-gray-100">
            <BookOpen className="h-7 w-7 text-blue-500" />
            Projetos em Destaque
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500"
              >
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
                      <Badge key={i} variant="outline" className="border-blue-500 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mb-4 grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="mb-1 text-blue-500">{metric.icon}</div>
                        <div className="font-bold text-gray-100">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Visitar Projeto
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center justify-center gap-2 text-center text-3xl font-bold text-gray-100">
            <Building className="h-7 w-7 text-blue-500" />
            Experiência Profissional
          </h2>
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <Card
                key={index}
                className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500"
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-100">{item.title}</h3>
                      <p className="mb-2 text-blue-400">{item.company}</p>
                      <p className="mb-4 text-gray-500">{item.period}</p>
                    </div>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      {item.period.includes('Presente') ? 'Atual' : 'Concluído'}
                    </Badge>
                  </div>
                  <p className="mb-4 text-gray-300">{item.description}</p>
                  <div className="grid gap-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <Star className="h-4 w-4 text-blue-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Stats Section */}
        <Card className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500">
          <CardContent className="p-6">
            <h2 className="mb-8 flex items-center justify-center gap-2 text-center text-3xl font-bold text-gray-100">
              <Github className="h-7 w-7 text-blue-500" />
              GitHub Stats
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { icon: <Star />, value: '50+', label: 'Stars' },
                { icon: <Code />, value: '1k+', label: 'Commits' },
                { icon: <BookOpen />, value: '10+', label: 'Repositórios' },
                { icon: <Users />, value: '20+', label: 'Contribuições' },
              ].map((stat, index) => (
                <Card key={index} className="border-none bg-neutral-700/50">
                  <CardContent className="p-4 text-center">
                    <div className="mb-2 text-blue-500">{stat.icon}</div>
                    <div className="mb-1 text-2xl font-bold text-gray-100">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechPage;
