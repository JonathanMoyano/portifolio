// Traduções
export const translations = {
  pt: {
    // Navegação
    nav: {
      home: 'Início',
      history: 'Minha História',
      tech: 'Tecnologia',
      fireman: 'Bombeiro Civil',
      commerce: 'Comércio Exterior',
      experiences: 'Experiências',
      contact: 'Contato',
    },

    // Seções comuns
    common: {
      readMore: 'Ler mais',
      seeAll: 'Ver tudo',
      loading: 'Carregando...',
      error: 'Erro ao carregar',
      success: 'Sucesso!',
      send: 'Enviar',
      cancel: 'Cancelar',
      save: 'Salvar',
      edit: 'Editar',
      delete: 'Excluir',
      confirm: 'Confirmar',
      back: 'Voltar',
    },

    // Acessibilidade
    accessibility: {
      menu: 'Menu',
      skipToContent: 'Pular para o conteúdo',
      increaseText: 'Aumentar texto',
      decreaseText: 'Diminuir texto',
      highContrast: 'Alto contraste',
      normalContrast: 'Contraste normal',
      darkMode: 'Modo escuro',
      lightMode: 'Modo claro',
    },

    // Seções específicas
    sections: {
      // História
      history: {
        title: 'Minha Trajetória',
        subtitle: 'Uma jornada de transformação e aprendizado contínuo',
        timeline: [
          {
            period: '2020 - Presente',
            title: 'Desenvolvedor Full Stack',
            description: 'Desenvolvimento de soluções web complexas e inovadoras...',
            achievements: [
              'Liderança de equipe com 5 desenvolvedores',
              'Implementação de CI/CD',
              'Redução de 40% no tempo de deploy',
            ],
          },
          // Adicione mais períodos conforme necessário
        ],
      },

      // Tecnologia
      tech: {
        title: 'Experiência em Tecnologia',
        subtitle: 'Desenvolvendo soluções inovadoras',
        skills: {
          frontend: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'HTML/CSS', level: 95 },
          ],
          backend: [
            { name: 'Node.js', level: 88 },
            { name: 'Python', level: 82 },
            { name: 'SQL', level: 85 },
          ],
        },
      },

      // Bombeiro Civil
      fireman: {
        title: 'Bombeiro Civil',
        subtitle: 'Proteção e prevenção profissional',
        certifications: [
          {
            title: 'Formação Bombeiro Civil',
            institution: 'CFBC',
            year: '2014',
            description: 'Certificação completa em combate a incêndio e salvamento',
          },
        ],
      },

      // Comércio Exterior
      commerce: {
        title: 'Comércio Exterior',
        subtitle: 'Negociações e operações internacionais',
        expertise: ['Importação e Exportação', 'Logística Internacional', 'Compliance Aduaneiro'],
      },
    },

    // Formulário de contato
    contact: {
      title: 'Entre em Contato',
      form: {
        name: 'Nome',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Tente novamente.',
      },
    },
  },

  // English translations
  en: {
    // Adicione as traduções em inglês seguindo a mesma estrutura
  },

  // Spanish translations
  es: {
    // Adicione as traduções em espanhol seguindo a mesma estrutura
  },
};

// Configurações de tema
export const themeConfig = {
  fonts: {
    min: 14,
    max: 24,
    step: 1,
  },
  colors: {
    primary: {
      light: '#9333ea',
      dark: '#7e22ce',
    },
    secondary: {
      light: '#e879f9',
      dark: '#d946ef',
    },
  },
};

// Configurações de mídia
export const mediaQueries = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Rotas da aplicação
export const routes = {
  home: '/',
  history: '/historia',
  tech: '/tecnologia',
  fireman: '/bombeiro',
  commerce: '/comercio',
  experiences: '/experiencias',
  contact: '/contato',
};

// Meta tags padrão
export const defaultMeta = {
  title: 'Jonathan Souza Moyano - Portfólio Profissional',
  description: 'Profissional multidisciplinar com experiência em Tecnologia e Segurança',
  keywords: 'Analista de TI, bombeiro civil, portfólio',
  author: 'Jonathan Souza Moyano',
  image: '/images/og-image.jpg',
};

// Configurações de animação
export const animations = {
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
};

// Configurações de validação de formulários
export const formValidation = {
  name: {
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};

// Configurações de API (se necessário)
export const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};
