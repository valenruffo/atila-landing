import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        atila: {
          black: "#0D0D0D",
          white: "#F2F2F2",
          accent: "#41D7A7",
          gray: {
            50: "#F2F2F2",
            100: "#D9D9D9",
            200: "#B3B3B3",
            300: "#8C8C8C",
            400: "#666666",
            500: "#3D3D3D",
            600: "#333333",
            700: "#262626",
            800: "#1A1A1A",
            900: "#0D0D0D",
            950: "#080808",
          },
        },
      },
      fontFamily: {
        praktika: ["'Praktika'", ...defaultTheme.fontFamily.sans],
        sans: ["'Praktika'", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-teal": "pulse-teal 2s infinite",
        "slide-right":
          "slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-teal": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(65, 215, 167, 0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(65, 215, 167, 0)" },
        },
        "slide-right": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
