module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600'),
              },
            },
          },
        },
      }),
      aspectRatio: {
        '79/50': '79 / 50',
      },
      colors: {
        white: '#FFFFFF',
        primary: {
          500: '#FAF9F6',
          600: '#e2d5c4',
        },
        secondary: {
          300: '#f1715c',
          400: '#ef5f48',
          500: '#C3D6E0',
          600: '#d6462e',
          700: '#be3e29',
        },
        accent: {
          500: '#638394',
          600: '#e2d5c4',
        },
        hover: '#F9F6ED',
        orange: '#d57b01',
      },
    },
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'],
      round: ['Crete Round', 'sans'],
      work: ['Work Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1rem',
      },
      screens: {
        lg: '1140px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1055px',
      xl: '1280px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
