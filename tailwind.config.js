module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      colors: {
        primary: {
          light: '#a16144',
          DEFAULT: '#d99433',
          dark: '#6e2e11'
        },
        secondary: {
          light: '#e1a95c',
          DEFAULT: '#8a3915',
          dark: '#ae7629'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
