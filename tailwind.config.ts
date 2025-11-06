import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        ink: {
          500: "#3A2E39",
          700: "#26202A"
        }
      },
      backgroundImage: {
        parchment: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9), rgba(247,241,229,0.8)), radial-gradient(circle at 80% 0%, rgba(242,228,203,0.6), transparent 50%), radial-gradient(circle at 50% 80%, rgba(227,197,166,0.7), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
