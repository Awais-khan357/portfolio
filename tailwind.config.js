/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#8f8f7b",
        "custom-light": "#deddc5",
        // add more custom colors here
      },
    },
  },
  plugins: [],
};
