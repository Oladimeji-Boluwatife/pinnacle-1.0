const path = require("path");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideshow: "slideshow 15s infinite",
      },
      keyframes: {
        slideshow: {
          "0%": {
            backgroundImage: `url(${path.resolve(
              __dirname,
              "src/assets/images/showcase9.avif"
            )})`,
          },
          "33%": {
            backgroundImage: `url(${path.resolve(
              __dirname,
              "src/assets/images/showcase10.webp"
            )})`,
          },
          "66%": {
            backgroundImage: `url(${path.resolve(
              __dirname,
              "src/assets/images/showcase11.avif"
            )})`,
          },
          "100%": {
            backgroundImage: `url(${path.resolve(
              __dirname,
              "src/assets/images/showcase9.avif"
            )})`,
          },
        },
      },
    },
  },
  plugins: [],
};
