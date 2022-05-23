module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              color: theme("colors.gray.800"),
            },
            h3: {
              color: theme("colors.gray.800"),
            },
            strong: {
              color: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
          },
        },
      }),
      aspectRatio: {
        "79/50": "79 / 50",
      },
      scale: {
        102: "1.01",
      },
      colors: {
        background: "#fffdf4",
        hover: "#F9F6ED",
        orange: "#d57b01",
      },
    },
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
      round: ["Crete Round", "sans"],
      work: ["Work Sans", "sans-serif"],
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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1055px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
