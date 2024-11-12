// src/components/ui/input.jsx

import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';
