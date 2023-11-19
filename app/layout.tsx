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
          "bg-sand-1 text-sand-8 grid h-screen grid-cols-12 grid-rows-6 gap-4 px-8 py-6 font-sans font-medium antialiased",
          NeueMontreal.variable,
        )}
      >
        <Header className="col-span-12 row-span-1 row-start-1" />
        <main className="col-span-12 row-span-5 row-start-2">{children}</main>
      </body>
    </html>
  )
}
