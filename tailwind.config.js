/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
       
        primary: "#034542",
        secondary: "#00B585",
        gray: "#A5A5A5",
        darkColor: "#252525",
        textLight: "#848282",
        lightgray: "#F5F5F5",
        lightgreen:"#C0DCD5"
        
      },
    },
  },
  plugins: [],
}