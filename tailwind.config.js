// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        gitGray: {
          0: "#CDD9E5",
          100: "#AFBAC5",
          200: "#909DAB",
          300: "#768390",
          400: "#626E7B",
          500: "#545D68",
          600: "#434C56",
          700: "#373E47",
          800: "#2D333B",
          900: "#22272E",
        },
        primary: {
          0: "#B4F1B4",
          100: "#57AB5A",
          200: "#6AC46D",
          300: "#57AB5A",
          400: "#46954A",
          500: "#347D39",
          600: "#2C6A30",
          700: "#103417",
          800: "#1B4721",
          900: "#103417",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
