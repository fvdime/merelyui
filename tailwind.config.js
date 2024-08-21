/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    // lib only
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        base: withOpacity('--color-text-base'),
        soft: withOpacity('--color-text-soft'),
        muted: withOpacity('--color-text-muted'),
        inverted: withOpacity('--color-text-inverted'),
      },
      backgroundColor: {
        fill: withOpacity('--color-fill'),
        muted: withOpacity('--color-muted'),
        inverted: withOpacity('--color-inverted'),
        'button-accent': withOpacity('--color-button-accent'),
        'button-accent-hover': withOpacity('--color-button-accent-hover'),
        'button-muted': withOpacity('--color-button-muted'),
        'button-destructive': withOpacity('--color-button-destructive'),
        'button-destructive-hover': withOpacity('--color-button-destructive-hover'),
      },
      borderColor: {
        base: withOpacity('--color-border-base'),
        muted: withOpacity('--color-border-muted'),
        inverted: withOpacity('--color-border-inverted'),
        info: withOpacity('--color-border-info'),
        success: withOpacity('--color-border-success'),
        danger: withOpacity('--color-border-danger'),
        warning: withOpacity('--color-border-warning'),
      },
      outlineColor: {
        base: withOpacity('--color-outline-base'),
        muted: withOpacity('--color-outline-muted'),
        inverted: withOpacity('--color-outline-inverted'),
      },
      ringColor: {
        base: withOpacity('--color-ring-base'),
        muted: withOpacity('--color-ring-muted'),
        inverted: withOpacity('--color-ring-inverted'),
      },
      gradientColorStops: {
        hue: withOpacity('--color-fill'),
      },
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
  darkMode: "class",
};