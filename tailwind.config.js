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
        98: '0.98',
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
          200: '#9ac1d3',
          300: '#72a8bf',
          400: '#4b8faa',
          500: '#003c52',
          600: '#00303e',
          700: '#00242b',
          800: '#001815',
        },
        accent: {
          200: '#ffe3c3',
          300: '#ffd1a0',
          400: '#ffb77c',
          500: '#ff9505',
          600: '#cc7503',
          700: '#995404',
          800: '#663306',
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
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1055px',
    //   xl: '1280px',
    // },
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
