/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  important: true,
  theme: {
    fontFamily: {
      primary: ['Lora', 'Georgia', 'serif'],
      secondary: ['Inter', 'system-ui', 'sans-serif'],
      tertiary: ['Inter', 'system-ui', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0f172a',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};
