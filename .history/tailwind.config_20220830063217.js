/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sponsor' : 'repeat(auto-fit, minmax(110px, 1fr)',
      }
    },
  },
  plugins: [],
}