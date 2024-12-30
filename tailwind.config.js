/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Looks for .html and .ts files in all folders within 'src'd
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui') // Include the PrimeNG plugin
  ],
}

