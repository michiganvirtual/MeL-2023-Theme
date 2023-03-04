/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        "deep-teal": "#093c44",
        "dark-teal": "#115e6e",
        "light-teal": "#2f8d98",
        green: "#b5cd34",
        orange: "#f7941e",
        "dark-gray": "#414042",
        "light-gray": "#6d6e71",
        "ada-green": "#6a7f17",
        "ada-orange": "#ac6610",
        "mel-blue": "#006eb6",
        "mel-red": "#8F2A14",
        "mel-green": "#49641B",
        "mel-rust": "#AD4D1B",
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
