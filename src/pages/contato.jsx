import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/components/layout/Layout';
import { useToast } from '@/components/ui/use-toast';

const ContatoPage = () => {
  const { currentLanguage } = useAccessibility();
  const { toast } = useToast();

  const translations = {
    pt: {
      title: 'Contato',
      subtitle: 'Vamos transformar ideias em realidade',
      contact: {
        title: 'Informações para Contato',
        location: 'São Vicente - SP, Brasil',
        email: 'jsouza1993@gmail.com',
        phone: '(13) 97412-4438',
      },
      copy: {
        success: 'Copiado para a área de transferência!',
        click: 'Clique para copiar',
      },
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    en: {
      title: 'Contact',
      subtitle: "Let's transform ideas into reality",
      contact: {
        title: 'Contact Information',
        location: 'São Vicente - SP, Brazil',
        email: 'jsouza1993@gmail.com',
        phone: '(13) 97412-4438',
      },
      copy: {
        success: 'Copied to clipboard!',
        click: 'Click to copy',
      },
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
  };

  const t = translations[currentLanguage] || translations.pt;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: t.copy.success,
        duration: 2000,
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: t.contact.location,
      action: null,
      color: 'text-blue-500',
    },
    {
      icon: Mail,
      text: t.contact.email,
      action: () => handleCopy(t.contact.email),
      color: 'text-blue-500',
      copyText: t.copy.click,
    },
    {
      icon: Phone,
      text: t.contact.phone,
      action: () => handleCopy(t.contact.phone),
      color: 'text-blue-500',
      copyText: t.copy.click,
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      href: 'https://br.linkedin.com/in/jonathansouzamoyano',
      label: t.social.linkedin,
    },
    {
      Icon: Github,
      href: 'https://github.com/JonathanPolezel',
      label: t.social.github,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-100 md:text-6xl lg:text-7xl">
            <span className="block">Entre em</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-gray-400">{t.subtitle}</p>
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
    </div>
  );
};

export default ContatoPage;
