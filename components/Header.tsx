"use client"

import { useContext } from "react"
import { SoundContext, CursorContext } from "@/utils/contexts"
import { usePathname } from "next/navigation"
import { ROUTES } from "@/utils/routes"
import Link from "next/link"
import clsx from "clsx"

interface HeaderComponentProps {
  className?: string
}

export default function HeaderComponent({ className }: HeaderComponentProps) {
  const pathname = usePathname()

  const { isPlaying, handleSwitch } = useContext(SoundContext)
  const { setIsHovering } = useContext(CursorContext)

  const handleLinkClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
  }

  const handleLinkMouseEnter = () => {
    setIsHovering(true)
  }

  const handleLinkMouseLeave = () => {
    setIsHovering(false)
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
          href={ROUTES.HOME}
          className={clsx(
            "col-start-1",
            pathname === ROUTES.HOME && "font-bold",
          )}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          t-n
        </Link>
        <Link
          href={ROUTES.ABOUT}
          className={clsx(
            "col-start-2 xl:col-start-3",
            pathname === ROUTES.ABOUT && "font-bold",
          )}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          About
        </Link>
      </nav>
      <button
        className="col-start-4 cursor-pointer self-start justify-self-end sm:col-start-6 lg:col-start-8 lg:grid xl:col-start-12"
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
        onClick={event => {
          handleLinkClick(event)
          handleSwitch()
        }}
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        {isPlaying ? "Mute" : "Play"}
      </button>
    </header>
  )
}
