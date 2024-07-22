import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xsf: '300px', // iframe small size
      xxs: '400px',
      // => @media (min-width: 400px) { ... }
      xs: '480px',
      // => @media (min-width: 480px) { ...
      sm: '390px', // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      mf: '900px', // iframe middle size
      md: '1024px', // Tablet  ipad horizontal..
      lg: '1440px', // Desktop,Laptop,
      xl: '1920px', // Desktop wide, ultra.
      '2xl': '2560px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'puerto-rico': {
          '50': '#edfcf6',
          '100': '#d4f7e8',
          '200': '#aceed6',
          '300': '#76dfbf',
          '400': '#36bf9a',
          '500': '#1bae8b',
          '600': '#0f8c71',
          '700': '#0c705d',
          '800': '#0c594a',
          '900': '#0b493f',
          '950': '#052924'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    process.env.NODE_ENV !== 'production' &&
      require('tailwindcss-debug-screens'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#1bae8b',
              foreground: '#ffffff'
            }
          }
        },
        dark: {}
      }
    })
  ]
};
export default config;
