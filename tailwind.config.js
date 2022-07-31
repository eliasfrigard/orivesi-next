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
              color: theme('colors.accent.500'),
              '&:hover': {
                color: theme('colors.accent.600'),
              },
            },
          },
        },
      }),
      aspectRatio: {
        '3/4': '4/3',
        '79/52': '79 / 52',
        '16/9': '16 / 9',
        '3344/1253': '3344 / 1253',
      },
      scale: {
        102: '1.01',
      },
      colors: {
        white: '#FFFFFF',
        primary: {
          // 500: '#FAF9F6',
          // 600: '#F1F0ED',
          // 700: '#E7E6E5',
          500: '#F3F3F3',
          600: '#F8FCFB',
        },
        secondary: {
          200: '#4d96b3',
          300: '#3387a8',
          400: '#1a789d',
          500: '#006992',
          600: '#005f83',
          700: '#005475',
          800: '#004a66',
        },
        accent: {
          200: '#e2a34d',
          300: '#dd9534',
          400: '#d9881a',
          500: '#d57b01',
          600: '#c06f01',
          700: '#aa6201',
          800: '#955601',
        },
        grey: {
          200: '#5e5d5c',
          300: '#474545',
          400: '#302e2d',
          500: '#191716',
          600: '#171514',
          700: '#141212',
          800: '#12100f',
        },
        hover: '#F9F6ED',
        orange: '#5D7B8A',
      },
    },
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'],
      round: ['Crete Round', 'sans'],
      work: ['Work Sans', 'sans-serif'],
      sketch: ['Cabin Sketch', 'cursive'],
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
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-selection-variant'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    extend: {
      textColor: ['selection'],
      backgroundColor: ['selection'],
    },
  },
}
