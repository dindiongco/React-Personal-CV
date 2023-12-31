/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#8fb4ff",
        "secondary-400": "#001138",
        "accent-400": "#ff8f94",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        black: "900",
      },
      content: {
        patternlayersteps: "url('./assets/layered-steps-haikei.svg')",
        start: "url('./assets/start-timeline.svg')",
        line: "url('./assets/line.svg')",
        circle: "url('./assets/circle.svg')",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1040px",
      },
    },
  },
  plugins: [],
};
