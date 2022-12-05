/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      borderColor: {
        color: "#000000",
      },
      borderRadius: {
        borderRadius: "8px",
      },
      backgroundColor: {
        backgroundColor: "#313949",
      },

      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
    },
  },
  plugins: [],
};
