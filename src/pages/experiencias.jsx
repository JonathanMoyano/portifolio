import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Building2,
  Award,
  ArrowRight,
  ChevronRight,
  Star,
  Tags,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ExperienciasPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const experiences = useMemo(
    () => [
      {
        id: 1,
        area: 'tech',
        role: 'Analista de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Janeiro 2024 - Presente',
        location: 'Santos, SP',
        type: 'Tempo Integral',
        description:
          'Liderança e gestão da equipe de TI, com especialização em otimização de sistemas e infraestrutura.',
        highlights: [
          'Liderança e gestão da equipe de TI',
          'Implementação e manutenção de sistemas de rede e segurança',
          'Desenvolvimento de processos para otimização do suporte técnico',
          'Gestão do parque tecnológico (computadores, Chromebooks e dispositivos móveis)',
          'Gerenciamento e direcionamento dos Chamados para os Auxiliares e Assistentes de TI',
        ],
        technologies: [
          'AWS Amazon Cloud',
          'Google Cloud',
          'Microsoft Azure',
          'Active Directory',
          'ERP TOTVS',
          'Sistema RM',
          'HTML5/CSS3',
          'JavaScript',
        ],
        achievements: [
          'Modernização do sistema de CFTV, aumentando a cobertura em 40%',
          'Implementação de sistema de controle de inventário de TI',
          'Redução de 30% no tempo de resposta para chamados técnicos',
        ],
        impact: [
          { metric: 'Eficiência Suporte', value: '+30%' },
          { metric: 'Cobertura CFTV', value: '+40%' },
          { metric: 'Gestão Devices', value: '100%' },
        ],
      },
      {
        id: 2,
        area: 'tech',
        role: 'Assistente de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Outubro 2023 - Janeiro 2024',
        location: 'Santos, SP',
        type: 'Tempo Integral',
        description:
          'Gestão de infraestrutura e implementação de melhorias nos sistemas de segurança.',
        highlights: [
          'Implementação de melhorias no sistema de CFTV',
          'Desenvolvimento de sistema de controle de inventário',
          'Otimização do tempo de resposta para chamados técnicos',
          'Manutenção preventiva de infraestrutura',
        ],
        technologies: [
          'Sistemas CFTV',
          'Sistemas de Inventário',
          'Infraestrutura de Redes',
          'Suporte Técnico',
        ],
        achievements: [
          'Aumento de 40% na cobertura de segurança',
          'Implementação bem-sucedida do sistema de inventário',
          'Melhoria significativa no tempo de resposta',
        ],
        impact: [
          { metric: 'Cobertura', value: '+40%' },
          { metric: 'Tempo Resposta', value: '-30%' },
          { metric: 'Eficiência', value: '+35%' },
        ],
      },
      {
        id: 3,
        area: 'tech',
        role: 'Analista de Suporte Júnior',
        company: 'Cruz Azul',
        period: 'Outubro 2022 - Outubro 2023',
        location: 'Santos, SP',
        type: 'Estágio',
        description: 'Suporte técnico e administração de sistemas corporativos.',
        highlights: [
          'Suporte técnico ao ERP TOTVS',
          'Administração de Active Directory',
          'Gerenciamento do sistema RM',
          'Manutenção preventiva da infraestrutura de TI',
        ],
        technologies: ['ERP TOTVS', 'Active Directory', 'Sistema RM', 'Infraestrutura de TI'],
        achievements: [
          'Implementação de rotinas de manutenção preventiva',
          'Otimização dos processos de suporte',
          'Melhoria na gestão do Active Directory',
        ],
        impact: [
          { metric: 'Uptime', value: '99.9%' },
          { metric: 'Resolução', value: '95%' },
          { metric: 'Satisfação', value: '98%' },
        ],
      },
      {
        id: 4,
        area: 'fire',
        role: 'Bombeiro Civil',
        company: 'Grupo Mendes',
        period: 'Março 2019 - Janeiro 2022',
        location: 'Santos, SP',
        type: 'Tempo Integral',
        description: 'Gestão de segurança e emergências em ambiente de shopping center.',
        highlights: [
          'Gestão de equipe de bombeiros',
          'Atendimento de primeiros socorros',
          'Inspeções de segurança',
          'Treinamento de brigadistas',
          'Elaboração de relatórios técnicos',
        ],
        certifications: ['NR-23', 'NR-33', 'NR-35', 'DEA'],
        achievements: [
          'Zero acidentes graves no período',
          'Implementação de novos protocolos de segurança',
          'Modernização do sistema de prevenção',
        ],
        impact: [
          { metric: 'Atendimentos', value: '500+' },
          { metric: 'Treinamentos', value: '100+' },
          { metric: 'Inspeções', value: '1000+' },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = experiences.filter((exp) => {
      const matchesFilter = activeFilter === 'all' || exp.area === activeFilter;
      const matchesSearch =
        exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
    setFilteredExperiences(filtered);
  }, [activeFilter, searchTerm, experiences]);

  const areaColors = {
    tech: 'bg-blue-500',
    fire: 'bg-blue-600',
  };

  const formatPeriod = (period) => {
    const [start, end] = period.split(' - ');
    return (
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{start}</span>
        <span>-</span>
        <span>{end}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900 px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Experiência Profissional
        </h1>
        <p className="text-xl text-gray-300">
          Uma jornada multidisciplinar em tecnologia e segurança
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-auto mb-8 max-w-6xl"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar experiências..."
              className="border-neutral-700 bg-neutral-800 pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={activeFilter} onValueChange={setActiveFilter}>
            <SelectTrigger className="border-neutral-700 bg-neutral-800">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {activeFilter === 'all'
                    ? 'Todas as Áreas'
                    : activeFilter === 'tech'
                      ? 'Tecnologia'
                      : 'Bombeiro Civil'}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Áreas</SelectItem>
              <SelectItem value="tech">Tecnologia</SelectItem>
              <SelectItem value="fire">Bombeiro Civil</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Experiences Grid */}
      <div className="mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-20"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {filteredExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`cursor-pointer border-neutral-700 bg-neutral-800
                      ${expandedId === exp.id ? 'ring-2 ring-blue-500' : 'hover:border-blue-500'}
                      transition-all duration-300`}
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-6 flex items-start justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Badge className={areaColors[exp.area]} variant="secondary">
                              {exp.area === 'tech' ? 'Tecnologia' : 'Bombeiro Civil'}
                            </Badge>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                          <h3 className="mb-1 text-xl font-semibold text-gray-100">{exp.role}</h3>
                          <div className="flex items-center gap-4 text-gray-400">
                            <div className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">{formatPeriod(exp.period)}</div>
                      </div>

                      <p className="mb-6 text-gray-300">{exp.description}</p>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            {/* Highlights */}
                            <div>
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-100">
                                <Star className="h-4 w-4 text-blue-400" />
                                Destaques
                              </h4>
                              <ul className="grid gap-2 md:grid-cols-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-300">
                                    <ChevronRight className="h-4 w-4 text-blue-400" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies/Certifications */}
                            <div>
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-100">
                                <Tags className="h-4 w-4 text-blue-400" />
                                {exp.technologies ? 'Tecnologias' : 'Certificações'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {(exp.technologies || exp.certifications).map((item, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-blue-500/10 text-blue-400"
                                  >
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div>
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-100">
                                <Award className="h-4 w-4 text-blue-400" />
                                Conquistas
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-300">
                                    <ChevronRight className="h-4 w-4 text-blue-400" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Impact Metrics */}
                            <div className="grid grid-cols-3 gap-4 border-t border-neutral-700 pt-4">
                              {exp.impact.map((metric, index) => (
                                <div key={index} className="text-center">
                                  <div className="text-2xl font-bold text-blue-400">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-gray-400">{metric.metric}</div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Ver mais/menos Button */}
                      <div className="mt-4 flex justify-end">
                        <Button variant="ghost" className="text-blue-400 hover:text-blue-500">
                          {expandedId === exp.id ? 'Ver menos' : 'Ver mais'}
                          <ArrowRight
                            className={`ml-2 h-4 w-4 transition-transform duration-300 
                            ${expandedId === exp.id ? 'rotate-90' : ''}`}
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {filteredExperiences.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mb-4">
                    <Search className="mx-auto h-12 w-12 text-gray-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-100">
                    Nenhuma experiência encontrada
                  </h3>
                  <p className="text-gray-400">Tente ajustar seus filtros ou termo de busca</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => {
                      setActiveFilter('all');
                      setSearchTerm('');
                    }}
                  >
                    Limpar filtros
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienciasPage;
