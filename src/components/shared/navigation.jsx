import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Home,
  User,
  Award,
  Layers,
  Mail,
  ChevronDown,
  Github,
  Linkedin,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  BookOpen, 
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


const menuItems = [
  { title: 'Início', icon: Home, href: '/', description: 'Página inicial do portfólio' },
  {
    title: 'Sobre Mim',
    icon: User,
    href: '/sobre',
    description: 'Conheça minha jornada e perfil',
    subItems: [
      { title: 'Perfil Profissional', icon: Briefcase, href: '/sobre/perfil' },
      { title: 'Minha História', icon: BookOpen, href: '/sobre/historia' },
    ],
  },
  {
    title: 'Qualificações',
    icon: Award,
    href: '/qualificacoes',
    description: 'Minha experiência e formação',
    subItems: [
      { title: 'Experiência', icon: Briefcase, href: '/experiencias/historico-profissional' },
      { title: 'Formação', icon: GraduationCap, href: '/experiencias/formacoes' },
    ],
  },
  {
    title: 'Projetos',
    icon: Layers,
    href: '/projetos',
    description: 'Meus projetos em destaque',
  },
  { title: 'Contato', icon: Mail, href: '/contato', description: 'Vamos conversar?' },
];

const socialLinks = [
    { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/jonathansouzamoyano/' },
    { title: 'GitHub', icon: Github, href: 'https://github.com/JonathanPolezel' },
]


const NavLink = ({ item, isSubItem = false, onClose }) => {
  const router = useRouter();
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isParentActive = hasSubItems && router.pathname.startsWith(item.href);
  const isDirectActive = router.pathname === item.href;
  const [isExpanded, setIsExpanded] = useState(isParentActive);

  useEffect(() => {
    setIsExpanded(isParentActive);
  }, [router.pathname, isParentActive]);

  const Icon = item.icon;

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  const handleToggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const linkContent = (
    <>
      {Icon && <Icon className={cn('h-5 w-5 flex-shrink-0', isSubItem && 'h-4 w-4')} />}
      <span className="flex-1 text-left">{item.title}</span>
      {hasSubItems && (
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-300', isExpanded && 'rotate-180')} />
      )}
    </>
  );

  const linkClasses = cn(
    'group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 relative',
    isSubItem ? 'pl-4' : 'font-semibold',
    (isDirectActive && !hasSubItems) || (isParentActive && !isSubItem)
      ? 'bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]'
      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white',
  );

  if (hasSubItems) {
    return (
      <div>
        <button onClick={handleToggleExpand} className={linkClasses} style={{ width: '100%' }}>
          {isParentActive && <motion.div layoutId="active-pill" className="absolute -left-4 top-0 h-full w-1 rounded-r-full bg-cyan-400" />}
          {linkContent}
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 flex flex-col gap-1 overflow-hidden pl-5 border-l-2 border-slate-800"
            >
              {item.subItems.map((subItem) => (
                <NavLink key={subItem.href} item={subItem} isSubItem onClose={onClose} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link href={item.href} onClick={handleLinkClick} className={linkClasses}>
      {isDirectActive && <motion.div layoutId="active-pill" className="absolute -left-4 top-0 h-full w-1 rounded-r-full bg-cyan-400" />}
      {linkContent}
    </Link>
  );
};

const DesktopNav = () => (
  <nav className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/5 bg-gray-900/50 p-4 backdrop-blur-xl md:flex">
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 px-2">
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
        Jonathan S. Moyano
      </h1>
      <p className="text-xs text-slate-500">Analista de Infraestrutura </p><p> </p>Suporte N2</p>
    </motion.div>
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 }}}} className="flex-1 space-y-2">
      {menuItems.map((item) => (
        <motion.div key={item.href} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }}}>
          <NavLink item={item} />
        </motion.div>
      ))}
    </motion.div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-auto flex flex-col gap-4 border-t border-white/5 pt-4">
      <div className="flex items-center justify-center gap-4">
        {socialLinks.map(link => {
          const Icon = link.icon;
          return (
            <a href={link.href} key={link.title} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" title={link.title}>
              <Icon className="h-5 w-5"/>
            </a>
          )
        })}
      </div>
       <p className="text-center text-xs text-slate-600">© {new Date().getFullYear()} Jonathan Moyano</p>
    </motion.div>
  </nav>
);

const MobileNav = ({ isOpen, onClose }) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent side="left" className="w-[300px] border-r border-slate-800 bg-slate-900/80 p-0 backdrop-blur-lg">
      <SheetHeader className="border-b border-slate-800 p-4">
        <SheetTitle className="text-left">
          <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-bold text-transparent">Menu Principal</h2>
        </SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => <NavLink key={item.href} item={item} onClose={onClose} />)}
      </div>
    </SheetContent>
  </Sheet>
);

const MenuToggleButton = ({ isOpen, onToggle }) => (
  <motion.button
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    onClick={onToggle}
    className="fixed bottom-5 right-5 z-50 rounded-full bg-slate-800/80 p-3 text-white backdrop-blur-sm md:hidden"
    aria-label="Abrir menu"
  >
    <motion.div variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}>
      {isOpen ? <X /> : <Menu />}
    </motion.div>
  </motion.button>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <>
      <DesktopNav />
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MenuToggleButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default Navigation;
