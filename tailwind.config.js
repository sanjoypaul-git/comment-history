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
        secondary: '#686894',
        'gray-1': '#F5F6FA',
        'gray-2': '#c2c2dd',
        'gray-3': '#565A61',
        'gray-4': '#929497',
        'gray-5': '#72729D',
        'gray-6': '#7c8187',
        'gray-7': '#E8E9ED',
        warn: '#CA8C93'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0px 1rem',
          '@screen xs': {
            maxWidth: 'auto',
            margin: '0px auto',
          },
          '@screen sm': {
            maxWidth: '462px',
            margin: '0px auto',
          },

          '@screen smd': {
            maxWidth: '462px',
            margin: '0px auto',
          },
          '@screen md': {
            maxWidth: '750px',
            margin: '0px auto',
            padding: '0px auto',
          },
          '@screen lg': {
            maxWidth: '970px',
            margin: '0px auto',
          },
          '@screen xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 2xl': {
            maxWidth: '1250px',
            margin: '0px auto',
          },

          '@screen 3xl': {
            maxWidth: '1396px',
            margin: '0px auto',
          },
        },
        '.container-none': {
          padding: '0px 0px',
          maxWidth: '100%',
        },
      });
    },
  ],
}
