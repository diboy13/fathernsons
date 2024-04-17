/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#fde047",
        secondary: "#475569",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
