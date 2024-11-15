import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContatoPage = () => {
  // Função simplificada para copiar texto
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Feedback visual através da UI em vez de toast
      const element = document.getElementById(text);
      if (element) {
        element.textContent = 'Copiado!';
        setTimeout(() => {
          element.textContent = 'Clique para copiar';
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: 'São Vicente - SP, Brasil',
      action: null,
    },
    {
      icon: Mail,
      text: 'jsouza1993@gmail.com',
      action: () => handleCopy('jsouza1993@gmail.com'),
      copyText: 'Clique para copiar',
      id: 'jsouza1993@gmail.com',
    },
    {
      icon: Phone,
      text: '(13) 97412-4438',
      action: () => handleCopy('(13) 97412-4438'),
      copyText: 'Clique para copiar',
      id: '(13) 97412-4438',
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      href: 'https://br.linkedin.com/in/jonathansouzamoyano',
      label: 'LinkedIn',
    },
    {
      Icon: Github,
      href: 'https://github.com/JonathanPolezel',
      label: 'GitHub',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      {/* Wrapper para centralização correta */}
      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                Entre em Contato
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                Vamos transformar ideias em realidade
              </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-2xl"
            >
              <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl">
                <CardContent className="p-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`flex items-center gap-4 ${
                          item.action
                            ? 'cursor-pointer transition-all duration-200 hover:scale-105'
                            : ''
                        }`}
                        onClick={item.action}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                          <item.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-white">{item.text}</p>
                          {item.copyText && (
                            <p id={item.id} className="text-sm text-cyan-100/60">
                              {item.copyText}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex justify-center gap-4 border-t border-cyan-500/20 pt-8"
                  >
                    {socialLinks.map(({ Icon, href, label }, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="h-16 w-16 border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl"
                        onClick={() => window.open(href, '_blank')}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <Icon className="h-6 w-6 text-cyan-400" />
                          <span className="text-xs text-cyan-100/60">{label}</span>
                        </div>
                      </Button>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>

              {/* Additional Call to Action */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center text-cyan-100/60"
              >
                Disponível para novos projetos e oportunidades
              </motion.p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContatoPage;
