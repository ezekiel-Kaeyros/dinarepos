import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        primaryColor: '#005F6AFF',
        'secondary': '#FAFAFB',
        'green': '#005F6A',
        'neutral': '#ACAFB7',
        'neutral-gray': '#BDC1C9',
        'neutral-yellow': '#F4C43B',
      },
      borderColor: {
        'primary': '#005F6AFF',
        'secondary': '#F4C43B'
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
      }, 
      borderRadius: {
        'cs': "10px",
      }
    },
  },
  plugins: [],
};
export default config;