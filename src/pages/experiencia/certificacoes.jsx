import React from 'react';
import { motion } from 'framer-motion';
import { School, Cloud, Code, BookOpen, Cpu, Network } from 'lucide-react';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Dados de Educação
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
        icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
        color: 'text-orange-400',
      },
      {
        title: 'Google Cloud Associate Engineer (GCP)',
        institution: 'Google Cloud',
        date: '2023',
        icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Compute Engine', 'Cloud Storage', 'Kubernetes', 'Cloud Functions'],
        color: 'text-blue-400',
      },
      {
        title: 'Microsoft Azure Data Fundamentals (DP-900)',
        institution: 'Microsoft',
        date: '2023',
        icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Azure SQL', 'Cosmos DB', 'Data Lake', 'Power BI'],
        color: 'text-cyan-400',
      },
      {
        title: 'Google Cloud Fundamentals',
        institution: 'Google Cloud',
        date: '2023',
        icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Core Infrastructure', 'Cloud Security', 'Networking', 'Cloud Storage'],
        color: 'text-blue-400',
      },
    ],
    development: [
      {
        title: 'Desenvolvimento Full Stack',
        institution: 'Curso Especializado',
        date: '2023',
        icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['React', 'Node.js', 'TypeScript', 'Next.js'],
        color: 'text-green-400',
      },
      {
        title: 'Oracle SQL Developer',
        institution: 'Oracle e UNIBR',
        date: '2023',
        icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['SQL', 'PL/SQL', 'Database Design', 'Performance Tuning'],
        color: 'text-red-400',
      },
      {
        title: 'Desenvolvimento Web',
        institution: 'DIO',
        date: '2023',
        icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        color: 'text-yellow-400',
      },
      {
        title: 'Programação Básica',
        institution: 'UNIBR e Udemy',
        date: '2023',
        icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Lógica de Programação', 'Python', 'C', 'Algoritmos'],
        color: 'text-green-400',
      },
    ],
    ai: [
      {
        title: 'Ciência de Dados 3.0',
        institution: 'Data Science Academy',
        date: '2023',
        icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'Big Data'],
        color: 'text-purple-400',
      },
      {
        title: 'Engenharia de Prompts na AWS',
        institution: 'Nexa',
        date: '2023',
        icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Claude AI', 'GPT', 'Prompt Engineering', 'AI Integration'],
        color: 'text-yellow-400',
      },
      {
        title: 'CC50 - Ciência da Computação',
        institution: 'Harvard/Fundação Estudar',
        date: '2023',
        icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Algoritmos', 'Estrutura de Dados', 'C', 'Python'],
        color: 'text-blue-400',
      },
    ],
    tech: [
      {
        title: 'Reparo em Circuitos Eletrônicos',
        institution: 'MasterNet',
        date: '2023',
        icon: <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Placas Eletrônicas', 'Circuitos', 'Reparo Avançado', 'Diagnóstico'],
        color: 'text-red-400',
      },
      {
        title: 'IT Service Management',
        institution: 'Udemy',
        date: '2023',
        icon: <Network className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['ITSM', 'GSTI', 'Gestão de Serviços', 'Processos'],
        color: 'text-green-400',
      },
      {
        title: 'Sistemas e Redes',
        institution: 'UNIBR',
        date: '2023',
        icon: <Network className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Sistemas Operacionais', 'Redes', 'Infraestrutura', 'Segurança'],
        color: 'text-blue-400',
      },
      {
        title: 'Microsoft Excel Avançado',
        institution: 'Udemy',
        date: '2023',
        icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
        skills: ['Fórmulas Avançadas', 'Macros', 'VBA', 'Dashboard'],
        color: 'text-green-400',
      },
    ],
  },
};

// Componente Card de Certificação
const CertificationCard = ({ cert }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
    <Card>
      <CardContent>
        <div className="mb-2 flex flex-col gap-2 sm:mb-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className={`${cert.color} mt-0.5`}>{cert.icon}</div>
            <div>
              <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                {cert.title}
              </h3>
              <p className="text-xs text-cyan-100/60 sm:text-sm">{cert.institution}</p>
            </div>
          </div>
          <Badge variant="secondary" className="self-start whitespace-nowrap">
            {cert.date}
          </Badge>
        </div>

        <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
          {cert.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
// Seção Acadêmica
const AcademicSection = ({ academic }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-6 sm:mb-8"
  >
    <Card>
      <CardContent>
        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <School className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                {academic.title}
              </h2>
              <p className="text-xs text-cyan-100/60 sm:text-sm lg:text-base">
                {academic.institution}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="self-start whitespace-nowrap sm:self-center">
            {academic.status}
          </Badge>
        </div>

        <p className="mb-3 text-xs text-cyan-100/60 sm:mb-4 sm:text-sm lg:text-base">
          {academic.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {academic.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.section>
);

// Seção de Certificações
const CertificationsSection = ({ certifications }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <Tabs defaultValue="cloud" className="w-full">
      <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0">
        <TabsList className="mb-4 flex w-full justify-start gap-2 bg-transparent sm:mb-6 sm:justify-center">
          {[
            { value: 'cloud', label: 'Cloud Computing' },
            { value: 'development', label: 'Desenvolvimento' },
            { value: 'ai', label: 'IA & Data Science' },
            { value: 'tech', label: 'Tecnologia' },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'min-w-[100px] whitespace-nowrap border border-cyan-500/20 bg-[#0A0F1E]/95',
                'px-2 py-1.5 text-xs backdrop-blur-xl',
                'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400',
                'sm:min-w-[120px] sm:px-3 sm:py-2 sm:text-sm lg:min-w-[150px]'
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className="mt-4 sm:mt-6">
        {Object.entries(certifications).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {items.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  </motion.section>
);

// Componente Principal
const FormacaoPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl">
        <PageHeader
          overline="Desenvolvimento Profissional"
          title="Formação Acadêmica"
          description="Aprendizado contínuo e especialização em tecnologias modernas"
        />

        <div className="space-y-8">
          <AcademicSection academic={education.academic} />
          <CertificationsSection certifications={education.certifications} />
        </div>
      </div>
    </PageLayout>
  );
};

export default FormacaoPage;
