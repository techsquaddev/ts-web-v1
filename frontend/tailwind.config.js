/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      primary: "#27272a", //#333333
      secondary: "#3f3f46", //#525252
      accent: "#F0DB4F",
      white: "#FFFFFF",
      bg: "#f4f4f5", //#f4f4f4
      border: "#d4d4d8", //#cccccc
      black: "#18181b", //#222222
      gray: "#52525b",
      "soft-gray": "#e4e4e7", //#e2e2e2
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
