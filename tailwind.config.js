
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
          primary: '#0693e3',
          'base-100': '#ffff'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#0693e3',
        }
      },
    ],
    base: true,
    utils: true,
    logs: true
  }
};
  