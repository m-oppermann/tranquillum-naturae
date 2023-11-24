import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { NeueMontreal } from "@/styles/fonts"

export const metadata: Metadata = {
  title: "New Project",
  description: "Starter code for new project.",
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
        {children}
      </body>
    </html>
  )
}
