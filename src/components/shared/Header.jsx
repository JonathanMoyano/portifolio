// components/shared/Header.jsx
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-neutral-800 bg-[#0A0F1E]/80 backdrop-blur-sm md:pl-64">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Button
          variant="ghost"
          className="mr-2 px-2 text-cyan-400 hover:bg-cyan-500/10 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
