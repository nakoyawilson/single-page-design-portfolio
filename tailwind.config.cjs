/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/main.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Plus Jakarta Sans",
      },
      colors: {
        "project-black": "hsl(0, 0%, 1%)",
        "medium-brown": "hsl(30, 5%, 45%)",
        "light-cream": "hsl(28, 100%, 97%)",
        "galactic-blue": "hsl(252, 66%, 62%)",
        "summer-yellow": "hsl(28, 89%, 67%)",
        "project-pink": "hsl(0, 79%, 79%)",
        "light-red": "hsl(7, 77%, 66%)",
        "project-cyan": "hsl(172, 46%, 57%)",
        "dark-purple": "hsl(314, 46%, 23%)",
      },
    },
  },
  plugins: [],
};
