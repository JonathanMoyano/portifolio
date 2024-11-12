import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Globe, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '../layout/Layout';

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
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
              Jonathan Souza Moyano
            </h3>
            <p className="mb-4 text-gray-400">
              Profissional com experiência em Tecnologia, Segurança e Comércio Exterior.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Github">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Website">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-100">
              {translations[currentLanguage].quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/historia">
                  <a className="text-gray-400 transition-colors hover:text-gray-300">
                    {translations[currentLanguage].history}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tecnologia">
                  <a className="text-gray-400 transition-colors hover:text-gray-300">
                    {translations[currentLanguage].tech}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/bombeiro">
                  <a className="text-gray-400 transition-colors hover:text-gray-300">
                    {translations[currentLanguage].fireman}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/comercio">
                  <a className="text-gray-400 transition-colors hover:text-gray-300">
                    {translations[currentLanguage].commerce}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-100">
              {translations[currentLanguage].contact}
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400">São Vicente - São Paulo, SP</li>
              <li>
                <a
                  href="mailto:jsouza1993@email.com"
                  className="text-gray-400 transition-colors hover:text-gray-300"
                >
                  jsouza1993@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5513-74124438"
                  className="text-gray-400 transition-colors hover:text-gray-300"
                >
                  +55 (13) 97412-4438
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-neutral-800 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            © {currentYear} Jonathan Souza Moyano {translations[currentLanguage].rights}
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
            aria-label={translations[currentLanguage].backToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
