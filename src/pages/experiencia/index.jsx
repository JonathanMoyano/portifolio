import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { School, GraduationCap, Award, BookOpen, FileCheck } from 'lucide-react';
import Link from 'next/link';

const FormacaoIndexPage = () => {
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
        'Azure Data Fundamentals',
      ],
    },
    {
      title: 'Desenvolvimento',
      titleEn: 'Development',
      description: 'Cursos e certificações em desenvolvimento de software.',
      icon: <FileCheck className="h-5 w-5" />,
      href: '/formacao/desenvolvimento',
      gradient: 'from-green-500 to-yellow-500',
      highlights: ['Desenvolvimento Full Stack', 'Oracle SQL Developer', 'HTML5 e CSS3'],
    },
    {
      title: 'AI & Data Science',
      titleEn: 'AI & Data Science',
      description: 'Formação em Inteligência Artificial e Ciência de Dados.',
      icon: <BookOpen className="h-5 w-5" />,
      href: '/formacao/ai-data-science',
      gradient: 'from-yellow-500 to-purple-500',
      highlights: [
        'Ciência de Dados 3.0',
        'Engenharia de Prompts na AWS',
        'CC50 - Introdução à Ciência da Computação',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-4xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center sm:mb-12"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
                Formação
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
                Explore minha jornada acadêmica, certificações e especializações
              </p>
            </motion.div>

            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 sm:mb-12"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-cyan-400" />
                  <h2 className="text-lg font-semibold text-white">Desenvolvimento Contínuo</h2>
                </div>
                <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                  Minha formação é focada em tecnologia e inovação, combinando educação formal com
                  certificações especializadas. Busco constantemente me atualizar com as últimas
                  tecnologias e melhores práticas do mercado.
                </p>
              </Card>
            </motion.div>

            {/* Section Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {sections.map((section, index) => (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link href={section.href} className="block h-full">
                    <Card className="group h-full border-cyan-500/20 bg-[#0A0F1E]/95 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      {/* Header */}
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`rounded-lg bg-gradient-to-r ${section.gradient} p-2 text-white`}
                        >
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                          <p className="text-sm text-cyan-400">{section.titleEn}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-sm text-cyan-100/60">{section.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {section.highlights.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-cyan-100/60">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FormacaoIndexPage;
