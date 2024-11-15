// components/ui/slider.jsx
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

// Componente Slider otimizado para áudio
const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    {/* Trilha do Slider */}
    <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-neutral-800">
      {/* Faixa de progresso */}
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
    </SliderPrimitive.Track>

    {/* Thumb (controle deslizante) */}
    <SliderPrimitive.Thumb
      className={`
        block h-3 w-3 rounded-full border border-cyan-500/50 bg-white
        transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500
        disabled:pointer-events-none disabled:opacity-50
      `}
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
