// components/ui/button.jsx
import * as React from 'react';
import { cn } from '@/lib/utils';

// Variantes do botão com as classes Tailwind
const buttonVariants = {
  // Estilo padrão - botão principal com gradiente
  default:
    'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400',
  // Estilo outline - borda com hover sutil
  outline: 'border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10',
  // Estilo ghost - sem fundo, apenas hover
  ghost: 'text-cyan-400 hover:bg-cyan-500/10',
};

// Tamanhos disponíveis para os botões
const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10',
};

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // Classes base que todos os botões terão
    const baseClasses =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 hover:scale-105';

    return (
      <button
        className={cn(baseClasses, buttonVariants[variant], buttonSizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
