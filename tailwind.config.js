module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '79/50': '79 / 50',
      },
      colors: {
        background: '#fffdf4',
      },
    },
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'],
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
  plugins: [],
}
