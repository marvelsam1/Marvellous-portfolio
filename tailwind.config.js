/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#242424',
      'gray': '##808080',
      'lightGray': '#cdcdcd',
      'lightBlue': '#CAF0F8',
      // 'lightBlue': '#63D4D5',
      'lightGreen': '#fefec0',
      'deepBlue': '#1D4646'
    },
    extend: {},
  },
  plugins: [],
}

