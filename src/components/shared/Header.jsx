import React from 'react';
import { Globe, Eye, ZoomIn, ZoomOut, Sun, Moon, Menu, CircleDot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAccessibility } from '../layout/Layout';

const Header = ({ toggleSidebar }) => {
  const {
    isDarkMode,
    setIsDarkMode,
    setFontSize,
    contrast,
    setContrast,
    currentLanguage,
    setCurrentLanguage,
  } = useAccessibility();

  const translations = {
    pt: {
      accessibility: 'Acessibilidade',
      increaseText: 'Aumentar Texto',
      decreaseText: 'Diminuir Texto',
      contrast: 'Alto Contraste',
      normalContrast: 'Contraste Normal',
      darkMode: 'Modo Escuro',
      lightMode: 'Modo Claro',
      languages: 'Idiomas',
      colorBlind: 'Daltonismo',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
    en: {
      accessibility: 'Accessibility',
      increaseText: 'Increase Text',
      decreaseText: 'Decrease Text',
      contrast: 'High Contrast',
      normalContrast: 'Normal Contrast',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      languages: 'Languages',
      colorBlind: 'Color Blind',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
    es: {
      accessibility: 'Accesibilidad',
      increaseText: 'Aumentar Texto',
      decreaseText: 'Reducir Texto',
      contrast: 'Alto Contraste',
      normalContrast: 'Contraste Normal',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      languages: 'Idiomas',
      colorBlind: 'Daltonismo',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
  };

  const handleFontSize = (increment) => {
    setFontSize((prev) => {
      const newSize = prev + (increment ? 1 : -1);
      return Math.min(Math.max(newSize, 14), 24); // Min: 14px, Max: 24px
    });
  };

  return (
    <header className="fixed right-0 top-0 z-50 h-16 w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm md:w-[calc(100%-256px)]">
      <div className="flex h-full items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Right Side Controls */}
        <div className="ml-auto flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Globe className="h-5 w-5" />
                <span className="absolute -bottom-1 -right-1 text-xs font-bold">
                  {currentLanguage.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCurrentLanguage('pt')}>
                🇧🇷 Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentLanguage('en')}>
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentLanguage('es')}>
                🇪🇸 Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Accessibility Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Eye className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{translations[currentLanguage].accessibility}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Font Size Controls */}
              <DropdownMenuItem onClick={() => handleFontSize(true)}>
                <ZoomIn className="mr-2 h-4 w-4" />
                {translations[currentLanguage].increaseText}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFontSize(false)}>
                <ZoomOut className="mr-2 h-4 w-4" />
                {translations[currentLanguage].decreaseText}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Contrast Toggle */}
              <DropdownMenuItem onClick={() => setContrast(!contrast)}>
                <CircleDot className="mr-2 h-4 w-4" />
                {contrast
                  ? translations[currentLanguage].normalContrast
                  : translations[currentLanguage].contrast}
              </DropdownMenuItem>

              {/* Color Blind Modes */}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{translations[currentLanguage].colorBlind}</DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center">
                <span className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
                {translations[currentLanguage].normal}
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                <span className="mr-2 h-4 w-4 rounded-full bg-yellow-500" />
                {translations[currentLanguage].protanopia}
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                <span className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
                {translations[currentLanguage].deuteranopia}
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center">
                <span className="mr-2 h-4 w-4 rounded-full bg-red-500" />
                {translations[currentLanguage].tritanopia}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-300 hover:text-gray-100"
            aria-label={
              isDarkMode
                ? translations[currentLanguage].lightMode
                : translations[currentLanguage].darkMode
            }
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
