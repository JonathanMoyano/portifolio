import React, { useState, useEffect } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/footer';
import Navigation from '../shared/navigation';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <div className="flex min-h-screen flex-col">
        <Navigation
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentPath={router.pathname}
        />

        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 pt-16 transition-all duration-300 md:ml-64">
          {isLoading && (
            <div className="fixed left-0 top-0 z-50 h-1 w-full">
              <div className="animate-loading h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />
            </div>
          )}

          <div className="transition-all duration-300">{children}</div>
        </main>

        <div className="transition-all duration-300 md:ml-64">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
