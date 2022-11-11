module.exports = {
  content: ['./Client/**/*.{js,jsx,ts,tsx}'],
  theme: {  
    extend: {
      height: {
        ninety: '90%',
        ten: '10%'
      },
      colors: {
        'tailwind': '#0B1121',
      },
      fontFamily: {
        inter: ['"Inter"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
  