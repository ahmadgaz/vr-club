import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "6rem",
      "8xl": "7rem",
      "9xl": "9rem",
    },
    extend: {
      dropShadow: {
        "3xl": "0px 10px 30px rgba(0, 0, 0, 0.1)",
        "4xl": "0px 10px 30px rgba(0, 0, 0, 0.3)",
        "5xl": "0px 10px 30px rgba(0, 0, 0, 0.70)",
        "6xl": "0px 10px 30px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        "azo-sans": ["azo-sans-web", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
