// components/shared/PageContainer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children, subtitle, title }) => {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="relative z-10 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                PORTFÓLIO PROFISSIONAL
              </h2>
              <h1 className="font-display mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageContainer;
