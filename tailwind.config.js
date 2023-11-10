module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_19": "#00000019" },
        gray: {
          100: "#f5f5f5",
          900: "#1e1e1e",
          "100_87": "#f5f5f587",
          "900_01": "#161b22",
        },
        blue_gray: { 800: "#2a3f6e", "800_a2": "#2a3f6ea2" },
        blue: { 200: "#a9c2f9" },
        orange: { 400: "#ffa633" },
        indigo: { 600: "#3b5a9d" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #00000019" },
      fontFamily: {
        belanosima: "Belanosima",
        jost: "Jost",
        ubuntumono: "Ubuntu Mono",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
