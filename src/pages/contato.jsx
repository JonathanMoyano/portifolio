import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ContatoPage = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '13974124438';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      const element = document.getElementById(text);
      if (element) {
        element.textContent = 'Copiado!';
        setTimeout(() => {
          element.textContent = 'Copiar';
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactCards = [
    {
      title: 'WhatsApp',
      description: 'Resposta rápida em até 24h',
      icon: MessageSquare,
      action: handleWhatsApp,
      button: {
        text: 'Iniciar conversa',
        icon: Send,
      },
      highlight: true,
    },
    {
      title: 'E-mail',
      description: 'jsouza1993@gmail.com',
      icon: Mail,
      action: () => handleCopy('jsouza1993@gmail.com'),
      button: {
        text: 'Copiar e-mail',
        icon: ExternalLink,
      },
    },
  ];

  const ContactCard = ({ card }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
      <Card
        className={`group h-full border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 
          ${card.highlight ? 'bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10' : 'bg-[#0A0F1E]/95'}
          backdrop-blur-xl`}
      >
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div
                className={`rounded-xl p-2 ${card.highlight ? 'bg-cyan-500/20' : 'bg-[#0A0F1E]'}`}
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

          <Button
            onClick={card.action}
            className={`mt-6 w-full gap-2 transition-all duration-300 
              ${
                card.highlight
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:opacity-90'
                  : 'border-cyan-500/20 bg-[#0A0F1E] hover:bg-cyan-500/10'
              }`}
          >
            <span>{card.button.text}</span>
            <card.button.icon className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs font-medium text-cyan-400">
                  Disponível para novos projetos
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {/* Localização */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-cyan-100/60"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">São Vicente - SP, Brasil</span>
                </motion.div>

                {/* Cards de Contato */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactCards.map((card, index) => (
                    <ContactCard key={index} card={card} />
                  ))}
                </div>
              </div>

              {/* Rodapé */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-cyan-500/20 bg-[#0A0F1E]/95 p-6 backdrop-blur-xl"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="border-cyan-500/20 text-cyan-100/60">
                    Desenvolvimento Web
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/20 text-cyan-100/60">
                    Infraestrutura
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/20 text-cyan-100/60">
                    Segurança
                  </Badge>
                </div>
                <p className="text-center text-sm text-cyan-100/60">
                  Vamos trabalhar juntos para transformar suas ideias em realidade
                </p>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContatoPage;
