import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "t-n - Sanity",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
