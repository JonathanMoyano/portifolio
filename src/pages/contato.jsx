import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContatoPage = () => {
  const { toast } = useToast();

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: 'Copiado para a área de transferência!',
        duration: 2000,
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: 'São Vicente - SP, Brasil',
      action: null,
      color: 'text-blue-500',
    },
    {
      icon: Mail,
      text: 'jsouza1993@gmail.com',
      action: () => handleCopy('jsouza1993@gmail.com'),
      color: 'text-blue-500',
      copyText: 'Clique para copiar',
    },
    {
      icon: Phone,
      text: '(13) 97412-4438',
      action: () => handleCopy('(13) 97412-4438'),
      color: 'text-blue-500',
      copyText: 'Clique para copiar',
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
    <div className="relative min-h-screen bg-[#0A0F1E] pb-16 md:pl-64">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-5xl text-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-100 md:text-6xl lg:text-7xl">
              <span className="block">Entre em</span>
              <span className="mt-2 block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Contato
              </span>
            </h1>
            <p className="text-xl text-gray-400">Vamos transformar ideias em realidade</p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <Card className="overflow-hidden border-neutral-700 bg-neutral-800/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className={`flex items-center gap-4 ${
                        item.action ? 'cursor-pointer transition-colors hover:text-blue-400' : ''
                      }`}
                      onClick={item.action}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-700/50">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-100">{item.text}</p>
                        {item.copyText && <p className="text-sm text-gray-400">{item.copyText}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 flex justify-center gap-4 border-t border-neutral-700 pt-8"
                >
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="lg"
                      className="h-16 w-16 rounded-xl bg-neutral-700/50 hover:bg-blue-500/10 hover:text-blue-400"
                      onClick={() => window.open(href, '_blank')}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon className="h-6 w-6" />
                        <span className="text-xs">{label}</span>
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
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center text-gray-400"
            >
              Disponível para novos projetos e oportunidades
            </motion.p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContatoPage;
