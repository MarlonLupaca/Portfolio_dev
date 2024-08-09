/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '380px',
      },
      colors:{
        'principal' : '#2cd7ff',
        'custom-rgba': 'rgba(44, 215, 255, 0.5)',
        'custom-grey-rgba': 'rgba(255, 255, 255, 0.09)',
      },
      animation:{
        desplazamiento_destok: "desplazamiento_destok 7s infinite",
        desplazamiento_movil: "desplazamiento_movil 7s infinite"
      },
      keyframes: {
        desplazamiento_destok: {
          "0%": { "top": "0px" },
          "25%": { "top": "0px" },
          "26%": { "top": "-45px" },
          "50%": { "top": "-45px" },
          "51%": { "top": "-90px" },
          "75%": { "top": "-90px" },
          "76%": { "top": "-45px" },
          "99%": { "top": "-45px" },
          "100%": { "top": "0px" },
        },
        desplazamiento_movil: {
          "0%": { "top": "0px" },
          "25%": { "top": "0px" },
          "26%": { "top": "-28px" },
          "50%": { "top": "-28px" },
          "51%": { "top": "-56px" },
          "75%": { "top": "-56px" },
          "76%": { "top": "-28px" },
          "99%": { "top": "-28px" },
          "100%": { "top": "0px" },
        }
      },
      boxShadow: {
        'custom-white': '0 0 10px rgba(255, 255, 255, 0.5)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.9)',
        'custom-blue': '0 4px 6px rgba(59, 130, 246, 0.5)',
        'custom-red': '0 4px 6px rgba(220, 38, 38, 0.5)', 
        'custom-green': "0px 0px 50px rgba(44, 215, 255, 1)", 
      },

      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
}
  