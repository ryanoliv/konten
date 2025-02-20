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
        lightGreen: "#00cc45",
        green: "#287742",
        darkGreen: "#29332c",
        darkestGreen: "#040504",
        white: "#edf3f5",
        grey: "#d8dbe2",
        yellow: "#cca400",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        grotesque: ["var(--font-grotesque)", "sans-serif"],
        franchise: ["Franchise", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial-gradient":
          "radial-gradient(at 81% 62%, #287742 0px, transparent 50%), radial-gradient(at 25% 37%, #00cc45 0px, transparent 50%), #040504",
      },
    },
  },
  plugins: [],
};
export default config;
