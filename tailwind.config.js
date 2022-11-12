/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'shark': '#1c2324',
          'dune': '#e3daca',
          'dusty': '#c4b9a3',
          'sandstone': '#d9cfbd',
          'mudbrick': '#b5aa94',
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
    ],
  }
  