/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Crimson Text', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
