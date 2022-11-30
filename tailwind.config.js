
module.exports = {
  darkMode: 'class',
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
    themes: ['light', 'dark',
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2696ea',
          'base-100': '#fffffe',
          'base-200': '#eff6ff'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#2696ea',
        }
      },
    ],
    base: true,
    utils: true,
    logs: true
  }
};
  