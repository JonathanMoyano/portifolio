// components/ui/layout.jsx

import { cn } from '@/lib/utils';
export const PageLayout = ({ children, className }) => (
  <div className="relative min-h-screen bg-[#0A0F1E]">
    <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />
    <div className="mx-auto max-w-screen-2xl">
      <main className={cn('relative z-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10', className)}>
        {children}
      </main>
    </div>
  </div>
);
