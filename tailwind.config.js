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
        "16/9": "16 / 9",
      },
      scale: {
        102: "1.01",
      },
      colors: {
        white: "#FFFFFF",
        primary: {
          // 500: '#FAF9F6',
          // 600: '#F1F0ED',
          // 700: '#E7E6E5',
          500: "#F4FAF8",
        },
        secondary: {
          400: "#3793CB",
          500: "#548eb2",
          600: "#427391",
          // 500: '#C3D6E0',
        },
        accent: {
          400: "#CB6F37",
          500: "#B27854",
          600: "#A4592B",
          // 500: '#638394',
        },
        hover: "#F9F6ED",
        orange: "#5D7B8A",
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
