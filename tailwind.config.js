module.exports = {
  content: [
    './index.html', // Se você estiver usando o HTML
    './src/**/*.{js,jsx,ts,tsx}', // Caminho para os arquivos React
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        zendots: ['"Zen Dots"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        prymary: '#1E293B ',
        background: '# linear-gradient(135deg, #0D0D0D 0%, #1E293B 50%, #3B82F6 100%)',
        background2: '#3B82F6 ',
        secondary: '#F5F5F5  ',
        accent: '#fa3c08',
        botao: '#10B981 ',
        botaoHover: '#059669',

      },
      
    },
  },
  plugins: [],
}
