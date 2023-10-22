module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography", "@tailwindcss/forms")],
}
