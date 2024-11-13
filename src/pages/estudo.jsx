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
        icon: <School className="h-6 w-6" />,
      },
    ],
    cloud: [
      {
        title: 'AWS Amazon Cloud Computing',
        institution: 'Amazon Web Services',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Google Cloud Associate Engineer (GCP)',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Microsoft Azure Data Fundamentals (DP-900)',
        institution: 'Microsoft',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Google Cloud Fundamentals: Core Infrastructure',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
    ],
    development: [
      {
        title: 'Programação em C e JavaScript',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Oracle SQL',
        institution: 'Oracle',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'HTML5 e CSS3',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Sistemas Operacionais e Redes',
        institution: 'Curso Técnico',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Supabase',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
    ],
    ai: [
      {
        title: 'Ciência de Dados 3.0',
        institution: 'Data Science Academy',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Engenharia de Prompts na AWS com Claude',
        institution: 'AWS',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'CC50 - Introdução à Ciência da Computação',
        institution: 'Harvard/Fundação Estudar',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
    management: [
      {
        title: 'IT Service Management (ITSM/GSTI)',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: 'Gestão de Projetos em TI',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
          Formação Acadêmica e Certificações
        </h1>
        <p className="text-xl text-gray-300">
          Desenvolvimento contínuo e aprendizado em tecnologia
        </p>
      </div>

      {/* Academic Education Section */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-100">
          <BookOpen className="h-6 w-6" />
          Formação Acadêmica
        </h2>
        <div className="grid gap-6">
          {education.academic.map((item, index) => (
            <Card key={index} className="border-neutral-700 bg-neutral-800">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary">{item.type}</Badge>
                  <Badge variant="outline">Em Andamento</Badge>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                </div>
                <p className="mb-2 text-gray-400">{item.institution}</p>
                <p className="mb-4 text-gray-500">{item.status}</p>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-gray-100">
          <BookOpen className="h-6 w-6" />
          Certificações e Cursos
        </h2>
        <Tabs defaultValue="cloud" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="cloud">Cloud Computing</TabsTrigger>
            <TabsTrigger value="development">Desenvolvimento</TabsTrigger>
            <TabsTrigger value="ai">IA & Data Science</TabsTrigger>
            <TabsTrigger value="management">Gestão de TI</TabsTrigger>
          </TabsList>

          {Object.entries(education)
            .filter(([key]) => key !== 'academic')
            .map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item, index) => (
                    <Card key={index} className="border-neutral-700 bg-neutral-800">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <h3 className="font-semibold text-gray-100">{item.title}</h3>
                          </div>
                          <Badge variant="secondary">{item.status}</Badge>
                        </div>
                        <p className="text-gray-400">{item.institution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
        </Tabs>
      </section>
    </div>
  );
};

export default StudiesPage;
