import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Briefcase, Globe2, Mail, User, ChevronRight, Layers } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Navigation = ({ isOpen, onClose }) => {
  const router = useRouter();

  const menuItems = [
    { title: 'Início', icon: <Home className="h-5 w-5" />, href: '/' },
    { title: 'Minha História', icon: <User className="h-5 w-5" />, href: '/historia' },
    { title: 'Projetos', icon: <Layers className="h-5 w-5" />, href: '/projetos' },
    { title: 'Formação', icon: <Globe2 className="h-5 w-5" />, href: '/formacao' },
    { title: 'Experiências', icon: <Briefcase className="h-5 w-5" />, href: '/experiencias' },
    { title: 'Contato', icon: <Mail className="h-5 w-5" />, href: '/contato' },
  ];

  const NavLink = ({ item, onClick }) => {
    const isActive = router.pathname === item.href;

    return (
      <Link
        href={item.href}
        className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
          isActive
            ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400'
            : 'text-gray-400 hover:bg-neutral-800/50 hover:text-cyan-300'
        }`}
        onClick={onClick}
      >
        <span className="transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
        <span>{item.title}</span>
        {isActive && <ChevronRight className="ml-auto h-4 w-4 animate-pulse text-cyan-400" />}
      </Link>
    );
  };

  const DesktopNav = () => (
    <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-neutral-800 bg-[#0A0F1E]/95 p-6 backdrop-blur-xl md:flex">
      <div className="mb-8 space-y-2">
        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent">
          Jonathan Souza Moyano
        </h1>
        <p className="text-sm text-cyan-100/40">Tecnologia, Liderança & Inovação</p>
      </div>

      <div className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>

      <div className="mt-4 border-t border-neutral-800 pt-4">
        <p className="text-center text-xs text-cyan-100/30">© 2024 Jonathan Souza Moyano</p>
      </div>
    </nav>
  );

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-[300px] border-r border-neutral-800 bg-[#0A0F1E]/95 p-0 backdrop-blur-xl"
      >
        <SheetHeader className="border-b border-neutral-800 p-6">
          <SheetTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-left font-bold text-transparent">
            Menu Principal
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          {menuItems.map((item) => (
            <NavLink key={item.href} item={item} onClick={onClose} />
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
