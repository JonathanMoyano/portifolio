import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadCV from '@/components/shared/DownloadCV';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAccessibility } from '@/components/layout/Layout';
import { translations } from '@/utils/constants';
import { Ship, Plane, TrendingUp, BarChart, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ComercioPage = () => {
  const { currentLanguage } = useAccessibility();
  const t = translations[currentLanguage].comercio;
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Dados de exemplo para o gráfico
  const performanceData = [
    { month: 'Jan', importacao: 120000, exportacao: 150000 },
    { month: 'Fev', importacao: 140000, exportacao: 165000 },
    { month: 'Mar', importacao: 160000, exportacao: 180000 },
    { month: 'Abr', importacao: 180000, exportacao: 195000 },
    { month: 'Mai', importacao: 200000, exportacao: 220000 },
    { month: 'Jun', importacao: 220000, exportacao: 240000 },
  ];

  const regions = [
    {
      name: t.northAmerica,
      flag: '🇺🇸',
      countries: [t.usa, t.canada, t.mexico],
      operations: [t.import, t.export],
      mainProducts: [t.technology, t.automobiles, t.machinery],
      volume: '$5M+',
    },
    {
      name: t.europe,
      flag: '🇪🇺',
      countries: [t.germany, t.france, t.italy, t.spain],
      operations: [t.import, t.export],
      mainProducts: [t.chemicals, t.pharmaceuticals, t.food],
      volume: '$3M+',
    },
    {
      name: t.asia,
      flag: '🇨🇳',
      countries: [t.china, t.japan, t.southKorea],
      operations: [t.import],
      mainProducts: [t.electronics, t.components, t.rawMaterials],
      volume: '$4M+',
    },
  ];

  const expertise = [
    {
      category: t.import,
      icon: <Ship className="h-6 w-6" />,
      color: 'text-blue-500',
      items: [t.ncmAnalysis, t.importLicensing, t.customsClearance, t.supplierManagement],
    },
    {
      category: t.export,
      icon: <Plane className="h-6 w-6" />,
      color: 'text-green-500',
      items: [t.exportRegistration, t.drawback, t.originCertificates, t.internationalLogistics],
    },
    {
      category: t.negotiation,
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-purple-500',
      items: [t.internationalContracts, t.incoterms, t.marketAnalysis, t.commercialStrategy],
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-6xl text-center"
      >
        <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          {t.title}
        </h1>
        <p className="mb-8 text-xl text-gray-300">{t.subtitle}</p>
        <div className="ml-4">
          <DownloadCV area="comercio" />
        </div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-12 max-w-6xl"
      >
        <Card className="border-neutral-700 bg-neutral-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="text-blue-500" />
              {t.operationalPerformance}
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
                      backgroundColor: '#1f2937',
                      border: 'none',
                    }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="importacao"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name={t.imports}
                  />
                  <Line
                    type="monotone"
                    dataKey="exportacao"
                    stroke="#22d3ee"
                    strokeWidth={2}
                    name={t.exports}
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
        className="mx-auto mb-12 max-w-6xl"
      >
        <h2 className="mb-6 text-2xl font-semibold">{t.areasOfExpertise}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {expertise.map((area, index) => (
            <Card key={index} className="border-neutral-700 bg-neutral-800">
              <CardContent className="p-6">
                <div className={`mb-4 ${area.color}`}>{area.icon}</div>
                <h3 className="mb-4 text-xl font-semibold">{area.category}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-4 w-4 ${area.color}`} />
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
        className="mx-auto mb-12 max-w-6xl"
      >
        <h2 className="mb-6 text-2xl font-semibold">{t.globalOperations}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {regions.map((region, index) => (
            <Card
              key={index}
              className={`cursor-pointer border-neutral-700 bg-neutral-800 transition-all duration-300
                ${selectedRegion === index ? 'ring-2 ring-blue-500' : 'hover:border-blue-500'}`}
              onClick={() => setSelectedRegion(selectedRegion === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">{region.flag}</span>
                  <h3 className="text-xl font-semibold">{region.name}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {t.volume}: {region.volume}
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
                    <p className="mb-2 text-sm text-gray-400">{t.mainProducts}:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.mainProducts.map((product, i) => (
                        <Badge key={i} variant="secondary">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {selectedRegion === index && (
                    <div className="mt-4 border-t border-neutral-700 pt-4">
                      <p className="mb-2 text-sm text-gray-400">{t.countries}:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, i) => (
                          <Badge key={i} className="bg-blue-500/10 text-blue-400">
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
        className="mx-auto max-w-4xl"
      >
        <Card className="border-none bg-gradient-to-r from-blue-900 to-cyan-900">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold">{t.expandingHorizons}</h3>
            <p className="mb-6 text-gray-300">{t.discoverHelp}</p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => (window.location.href = '/contato')}
            >
              {t.startProject}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComercioPage;
