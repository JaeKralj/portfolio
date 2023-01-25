// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
        100: '#DDDDDD',
      },
      black: {
        DEFAULT: '#000000',
        100: '#424242',
        200: '#222222',
      },
      green: '#4DA100',
      twitterBlue: '#1DA1F2',
      linkedInBlue: '#0A63BC',
      whatsapGreen: '#09D24B',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      cormorant: ['Cormorant', 'serif'],
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease infinite',
      },
    },
    darkMode: 'class',
    plugins: [],
  },
}
