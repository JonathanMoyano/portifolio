import React, { useState } from "react";
import DownloadCV from "@/components/shared/DownloadCV";
import {
  Code,
  Github,
  Globe,
  Star,
  BookOpen,
  Clock,
  Users,
  Coffee,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TechPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
    tools: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Linux", level: 85 },
    ],
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo e integração de pagamentos.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Produção",
      github: "github.com/user/project",
      live: "project-url.com",
      metrics: [
        { icon: <Users />, value: "10k+", label: "Usuários" },
        { icon: <Coffee />, value: "50k+", label: "Pedidos" },
        { icon: <Clock />, value: "99.9%", label: "Uptime" },
      ],
    },
    {
      title: "Task Management System",
      description:
        "Sistema de gerenciamento de tarefas com recursos de colaboração em tempo real.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      status: "Em desenvolvimento",
      github: "github.com/user/project2",
      metrics: [
        { icon: <Users />, value: "1k+", label: "Usuários" },
        { icon: <Coffee />, value: "15k+", label: "Tarefas" },
        { icon: <Clock />, value: "98%", label: "Eficiência" },
      ],
    },
  ];

  const education = [
    {
      type: "Graduação",
      title: "Ciência da Computação",
      institution: "Universidade XYZ",
      period: "2018-2022",
      description:
        "Foco em desenvolvimento de software e sistemas distribuídos.",
    },
    {
      type: "Certificação",
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Especialização em serviços cloud e arquitetura serverless.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 text-gray-100">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Experiência em Tecnologia
        </h1>
        <p className="text-xl text-gray-300">
          Desenvolvedor Full Stack com foco em soluções escaláveis e inovadoras
        </p>
      </div>
      <div className="ml-4">
        <DownloadCV area="tecnologia" />
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h2>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Ferramentas</TabsTrigger>
          </TabsList>
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-4">
                {items.map((skill, index) => (
                  <div key={index} className="bg-neutral-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {project.title}
                  <Badge variant="secondary">{project.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-blue-400 mb-1">{metric.icon}</div>
                      <div className="font-bold">{metric.value}</div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  {project.live && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Formação & Certificações
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <Badge className="mb-4">{item.type}</Badge>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-2">{item.institution}</p>
                <p className="text-gray-500 mb-4">{item.period}</p>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <Card className="bg-neutral-800 border-neutral-700">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Github className="w-6 h-6" />
            GitHub Stats
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: <Star />, value: "150+", label: "Stars" },
              { icon: <Code />, value: "2k+", label: "Commits" },
              { icon: <BookOpen />, value: "15+", label: "Repositórios" },
              { icon: <Users />, value: "50+", label: "Contribuições" },
            ].map((stat, index) => (
              <Card key={index} className="bg-neutral-700 border-none">
                <CardContent className="p-4 text-center">
                  <div className="text-blue-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechPage;
