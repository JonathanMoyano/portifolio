import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/footer';
import Navigation from '../shared/navigation';
import { useRouter } from 'next/router';

// Contexto de Acessibilidade
export const AccessibilityContext = createContext(null);

// Provedor de Acessibilidade
export const AccessibilityProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      try {
        const savedPreferences = localStorage.getItem('accessibility-preferences');
        if (savedPreferences) {
          const {
            fontSize: savedFontSize,
            contrast: savedContrast,
            language,
            darkMode,
          } = JSON.parse(savedPreferences);
          setFontSize(savedFontSize);
          setContrast(savedContrast);
          setCurrentLanguage(language);
          setIsDarkMode(darkMode);
        }
      } catch (error) {
        console.error('Erro ao carregar preferências:', error);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      try {
        const preferences = {
          fontSize,
          contrast,
          language: currentLanguage,
          darkMode: isDarkMode,
        };
        localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));
      } catch (error) {
        console.error('Erro ao salvar preferências:', error);
      }
    }
  }, [fontSize, contrast, currentLanguage, isDarkMode, isClient]);

  useEffect(() => {
    if (isClient) {
      document.documentElement.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize, isClient]);

  const value = {
    isDarkMode,
    setIsDarkMode,
    currentLanguage,
    setCurrentLanguage,
    fontSize,
    setFontSize,
    contrast,
    setContrast,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, contrast, fontSize } = useAccessibility();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} ${contrast ? 'high-contrast' : ''}`}>
      <div className="flex min-h-screen flex-col" style={{ fontSize: `${fontSize}px` }}>
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

          <div className={`transition-all duration-300 fade-in ${contrast ? 'contrast-high' : ''}`}>
            {children}
          </div>
        </main>

        <div className="transition-all duration-300 md:ml-64">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
