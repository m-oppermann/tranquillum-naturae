"use client"

import { use, useContext } from "react"
import { SoundContext, CursorContext } from "@/utils/contexts"
import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"
import { NavigationType } from "@/sanity/types"
import { getNavigation } from "@/sanity/lib/query"

interface HeaderProps {
  className?: string
}

const navigationFetch = getNavigation()

export default function Header({ className }: HeaderProps) {
  const [navigation]: NavigationType[] = use(navigationFetch)
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
          href={"/"}
          className={clsx("col-start-1", pathname === "/" && "font-bold")}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          {navigation.homeLinkName}
        </Link>
        <Link
          href={navigation.infoRoute.current}
          className={clsx(
            "col-start-2 xl:col-start-3",
            pathname === navigation.infoRoute.current && "font-bold",
          )}
          onClick={handleLinkClick}
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
        >
          {navigation.infoLinkName}
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
