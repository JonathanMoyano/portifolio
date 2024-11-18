import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, User, Layers, Briefcase, Mail, ChevronRight, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Início',
    icon: Home,
    href: '/',
    description: 'Página inicial do portfólio',
  },
  {
    title: 'Sobre',
    icon: User,
    href: '/sobre',
    description: 'Conheça mais sobre mim',
    subItems: [
      { title: 'Perfil', href: '/sobre/perfil' },
      { title: 'História', href: '/sobre/historia' },
    ],
  },
  {
    title: 'Projetos',
    icon: Layers,
    href: '/projetos',
    description: 'Meus projetos',
    subItems: [
      { title: 'TROK!', href: '/projetos/trok' },
      { title: 'Portfólio', href: '/projetos/portfolio' },
    ],
  },
  {
    title: 'Experiência',
    icon: Briefcase,
    href: '/experiencia',
    description: 'Experiência profissional',
    subItems: [
      { title: 'Histórico Profissional', href: '/experiencia/historico-profissional' },
      { title: 'Certificações', href: '/experiencia/certificacoes' },
    ],
  },
  {
    title: 'Contato',
    icon: Mail,
    href: '/contato',
    description: 'Entre em contato',
  },
];

const NavLink = ({ item, isSubItem = false, onClose }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = router.pathname === item.href;
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const Icon = item.icon;

  const handleTitleClick = async () => {
    if (!isSubItem) {
      onClose?.();
      await router.push(item.href);
    }
  };

  const handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const linkClasses = cn(
    'group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300',
    isActive
      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400'
      : 'text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-300',
    isSubItem ? 'ml-6 text-sm' : 'sm:px-4 sm:py-3'
  );

  return (
    <div className="relative mb-2">
      <Link href={item.href} onClick={handleTitleClick} className={linkClasses}>
        {!isSubItem && (
          <span className="flex items-center transition-transform duration-200 group-hover:scale-110">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        )}

        <span className="flex-1 text-left text-sm sm:text-base">{item.title}</span>

        {hasSubItems && (
          <button onClick={handleExpandClick} className="rounded-full p-1 hover:bg-cyan-500/10">
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                isExpanded && 'rotate-180'
              )}
            />
          </button>
        )}

        {isActive && !hasSubItems && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-auto flex items-center gap-2"
          >
            <span className="hidden text-xs text-cyan-400/60 sm:inline">Atual</span>
            <ChevronRight className="h-3 w-3 animate-pulse text-cyan-400 sm:h-4 sm:w-4" />
          </motion.div>
        )}
      </Link>

      {!isSubItem && (
        <div className="pointer-events-none absolute left-full top-0 z-50 hidden md:block">
          <div className="relative ml-2 rounded-md bg-[#0A0F1E] px-3 py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
            <div className="absolute -left-1 top-[50%] h-2 w-2 -translate-y-1/2 rotate-45 bg-[#0A0F1E]" />
            <p className="whitespace-nowrap text-sm text-cyan-100/60">{item.description}</p>
          </div>
        </div>
      )}

      {hasSubItems && isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1 overflow-hidden"
        >
          {item.subItems.map((subItem) => (
            <NavLink key={subItem.href} item={subItem} isSubItem onClose={onClose} />
          ))}
        </motion.div>
      )}
    </div>
  );
};
const DesktopNav = () => (
  <nav className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl transition-all duration-300 md:flex lg:p-6">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 space-y-3" // Aumentado o mb-6 para mb-8 e space-y-2 para space-y-3
    >
      <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-lg font-bold text-transparent lg:text-xl">
        Jonathan Souza Moyano
      </h1>
      <p className="text-xs text-cyan-100/40 lg:text-sm">Tecnologia, Liderança & Inovação</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex-1 space-y-1.5" // Aumentado space-y-0.5 para space-y-1.5
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <NavLink item={item} />
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-6 border-t border-cyan-500/20 pt-4" // Aumentado mt-4 para mt-6
    >
      <p className="text-center text-[10px] text-cyan-100/30 sm:text-xs">
        © 2024 Jonathan Souza Moyano
      </p>
    </motion.div>
  </nav>
);

const MobileNav = ({ isOpen, onClose }) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent
      side="left"
      className="w-[280px] border-r border-cyan-500/20 bg-[#0A0F1E]/95 p-0 backdrop-blur-xl sm:w-[300px]"
    >
      <SheetHeader className="border-b border-cyan-500/20 p-4 sm:p-6">
        <SheetTitle className="space-y-2">
          {' '}
          {/* Aumentado space-y-1 para space-y-2 */}
          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-left text-lg font-bold text-transparent">
            Menu Principal
          </h2>
          <p className="text-xs text-cyan-100/40">Navegue pelo portfólio</p>
        </SheetTitle>
      </SheetHeader>
      <motion.div
        className="flex flex-col gap-2 p-4 sm:p-6" // Aumentado gap-1 para gap-2 e ajustado padding
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <NavLink item={item} onClose={onClose} />
          </motion.div>
        ))}
      </motion.div>
    </SheetContent>
  </Sheet>
);

const Navigation = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <DesktopNav />
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navigation;
