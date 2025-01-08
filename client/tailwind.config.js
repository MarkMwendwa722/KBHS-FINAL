/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-green':'#0A6847',
        'custom-gray':'#D9D9D9',
        'custom-yellow':'#FFFDD0'
      }
    },
  },
  plugins: [],
}
