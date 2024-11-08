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
          DEFAULT: 'var(--primary-color)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        'on-primary': 'var(--on-primary)',
        'surface': 'var(--surface)',
        'surface-variant': 'var(--surface-variant)',
        'outline': 'var(--outline)',
      },
      borderRadius: {
        'custom': 'var(--radius)',
      },
      transitionProperty: {
        'custom': 'var(--transition)',
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'breathe': 'breathe 3s infinite ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1)',
        'gradient': 'gradientMove 6s ease infinite',
      },
    },
  },
  plugins: [],
}