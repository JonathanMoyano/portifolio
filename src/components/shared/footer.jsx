import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Globe, ArrowUp, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/components/layout/Layout';

const Footer = () => {
  const { currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      about: 'Sobre',
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      rights: 'Todos os direitos reservados',
      history: 'Minha História',
      tech: 'Tecnologia',
      fireman: 'Bombeiro Civil',
      commerce: 'Comércio Exterior',
      backToTop: 'Voltar ao topo',
      location: 'Localização',
      description: 'Profissional com experiência em Tecnologia, Segurança e Comércio Exterior.',
      email: 'E-mail',
      phone: 'Telefone',
      clickToCopy: 'Clique para copiar',
    },
    en: {
      about: 'About',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved',
      history: 'My Story',
      tech: 'Technology',
      fireman: 'Civil Firefighter',
      commerce: 'Foreign Trade',
      backToTop: 'Back to top',
      location: 'Location',
      description: 'Professional with experience in Technology, Safety and Foreign Trade.',
      email: 'Email',
      phone: 'Phone',
      clickToCopy: 'Click to copy',
    },
    es: {
      about: 'Sobre',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados',
      history: 'Mi Historia',
      tech: 'Tecnología',
      fireman: 'Bombero Civil',
      commerce: 'Comercio Exterior',
      backToTop: 'Volver arriba',
      location: 'Ubicación',
      description: 'Profesional con experiencia en Tecnología, Seguridad y Comercio Exterior.',
      email: 'Correo',
      phone: 'Teléfono',
      clickToCopy: 'Haga clic para copiar',
    },
  };

  const t = translations[currentLanguage];
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/historia', label: t.history },
    { href: '/tecnologia', label: t.tech },
    { href: '/bombeiro', label: t.fireman },
    { href: '/comercio', label: t.commerce },
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/yourusername', label: 'Github' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:jsouza1993@email.com', label: 'Email' },
    { Icon: Globe, href: '#', label: 'Website' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      primary: 'São Vicente - São Paulo, SP',
      secondary: 'Brasil',
      action: null,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      primary: 'jsouza1993@email.com',
      secondary: t.clickToCopy,
      action: () => navigator.clipboard.writeText('jsouza1993@email.com'),
    },
    {
      icon: <Phone className="h-5 w-5" />,
      primary: '+55 (13) 97412-4438',
      secondary: t.clickToCopy,
      action: () => navigator.clipboard.writeText('+55 (13) 97412-4438'),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
              Jonathan Souza Moyano
            </h3>
            <p className="mb-4 text-gray-400">{t.description}</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="hover:text-purple-400"
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

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-100">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 transition-colors hover:text-purple-400"
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
            <ul className="space-y-4">
              {contactInfo.map(({ icon, primary, secondary, action }, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${
                    action ? 'cursor-pointer hover:text-purple-400' : ''
                  }`}
                  onClick={action}
                >
                  <span className="text-purple-400">{icon}</span>
                  <div>
                    <p className="text-gray-300">{primary}</p>
                    <p className="text-sm text-gray-400">{secondary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-neutral-800 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            © {currentYear} Jonathan Souza Moyano - {t.rights}
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:text-purple-400"
            aria-label={t.backToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
