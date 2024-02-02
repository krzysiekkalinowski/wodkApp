/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appColor': '#F472B6',
      },
      spacing: {
        'appHeight': '850px',
      },
    },
  },
  plugins: [],
}

