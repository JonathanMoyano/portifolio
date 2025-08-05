import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';



const contactInfo = {
  email: 'contato@jonathansouzamoyano.com.br', 
  phone: '5513974124438', 
  location: 'São Vicente - SP, Brasil', 
  linkedInUrl: 'https://www.linkedin.com/in/jonathansouzamoyano/', 
  githubUrl: 'https://github.com/JonathanPolezel', 
};


const contactCards = [
  {
    title: 'E-mail',
    description: 'Envie uma mensagem direta para minha caixa de entrada.',
    icon: Mail,
    action: () => {
      window.location.href = `mailto:${contactInfo.email}`;
    },
    button: {
      text: 'Enviar E-mail',
      icon: Send,
    },
  },
  {
    title: 'WhatsApp',
    description: 'Ideal para uma resposta rápida e conversas diretas.',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
      </svg>
    ),
    action: () => {
      window.open(`https://wa.me/${contactInfo.phone}`, '_blank');
    },
    button: {
      text: 'Iniciar Conversa',
      icon: Send,
    },
  },
  {
    title: 'LinkedIn',
    description: 'Conecte-se e veja minha trajetória profissional completa.',
    icon: Linkedin,
    action: () => {
      window.open(contactInfo.linkedInUrl, '_blank');
    },
    button: {
      text: 'Ver Perfil',
      icon: Linkedin,
    },
  },
  {
    title: 'GitHub',
    description: 'Explore meus projetos, códigos e contribuições.',
    icon: Github,
    action: () => {
      window.open(contactInfo.githubUrl, '_blank');
    },
    button: {
      text: 'Ver Repositórios',
      icon: Github,
    },
  },
];


const OnlineStatus = () => (
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
    <Badge variant="outline" className="border-green-400/30 bg-green-500/10 py-2 text-sm">
      <div className="relative mr-2 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </div>
      <span className="text-green-400">Disponível para novos projetos</span>
    </Badge>
  </motion.div>
);

const ContactCard = ({ card, index }) => {
  const CardIcon = card.icon;
  const ButtonIcon = card.button.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col justify-between overflow-hidden border-cyan-500/10 bg-transparent transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-3">
              <CardIcon className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-cyan-100/60">{card.description}</p>
            </div>
          </div>
        </CardContent>
        <div className="px-6 pb-6 pt-0">
          <Button onClick={card.action} className="w-full gap-2 bg-slate-800/80 text-cyan-300 transition-colors hover:bg-slate-700">
            <span>{card.button.text}</span>
            <ButtonIcon className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const LocationFooter = () => (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
    className="mt-12 flex items-center justify-center gap-2 text-cyan-100/60"
  >
    <MapPin className="h-4 w-4" />
    <span className="text-sm">{contactInfo.location}</span>
  </motion.div>
);



const ContatoPage = () => {
  return (

      <div className="mx-auto max-w-4xl text-center">
        <PageHeader
          overline="Contato"
          title="Vamos Conversar?"
          description="Sinta-se à vontade para entrar em contato. Estou sempre aberto a novas oportunidades, projetos e um bom café."
        />
        
        <OnlineStatus />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {contactCards.map((card, index) => (
            <ContactCard key={index} card={card} index={index} />
          ))}
        </div>

        <LocationFooter />
      </div>
  );
};

export default ContatoPage;
