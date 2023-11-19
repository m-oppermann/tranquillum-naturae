import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      sans: ["var(--font-neue-montreal)", "sans-serif"],
      serif: ["var(--font-editorial-old)", "serif"],
    },
    colors: {
      sand: {
        1: "hsl(60, 20%, 99%)",
        2: "hsl(60, 12%, 97%)",
        3: "hsl(60, 8%, 94%)",
        4: "hsl(60, 6%, 88%)",
        5: "hsl(60, 6%, 80%)",
        6: "hsl(60, 4%, 54%)",
        7: "hsl(60, 4%, 38%)",
        8: "hsl(60, 8%, 12%)",
      },
    },
    extend: {
      screens: {
        "-sm": { max: "639px" },
        "-md": { max: "767px" },
        "-lg": { max: "1023px" },
        "-xl": { max: "1279px" },
        "-2xl": { max: "1535px" },
      },
    },
  },
  plugins: [],
}

export default config
