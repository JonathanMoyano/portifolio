import React from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from '@/components/shared/audioPlayer';

const HistoriaPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0A0F1E] pb-16 md:pl-64">
      <div className="fixed inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <main className="relative z-10 flex-1 overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-12">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 w-full text-center"
            >
              <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
                Minha História
              </h1>
              <p className="text-xl text-cyan-100/60">
                Uma jornada de descobertas, desafios e realizações
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 w-full max-w-3xl"
            >
              <div className="rounded-xl border border-cyan-500/20 bg-neutral-900/70 p-6 shadow-lg backdrop-blur-xl">
                <AudioPlayer audioUrl="/audio-historia.mp3" title="Escute minha história" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-4xl"
            >
              <div className="rounded-xl border border-cyan-500/20 bg-neutral-900/70 p-8 shadow-lg backdrop-blur-xl">
                <div className="prose prose-invert prose-lg prose-p:text-cyan-100/90 prose-headings:text-cyan-100 mx-auto max-w-none">
                  <p>[Seu texto virá aqui]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoriaPage;
