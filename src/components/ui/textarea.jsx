// /components/ui/textarea.jsx

import React from 'react';

export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full rounded-md border border-neutral-700 bg-neutral-800 p-2 text-gray-300 focus:border-neutral-500 focus:outline-none ${className}`}
    {...props}
  />
));

Textarea.displayName = 'Textarea';
