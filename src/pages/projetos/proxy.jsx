

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Users, FileText, Server, Network, Globe, Eye, Filter, AlertCircle, CheckCircle } from 'lucide-react';

// Dados do projeto
const projectData = {
  title: 'Sistema de Proxy Corporativo',
  badge: 'Projeto Profissional',
  description:
    'Implementação completa de solução de proxy corporativo com controle granular de acesso à internet, integrado ao Active Directory.',
  previewImage: '/images/squid-proxy.png',
  githubUrl: '#',
  documentationUrl: 'https://docs.google.com/document/d/17dc5grHuktGA9GroztDopF_hcYYB7fAQ/edit?usp=sharing&ouid=115043327202870382104&rtpof=true&sd=true',
  about: `Sistema robusto de proxy desenvolvido para ambiente educacional, permitindo controle 
         e auditoria completa do tráfego web. A solução foi implementada compilando o Squid 7.1 
         diretamente do código fonte, garantindo máxima customização e performance. Integração 
         completa com Active Directory via Kerberos proporciona autenticação transparente e 
         políticas diferenciadas por grupos de usuários. O sistema inclui interceptação SSL/TLS 
         com geração dinâmica de certificados, filtragem avançada de conteúdo com SquidGuard, 
         e logs centralizados para compliance e auditoria.`,
};

// Features do sistema
const features = [
  {
    icon: Shield,
    title: 'Interceptação SSL/TLS',
    description: 'Geração dinâmica de certificados para auditoria completa de tráfego HTTPS',
  },
  {
    icon: Users,
    title: 'Integração Active Directory',
    description: 'Autenticação transparente via Kerberos com políticas por grupos de usuários',
  },
  {
    icon: Filter,
    title: 'Filtragem de Conteúdo',
    description: 'SquidGuard com blacklists customizadas e whitelist educacional',
  },
  {
    icon: Eye,
    title: 'Auditoria Completa',
    description: 'Sistema de logs centralizado com rastreamento detalhado de acessos',
  },
  {
    icon: Network,
    title: 'Performance Otimizada',
    description: 'Compilação customizada do Squid 7.1 para máximo desempenho',
  },
  {
    icon: Globe,
    title: 'Políticas Granulares',
    description: 'Controle diferenciado para alunos, funcionários e administrativo',
  },
];

// Funcionalidades implementadas
const implementations = [
  {
    category: 'Autenticação & Segurança',
    items: ['Kerberos/Samba', 'SSL/TLS Inspection', 'Certificados CA Próprios', 'Autenticação Transparente'],
    icon: Lock,
    color: 'from-red-500/20 to-orange-500/20',
    iconColor: 'text-red-400'
  },
  {
    category: 'Filtragem de Conteúdo',
    items: ['SquidGuard', 'Blacklists Customizadas', 'Whitelist Educacional', 'Categorias por Domínio'],
    icon: Filter,
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    category: 'Grupos de Acesso',
    items: ['Alunos (Mais Restritivo)', 'Funcionários (Moderado)', 'Administrativo (Flexível)', 'Políticas Customizadas'],
    icon: Users,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    category: 'Monitoramento',
    items: ['Logs Centralizados', 'Página de Bloqueio Custom', 'Auditoria de Tráfego', 'Relatórios Detalhados'],
    icon: Eye,
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400'
  },
];

// Stack tecnológica
const techStack = [
  {
    category: 'Proxy & Filtro',
    technologies: ['Squid 7.1', 'SquidGuard', 'OpenSSL', 'Apache 2'],
  },
  {
    category: 'Autenticação',
    technologies: ['Active Directory', 'Kerberos', 'Samba/Winbind', 'LDAP'],
  },
  {
    category: 'Infraestrutura',
    technologies: ['Ubuntu Server 24.04', 'SystemD', 'Shell Script', 'DNS'],
  },
];

// Categorias bloqueadas
const blockedCategories = [
  { name: 'Conteúdo Adulto', blocked: true },
  { name: 'Redes Sociais', blocked: true },
  { name: 'Streaming', blocked: true },
  { name: 'Games', blocked: true },
  { name: 'Downloads/Torrents', blocked: true },
  { name: 'Webmail Pessoal', blocked: true },
  { name: 'Chat/Mensagens', blocked: true },
  { name: 'Sites Educacionais', blocked: false },
];

// Componentes Reutilizáveis
const FeatureCard = ({ feature }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-lg border border-cyan-500/20 bg-[#0A0F1E]/95 p-4 backdrop-blur-xl hover:border-cyan-500/40 transition-colors"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-2">
        <feature.icon className="h-5 w-5 text-cyan-400" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-slate-400">{feature.description}</p>
      </div>
    </div>
  </motion.div>
);

const TechStackCard = ({ stack }) => (
  <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl">
    <CardContent className="p-4">
      <h3 className="mb-3 font-semibold text-white">{stack.category}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="border-slate-700 text-slate-400">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ImplementationCard = ({ impl }) => {
  const IconComponent = impl.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 p-5 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-lg bg-gradient-to-br ${impl.color} p-2`}>
          <IconComponent className={`h-6 w-6 ${impl.iconColor}`} />
        </div>
        <h3 className="text-lg font-semibold text-white">{impl.category}</h3>
      </div>
      <ul className="space-y-2">
        {impl.items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle className="h-4 w-4 text-green-400" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Componentes de Seção
const ProjectHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8 text-center sm:mb-12"
  >
    <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
      {projectData.badge}
    </Badge>
    <h1 className="font-display bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
      {projectData.title}
    </h1>
    <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base lg:text-lg">
      {projectData.description}
    </p>
  </motion.div>
);

// Componente Principal
const SquidProxyProjectPage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <ProjectHeader />

      {/* Preview e Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0A0F1E]/95 shadow-2xl backdrop-blur-xl sm:mb-12"
      >
        {/* Banner Técnico */}
        <div className="relative h-[200px] w-full overflow-hidden bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 sm:h-[250px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Server className="mx-auto h-20 w-20 text-cyan-400/40 sm:h-24 sm:w-24" />
              <div className="mt-4 text-xl font-bold text-cyan-400/60 sm:text-2xl">
                Squid 7.1 + SquidGuard
              </div>
              <div className="text-sm text-slate-400">Compilado do código fonte</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E]/50 to-[#0A0F1E]" />
        </div>

        <div className="p-6 lg:p-8">
          {/* Seção de Features */}
          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Recursos Principais
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </section>

          {/* Implementações */}
          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Funcionalidades Implementadas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {implementations.map((impl, index) => (
                <ImplementationCard key={index} impl={impl} />
              ))}
            </div>
          </section>

          {/* Categorias de Filtro */}
          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Categorias de Filtro
            </h2>
            <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {blockedCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-[#0A0F1E]/50 p-3"
                    >
                      {category.blocked ? (
                        <AlertCircle className="h-4 w-4 text-red-400" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      )}
                      <span className="text-sm text-slate-400">{category.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stack Tecnológica */}
          <section className="mb-8">
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Stack Tecnológica
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {techStack.map((stack, index) => (
                <TechStackCard key={index} stack={stack} />
              ))}
            </div>
          </section>

          {/* Sobre o Projeto */}
          <section className="mb-8">
            <Card className="border-cyan-500/20 bg-[#0A0F1E]/95 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Sobre o Projeto</h3>
                <p className="text-sm leading-relaxed text-slate-400">{projectData.about}</p>
              </CardContent>
            </Card>
          </section>

          {/* Links do Projeto */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 transition-all hover:scale-105"
              onClick={() => window.open(projectData.documentationUrl, '_blank')}
            >
              Ver Documentação
              <FileText className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SquidProxyProjectPage;
