import type { Config } from "tailwindcss";
import tailwindcssAnimated from "tailwindcss-animated";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F7F7F7",
        black: "#000000",
        "bg-dark": "#0C0C0C",
        "bg-light": "#F7F7F7",
        "line-dark": "#535353",
        "line-light": "#ADADAD",
      },
    },
  },
  plugins: [tailwindcssAnimated],
  darkMode: "class",
};
export default config;
