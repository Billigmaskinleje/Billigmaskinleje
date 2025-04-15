/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica-now)", "sans-serif"],
        sans: ["var(--font-helvetica-now)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
        black: 900,
      },
      maxWidth: {
        custom_container: "1728px",
      },
      colors: {
        primary: "#FFFF8D",
      },
      fontSize: {
        15: "15px",
        18: "18px",
        20: "20px",
        30: "30px",
        35: "35px",
        75: "75px",
      },
    },
  },
  plugins: [],

  // V4 custom classes
  layer: {
    utilities: {
      ".custom_container": {
        width: "100%",
        "max-width": "1728px",
        "margin-left": "auto",
        "margin-right": "auto",
        "padding-left": "1rem",
        "padding-right": "1rem",
        "@media (min-width: 640px)": {
          "padding-left": "1.5rem",
          "padding-right": "1.5rem",
        },
        "@media (min-width: 1024px)": {
          "padding-left": "2rem",
          "padding-right": "2rem",
        },
      },
    },
  },
};
