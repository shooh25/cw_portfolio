/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans JP", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      colors: {
        "black": "#000000",
        "white": "#ffffff",
      }
    },
  },
  plugins: [],
};
