/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      bgStripes: '#3A5779',
      shadowColor: '#141414',
      darkLighter: '#3c4757',
      darkBase: '#38455A',
      darker: '#1d222a',
      light: '#FAFFFD',
      white: '#ffffff',
      backAlpha700: 'rgba(0, 0, 0, 0.64)',
      color1Lighter: '#c7dcfa',
      color1Base: '#92bdf8',
      color1Darker: '#5d9ef6',
      color2Lighter: '#b0dd49',
      color2Base: '#A2D729',
      color2Darker: '#8ab722',
      color3Lighter: '#fb9567',
      color3Base: '#FA824C',
      color3Darker: '#f9611c',
    },
    borderWidth: {
      0.5: '0.5px',
    },
    fontFamily: {
      heading: 'Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
    minWidth: {
      screen: '100vw',
      4: '4px',
      400: '400px',
    },
    screens: {
      xsm: '515px',
      smm: '650px',
      mlg: '800px',
    },
    extend: {
      height: {
        30: '120px',
        17: '70px',
        100: '400px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
