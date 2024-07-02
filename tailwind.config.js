/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        BrightGreen: "#beef00",
        ElectricRed: "#ff0028",
        DeepGreen: "#657a00",
        PowerBlue: "#1400c6",
      },
    },
  },
  plugins: [],
};
