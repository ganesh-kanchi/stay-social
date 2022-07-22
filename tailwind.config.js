/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(29, 155, 240)",
        light: "#f5f5f5",
        grey: "#cbcbcb",
        lightGrey: "#e2e2e292",
        darkGrey: "#5a5a5a",
        dark: "#15202B",
        darkSecondary: "#1D2C3B",
        red: "#ff2c2c",
      },
    },
  },
  plugins: [],
}
