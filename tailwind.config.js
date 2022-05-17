module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      sans: ['Montserrat', 'Roboto'],
      alternative: ['Montserrat Alternates', 'Roboto'],
    },
    extend: {
      colors: {
        dp: {
          'blue-500': '#0700F6',
          'grayscale-100': '#FFFFFF',
          'grayscale-300': '#D5D9E3',
          'grayscale-800': '#2F3032',
          'yellow-500': '#FAF33E',
        },
      },
      fontSize: {
        'dp-headline-6-m': '18px',
        'dp-bodytext-l-m': '16px',
        'dp-bodytext-m-dt': '14px',
      },
    },
  },
  variants: {},
  plugins: [],
};
