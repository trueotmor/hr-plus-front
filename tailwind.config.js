/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}

