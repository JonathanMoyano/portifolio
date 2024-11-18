import React, { useState, useEffect } from 'react';
import Navigation from '../shared/navigation';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Configurações de animação
const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  slideIn: {
    initial: { width: '0%' },
    animate: { width: '100%' },
    transition: { duration: 1 },
  },
};

// Componente do Botão do Menu
const MenuButton = ({ onClick }) => (
  <motion.div {...animations.scaleIn} className="fixed left-4 top-4 z-50 md:hidden">
    <Button
      size="icon"
      variant="outline"
      className="h-10 w-10 border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl"
      onClick={onClick}
    >
      <Menu className="h-5 w-5 text-cyan-400" />
    </Button>
  </motion.div>
);

// Componente da Barra de Loading
const LoadingBar = () => (
  <motion.div {...animations.fadeIn} className="fixed left-0 top-0 z-50 h-1 w-full">
    <motion.div
      {...animations.slideIn}
      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
    />
  </motion.div>
);

// Componente do Overlay
const Overlay = ({ onClick }) => (
  <motion.div
    {...animations.fadeIn}
    onClick={onClick}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
  />
);

// Componente Principal
const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isHomePage = router.pathname === '/';

  // Efeitos
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handlers = {
      start: () => setIsLoading(true),
      complete: () => setIsLoading(false),
      resize: () => {
        if (window.innerWidth >= 768) {
          setIsSidebarOpen(false);
        }
      },
    };

    // Adicionar event listeners
    router.events.on('routeChangeStart', handlers.start);
    router.events.on('routeChangeComplete', handlers.complete);
    router.events.on('routeChangeError', handlers.complete);
    window.addEventListener('resize', handlers.resize);

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handlers.start);
      router.events.off('routeChangeComplete', handlers.complete);
      router.events.off('routeChangeError', handlers.complete);
      window.removeEventListener('resize', handlers.resize);
    };
  }, [router]);

  // Funções de manipulação
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      {/* Navegação */}
      <Navigation isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Menu Button Mobile */}
      <AnimatePresence>{isMounted && <MenuButton onClick={handleOpenSidebar} />}</AnimatePresence>

      {/* Loading Bar */}
      <AnimatePresence>{isLoading && <LoadingBar />}</AnimatePresence>

      {/* Main Content */}
      <div className="flex min-h-screen flex-col">
        <main
          className={cn(
            'flex-1 transition-all duration-300 ease-in-out',
            isHomePage ? '' : 'md:pl-64',
            isMounted ? 'pt-20 md:pt-0' : ''
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={cn('h-full', !isHomePage && 'relative')}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>{isSidebarOpen && <Overlay onClick={handleCloseSidebar} />}</AnimatePresence>
    </div>
  );
};

export default Layout;
