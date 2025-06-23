/** @type {import('tailwindcss').Config} */
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
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'glow': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
        },
        'float-tech': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '0.1',
          },
          '25%': {
            transform: 'translateY(-30px) translateX(20px) rotate(90deg)',
            opacity: '0.25',
          },
          '50%': {
            transform: 'translateY(20px) translateX(-20px) rotate(180deg)',
            opacity: '0.1',
          },
          '75%': {
            transform: 'translateY(-10px) translateX(30px) rotate(270deg)',
            opacity: '0.2',
          },
        },
        'glow-particle': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0.3',
            filter: 'blur(2px)',
          },
          '50%': {
            transform: 'translateY(-50px) translateX(30px)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      animation: {
        'fade-in': '0.5s fade-in ease-out',
        'fade-in-up': '0.5s fade-in-up ease-out',
        'glow': '5s glow ease-in-out infinite',
        'float-tech': 'float-tech 20s ease-in-out infinite',
        'glow-particle': 'glow-particle 10s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [],
} 