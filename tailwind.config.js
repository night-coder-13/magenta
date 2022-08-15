
module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        'inset': 'inset 0 3px 10px 1px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        c_blue: {
          50: '#0998B5',
          70: '#17AECC',
          100: '#097A91',
          200: '#036275',
          
        },
        yellow:{
          999:'#e8b600'
        }
      }
    },
    
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}