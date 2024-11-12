import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Calendar,
  MessageCircle,
  ClipboardCheck,
  AlertCircle,
  Copy,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAccessibility } from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";

const ContatoPage = () => {
  const { currentLanguage } = useAccessibility();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    area: "",
    message: "",
  });

  const translations = {
    pt: {
      title: "Vamos Conversar",
      subtitle:
        "Estou disponível para novos projetos, consultorias e oportunidades",
      form: {
        name: "Nome",
        email: "E-mail",
        subject: "Assunto",
        area: "Área de Interesse",
        message: "Mensagem",
        send: "Enviar Mensagem",
        sending: "Enviando...",
      },
      areas: {
        tech: "Tecnologia",
        fireman: "Bombeiro Civil",
        commerce: "Comércio Exterior",
        general: "Geral",
      },
      availability: {
        title: "Disponibilidade",
        status: "Disponível para novos projetos",
        schedule: "Horário de Atendimento",
      },
      contact: {
        title: "Informações de Contato",
        location: "Localização",
        email: "E-mail",
        phone: "Telefone",
      },
      social: {
        title: "Redes Sociais",
        connect: "Conecte-se comigo",
      },
      copy: {
        success: "Copiado para a área de transferência!",
        error: "Erro ao copiar. Tente novamente.",
      },
    },
    // Adicione outras traduções conforme necessário
  };

  const t = translations[currentLanguage];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Mensagem enviada!",
        description: "Retornarei o contato em breve.",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        area: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: t.copy.success,
        duration: 2000,
      });
    } catch (err) {
      toast({
        description: t.copy.error,
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const availabilityHours = [
    { day: "Segunda", hours: "09:00 - 18:00" },
    { day: "Terça", hours: "09:00 - 18:00" },
    { day: "Quarta", hours: "09:00 - 18:00" },
    { day: "Quinta", hours: "09:00 - 18:00" },
    { day: "Sexta", hours: "09:00 - 16:00" },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-xl text-gray-300">{t.subtitle}</p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        {t.form.name}
                      </label>
                      <Input
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-neutral-900 border-neutral-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        {t.form.email}
                      </label>
                      <Input
                        type="email"
                        placeholder={t.form.email}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-neutral-900 border-neutral-700"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        {t.form.subject}
                      </label>
                      <Input
                        placeholder={t.form.subject}
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="bg-neutral-900 border-neutral-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">
                        {t.form.area}
                      </label>
                      <Select
                        value={formData.area}
                        onValueChange={(value) =>
                          setFormData({ ...formData, area: value })
                        }
                      >
                        <SelectTrigger className="bg-neutral-900 border-neutral-700">
                          <SelectValue placeholder={t.form.area} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">{t.areas.tech}</SelectItem>
                          <SelectItem value="fireman">
                            {t.areas.fireman}
                          </SelectItem>
                          <SelectItem value="commerce">
                            {t.areas.commerce}
                          </SelectItem>
                          <SelectItem value="general">
                            {t.areas.general}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">
                      {t.form.message}
                    </label>
                    <Textarea
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-neutral-900 border-neutral-700 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <MessageCircle className="mr-2 h-4 w-4 animate-spin" />
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.form.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Availability */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  {t.availability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500">
                    {t.availability.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  {t.availability.schedule}
                </p>
                <div className="space-y-2">
                  {availabilityHours.map((day, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm text-gray-300 p-2 bg-neutral-700/50 rounded"
                    >
                      <span>{day.day}</span>
                      <span>{day.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle>{t.contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">São Paulo, SP</p>
                    <p className="text-sm text-gray-400">Brasil</p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-3 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleCopy("contato@email.com")}
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">contato@email.com</p>
                    <p className="text-sm text-gray-400">Clique para copiar</p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-3 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() => handleCopy("+55 11 99999-9999")}
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">+55 11 99999-9999</p>
                    <p className="text-sm text-gray-400">Clique para copiar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle>{t.social.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="hover:text-purple-400"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="hover:text-purple-400"
                  >
                    <Github className="h-6 w-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
