import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-gold": "#DDBA83",
        "brand-cream": "#FFFCF7",
        "brand-navy": "#2B425D",
      },
    },
  },
  plugins: [],
};

export default config;
