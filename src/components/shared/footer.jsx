import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/components/layout/Layout';

const Footer = () => {
  const { currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      rights: 'Todos os direitos reservados',
      history: 'Minha História',
      studies: 'Formação',
      projects: 'Projetos',
      location: 'São Vicente - SP, Brasil',
    },
    en: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved',
      history: 'My Story',
      studies: 'Studies',
      projects: 'Projects',
      location: 'São Vicente - SP, Brazil',
    },
    es: {
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados',
      history: 'Mi Historia',
      studies: 'Estudios',
      projects: 'Proyectos',
      location: 'São Vicente - SP, Brasil',
    },
  };

  const t = translations[currentLanguage];
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/historia', label: t.history },
    { href: '/projetos', label: t.projects },
    { href: '/formacao', label: t.studies },
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/JonathanPolezel', label: 'Github' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/jonathansouzamoyano', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:jsouza1993@gmail.com', label: 'Email' },
  ];

  const contactInfo = {
    location: t.location,
    email: 'jsouza1993@gmail.com',
    phone: '+55 (13) 97412-4438',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-neutral-800 bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
              Jonathan Souza Moyano
            </h3>
            <p className="mb-4 text-gray-400">{contactInfo.location}</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="transition-colors duration-300 hover:text-blue-400"
                  aria-label={label}
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-100">{t.quickLinks}</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-100">{t.contact}</h4>
            <div className="space-y-2">
              <p
                className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-400"
                onClick={() => navigator.clipboard.writeText(contactInfo.email)}
              >
                {contactInfo.email}
              </p>
              <p
                className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-blue-400"
                onClick={() => navigator.clipboard.writeText(contactInfo.phone)}
              >
                {contactInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex items-center justify-between border-t border-neutral-800 pt-8">
          <p className="text-sm text-gray-400">
            © {currentYear} Jonathan Souza Moyano - {t.rights}
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full transition-colors duration-300 hover:text-blue-400"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
