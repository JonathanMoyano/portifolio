import React from "react";
import { Github, Linkedin, Mail, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "../layout/Layout";

const Footer = () => {
  const { currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      about: "Sobre",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      rights: "Todos os direitos reservados",
      history: "Minha História",
      tech: "Tecnologia",
      fireman: "Bombeiro Civil",
      commerce: "Comércio Exterior",
      backToTop: "Voltar ao topo",
    },
    en: {
      about: "About",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved",
      history: "My Story",
      tech: "Technology",
      fireman: "Civil Firefighter",
      commerce: "Foreign Trade",
      backToTop: "Back to top",
    },
    es: {
      about: "Sobre",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      rights: "Todos los derechos reservados",
      history: "Mi Historia",
      tech: "Tecnología",
      fireman: "Bombero Civil",
      commerce: "Comercio Exterior",
      backToTop: "Volver arriba",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Seu Nome
            </h3>
            <p className="text-gray-400 mb-4">
              Profissional multidisciplinar com experiência em Tecnologia,
              Segurança e Comércio Exterior.
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
            <h4 className="font-semibold mb-4 text-gray-100">
              {translations[currentLanguage].quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/historia"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {translations[currentLanguage].history}
                </a>
              </li>
              <li>
                <a
                  href="/tecnologia"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {translations[currentLanguage].tech}
                </a>
              </li>
              <li>
                <a
                  href="/bombeiro"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {translations[currentLanguage].fireman}
                </a>
              </li>
              <li>
                <a
                  href="/comercio"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {translations[currentLanguage].commerce}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">
              {translations[currentLanguage].contact}
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400">São Paulo, SP</li>
              <li>
                <a
                  href="mailto:contato@email.com"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  contato@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Seu Nome. {translations[currentLanguage].rights}
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
