/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        'surface': '#f8fafc',
        'surface-variant': '#f1f5f9',
      },
    },
  },
  plugins: [],
}