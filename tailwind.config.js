/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Permet de scanner les fichiers React
  ],
  theme: {
    extend: {
      // Ajout des utilitaires pour les préférences de mouvement
      screens: {
        'motion-safe': { 'raw': '(prefers-reduced-motion: no-preference)' },
        'motion-reduce': { 'raw': '(prefers-reduced-motion: reduce)' },
      },
    },
  },
  plugins: [
    // Ajout d'une variante pour le mode contraste élevé
    plugin(function({ addVariant }) {
      addVariant('high-contrast', '.high-contrast &');
    }),
  ],
};
