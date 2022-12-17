/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frenchLilac: "#985F99",
        blueJeans: "#63ADF2",
        viridian: "#2A7F62",
        lightPink: "#FCB0B3",
        teaGreen: "#BFEDC1",
        matteBlack: "#28282b",
        goldYellow: "#ffb703",
        dirtyBrown: "#e9c46a",
        trueGrey: "#264653",
      },

      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Fredoka: ["Fredoka One", "cursive"],
        Michroma: ["Michroma", "sans-serif"],
        QuickSand: ["QuickSand", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        SpaceGrotesk: ["SpaceGrotesk", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
        Unbounded: ["Unbounded", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
