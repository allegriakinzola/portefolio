const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Support for React, Vue, etc.
  ],
  darkMode: "class", // Enable dark mode via a class
  theme: {
    extend: {
      
      // Ajout des animations "marquee", "spotlight" et "slowGlow"
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(2)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(2)" },
        },
        slowGlow: {
          '0%': { opacity: 0.1, transform: 'translateX(-100%)' }, // Part à gauche, hors du conteneur
          '50%': { opacity: 0.4, transform: 'translateX(0%)' },   // Passe au centre du conteneur
          '100%': { opacity: 0.1, transform: 'translateX(100%)' }, // Sort par la droite, hors du conteneur
        },
      },
      animation: {
        'marquee-left': 'marqueeLeft 20s linear infinite',
        'marquee-right': 'marqueeRight 20s linear infinite',
        'slow-glow': 'slowGlow 8s ease-in-out infinite', // Durée ajustée pour l'effet fluide
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [
    // Plugin to add colors as CSS variables
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
      
      addBase({
        ":root": newVars,
      });
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
