/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#191b19",
        placeholder: "#191b196e",
        green: "#094f0c", // primary button bg
        "green-light": "#e0f9c8", // week day bg color
        "green-light-2": "#c2f291", // primary button text (active)
      },
    },
  },
  plugins: [],
};
