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
      borderRadius: {
        ten: "0.625rem",
        "twenty-eight": "1.75rem",
      },
      lineHeight: {
        "twenty-six": "1.625rem",
        thirty: "1.875rems",
        "thirty-three": "2.0625rem",
        "forty-five": "2.8125rem",
      },
      width: {
        "mobile-avatar": "300px",
        "mobile-container": "min(91.46667%, 343px)",
        "mobile-paragraph": "min(100%, 285px)",
        "mobile-slide": "min(100%, 270px)",
      },
      height: {
        "one-five-eight": "9.875rem",
        "one-eight-two": "11.375rem",
        "three-six-four": "22.75rem",
      },
      fontSize: {
        "twenty-six": "1.625rem",
      },
      margin: {
        "one-hundred": "6.25rem",
        thirty: "1.875rem",
      },
      backgroundImage: {
        "apps-pattern": "url('./src/assets/pattern-apps.svg')",
        "graphic-design-pattern":
          "url('./src/assets/pattern-graphic-design.svg')",
        "illustrations-pattern":
          "url('./src/assets/pattern-illustrations.svg')",
        "motion-graphics-pattern":
          "url('./src/assets/pattern-motion-graphics.svg')",
        "photography-pattern": "url('./src/assets/pattern-photography.svg')",
        "ui-ux-pattern": "url('./src/assets/pattern-ui-ux.svg')",
      },
      backgroundPosition: {
        "right-top": "right 1.5rem top 1.5rem",
      },
      gap: {
        slider: "1.875rem",
      },
    },
  },
  plugins: [],
};
