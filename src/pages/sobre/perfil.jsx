import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Dados do perfil
const profileData = {
  name: 'Jonathan Souza Moyano',
  role: 'Analista de TI | Infraestrutura',
  experience: '2+ anos de experiência',
  image: '/jonathan.jpg',
  bio: {
    primary: `Profissional proativo com mais de 2 anos de experiência em infraestrutura de 
              TI, especializado em resolução de problemas complexos e implementação de 
              soluções tecnológicas inovadoras. Atualmente, Apoio na liderança da equipe 
              de TI do Colégio Jean Piaget em Santos. Sou responsável pelo gerenciamento 
              de agendamentos, eventos internos e Suporte N2.`,
    secondary: `Minha trajetória única, que inclui experiência como bombeiro civil, me 
                proporcionou uma perspectiva diferenciada na resolução de problemas e gestão 
                de crises. Essa combinação de habilidades técnicas e experiência prática me 
                permite oferecer soluções eficientes e inovadoras para os desafios 
                tecnológicos do dia a dia.`,
  },
};

// Dados de contato
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jsouza1993@gmail.com',
    link: 'mailto:jsouza1993@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(13) 97412-4438',
    link: 'tel:+5513974124438',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/jonathansouzamoyano',
    link: 'https://linkedin.com/in/jonathansouzamoyano',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/JonathanPolezel',
    link: 'https://github.com/JonathanPolezel',
  },
];

// Lista de competências
const skills = [
  'Infraestrutura de Redes',
  'Suporte Técnico N1/N2',
  'Segurança da Informação',
  'Otimização de Sistemas',
  'Gestão de Projetos',
  'Liderança de Equipes',
  'Comunicação Técnica',
];

// Componentes
const ProfileImage = () => (
  <div className="flex justify-center lg:col-span-1">
    <div className="relative h-48 w-48 overflow-hidden rounded-xl sm:h-56 sm:w-56">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20" />
      <Image
        src={profileData.image}
        alt={profileData.name}
        width={224}
        height={224}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  </div>
);

const ProfileInfo = () => (
  <div className="lg:col-span-2">
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{profileData.name}</h2>
        <p className="mt-1 text-lg text-cyan-400">{profileData.role}</p>
      </div>

      <div className="space-y-2">
        <Badge className="bg-cyan-500/20 text-cyan-400">{profileData.experience}</Badge>
      </div>

      <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
        {profileData.bio.primary}
      </p>

      <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
        {profileData.bio.secondary}
      </p>
    </div>
  </div>
);

const ContactCard = ({ info }) => {
  const Icon = info.icon;
  return (
    <a
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center gap-3 rounded-lg border border-cyan-500/20 p-3',
        'transition-colors hover:bg-cyan-500/10'
      )}
    >
      <Icon className="h-5 w-5 text-cyan-400" />
      <div>
        <p className="text-xs text-cyan-100/60">{info.label}</p>
        <p className="text-sm text-white">{info.value}</p>
      </div>
    </a>
  );
};

const SkillBadge = ({ skill }) => (
  <Badge variant="outline" className="border-cyan-500/20 text-cyan-100/60">
    {skill}
  </Badge>
);
// Componente Principal
const ProfilePage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <PageHeader overline="Portfólio Profissional" title="Perfil" />

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-3">
                <ProfileImage />
                <ProfileInfo />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Informações de Contato</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <ContactCard key={index} info={info} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Competências Principais</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
