module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: '#222831',
        tableBackgroundColor: '#FFFF',
        textColor: '#293845',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
