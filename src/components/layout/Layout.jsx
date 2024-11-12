import React, { useState, useEffect, createContext, useContext } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { useRouter } from "next/router";

// Contexto de Acessibilidade
export const AccessibilityContext = createContext();

const Layout = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Gerenciar loading entre mudanças de página
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Persistir preferências de acessibilidade
  useEffect(() => {
    const savedPreferences = localStorage.getItem("accessibility-preferences");
    if (savedPreferences) {
      const { fontSize, contrast, language, darkMode } =
        JSON.parse(savedPreferences);
      setFontSize(fontSize);
      setContrast(contrast);
      setCurrentLanguage(language);
      setIsDarkMode(darkMode);
    }
  }, []);

  // Salvar preferências quando mudarem
  useEffect(() => {
    const preferences = {
      fontSize,
      contrast,
      language: currentLanguage,
      darkMode: isDarkMode,
    };
    localStorage.setItem(
      "accessibility-preferences",
      JSON.stringify(preferences)
    );
  }, [fontSize, contrast, currentLanguage, isDarkMode]);

  // Aplicar tamanho de fonte ao documento
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const accessibilityValue = {
    fontSize,
    setFontSize,
    contrast,
    setContrast,
    currentLanguage,
    setCurrentLanguage,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <AccessibilityContext.Provider value={accessibilityValue}>
      <div
        className={`
        min-h-screen
        ${isDarkMode ? "dark" : ""}
        ${contrast ? "high-contrast" : ""}
      `}
      >
        <div className="relative" style={{ fontSize: `${fontSize}px` }}>
          <Navigation
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            currentPath={router.pathname}
          />

          <Header
            toggleSidebar={() => setIsSidebarOpen(true)}
            isDarkMode={isDarkMode}
            toggleTheme={() => setIsDarkMode((prev) => !prev)}
            currentLanguage={currentLanguage}
            setLanguage={setCurrentLanguage}
            fontSize={fontSize}
            setFontSize={setFontSize}
            contrast={contrast}
            setContrast={setContrast}
          />

          <main className="md:ml-64 pt-16 min-h-screen transition-all duration-300">
            {/* Loading Indicator */}
            {isLoading && (
              <div className="fixed top-0 left-0 w-full h-1 z-50">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-loading"></div>
              </div>
            )}

            {/* Page Content */}
            <div
              className={`fade-in transition-all duration-300 ${
                contrast ? "contrast-high" : ""
              }`}
            >
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </AccessibilityContext.Provider>
  );
};

// Hook personalizado para usar o contexto de acessibilidade
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};

export default Layout;
