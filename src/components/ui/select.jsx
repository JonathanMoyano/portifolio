import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Select = ({ onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectItemClick = (newValue) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
        {children.find((child) => child.type === SelectValue)}
      </SelectTrigger>
      <AnimatePresence>
        {isOpen && (
          <SelectContent>
            {React.Children.map(children, (child) =>
              child.type === SelectItem
                ? React.cloneElement(child, { onClick: handleSelectItemClick })
                : null
            )}
          </SelectContent>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SelectTrigger = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-between rounded-md border border-neutral-700 bg-neutral-800 p-2 focus:outline-none"
  >
    {children}
    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
  </button>
);

export const SelectContent = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute z-10 mt-1 w-full rounded-md border border-neutral-700 bg-neutral-800 shadow-lg"
  >
    {children}
  </motion.div>
);

export const SelectItem = ({ children, onClick, value }) => (
  <div onClick={() => onClick(value)} className="cursor-pointer p-2 hover:bg-neutral-700">
    {children}
  </div>
);

export const SelectValue = ({ children }) => <span className="text-gray-300">{children}</span>;
