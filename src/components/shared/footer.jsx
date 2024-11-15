import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const currentLanguage = router.pathname.split('/')[1] || 'pt';

  const translations = {
    pt: 'Todos os direitos reservados',
    en: 'All rights reserved',
    es: 'Todos los derechos reservados',
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/JonathanPolezel', label: 'Github' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/jonathansouzamoyano', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:jsouza1993@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="fixed bottom-0 right-0 z-50 h-16 w-full border-t border-neutral-800 bg-[#0A0F1E]/80 backdrop-blur-xl md:w-[calc(100%-256px)]">
      <div className="flex h-full items-center justify-between px-4">
        <p className="text-sm text-cyan-100/40">
          © {new Date().getFullYear()} - {translations[currentLanguage] || translations.pt}
        </p>
        <div className="flex gap-2">
          {socialLinks.map(({ Icon, href, label }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
