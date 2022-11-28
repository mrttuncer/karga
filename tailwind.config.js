/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {'primary': '#272343',
      'secondary': '#2D334A',
      'tertiary':'#979797',
      'quaternary':'#F0F0F0',
    },
    backgroundImage: {
      'crow': "url('/images/background.svg')",
    },
    fontFamily: {
      'scandia-medium': ['Scandia-medium','cursive'],
      'scandia-regular': ['Scandia-regular','cursive'],
      'rigsans-medium': ['RigSans-medium','cursive'],
      'rigsans-regular': ['RigSans-regular','cursive'],
    },
    fontSize: {
      'extra':'28px',
      'extra-2' :'38px',
    },
    lineHeight: {
      'other':'35px',
      'header' : '80px',
    },
    boxShadow: {
      'button':'7px 7px 0 -1.5px rgba(240,240,240),7px 7px rgba(39,35,67)'
    },
    strokeWidth:{
      '0.5':'0.5px'
    },
  },
},
  plugins: [],
}
