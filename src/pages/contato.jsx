import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dados de contato
const contactInfo = {
  email: 'jsouza1993@gmail.com',
  phone: '13974124438',
  location: 'São Vicente - SP, Brasil',
};

// Configuração dos cartões de contato
const contactCards = [
  {
    title: 'WhatsApp',
    description: 'Resposta rápida em até 24h',
    icon: MessageSquare,
    action: () => {
      window.open(`https://wa.me/${contactInfo.phone}`, '_blank');
    },
    button: {
      text: 'Iniciar conversa',
      icon: Send,
    },
    highlight: true,
  },
  {
    title: 'E-mail',
    description: contactInfo.email,
    icon: Mail,
    action: async () => {
      try {
        await navigator.clipboard.writeText(contactInfo.email);
        const element = document.getElementById(contactInfo.email);
        if (element) {
          element.textContent = 'Copiado!';
          setTimeout(() => {
            element.textContent = 'Copiar';
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    },
    button: {
      text: 'Copiar e-mail',
      icon: ExternalLink,
    },
  },
];

// Dados das competências
const skills = ['Desenvolvimento Web', 'Infraestrutura', 'Segurança'];

// Configurações de animação
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Componente do Status Online
const OnlineStatus = () => (
  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
    <span className="text-xs font-medium text-cyan-400">Disponível para novos projetos</span>
  </div>
);

// Componente de Localização
const Location = () => (
  <motion.div {...fadeInUp} className="flex items-center justify-center gap-2 text-cyan-100/60">
    <MapPin className="h-4 w-4" />
    <span className="text-sm">{contactInfo.location}</span>
  </motion.div>
);
// Componente do Card de Contato
const ContactCard = ({ card }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
    <Card
      className={cn(
        'group h-full transition-all duration-300 hover:border-cyan-500/40',
        'backdrop-blur-xl',
        card.highlight
          ? 'bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10'
          : 'bg-[#0A0F1E]/95'
      )}
    >
      <CardContent className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div
              className={cn('rounded-xl p-2', card.highlight ? 'bg-cyan-500/20' : 'bg-[#0A0F1E]')}
            >
              <card.icon className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{card.title}</h3>
              <p className="mt-1 text-sm text-cyan-100/60 sm:text-base">{card.description}</p>
            </div>
          </div>
          {card.highlight && <Badge className="bg-cyan-500/20 text-cyan-400">Online</Badge>}
        </div>

        {/* Action Button */}
        <Button
          onClick={card.action}
          className={cn(
            'mt-6 w-full gap-2 transition-all duration-300',
            card.highlight
              ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:opacity-90'
              : 'border-cyan-500/20 bg-[#0A0F1E] hover:bg-cyan-500/10'
          )}
        >
          <span>{card.button.text}</span>
          <card.button.icon className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

// Componente de Cards de Contato
const ContactCards = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {contactCards.map((card, index) => (
      <ContactCard key={index} card={card} />
    ))}
  </div>
);

// Componente do Rodapé
const Footer = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className={cn(
      'mt-8 flex flex-col items-center gap-4',
      'rounded-2xl border border-cyan-500/20',
      'bg-[#0A0F1E]/95 p-6 backdrop-blur-xl'
    )}
  >
    {/* Skills */}
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} variant="outline" className="border-cyan-500/20 text-cyan-100/60">
          {skill}
        </Badge>
      ))}
    </div>

    {/* Call to Action */}
    <p className="text-center text-sm text-cyan-100/60">
      Vamos trabalhar juntos para transformar suas ideias em realidade
    </p>
  </motion.div>
);

// Componente do Conteúdo Principal
const MainContent = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
    {/* Status e Localização */}
    <OnlineStatus />

    <div className="mt-8 space-y-6">
      <Location />
      <ContactCards />
    </div>

    {/* Rodapé */}
    <Footer />
  </motion.div>
);
// Componente Principal
const ContatoPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <MainContent />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContatoPage;
