/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      yellow: {
        400: "#FFD700", // Luxurious gold
      },

    },
  },
  plugins: [daisyui],
}