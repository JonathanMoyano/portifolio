import React from 'react';
import { motion } from 'framer-motion';
import {
  School,
  // GraduationCap, // Ícone comentado pois não está em uso
  Award,
  Cpu,
  BrainCircuit,
  Network,
  Cloud,
  Code,
  EthernetPort,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const educationData = {
  /* Seção da Pós-Graduação temporariamente desativada.
     Para reativar, remova os marcadores de comentário '/*' e '*/' deste bloco.
  postgraduate: {
    title: 'Pós-Graduação em DevOps & Arquitetura Cloud',
    institution: 'FIAP',
    status: 'Cursando',
    // CORREÇÃO: String reescrita para remover quaisquer caracteres ocultos.
    description: `Especializacao focada em praticas de DevOps, automacao, CI/CD, e arquitetura de solucoes escalaveis nas principais plataformas de nuvem, preparando para os desafios da infraestrutura moderna.`,
    skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Infraestrutura como Código (IaC)'],
  },
  */
  // Graduação atualizada conforme o currículo
  academic: {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UNIBR - Faculdade de São Vicente',
    status: 'Concluído', // Atualizado
    // CORREÇÃO: String reescrita para remover quaisquer caracteres ocultos.
    description: `Formacao superior que forneceu a base solida em engenharia de software, banco de dados, redes e desenvolvimento de aplicacoes.`,
    skills: ['Lógica de Programação', 'Engenharia de Software', 'Banco de Dados SQL', 'Desenvolvimento Web', 'Gestão de Projetos'],
  },
  // Cursos agora em uma lista única, com categorias, facilitando a manutenção
  courses: [
    {
      title: 'Redes: Construindo um projeto com Vlans, politicas de acesso e conexão com internet',
      institution: 'Alura',
      date: 'Jul/2025',
      hours: '8h',
      category: 'Redes',
    },
    {
      title: 'Redes: dos conceitos iniciais à criação de uma intranet',
      institution: 'Alura',
      date: 'Jul/2025',
      hours: '12h',
      category: 'Redes',
    },
    {
      title: 'Gestão de Infraestrutura de TI',
      institution: 'FIAP (Nano Course)',
      date: 'Mai/2025',
      hours: '20h',
      category: 'Infraestrutura',
    },
    {
      title: 'Conceitos Básicos de Redes',
      institution: 'Cisco Networking Academy',
      date: 'Mai/2025',
      hours: '22h',
      category: 'Infraestrutura',
    },
    {
      title: 'Cloud Fundamentals',
      institution: 'FIAP (Nano Course)',
      date: 'Mai/2025',
      hours: '80h',
      category: 'Cloud',
    },
    {
      title: 'Linux Fundamentos',
      institution: 'FIAP (Nano Course)',
      date: 'Junho/2025',
      hours: '40h',
      category: 'Infraestrutura',
    },
    {
      title: 'Redes TCP/IP e a Internet',
      institution: 'DIO',
      date: 'Out/2024',
      hours: '2h',
      category: 'Infraestrutura',
    },
    {
      title: 'Formação Fundamentos de Inteligência Artificial',
      institution: 'DIO',
      date: 'Out/2024',
      hours: '10h',
      category: 'Dados & IA',
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      institution: 'Coursera',
      date: 'Jan/2024',
      hours: 'N/A',
      category: 'Cloud',
    },
    {
      title: 'Introdução à Ciência de Dados 3.0',
      institution: 'Data Science Academy',
      date: '2023',
      hours: '12h',
      category: 'Dados & IA',
    },
    {
      title: 'Google Cloud Associate Engineer (GCP) - Estudos',
      institution: 'Udemy',
      date: 'Junho/2023',
      hours: '9h',
      category: 'Cloud',
    },
    {
      title: 'Banco de dados Oracle SQL',
      institution: 'Udemy',
      date: 'Junho/2023',
      hours: '24h',
      category: 'Desenvolvimento',
    },
    {
      title: 'Linguagem de Programação Python',
      institution: 'Udemy',
      date: 'Junho/2023',
      hours: '19,5h',
      category: 'Desenvolvimento',
    },
    {
      title: 'Lógica de Programação',
      institution: 'Udemy',
      date: '2022',
      hours: '30,5h',
      category: 'Desenvolvimento',
    },
    {
      title: 'Reparo Avançado em Placas Eletrônicas',
      institution: 'MasterNet',
      date: '2021',
      hours: '40h',
      category: 'Hardware',
    },
  ],
};

// --- COMPONENTES REFINADOS ---

// Card para as formações principais (Graduação e Pós)
const EducationCard = ({ education, icon: Icon, isPostGrad = false }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
    <Card className={cn("border-cyan-500/20", isPostGrad && "border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/10")}>
      <CardContent className="p-4 sm:p-6">
        <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-8 text-cyan-400" />
            <div>
              <h2 className="text-xl font-bold text-white">{education.title}</h2>
              <p className="text-sm text-cyan-100/70">{education.institution}</p>
            </div>
          </div>
          <Badge variant={isPostGrad ? "default" : "secondary"} className={cn(isPostGrad && "bg-cyan-500/20 text-cyan-300")}>
            {education.status}
          </Badge>
        </div>
        <p className="mb-4 text-sm text-cyan-100/60">{education.description}</p>
        <div className="flex flex-wrap gap-2">
          {education.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="border-cyan-500/20">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Card para os cursos complementares
const CourseCard = ({ course }) => {
  const categoryInfo = {
    Cloud: { icon: Cloud, color: 'text-blue-400' },
    Infraestrutura: { icon: Network, color: 'text-orange-400' },
    'Dados & IA': { icon: BrainCircuit, color: 'text-purple-400' },
    Desenvolvimento: { icon: Code, color: 'text-yellow-400' },
    Hardware: { icon: Cpu, color: 'text-red-400' },
    Redes: { icon: EthernetPort, color: 'text-green-400' },
  };
  const Icon = categoryInfo[course.category]?.icon || Award;
  const color = categoryInfo[course.category]?.color || 'text-cyan-400';

  return (
    <Card className="h-full border-cyan-500/10 bg-transparent transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5">
      <CardContent className="flex h-full flex-col justify-between p-4">
        <div>
          <div className="mb-3 flex items-start justify-between">
            <Icon className={cn('h-8 w-8', color)} />
            <Badge variant="secondary" className="whitespace-nowrap">{course.date}</Badge>
          </div>
          <h3 className="font-semibold text-white">{course.title}</h3>
          <p className="text-xs text-cyan-100/60">{course.institution}</p>
        </div>
        <p className="mt-3 text-right text-xs font-medium text-cyan-400/80">{course.hours}</p>
      </CardContent>
    </Card>
  );
};


// Seção de Cursos Complementares com abas (ESTILO CORRIGIDO)
const CoursesSection = ({ courses }) => {
  const categories = ['Todos', 'Cloud', 'Redes', 'Infraestrutura', 'Dados & IA', 'Desenvolvimento', 'Hardware'];

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <h2 className="mb-4 text-2xl font-bold text-white">Cursos e Formação Complementar</h2>
      <Tabs defaultValue="Todos" className="w-full">
        <div className="flex justify-center">
          <TabsList className="mb-8 h-auto flex-wrap justify-center rounded-lg bg-slate-800/90 p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm',
                  'text-slate-300 hover:text-white',
                  'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md'
                )}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {courses
                .filter((course) => category === 'Todos' || course.category === category)
                .map((course, index) => (
                  <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <CourseCard course={course} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  );
};

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
const FormacaoPage = () => {
  return (
      <div className="mx-auto max-w-7xl">
        <PageHeader
          overline="Desenvolvimento Profissional"
          title="Formação e Qualificações"
          description="Minha jornada de aprendizado contínuo, combinando formação acadêmica robusta com especializações em tecnologias de ponta."
        />
        <div className="space-y-12">
          {/* Este bloco será renderizado apenas se 'educationData.postgraduate' existir.
              Como o objeto foi comentado acima, esta condição será falsa e o card não aparecerá. */}
          {educationData.postgraduate && (
            <EducationCard education={educationData.postgraduate} icon={GraduationCap} isPostGrad />
          )}
          <EducationCard education={educationData.academic} icon={School} />
          <CoursesSection courses={educationData.courses} />
        </div>
      </div>
  );
};

export default FormacaoPage;
