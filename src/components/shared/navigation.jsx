import React from 'react';
import { Home, Code, Shield, Briefcase, Mail, User, ChevronRight } from 'lucide-react';
import { useAccessibility } from '../layout/Layout';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Navigation = ({ isOpen, onClose, currentPath }) => {
  const { currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      home: 'Início',
      history: 'Minha História',
      tech: 'Tecnologia',
      fireman: 'Bombeiro Civil',
      // commerce: "Comércio Exterior",
      experiences: 'Experiências',
      contact: 'Contato',
      title: 'Menu Principal',
    },
    en: {
      home: 'Home',
      history: 'My Story',
      tech: 'Technology',
      fireman: 'Civil Firefighter',
      // commerce: 'Foreign Trade',
      experiences: 'Experiences',
      contact: 'Contact',
      title: 'Main Menu',
    },
    es: {
      home: 'Inicio',
      history: 'Mi Historia',
      tech: 'Tecnología',
      fireman: 'Bombero Civil',
      // commerce: 'Comercio Exterior',
      experiences: 'Experiencias',
      contact: 'Contacto',
      title: 'Menú Principal',
    },
  };

  const menuItems = [
    {
      title: translations[currentLanguage].home,
      icon: <Home className="h-5 w-5" />,
      path: '/',
    },
    {
      title: translations[currentLanguage].history,
      icon: <User className="h-5 w-5" />,
      path: '/historia',
    },
    {
      title: translations[currentLanguage].tech,
      icon: <Code className="h-5 w-5" />,
      path: '/tecnologia',
    },
    {
      title: translations[currentLanguage].fireman,
      icon: <Shield className="h-5 w-5" />,
      path: '/bombeiro',
    },
    // {
    //   title: translations[currentLanguage].commerce,
    //   icon: <Globe2 className="h-5 w-5" />,
    //   path: '/comercio',
    // },
    {
      title: translations[currentLanguage].experiences,
      icon: <Briefcase className="h-5 w-5" />,
      path: '/experiencias',
    },
    {
      title: translations[currentLanguage].contact,
      icon: <Mail className="h-5 w-5" />,
      path: '/contato',
    },
  ];

  const isActiveLink = (path) => currentPath === path;

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-neutral-800 bg-neutral-900 p-4 md:flex">
      <div className="mb-8">
        <h1 className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
          Jonathan Souza Moyano
        </h1>
        <p className="mt-1 text-sm text-gray-400">Tecnologia, Liderança & Inovação</p>
      </div>

      <div className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              isActiveLink(item.path)
                ? 'bg-purple-500/10 text-purple-400'
                : 'text-gray-400 hover:bg-neutral-800 hover:text-gray-100'
            }`}
            aria-current={isActiveLink(item.path) ? 'page' : undefined}
          >
            {item.icon}
            <span>{item.title}</span>
            {isActiveLink(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
          </a>
        ))}
      </div>

      <div className="mt-4 border-t border-neutral-800 pt-4">
        <p className="text-center text-xs text-gray-400">© 2024 Jonathan Souza Moyano</p>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[300px] border-r border-neutral-800 bg-neutral-900 p-0"
      >
        <SheetHeader className="border-b border-neutral-800 p-4">
          <SheetTitle className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-left font-bold text-transparent">
            {translations[currentLanguage].title}
          </SheetTitle>
        </SheetHeader>
        <div className="py-4">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                isActiveLink(item.path)
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'text-gray-400 hover:bg-neutral-800 hover:text-gray-100'
              }`}
              onClick={onClose}
              aria-current={isActiveLink(item.path) ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.title}</span>
              {isActiveLink(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navigation;
