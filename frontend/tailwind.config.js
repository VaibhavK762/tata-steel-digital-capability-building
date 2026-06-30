/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E4D8F', // Primary Blue
          light: '#3082F6',   // Primary Light
          dark: '#1E3A8F',    // Primary Dark
        },
        accent: '#06B6D4',    // Accent Blue
        success: '#10B981',   // Success Green
        warning: '#F59E0B',   // Warning Orange
        danger: '#EF4444',    // Error Red
        neutral: '#64748B',   // Neutral Gray
        background: '#F8FAFC', // Background
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '6px',
      },
    },
  },
  plugins: [],
}
