import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { NeueMontreal } from "@/styles/fonts"
import Header from "@/components/Header"

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
          "bg-sand-1 text-sand-8 font-sans font-medium antialiased",
          NeueMontreal.variable,
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
