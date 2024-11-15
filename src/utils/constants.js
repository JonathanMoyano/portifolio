// utils/constants.js

// Rotas da aplicação
export const routes = {
  home: '/',
  history: '/historia',
  projects: '/projetos',
  education: '/formacao',
  experiences: '/experiencias',
  contact: '/contato',
};

// Meta tags padrão
export const defaultMeta = {
  title: 'Jonathan Souza Moyano - Portfólio Profissional',
  description: 'Analista de TI e Bombeiro Civil | Tecnologia e Segurança',
  author: 'Jonathan Souza Moyano',
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
};

// Links de contato e redes sociais
export const contactLinks = {
  email: 'jsouza1993@gmail.com',
  phone: '(13) 97412-4438',
  linkedin: 'https://br.linkedin.com/in/jonathansouzamoyano',
  github: 'https://github.com/JonathanPolezel',
};
