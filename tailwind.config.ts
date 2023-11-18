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
      sans: ["var(--font-inter)"],
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
