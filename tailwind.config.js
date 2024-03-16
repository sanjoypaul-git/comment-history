/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: '#5358B6',
        'light-1': '#F5F6FA',
        'light-2': '#E8E9ED',
        'light-3': '#c2c2dd',
        dark: '#7c8187',
        danger: '#F44336'
      },
    },
  },
  plugins: [],
}
