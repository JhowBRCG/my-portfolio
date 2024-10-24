import type { Config } from "tailwindcss";
import tailwindcssAnimated from "tailwindcss-animated";
import tailwindcssIntersect from "tailwindcss-intersect";

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
      backgroundImage: {
        "about-mobile-dark": "url('/images/bg-about-mobile-dark.svg')",
        "about-mobile-light": "url('/images/bg-about-mobile-light.svg')",
        "about-desktop-dark": "url('/images/bg-about-desktop-dark.svg')",
        "about-desktop-light": "url('/images/bg-about-desktop-light.svg')",
      },
    },
  },
  plugins: [tailwindcssAnimated, tailwindcssIntersect],
  darkMode: "class",
};
export default config;
