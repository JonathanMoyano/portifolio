import React from "react";
import {
  Home,
  Code,
  Shield,
  Globe2,
  Briefcase,
  Mail,
  User,
  ChevronRight,
} from "lucide-react";
import { useAccessibility } from "../layout/Layout";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = ({ isOpen, onClose, currentPath }) => {
  const { currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      home: "Início",
      history: "Minha História",
      tech: "Tecnologia",
      fireman: "Bombeiro Civil",
      commerce: "Comércio Exterior",
      experiences: "Experiências",
      contact: "Contato",
      title: "Menu Principal",
    },
    en: {
      home: "Home",
      history: "My Story",
      tech: "Technology",
      fireman: "Civil Firefighter",
      commerce: "Foreign Trade",
      experiences: "Experiences",
      contact: "Contact",
      title: "Main Menu",
    },
    es: {
      home: "Inicio",
      history: "Mi Historia",
      tech: "Tecnología",
      fireman: "Bombero Civil",
      commerce: "Comercio Exterior",
      experiences: "Experiencias",
      contact: "Contacto",
      title: "Menú Principal",
    },
  };

  const menuItems = [
    {
      title: translations[currentLanguage].home,
      icon: <Home className="w-5 h-5" />,
      path: "/",
    },
    {
      title: translations[currentLanguage].history,
      icon: <User className="w-5 h-5" />,
      path: "/historia",
    },
    {
      title: translations[currentLanguage].tech,
      icon: <Code className="w-5 h-5" />,
      path: "/tecnologia",
    },
    {
      title: translations[currentLanguage].fireman,
      icon: <Shield className="w-5 h-5" />,
      path: "/bombeiro",
    },
    {
      title: translations[currentLanguage].commerce,
      icon: <Globe2 className="w-5 h-5" />,
      path: "/comercio",
    },
    {
      title: translations[currentLanguage].experiences,
      icon: <Briefcase className="w-5 h-5" />,
      path: "/experiencias",
    },
    {
      title: translations[currentLanguage].contact,
      icon: <Mail className="w-5 h-5" />,
      path: "/contato",
    },
  ];

  const isActiveLink = (path) => currentPath === path;

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-neutral-900 border-r border-neutral-800 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Seu Nome
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Profissional Multidisciplinar
        </p>
      </div>

      <div className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActiveLink(item.path)
                ? "bg-purple-500/10 text-purple-400"
                : "text-gray-400 hover:text-gray-100 hover:bg-neutral-800"
            }`}
            aria-current={isActiveLink(item.path) ? "page" : undefined}
          >
            {item.icon}
            <span>{item.title}</span>
            {isActiveLink(item.path) && (
              <ChevronRight className="w-4 h-4 ml-auto" />
            )}
          </a>
        ))}
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-800">
        <p className="text-xs text-gray-400 text-center">© 2024 Seu Nome</p>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[300px] bg-neutral-900 border-r border-neutral-800 p-0"
      >
        <SheetHeader className="p-4 border-b border-neutral-800">
          <SheetTitle className="text-left font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
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
                  ? "bg-purple-500/10 text-purple-400"
                  : "text-gray-400 hover:text-gray-100 hover:bg-neutral-800"
              }`}
              onClick={onClose}
              aria-current={isActiveLink(item.path) ? "page" : undefined}
            >
              {item.icon}
              <span>{item.title}</span>
              {isActiveLink(item.path) && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
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
