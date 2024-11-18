// components/ui/page-header.jsx
export const PageHeader = ({ overline, title, description }) => (
  <div className="mb-8 text-center sm:mb-12">
    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
      {overline}
    </h2>
    <h1 className="font-display mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mt-4 sm:text-4xl lg:text-5xl">
      {title}
    </h1>
    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-sm text-cyan-100/60 sm:text-base lg:text-lg">
        {description}
      </p>
    )}
  </div>
);

// Definição das cores padrão do tema
export const themeColors = {
  primary: 'cyan',
  secondary: 'indigo',
  accent: 'blue',
  background: '[#0A0F1E]',
  text: {
    primary: 'white',
    secondary: 'cyan-100/60',
    accent: 'cyan-400',
  },
};
