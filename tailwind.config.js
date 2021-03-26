module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#252735',
        light: '#FFFFFF'
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
