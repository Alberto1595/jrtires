/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        negro: "#080808",
        "negro-card": "#111111",
        "negro-borde": "#222222",
        rojo: "#CC0000",
        "rojo-hover": "#AA0000",
        dorado: "#B8960C",
        "texto-base": "#F0F0F0",
        "texto-gris": "#888888",
      },
      fontFamily: {
        titulo: ['"Bebas Neue"', "cursive"],
        cuerpo: ['"Barlow"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
