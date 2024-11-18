import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Image from 'next/image';

const ProfilePage = () => {
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
                Perfil
              </h1>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Profile Image */}
                  <div className="flex justify-center lg:col-span-1">
                    <div className="relative h-48 w-48 overflow-hidden rounded-xl sm:h-56 sm:w-56">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20" />
                      <Image
                        src="/jonathan.jpg"
                        alt="Jonathan Souza Moyano"
                        width={224} // 56 * 4 (correspondente ao sm:w-56)
                        height={224} // 56 * 4 (correspondente ao sm:h-56)
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                          Jonathan Souza Moyano
                        </h2>
                        <p className="mt-1 text-lg text-cyan-400">
                          Analista de TI | Infraestrutura
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Badge className="bg-cyan-500/20 text-cyan-400">
                          2+ anos de experiência
                        </Badge>
                      </div>

                      <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                        Profissional proativo com mais de 2 anos de experiência em infraestrutura de
                        TI, especializado em resolução de problemas complexos e implementação de
                        soluções tecnológicas inovadoras. Atualmente, Apoio na liderança da equipe
                        de TI do Colégio Jean Piaget em Santos. Sou responsável pelo gerenciamento
                        de agendamentos, eventos internos e Suporte N2.
                      </p>

                      <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                        Minha trajetória única, que inclui experiência como bombeiro civil, me
                        proporcionou uma perspectiva diferenciada na resolução de problemas e gestão
                        de crises. Essa combinação de habilidades técnicas e experiência prática me
                        permite oferecer soluções eficientes e inovadoras para os desafios
                        tecnológicos do dia a dia.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Informações de Contato</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg border border-cyan-500/20 p-3 transition-colors hover:bg-cyan-500/10"
                      >
                        <Icon className="h-5 w-5 text-cyan-400" />
                        <div>
                          <p className="text-xs text-cyan-100/60">{info.label}</p>
                          <p className="text-sm text-white">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Technical Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Competências Principais</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Infraestrutura de Redes',
                    'Suporte Técnico N1/N2',
                    'Segurança da Informação',
                    'Otimização de Sistemas',
                    'Gestão de Projetos',
                    'Liderança de Equipes',
                    'Comunicação Técnica',
                  ].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-cyan-500/20 text-cyan-100/60"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
