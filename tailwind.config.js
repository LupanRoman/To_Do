/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#AED9EA',
        'btn-color': '#00A6E3',
        'nav-color': '#EFEDFF',
        'btn-add': '#FFE28D',
      },
      margin: {
        '0-auto': '0 auto',
      },
    },
  },
  plugins: [],
};
