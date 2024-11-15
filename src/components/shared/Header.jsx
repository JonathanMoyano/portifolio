import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed right-0 top-0 z-50 h-16 w-full border-b border-neutral-800 bg-[#0A0F1E]/80 backdrop-blur-xl md:w-[calc(100%-256px)]">
      <div className="flex h-full items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-cyan-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-300 md:hidden"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden md:block">
          <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-lg font-bold text-transparent">
            Portfólio Profissional
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
