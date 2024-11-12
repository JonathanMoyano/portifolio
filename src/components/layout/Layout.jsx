import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';
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

  // Marcar quando estiver no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Persistir preferências de acessibilidade - apenas no cliente
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

  // Salvar preferências quando mudarem - apenas no cliente
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

  // Aplicar tamanho de fonte ao documento - apenas no cliente
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

// Hook personalizado para usar o contexto de acessibilidade
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

// Componente Layout Principal
const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, contrast, fontSize } = useAccessibility();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Gerenciar loading entre mudanças de página
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
    return null; // ou um loading placeholder
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} ${contrast ? 'high-contrast' : ''}`}>
      <div className="relative" style={{ fontSize: `${fontSize}px` }}>
        <Navigation
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentPath={router.pathname}
        />

        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        <main className="min-h-screen pt-16 transition-all duration-300 md:ml-64">
          {isLoading && (
            <div className="fixed left-0 top-0 z-50 h-1 w-full">
              <div className="animate-loading h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />
            </div>
          )}

          <div className={`transition-all duration-300 fade-in ${contrast ? 'contrast-high' : ''}`}>
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
