"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

interface HeaderProps {
  className?: string
}

export default function HeaderComponent({ className }: HeaderProps) {
  const pathname = usePathname()
  const [text, setText] = useState("Mute")

  const handleClick = () => {
    setText(prevText => (prevText === "Mute" ? "Play" : "Mute"))
  }

  return (
    <header className={clsx("grid grid-cols-12 gap-4 text-lg", className)}>
      <nav className="col-span-3 grid grid-cols-3 gap-4">
        <Link
          href="/"
          className={clsx("col-start-1", pathname === "/" && "font-bold")}
        >
          t-n
        </Link>
        <Link
          className={clsx("col-start-3", pathname === "/about" && "font-bold")}
          href="/about"
        >
          About
        </Link>
      </nav>
      <span
        className="col-start-12 flex cursor-pointer justify-end"
        onClick={handleClick}
      >
        {text}
      </span>
    </header>
  )
}
