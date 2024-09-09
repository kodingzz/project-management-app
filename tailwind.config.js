/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: {
            transform: "translateY(-15%)",
          opacity: 0},
          to: {
            transform:"translateY(0)",
          opacity:1
        }
        }
      },
      animation:{
        slide: "slide 0.5s ease-in-out",
      }
    },
  },
  plugins: [],
};
