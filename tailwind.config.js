/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:
      {
        sm: "320px",
        md: "769px",
        lg: "1026px"
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        
        
      },
      colors:{
       
        white:"#FFFFFF"
      
      },
      backgroundImage: {
        'bghome': "url('/src/assets/bghome.png')",
        
      }
    },
  },
  plugins: [],
}
