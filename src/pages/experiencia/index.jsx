import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  School,
  GraduationCap,
  Award,
  BookOpen,
  FileCheck,
  Download,
  BookOpenCheck,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Dados das seções
const sections = [
  {
    title: 'Formação Acadêmica',
    titleEn: 'Academic Education',
    description: 'Graduação em Análise e Desenvolvimento de Sistemas e histórico acadêmico.',
    icon: <School className="h-5 w-5" />,
    href: '/formacao/academica',
    gradient: 'from-blue-500 to-cyan-500',
    highlights: [
      'UNIBR - Faculdade de São Vicente',
      '5º Semestre em andamento',
      'Foco em desenvolvimento de sistemas',
    ],
  },
  {
    title: 'Cursos de Certificações Cloud',
    titleEn: 'Cloud Certifications',
    description: 'Especializações e certificações em computação em nuvem.',
    icon: <Award className="h-5 w-5" />,
    href: '/formacao/certificacoes',
    gradient: 'from-cyan-500 to-green-500',
    highlights: [
      'AWS Amazon Cloud Computing',
      'Google Cloud Associate Engineer',
      'Microsoft Azure Data Fundamentals (DP-900)',
      'Google Cloud Fundamentals: Core Infrastructure',
    ],
  },
  {
    title: 'Desenvolvimento',
    titleEn: 'Development',
    description: 'Cursos e certificações em desenvolvimento de software.',
    icon: <FileCheck className="h-5 w-5" />,
    href: '/formacao/desenvolvimento',
    gradient: 'from-green-500 to-yellow-500',
    highlights: [
      'Linguagem de Programação C - UNIBR e UNIP',
      'Linguagem de Programação Python - Udemy',
      'Lógica de Programação - Udemy',
      'HTML5 e CSS3 - DIO',
    ],
  },
  {
    title: 'AI & Data Science',
    titleEn: 'AI & Data Science',
    description: 'Formação em Inteligência Artificial e Ciência de Dados.',
    icon: <BookOpen className="h-5 w-5" />,
    href: '/formacao/ai-data-science',
    gradient: 'from-yellow-500 to-purple-500',
    highlights: [
      'Ciência de Dados 3.0 - Data Science Academy',
      'Engenharia de Prompts na AWS com Claude - Nexa',
      'Formação Fundamentos de IA',
      'CC50 - Introdução à Ciência da Computação',
    ],
  },
  {
    title: 'Cursos Complementares',
    titleEn: 'Additional Courses',
    description: 'Cursos extras e especializações complementares.',
    icon: <BookOpenCheck className="h-5 w-5" />,
    href: '/formacao/complementares',
    gradient: 'from-purple-500 to-pink-500',
    highlights: [
      'Banco de Dados Oracle e SQL Avançado',
      'Reparo Avançado em Placas e Circuito Eletrônico',
      'IT Service Management (ITSM/GSTI)',
      'Sistemas Operacionais e Redes',
    ],
  },
];

// Componente do Card de Introdução
const IntroductionCard = ({ onDownloadCV }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-8 sm:mb-12"
  >
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-cyan-400" />
          <h2 className="text-lg font-semibold text-white">Desenvolvimento Contínuo</h2>
        </div>
        <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
          Minha formação é focada em tecnologia e inovação, combinando educação formal com
          certificações especializadas. Busco constantemente me atualizar com as últimas tecnologias
          e melhores práticas do mercado.
        </p>

        <div className="mt-4 flex justify-center">
          <motion.button
            onClick={onDownloadCV}
            className={cn(
              'flex items-center justify-center gap-2 rounded-lg',
              'bg-gradient-to-r from-cyan-500 to-blue-500',
              'px-4 py-2 text-sm font-semibold text-white',
              'transition-all hover:from-cyan-600 hover:to-blue-600',
              'sm:w-auto'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-4 w-4" />
            Download Currículo PDF
          </motion.button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Componente do Card de Seção
const SectionCard = ({ section }) => (
  <Link href={section.href} className="block h-full">
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className={cn('rounded-lg bg-gradient-to-r p-2 text-white', section.gradient)}>
            {section.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <p className="text-sm text-cyan-400">{section.titleEn}</p>
          </div>
        </div>

        <p className="mb-4 text-sm text-cyan-100/60">{section.description}</p>

        <ul className="space-y-2">
          {section.highlights.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-cyan-100/60">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </Link>
);
const FormacaoIndexPage = () => {
  const handleDownloadCV = () => {
    const cvPath = '/curriculos/tecnologia/curriculo.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        {/* Cabeçalho */}
        <PageHeader
          overline="Portfólio Profissional"
          title="Formação"
          description="Explore minha jornada acadêmica, certificações e especializações"
        />

        {/* Card de Introdução */}
        <IntroductionCard onDownloadCV={handleDownloadCV} />

        {/* Grid de Seções */}
        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <SectionCard section={section} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FormacaoIndexPage;
