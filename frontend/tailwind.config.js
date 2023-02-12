/** @type {import('tailwindcss').Config} */
module.exports = {
  // need to add jsx as well (this is copied from tailwind documentation)
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  // mode: - allows us to get extra features out of tailwind and allows better modification, build times are faster as well
  mode: "jit",
  // will get rid of any css that's not getting used when being deployed. It actually might be ./public/index.html
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#dc4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "side-bar-bg": "#2c2f45",
        "side-bar-text-grey": "#828589",
        "main-section-bg": "#222529",
        "main-tab-text": "#b9bec2",
        "section-block-bg": "#2a2d32",
        "section-text-white": "#f4f6fb",
        "section-text-grey": "#828589",
        "important-text-white": "#ffffff",
        "scroll-grey": "#888889",
        "hover-text": "#333333",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-test": "linear-gradient(to right,  #000000, #ffffff)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      fontSize: {
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
