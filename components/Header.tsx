"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Howl } from "howler"
import clsx from "clsx"

interface HeaderProps {
  className?: string
  setIsHovering?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderComponent({
  className,
  setIsHovering,
}: HeaderProps) {
  const pathname = usePathname()
  const [isPlaying, setIsPlaying] = useState(false)

  const sound = useRef(
    new Howl({
      src: ["/audio/sound.mp3"],
      volume: 0.05,
      loop: true,
    }),
  )

  useEffect(() => {
    const currentSound = sound.current

    return () => {
      currentSound.stop()
    }
  }, [])

  const handleSwitch = () => {
    isPlaying ? sound.current.mute(true) : sound.current.play()
    setIsPlaying(!isPlaying)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
  }

  const handleLinkMouseEnter = () => {
    setIsHovering && setIsHovering(true)
  }

  const handleLinkMouseLeave = () => {
    setIsHovering && setIsHovering(false)
  }

  return (
    <header
      className={clsx(
        "row-span-1 row-start-1 grid grid-cols-4 gap-4 text-sm sm:grid-cols-6 sm:text-base lg:grid-cols-8 xl:grid-cols-12 2xl:text-lg",
        className,
      )}
    >
      <nav className="col-span-2 col-start-1 grid grid-cols-2 place-items-start gap-4 xl:col-span-3 xl:grid-cols-3">
        <Link
          href="/"
          className={clsx("col-start-1", pathname === "/" && "font-bold")}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          t-n
        </Link>
        <Link
          href="/about"
          className={clsx(
            "col-start-2 xl:col-start-3",
            pathname === "/about" && "font-bold",
          )}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          About
        </Link>
      </nav>
      <span
        className="col-start-4 cursor-pointer self-start justify-self-end sm:col-start-6 lg:col-start-8 lg:grid xl:col-start-12"
        onClick={event => {
          handleLinkClick(event)
          handleSwitch()
        }}
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        {isPlaying ? "Mute" : "Play"}
      </span>
    </header>
  )
}
