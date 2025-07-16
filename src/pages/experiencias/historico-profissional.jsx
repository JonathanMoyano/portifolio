import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Shield,
  Award,
  Clock,
  Users,
  ChevronRight,
  Briefcase,
  Brain,
  Network,
  Terminal,
  Server,
  Settings,
  HeartPulse,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';


const strengths = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Resolução de Problemas',
    description: 'Capacidade analítica e pensamento estruturado para solucionar desafios complexos em TI.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Liderança de Equipes',
    description: 'Experiência na coordenação de equipes técnicas e aplicação de treinamentos.',
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Infraestrutura',
    description: 'Expertise em manutenção de redes, servidores e rotinas de suporte N2 para garantir a estabilidade.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Gestão de Crises',
    description: 'Tomada de decisão rápida e eficaz sob pressão, uma habilidade aprimorada em 4 anos como bombeiro civil.',
  },
];

const skills = [
  {
    category: 'Sistemas Operacionais',
    icon: <Terminal className="h-5 w-5" />,
    items: ['Windows (XP, 7, 10, 11)', 'Linux'],
  },
  {
    category: 'Hardware e Infraestrutura',
    icon: <Settings className="h-5 w-5" />,
    items: ['Manutenção de Desktops/Notebooks', 'Reparo de Placas Eletrônicas', 'Cabeamento Estruturado', 'Configuração de Racks', 'CFTV'],
  },
  {
  category: 'Software e Sistemas',
  icon: <Code className="h-5 w-5" />,
  items: [
    'Suporte a ERP (GVDasa, TOTVS RM)',
    'Administração de Active Directory ',
    'Pacote Office 365',
    'Sistemas de Chamados (Ticketing) ',
    'Ferramentas de Acesso Remoto ',
    'Software de Antivírus e Remoção de Malware ',
    'Rotinas de Backup e Recuperação de Dados ',
    'Ferramentas de Diagnóstico (Hardware/Software)',
  ],
  },
  {
    category: 'Redes e Cloud',
    icon: <Network className="h-5 w-5" />,
    items: ['TCP/IP', 'Suporte a Redes', 'Google Cloud (Conceitos)'],
  },
];

const stats = [
  { icon: <Briefcase className="h-6 w-6" />, value: '17+', label: 'Anos em TI' },
  { icon: <Award className="h-6 w-6" />, value: '10+', label: 'Cursos Concluídos' },
  { icon: <Users className="h-6 w-6" />, value: '4+', label: 'Anos em Liderança' },
  { icon: <HeartPulse className="h-6 w-6" />, value: '4', label: 'Anos como Bombeiro' },
];

const experience = {
  bombeiro: [
    {
      title: 'Bombeiro Civil (Líder)',
      company: 'Bracell, Grupo Mendes, Santos FC, e outros',
      period: 'Aprox. 4 anos',
      type: 'Gestão de Crises',
      description: 'Atuação em posições de liderança na coordenação de equipes de bombeiros, aplicando treinamentos e respondendo a emergências em ambientes industriais, corporativos e de grande público.',
      achievements: [
        'Liderança e coordenação de equipes de resposta a emergências.',
        'Implementação de protocolos de segurança e aplicação de treinamentos técnicos.',
        'Atuação direta na prevenção de acidentes e resposta a crises.',
        'Desenvolvimento de competências em tomada de decisão sob pressão.',
      ],
      metrics: [
        { icon: <Shield />, label: 'Prevenção' },
        { icon: <Users />, label: 'Liderança' },
        { icon: <Clock />, label: 'Disciplina' },
      ],
    },
  ],
  ti: [
    {
      title: 'Analista de Suporte de TI N2',
      company: 'Colégio Jean Piaget - Santos, SP',
      period: 'Janeiro 2024 - Presente',
      type: 'TI',
      description: 'Atendimento técnico nível 2, manutenção da infraestrutura de rede, elaboração de laudos e suporte ao sistema ERP GVDasa.',
      achievements: [
        'Suporte especializado a usuários por telefone e presencialmente.',
        'Elaboração de relatórios e laudos técnicos detalhados para sistemas.',
        'Manutenção da infraestrutura de rede cabeada e equipamentos de rack.',
        'Suporte ao ERP GVDasa e sistemas operacionais Windows.',
      ],
      metrics: [
        { icon: <Server />, value: 'N2', label: 'Suporte' },
        { icon: <Network />, label: 'Infra' },
        { icon: <Users />, label: 'Educação' },
      ],
    },
    {
      title: 'Assistente de Suporte de TI',
      company: 'Colégio Jean Piaget - Santos, SP',
      period: 'Outubro 2023 - Janeiro 2024',
      type: 'TI',
      description: 'Manutenção de hardware, suporte em Help Desk para toda a comunidade acadêmica e auxílio na infraestrutura de eventos e rede.',
      achievements: [
        'Análise de sistema de CFTV e controle de inventário de materiais.',
        'Manutenção preventiva e corretiva de computadores, Chromebooks e notebooks.',
        'Suporte em Help Desk para pais, alunos e funcionários.',
        'Auxílio na manutenção de rede e montagem de infra para eventos.',
      ],
      metrics: [
        { icon: <Settings />, label: 'Hardware' },
        { icon: <Clock />, label: 'Help Desk' },
        { icon: <Shield />, label: 'CFTV' },
      ],
    },
    {
      title: 'Estágio de Suporte de TI',
      company: 'Colégio da Polícia Militar / Cruz Azul SP',
      period: 'Outubro 2022 - Outubro 2023',
      type: 'TI',
      description: 'Manutenção de hardware no Colégio e Hospital, suporte ao sistema TOTVS, e administração de contas no Active Directory e RM.',
      achievements: [
        'Manutenção preventiva e corretiva nos desktops e impressoras.',
        'Suporte ao Sistema TOTVS (RM e RM Saúde).',
        'Gerenciamento de contas e alterações cadastrais no Active Directory.',
        'Manutenção preventiva no servidor local e sistema de monitoramento.',
      ],
      metrics: [
        { icon: <Code />, label: 'ERP TOTVS' },
        { icon: <Users />, label: 'AD / RM' },
        { icon: <Server />, label: 'Servidor' },
      ],
    },
  ],
};

// --- COMPONENTES ---

const StrengthCard = ({ strength }) => (
  <Card className="h-full border-cyan-500/10 bg-transparent p-1 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5">
    <CardContent className="flex h-full flex-col items-center justify-center p-4 text-center">
      <div className="mb-3 text-cyan-400">{strength.icon}</div>
      <h3 className="mb-2 text-base font-semibold text-white">{strength.title}</h3>
      <p className="text-sm text-cyan-100/60">{strength.description}</p>
    </CardContent>
  </Card>
);

const StatCard = ({ stat }) => (
  <Card className="border-cyan-500/10 bg-transparent">
    <CardContent className="flex flex-col items-center justify-center gap-2 p-4 text-center">
      <div className="text-cyan-400">{stat.icon}</div>
      <span className="text-3xl font-bold text-white">{stat.value}</span>
      <span className="text-sm text-cyan-100/60">{stat.label}</span>
    </CardContent>
  </Card>
);

const SkillCard = ({ skillGroup }) => (
  <Card className="h-full border-cyan-500/10 bg-transparent">
    <CardContent className="p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-md bg-cyan-500/10 p-2 text-cyan-400">{skillGroup.icon}</div>
        <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, index) => (
          <Badge key={index} variant="outline" className="border-cyan-500/20 text-cyan-100/70">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ExperienceCard = ({ exp }) => (
  <Card className="overflow-hidden border-cyan-500/10 bg-transparent">
    <CardContent className="p-4 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-white">{exp.title}</p>
          <p className="text-cyan-400">{exp.company}</p>
          <p className="mt-1 text-xs text-cyan-100/60">{exp.period}</p>
        </div>
        <Badge variant={exp.type === 'TI' ? 'default' : 'secondary'} className="whitespace-nowrap">
          {exp.type}
        </Badge>
      </div>
      <p className="my-4 text-sm text-cyan-100/80">{exp.description}</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-cyan-500/10">
          <AccordionTrigger className="text-sm text-cyan-100/80 hover:no-underline">
            Ver mais detalhes
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-3 gap-2 rounded-lg bg-cyan-500/5 p-3">
                {exp.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-cyan-400">{React.cloneElement(metric.icon, { className: 'h-5 w-5 mx-auto' })}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{metric.value}</div>
                    <div className="text-xs text-cyan-100/60">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-white">Principais Realizações:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-cyan-100/70">
                      <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);


// --- LÓGICA DAS TABS (Componente com o estilo ajustado) ---

const tabConfig = [
  {
    value: 'overview',
    label: 'Visão Geral',
    content: () => (
      <div className="space-y-6">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {strengths.map((s, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <StrengthCard strength={s} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <StatCard stat={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    value: 'skills',
    label: 'Habilidades Técnicas',
    content: () => (
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-1 md:grid-cols-2"
      >
        {skills.map((s, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <SkillCard skillGroup={s} />
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    value: 'experience',
    label: 'Trajetória Profissional',
    content: () => (
      <div className="space-y-6">
        {experience.ti.map((exp, i) => <ExperienceCard key={i} exp={exp} />)}
        {experience.bombeiro.map((exp, i) => <ExperienceCard key={i} exp={exp} />)}
      </div>
    ),
  },
];

const TabNavigation = ({ defaultValue = 'overview' }) => (
  <Tabs defaultValue={defaultValue} className="w-full">
    <div className="flex justify-center">
      {/* 1. O painel de fundo que define o contêiner das abas */}
      <TabsList className="mb-8 grid h-auto grid-cols-1 rounded-lg bg-slate-800/90 p-1 sm:grid-cols-3">
        {tabConfig.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              // 2. Estilo para abas INATIVAS: texto mais claro e visível
              'text-slate-300 hover:text-white',
              // 3. Estilo para aba ATIVA: fundo sólido, texto escuro e sombra para destaque
              'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md'
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
    {tabConfig.map((tab) => (
      <TabsContent key={tab.value} value={tab.value} className="motion-safe:animate-fadeIn">
        <tab.content />
      </TabsContent>
    ))}
  </Tabs>
);


// --- COMPONENTE PRINCIPAL ---

const ExperiencePage = () => {
  return (
      <div className="mx-auto max-w-6xl">
        <PageHeader
          overline="Carreira & Competências"
          title="Experiência Profissional"
          description="Uma jornada que une a solidez da infraestrutura de TI com a disciplina da gestão de crises."
        />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <TabNavigation />
        </motion.div>
      </div>
  );
};

export default ExperiencePage;