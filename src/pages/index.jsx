import React from 'react';
import { ArrowRight, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const currentLanguage = router.pathname.split('/')[1] || 'pt';

  const translations = {
    pt: {
      title: 'Portfólio Profissional',
      role: 'Analista de TI especializado em infraestrutura, segurança e otimização de sistemas.',
      education: 'Estudante de Análise e Desenvolvimento de Sistemas.',
      story: 'Conheça minha história',
      contact: 'Vamos conversar',
    },
    en: {
      title: 'Professional Portfolio',
      role: 'IT Analyst specialized in infrastructure, security, and systems optimization.',
      education: 'Systems Analysis and Development Student.',
      story: 'Know my story',
      contact: "Let's talk",
    },
    es: {
      title: 'Portafolio Profesional',
      role: 'Analista de TI especializado en infraestructura, seguridad y optimización de sistemas.',
      education: 'Estudiante de Análisis y Desarrollo de Sistemas.',
      story: 'Conoce mi historia',
      contact: 'Hablemos',
    },
  };

  const handleNavigation = (path) => {
    router.push(`/${currentLanguage}${path}`);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] pb-16 md:pl-64">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-5xl text-center">
          <div
            className="mx-auto mb-12 h-32 w-32 overflow-hidden rounded-full bg-[url('/jonathan.jpg')] bg-cover bg-center bg-no-repeat shadow-xl sm:h-40 sm:w-40 md:h-48 md:w-48"
            style={{ backgroundPosition: 'center center' }}
          />

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {translations[currentLanguage].title}
              </h2>
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">JONATHAN SOUZA</span>
                <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  MOYANO
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-base text-cyan-100/60 sm:text-lg md:text-xl">
                {translations[currentLanguage].role}
                <br />
                {translations[currentLanguage].education}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-6 transition-transform hover:scale-105 sm:px-8"
                onClick={() => handleNavigation('/historia')}
              >
                {translations[currentLanguage].story}
                <ScrollText className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigation('/contato')}
                className="border-cyan-500 px-6 text-cyan-400 transition-transform hover:scale-105 hover:bg-cyan-500/10 sm:px-8"
              >
                {translations[currentLanguage].contact}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
