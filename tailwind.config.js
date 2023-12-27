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
        gray: {
          50: "#f9fafb",
          100: "#f6f6f6",
          300: "#e1e1e1",
          400: "#b0b0b0",
          600: "#757575",
          "200_7f": "#ededee7f",
        },
        blue_gray: {
          100: "#d9d9d9",
          "100_66": "#d9d9d966",
          "50_4c": "#ebedf24c",
          "800_19": "#44465319",
        },
        blue: { 200: "#97cefc", "300_66": "#6b98f866" },
        red: { 400: "#d55f5a" },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
          "900_05": "#00000005",
        },
        indigo: { 100: "#c4d1ea", 900: "#2c285f" },
        deep_orange: { 100: "#fdb4b4", 200: "#f8bb9e", 300: "#f87b6b" },
        white: { A700: "#ffffff" },
        deep_purple: { A200_66: "#7265ff66" },
      },
      boxShadow: {
        bs4: "0px 4px  4px 0px #d9d9d9",
        bs5: "0px 4px  6px 0px #d9d9d9",
        bs10: "0px 2.25px  2px 0px #c4d1ea",
        bs7: "0px 2.85px  2px 0px #c4d1ea",
        bs1: "0px 3.2px  4px 0px #d9d9d9",
        bs3: "0px 3.52px  3px 0px #c4d1ea",
        bs9: "0px 2.25px  2px 0px #d9d9d9",
        bs8: "0px 2.85px  2px 0px #d9d9d9",
        bs2: "0px 3.52px  3px 0px #d9d9d9",
        bs: "0px 4px  4px 0px #d9d9d966",
        bs6: "0px 1.94px  1px 0px #00000005",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(144deg ,#6b98f866,#7265ff66)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
