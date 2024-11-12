import React, { useState } from "react";
import { motion } from "framer-motion";
import DownloadCV from "@/components/shared/DownloadCV";
import {
  Globe2,
  Ship,
  Plane,
  TrendingUp,
  Briefcase,
  FileText,
  MapPin,
  DollarSign,
  BarChart,
  CheckCircle2,
  ArrowUpRight,
  Map,
  Flag,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAccessibility } from "@/components/layout/Layout";
import { translations } from "@/utils/constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ComercioPage = () => {
  const { currentLanguage } = useAccessibility();
  const t = translations[currentLanguage];
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Dados de exemplo para o gráfico
  const performanceData = [
    { month: "Jan", importacao: 120000, exportacao: 150000 },
    { month: "Fev", importacao: 140000, exportacao: 165000 },
    { month: "Mar", importacao: 160000, exportacao: 180000 },
    { month: "Abr", importacao: 180000, exportacao: 195000 },
    { month: "Mai", importacao: 200000, exportacao: 220000 },
    { month: "Jun", importacao: 220000, exportacao: 240000 },
  ];

  const regions = [
    {
      name: "América do Norte",
      flag: "🇺🇸",
      countries: ["EUA", "Canadá", "México"],
      operations: ["Importação", "Exportação"],
      mainProducts: ["Tecnologia", "Automóveis", "Máquinas"],
      volume: "$5M+",
    },
    {
      name: "Europa",
      flag: "🇪🇺",
      countries: ["Alemanha", "França", "Itália", "Espanha"],
      operations: ["Importação", "Exportação"],
      mainProducts: ["Químicos", "Farmacêuticos", "Alimentos"],
      volume: "$3M+",
    },
    {
      name: "Ásia",
      flag: "🇨🇳",
      countries: ["China", "Japão", "Coreia do Sul"],
      operations: ["Importação"],
      mainProducts: ["Eletrônicos", "Componentes", "Matéria-prima"],
      volume: "$4M+",
    },
  ];

  const expertise = [
    {
      category: "Importação",
      icon: <Ship className="w-6 h-6" />,
      color: "text-blue-500",
      items: [
        "Análise de NCM",
        "Licenciamento de Importação",
        "Desembaraço Aduaneiro",
        "Gestão de Fornecedores",
      ],
    },
    {
      category: "Exportação",
      icon: <Plane className="w-6 h-6" />,
      color: "text-green-500",
      items: [
        "Registro de Exportação",
        "Drawback",
        "Certificados de Origem",
        "Logística Internacional",
      ],
    },
    {
      category: "Negociação",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-500",
      items: [
        "Contratos Internacionais",
        "Incoterms",
        "Análise de Mercado",
        "Estratégia Comercial",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Comércio Exterior
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Conectando negócios globalmente com expertise e estratégia
        </p>
        <div className="ml-4">
          <DownloadCV area="comercio" />
        </div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <Card className="bg-neutral-800 border-neutral-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="text-blue-500" />
              Performance Operacional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                    }}
                    itemStyle={{ color: "#e2e8f0" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="importacao"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Importação"
                  />
                  <Line
                    type="monotone"
                    dataKey="exportacao"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    name="Exportação"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Áreas de Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((area, index) => (
            <Card key={index} className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <div className={`mb-4 ${area.color}`}>{area.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{area.category}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${area.color}`} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Global Operations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Operações Globais</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <Card
              key={index}
              className={`bg-neutral-800 border-neutral-700 cursor-pointer transition-all duration-300
                ${
                  selectedRegion === index
                    ? "ring-2 ring-blue-500"
                    : "hover:border-blue-500"
                }`}
              onClick={() =>
                setSelectedRegion(selectedRegion === index ? null : index)
              }
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{region.flag}</span>
                  <h3 className="text-xl font-semibold">{region.name}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Volume: {region.volume}
                    </Badge>
                    <div className="flex flex-wrap gap-2">
                      {region.operations.map((op, i) => (
                        <Badge key={i} variant="outline">
                          {op}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">
                      Principais Produtos:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {region.mainProducts.map((product, i) => (
                        <Badge key={i} variant="secondary">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {selectedRegion === index && (
                    <div className="pt-4 mt-4 border-t border-neutral-700">
                      <p className="text-sm text-gray-400 mb-2">Países:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, i) => (
                          <Badge
                            key={i}
                            className="bg-blue-500/10 text-blue-400"
                          >
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-gradient-to-r from-blue-900 to-cyan-900 border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Expandindo seus Horizontes?
            </h3>
            <p className="text-gray-300 mb-6">
              Descubra como posso ajudar sua empresa a alcançar novos mercados
              globais
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => (window.location.href = "/contato")}
            >
              Iniciar Projeto
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComercioPage;
