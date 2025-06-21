/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tm-black': '#000000',
        'tm-gray': {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        },
        'tm-blue': '#3b82f6',
        'tm-white': '#ffffff',
      }
    },
  },
  plugins: [],
} 