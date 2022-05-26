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
    animation: {
      "pulse-3": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "pulse-2": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "pulse-1": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
