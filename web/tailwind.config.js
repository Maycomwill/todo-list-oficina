/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern:
          "linear-gradient(to bottom, rgb(29, 78, 216, 0.94), rgb(30, 58, 138, 0.98)), url('./pattern.jpg')",
      },
    },
  },
  plugins: [],
};
