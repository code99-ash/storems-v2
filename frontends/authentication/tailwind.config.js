/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{vue,js,jsx,ts,tsx,css,.scss}",
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '570px',
      md: '768px',
      lg: '900px',
      xl: '1200px'
    },
    extend: {
      colors: {
        secondary: '#f79256',
        tan: '#fbd1a2',
        mintgreen: '#7dcfb6',
        primary: '#00b2ca',
        navyblue: '#1d4e89',
        white: '#fff'
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        'serif': ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 1s ease-out',
        'fade-out': 'fade-out 1s ease-out',
        'drop-inslow': 'drop-inslow 1s ease-in-out',
        'drop-outslow': 'drop-outslow 1s ease-in-out',
        // Add your custom animations here
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'drop-inslow': {
          '0%': { height: '0' },
          '100%': { height: 'max-content' },
        },
        'drop-outslow': {
          '0%': { height: 'max-content' },
          '100%': { height: '0' },
        },
        // Add your custom keyframes here
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
