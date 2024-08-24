/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#333333",
      secondary: "#525252",
      accent: "#F0DB4F",
      white: "#FFFFFF",
      bg: "#f4f4f4",
      border: "#cccccc",
      black: "#222222",
    },
    extend: {},
  },
  plugins: [],
};
