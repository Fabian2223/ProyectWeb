/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,html}', './index.html'],  // Asegúrate de incluir todos los archivos relevantes
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', {
      lego: {
        primary: '#2563eb',
        secondary: '#22d3ee',
        accent: '#f59e0b',
        neutral: '#1f2937',
        'base-100': '#0b1320',
        info: '#60a5fa',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
      }
    }]
  }
};
