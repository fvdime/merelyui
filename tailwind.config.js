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
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
