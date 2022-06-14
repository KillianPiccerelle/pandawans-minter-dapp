/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    colors: {
      bgStripes: '#3A5779',
      shadowColor: '#141414',
      darkLighter: '#3c4757',
      darkBase: '#38455A',
      darker: '#1d222a',
      light: '#FAFFFD',
      white: '#ffffff',
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
    fontFamily: {
      heading: 'Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
