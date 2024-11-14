/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Humane: ["Humane", "Nunito-Regular"],
        AmulyaMedium: ["Amulya-medium", "Nunito-Regular"],
        Organetto: ["Organetto", "Nunito-Regular"],
      },
      colors: {
        mianYellow: "#d5ff3f",
        blackBlue: "#161b22",
        greyText: "#6c757d",
        bodyBlack: "#0d1117",

      },
      animation: {
        rotate: "rotate 10s linear infinite",
        slideSkills:"slideSkills 12s linear infinite"
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        slideSkills:{
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
    },
  },
  plugins: [],
};
