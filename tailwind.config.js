/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system']
    },

    extend: {
      colors: {
        // Configure your color palette here
        'cerebralOrange': {
          500: '#ED9B18',
          600: '#F58A07',
        },
        'cerebralRed': '#DC141C',
        'cerebralGrey': {
          500: '#5B5B5B',
          600: '#1D3444',
          700: '#0D1317',
        },
        'cerebralBlue': '#DCEEFD'
      },
    },
  },
  plugins: [],
}

