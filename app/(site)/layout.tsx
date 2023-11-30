import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { NeueMontreal } from "@/styles/fonts"
import Providers from "@/components/Providers"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "tranquillum naturae",
  description:
    "A collection of captured moments and thoughts on nature's mystery.",
  openGraph: {
    title: "tranquillum naturae",
    description:
      "A collection of captured moments and thoughts on nature's mystery.",
    url: "https://tranquillum-naturae.com",
    images: {
      url: "/assets/images/preview.jpg",
      width: 1200,
      height: 630,
    },
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tranquillum naturae",
    description:
      "A collection of captured moments and thoughts on nature's mystery.",
    images: "/assets/images/preview.jpg",
  },
  icons: {
    icon: {
      url: "/assets/icons/icon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    apple: {
      url: "/assets/icons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "mx-auto h-screen max-w-[1920px] bg-sand-1 font-sans font-medium text-sand-8 antialiased",
          NeueMontreal.variable,
        )}
      >
        <Providers>
          <div className="grid h-full grid-rows-6 gap-4 px-4 py-4 sm:px-6 sm:pb-8 sm:pt-4 2xl:px-8 2xl:pb-10 2xl:pt-6">
            <Header className="row-span-1 row-start-1" />
            <main className="row-span-5 row-start-2">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
