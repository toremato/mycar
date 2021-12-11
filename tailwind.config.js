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
          // 600: "#2D333B",
          // 900: "#21262E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
