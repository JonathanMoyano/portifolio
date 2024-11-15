// components/ui/tabs.jsx
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

// Lista de abas
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('inline-flex w-full justify-center gap-2 bg-transparent', className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// Botão/trigger da aba
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'border border-cyan-500/20 bg-[#0A0F1E]/95 px-4 py-2 text-sm transition-all',
      'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400',
      'hover:bg-cyan-500/10',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Conteúdo da aba
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-2 ring-offset-background', className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
