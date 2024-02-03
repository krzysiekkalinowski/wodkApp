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
        'appContentHeight': '600px',
      },
      fontFamily: {
        'roboto': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

