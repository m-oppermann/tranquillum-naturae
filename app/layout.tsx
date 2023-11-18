import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { inter } from "@/lib/fonts"
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
          "bg-white font-sans text-black antialiased",
          inter.variable,
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
