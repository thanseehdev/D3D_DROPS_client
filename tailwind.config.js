/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        accent: '#B11226',
        silver: '#C0C0C0',
        offwhite: '#EAEAEA',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        brand: ['Pirata One', 'cursive'],
      },
    },
  },
  plugins: [],
}
