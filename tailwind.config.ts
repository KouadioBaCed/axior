import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#407A4B",
          50: "#f0f6f1",
          100: "#dcebde",
          200: "#bbd7bf",
          300: "#8fbb96",
          400: "#5f9a69",
          500: "#407A4B",
          600: "#356641",
          700: "#2c5235",
          800: "#26432d",
          900: "#203827",
          950: "#0f1f15",
        },
        graphite: {
          DEFAULT: "#636462",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d0",
          300: "#b0b0af",
          400: "#888887",
          500: "#6d6d6c",
          600: "#636462",
          700: "#515150",
          800: "#454544",
          900: "#3c3c3b",
          950: "#262625",
        },
        // Warm earthy accent — complements the brand green and adds warmth.
        accent: {
          DEFAULT: "#C8842B",
          50: "#fdf8ef",
          100: "#faeccf",
          200: "#f3d79a",
          300: "#ebbd63",
          400: "#e2a23a",
          500: "#d4881f",
          600: "#C8842B",
          700: "#934f18",
          800: "#793f1a",
          900: "#663518",
          950: "#3a1c0a",
        },
        // Warm off-white surface so large areas never feel cold/clinical.
        sand: {
          50: "#faf8f4",
          100: "#f4efe7",
          200: "#e9e1d3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(16, 31, 21, 0.06), 0 8px 24px -8px rgba(16, 31, 21, 0.10)",
        card: "0 1px 2px rgba(16, 31, 21, 0.04), 0 12px 32px -12px rgba(16, 31, 21, 0.14)",
        glow: "0 12px 40px -12px rgba(64, 122, 75, 0.45)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(99,100,98,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,100,98,0.06) 1px, transparent 1px)",
        "dots-light":
          "radial-gradient(rgba(64,122,75,0.18) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(120% 120% at 0% 0%, #407A4B 0%, #2c5235 45%, #1a3220 100%)",
        "brand-mesh":
          "radial-gradient(60% 80% at 15% 10%, rgba(95,154,105,0.55) 0%, transparent 55%), radial-gradient(50% 70% at 90% 20%, rgba(200,132,43,0.30) 0%, transparent 55%), radial-gradient(70% 90% at 70% 100%, rgba(44,82,53,0.85) 0%, transparent 60%), linear-gradient(140deg, #2c5235 0%, #1a3220 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
