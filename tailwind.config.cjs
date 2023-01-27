/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        BLACK: '#202020',
        PURPLE:'#5B38E3',
        YELLOW:'#F7D046'
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif']
      },
      width:{
        "50r": '53rem',
        "40r": '43rem',
        "30r": '33rem',
      },
      height:{
        "50r":'50rem'
      },
      screens:{
        xsm: '415px' 
      }
    },
  },
  plugins: [],
}
