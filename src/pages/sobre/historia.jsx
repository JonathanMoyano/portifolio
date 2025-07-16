import React from 'react';
import { motion } from 'framer-motion';
import {
  Flag,
  Wrench,
  Flame,
  GraduationCap,
  UserCheck,
  Code2,
  Dumbbell,
  Music,
  Rocket,
  Target,
  Telescope,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import AudioPlayer from '@/components/shared/audioPlayer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';



const timelineEvents = [
  {
    year: '2003',
    title: 'O Início da Jornada',
    icon: Flag,
    content: 'Diante de grandes desafios familiares, comecei a acompanhar minha mãe na coleta de materiais recicláveis. Essa experiência, desde os 7 anos, moldou minha resiliência e ética de trabalho desde muito cedo.',
    tags: ['Família', 'Resiliência'],
  },
  {
    year: '2010',
    title: 'O Primeiro Passo na Tecnologia',
    icon: Wrench,
    content: 'Com o conhecimento adquirido em cursos, iniciei minha carreira em TI como autônomo. Aos 17 anos, realizava reparos em hardware e software, o que me permitiu ajudar financeiramente em casa e solidificar minha paixão pela tecnologia.',
    tags: ['Tecnologia', 'Autônomo', 'Hardware'],
  },
  {
    year: '2018',
    title: 'A Carreira como Bombeiro Civil',
    icon: Flame,
    content: 'Buscando estabilidade, ingressei na carreira de bombeiro civil. Atuei em posições de liderança em grandes empresas, desenvolvendo habilidades cruciais de gestão de crises, disciplina e tomada de decisão sob pressão.',
    tags: ['Bombeiro Civil', 'Liderança', 'Gestão de Crises'],
  },
  {
    year: '2022',
    title: 'Retorno e Foco Total em TI',
    icon: GraduationCap,
    content: 'Decidi retornar 100% para a área de TI. Iniciei a graduação em Análise e Desenvolvimento de Sistemas e conquistei um estágio no Colégio da Polícia Militar, aplicando meus conhecimentos em um ambiente corporativo.',
    tags: ['Graduação', 'Estágio', 'Transição de Carreira'],
  },
  {
    year: '2023',
    title: 'Crescimento e Reconhecimento',
    icon: UserCheck,
    content: 'Fui convidado para integrar a equipe do Colégio Jean Piaget. Meu desempenho e a aplicação de habilidades de segurança (da minha época de bombeiro) levaram a uma promoção para Analista de Suporte N2 e ao reconhecimento do meu valor para a instituição.',
    tags: ['Jean Piaget', 'Promoção', 'Reconhecimento'],
  },
];

const interests = [
  {
    category: 'Tecnologia',
    icon: Code2,
    items: ['Cloud Computing', 'Desenvolvimento Web', 'Inteligência Artificial', 'Automação e IoT'],
  },
  {
    category: 'Esportes',
    icon: Dumbbell,
    items: ['Caminhada', 'Natação', 'Musculação', 'Ciclismo'],
  },
  {
    category: 'Cultura e Lazer',
    icon: Music,
    items: ['Leitura Técnica', 'Podcasts de TI', 'Músicas MPB,Sertanejo Raiz e Instrumental', 'Cinema', 'Games'],
  },
];

const goals = [
  {
    prazo: 'Curto Prazo',
    icon: Rocket,
    items: [
      'Concluir a Pós-Graduação em DevOps & Cloud com excelência, aplicando os conhecimentos em projetos práticos.',
      'Atingir um nível avançado em automação de infraestrutura (IaC) com ferramentas como Terraform e Ansible.',
      'Obter uma certificação de nível fundamental em Cloud (AWS, Azure ou GCP) para validar o conhecimento adquirido.',
    ],
  },
  {
    prazo: 'Médio Prazo',
    icon: Target,
    items: [
      'Alcançar a senioridade como Engenheiro DevOps, tornando-me uma referência técnica na resolução de problemas complexos.',
      'Conquistar uma posição que ofereça modelo de trabalho remoto, colaborando com equipes e projetos de alcance global.',
      'Buscar certificações de nível profissional (Professional/Specialty) para aprofundar a especialização em uma plataforma de nuvem.',
    ],
  },
  {
    prazo: 'Longo Prazo',
    icon: Telescope,
    items: [
      'Atuar como Arquiteto de Soluções Cloud ou Especialista Principal em uma empresa de tecnologia de renome mundial.',
      'Contribuir ativamente para a comunidade open-source, compartilhando conhecimento e ferramentas.',
      'Mentorar e inspirar a próxima geração de profissionais de TI, retribuindo as oportunidades que tive.',
    ],
  },
];

// --- COMPONENTES REFINADOS ---

const TimelineCard = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const cardAnimation = isEven ? { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } } : { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } };
  const Icon = event.icon;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 sm:gap-8">
      {isEven ? (
        <>
          <motion.div {...cardAnimation} transition={{ delay: 0.2 + index * 0.1 }}>
            <Card className="h-full border-cyan-500/10 bg-transparent">
              <CardContent className="p-4">
                <h3 className="font-bold text-white">{event.title}</h3>
                <p className="mt-2 text-sm text-cyan-100/70">{event.content}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag, i) => <Badge key={i} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="flex h-full flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border-2 border-cyan-500/30">
              <Icon className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="h-full w-px bg-slate-700"></div>
          </div>
          <div className="pt-4"><Badge className="bg-cyan-500/20 text-cyan-300">{event.year}</Badge></div>
        </>
      ) : (
        <>
          <div className="pt-4 text-right"><Badge className="bg-cyan-500/20 text-cyan-300">{event.year}</Badge></div>
          <div className="flex h-full flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border-2 border-cyan-500/30">
              <Icon className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="h-full w-px bg-slate-700"></div>
          </div>
          <motion.div {...cardAnimation} transition={{ delay: 0.2 + index * 0.1 }}>
            <Card className="h-full border-cyan-500/10 bg-transparent">
              <CardContent className="p-4">
                <h3 className="font-bold text-white">{event.title}</h3>
                <p className="mt-2 text-sm text-cyan-100/70">{event.content}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag, i) => <Badge key={i} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  );
};

const InterestCard = ({ interest }) => {
  const Icon = interest.icon;
  return (
     <Card className="h-full border-cyan-500/10 bg-transparent">
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
             <div className="rounded-lg bg-cyan-500/10 p-2"><Icon className="h-6 w-6 text-cyan-400"/></div>
             <h3 className="text-xl font-bold text-white">{interest.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interest.items.map((item, i) => <Badge key={i} variant="outline" className="border-cyan-500/20">{item}</Badge>)}
          </div>
        </CardContent>
     </Card>
  )
};

const GoalCard = ({ goal }) => {
  const Icon = goal.icon;
  return(
    <Card className="h-full border-cyan-500/10 bg-transparent">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <Icon className="h-6 w-6 text-cyan-400" />
          <h3 className="text-xl font-bold text-white">{goal.prazo}</h3>
        </div>
        <ul className="space-y-3">
          {goal.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-cyan-100/70">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
};

const TabContentWrapper = ({ children }) => <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{children}</motion.div>;

const TabNavigation = () => (
  <Tabs defaultValue="historia" className="w-full">
    <div className="flex justify-center">
      <TabsList className="mb-8 grid h-auto grid-cols-3 rounded-lg bg-slate-800/90 p-1">
        <TabsTrigger value="historia" className={cn('px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', 'text-slate-300 hover:text-white', 'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md')}>
          História
        </TabsTrigger>
        <TabsTrigger value="interesses" className={cn('px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', 'text-slate-300 hover:text-white', 'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md')}>
          Interesses
        </TabsTrigger>
        <TabsTrigger value="objetivos" className={cn('px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', 'text-slate-300 hover:text-white', 'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md')}>
          Objetivos
        </TabsTrigger>
      </TabsList>
    </div>
    <TabsContent value="historia">
      <TabContentWrapper>
        <div className="mb-12"><AudioPlayer audioUrl="/audio-historia.mp3" /></div>
        <div className="relative flex flex-col gap-0">
          {timelineEvents.map((event, index) => <TimelineCard key={index} event={event} index={index} />)}
        </div>
      </TabContentWrapper>
    </TabsContent>
    <TabsContent value="interesses">
      <TabContentWrapper>
        <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="visible" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {interests.map((interest) => <motion.div key={interest.category} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><InterestCard interest={interest} /></motion.div>)}
        </motion.div>
      </TabContentWrapper>
    </TabsContent>
    <TabsContent value="objetivos">
      <TabContentWrapper>
        <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="visible" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {goals.map((goal) => <motion.div key={goal.prazo} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><GoalCard goal={goal} /></motion.div>)}
        </motion.div>
      </TabContentWrapper>
    </TabsContent>
  </Tabs>
);

// --- COMPONENTE PRINCIPAL ---
const HistoriaPage = () => {
  return (
      <div className="mx-auto max-w-5xl">
        <PageHeader
          overline="Minha Jornada"
          title="De Desafios a Oportunidades"
          description="Uma trajetória de resiliência, aprendizado e paixão pela tecnologia."
        />
        <TabNavigation />
      </div>
  );
};

export default HistoriaPage;