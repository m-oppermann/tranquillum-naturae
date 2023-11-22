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
    <header
      className={clsx(
        "grid grid-cols-4 gap-4 text-sm sm:grid-cols-6 sm:text-base lg:grid-cols-8 xl:grid-cols-12 2xl:text-lg",
        className,
      )}
    >
      <nav className="col-span-2 col-start-1 grid grid-cols-2 place-items-start gap-4 xl:col-span-3 xl:grid-cols-3">
        <Link
          href="/"
          className={clsx("col-start-1", pathname === "/" && "font-bold")}
        >
          t-n
        </Link>
        <Link
          className={clsx(
            "col-start-2 xl:col-start-3",
            pathname === "/about" && "font-bold",
          )}
          href="/about"
        >
          About
        </Link>
      </nav>
      <span
        className="col-start-4 cursor-pointer self-start justify-self-end sm:col-start-6 lg:col-start-8 lg:grid xl:col-start-12"
        onClick={handleClick}
      >
        {text}
      </span>
    </header>
  )
}
