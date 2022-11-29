
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['light', 'dark'],
    base: true,
    utils: true,
    logs: true
  }
};
  