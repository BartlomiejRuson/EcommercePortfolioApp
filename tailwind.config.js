/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightRed':"#DC0000",
        'darkRed':'#850000',
        'darkYellow':'#FFDB89',
        'lightYellow':'#FFF6C3'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
