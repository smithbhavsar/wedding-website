/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        'w-3': 3,
        'h-2': 2,
      },
    },
  },
  plugins: [],
};