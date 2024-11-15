// components/ui/badge.jsx
import * as React from 'react';
import { cn } from '@/lib/utils';

// Variantes do badge com as classes Tailwind
const badgeVariants = {
  // Estilo padrão - usado para status/tags principais
  default: 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30',
  // Estilo secundário - usado para informações complementares
  secondary: 'bg-[#0A0F1E]/95 text-cyan-100/60',
  // Estilo outline - usado para destacar sem cor de fundo
  outline: 'border border-cyan-500/20 text-cyan-400',
};

function Badge({ className, variant = 'default', ...props }) {
  // Classes base que todos os badges terão
  const baseClasses =
    'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors';

  return <div className={cn(baseClasses, badgeVariants[variant], className)} {...props} />;
}

export { Badge, badgeVariants };
