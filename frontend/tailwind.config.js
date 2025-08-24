
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src//*.{html,js,jsx,ts,tsx}", // Specify paths to your files
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1da1f2', // Add custom colors
          secondary: '#14171a',
        },
        spacing: {
          128: '32rem', // Custom spacing
        },
      },
    },
    plugins: [],
  };