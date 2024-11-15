// pages/formacao.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { School, Cloud, Code, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FormacaoPage = () => {
  const education = {
    academic: {
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UNIBR - Faculdade de São Vicente',
      status: 'Em andamento - 5º Semestre',
      description:
        'Curso focado no desenvolvimento de sistemas e aplicações, abrangendo disciplinas como programação, banco de dados, engenharia de software e gerenciamento de projetos.',
      skills: [
        'Programação Web',
        'Banco de Dados',
        'Engenharia de Software',
        'Desenvolvimento Mobile',
        'Arquitetura de Sistemas',
        'Gestão de Projetos',
      ],
    },
    certifications: {
      cloud: [
        {
          title: 'AWS Amazon Cloud Computing',
          institution: 'Amazon Web Services',
          date: '2023',
          icon: <Cloud className="h-5 w-5" />,
          skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
          color: 'text-orange-400',
        },
        {
          title: 'Google Cloud Associate Engineer (GCP)',
          institution: 'Google Cloud',
          date: '2023',
          icon: <Cloud className="h-5 w-5" />,
          skills: ['Compute Engine', 'Cloud Storage', 'Kubernetes', 'Cloud Functions'],
          color: 'text-blue-400',
        },
        {
          title: 'Microsoft Azure Data Fundamentals (DP-900)',
          institution: 'Microsoft',
          date: '2023',
          icon: <Cloud className="h-5 w-5" />,
          skills: ['Azure SQL', 'Cosmos DB', 'Data Lake', 'Power BI'],
          color: 'text-cyan-400',
        },
      ],
      development: [
        {
          title: 'Desenvolvimento Full Stack',
          institution: 'Curso Especializado',
          date: '2023',
          icon: <Code className="h-5 w-5" />,
          skills: ['React', 'Node.js', 'TypeScript', 'Next.js'],
          color: 'text-green-400',
        },
        {
          title: 'Oracle SQL Developer',
          institution: 'Oracle',
          date: '2023',
          icon: <Code className="h-5 w-5" />,
          skills: ['SQL', 'PL/SQL', 'Database Design', 'Performance Tuning'],
          color: 'text-red-400',
        },
      ],
      ai: [
        {
          title: 'Ciência de Dados 3.0',
          institution: 'Data Science Academy',
          date: '2023',
          icon: <BookOpen className="h-5 w-5" />,
          skills: ['Python', 'Machine Learning', 'Data Analysis', 'Big Data'],
          color: 'text-purple-400',
        },
        {
          title: 'Engenharia de Prompts',
          institution: 'AWS',
          date: '2023',
          icon: <BookOpen className="h-5 w-5" />,
          skills: ['Claude AI', 'GPT', 'Prompt Engineering', 'AI Integration'],
          color: 'text-yellow-400',
        },
      ],
    },
  };

  const CertificationCard = ({ cert }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
      <Card className="h-full border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`${cert.color}`}>{cert.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-cyan-100/60">{cert.institution}</p>
              </div>
            </div>
            <Badge className="bg-cyan-500/20 text-cyan-400">{cert.date}</Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {cert.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-cyan-500/20 text-cyan-100/60">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Desenvolvimento Profissional
              </h2>
              <h1 className="font-display mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                Formação Acadêmica
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                Aprendizado contínuo e especialização em tecnologias modernas
              </p>
            </motion.div>

            {/* Academic Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <School className="h-8 w-8 text-cyan-400" />
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {education.academic.title}
                        </h2>
                        <p className="text-cyan-100/60">{education.academic.institution}</p>
                      </div>
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-400">
                      {education.academic.status}
                    </Badge>
                  </div>

                  <p className="mb-6 text-cyan-100/60">{education.academic.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {education.academic.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-cyan-500/20 text-cyan-100/60"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Certifications Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Tabs defaultValue="cloud" className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-1 gap-4 bg-transparent sm:grid-cols-3">
                  {[
                    { value: 'cloud', label: 'Cloud Computing' },
                    { value: 'development', label: 'Desenvolvimento' },
                    { value: 'ai', label: 'IA & Data Science' },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="border border-cyan-500/20 bg-[#0A0F1E]/95 text-sm backdrop-blur-xl data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-6">
                  {Object.entries(education.certifications).map(([category, items]) => (
                    <TabsContent key={category} value={category}>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {items.map((cert, index) => (
                          <CertificationCard key={index} cert={cert} />
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FormacaoPage;
