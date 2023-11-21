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
    fontSize: {
      xs: ["0.75rem", "160%"],
      sm: ["0.875rem", "160%"],
      base: ["1rem", "140%"],
      lg: ["1.125rem", "140%"],
      xl: ["1.25rem", "140%"],
      "2xl": ["1.5rem", "130%"],
      "3xl": ["2rem", "130%"],
      "4xl": ["2.5rem", "130%"],
      "5xl": ["3rem", "120%"],
      "6xl": ["3.75rem", "120%"],
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
