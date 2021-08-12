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
          light: '#6e2e11',
          DEFAULT: '#8a3915',
          dark: '#a16144'
        },
        secondary: {
          light: '#ae7629',
          DEFAULT: '#d99433',
          dark: '#e1a95c'
        },
        accent: {
          light: '#c0cccd',
          DEFAULT: '#b0bfc0',
          dark: '#8d999a'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
