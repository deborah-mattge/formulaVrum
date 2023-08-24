/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      s650: "650px",
      md: "768px",
      s900: "900px",
      lg: "976px",
      s1100: "1100px",
      s1300: "1300px",
      s1400: "1400px",
      xl: "1440px",
      s1900: "1900px",
    },
  },
  plugins: [],
};
