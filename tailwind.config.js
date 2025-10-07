/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#242424",
      lightGreen: "#64ffda",
      gray: "#808080", // ❌ You had double ## here
      lightGray: "#cdcdcd",
      lightBlue: "#CAF0F8",
      deepBlue: "#1D4646",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sfmono: ["JetBrains Mono Variable", "monospace"],
      },
    },
  },
  plugins: [],
};
