// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          light: "#6C63FF",
          DEFAULT: "#3F3D56",
          dark: "#1C1A2F",
        },
        secondary: {
          light: "#FCD7B9",
          DEFAULT: "#FCA311",
          dark: "#C77D0C",
        },
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
