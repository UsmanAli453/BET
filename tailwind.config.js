/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ["'League Spartan'", "sans-serif"],
      },
      colors: {
        CustomYellow: "#F3C110",
        CustomBlue: "#56A9F6",
        CustomBlack: "#333333",
        CustomWhite: "#ffffff", 
        CustomDark: "#1a1a1a", 
      },
    },
  },
  plugins: [],
};
