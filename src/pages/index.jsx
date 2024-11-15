// pages/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="container relative z-10 mx-auto flex min-h-screen items-center justify-center px-4">
          <div className="mx-auto w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mb-8"
              >
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full sm:h-40 sm:w-40">
                  <Image
                    src="/jonathan.jpg"
                    alt="Jonathan Souza Moyano"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Title and Subtitle */}
              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  PORTFÓLIO PROFISSIONAL
                </h2>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">JONATHAN SOUZA</span>
                  <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    MOYANO
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                  Analista de TI especializado em infraestrutura, segurança e otimização de
                  sistemas.
                  <br />
                  Estudante de Análise e Desenvolvimento de Sistemas.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/historia">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-6 transition-all hover:scale-105 sm:px-8"
                  >
                    Conheça minha história
                    <ScrollText className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500/20 px-6 text-cyan-400 transition-all hover:scale-105 hover:bg-cyan-500/10 sm:px-8"
                  >
                    Vamos conversar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
