import React from 'react';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0F1E] px-4">
      <div className="text-center">
        <h1 className="mb-2 text-9xl font-bold text-cyan-400">404</h1>
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold text-white">Página não encontrada</h2>
          <p className="text-gray-400">Desculpe, a página que você está procurando não existe.</p>
        </div>

        <Button
          onClick={() => (window.location.href = '/pt')}
          className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
        >
          <MoveLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar ao início
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-20" />
      </div>
    </div>
  );
};

export default NotFound;
