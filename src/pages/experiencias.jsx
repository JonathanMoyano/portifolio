import React, { useState, useEffect } from 'react';
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
import { useAccessibility } from '@/components/layout/Layout';

const ExperienciasPage = () => {
  const { currentLanguage } = useAccessibility();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const experiences = [
    {
      id: 1,
      area: 'tech',
      role: 'Desenvolvedor Full Stack Sênior',
      company: 'Tech Solutions',
      period: '2020 - Presente',
      location: 'São Paulo, SP',
      type: 'Tempo Integral',
      description: 'Liderança técnica no desenvolvimento de soluções web escaláveis.',
      highlights: [
        'Liderança de equipe com 5 desenvolvedores',
        'Implementação de CI/CD e práticas DevOps',
        'Redução de 40% no tempo de deploy',
        'Mentoria de desenvolvedores júnior',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
      achievements: ['Prêmio de Inovação 2022', 'Certificação AWS Solutions Architect'],
      impact: [
        { metric: 'Performance', value: '+45%' },
        { metric: 'Deploys/Dia', value: '15+' },
        { metric: 'Uptime', value: '99.9%' },
      ],
    },
    {
      id: 2,
      area: 'fire',
      role: 'Líder de Brigada',
      company: 'Indústria Segura',
      period: '2016 - 2020',
      location: 'Guarulhos, SP',
      type: 'Tempo Integral',
      description: 'Gestão de equipe de bombeiros civis e coordenação de emergências.',
      highlights: [
        'Coordenação de equipe com 12 bombeiros',
        'Elaboração de planos de emergência',
        'Treinamento de 500+ brigadistas',
        'Gestão de simulados mensais',
      ],
      certifications: ['NR-23', 'NR-33', 'NR-35'],
      achievements: ['Zero acidentes em 3 anos consecutivos', 'Prêmio Segurança Total 2019'],
      impact: [
        { metric: 'Tempo Resposta', value: '-60%' },
        { metric: 'Brigadistas', value: '500+' },
        { metric: 'Acidentes', value: '0' },
      ],
    },
    {
      id: 3,
      area: 'commerce',
      role: 'Gerente de Comércio Exterior',
      company: 'Global Trade Inc',
      period: '2014 - 2016',
      location: 'Santos, SP',
      type: 'Tempo Integral',
      description: 'Gestão de operações de importação e exportação.',
      highlights: [
        'Gestão de portfolio de US$10M+',
        'Negociação com fornecedores internacionais',
        'Otimização de processos logísticos',
        'Desenvolvimento de novos mercados',
      ],
      regions: ['Ásia', 'Europa', 'América do Norte'],
      achievements: ['Redução de 30% nos custos logísticos', 'Expansão para 5 novos mercados'],
      impact: [
        { metric: 'Volume', value: '$10M+' },
        { metric: 'Economia', value: '30%' },
        { metric: 'Mercados', value: '15+' },
      ],
    },
  ];

  useEffect(() => {
    // Simula carregamento inicial
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
  }, [activeFilter, searchTerm]);

  const areaColors = {
    tech: 'bg-blue-500',
    fire: 'bg-red-500',
    commerce: 'bg-purple-500',
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
    <div className="min-h-screen px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Experiência Profissional
        </h1>
        <p className="text-xl text-gray-300">
          Uma jornada multidisciplinar combinando tecnologia, segurança e negócios internacionais
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-auto mb-8 max-w-6xl"
      >
        <div className="grid gap-4 md:grid-cols-3">
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
                      : activeFilter === 'fire'
                        ? 'Bombeiro Civil'
                        : 'Comércio Exterior'}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Áreas</SelectItem>
              <SelectItem value="tech">Tecnologia</SelectItem>
              <SelectItem value="fire">Bombeiro Civil</SelectItem>
              <SelectItem value="commerce">Comércio Exterior</SelectItem>
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
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
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
                      ${
                        expandedId === exp.id ? 'ring-2 ring-purple-500' : 'hover:border-purple-500'
                      }
                      transition-all duration-300`}
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-6 flex items-start justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <Badge className={areaColors[exp.area]} variant="secondary">
                              {exp.area === 'tech'
                                ? 'Tecnologia'
                                : exp.area === 'fire'
                                  ? 'Bombeiro Civil'
                                  : 'Comércio Exterior'}
                            </Badge>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                          <h3 className="mb-1 text-xl font-semibold">{exp.role}</h3>
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
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                                <Star className="h-4 w-4 text-yellow-500" />
                                Destaques
                              </h4>
                              <ul className="grid gap-2 md:grid-cols-2">
                                {exp.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-300">
                                    <ChevronRight className="h-4 w-4 text-purple-400" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies/Certifications/Regions */}
                            <div>
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                                <Tags className="h-4 w-4 text-blue-500" />
                                {exp.technologies
                                  ? 'Tecnologias'
                                  : exp.certifications
                                    ? 'Certificações'
                                    : 'Regiões'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {(exp.technologies || exp.certifications || exp.regions).map(
                                  (item, index) => (
                                    <Badge key={index} variant="secondary">
                                      {item}
                                    </Badge>
                                  )
                                )}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div>
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                                <Award className="h-4 w-4 text-purple-400" />
                                Conquistas
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-300">
                                    <ChevronRight className="h-4 w-4 text-purple-400" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Impact Metrics */}
                            <div className="grid grid-cols-3 gap-4 border-t border-neutral-700 pt-4">
                              {exp.impact.map((metric, index) => (
                                <div key={index} className="text-center">
                                  <div className="text-2xl font-bold text-purple-400">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-gray-400">{metric.metric}</div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand/Collapse Button */}
                      <div className="mt-4 flex justify-end">
                        <Button variant="ghost" size="sm">
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
                  <h3 className="mb-2 text-xl font-semibold">Nenhuma experiência encontrada</h3>
                  <p className="text-gray-400">Tente ajustar seus filtros ou termo de busca</p>
                  <Button
                    variant="outline"
                    className="mt-4"
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-12 max-w-4xl"
      >
        <Card className="border-none bg-gradient-to-r from-purple-900 to-pink-900">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">Interessado em minha experiência?</h3>
            <p className="mb-6 text-gray-300">
              Vamos conversar sobre como posso agregar valor ao seu projeto com minha experiência
              multidisciplinar.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => (window.location.href = '/contato')}
            >
              Entrar em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ExperienciasPage;
