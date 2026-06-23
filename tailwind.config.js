/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bangla: ['SolaimanLipi', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#7c3a52',
          dark: '#5a2a3c',
          light: '#f3e9ed',
          accent: '#c9a36a',
        },
      },
      aspectRatio: {
        product: '3 / 4',
      },
    },
  },
  plugins: [],
};
