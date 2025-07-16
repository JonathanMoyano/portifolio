import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import {
  School,
  GraduationCap,
  Award,
  Cpu,
  Database,
  Download,
  BrainCircuit,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// --- DADOS FINAIS E ATUALIZADOS ---
const sections = [
  {
    title: 'Pós-Graduação',
    titleEn: 'Postgraduate Degree',
    description: 'Especialização em DevOps e Arquitetura de Soluções em Nuvem pela FIAP.',
    icon: <GraduationCap className="h-5 w-5" />,
    href: '#', // Substituir pelo link da página se houver
    gradient: 'from-blue-500 to-cyan-500',
    highlights: [
      'DevOps Engineering & Cloud Solutions',
      'Instituição: FIAP (Nota Máxima no MEC)',
      'Foco em automação, CI/CD e infraestrutura como código (IaC)',
      'Cursando',
    ],
  },
  {
    title: 'Especializações em Nuvem',
    titleEn: 'Cloud Specializations',
    description: 'Cursos e estudos aprofundados nas principais plataformas de nuvem do mercado.',
    icon: <Award className="h-5 w-5" />,
    href: '#',
    gradient: 'from-cyan-500 to-green-500',
    highlights: [
      'Estudos em Microsoft Azure (Preparatório AZ-900)',
      'Formação Google Associate Cloud Engineer',
      'Fundamentos da Oracle Cloud Infrastructure',
      'Treinamento AWS Cloud Quest: Cloud Practitioner',
    ],
  },
  {
    title: 'Inteligência Artificial & Dados',
    titleEn: 'AI & Data',
    description: 'Cursos focados em IA generativa, engenharia de prompts e fundamentos de dados.',
    icon: <BrainCircuit className="h-5 w-5" />,
    href: '#',
    gradient: 'from-yellow-500 to-orange-500',
    highlights: [
      'Estudos em IA no Azure (Preparatório AI-900)',
      'Engenharia de Prompts na AWS com Claude',
      'CC50: Introdução à Ciência da Computação - Harvard',
      'Formação Fundamentos de IA',
    ],
  },
  {
    title: 'Desenvolvimento & Banco de Dados',
    titleEn: 'Development & Databases',
    description: 'Competências em frameworks modernos e gestão de bancos de dados.',
    icon: <Database className="h-5 w-5" />,
    href: '#',
    gradient: 'from-purple-500 to-pink-500',
    highlights: [
      'Desenvolvimento Web com React & Next.js',
      'Lógica de Programação Essencial',
      'Banco de Dados Oracle e SQL Avançado',
      'HTML5, CSS3 e JavaScript',
    ],
  },
  {
    title: 'Formação Acadêmica (Graduação)',
    titleEn: 'Academic Education (Bachelor)',
    description: 'Graduação base em Análise e Desenvolvimento de Sistemas.',
    icon: <School className="h-5 w-5" />,
    href: '#',
    gradient: 'from-red-500 to-orange-500',
    highlights: [
      'Análise e Desenvolvimento de Sistemas',
      'Instituição: UNIBR - Faculdade de São Vicente',
      'Status: Concluído',
    ],
  },
  {
    title: 'Infraestrutura & Fundamentos de TI',
    titleEn: 'Infrastructure & IT Fundamentals',
    description: 'Conhecimentos essenciais que formam a base da minha carreira em TI.',
    icon: <Cpu className="h-5 w-5" />,
    href: '#',
    gradient: 'from-green-500 to-teal-500',
    highlights: [
      'Fundamentos de ITIL® 4 e ITSM (IT Service Management)',
      'Sistemas Operacionais e Redes de Computadores',
      'Manutenção e Reparo de Hardware',
      'Segurança da Informação',
    ],
  },
];

// --- COMPONENTES ---

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
          <h2 className="text-lg font-semibold text-white">Jornada de Aprendizagem Contínua</h2>
        </div>
        <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
          Minha carreira é marcada pela evolução constante. Partindo de uma base sólida em infraestrutura de TI, hoje meu foco está na vanguarda da tecnologia, com especialização em DevOps e Cloud. Esta página detalha as qualificações que sustentam minha capacidade de entregar soluções modernas e eficientes.
        </p>
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={onDownloadCV}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-600 sm:w-auto"
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
              <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </Link>
);

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
const FormacaoIndexPage = () => {
  const handleDownloadCV = () => {
    const cvPath = '/curriculos/curriculo.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        <PageHeader
          overline="Jornada Profissional"
          title="Qualificações"
          description="Explore minha evolução acadêmica, certificações e especializações técnicas."
        />
        <IntroductionCard onDownloadCV={handleDownloadCV} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.href + index}
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