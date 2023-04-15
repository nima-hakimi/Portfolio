// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
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
  variants: {},
  plugins: [],
};
