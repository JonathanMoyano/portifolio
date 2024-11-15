// components/ui/card.jsx
import * as React from 'react';
import { cn } from '@/lib/utils';

// Componente Card principal
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

// Cabeçalho do Card
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

// Título do Card
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-semibold text-white', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

// Descrição do Card
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-cyan-100/60', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

// Conteúdo principal do Card
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6', className)} {...props} />
));
CardContent.displayName = 'CardContent';

// Rodapé do Card
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
