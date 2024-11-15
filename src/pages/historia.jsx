// pages/historia.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from '@/components/shared/audioPlayer';
import { Card } from '@/components/ui/card';

const HistoriaPage = () => {
  const paragraphs = [
    {
      title: 'Início da Jornada',
      content: `Olá, meu nome é Jonathan Souza Moyano e vou contar um resumo da minha vida profissional. Em meados de 2003, meu pai se separou da minha mãe, deixando-a sozinha com dois filhos menores: eu, com aproximadamente 7 anos, e minha irmã, com cerca de 8 anos. Minha mãe, em seguida, ficou desempregada, pois trabalhava como diarista e cozinheira. Desesperada com a situação e vendo as dificuldades aumentarem, ela decidiu começar a coletar materiais recicláveis nas ruas. Vendo o que ela estava passando, eu decidi ajudar e comecei a acompanhá-la, também recolhendo recicláveis.`,
    },
    {
      title: 'Descoberta da Tecnologia',
      content: `Essa situação perdurou até eu completar 13 anos, quando iniciei o curso de formação profissional na JIP (Jockey Instituição Promocional). Durante o curso, sempre que terminava as aulas, eu voltava para ajudar minha mãe com a coleta de recicláveis nas ruas. Foi nesse período que, por conta do curso de informática da JIP, me interessei pela área de tecnologia, onde tive meus primeiros contatos com computadores e comecei a buscar mais conhecimento, através de pessoas que conheci ao longo da minha vida.`,
    },
    {
      title: 'Primeira Experiência Profissional',
      content: `Após concluir o curso, a JIP me indicou para uma entrevista na empresa de comércio exterior chamada KN (Kuehne + Nagel), onde comecei minha trajetória profissional. Iniciei, em 2010, como office boy, realizando entregas de documentos no centro de Santos. Em 2011, recebi uma promoção para o setor de exportação, onde passei a recepcionar clientes, realizar atendimento ao público e receber documentos.`,
    },
    {
      title: 'Transição e Desenvolvimento',
      content: `Foi nesse momento que decidi iniciar a carreira de Bombeiro Profissional Civil. Com as verbas rescisórias, paguei o curso de formação de bombeiro civil, dando início à minha carreira, trabalhando em eventos e como freelancer no Parque da Cidade de São Vicente, no evento da festa de Iguape e em jogos de futebol no Santos Futebol Clube. No entanto, nunca deixei de atuar na área de tecnologia, executando serviços de manutenção de computadores e notebooks e sempre buscando me capacitar.`,
    },
    {
      title: 'Consolidação Profissional',
      content: `Em 2023, o Colégio Jean Piaget me convidou para integrar a equipe. Aceitei a proposta e iniciei como assistente de TI, cargo que ocupei por 3 meses, realizando diversos serviços. Durante essas atividades, utilizei minha experiência de bombeiro para garantir mais segurança nas montagens de eventos internos. Nesse mesmo período, recebi uma proposta de emprego da empresa Marimex, mas a escola, ao analisar meu bom desempenho profissional, cobriu toda a proposta recebida, me promovendo a analista e oferecendo uma bolsa de estudos para meu filho.`,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl md:pl-64">
        <main className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                Minha História
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/60 sm:text-lg">
                Uma jornada de descobertas, desafios e realizações
              </p>
            </motion.div>

            {/* Audio Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 w-full"
            >
              <div className="mx-auto max-w-3xl">
                <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-6 backdrop-blur-xl">
                  <AudioPlayer audioUrl="/audio-historia.mp3" title="Escute minha história" />
                </Card>
              </div>
            </motion.div>

            {/* Content Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {paragraphs.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-6 backdrop-blur-xl">
                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">{section.title}</h3>
                    <p className="text-cyan-100/60">{section.content}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HistoriaPage;
