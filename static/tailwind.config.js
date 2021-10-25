module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        DEFAULT: "#3F758D",
      },
      gold: {
        DEFAULT: "#EDDBAE",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },

      white: {
        dark: "#ebebeb",
        DEFAULT: "#fff",
      },
    },
    extend: {
      backgroundImage: {
        unicorn: "url('../img/finance-unicorn.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
