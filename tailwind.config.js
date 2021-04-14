module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
    }
  },
  theme: {
    extend: {
      width: {
        '10r': '10rem',
        '15r': '15rem',
        '20r': '20rem',
        '25r': '25rem',
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem',
        '45r': '45rem',
        '50r': '50rem',
        '55r': '55rem',
        '60r': '60rem',
      },
      minWidth: {
        '10r': '10rem',
        '15r': '15rem',
        '20r': '20rem',
        '25r': '25rem',
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem',
        '45r': '45rem',
        '50r': '50rem',
        '55r': '55rem',
        '60r': '60rem',
      },
      maxdWidth: {
        '10r': '10rem',
        '15r': '15rem',
        '20r': '20rem',
        '25r': '25rem',
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem',
        '45r': '45rem',
        '50r': '50rem',
        '55r': '55rem',
        '60r': '60rem',
      },
      minHeight: {
        '10r': '10rem',
        '15r': '15rem',
        '20r': '20rem',
        '25r': '25rem',
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem',
        '45r': '45rem',
        '50r': '50rem',
        '55r': '55rem',
        '60r': '60rem',
      },
      colors: {
        dark: '#252735',
        light: '#FFFFFF',
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
