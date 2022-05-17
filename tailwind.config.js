module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1rem",
      },
      screens: {
        lg: "1140px",
      },
    },
  },
  plugins: [],
}
