import React, { useState} from 'react';
import Navigation from '../shared/navigation';
import MatrixRain from '../shared/MatrixRain';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ... (Componentes MenuButton, LoadingBar, Overlay não precisam de alteração) ...

// Componente Principal do Layout
const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading] = useState(false);
  const [isMounted] = useState(false);

  const isHomePage = router.pathname === '/';

  // ... (Hooks useEffect não precisam de alteração) ...

  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    // MUDANÇA 1: Removido o 'bg-[#0A0F1E]' daqui. O fundo agora será composto
    // apenas pelo MatrixRain e o gradiente. Não se esqueça de remover o 'bg-red-500' do teste!
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <Navigation isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <AnimatePresence>{isMounted && <MenuButton onClick={handleOpenSidebar} />}</AnimatePresence>
      <AnimatePresence>{isLoading && <LoadingBar />}</AnimatePresence>

      {/* MUDANÇA 2: Adicionadas classes de Flexbox para centralizar o conteúdo */}
      <main
        className={cn(
          'relative z-10 flex min-h-screen flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out sm:p-6',
          isHomePage ? '' : 'md:pl-64',
          isMounted ? 'pt-20 md:pt-6' : 'pt-6'
        )}
      >
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </main>

      <AnimatePresence>{isSidebarOpen && <Overlay onClick={handleCloseSidebar} />}</AnimatePresence>
    </div>
  );
};


// Componente do Botão do Menu
const MenuButton = ({ onClick }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed left-4 top-4 z-50 md:hidden">
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
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed left-0 top-0 z-50 h-1 w-full">
    <motion.div
      initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1 }}
      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
    />
  </motion.div>
);

// Componente do Overlay
const Overlay = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    onClick={onClick}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
  />
);

export default Layout;