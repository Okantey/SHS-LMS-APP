/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App/**/*.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8300",
        white: "#ffffff",
        black: "#000000",
        smoke: "#F5F5F5",
        blue: "#3b82f6"
      },
    },
  },
  plugins: [],
}
