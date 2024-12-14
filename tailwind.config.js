/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Archivo principal HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Todos los archivos React en la carpeta src
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
