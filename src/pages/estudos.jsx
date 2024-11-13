import React from 'react';
import {
  Code,
  Cloud,
  Database,
  Brain,
  School,
  ChevronDown,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const StudiesPage = () => {
  const [openCategory, setOpenCategory] = React.useState(null);

  const educationCategories = {
    formal: {
      icon: School,
      title: 'Formação Acadêmica',
      items: [
        {
          title: 'Análise e Desenvolvimento de Sistemas',
          institution: 'UNIBR - Faculdade de São Vicente',
          period: 'Em andamento - 5º Semestre',
          description:
            'Curso focado no desenvolvimento de sistemas e aplicações, abrangendo disciplinas como programação, banco de dados, engenharia de software e gerenciamento de projetos.',
          type: 'Graduação',
        },
      ],
    },
    programming: {
      icon: Code,
      title: 'Linguagens de Programação',
      items: [
        {
          title: 'Programação em C',
          institution: 'Certificação Técnica',
          level: 'Intermediário',
        },
        {
          title: 'JavaScript',
          institution: 'Certificação Técnica',
          level: 'Intermediário',
        },
        {
          title: 'HTML5 e CSS3',
          institution: 'Certificação Técnica',
          level: 'Avançado',
        },
      ],
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud Computing',
      items: [
        {
          title: 'AWS Amazon Cloud Computing',
          institution: 'Amazon Web Services',
          level: 'Avançado',
        },
        {
          title: 'Google Cloud Associate Engineer (GCP)',
          institution: 'Google Cloud',
          level: 'Intermediário',
        },
        {
          title: 'Microsoft Azure Data Fundamentals (DP-900)',
          institution: 'Microsoft',
          level: 'Intermediário',
        },
        {
          title: 'Google Cloud Fundamentals: Core Infrastructure',
          institution: 'Google Cloud',
          level: 'Avançado',
        },
      ],
    },
    database: {
      icon: Database,
      title: 'Banco de Dados',
      items: [
        {
          title: 'Oracle SQL',
          institution: 'Oracle',
          level: 'Avançado',
        },
        {
          title: 'Supabase',
          institution: 'Certificação Técnica',
          level: 'Intermediário',
        },
      ],
    },
    ai: {
      icon: Brain,
      title: 'Inteligência Artificial & Data Science',
      items: [
        {
          title: 'Ciência de Dados 3.0',
          institution: 'Data Science Academy',
          level: 'Intermediário',
        },
        {
          title: 'Engenharia de Prompts na AWS com Claude',
          institution: 'AWS',
          level: 'Avançado',
        },
        {
          title: 'CC50 - Introdução à Ciência da Computação',
          institution: 'Harvard/USP',
          level: 'Intermediário',
        },
      ],
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 text-gray-100">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Formação Acadêmica e Certificações
        </h1>
        <p className="text-xl text-gray-300">Educação contínua e especialização em tecnologia</p>
      </div>

      {/* Education Categories */}
      <div className="grid gap-6">
        {Object.entries(educationCategories).map(([key, category]) => (
          <Collapsible
            key={key}
            open={openCategory === key}
            onOpenChange={() => setOpenCategory(openCategory === key ? null : key)}
          >
            <Card className="border-neutral-700 bg-neutral-800">
              <CardHeader className="p-6">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-blue-400" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  {openCategory === key ? (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="px-6 pb-6">
                  <div className="grid gap-4">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-neutral-700 bg-neutral-900 p-4"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.institution}</p>
                          </div>
                          {item.level && (
                            <Badge
                              className={`${
                                item.level === 'Avançado'
                                  ? 'bg-blue-500'
                                  : item.level === 'Intermediário'
                                    ? 'bg-cyan-600'
                                    : 'bg-gray-600'
                              }`}
                            >
                              {item.level}
                            </Badge>
                          )}
                        </div>
                        {item.period && <p className="text-sm text-gray-500">{item.period}</p>}
                        {item.description && (
                          <p className="mt-2 text-gray-300">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {/* Statistics Section */}
      <Card className="mt-12 border-neutral-700 bg-neutral-800">
        <CardContent className="p-6">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
            <BookOpen className="h-6 w-6" />
            Estatísticas de Aprendizado
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: '5+', label: 'Certificações Cloud' },
              { value: '3+', label: 'Linguagens Dominadas' },
              { value: '2+', label: 'Anos de Estudo' },
              { value: '10+', label: 'Cursos Concluídos' },
            ].map((stat, index) => (
              <Card key={index} className="border-none bg-neutral-700">
                <CardContent className="p-4 text-center">
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

export default StudiesPage;
