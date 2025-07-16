// src/components/ui/card.jsx

import * as React from 'react';
import { cn } from '@/lib/utils';

// O Card principal agora não tem padding, ele é apenas o contêiner com borda e fundo.
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

// O Header agora tem o padding padrão
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight text-white', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-cyan-100/60', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

// O Content agora tem o padding padrão
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

// O Footer agora tem o padding padrão
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };