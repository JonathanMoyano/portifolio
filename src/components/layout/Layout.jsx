import React, { useState, useEffect } from 'react';
import Navigation from '../shared/navigation';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isHomePage = router.pathname === '/';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    window.addEventListener('resize', handleResize);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  // Menu button só aparece em mobile e não na home
  const showMenuButton = isMounted;

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Menu Button Mobile */}
      <AnimatePresence>
        {showMenuButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed left-4 top-4 z-50 md:hidden"
          >
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5 text-cyan-400" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 h-1 w-full"
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex min-h-screen flex-col">
        <main
          className={`flex-1 transition-all duration-300 ease-in-out
            ${isHomePage ? '' : 'md:pl-64'}
            ${showMenuButton ? 'pt-20 md:pt-0' : ''}
          `}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`h-full ${isHomePage ? '' : 'relative'}`}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Overlay para mobile quando menu está aberto */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
