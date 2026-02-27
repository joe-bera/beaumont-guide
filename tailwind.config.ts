import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B365D",
          deep: "#0f2240",
          light: "#2a4a7f",
        },
        gold: {
          DEFAULT: "#C5A258",
          light: "#f5ecd5",
          dark: "#a8893f",
        },
        cream: "#f8f7f4",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      maxWidth: {
        content: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
