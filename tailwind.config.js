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
            transform: 'translateY(0px)',
          },
        },
      },
      zoomIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,          },
          "100%": {
            opacity: 1,
          },
        },
        zoomOut: {
          "0%": {
            opacity: 1,
          },
          "15%": {
            opacity: 0.8,
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
        },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        zoomIn: "zoom-in 1s ease-out 0.25s 1",
        zoomOut: "zoom-out 1s ease-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
