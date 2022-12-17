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
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      cormorant: ['Cormorant', 'serif'],
    },
    extend: {},
    darkMode: 'class',
    plugins: [],
  },
}
