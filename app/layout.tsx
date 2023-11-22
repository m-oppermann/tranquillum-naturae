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
          "mx-auto h-screen max-w-[1920px] bg-sand-1 px-4 py-4 font-sans font-medium text-sand-8 antialiased sm:px-6 sm:pb-8 sm:pt-4 2xl:px-8 2xl:pb-10 2xl:pt-6",
          NeueMontreal.variable,
        )}
      >
        <div className="grid h-full grid-rows-6 gap-4">
          <Header className="row-span-1 row-start-1" />
          <main className="row-span-5 row-start-2">{children}</main>
        </div>
      </body>
    </html>
  )
}
