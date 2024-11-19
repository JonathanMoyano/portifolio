import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Send, ExternalLink } from 'lucide-react';
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
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24" {...props}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
      </svg>
    ),
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
const skills = [
  'Desenvolvimento Web',
  'Aplicações Mobile',
  'UI/UX Design',
  'Infraestrutura',
  'Segurança',
  'DevOps',
];

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
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <CardContent className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-cyan-500/20 p-2">
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
            'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500',
            'hover:scale-[1.02] hover:opacity-90'
          )}
        >
          <span>{card.button.text}</span>
          <card.button.icon className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

// Configurações de animação
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Componente de Cards de Contato
const ContactCards = () => (
  <div className="grid gap-6 sm:grid-cols-2">
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
      'mt-8 flex flex-col items-center gap-6',
      'rounded-2xl border border-cyan-500/20',
      'bg-[#0A0F1E]/95 p-6 backdrop-blur-xl'
    )}
  >
    {/* Skills */}
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          variant="outline"
          className="border-cyan-500/20 bg-cyan-500/10 text-cyan-100/80 hover:bg-cyan-500/20"
        >
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

// Componente Principal
const ContatoPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        <PageHeader
          overline="Contato"
          title="Vamos Conversar?"
          description="Estou disponível para novos projetos e oportunidades de colaboração"
        />
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <MainContent />
        </div>
      </div>
    </PageLayout>
  );
};

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

export default ContatoPage;
