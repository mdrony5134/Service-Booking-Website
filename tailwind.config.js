/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: " 0 0 10px rgba(0, 0, 0, .2)",
      },
      keyframes: {
        mymove: {
          "33%": { top: "0px" },
          "66%": { top: "20px" },
          "100%": { top: "0px" },
        },
      },
      animation: {
        mymove: "mymove 2.5s infinite",
      },
    },
  },
  plugins: [],
};
