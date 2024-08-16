/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // lib only
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: { 
          '0%': { 
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "100%": {
            opacity: 1,
            transform: "scale3d(1, 1, 1)",
          },
        },
        zoomOut: {
          "0%": {
            opacity: 1,
            transform: "scale3d(1, 1, 1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        slideInUp: {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideOutDown: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(0, 100%, 0)",
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        zoomIn: "zoomIn 1s ease-out 0.25s 1",
        zoomOut: "zoomOut 1s ease-out 0.25s 1",
        fadeIn: 'fadeIn 1s ease-in-out 0.25s 1',
        fadeOut: 'fadeOut 1s ease-out 0.25s 1',
        slideInUp: 'slideInUp 1s ease-in-out 0.25s 1',
        slideOutDown: 'slideOutDown 1s ease-in-out 0.25s 1',
      },
    },
  },
  plugins: [],
};