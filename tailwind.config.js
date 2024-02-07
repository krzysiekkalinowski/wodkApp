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
      boxShadow: {
        'sharpShadow': '3px 3px 0 0 white',
        'sharpHoverShadow': '4px 4px 0 0 white',
      },
    },
  },
  plugins: [],
}

