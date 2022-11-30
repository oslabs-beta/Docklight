
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
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
    themes: ['light', 'dark', 'synthwave', 'cyberpunk', 'autumn', 'dracula', 'lofi', 'valentine','forest', 'night',
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2696ea',
          secondary: '#3b82f6',
          'base-100': '#ffffff',
          'base-200': '#eff6ff'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#2696ea',
          secondary: '#3b82f6',
        }
      },
    ],
    base: true,
    utils: true,
    logs: true
  }
};
  