/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'float-tech': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0.1' },
          '25%': { transform: 'translateY(-30px) translateX(20px) rotate(90deg)', opacity: '0.25' },
          '50%': { transform: 'translateY(20px) translateX(-20px) rotate(180deg)', opacity: '0.1' },
          '75%': { transform: 'translateY(-10px) translateX(30px) rotate(270deg)', opacity: '0.2' },
        },
        'glow-particle': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3', filter: 'blur(2px)' },
          '50%': { transform: 'translateY(-50px) translateX(30px)', opacity: '1', filter: 'blur(0)' },
        },
        'gradient': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
        },
        'blob': {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      },
      animation: {
        'fade-in': '0.5s fade-in ease-out forwards',
        'fade-in-up': '0.5s fade-in-up ease-out forwards',
        'fade-in-down': '0.5s fade-in-down ease-out forwards',
        'glow': '5s glow ease-in-out infinite',
        'float-tech': 'float-tech 20s ease-in-out infinite',
        'glow-particle': 'glow-particle 10s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'blob': "blob 7s infinite",
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        { values: theme('transitionDelay') }
      )
    })
  ],
} 