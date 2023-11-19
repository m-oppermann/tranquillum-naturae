import localFont from "next/font/local"

export const NeueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue-montreal",
})

export const EditorialOld = localFont({
  src: [
    {
      path: "./fonts/PPEditorialOld-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialOld-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-editorial-old",
})
