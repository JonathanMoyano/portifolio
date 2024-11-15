// components/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import Header from '../shared/Header';
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
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex min-h-screen flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 pt-16 md:pl-64">
          {isLoading && (
            <div className="fixed left-0 top-0 z-50 h-1 w-full">
              <div className="animate-progress h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </div>
          )}

          <div className="relative">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
