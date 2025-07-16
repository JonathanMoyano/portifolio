import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ExternalLink,
  Trophy,
  Award,
  Rocket,
  Users,
  CircleDollarSign,
  Recycle,
  Phone,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Dados do Projeto
const projectData = {
  titleMain: (
    <span className="mb-2 block text-center text-5xl font-bold text-orange-500">TROK!</span>
  ),
  titleSecondary: (
    <span className="block text-2xl">
      Seu Negócio na <span className="text-orange-500">Palma da Mão</span>
    </span>
  ),
  badge: 'Projeto Premiado 🏆',
  description:
    'Uma plataforma inovadora que conecta profissionais e clientes, promovendo a economia colaborativa e sustentável.',
  image: '/images/trokinho.png',
  website: 'https://www.trok-servicos.com.br',
  appDownload: 'https://www.trok-servicos.com.br/app-trok.apk',
  about: `O TROK! nasceu da necessidade de criar uma plataforma que facilitasse a troca 
          de serviços e mão de obra, promovendo inclusão social e desenvolvimento econômico 
          sustentável. Nossa solução conecta profissionais qualificados a clientes que 
          precisam de seus serviços, criando um ecossistema de benefício mútuo.`,
};

// Dados das conquistas, features e stack tecnológica
const achievements = [
  {
    icon: Trophy,
    title: 'Melhor Projeto',
    subtitle: '24ª Feira de Negócios UNIBR',
    color: 'text-yellow-500',
  },
  {
    icon: Award,
    title: 'Melhor Apresentação',
    subtitle: '24ª Feira de Negócios UNIBR',
    color: 'text-blue-500',
  },
  {
    icon: Rocket,
    title: 'Melhor Execução',
    subtitle: '24ª Feira de Negócios UNIBR',
    color: 'text-green-500',
  },
];

const features = [
  {
    icon: Users,
    title: 'Conexão Direta',
    description: 'Conecte-se diretamente com prestadores de serviços qualificados',
  },
  {
    icon: CircleDollarSign,
    title: 'Economia',
    description: 'Sistema de troca de serviços que beneficia todos os envolvidos',
  },
  {
    icon: Recycle,
    title: 'Sustentabilidade',
    description: 'Promovendo uma economia circular e sustentável',
  },
  {
    icon: Phone,
    title: 'Mobile First',
    description: 'Aplicativo otimizado para a melhor experiência mobile',
  },
  {
    icon: Globe,
    title: 'Alcance',
    description: 'Conectando profissionais e clientes em toda região',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    description: 'Sistema seguro de avaliações e verificações',
  },
];

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Capacitor.js'],
  },
  {
    category: 'Backend',
    technologies: ['Supabase', 'PostgreSQL', 'Node.js'],
  },
  {
    category: 'DevOps',
    technologies: ['Vercel', 'GitHub Actions'],
  },
];

// Componentes Reutilizáveis
const AchievementCard = ({ achievement }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
      <div>
        <h3 className="font-semibold text-white">{achievement.title}</h3>
        <p className="text-xs text-cyan-100/60 sm:text-sm">{achievement.subtitle}</p>
      </div>
    </div>
  </motion.div>
);
const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="rounded-lg border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-2">
        <feature.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-cyan-100/60">{feature.description}</p>
      </div>
    </div>
  </motion.div>
);

const TechStackCard = ({ stack }) => (
  <Card>
    <CardContent className="p-4">
      <h3 className="mb-3 font-semibold text-white">{stack.category}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="border-cyan-500/20 text-cyan-100/60">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const HeroImage = () => (
  <div className="relative h-[160px] w-full overflow-hidden rounded-t-xl sm:h-[240px] lg:h-[320px]">
    <Image
      src={projectData.image}
      alt="Trokinho"
      fill
      className="object-cover"
      priority
      quality={100}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0F1E]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center pt-4 text-center"
      ></motion.div>
    </div>
  </div>
);

// Componente Principal
const ProjectsPage = () => {
  return (
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center sm:mb-12"
        >
          <Badge className="mb-4 bg-orange-500/20 text-orange-400">{projectData.badge}</Badge>
          <div className="font-display">
            {projectData.titleMain}
            {projectData.titleSecondary}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
            {projectData.description}
          </p>
        </motion.div>

        {/* Projeto Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            'mb-8 overflow-hidden rounded-xl border border-cyan-500/20',
            'bg-[#0A0F1E]/95 shadow-xl backdrop-blur-xl',
            'transition-all duration-300 hover:border-cyan-500/30 sm:mb-12'
          )}
        >
          {/* Hero Image */}
          <HeroImage />

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Achievements Grid */}
            <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </section>

            {/* Features Section */}
            <section className="mb-8">
              <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                Recursos Principais
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </section>

            {/* Stack Tecnológica Section */}
            <section className="mb-8">
              <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
                Stack Tecnológica
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {techStack.map((stack, index) => (
                  <TechStackCard key={index} stack={stack} />
                ))}
              </div>
            </section>

            {/* Descrição e Links */}
            <div className="space-y-6">
              {/* About Card */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">Sobre o Projeto</h3>
                    <p className="text-sm text-cyan-100/60 sm:text-base">{projectData.about}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  className={cn(
                    'group bg-gradient-to-r from-cyan-500 to-blue-500 px-6',
                    'transition-all hover:scale-105'
                  )}
                  onClick={() => window.open(projectData.website, '_blank')}
                >
                  Acessar o TROK!
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
};

export default ProjectsPage;
