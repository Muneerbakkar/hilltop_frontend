/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // slideInUp: {
        //   "0%": { transform: "translateY(100%)", opacity: "0" },
        //   "100%": { transform: "translateY(0)", opacity: "1" },
        // },
        // slideInUpRight: {
        //   "0%": { transform: "translate(50%, 100%)", opacity: "0" }, // Start from bottom-right
        //   "100%": { transform: "translate(0, 0)", opacity: "1" }, // End at original position
        // },
      },
      animation: {
        slideInUp: "slideInUp 1.5s ease-out",
        slideInUpRight: "slideInUpRight 1.5s ease-out", // New animation
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
  plugins: [],
};
