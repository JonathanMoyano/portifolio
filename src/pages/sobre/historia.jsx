import React from 'react';
import { motion } from 'framer-motion';
import AudioPlayer from '@/components/shared/audioPlayer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HistoriaPage = () => {
  const timelineEvents = [
    {
      year: '2003',
      title: 'Início da Jornada',
      content: `Em meados de 2003, meu pai se separou da minha mãe, deixando-a sozinha com dois filhos menores: eu, com aproximadamente 7 anos, e minha irmã, com cerca de 8 anos. Minha mãe, em seguida, ficou desempregada, pois trabalhava como diarista e cozinheira. Desesperada com a situação e vendo as dificuldades aumentarem, ela decidiu começar a coletar materiais recicláveis nas ruas. Vendo o que ela estava passando, eu decidi ajudar e comecei a acompanhá-la, também recolhendo recicláveis.`,
      tags: ['Família', 'Desafios'],
    },
    {
      year: '2009',
      title: 'Descoberta da Tecnologia',
      content: `Essa situação perdurou até eu completar 13 anos, quando iniciei o curso de formação profissional na JIP (Jockey Instituição Promocional). Durante o curso, sempre que terminava as aulas, eu voltava para ajudar minha mãe com a coleta de recicláveis nas ruas. Foi nesse período que, por conta do curso de informática da JIP, me interessei pela área de tecnologia, onde tive meus primeiros contatos com computadores e comecei a buscar mais conhecimento.`,
      tags: ['Educação', 'Tecnologia', 'JIP'],
    },
    {
      year: '2010-2011',
      title: 'Primeira Experiência Profissional',
      content: `Após concluir o curso, a JIP me indicou para uma entrevista na empresa Kuehne + Nagel, onde comecei minha trajetória profissional. Iniciei como office boy, realizando entregas de documentos no centro de Santos. Em 2011, recebi uma promoção para o setor de exportação, onde passei a recepcionar clientes, realizar atendimento ao público e receber documentos.`,
      tags: ['Primeiro Emprego', 'Kuehne + Nagel'],
    },
    {
      year: '2018-2019',
      title: 'Carreira como Bombeiro',
      content: `Iniciei como bombeiro civil no Grupo Boticário, implantando serviços de bombeiros civis na unidade de Registro. Trabalhei por um ano, enfrentando uma rotina exaustiva de viagens longas e turnos de 12 horas. Após esse período, consegui uma vaga no shopping Brisamar, onde permaneci por 2 anos, aplicando soluções tecnológicas no departamento de segurança patrimonial e bombeiros.`,
      tags: ['Bombeiro Civil', 'Boticário', 'Shopping Brisamar'],
    },
    {
      year: '2022',
      title: 'Transição para TI',
      content: `Decidi me dedicar 100% à área de TI e iniciei a graduação em Análise e Desenvolvimento de Sistemas. Conquistei um estágio no Colégio da Polícia Militar de São Paulo, onde trabalhei como analista de TI, oferecendo soluções tecnológicas e suporte aos usuários. Permaneci no colégio por cerca de um ano, me capacitando e fazendo diversos cursos na área.`,
      tags: ['Graduação', 'Estágio', 'TI'],
    },
    {
      year: '2023',
      title: 'Jean Piaget e Crescimento Profissional',
      content: `Em 2023, o Colégio Jean Piaget me convidou para integrar a equipe. Iniciei como assistente de TI, realizando diversos serviços como suporte técnico e montagem de eventos. Durante essas atividades, utilizei minha experiência de bombeiro para garantir mais segurança nas montagens. Recebi uma proposta da empresa Marimex, mas a escola, reconhecendo meu desempenho, cobriu a proposta, me promovendo a Analista e oferecendo uma bolsa de estudos para meu filho.`,
      tags: ['Jean Piaget', 'Promoção', 'Reconhecimento'],
    },
  ];

  const interesses = [
    {
      categoria: 'Tecnologia',
      items: [
        'Desenvolvimento de Software',
        'Cloud Computing',
        'Inteligência Artificial',
        'Automação Residencial',
      ],
    },
    {
      categoria: 'Esportes',
      items: ['Corrida', 'Natação', 'Musculação'],
    },
    {
      categoria: 'Cultura',
      items: ['Leitura de Livros Técnicos', 'Podcasts sobre Tecnologia', 'Música'],
    },
  ];

  const objetivos = [
    {
      prazo: 'Curto Prazo',
      items: [
        'Concluir a graduação em Análise e Desenvolvimento de Sistemas',
        'Aprofundar conhecimentos em Cloud Computing e em Desenvolvimento Web',
        'Desenvolver projetos pessoais inovadores',
      ],
    },
    {
      prazo: 'Médio Prazo',
      items: [
        'Especialização em IOT',
        'Certificações avançadas em Cloud',
        'Liderar projetos de maior complexidade',
      ],
    },
    {
      prazo: 'Longo Prazo',
      items: [
        'Estabelecer uma consultoria em soluções tecnológicas',
        'Contribuir com a formação de novos profissionais',
        'Desenvolver produtos tecnológicos próprios',
      ],
    },
  ];

  const TimelineCard = ({ event, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="relative"
    >
      <Card className="relative ml-0 border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:ml-8 md:ml-12 lg:p-6">
        <div className="absolute -left-3 top-6 hidden h-full w-px bg-cyan-500/20 sm:block md:-left-6" />
        <div className="absolute -left-4 top-6 hidden h-7 w-7 rounded-full border border-cyan-500/20 bg-[#0A0F1E] sm:block md:-left-8 md:h-8 md:w-8">
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-500/50 to-indigo-500/50 blur-sm" />
        </div>

        <div className="mb-4 flex items-center gap-3">
          <Badge className="bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-400 sm:text-sm">
            {event.year}
          </Badge>
          <h3 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">{event.title}</h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-cyan-100/60 sm:text-base">
          {event.content}
        </p>

        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="outline"
              className="border-cyan-500/20 text-xs text-cyan-100/60 sm:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <div className="mx-auto max-w-screen-2xl">
        <main className="relative z-10 px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-4xl">
            {/* Header permanece o mesmo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center sm:mb-12"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Portfólio Profissional
              </h2>
              <h1 className="font-display mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
                Minha História
              </h1>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-cyan-100/60 sm:mt-4 sm:text-base lg:text-lg">
                Uma jornada de descobertas, desafios e realizações
              </p>
            </motion.div>

            {/* Tabs Navigation */}
            <Tabs defaultValue="historia" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="historia">História Pessoal</TabsTrigger>
                <TabsTrigger value="interesses">Interesses</TabsTrigger>
                <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
              </TabsList>

              {/* Conteúdo das Tabs */}
              <TabsContent value="historia">
                {/* Audio Player e Timeline existentes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 sm:mb-12"
                >
                  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white sm:text-base">
                        Versão em Áudio
                      </h3>
                      <p className="text-xs text-cyan-100/60 sm:text-sm">
                        Escute minha história narrada por mim
                      </p>
                      <AudioPlayer audioUrl="/audio-historia.mp3" />
                    </div>
                  </Card>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative space-y-4 sm:space-y-6"
                >
                  <div className="absolute -left-1 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/20 via-indigo-500/20 to-transparent sm:left-4 sm:block md:left-6" />
                  {timelineEvents.map((event, index) => (
                    <TimelineCard key={index} event={event} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="interesses">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  {/* Introdução Interesses */}
                  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                    <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                      Além da minha trajetória profissional, cultivo diversos interesses que
                      contribuem para meu desenvolvimento pessoal e profissional. Essas áreas de
                      interesse me ajudam a manter uma perspectiva equilibrada e inspiram inovações
                      no meu trabalho.
                    </p>
                  </Card>

                  {/* Cards de Interesses */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {interesses.map((categoria, index) => (
                      <motion.div
                        key={categoria.categoria}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Card className="h-full border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                          <h3 className="mb-4 text-lg font-semibold text-white">
                            {categoria.categoria}
                          </h3>
                          <ul className="space-y-2">
                            {categoria.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2 text-sm text-cyan-100/60"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="objetivos">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  {/* Introdução Objetivos */}
                  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                    <p className="text-sm leading-relaxed text-cyan-100/60 sm:text-base">
                      Meus objetivos profissionais são orientados pela busca constante de evolução e
                      pelo desejo de contribuir significativamente para o campo da tecnologia.
                      Estabeleci metas claras para diferentes horizontes temporais.
                    </p>
                  </Card>

                  {/* Timeline de Objetivos */}
                  <div className="space-y-4">
                    {objetivos.map((periodo, index) => (
                      <motion.div
                        key={periodo.prazo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                          <div className="mb-4 flex items-center gap-3">
                            <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400">
                              {periodo.prazo}
                            </Badge>
                          </div>
                          <ul className="space-y-3">
                            {periodo.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 text-sm text-cyan-100/60 sm:text-base"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mensagem Final */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl sm:p-6">
                      <p className="text-sm text-cyan-100/60 sm:text-base">
                        Estes objetivos refletem minha ambição de crescimento contínuo e meu
                        compromisso com a excelência profissional no campo da tecnologia.
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HistoriaPage;
