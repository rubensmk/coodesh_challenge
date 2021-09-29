module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: '#F7F9FA',
        tableBackgroundColor: '#9EADBA',
        textColor: '#293845',
        white: '#FFFFFF'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
