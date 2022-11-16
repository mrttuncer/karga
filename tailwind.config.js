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
    
  },
},
  plugins: [],
}
