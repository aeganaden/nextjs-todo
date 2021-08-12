module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Cinzel'],
       'body': ['"Helvetica Neue"']
    },
    extend : {
      colors: {
        primary: {
          light: '#e25678',
          DEFAULT: '#d60e3e',
          dark: '#ab0b32'
        },
        secondary: {
          light: '#e4caa5',
          DEFAULT: '#ddbd8f',
          dark: '#b19772'
        },
        accent: {
          light: '#ced6dd',
          DEFAULT: '#8599a9',
          dark: '#6a7a87'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
