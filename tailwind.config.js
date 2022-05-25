module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#12abbd",
      secondary: "#abd037",
      tertiary: "#e82443",
      test: "#d90389",
      test2: "#242021",
    },
    extend: {
      fontFamily: {
        serif: ["Znikomit", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
