// components/ui/sheet.jsx (para navegação mobile)
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

// Portal do Sheet
const SheetPortal = SheetPrimitive.Portal;

// Overlay do Sheet (fundo escuro)
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all', className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// Conteúdo do Sheet
const SheetContent = React.forwardRef(({ side = 'left', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-y-0 z-50 h-full border-r border-cyan-500/20 bg-[#0A0F1E]/95 p-6 shadow-lg backdrop-blur-xl transition-all',
        side === 'left' && 'left-0 w-[300px]',
        side === 'right' && 'right-0 w-[300px]',
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 text-cyan-100/60 opacity-70 transition-opacity hover:opacity-100">
        <X className="h-4 w-4" />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

// Cabeçalho do Sheet
const SheetHeader = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

// Título do Sheet
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-white', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle };
