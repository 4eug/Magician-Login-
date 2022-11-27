/* eslint-disable no-undef */
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxsm: "340px",
      xsm: "480px",
      ...screens
    },
    
    colors: {
      "magician-purple-primary": "#4D0CAD",
      "magician-purple-secondary": "#8042DE",
    },
    
    fontSize: {
      "magician-xxlg": "28px",
        "magician-xlg": "24px",
        "magician-lg": "20px",
        "magician-lg-b": "18px",
        "magician-md": "16px",--
        "magician-sm": "14px",
        "magician-xsm": "12px",
        "magician-xsm-2": "13px",
        "magician-xxsm": "10px",
        "magician-xxxsm": "7px",
    },

    height: {
      "magician-px-18": "18px",
      "magician-px-48": "48px",
      "magician-px-56": "56px"
    },

    width: {
      "magician-px-368": "368px",
      "magician-px-312": "312px",
    },

    fontFamily: {
      "magician-poppins": "Poppins"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
