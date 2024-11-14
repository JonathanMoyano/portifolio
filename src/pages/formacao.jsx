import React from 'react';
import { BookOpen, Cloud, Code, School } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StudiesPage = () => {
  const education = {
    academic: [
      {
        type: 'Graduação',
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'UNIBR - Faculdade de São Vicente',
        status: 'Em andamento - 5º Semestre',
        description:
          'Curso focado no desenvolvimento de sistemas e aplicações, abrangendo disciplinas como programação, banco de dados, engenharia de software e gerenciamento de projetos.',
        icon: <School className="h-5 w-5" />,
      },
    ],
    cloud: [
      {
        title: 'AWS Amazon Cloud Computing',
        institution: 'Amazon Web Services',
        status: 'Concluído',
        icon: <Cloud className="h-4 w-4" />,
      },
      {
        title: 'Google Cloud Associate Engineer (GCP)',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-4 w-4" />,
      },
      {
        title: 'Microsoft Azure Data Fundamentals (DP-900)',
        institution: 'Microsoft',
        status: 'Concluído',
        icon: <Cloud className="h-4 w-4" />,
      },
      {
        title: 'Google Cloud Fundamentals: Core Infrastructure',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-4 w-4" />,
      },
    ],
    development: [
      {
        title: 'Programação em C e JavaScript',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'Oracle SQL',
        institution: 'Oracle',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'HTML5 e CSS3',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'Sistemas Operacionais e Redes',
        institution: 'Curso Técnico',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'Supabase',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
    ],
    ai: [
      {
        title: 'Ciência de Dados 3.0',
        institution: 'Data Science Academy',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'Engenharia de Prompts na AWS com Claude',
        institution: 'AWS',
        status: 'Concluído',
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: 'CC50 - Introdução à Ciência da Computação',
        institution: 'Harvard/Fundação Estudar',
        status: 'Concluído',
        icon: <BookOpen className="h-4 w-4" />,
      },
    ],
    management: [
      {
        title: 'IT Service Management (ITSM/GSTI)',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: 'Gestão de Projetos em TI',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-4 w-4" />,
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-4 md:px-6 md:py-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          Formação Acadêmica e Certificações
        </h1>
        <p className="text-base text-neutral-400 sm:text-lg">
          Desenvolvimento contínuo e aprendizado em tecnologia
        </p>
      </div>

      {/* Academic Education Section */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-200 sm:text-2xl">
          <BookOpen className="h-5 w-5" />
          Formação Acadêmica
        </h2>
        <div className="grid gap-4">
          {education.academic.map((item, index) => (
            <Card key={index} className="border-neutral-800 bg-neutral-900">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <Badge className="bg-neutral-700 text-neutral-200 hover:bg-neutral-600">
                    {item.type}
                  </Badge>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400">
                    Em Andamento
                  </Badge>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  {item.icon}
                  <h3 className="text-base font-semibold text-neutral-200 sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-neutral-400 sm:text-base">{item.institution}</p>
                <p className="mt-1 text-sm text-neutral-500 sm:text-base">{item.status}</p>
                <p className="mt-3 text-sm text-neutral-400 sm:text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-200 sm:text-2xl">
          <BookOpen className="h-5 w-5" />
          Certificações e Cursos
        </h2>
        <Tabs defaultValue="cloud" className="w-full">
          <div className="relative w-full overflow-x-auto">
            <TabsList className="inline-flex w-full min-w-max space-x-2 bg-transparent p-0 sm:grid sm:grid-cols-4 sm:gap-2">
              <TabsTrigger
                value="cloud"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-neutral-700 sm:text-base"
              >
                Cloud Computing
              </TabsTrigger>
              <TabsTrigger
                value="development"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-neutral-700 sm:text-base"
              >
                Desenvolvimento
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-neutral-700 sm:text-base"
              >
                IA & Data Science
              </TabsTrigger>
              <TabsTrigger
                value="management"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-neutral-700 sm:text-base"
              >
                Gestão de TI
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-4">
            {Object.entries(education)
              .filter(([key]) => key !== 'academic')
              .map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {items.map((item, index) => (
                      <Card key={index} className="border-neutral-800 bg-neutral-900">
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                              {item.icon}
                              <h3 className="text-sm font-medium text-neutral-200 sm:text-base">
                                {item.title}
                              </h3>
                            </div>
                            <Badge className="w-fit bg-neutral-700 text-neutral-200 hover:bg-neutral-600">
                              {item.status}
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-neutral-400">{item.institution}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
          </div>
        </Tabs>
      </section>
    </div>
  );
};

export default StudiesPage;
